import "./Header.css";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/img/argentBankLogo.webp";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/authSlice";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchUserProfile } from "../../features/editUserSlice";



const Header = () => {
  const { userName } = useSelector((state) => state.profile);

  const { isLoggedIn } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUserProfile());
  }, [dispatch]);

 
  

  const handleLogOut = (e) => {
    e.preventDefault();
    dispatch(logOut());
    navigate("/");
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
  };

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
        {isLoggedIn ? (
          <div className="navigation">
            <NavLink to={"/user"} className="main-nav-item out-div">
              <i
                className="fa fa-user-circle"
                style={{ paddingRight: "0.3rem" }}
              ></i>
              <p>
                {userName}
              </p>
            </NavLink>
            <NavLink className="main-nav-item out-div" onClick={handleLogOut}>
              <i
                className="fa fa-sign-out"
                style={{ paddingRight: "0.3rem" }}
              ></i>
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
