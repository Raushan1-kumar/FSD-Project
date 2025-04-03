import { Link } from "react-router-dom";
import "../App.css";
import Home from "./Home";
import LCMethod from './LCMethod';
function Header(props) {
  return (
    <>
      
        <Link to={"/"}>Home</Link>

        <Link to={"/about"}>About</Link>

        <Link to={"/contact"}>Contact</Link>

        <Link to={"/faq"}>Faq</Link>

        <Link to={"/api"}>api contectivity</Link>
        
        <Link to={"/lcmethod"}>LCMethod</Link>
        <Link to={"/form"}>Form</Link>
        <Link to={"/zustand"}>Use zustand</Link>

    </>
  );
}

export default Header;
