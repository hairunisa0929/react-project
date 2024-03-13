import { useDispatch, useSelector } from "react-redux";
import { removeCartItem, updateCartQty } from "../store/reducers/cartSlice";
import CartItem from "../components/CartItem";

function Cart() {
  const { dataCart } = useSelector((state) => state.cart);
  const user = useSelector((state) => state.auth.user);

  const filteredDataCart = dataCart.filter((item) => item.userId === user.id);

  const dispatch = useDispatch();

  const handleIncrement = (id) => {
    const foundData = dataCart.find((item) => item.id === id);

    const payload = {
      ...foundData,
      qty: foundData.qty + 1,
    };

    dispatch(updateCartQty(payload));
  };

  const handleDecrement = (id) => {
    const foundData = dataCart.find((item) => item.id === id);

    const payload = {
      ...foundData,
      qty: foundData.qty - 1,
    };

    dispatch(updateCartQty(payload));
  };

  const handleRemove = (id) => {
    dispatch(removeCartItem(id));
  };

  return (
    <div className="w-3/4 py-4 px-8">
      <h2 className="text-center font-bold text-xl mb-4">Cart</h2>
      <hr />
      <div>
        {filteredDataCart.map((item) => (
          <CartItem
            key={item.id}
            name={item.name}
            img={item.img}
            price={item.price}
            qty={item.qty}
            handleDecrement={() => handleDecrement(item.id)}
            handleIncrement={() => handleIncrement(item.id)}
            handleRemove={() => handleRemove(item.id)}
          />
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
