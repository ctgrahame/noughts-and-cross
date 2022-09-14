import { useEffect, useState } from 'react';
import Square from './Square';
import hasWon from './hasWonCalc';
import MoveHistory from './MoveHistory';
import { calcCoord } from './calcCoord';

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [history, setHistory] = useState([]);
  const [isNought, setIsNought] = useState(true);
  const [coord, setCoord] = useState([]);

  const $elems = document.querySelectorAll('.square');
  const $btn = document.querySelector('.start');
  const $text = document.querySelector('.text');

  //   useEffect(() => {
  //     console.log(`squares: ${squares}`);
  //     console.log(`history: ${history}`);
  //     console.log(`isNought: ${isNought}`);
  //     console.log(`coord: ${coord}`);
  //   }, [history, coord]);

  const handleChange = (e) => {
    const currentPlayer = isNought ? 'O' : 'X';
    const newArr = squares.slice(0);
    newArr.splice(e.target.id, 1, currentPlayer);

    const coord = calcCoord(e.target.id);

    setSquares(newArr);
    setIsNought(!isNought);
    setHistory((hist) => [...hist, newArr]);
    setCoord((prev) => [...prev, { coord }]);
    const historyLength = history.length;
    hasWon(newArr, historyLength, $elems, $btn, $text);
  };

  const reset = () => {
    setSquares(Array(9).fill(null));
    setHistory([]);
    setCoord([]);
    $elems.forEach((el) => {
      el.disabled = false;
      el.innerHTML = '';
    });
    $btn.innerHTML = 'start';
    $text.innerHTML = `Next player: ${isNought ? 'O' : 'X'}`;
  };

  const handleClick = (e) => {
    setSquares(history[e.target.id]);
  };

  return (
    <div className='squares-wrap'>
      {squares.map((sq, index) => {
        return (
          <Square
            sq={sq}
            id={index}
            key={index}
            handleChange={(e) => handleChange(e)}
          />
        );
      })}
      <div>
        <button className='start' type='button' onClick={reset}>
          start
        </button>
        <div className='text'>Next player: {isNought ? 'O' : 'X'}</div>
        <MoveHistory
          history={history}
          coord={coord}
          handleClick={(e) => handleClick(e)}
        />
      </div>
    </div>
  );
};
export default Board;
