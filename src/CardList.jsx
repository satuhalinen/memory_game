import Card from "./Card";
import { cards } from "./cards";
import { useState } from "react";
const CardList = () => {
  const [activeCardId, setActiveCardId] = useState([]);

  const visibilityHandler = (id) => {
    if (activeCardId.length < 2) {
      if (!activeCardId.includes(id)) {
        setActiveCardId([...activeCardId, id]);
      }
    }
  };
  console.log(activeCardId);
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
