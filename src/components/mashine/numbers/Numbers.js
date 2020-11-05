import React from "react";
import styled from "styled-components";

const flexCenter = `
  display: flex; 
  justify-content: center; 
  align-items: center; 
`;

const NumberButton = styled.div`
  width: 32px;
  height: 32px;
  background: #e5e5ec;
  border-radius: 32px;
  border: 6px solid #ffffff;
  color: #000000;
  ${flexCenter}
  box-sizing: border-box;
  cursor: pointer;
`;

const NumberPanel = styled.div`
  display: grid;
  grid-template-columns: 32px 32px 32px;
  grid-template-rows: 32px 32px 32px 32px;
  grid-gap: 20px;
  background: #e5e5ec;
  padding: 1rem;
  border: 6px solid #ffffff;
  border-radius: 6px;
`;

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const Numbers = ({ onChange, getProduct, itemNumber }) => {
  const handleNumberClick = (n) => {
    const nextValue = `${itemNumber}${n}`;
    onChange(nextValue);
  };

  const resetLastCharacter = () => {
    const nextValue = itemNumber.slice(0, itemNumber.length - 1);
    onChange(nextValue);
  };

  return (
    <NumberPanel>
      {numbers.map((n) => (
        <NumberButton key={n} onClick={() => handleNumberClick(n)}>
          {n}
        </NumberButton>
      ))}
      <NumberButton onClick={resetLastCharacter}>C</NumberButton>
      <NumberButton onClick={() => handleNumberClick(0)}>0</NumberButton>
      <NumberButton onClick={getProduct}>OK</NumberButton>
    </NumberPanel>
  );
};

export default Numbers;
