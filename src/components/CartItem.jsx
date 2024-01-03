import { toRupiah } from "../utils/formatter";
import { BiTrash } from "react-icons/bi";

function CartItem({
  name,
  qty,
  price,
  img,
  handleIncrement,
  handleDecrement,
  handleRemoveCartItem,
}) {
  return (
    <div className="flex gap-4 p-4 rounded-lg bg-gray-100">
      <div className="rounded-lg w-16 h-16">
        <img
          src={img}
          className="rounded-lg w-full h-full object-cover shadow-md"
        />
      </div>

      <div>
        <div className="flex justify-between">
          <h3 className="font-bold text-sm">{name}</h3>
          <BiTrash
            className="self-center text-primary cursor-pointer"
            onClick={handleRemoveCartItem}
          />
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold text-primary text-sm">
            {toRupiah(price)}
          </span>
          <div className="flex self-center justify-between gap-3">
            <button
              className={`${
                qty === 1 ? "bg-blue-300" : "bg-primary"
              } h-full w-5 rounded text-sm text-white`}
              disabled={qty === 1}
              onClick={handleDecrement}
            >
              -
            </button>
            <span className="text-gray-500 text-sm">{qty}</span>
            <button
              className="bg-primary h-full w-5 rounded text-sm text-white"
              onClick={handleIncrement}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartItem;
