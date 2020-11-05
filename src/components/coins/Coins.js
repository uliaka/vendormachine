import React from "react";
import styled from "styled-components";

const CoinsContainer = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 1rem;
  max-width: 300px;
`;

const Coin = styled.div`
  color: #ffffff;
  background: #c69c6d;
  border: 8px solid #000000;
  width: 130px;
  height: 130px;
  border-radius: 130px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  cursor: pointer;
`;

const Title = styled.div``;

const Coins = ({ availableCoins, enterCoin, title }) => {
  return (
    <>
      <Title>{title}</Title>
      <CoinsContainer>
        {availableCoins.map((coin, index) => (
          <Coin key={coin} onClick={() => enterCoin(coin, index)}>
            {coin}
          </Coin>
        ))}
      </CoinsContainer>
    </>
  );
};

export default Coins;
