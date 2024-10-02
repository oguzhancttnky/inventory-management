import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import axios from "axios";

interface ProductFormProps {
  fetchProducts: () => void;
  setIsAdding: (isAdding: boolean) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  fetchProducts,
  setIsAdding,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:8080/api/products", formData);
      fetchProducts();
      setIsAdding(false);
    } catch (error) {
      console.error("Error saving product", error);
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="mb-3">
      <Form.Group controlId="formName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Enter product name"
          required
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Enter product description"
          required
        />
      </Form.Group>
      <Form.Group controlId="formPrice">
        <Form.Label>Price</Form.Label>
        <Form.Control
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="00.00"
          step="0.01"
          min="0"
          required
        />
      </Form.Group>
      <Form.Group controlId="formQuantity">
        <Form.Label>Quantity</Form.Label>
        <Form.Control
          type="number"
          name="quantity"
          value={formData.quantity}
          onChange={handleChange}
          placeholder="0"
          min="0"
          required
        />
      </Form.Group>
      <Button variant="success" type="submit">
        Confirm
      </Button>
      <Button variant="secondary" onClick={() => setIsAdding(false)}>
        Cancel
      </Button>
    </Form>
  );
};

export default ProductForm;
