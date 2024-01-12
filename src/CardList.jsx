import Card from "./Card";
import { cards } from "./cards";
import { useState } from "react";
const CardList = () => {
  const [activeCardId, setActiveCardId] = useState(null);
  const visibilityHandler = (id) => {
    if (activeCardId !== id) {
      setActiveCardId(id);
    }
  };
  return (
    <div className="card-grid">
      {cards.map(function (data) {
        return (
          <div>
            <Card
              visibilityHandler={() => visibilityHandler(data.id)}
              showDescription={activeCardId === data.id ? true : false}
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
