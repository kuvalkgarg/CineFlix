import "./Header.css";
import { Link, RouteProps, Route } from 'react-router-dom';

const Header = () => {
    return (
        <span onClick={() => window.scroll(0, 0)} className="header">
            <a href="http://localhost:5000" target="_blank" className="btn btn-primary" style={{ color: "white", textDecoration: "none", fontSize: "1.5vw", paddingRight: "10vw", paddingTop: "3vw" }}>Sign up</a>
            | Cineflix |
        </span>
    )
};

export default Header;