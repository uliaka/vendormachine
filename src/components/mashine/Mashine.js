import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Transition, animated } from "react-spring/renderprops";
import Numbers from "./numbers/Numbers";
import snickers from "../../assets/product-snickers.png";
import bomba from "../../assets/product-bomba.png";
import mars from "../../assets/product-mars.png";

const MashineContainer = styled.div`
  border: 1px solid #000000;
  border-radius: 3px;
  background: #cc2328;
  display: inline-grid;
  grid-template-columns: 600px 220px;
  grid-template-rows: 800px 150px;
  grid-gap: 50px;
  padding: 20px;
`;

const SnacksContainer = styled.div`
  background: #000000;
  border-radius: 4px;
  background-color: #343331;
  background-image: repeating-linear-gradient(
    -45deg,
    #1f1f1f,
    100px,
    transparent 0px,
    transparent 200px
  );
  display: flex;
  justify-content: center;
  align-items: start;
  padding: 30px 0 30px 0px;
`;

const InterationContainer = styled.div`
  background: #6f201c;
  padding: 1rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-rows: 95px 173px 250px 150px;
`;

const Footer = styled.div`
  grid-column: 1/3;
  background: #000000;
  position: relative;
  text-align: center;
`;

const Counter = styled.div`
  color: red;
  border: 1px solid #ffffff;
  border-radius: 6px;
  background: #000000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 1rem;
  box-sizing: border-box;
  padding: 1rem;
`;

const InsertMoney = styled.div`
  border: 5px solid #e5e5ec;
  border-radius: 6px;
  background: #cecdcb;

  display: grid;
  grid-template-columns: auto;
  grid-gap: 1rem;
  padding: 10px;
`;

const flexCenter = `
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const Big = styled.div`
  border: 5px solid #e5e5ec;
  border-radius: 6px;
  background: #cecdcb;
  grid-column: 1/3;
  ${flexCenter};
  padding: 10px;
`;
const Small = styled.div`
  border: 5px solid #e5e5ec;
  border-radius: 6px;
  background: #cecdcb;
  ${flexCenter};
  padding: 10px;
`;

const Reset = styled.div`
  color: #cc2328;
  background: #343331;
  border-radius: 7px;
  border: 1px solid #000000;
  font-size: 3rem;
  cursor: pointer;
  ${flexCenter};
`;

const Enter = styled.div`
  background: #000000;
  width: 100%;
  height: 20px;
`;

const SmallEnter = styled.div`
  background: #000000;
  width: 20px;
  height: 100%;
`;

const RefundContainer = styled.div`
  border: 5px solid #e5e5ec;
  border-radius: 6px;
  background: #cecdcb;
  ${flexCenter}
  padding: 1rem;
`;

const Refund = styled.div`
  border: 5px solid #e5e5ec;
  border-radius: 6px;
  background: #cecdcb;
  height: 90%;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: column;
`;

const RefundGray = styled.div`
  background: #3a3a38;
  flex: 1;
  width: 100%;
  height: 20px;
`;
const RefundBlack = styled.div`
  background: #000000;
  flex: 1;
  width: 100%;
  height: 20px;
`;

const FooterBlack = styled.div`
  background: #000000;
  width: 100%;
  height: 50%;
`;

const FooterGray = styled.div`
  background: #3a3a38;
  width: 100%;
  height: 50%;
`;

const SnackItemContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100px;
  border-bottom: 8px solid #707070;
  border-right: 8px solid #707070;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: end;
`;

const SnacksGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, calc(100%/5));
  grid-template-rows: repeat(5, calc(100%/5));
  grid-gap: 30px 0;
  & ${SnackItemContainer}:nth-child(5n) {
    border-right: 8px;
`;

const SlotNumber = styled.div`
  width: 30px;
  height: 30px;
  background: #000000;
  border-radius: 50%;
  border: 1px solid #ffffff;
  color: #ffffff;
  ${flexCenter}
  box-sizing: border-box;
  position: absolute;
  bottom: -15px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const SnackItem = styled.div`
  ${({ index }) => `transform: translate(${index * 10}px, ${index * 10}px)`};
  position: absolute;
  img {
    width: auto;
    height: 50px;
  }
`;

const SnackPrice = styled.div`
  width: 50px;
  height: 30px;
  background: #ffffff;
  color: #000000;
  font-weight: bold;
  ${flexCenter}
  box-sizing: border-box;
  position: absolute;
  bottom: 0px;
  margin-left: auto;
  margin-right: auto;
  padding-bottom: 15px;
  left: 0;
  right: 0;
  text-align: center;
`;

const ReceivedProduct = styled.div`
  position: absolute;
  img {
    width: auto;
    height: 70px;
  }
  width: 100%;
`;

const productMap = {
  0: snickers,
  1: mars,
  2: bomba,
};

const Money = styled.div``;

const Item = styled.div``;

const Mashine = ({
  usedCoins,
  resetCoins,
  onNumberChange,
  itemNumber,
  products,
  getProduct,
  receivedProduct,
}) => {
  const [receivedProd, setReceivedProd] = useState("");

  let animateAfterRecived = null;

  const removeRecivedProduct = (product) => {
    if (animateAfterRecived) {
      clearTimeout(animateAfterRecived);
    }
    setReceivedProd(product);
    animateAfterRecived = setTimeout(() => setReceivedProd(""), 3000);
  };

  const counter = usedCoins.reduce((acc, el) => {
    acc = acc + el;
    return acc;
  }, 0);

  useEffect(() => {
    removeRecivedProduct && removeRecivedProduct(receivedProduct);
  }, [receivedProduct]);

  return (
    <MashineContainer>
      <SnacksContainer>
        <SnacksGrid>
          {products.map((product) => (
            <SnackItemContainer key={product.number}>
              {!!product.count &&
                Array.from(Array(product.count).keys()).map((item, index) => (
                  <SnackItem key={item} index={index} isSelcted={false}>
                    <img src={productMap[product.product]} />
                  </SnackItem>
                ))}
              {!!product.count && <SnackPrice> {product.price} Ft</SnackPrice>}
              <SlotNumber>{product.number}</SlotNumber>
            </SnackItemContainer>
          ))}
        </SnacksGrid>
      </SnacksContainer>
      <InterationContainer>
        <Counter>
          <Money>Money: {counter}</Money>
          <Item>Item: {itemNumber}</Item>
        </Counter>
        <InsertMoney>
          <Big>
            <Enter />
          </Big>
          <Small>
            <SmallEnter />
          </Small>
          <Reset onClick={resetCoins}>C</Reset>
        </InsertMoney>
        <Numbers
          onChange={onNumberChange}
          getProduct={getProduct}
          itemNumber={itemNumber}
        />
        <RefundContainer>
          <Refund>
            <RefundBlack />
            <RefundGray />
          </Refund>
        </RefundContainer>
      </InterationContainer>
      <Footer>
        <FooterGray />
        <Transition
          items={receivedProd}
          from={{ opacity: 0 }}
          enter={{ opacity: 1 }}
          leave={{ opacity: 0 }}
        >
          {(receivedProd) =>
            receivedProd &&
            ((props) => (
              <ReceivedProduct>
                <img src={productMap[receivedProduct.product]} style={props} />{" "}
              </ReceivedProduct>
            ))
          }
        </Transition>
        <FooterBlack />
      </Footer>
    </MashineContainer>
  );
};

export default Mashine;
