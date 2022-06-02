import { Link } from "react-router-dom";

import './index.css'
function Header() {
    return (
        <header>
            <ul>
                <li>
                    <Link to="/">Home </Link>
                    <Link to="/login">Login </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header;