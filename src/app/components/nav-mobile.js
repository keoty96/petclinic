export default function NavbarMobile({ handleClick, isServiceOpen }) {

  return (
    <nav className="mobile-menu-container bg-white">
      <div className="menu-main-menu-container">
        <ul className="mobile-menu">
          <li className="menu-item">
            <a href="#">About Us</a>
            <i className="fas fa-chevron-right"></i>
          </li>
          <li className={`menu-item ${isServiceOpen ? "open" : ""}`}>
            <a href="#" onClick={handleClick}>Services</a>
            {isServiceOpen &&
              <ul className="sub-menu">
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/service/grooming/">
                    Grooming
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/service/pain-management/">
                    Pain Management
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/service/surgery/">Surgery</a>
                </li>
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/service/spay-neuter/">
                    Spay &amp; Neuter
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/service/dermatology/">
                    Dermatology
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/service/cardiology/">
                    Cardiology
                  </a>
                </li>
                <li className="sub-menu-item">
                  <a href="https://southwoodsvet.com/services/">
                    View All Services
                  </a>
                </li>
              </ul>
            }
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
