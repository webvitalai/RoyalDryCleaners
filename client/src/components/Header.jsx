import React from "react";
import { Container, Image } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";
import { Clock, Phone, Menu } from "lucide-react";

export default function Header() {
  const closeNavbar = () => {
    const navbar = document.getElementById("royalMenu");

    if (navbar && navbar.classList.contains("show")) {
      navbar.classList.remove("show");
    }
  };

  return (
    <>
      <header className="rd-header">
        <div className="rd-topbar">
          <Container>
            <div className="rd-topbar-inner">
              <span>
                <Clock size={15} />
                Mon - Sat: 8:00 AM - 7:00 PM
              </span>

              <a href="tel:+442078334984">
                <Phone size={15} />
                +44 2078 334 984
              </a>
            </div>
          </Container>
        </div>

        <nav className="navbar navbar-expand-lg rd-navbar">
          <Container>
            <Link className="rd-brand" to="/" onClick={closeNavbar}>
              <div className="rd-logo">
                <Image
                  src="/Images/Logo.png"
                  alt="Royal Dry Cleaners Logo"
                  fluid
                />
              </div>

              <span className="rd-brand-text">
                <strong>Royal Dry Cleaners</strong>
                <small>Premium Garment Care</small>
              </span>
            </Link>

            <button
              className="navbar-toggler rd-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#royalMenu"
              aria-controls="royalMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <Menu size={24} />
            </button>

            <div className="collapse navbar-collapse" id="royalMenu">
              <ul className="navbar-nav ms-auto rd-menu">
                <li>
                  <NavLink className="nav-link" to="/" onClick={closeNavbar}>
                    Home
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" to="/about" onClick={closeNavbar}>
                    About
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" to="/services" onClick={closeNavbar}>
                    Services
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" to="/gallery" onClick={closeNavbar}>
                    Gallery
                  </NavLink>
                </li>

                <li>
                  <NavLink className="nav-link" to="/contact" onClick={closeNavbar}>
                    Contact
                  </NavLink>
                </li>
              </ul>

              <Link to="/contact" className="rd-header-btn" onClick={closeNavbar}>
                Book Collection
              </Link>
            </div>
          </Container>
        </nav>
      </header>

      <style>{`
        @import url("https://fonts.googleapis.com/css2?family=Outfit:wght@400;500;600;700;800;900&display=swap");

        * {
          font-family: "Outfit", sans-serif;
        }

        a,
        a:hover,
        a:focus,
        a:active,
        .rd-brand,
        .rd-brand:hover,
        .rd-brand:focus,
        .rd-brand:active,
        .rd-header-btn,
        .rd-header-btn:hover,
        .rd-header-btn:focus,
        .rd-header-btn:active,
        .rd-menu .nav-link,
        .rd-menu .nav-link:hover,
        .rd-menu .nav-link:focus,
        .rd-menu .nav-link:active,
        .rd-menu .nav-link.active {
          text-decoration: none !important;
        }

        .rd-header {
          position: sticky;
          top: 0;
          z-index: 999;
          background: linear-gradient(
            135deg,
            #f9fcff 0%,
            #eef8ff 25%,
            #dff4ff 55%,
            #caeeff 100%
          );
          border-bottom: 1px solid rgba(122, 198, 255, 0.18);
          box-shadow: 0 10px 40px rgba(95, 175, 230, 0.12);
        }

        .rd-topbar {
          padding: 9px 0;
          background: linear-gradient(
            90deg,
            rgba(225,245,255,.8),
            rgba(241,250,255,.8)
          );
          border-bottom: 1px solid rgba(124, 190, 235, 0.15);
        }

        .rd-topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          color: #4c6f86;
          font-size: 13px;
          font-weight: 700;
        }

        .rd-topbar-inner span,
        .rd-topbar-inner a {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #4c6f86;
        }

        .rd-navbar {
          padding: 10px 0;
        }

        .rd-brand {
          display: flex;
          align-items: center;
          gap: 18px;
        }

        .rd-brand-text {
          display: flex;
          flex-direction: column;
        }

        .rd-logo {
          width: 120px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: visible;
          flex-shrink: 0;
        }

        .rd-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: scale(1.15);
        }

        .rd-brand strong {
          display: block;
          font-family: Georgia, serif;
          font-style: italic;
          font-size: 32px;
          font-weight: 900;
          color: #31556c;
          line-height: 1;
          letter-spacing: -0.8px;
          border: none !important;
        }

        .rd-brand small {
          margin-top: 6px;
          color: #79a8c3;
          font-size: 12px;
          letter-spacing: 2px;
          text-transform: uppercase;
          font-weight: 700;
        }

        .rd-menu {
          gap: 24px;
          align-items: center;
        }

        .rd-menu .nav-link {
          color: #4b6e83 !important;
          font-size: 14px;
          font-weight: 800;
          text-transform: uppercase;
          padding: 8px 0 !important;
          transition: 0.3s ease;
        }

        .rd-menu .nav-link:hover,
        .rd-menu .nav-link.active {
          color: #2d8ec7 !important;
          transform: translateY(-2px);
        }

        .rd-menu .nav-link::after {
          display: none !important;
          content: none !important;
        }

        .rd-header-btn {
          margin-left: 24px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 13px 24px;
          border-radius: 999px;
          color: #ffffff !important;
          font-weight: 800;
          background: linear-gradient(135deg, #6fd6ff, #2ea8e6);
          box-shadow: 0 16px 35px rgba(63, 179, 237, 0.3);
          transition: 0.35s ease;
        }

        .rd-header-btn:hover {
          transform: translateY(-4px);
          box-shadow: 0 20px 40px rgba(63, 179, 237, 0.38);
        }

        .rd-toggler {
          border: 0 !important;
          background: linear-gradient(135deg, #ffffff, #dff4ff) !important;
          color: #2e7ba8 !important;
          box-shadow: 0 10px 25px rgba(0,0,0,.08) !important;
        }

        .navbar-toggler:focus {
          box-shadow: none !important;
        }

        @media(max-width: 991px) {
          .rd-navbar {
            padding: 12px 0;
          }

          .rd-menu {
            gap: 10px;
            margin-top: 20px;
            padding-top: 18px;
          }

          .rd-menu .nav-link {
            padding: 12px 0 !important;
          }

          .rd-header-btn {
            width: 100%;
            margin-left: 0;
            margin-top: 18px;
          }

          .rd-logo {
            width: 95px;
            height: 95px;
          }

          .rd-brand strong {
            font-size: 26px;
          }
        }

        @media(max-width: 575px) {
          .rd-topbar {
            display: none;
          }

          .rd-brand {
            gap: 12px;
          }

          .rd-logo {
            width: 82px;
            height: 82px;
          }

          .rd-logo img {
            transform: scale(1.1);
          }

          .rd-brand strong {
            font-size: 20px;
          }

          .rd-brand small {
            font-size: 9px;
            letter-spacing: 1.2px;
          }
        }
      `}</style>
    </>
  );
}