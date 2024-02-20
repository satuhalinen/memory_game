const Card = ({ title, img, visibilityHandler, visible, shaking }) => {
  return (
    <div
      className={shaking ? "card animation" : "card"}
      onClick={visibilityHandler}
    >
      {visible === true ? (
        <>
          <h2>{title}</h2>
          <img className="image" alt={title} src={img}></img>
        </>
      ) : null}
    </div>
  );
};

export default Card;
