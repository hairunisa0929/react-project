import { useEffect, useState } from "react";

function Text() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    console.log("component mounted");

    // unmount
    return () => {
        console.log("component unmounted");
    }
  }, [])

  return (
    <div>
      <input
        onChange={(e) => {
          setInputText(e.target.value);
        }}
      />

      <h1>{inputText}</h1>
    </div>
  );
}

export default Text;
