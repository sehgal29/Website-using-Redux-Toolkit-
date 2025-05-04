import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from './features/counter/counterSlice';
import { BsCartXFill } from "react-icons/bs";
import { Table, Button } from 'react-bootstrap';

const Amount = () => {
  const cart = useSelector(state => state.counter); // Make sure this matches your reducer key
  const dispatch = useDispatch();

  const total = cart?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  return (
    <div className="container mt-5">
      {cart.length === 0 ? (
        <div className="text-center text-muted my-5">
          <h3 className="d-flex justify-content-center align-items-center gap-2" style={{ fontSize: '40px' }}>
            No items in cart <BsCartXFill style={{ fontSize: '35px' }} />
          </h3>
        </div>

      ) : (
        <>
          <Table striped bordered hover className="table">
            <thead>
              <tr>
                <th>Product</th>
                <th>Brand</th>
                <th>Category</th>
                <th>Price (1x)</th>
                <th>Quantity</th>
                <th>Subtotal</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map(item => (
                <tr key={item.id}>
                  <td data-label="Product">{item.title}</td>
                  <td data-label="Brand">{item.brand}</td>
                  <td data-label="Category">{item.category}</td>
                  <td data-label="Price">${item.price}</td>
                  <td data-label="Quantity">{item.quantity}</td>
                  <td data-label="Subtotal">${(item.price * item.quantity).toFixed(2)}</td>
                  <td data-label="Action">
                    <Button variant="danger" onClick={() => dispatch(remove(item.id))}>
                      Remove
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>

          </Table>
          <div className="text-end mt-4">
            <h4>Total: ${total.toFixed(2)}</h4>
          </div>
        </>
      )}
    </div>
  );
};

export default Amount;
