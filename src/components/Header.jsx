export default function Header() {
  return (
    <header>
      <nav className="blue-grey lighten-1">
        <div className="container">
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              Logo
            </a>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <a href="#">Sass</a>
              </li>
              <li>
                <a href="#">Components</a>
              </li>
              <li>
                <a href="#">JavaScript</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
