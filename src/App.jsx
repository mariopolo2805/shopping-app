import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';


// Styles
import './App.scss';

// Context
import { CartProvider } from './context/CartContext';

// Components
import Header from './components/Header/Header';
import routes from './config/routes';
import theme from './config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
