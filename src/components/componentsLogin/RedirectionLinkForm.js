const RedirectionLink = ({ redirect, text, numId }) => {
  return (
    <a
      href={redirect}
      className={`linkSites${numId}`}
      target="_blank"
      rel="noreferrer"
    >
      {text}
    </a>
  );
};

export default RedirectionLink;
