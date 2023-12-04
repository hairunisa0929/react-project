import { useState } from "react";
import Card from "./components/Card";
import Counter from "./components/Counter";
import User from "./components/User";
import TodoList from "./components/ToDoList";
import Places from "./components/Places";

const places = [
  {
    id: 1,
    name: "Beach",
    city: "Lombok",
    description:
      "a landform alongside a body of water which consists of loose particles. ",
    img: "https://www.novo-monde.com/app/uploads/2023/03/pink-beach-lombok-1024x680.jpg",
    price: 50000,
  },
  {
    id: 2,
    name: "Mountain",
    city: "Dieng",
    description:
      "elevated portion of the Earth's crust, generally with steep sides that show significant exposed bedrock.",
    img: "https://tanijiwo.com/wp-content/uploads/2018/06/Sunrise-Mount-Prau-by-Ade-Chrisnadhi-1280x853.jpg",
    price: 60000,
  },
];

function App() {
  return (
    <div className="p-8">
      {/* <Places places={places} /> */}

      {/* <Counter /> */}

      {/* <User /> */}

      <TodoList />
    </div>
  );
}

export default App;
