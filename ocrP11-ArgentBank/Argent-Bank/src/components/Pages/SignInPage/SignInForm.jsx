import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLogin } from "../../../features/authSlice";
import { useNavigate } from "react-router-dom";
import FormInput from "./FormInput";

const SignInForm = () => {
  const dispatch = useDispatch();
  const { error, isLoggedIn } = useSelector((store) => store.auth);

  const naviate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRememberMe] = useState(false);
  const [wrongLogin, setWrongLogin] = useState("Wrong Email or Password");


   useEffect(() => {
     if (error) {
       setLoginError(error);
       const timeout = setTimeout(() => {
         setLoginError("");
       }, 1500);

       return () => clearTimeout(timeout);
     }
   }, [error]);
  
  
    useEffect(() => {
      if (isLoggedIn) {
        navigate("/profile");
      }
    }, [isLoggedIn, navigate]);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        await dispatch(fetchLogin({ email, password, rememberMe }));
      } catch (error) {
        console.log(error);
        sessionStorage.removeItem("token");
      }
    };
  
  
  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle"></i>
        <h1>Sign In</h1>
        <form>
          <FormInput
            className="input-wrapper"
            htmlFor="email"
            type="email"
            id="email"
            text="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            className="input-wrapper"
            htmlFor="password"
            type="password"
            id="password"
            text="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <FormInput
            className="input-remember"
            htmlFor="remember"
            type="checkbox"
            id="remember"
            text="Remember me"
            onChange={(e) => setRememberMe(e.target.value)}
          />

          <button href="./user.html" className="sign-in-button">
            Sign In
          </button>
          {wrongLogin && <div className="error-msg">{wrongLogin}</div>}
        </form>
      </section>
    </main>
  );
};

export default SignInForm;
