import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from './components/nav/Nav';
import Home from './Home';
import About from './About';
import Footer from './components/sections/Footer';

function App() {
  return (
    <BrowserRouter>
      <Nav></Nav>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
      <Routes>
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer></Footer>
    </ BrowserRouter>
  );
}

export default App;
