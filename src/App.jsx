import { useState } from "react";
import Text from "./components/Text";

function App() {
  const [showText, setShowText] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setShowText(!showText);
        }}
      >
        Show Text
      </button>

      {showText && <Text />}
    </>
  );
}

export default App;
