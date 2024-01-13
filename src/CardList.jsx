import Card from "./Card";
import { cards } from "./cards";
import { useState } from "react";
import { useEffect } from "react";

const CardList = () => {
  const [activeCardId, setActiveCardId] = useState([]);

  function comparison() {
    if (activeCardId.length === 2) {
      let firstCard = cards.find((card) => card.id === activeCardId[0]);
      let secondCard = cards.find((card) => card.id === activeCardId[1]);
      if (firstCard.title !== secondCard.title) {
        setTimeout(() => {
          setActiveCardId([]);
        }, "4000");
      }
    }
  }

  useEffect(comparison, [activeCardId]);

  const visibilityHandler = (id) => {
    if (activeCardId.length < 2) {
      if (!activeCardId.includes(id)) {
        setActiveCardId([...activeCardId, id]);
      }
    }
  };

  return (
    <div className="card-grid">
      {cards.map(function (data) {
        return (
          <div>
            <Card
              visibilityHandler={() => visibilityHandler(data.id)}
              showDescription={activeCardId.includes(data.id) ? true : false}
              key={data.id}
              title={data.title}
              img={data.img}
            ></Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
