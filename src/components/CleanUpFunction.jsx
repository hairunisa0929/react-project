import React, { useState, useEffect } from "react";

function CleanUpFunction() {
  const [showChild, setShowChild] = useState(false);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2>Hello World</h2>
      <button
        className="rounded-lg bg-sky-400 p-2 text-white mt-2"
        onClick={() => setShowChild(!showChild)}
      >
        Show Child
      </button>

      {showChild && <Child />}
    </div>
  );
}

function Child() {
  useEffect(() => {
    let i = 0;

    const intervalId = setInterval(() => {
      console.log("hello-" + i);
      i++;
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <h4>This is Child</h4>;
}

export default CleanUpFunction;
