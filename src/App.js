import { useState, useEffect } from "react";
import "./App.css";
import MashineContainer from "./components/mashine/Mashine";
import Coins from "./components/coins/Coins";
import { makeChange } from "./helpers/change";
import styled from "styled-components";
import { generatePieces } from "./helpers/pieces";
import Leaves from "./components/leaves/Leaves";

const AppContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const CoinsContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  padding: 1rem 2rem;
`;

const config = {
  coins: [200, 100, 50],
  returnCoins: [10, 20, 5],
};

function App() {
  const [availableCoins, setAvailableCoins] = useState(config.coins);
  const [usedCoins, setUsedCoins] = useState([]);
  const [changeCoins, setChangeCoins] = useState([]);

  const [products, setProduct] = useState([]);

  const [itemNumber, setItemNumber] = useState("");

  const [receivedProduct, setReceivedProduct] = useState("");

  useEffect(() => {
    setProduct(generatePieces(25));
  }, []);

  const enterCoin = (coin, index) => {
    console.log("coin", coin);
    console.log("index", index);
    //setAvailableCoins(availableCoins.filter((c, i) => c !== coin && index !== i));
    setAvailableCoins(
      index === 0
        ? availableCoins.slice(1, availableCoins.length)
        : availableCoins
            .slice(0, index)
            .concat(availableCoins.slice(index + 1, availableCoins.length))
    );
    setUsedCoins(usedCoins.concat([coin]));
  };

  const enterChangeCoin = (coin) => {
    if (config.coins.includes(coin)) {
      setChangeCoins(changeCoins.filter((c) => c !== coin));
      setUsedCoins(usedCoins.concat([coin]));
    }
  };

  const resetCoins = () => {
    if (usedCoins.length) {
      setAvailableCoins(
        makeChange(
          usedCoins.reduce((acc, el) => {
            acc += parseInt(el);
            return acc;
          }),
          0
        ).concat(availableCoins)
      );
    }

    setUsedCoins([]);
  };

  const onNumberChange = (n) => {
    setItemNumber(n);
  };

  const getProduct = () => {
    const theWholeAmount = usedCoins.reduce((acc, el) => {
      acc = acc + el;
      return acc;
    });
    const _product = products.find((p) => p.number === parseInt(itemNumber));
    if (_product) {
      const isEnoughMoney = _product.price <= theWholeAmount;
      if (isEnoughMoney) {
        const change = makeChange(theWholeAmount - _product.price);
        setChangeCoins(changeCoins.concat(change));
        setUsedCoins([]);
        setItemNumber("");
        removeProduct(parseInt(itemNumber));
        setReceivedProduct(_product);
      }
    }
  };

  const removeProduct = (itemNumber) => {
    const updatedProducts = products.map((p) =>
      p.number === itemNumber
        ? {
            ...p,
            count: p.count - 1,
          }
        : p
    );
    setProduct(updatedProducts);
  };

  return (
    <>
      <Leaves />
      <AppContainer>
        <MashineContainer
          usedCoins={usedCoins}
          resetCoins={resetCoins}
          onNumberChange={onNumberChange}
          itemNumber={itemNumber}
          products={products}
          getProduct={getProduct}
          itemNumber={itemNumber}
          receivedProduct={receivedProduct}
        />
        <CoinsContainer>
          <Coins
            title="Available Money"
            availableCoins={availableCoins}
            enterCoin={enterCoin}
          />
          <Coins
            title="Change"
            availableCoins={changeCoins}
            enterCoin={enterChangeCoin}
          />
        </CoinsContainer>
      </AppContainer>
    </>
  );
}

export default App;
