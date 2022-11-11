const getRandomArrIndex = (array) => array[Math.floor(Math.random() * array.length)];

const getRandomNumber = () => {
  const num = Math.round(Math.random() * 100);
  return num;
};

const getRandomNumberRange = (min, max) => {
  const minNum = Math.ceil(min);
  const maxNum = Math.floor(max);
  return Math.floor(Math.random() * (maxNum - minNum + 1) + minNum);
};

export { getRandomArrIndex, getRandomNumber, getRandomNumberRange };
