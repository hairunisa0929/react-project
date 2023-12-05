import { useMemo, useState } from "react";

export default function ExampleUseMemo() {
  const [count, setCount] = useState(1);

  const sebuahPerhitungan = () => {
    console.log("saya dijalankan");
    const hasil = 1 + (1 * 1) / 1;
    return hasil;
  };

  //   tanpa useMemo
  const hasilPerhitungan = sebuahPerhitungan();

  //   dengan useMemo
  //   const hasilPerhitungan = useMemo(() => {
  //     return sebuahPerhitungan();
  //   }, []);

  return (
    <>
      hasil: {hasilPerhitungan}
      <br />
      count: {count}
      <br />
      <button onClick={() => setCount(count + 1)}>tambah count</button>
    </>
  );
}
