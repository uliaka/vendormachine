export const makeChange = (total) => {
  var coins = [5, 10, 20, 50, 100, 200];
  const results = [];
  const sortedCoins = coins.sort((ca, cb) => (ca < cb ? 1 : -1));
  let amount = total;
  while (amount > 0) {
    const availableCoins = sortedCoins.filter((c) => c <= amount);
    results.push(availableCoins[0]);
    amount = amount - availableCoins[0];
  }
  return results.filter((el) => el);
};
