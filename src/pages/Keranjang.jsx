import React, { useContext } from 'react';
import styled from 'styled-components';
import { shoppingContext } from '../App';

function Keranjang() {
    const detail = useContext(shoppingContext);
  return (
    <Card>
      <CartContents>
        <h1>Tagihan</h1>
        <p>(1x) Action Figure</p>
        <hr />
        <p>Harga Total {detail.shoppingState.hargatotal}</p>
        <Button>Lanjutkan Pembayaran</Button>
      </CartContents>
    </Card>
  );
}

export default Keranjang;

const Card = styled.div`
  width: 80%;
  height: 100px;
  background-color: #c9c9c9;
  padding: 50px 0 80px 10px;
  margin: 0 auto;
`;

const CartContents = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Button = styled.button`
    width: 60%;
    padding: 8px;
    border-radius: 10px;
`
