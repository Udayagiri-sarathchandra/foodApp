
import "./App.css";
import HeaderComponent from "./components/HeaderComponent";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <HeaderComponent />
      <Outlet />
    </>
  );
};


export default App;
