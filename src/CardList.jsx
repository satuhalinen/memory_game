import Card from "./Card";
import { cards } from "./cards";

const CardList = () => {
  return (
    <div className="card-grid">
      {cards.map(function (data) {
        return (
          <div>
            <Card key={data.id} title={data.title} img={data.img}></Card>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
