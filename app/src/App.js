import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/pages/Header'
import Home from './components/pages/Home';
import Login from './components/pages/LoginRegister/Login';
import SinglePage from './components/pages/SinglePage';
import Cards from './components/pages/ZodiacCards';
import Register from './components/pages/LoginRegister/Register';

function App() {
  return (
    <div className="App"> 
      <Header/>
 
          <Routes>
            <Route  path="/single" element={    <SinglePage />} /> 
            <Route  path="/" element={<Home />} /> 
            <Route  path="/login" element={<Login />} /> 
            <Route  path="/register" element={<Register />} /> 
            <Route  path="/zodiac" element={<Cards /> } /> 
          </Routes>   
    </div>
  );
}

export default App;
