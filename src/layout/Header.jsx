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
          <GrCart
            className="self-center cursor-pointer"
            onClick={() => navigate("/cart")}
          />

          <div
            className="self-center cursor-pointer"
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
