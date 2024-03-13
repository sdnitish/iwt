import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Sitemap from './pages/Sitemap';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import Footer from './components/sections/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/services' element={<Products />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Routes>
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Routes>
        <Route path='/sitemap' element={<Sitemap />} />
      </Routes>
      <Routes>
        <Route path='/productdetail' element={<ProductDetail />} />
      </Routes>
      <Footer></Footer>
    </ BrowserRouter>
  );
}

export default App;
