const numbers = [
  11,
  12,
  13,
  14,
  15,
  21,
  22,
  23,
  24,
  25,
  31,
  32,
  33,
  34,
  35,
  41,
  42,
  43,
  44,
  45,
  51,
  52,
  53,
  54,
  55,
];

const pricesMap = {
  0: 220,
  1: 190,
  2: 315,
};

export const generatePieces = () =>
  numbers.map((el) => {
    const product = Math.floor(Math.random() * Math.floor(3));
    return {
      number: el,
      product,
      price: pricesMap[product],
      count: Math.floor(Math.random() * Math.floor(4)),
    };
  });
