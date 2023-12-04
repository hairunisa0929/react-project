import { useState } from "react";

function Counter() {
  const [number, setNumber] = useState(0);

  return (
    <>
      <h1 className="text-2xl">{number}</h1>
      <button
        className="rounded-lg bg-sky-400 text-lg p-2 text-white mt-2"
        onClick={() => {
        //   setNumber(number + 4);
        //   setNumber(number + 1);
        //   setNumber(number + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
          setNumber((n) => n + 1);
        }}
      >
        +3
      </button>
    </>
  );
}

export default Counter;
