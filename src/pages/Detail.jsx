import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
import useSWR from "swr";
import { checkoutBooking } from "../store/reducers/checkoutSlice";
import { toRupiah } from "../utils/formatter";
import { addToCart } from "../store/reducers/cartSlice";

const fetcher = (url) => axios.get(url).then((response) => response.data);

function Detail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [qty, setQty] = useState(1);

  const { dataCart } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const { data, isLoading } = useSWR(
    `http://localhost:3000/pokemon/${id}`,
    fetcher
  );

  if (isLoading) return <BeatLoader color="#38BDF8" />;

  const incrementQty = () => setQty(qty + 1);
  const decrementQty = () => {
    if (qty > 1) {
      setQty(qty - 1);
    }
  };

  const onClickBuyNow = () => {
    const payload = {
      ...data,
      qty,
    };

    dispatch(checkoutBooking(payload));
    navigate("/checkout");
  };

  const onClickAddToCart = () => {
    const foundItem = dataCart.find(
      (item) => item.pokemonId === parseInt(id) && item.userId === user.id
    );
    // console.log(dataCart);
    if (foundItem) {
      console.log("masuk edit");
      const payload = {
        ...foundItem,
        qty: foundItem.qty + qty,
      };
      axios
        .put(`http://localhost:3000/cart/${foundItem.id}`, payload)
        .then((res) => {
          dispatch(addToCart(res.data));
        });
    } else {
      console.log("masuk add");
      const payload = {
        userId: user.id,
        pokemonId: data.id,
        name: data.name,
        img: data.img,
        price: data.price,
        qty,
      };
      axios.post("http://localhost:3000/cart", payload).then((res) => {
        dispatch(addToCart(res.data));
      });
    }

    // navigate("/cart");
  };

  return (
    <section>
      <div className="flex">
        <img src={data.img} alt={data.name} className="w-1/2" />

        <div className="flex flex-col gap-4">
          <h1 className="font-bold text-2xl">{data.name}</h1>
          <h1 className="font-bold text-xl">{toRupiah(data.price)}</h1>
          <div>
            <span>Type</span>
            <span className="bg-sky-400 text-white py-[5px] px-[8px] ml-2 rounded-lg">
              {data.type}
            </span>
          </div>
          <p>{data.description}</p>
          <span>Quantity</span>
          <div className="flex flex-row h-10 rounded-lg bg-transparent mt-1">
            <button
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-l cursor-pointer outline-none text-2xl font-thin"
              onClick={decrementQty}
            >
              −
            </button>
            <input
              type="number"
              className="focus:outline-none text-center bg-gray-300 w-20 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-700  outline-none"
              name="qty"
              value={qty}
              disabled
            />
            <button
              className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-10 rounded-r cursor-pointer text-2xl font-thin"
              onClick={incrementQty}
            >
              +
            </button>
          </div>

          <div className="flex gap-4">
            <button
              className="rounded-lg bg-sky-400 p-2 text-white w-fit"
              onClick={onClickBuyNow}
            >
              Buy Now
            </button>

            <button
              className="rounded-lg border border-sky-400 text-sky-400 p-2 w-fit"
              onClick={onClickAddToCart}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Detail;
