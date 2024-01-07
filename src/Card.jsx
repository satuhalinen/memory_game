const Card = ({ title, img }) => {
  return (
    <div className="card">
      <h2>{title}</h2>
      <img src={img}></img>
    </div>
  );
};

export default Card;
