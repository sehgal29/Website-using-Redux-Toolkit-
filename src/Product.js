import React, { useEffect, useState } from 'react';
import { Card, Button, Spinner, Nav } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { add } from './features/counter/counterSlice';

const Product = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const dispatch = useDispatch();

  function incrementFunc(product) {
    dispatch(add(product));
  }

  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(resp => {
        const products = resp.products;
        const uniqueCategories = ['All', ...new Set(products.map(p => p.category))];
        setCategories(uniqueCategories);
        setData(products);
        setFilteredData(products);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error fetching products:", err);
        setLoading(false);
      });
  }, []);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredData(data);
    } else {
      setFilteredData(data.filter(item => item.category === category));
    }
  };

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ height: '50vh' }}>
        <Spinner animation="border" variant="dark" />
        <span className="ms-2">Loading products...</span>
      </div>
    );
  }

  return (
    <div className="product-container">
      <h1 className="text-center my-4">Products</h1>

      {/* Category Tabs */}
      <Nav variant="tabs" defaultActiveKey="All" className="justify-content-center mb-4 tab-links">
        {categories.map(category => (
          <Nav.Item key={category}>
            <Nav.Link
              eventKey={category}
              onClick={() => handleCategoryClick(category)}
              active={selectedCategory === category}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </Nav.Link>
          </Nav.Item>
        ))}
      </Nav>

      {/* Products List */}
      <div className="d-flex flex-wrap justify-content-center gap-4">
        {filteredData.map((product) => (
          <Card key={product.id} style={{ width: '22rem' }} className="product-card shadow">
            <Card.Img variant="top" src={product.thumbnail || product.images[0]} className="product-img" />
            <Card.Body>
              <Card.Title>{product.title.length > 25 ? product.title.slice(0, 22) + "..." : product.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{product.brand} - {product.category}</Card.Subtitle>
              <Card.Text style={{ height: '80px', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {product.description.length > 117 ? product.description.slice(0, 104) + "..." : product.description}
              </Card.Text>
              <Card.Text>
                <strong>Price:</strong> ${product.price} <br />
                <strong>Discount:</strong> {product.discountPercentage}% <br />
              </Card.Text>
              <Card.Footer style={{ backgroundColor: "#fff" }}>
                <Button className='button-addcart justify-content-center' style={{marginTop: "15px"}} onClick={() => incrementFunc(product)} variant='dark'>Add to Cart</Button>
              </Card.Footer>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Product;
