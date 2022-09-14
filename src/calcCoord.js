export const calcCoord = (index) => {
  const cordArr = [];
  for (let col = 0; col < 3; col++) {
    for (let row = 0; row < 3; row++) {
      cordArr.push({ c: col, r: row });
    }
  }
  return cordArr[index];
};
