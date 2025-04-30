export default function NavbarDesktop() {
  return (
    <div className="desktop-menu-container">
      <div className="menu-main-menu-container">
        <ul className="main-menu flex">
          <li className="menu-item">
            <a href="/about">About Us</a>
          </li>
          <li className="menu-item relative">
            <a href="/services">Services</a>
            <ul className="sub-menu absolute w-max text-center bg-white shadow-lg shadow-indigo-500/40">
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/service/grooming/">
                  Grooming
                </a>
              </li>
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/service/pain-management/">
                  Pain Management
                </a>
              </li>
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/service/surgery/">Surgery</a>
              </li>
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/service/spay-neuter/">
                  Spay &amp; Neuter
                </a>
              </li>
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/service/dermatology/">
                  Dermatology
                </a>
              </li>
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/service/cardiology/">
                  Cardiology
                </a>
              </li>
              <li className="sub-menu-item p-4 hover:bg-slate-100">
                <a href="https://southwoodsvet.com/services/">
                  View All Services
                </a>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="/contact"> Contact </a>
          </li>
          <li className="menu-item">
            <a href="/appointment">Make an Appointment</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
