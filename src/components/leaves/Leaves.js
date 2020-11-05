import React from "react";
import styled, { keyframes } from "styled-components";

const LeavesBox = styled.div`
  position: relative;
  top: -50px;
  width: 100%;
  text-align: right;
  z-index: -1;
`;

export const Falling = keyframes`
  0% { transform: translate3d(300,0,0) rotate(0deg); }
  100% { transform: translate3d(-350px,800px,0) rotate(90deg); opacity: 0; }
`;

export const FallingOne = keyframes`
  0% { transform: translate3d(0,0,0) rotate(90deg); }
  100% { transform: translate3d(-400px,780px,0) rotate(0deg); opacity: 0; }
`;
export const FallingTwo = keyframes`
  0% { transform: translate3d(0,0,0) rotate(-20deg); }
  100% {  transform: translate3d(-230px,740px,0) rotate(-70deg); opacity: 0;}
`;

const Leave = styled.i`
  display: inline-block;
  width: 200px;
  height: 150px;
  background: linear-gradient(to bottom right, #309900, #005600);
  transform: skew(20deg);
  border-radius: 5% 40% 70%;
  box-shadow: inset 0px 0px 1px #222;
  border: 1px solid #333;
  z-index: 1;
  animation: ${Falling} 5s 0s infinite;
  &:nth-child(2n) {
    animation: ${FallingOne} 5s 0s infinite;
  }
  &:nth-child(3n) {
    animation: ${FallingTwo} 5s 0s infinite;
  }
  &:before {
    position: absolute;
    content: "";
    top: 117px;
    right: 9px;
    height: 27px;
    width: 32px;
    transform: rotate(49deg);
    border-radius: 0% 15% 15% 0%;
    border-top: 1px solid #222;
    border-bottom: 1px solid #222;
    border-left: 0px solid #222;
    border-right: 1px solid #222;
    background: linear-gradient(to right, rgba(0, 100, 0, 1), #005600);
    z-index: 1;
  }
  &:after {
    content: "";
    height: 125px;
    width: 10px;
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.15),
      rgba(0, 0, 0, 0)
    );
    display: block;
    transform: rotate(125deg);
    position: absolute;
    left: 85px;
    border-radius: 50%;
  }
  &:nth-of-type(n) {
    height: 23px;
    width: 30px;
  }
  &:nth-of-type(n):before {
    width: 7px;
    height: 5px;
    top: 17px;
    right: 1px;
  }
  &:nth-of-type(n):after {
    width: 2px;
    height: 17px;
    left: 12px;
    top: 0px;
  }
  &:nth-of-type(2n + 1) {
    height: 11px;
    width: 16px;
  }
  &:nth-of-type(2n + 1):before {
    width: 4px;
    height: 3px;
    top: 7px;
    right: 0px;
  }
  &:nth-of-type(2n + 1):after {
    width: 2px;
    height: 6px;
    left: 5px;
    top: 1px;
  }
  &:nth-of-type(3n + 2) {
    height: 17px;
    width: 23px;
  }
  &:nth-of-type(3n + 2):before {
    height: 4px;
    width: 4px;
    top: 12px;
    right: 1px;
  }
  &:nth-of-type(3n + 2):after {
    height: 10px;
    width: 2px;
    top: 1px;
    left: 8px;
  }

  &:nth-of-type(n) {
    animation-delay: 1.9s;
  }

  &:nth-of-type(2n) {
    animation-delay: 3.9s;
  }
  &:nth-of-type(3n) {
    animation-delay: 2.3s;
  }
  &:nth-of-type(4n) {
    animation-delay: 4.4s;
  }
  &:nth-of-type(5n) {
    animation-delay: 5s;
  }
  &:nth-of-type(6n) {
    animation-delay: 3.5s;
  }
  &:nth-of-type(7n) {
    animation-delay: 2.8s;
  }
  &:nth-of-type(8n) {
    animation-delay: 1.5s;
  }
  &:nth-of-type(9n) {
    animation-delay: 3.3s;
  }
  &:nth-of-type(10n) {
    animation-delay: 2.5s;
  }
  &:nth-of-type(11n) {
    animation-delay: 1.2s;
  }
  &:nth-of-type(12n) {
    animation-delay: 4.1s;
  }
  &:nth-of-type(13n) {
    animation-delay: 1s;
  }
  &:nth-of-type(14n) {
    animation-delay: 4.7s;
  }
  &:nth-of-type(15n) {
    animation-delay: 3s;
  }

  &:nth-of-type(n) {
    background: linear-gradient(to bottom right, #309900, #005600);
  }
  &:nth-of-type(2n + 2) {
    background: linear-gradient(to bottom right, #5e9900, #2b5600);
  }
  &:nth-of-type(4n + 1) {
    background: linear-gradient(to bottom right, #990, #564500);
  }

  &:nth-of-type(n) {
    opacity: 0.7;
  }
  &:nth-of-type(3n + 1) {
    opacity: 0.5;
  }
  &:nth-of-type(3n + 2) {
    opacity: 0.3;
  }

  &:nth-of-type(n) {
    transform: rotate(180deg);
  }

  &:nth-of-type(n) {
    animation-timing-function: ease-in-out;
  }
`;

const Leaves = () => {
  return (
    <LeavesBox>
      {Array.from(Array(30).keys()).map((i) => (
        <Leave></Leave>
      ))}
    </LeavesBox>
  );
};

export default Leaves;
