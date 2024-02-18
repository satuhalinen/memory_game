const Card = ({ title, img, visibilityHandler, showDescription, shaking }) => {
  return (
    <div
      className={shaking ? "card animation" : "card"}
      onClick={visibilityHandler}
    >
      {showDescription === true ? (
        <>
          <h2>{title}</h2>
          <img src={img}></img>
        </>
      ) : null}
    </div>
  );
};

export default Card;
