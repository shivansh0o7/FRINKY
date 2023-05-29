import { Link } from 'react-router-dom';
import './navbar.css';
function Nav()
{
    return(
        <div className="navb">
          <ul>
          <div className="logo">
          <img src="logo1.png" alt="error" id="logo_part1" height="20"/>
          <img src="logo2.png" alt="error" id="logo_part2" height="20"/>
          <img src="logo3.png" alt="error" id="logo_part3" height="20"/>
        </div>
            <li>
              <img src="Home.png" alt="error" height="25" />
              <Link to="/">Home</Link>
            </li>
            <li>
              <img src="Search.png" alt="error" height="25" />
              <a href="/">Search</a>
            </li>
            <li>
              <img src="Favorite.png" alt="error" height="25" />
              <Link to="/Favorite Song">Favorite Songs</Link>
            </li>
            <li>
              <img src="About.png" alt="error" height="25" />
              <Link to="/About Us">About Us</Link>
            </li>
          </ul>
        </div>
    )
}
export default Nav;