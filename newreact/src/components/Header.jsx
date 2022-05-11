import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <h2><Link to="/cards" style={{color: "white", marginRight: "20px"}}>Cards</Link></h2>
      <h2><Link to="/about" style={{color: "white"}}>About</Link></h2>
    </header>
  );
};

export default Header;