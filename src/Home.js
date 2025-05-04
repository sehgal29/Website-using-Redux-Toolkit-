  import React from 'react';
  import './App.css';  // or a separate CSS file for better organization

  const Home = () => {
    return (
      <div>
        {/* Hero Section */}
        <section className="hero">
          <div className="hero-content">
            <h1>Welcome to Our Website</h1>
            <p>Your one-stop shop for the best products!</p>
            <a href="/product" className="btn-primary">Shop Now</a>
          </div>
        </section>

        {/* About Section */}
        {/* About Section */}
  <section className="about" id='about'>
    <div className="about-content">
      <h2>About Us</h2>
      <p>
        At Sehgal Mall, we are passionate about providing the highest quality products to enhance your everyday life. We believe in making shopping easy and enjoyable by offering a wide variety of premium items in different categories. Whether you're looking for the latest tech gadgets, home essentials, or fashion trends, we have something for everyone.
      </p>
      <p>
        Our journey began with a simple vision: to create a platform where customers can find top-notch products at affordable prices. Over the years, we’ve worked hard to curate a collection that stands out in terms of quality, durability, and design.
      </p>
      <p>
        Our mission is to empower you with the best products that meet your needs and exceed your expectations. We value trust, quality, and customer satisfaction, which is why we are committed to offering exceptional service, hassle-free shopping, and fast delivery. 
      </p>
      <h3>Our Values</h3>
      <ul>
        <li><strong>Customer-Centric:</strong> Everything we do is focused on providing the best shopping experience for our customers.</li>
        <li><strong>Quality Assurance:</strong> We only offer products that meet high standards of quality, reliability, and durability.</li>
        <li><strong>Affordability:</strong> We strive to make premium products accessible at competitive prices.</li>
        <li><strong>Innovation:</strong> We're always exploring new ways to bring fresh, exciting products to our customers.</li>
      </ul>
      <p>
        Over the years, we have earned the trust of countless customers who rely on us for all their shopping needs. Whether you’re shopping for yourself or looking for a gift, we ensure that you get the best value and service with every order.
      </p>
      <p>
        We also believe in sustainability, and as part of our efforts to make a positive impact, we are committed to ethical sourcing, reducing our environmental footprint, and promoting eco-friendly practices.
      </p>
      <h3>Our Team</h3>
      <p>
        Behind **Your Company Name** is a dedicated team of experts who share a passion for quality and customer satisfaction. From our product managers who carefully select each item in our store to our customer support team that’s always ready to assist you, we’re here to make your experience seamless and enjoyable. 
      </p>
      <p>
        We work closely with leading manufacturers and trusted suppliers to bring you the best products on the market. Our team constantly strives to improve, innovate, and ensure that every product you receive meets our high standards.
      </p>
      <h3>Looking Forward</h3>
      <p>
        We’re excited about the future of **Your Company Name**. We are constantly expanding our product range, improving our platform, and finding new ways to serve our customers better. As we continue to grow, we promise to stay true to our core values and to keep delivering top-quality products and exceptional customer service.
      </p>
      <p>
        Thank you for being part of our journey. We look forward to continuing to serve you with the best products and making your shopping experience with us even better.
      </p>
    </div>
  </section>


        {/* Featured Products Section */}
        <section className="featured-products">
          <h2>Featured Products</h2>
          <div className="product-cards">
            <div className="product-card">
              <img src="https://images.unsplash.com/photo-1547887537-6158d64c35b3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGVyZnVtZXxlbnwwfHwwfHx8MA%3D%3D" alt="Product 1" />
              <h3>Giorgio Armani</h3>
              <p>Best quality at an affordable price</p>
              <a href="/product" className="btn-secondary">View Product</a>
            </div>
            <div className="product-card">
              <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnVybml0dXJlfGVufDB8fDB8fHww" alt="Product 2" />
              <h3>Premium Sofa Set</h3>
              <p>Top-rated with amazing features</p>
              <a href="/product" className="btn-secondary">View Product</a>
            </div>
            <div className="product-card">
              <img src="https://images.unsplash.com/photo-1739190940453-20900e9d18fb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZyYWduYW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="Product 3" />
              <h3>Dolce Shine Eau de</h3>
              <p>Premium quality, best experience</p>
              <a href="/product" className="btn-secondary">View Product</a>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="cta">
          <div className="cta-content">
            <h2>Join Us Today!</h2>
            <p>Sign up for exclusive discounts and offers.</p>
            <a href="/" className="btn-primary">Sign Up</a>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="footer-content">
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
            <p>&copy; 2025 Your Company Name. All rights reserved.</p>
          </div>
        </footer>
      </div>
    );
  };

  export default Home;
