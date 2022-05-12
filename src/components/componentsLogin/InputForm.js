const InputForm = ({ text, type }) => {
  return (
    <input type={type} placeholder={`${text}`} className="inputForm"></input>
  );
};

export default InputForm;
