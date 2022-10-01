import './App.css';
import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";

import AppBar from './components/AppBar';
import Home from './components/Home';
import Genre from './components/Genre';
import Country from './components/Country';
import ComingSoon from './components/ComingSoon';

function App() {
  return (
    <>
      <AppBar title='Movie Archive' />
      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/genre" element={<Genre />} />
          <Route path="/country" element={<Country />} />
          <Route path="/comingsoon" element={<ComingSoon />} />
        </Routes>
      </Container>
    </>
  )
}

export default App; 
