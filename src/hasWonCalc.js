const filterMarkerIndexes = (array, filteredArr, marker) => {
  array.filter((val, index) => {
    if (val === marker) {
      filteredArr.push(index);
    }
    return filteredArr;
  });
};

const hasMatchingValues = (arr, arr2) => {
  const sortedArr = arr.slice().sort();
  const sortedArr2 = arr2.slice().sort();
  const hasWinningComb = sortedArr2.every((v) => {
    return sortedArr.includes(v);
  });
  return hasWinningComb;
};

const hasWon = (nArr, num, elems, btn, text) => {
  const winArr = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [0, 4, 8],
  ];

  const OArr = [];
  const XArr = [];
  filterMarkerIndexes(nArr, OArr, 'O');
  filterMarkerIndexes(nArr, XArr, 'X');

  if (num > 3) {
    winArr.forEach((line) => {
      const hasOwon = hasMatchingValues(OArr, line);
      const hasXwon = hasMatchingValues(XArr, line);

      if (hasOwon || hasXwon) {
        elems.forEach((el) => {
          el.disabled = true;
        });
        btn.innerHTML = 'game over... press to start';
        text.innerHTML = hasOwon ? 'O has won!' : 'X has won!';
      }
    });
  }
};

export default hasWon;
