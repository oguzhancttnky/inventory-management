import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "./ProductCard";
import { Button, Container } from "react-bootstrap";
import ProductForm from "./ProductForm";

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
}

const ProductList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editProductId, setEditProductId] = useState<number | null>(null);
  const [updatedProduct, setUpdatedProduct] = useState<Partial<Product>>({});
  const [isAdding, setIsAdding] = useState(false);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8080/api/products");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products", error);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      await axios.delete(`http://localhost:8080/api/products/${id}`);
      fetchProducts();
    } catch (error) {
      console.error("Error deleting product", error);
    }
  };

  const handleEdit = (product: Product) => {
    setEditProductId(product.id);
    setUpdatedProduct({ ...product });
  };

  const handleUpdate = async () => {
    if (editProductId) {
      try {
        await axios.put(
          `http://localhost:8080/api/products/${editProductId}`,
          updatedProduct
        );
        setEditProductId(null);
        fetchProducts();
      } catch (error) {
        console.error("Error updating product", error);
      }
    }
  };

  const handleCancel = () => {
    setEditProductId(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUpdatedProduct((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Container className="App">
      <h1>Product List</h1>
      <Button onClick={() => setIsAdding(true)} variant="primary">
        Add Product
      </Button>
      {isAdding && (
        <div className="add-product-form mt-4">
          <ProductForm
            fetchProducts={fetchProducts}
            setIsAdding={setIsAdding}
          />
        </div>
      )}
      <div className="d-flex flex-wrap justify-content-between">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            description={product.description}
            quantity={product.quantity}
            price={product.price}
            onEdit={() => handleEdit(product)}
            onDelete={() => handleDelete(product.id)}
            isEditing={editProductId === product.id}
            updatedProduct={updatedProduct}
            handleChange={handleChange}
            handleUpdate={handleUpdate}
            handleCancel={handleCancel}
          />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
