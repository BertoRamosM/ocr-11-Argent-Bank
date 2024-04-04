import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home"
import SignIn from './components/Pages/SignInPage/SignIn';
import UserPage from './components/Pages/UserPage/UserPage';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchLogin } from './features/authSlice';


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(fetchLogin({email: "albertramos902@gmail.com", password: "albert123", rememberMe: false  }))
  },[dispatch])

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
          <Route path="/user" element={< UserPage/>}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
