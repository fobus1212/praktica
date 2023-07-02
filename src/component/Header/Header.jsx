import logo from './../../img/xbox.png';
import './Header.css';
import searchIcon from './../../img/user.png';


function Header() {
  return (
    <header className="header-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
      </div>
      <nav className="nav-container">
        <ul className="nav-list">
          <li className="nav-item">Games</li>
          <li className="nav-item">Consoles</li>
          <li className="nav-item">Community</li>
        </ul>
        <div className="search-container">
          <input type="text" placeholder="Search" />
        </div>
        <div className="xbox-container"> 
        <img src={searchIcon} alt="Search" />
          <div className="xbox-text">My XBOX</div>
          <div className="xbox-icon"></div>
        </div>
      </nav>
    </header>
  );
}

export default Header;