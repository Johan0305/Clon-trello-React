import { Link } from "react-router-dom";

const ButtonFormRegister = ({ text, icon, color, background, idbtn, link }) => {
  return (
    <button
      className={`loginButton${idbtn} loginFormButton`}
      style={{
        backgroundColor: `${background}`,
        color: `${color}`,
      }}
    >
      <div className="logginButton-Icon">{icon}</div>
      {text}
    </button>
  );
};

export default ButtonFormRegister;
