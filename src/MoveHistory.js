const MoveHistory = (props) => {
  const { history, coord, handleClick } = props;

  return (
    <div className='history-of-moves'>
      {history.map((step, index) => {
        return (
          <button className='move' id={index} key={index} onClick={handleClick}>
            move: {index + 1}
            {` (c: ${coord[index].coord.c}, r: ${coord[index].coord.r})`}
          </button>
        );
      })}
    </div>
  );
};
export default MoveHistory;
