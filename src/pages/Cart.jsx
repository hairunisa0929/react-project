import { useDispatch, useSelector } from "react-redux";
import { toRupiah } from "../utils/formatter";
import { decrementQty, incrementQty } from "../store/reducers/cartSlice";
import axios from "axios";

function Cart() {
  const { dataCart } = useSelector((state) => state.cart);
  console.log(dataCart);
  const dispatch = useDispatch();

  const handleIncrement = async (id) => {
    const foundData = dataCart.find((item) => item.id === id);
    console.log(foundData);
    // foundData.qty += 1;
    const payload = {
      ...foundData,
      qty: foundData.qty + 1
    };
    await axios.put(`http://localhost:3000/cart/${id}`, payload).then((res) => {
      dispatch(incrementQty(res.data.id));
    });
  };

  const handleDecrement = async (id) => {
    const foundData = dataCart.find((item) => item.id === id);
    // console.log(foundData);
    // foundData.qty += 1;
    const payload = {
      ...foundData,
      qty: foundData.qty - 1
    };
    await axios.put(`http://localhost:3000/cart/${id}`, payload).then((res) => {
      dispatch(decrementQty(res.data.id));
    });
  };

  return (
    <div>
      <h2>Cart</h2>
      <hr />
      <div className="flex flex-col">
        {dataCart.map((item) => (
          <div className="flex justify-between my-4 bg-slate-300" key={item.id}>
            <img src={item.img} alt="foto" className="w-16" />

            <h3 className="font-bold">{item.name}</h3>
            <div className="flex self-center justify-between gap-3">
              <button
                className={`${
                  item.qty === 1 ? "bg-blue-300" : "bg-primary"
                } h-full w-5 rounded text-sm text-white`}
                disabled={item.qty === 1}
                onClick={() => handleDecrement(item.id)}
              >
                -
              </button>
              <span className="text-gray-500 text-sm">{item.qty}</span>
              <button
                className="bg-primary h-full w-5 rounded text-sm text-white"
                onClick={() => handleIncrement(item.id)}
              >
                +
              </button>
            </div>
            <span>{toRupiah(item.price * item.qty)}</span>
          </div>
        ))}
      </div>

      <hr />

      <div className="flex justify-between mt-4">
        <span className="font-bold">Total</span>
        {/* <span className="font-bold">
          {toRupiah(dataCheckout.qty * dataCheckout.price)}
        </span> */}
      </div>
    </div>
  );
}

export default Cart;
