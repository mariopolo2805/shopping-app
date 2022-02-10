import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Styles
import './App.scss';

// Context
import { CartProvider } from './context/CartContext';

// Components
import Header from './components/Header/Header';
import routes from './config/routes';

function App() {
  return (
    <div className="app">
      <CartProvider>
        <Header />
        <Routes>
          {routes.map((route) => (
            <Route key={route.path} exact={route.exact} path={route.path} element={route.element} />
          ))}
        </Routes>
      </CartProvider>
    </div>
  );
}

export default App;
