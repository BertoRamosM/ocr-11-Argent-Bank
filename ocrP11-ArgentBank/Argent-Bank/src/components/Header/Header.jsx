import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";

import logo from "../../assets/img/argentBankLogo.png";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch();

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut(navigate("/login")));
    sessionStorage.removeItem("token");
  };


  const signin = true;

  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to={"/"}>
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>

      <div>
        {signin ? (
          <div className="navigation">
            <NavLink className="main-nav-item out-div">
              <i
                className="fa fa-user-circle"
                style={{ paddingRight: "0.3rem" }}
              ></i>
              <p>Tony</p>
            </NavLink>
            <NavLink className="main-nav-item out-div">
              <i className="fa fa-sign-out" style={{ paddingRight: "0.3rem" }}></i>
              <p>Sign Out</p>
            </NavLink>
          </div>
        ) : (
          <NavLink className="main-nav-item" to={"/signin"}>
            <i
              className="fa fa-user-circle"
              style={{ paddingRight: "0.3rem" }}
            ></i>
            Sign In
          </NavLink>
        )}
      </div>
    </nav>
  );
};

export default Header;
