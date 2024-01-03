import { useDispatch, useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import {
  incrementQty,
  decrementQty,
  removeItem,
} from "../store/reducers/cartSlice";

function Cart() {
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleIncrement = (id) => dispatch(incrementQty(id));
  const handleDecrement = (id) => dispatch(decrementQty(id));

  const handleRemoveCartItem = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <section>
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          price={item.price}
          qty={item.quantity}
          img={item.img}
          handleIncrement={() => handleIncrement(item.id)}
          handleDecrement={() => handleDecrement(item.id)}
          handleRemoveCartItem={() => handleRemoveCartItem(item.id)}
        />
      ))}
    </section>
  );
}

export default Cart;
