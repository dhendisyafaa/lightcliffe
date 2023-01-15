import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Beranda } from './pages/indexPages';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>App.js</h1>
        <Routes>
          <Route exat path='/' component={<Beranda/>}/>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
