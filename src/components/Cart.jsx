import React, { useContext } from 'react';
import styled from 'styled-components';
import { shoppingContext } from '../App';

function Cart() {
    const cart = useContext(shoppingContext);
  return (
    <Card>
      <p>{cart.shoppingState.count}</p>
    </Card>
  );
}

export default Cart;

const Card = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: red;
  border-radius: 4px;
  color: #ffff;
  border: 1px solid #ffff;
`;
