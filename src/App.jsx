import { Route, Routes } from 'react-router-dom';

// Styles
import './App.scss';

// Components
import Header from './components/Header/Header';
import NotFound from './components/NotFound/NotFound';

// Pages
import Home from './pages/Home/Home';
import ProductDetail from './pages/ProducDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route exact path='' element={<Home />} />
        <Route path='products' element={<ProductList />} />
        <Route path='products/:productId' element={<ProductDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
