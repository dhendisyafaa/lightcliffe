import './App.css';
import Beranda from './pages/Beranda';
import Promo from './pages/Promo';
import Order from './pages/Order';
import Chat from './pages/Chat';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Beranda />} />
          <Route path="promo" element={<Promo/>} />
          <Route path="order" element={<Order />} />
          <Route path="chat" element={<Chat />} />
        </Routes>
      </div>  
    </BrowserRouter>
  );
}

export default App;
