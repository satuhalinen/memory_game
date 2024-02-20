import Card from "./Card";
import { cards } from "./cards";
import { useState, useEffect } from "react";

const CardList = ({ cardPairsFlipped, setCardPairsFlipped }) => {
  const [activeCardId, setActiveCardId] = useState([]);
  const [matchedCards, setMatchedCards] = useState([]);

  function comparison() {
    if (activeCardId.length === 2) {
      let firstCard = cards.find((card) => card.id === activeCardId[0]);
      let secondCard = cards.find((card) => card.id === activeCardId[1]);
      if (firstCard.title !== secondCard.title) {
        setTimeout(() => {
          setActiveCardId([]);
        }, "4000");
      } else {
        setMatchedCards([...matchedCards, activeCardId[0], activeCardId[1]]);
        setActiveCardId([]);
      }

      calculateCardPairsFlipped();
    }
  }

  function calculateCardPairsFlipped() {
    setCardPairsFlipped(cardPairsFlipped + 1);
  }

  useEffect(comparison, [activeCardId]);

  const visibilityHandler = (id) => {
    if (activeCardId.length < 2) {
      if (!activeCardId.includes(id)) {
        setActiveCardId([...activeCardId, id]);
      }
    }
  };

  function preloadImages() {
    cards.forEach((card) => {
      const image = new Image();
      image.src = card.img;
    });
  }

  useEffect(preloadImages, []);

  return (
    <div className="card-grid">
      {cards.map(function (data) {
        return (
          <Card
            shaking={activeCardId.length > 1 && activeCardId.includes(data.id)}
            visibilityHandler={() => visibilityHandler(data.id)}
            visible={
              activeCardId.includes(data.id) || matchedCards.includes(data.id)
            }
            key={data.id}
            title={data.title}
            img={data.img}
          ></Card>
        );
      })}
    </div>
  );
};

export default CardList;
