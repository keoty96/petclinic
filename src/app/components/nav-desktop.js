export default function NavbarDesktop() {
  return (
    <div className="desktop-menu-container">
      <div className="menu-main-menu-container">
        <ul className="main-menu flex">
          <li className="menu-item">
            <a className="hover:underline" href="/about">About Us</a>
          </li>
          <li className="menu-item relative">
            <a href="/services">Services</a>
          </li>
          <li className="menu-item">
            <a className="hover:underline" href="/contact"> Contact </a>
          </li>
          <li className="menu-item">
            <a className="hover:underline" href="/appointment">Make an Appointment</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
