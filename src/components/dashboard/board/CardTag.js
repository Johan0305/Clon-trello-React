const CardTag = ({ cardInfo }) => {
  return (
    <div
      className="card-tag primary-tag"
      style={{ backgroundColor: cardInfo.color }}
    ></div>
  );
};

export default CardTag;
