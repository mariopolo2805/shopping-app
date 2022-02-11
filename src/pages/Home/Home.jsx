import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: ${props => props.theme.primary};
`;

const Home = () => {
  return (
    <>
      <Title>Home</Title>
    </>
  );
};

export default Home;