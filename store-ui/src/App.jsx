import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/footer/Footer";
import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
