import "../App.css";


import { Link } from "react-router-dom";



function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navlist">
            <li>
        <Link to="/" >HOME</Link>
            </li>
            <li>
        <Link to="/movies">MOVIES</Link>
            </li>
            </ul>
        </nav>
                );
}
export default Navbar 