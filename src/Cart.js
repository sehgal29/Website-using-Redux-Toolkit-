import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Card, Button } from 'react-bootstrap';
import { BsCartXFill } from "react-icons/bs";
import { remove } from './features/counter/counterSlice';

const Cart = () => {
  const addCart = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  function RemoveFunc(id) {
    dispatch(remove(id));
  }

  return (
    <div>
      {addCart.length === 0 ? (
        <div className="text-center text-muted my-5">
          <h3 className='d-flex  justify-content-center align-items-center gap-2' style={{fontSize:'40px'}}>Your cart is empty <BsCartXFill style={{ fontSize: '35px' }}/> </h3>
        </div>
      ) : (
        <div className="d-flex flex-wrap justify-content-center gap-4">
          {addCart.map((product) => (
            <Card key={product.id} style={{ width: '22rem' }} className="product-card shadow">
              <Card.Img
                variant="top"
                src={product.thumbnail || product.images[0]}
                className="product-img"
              />
              <Card.Body>
                <Card.Title>{product.title.length > 25 ? product.title.slice(0, 22) + "..." : product.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {product.brand} - {product.category}
                </Card.Subtitle>
                <Card.Text style={{ height: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {product.description}
                </Card.Text>
                <Card.Text>
                  <strong>Price:</strong> ${product.price} <br />
                  <strong>Discount:</strong> {product.discountPercentage}% <br />
                </Card.Text>
                <Card.Footer style={{ backgroundColor: "#fff" }}>
                  <Button
                    className="button-addcart"
                    onClick={() => RemoveFunc(product.id)}
                    variant="danger"
                  >
                    Remove From Cart
                  </Button>
                </Card.Footer>
              </Card.Body>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
