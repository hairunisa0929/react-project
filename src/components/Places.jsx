import { useState } from "react";
import Card from "./Card";

function Places({ places }) {
  const [place, setPlace] = useState("");

  const handleClickPlace = (name) => {
    setPlace(name);
  };
  
  return (
    <div>
      <h1 className="text-2xl font-bold text-center">Places to visit</h1>
      <h3 className="text-lg text-center">I would like to visit {place}</h3>
      <div className="grid grid-cols-2 gap-8">
        {places.map((item) => (
          <Card
            name={item.name}
            image={item.img}
            city={item.city}
            handleClickPlace={handleClickPlace}
          />
        ))}
      </div>
    </div>
  );
}

export default Places;
