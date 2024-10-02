import React from "react";
import { Card, Button } from "react-bootstrap";

interface Product {
  id: number;
  name: string;
  description: string;
  quantity: number;
  price: number;
  onEdit: () => void;
  onDelete: () => void;
  isEditing: boolean;
  updatedProduct: Partial<Product>;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleUpdate: () => void;
  handleCancel: () => void;
}

const ProductCard: React.FC<Product> = ({
  id,
  name,
  description,
  quantity,
  price,
  onEdit,
  onDelete,
  isEditing,
  updatedProduct,
  handleChange,
  handleUpdate,
  handleCancel,
}) => {
  return (
    <Card className="mb-3">
      <Card.Body>
        <Card.Title>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={updatedProduct.name}
              onChange={handleChange}
              placeholder="Name"
            />
          ) : (
            name
          )}
        </Card.Title>
        <Card.Text>
          {isEditing ? (
            <input
              type="text"
              name="description"
              value={updatedProduct.description}
              onChange={handleChange}
              placeholder="Description"
            />
          ) : (
            description
          )}
        </Card.Text>
        <Card.Text>
          Price:{" "}
          {isEditing ? (
            <input
              type="number"
              name="price"
              value={updatedProduct.price}
              onChange={handleChange}
              placeholder="Price"
            />
          ) : (
            `$${price}`
          )}
        </Card.Text>
        <Card.Text>
          Quantity:{" "}
          {isEditing ? (
            <input
              type="number"
              name="quantity"
              value={updatedProduct.quantity}
              onChange={handleChange}
              placeholder="Quantity"
            />
          ) : (
            quantity
          )}
        </Card.Text>
        <div className="d-flex justify-content-between">
          {isEditing ? (
            <>
              <Button variant="success" onClick={handleUpdate}>
                Confirm
              </Button>
              <Button variant="secondary" onClick={handleCancel}>
                Cancel
              </Button>
            </>
          ) : (
            <>
              <Button variant="primary" onClick={onEdit}>
                Update
              </Button>
              <Button variant="danger" onClick={onDelete}>
                Delete
              </Button>
            </>
          )}
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
