import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { BiCartAlt } from "react-icons/bi";
import Logo from "../assets/images/pokemon-logo.png";
import { resetAuthData } from "../store/reducers/authSlice";
import { getCart } from "../store/reducers/cartSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");

  const { dataCart } = useSelector((state) => state.cart);

  const cartTotalPrice = dataCart
    .filter((item) => item.userId === user.id)
    .map((item) => item.qty)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const onClickLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

  useEffect(() => {
    if (isLoggedIn) {
      dispatch(getCart());
    }
  }, [isLoggedIn, dispatch]);

  return (
    <header
      className={`w-full flex ${
        isLoggedIn ? "justify-between" : "justify-center"
      } py-4 px-10 border-b-[1px] border-gray-300`}
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="w-[100px]" />
      </Link>

      {isLoggedIn && (
        <div className="flex self-center gap-4">
          <Link to="/cart" className="relative">
            <BiCartAlt className="text-3xl" />
            <div className="absolute top-0 left-4 bg-red-400 px-2 rounded-lg text-white text-xs">
              {cartTotalPrice > 0 && cartTotalPrice}
            </div>
          </Link>

          <div
            className="cursor-pointer text-lg"
            onClick={() => setShowDropdown(!showDropdown)}
          >
            Hi, {user.name}
            {showDropdown && (
              <div
                className="rounded-lg drop-shadow-md absolute bg-white p-3"
                onClick={onClickLogout}
              >
                Logout
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
