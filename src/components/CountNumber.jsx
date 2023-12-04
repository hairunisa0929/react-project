import React, { useState, useEffect } from "react";

function CountNumber() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Oreo");

  useEffect(() => {
    console.log("component did mount");
  }, [count]);

  // useEffect(() => {
  //   console.log("component count");
  //   console.log("component name");
  // }, [count, name]);

  // useEffect(() => {
  //   console.log("component name")
  // }, [name])

  // useEffect(() => {
  //   console.log("component mounted");
  // }, []);

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <h2>Current number: {count}</h2>
      <button
        className="rounded-lg bg-sky-400 p-2 text-white mt-2"
        onClick={() => setCount(count + 1)}
      >
        Add Counter
      </button>

      {/* <h2>Name: {name}</h2>
      <button
        className="rounded-lg bg-sky-400 p-2 text-white mt-2"
        onClick={() => setName("Donut")}
      >
        Change Name
      </button> */}
    </div>
  );
}

export default CountNumber;
