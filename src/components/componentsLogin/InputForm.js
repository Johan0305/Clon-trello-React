const InputForm = ({ text, type, errorMessage, pattern }) => {
  return (
    <>
      <input
        type={type}
        placeholder={`${text}`}
        className="inputForm"
        errorMessage={errorMessage}
        pattern={pattern}
        required
      ></input>
      <span className="inputForm-span">{errorMessage}</span>
    </>
  );
};

export default InputForm;
