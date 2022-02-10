import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';

import { CartContext } from '../../context/CartContext';

const ProductList = () => {
  const { items, setItems } = useContext(CartContext);

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getList() {
      try {
        const request = await fetch('http://localhost:4000/products');
        const response = await request.json();
        setList(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getList();
  }, []);

  if (error) {
    return (<>Error: {error}</>);
  } else if (isLoading) {
    return (<>Loading...</>);
  } else {
    return (
      <>
        <ul>
          {list.map((item) => {
            return (
              <li key={item.id}>
                <Link to={`./${item.id}`}>
                  {item.name}
                </Link>
                <button onClick={() => setItems([...items, item])}>Añadir al carrito</button>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

export default ProductList;