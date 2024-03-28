import './App.css'
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from './components/SignInPage/SignIn';


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/signin" element={<SignIn />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
