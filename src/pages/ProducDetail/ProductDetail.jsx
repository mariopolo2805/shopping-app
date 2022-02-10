import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getItem() {
      try {
        const request = await fetch(`http://localhost:4000/products/${productId}`);
        const response = await request.json();
        setProduct(response);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    }
    getItem();
  }, [productId]);


  if (error) {
    return (<>Error: {error}</>);
  } else if (isLoading) {
    return (<>Loading...</>);
  } else {
    return (
      <>
        <p>ProductDetail</p>
        {product.name}
      </>
    );
  }
};

export default ProductDetail;