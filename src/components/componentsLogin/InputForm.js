const InputForm = ({ text, type, errorMessage, pattern, name, onChange, value }) => {
  return (
    <>
      <input
        type={type}
        name={name}
        placeholder={`${text}`}
        className="inputForm"
        errorMessage={errorMessage}
        pattern={pattern}
        required
        onChange={onChange}
        value={value}
      ></input>
      <span className="inputForm-span">{errorMessage}</span>
    </>
  );
};

export default InputForm;
