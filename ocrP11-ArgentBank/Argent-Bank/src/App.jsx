import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Pages/HomePage/Home"
import SignIn from './components/Pages/SignInPage/SignIn';
import UserPage from './components/Pages/UserPage/UserPage';


function App() {

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
