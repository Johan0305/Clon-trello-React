const ButtonFormRegister = ({ text, color, background, idbtn }) => {
  return (
    <button
      className={`loginButton${idbtn}`}
      style={{
        backgroundColor: `${background}`,
        color: `${color}`,
      }}
    >
      {text}
    </button>
  );
};

export default ButtonFormRegister;
