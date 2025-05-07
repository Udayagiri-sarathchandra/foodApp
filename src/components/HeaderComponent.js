import { useState } from "react";
import logo from "../logo.png";
import {Link} from "react-router-dom"
const HeaderComponent = () => {
  const [logBtn, setLogBtn] = useState("login");
  return (
    <header className="header-bar">
      <img src={logo} alt="logo" className="logo" />
      <nav>
        <ul className="top-nav-list">
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li>Cart</li>
          <li className="log-btn-style" onClick={() => logBtn === "login" ? setLogBtn("logout") : setLogBtn("login")  }>
            {logBtn}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderComponent;
