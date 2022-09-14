const Square = (props) => {
  const { handleChange, id, sq } = props;
  return (
    <button type='button' id={id} className='square' onClick={handleChange}>
      {sq}
    </button>
  );
};

export default Square;
