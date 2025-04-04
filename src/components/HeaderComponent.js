import logo from "../logo.png"
const HeaderComponent = () => {
    return (
      <header className="header-bar">
        <img src={logo} alt="logo" className="logo" />
        <nav>
          <ul className="color-list">
            <li>Home</li>
            <li>Contact</li>
            <li>About</li>
            <li>Cart</li>
          </ul>
        </nav>
      </header>
    );
  };

export default HeaderComponent;