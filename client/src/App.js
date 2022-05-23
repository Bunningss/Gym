import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './global.scss';

// Components
import Navbar from './components/Navbar/Navbar';

// Pages
import Home from './pages/Home/Home';
import { useState } from 'react';

function App() {
  const [ active, setActive ] = useState(false);
  return (
    <BrowserRouter>
    <Navbar active={active} setActive={setActive}/>
      <Routes>
        <Route exact path='/' element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
