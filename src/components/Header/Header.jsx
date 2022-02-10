import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const Header = () => {
  const { items } = useContext(CartContext);
  const [isShowCart, setIsShowCart] = useState(false);

  const handleShowCart = () => {
    setIsShowCart(!isShowCart);
  }

  return (
    <>
      <nav>
        <Link to="/">
          Home
        </Link>
        <Link to="/products">
          Products
        </Link>
      </nav>
      <div>
        <button onClick={handleShowCart}>
          Carrito {isShowCart}
        </button>
        {isShowCart ?
          <ul>
            {items.map((item) => {
              return (
                <li key={item.id}>
                  {item.name}
                </li>
              );
            })}
          </ul> :
          null}
      </div>
    </>
  );
};

export default Header;