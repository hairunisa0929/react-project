import { TiTrash } from "react-icons/ti";
import { toRupiah } from "../utils/formatter";

function CartItem({
  img,
  name,
  price,
  qty,
  handleDecrement,
  handleIncrement,
  handleRemove,
}) {
  return (
    <div className="grid grid-cols-5 items-center my-4">
      <img src={img} alt="foto" className="w-32" />
      <h3 className="font-bold text-lg">{name}</h3>
      <div className="flex gap-4">
        <button
          className={`${
            qty === 1 ? "bg-blue-300" : "bg-blue-500"
          } h-full w-5 rounded text-lg text-white`}
          disabled={qty === 1}
          onClick={handleDecrement}
        >
          -
        </button>
        <span className="text-gray-500 text-lg">{qty}</span>
        <button
          className="bg-blue-500 h-full w-5 rounded text-lg text-white"
          onClick={handleIncrement}
        >
          +
        </button>
      </div>
      <span className="text-lg font-bold">{toRupiah(price * qty)}</span>
      <TiTrash
        className="text-4xl text-red-600 cursor-pointer text-center"
        onClick={handleRemove}
      />
    </div>
  );
}

export default CartItem;
