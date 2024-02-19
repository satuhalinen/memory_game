import CardList from "./CardList";
import "./index.css";
import { useState } from "react";

const App = () => {
  const [cardPairsFlipped, setCardPairsFlipped] = useState(0);
  return (
    <main>
      <h1>Memory game</h1>
      <h2>You have flipped {cardPairsFlipped} card pairs.</h2>
      <CardList
        cardPairsFlipped={cardPairsFlipped}
        setCardPairsFlipped={setCardPairsFlipped}
      ></CardList>
    </main>
  );
};

export default App;
