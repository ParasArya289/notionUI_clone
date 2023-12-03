import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="navbar">
      <img src="/notionLogo.svg" />
      <div className="navbar__container">
        <div className="navbar__menu">
          <span>Product</span>
          <span>Download</span>
          <span>Solutions</span>
          <span>Resources</span>
          <span>Pricing</span>
        </div>
        <div className="navbar__links">
          <a href="#">Request a demo</a>
          <div className="divider"></div>
          <a href="#">Login</a>
          <a href="#" className="get_notion">Get Notion free</a>
        </div>
      </div>
    </header>
  );
};
