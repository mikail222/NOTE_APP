const random = () => {
  const randomNumber = Math.floor(Math.random() * 256);
  return randomNumber;
};

export const randomBg = () =>
  `rgb(${random()},${random()},${random()},${random()})`;
export default randomBg;
