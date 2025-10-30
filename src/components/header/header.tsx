import React, { useEffect, useState } from "react";
import Logo from "@/assets/images/siteLogo.png";

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileNavActive, setMobileNavActive] = useState(false);

  const isActive = (href: string) => {
    return window.location.pathname === href ? "active" : "";
  };
  const HeaderLinks = [
    { name: "Home", href: "/" },
    { name: "Our Impact", href: "/gallery" },
    { name: "Impact Report", href: "/reports" },
    { name: "Contact Us", href: "/contact" },
  ];
  //   Change Gallery to Our Impact

  // Replace Reports With Impact Report

  // Replace contact with Contact Us

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("load", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("load", handleScroll);
    };
  }, []);

  const toggleMobileNav = () => {
    setMobileNavActive((prev) => !prev);
  };

  useEffect(() => {
    document.body.classList.toggle("scrolled", scrolled);
    document.body.classList.toggle("mobile-nav-active", mobileNavActive);
  }, [scrolled, mobileNavActive]);

  return (
    <header
      id="header"
      className="header d-flex align-items-center fixed-top scroll-up-sticky sticky-top"
    >
      <div className="header-container container-fluid container-xl position-relative d-flex align-items-center justify-content-between">
        <a href="/" className="logo d-flex align-items-center me-auto me-xl-0">
          <img src={Logo} alt="Love Vision Foundation Logo" />
          <h1 className="d-none d-lg-flex sitename">Love Vision Foundation</h1>
        </a>

        <nav id="navmenu" className="navmenu">
          <ul>
            {HeaderLinks.map((link, key) => (
              <li key={key}>
                <a href={link.href} className={isActive(link.href)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>

          <i
            className={`mobile-nav-toggle d-xl-none bi ${
              mobileNavActive ? "bi-x" : "bi-list"
            }`}
            onClick={toggleMobileNav}
          ></i>
        </nav>

        <a className="btn-getstarted" href="/donate">
          <i className="bi bi-heart-fill me-2"></i>
          Donate
        </a>
      </div>
    </header>
  );
};

export default Header;
