import { useState } from "react";

function User() {
  const [data, setData] = useState({
    firstName: "Miyamura",
    lastName: "Izumi",
    age: 18,
  });

  const changeAge = () => {
    setData({
      ...data,
      age: 20,
    });
  };

  return (
    <div className="flex flex-col">
      <span>
        Name: {data.firstName} {data.lastName}
      </span>
      <span>Age: {data.age}</span>
      <button
        onClick={changeAge}
        className="rounded-lg bg-sky-400 p-2 text-white w-fit"
      >
        Change Age
      </button>
    </div>
  );
}

export default User;
