import { useState } from "react";
import { Link } from "react-router-dom";
import { GrCart } from "react-icons/gr";
import Logo from "../assets/images/pokemon-logo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../store/reducers/authSlice";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");
  const { cartItems } = useSelector((state) => state.cart);

  const cartTotalQty = cartItems
    .map((item) => item.quantity)
    .reduce((prevValue, currValue) => prevValue + currValue, 0);

  const onClickLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

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
        <div className="flex gap-4">
          <div className="relative self-center cursor-pointer">
            <GrCart className="text-2xl" onClick={() => navigate("/cart")} />

            <span className="absolute px-2 py-[1px] left-3 top-0 bg-red-300 text-white rounded-full text-xs">
              {cartTotalQty}
            </span>
          </div>

          <div
            className="self-center cursor-pointer text-lg"
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
