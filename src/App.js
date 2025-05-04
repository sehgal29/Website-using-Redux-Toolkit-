import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';
import Cart from './Cart';
import Navbar from './Components/Navbar';
import Protected from './Protected';
import Login from './Login';
import Amount from './Amount';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <div className="App">
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/cart-items' element={<Protected Component={Cart}/>} />
          <Route path='/cart' element={<Protected Component={Amount}/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
