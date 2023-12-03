import { useEffect, useRef } from "react";
import "./Navbar.css";

export const Navbar = () => {
  const navbarRef = useRef(null);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      navbarRef.current.classList.add("navbar__scrolled");
    } else {
      navbarRef.current.classList.remove("navbar__scrolled");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [navbarRef]);

  return (
    <header ref={navbarRef} className="navbar">
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
          <a href="#" className="get_notion">
            Get Notion free
          </a>
        </div>
      </div>
    </header>
  );
};
