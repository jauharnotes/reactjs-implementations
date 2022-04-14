import {  useContext } from 'react';
import {shoppingContext} from '../App';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function HookReduser() {
  const countContext = useContext(shoppingContext)

  return (
    <>
      <Container>
        <HargaProduk>Harga Produk Rp. {countContext.shoppingState.hargasatuan}</HargaProduk>
        <Total>
          <TotalText>Jumlah barang {countContext.shoppingState.count}</TotalText>
        </Total>
        <span >
        <ButtonMin
          disabled= {!countContext.shoppingState.count && true}
          onClick={() => countContext.shoppingDispatch({ type: 'decrement' })}
        >
          -
        </ButtonMin>
        <ButtonPlus
          onClick={() => countContext.shoppingDispatch({ type: 'increment' })}
        >
          +
        </ButtonPlus>
        </span>
      </Container>
      <Price>Total Harga = {countContext.shoppingState.hargatotal}</Price>
      <Link to='/cart'>Lihat Tagihan</Link>
    </>
  );
}

const HargaProduk = styled.h2`
  text-align: center;
  font-size: 30px;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: '10px';
  font-size: 30px;
  justify-content: center;
  align-items: center;
`;

const ButtonPlus = styled.button`
  margin-right : 10px;
  background-color: red;
  font-size: 30px;
  color: white;
  height: 40px;
  width: 40px;
` ;

const ButtonMin = styled.button`
  background-color: gray;
  font-size: 30px;
  color: white;
  height: 40px;
  width: 40px;
`;

const Price = styled.h2`
  text-align: center;
`;

const Total = styled.div`  
  justify-Content: center;
  display: flex;
`;

const TotalText = styled.h1`
  padding: 5px;
  font-size: 24px;
`;
