import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/pokemon-logo.png";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { resetAuthData } from "../store/reducers/authSlice";
import useSWR from "swr";
import { addToCart } from "../store/reducers/cartSlice";
import axios from "axios";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);
  const user = useSelector((state) => state.auth.user);
  const isLoggedIn = useSelector((state) => state.auth.token !== "");

  const onClickLogout = () => {
    dispatch(resetAuthData());
    navigate("/login");
  };

  const fetchData = async () => {
    await axios.get("http://localhost:3000/cart").then((res) => {
      res.data.forEach((item) => {
        dispatch(addToCart(item));
      });
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <header
      className={`w-full flex ${
        isLoggedIn ? "justify-between" : "justify-center"
      } py-4 px-10 border-b-[1px] border-gray-300`}
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="w-[100px]" />
      </Link>

      <div className="flex self-center gap-4">
        <Link to="/cart">Cart</Link>

        {isLoggedIn && (
          <div
            className="cursor-pointer"
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
        )}
      </div>
    </header>
  );
}

export default Header;
