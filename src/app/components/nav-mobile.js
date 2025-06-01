export default function NavbarMobile({ handleClick, isServiceOpen }) {

  return (
    <nav className="mobile-menu-container bg-white w-screen absolute">
      <div className="menu-main-menu-container">
        <ul className="mobile-menu">
          <li className="menu-item">
            <a href="/about">About Us</a>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className={`menu-item ${isServiceOpen ? "open" : ""}`}>
            <a href="/services">Services</a>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className="menu-item">
            <a href="#"> Contact </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
