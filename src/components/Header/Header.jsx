import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="brand">izza</div>
        <nav>
          <a href="/menu">Menu</a>
          <a href="/about">About</a>
          <a href="/locations">Locations</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </header>
  );
}

export default Header;
