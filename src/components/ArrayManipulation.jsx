import { useState } from "react";

export default function ArrayManipulation() {
  const [buah, setBuah] = useState(["papaya", "manggo", "apple"]);

  const sortBuah = () => {
    const copyBuah = [...buah];
    const hasilSort = copyBuah.sort();
    // const hasilSort = 0xff3288 <-- referensi ke copyBuah
    // console.log(hasilSort === buah)
    setBuah(hasilSort);
  };

  return (
    <>
      <p>{buah.join(", ")}</p>
      <button onClick={sortBuah}>sort buah</button>
    </>
  );
}
