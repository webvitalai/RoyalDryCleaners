import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <footer className="rd-footer">
        <div className="rd-footer-overlay"></div>

        <Container className="position-relative">
          <Row className="g-5">

            {/* BRAND */}
            <Col lg={4} className="rd-reveal">

              <div className="rd-footer-brand">

                {/* LOGO */}
                <div className="rd-footer-logo">
                  <Image
                    src="/Images/Logo.png"
                    alt="Royal Dry Cleaners Logo"
                    fluid
                  />
                </div>

                {/* TEXT */}
                <div>
                  <h3>Royal Dry Cleaners</h3>
                  <span>Premium Garment Care</span>
                </div>
              </div>

              <p className="rd-footer-text">
                Premium dry cleaning, laundry, ironing, alterations and garment
                care service designed for modern UK customers who expect
                freshness, quality and elegance.
              </p>

              {/* SOCIALS */}
              <div className="rd-footer-socials">

                <a href="/">
                  <FaFacebookF />
                </a>

                <a href="/">
                  <FaInstagram />
                </a>

                <a href="/">
                  <FaTwitter />
                </a>

                <a href="/">
                  <FaTiktok />
                </a>

              </div>
            </Col>

            {/* QUICK LINKS */}
            <Col lg={2} md={4} className="rd-reveal">

              <h5>Quick Links</h5>

              <div className="rd-footer-links">

                <Link to="/">
                  <ArrowRight size={15} /> Home
                </Link>

                <Link to="/about">
                  <ArrowRight size={15} /> About
                </Link>

                <Link to="/services">
                  <ArrowRight size={15} /> Services
                </Link>

                <Link to="/gallery">
                  <ArrowRight size={15} /> Gallery
                </Link>

                <Link to="/contact">
                  <ArrowRight size={15} /> Contact
                </Link>

              </div>
            </Col>

            {/* SERVICES */}
            <Col lg={3} md={4} className="rd-reveal">

              <h5>Our Services</h5>

              <div className="rd-footer-services">
                <p>Dry Cleaning</p>
                <p>Laundry Service</p>
                <p>Ironing & Pressing</p>
                <p>Alterations</p>
                <p>Collection & Delivery</p>
              </div>
            </Col>

            {/* CONTACT */}
            <Col lg={3} md={4} className="rd-reveal">

              <h5>Contact Info</h5>

              <div className="rd-contact-list">

                <p>
                  <Phone size={17} />
                  +44 2078 334 984
                </p>

                <p>
                  <Mail size={17} />
                  info@royaldrycleaners.co.uk
                </p>

                <p>
                  <MapPin size={17} />
                  Gensurco House, 46 Rosebery Ave, London EC1R 4RP, UK
                </p>

                <p>
                  <Clock size={17} />
                  Mon - Sat: 8:00 AM - 7:00 PM
                </p>

              </div>
            </Col>

          </Row>

          {/* BOTTOM */}
          <div className="rd-footer-bottom">

            <p>
              © {new Date().getFullYear()} Royal Dry Cleaners.
              All Rights Reserved.
            </p>

            <div className="rd-footer-bottom-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms & Conditions</a>
            </div>

          </div>
        </Container>
      </footer>

      <style>{`
        a,
        a:hover,
        a:focus,
        a:active,
        .rd-footer a,
        .rd-footer a:hover {
          text-decoration: none !important;
        }

        .rd-footer {
          position: relative;
          overflow: hidden;
          padding: 90px 0 30px;

          background:
            linear-gradient(
              135deg,
              #07273a 0%,
              #0f4f73 35%,
              #178bc0 70%,
              #67d6ff 100%
            );

          color: #fff;
        }

        .rd-footer-overlay {
          position: absolute;
          inset: 0;

          background:
            radial-gradient(
              circle at top right,
              rgba(255,255,255,.18),
              transparent 28%
            ),
            radial-gradient(
              circle at bottom left,
              rgba(255,255,255,.12),
              transparent 24%
            );
        }

        /* BRAND */

        .rd-footer-brand {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-bottom: 22px;
        }

        /* LOGO */

        .rd-footer-logo {
          width: 95px;
          height: 95px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex-shrink: 0;
        }

        .rd-footer-logo img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          transform: scale(1.1);
        }

        /* TEXT */

        .rd-footer-brand h3 {
          margin: 0;

          font-family: Georgia, serif;
          font-style: italic;

          font-size: 34px;
          font-weight: 900;

          color: #ffffff;
        }

        .rd-footer-brand span {
          color: #d7f5ff;

          letter-spacing: 2px;
          font-size: 11px;

          text-transform: uppercase;
          font-weight: 700;
        }

        .rd-footer-text {
          color: #e8f9ff;

          line-height: 1.9;
          font-size: 16px;

          max-width: 420px;
        }

        /* SOCIALS */

        .rd-footer-socials {
          display: flex;
          align-items: center;
          gap: 14px;

          margin-top: 26px;
        }

        .rd-footer-socials a {
          width: 48px;
          height: 48px;

          border-radius: 18px;

          display: flex;
          align-items: center;
          justify-content: center;

          background: rgba(255,255,255,.16);

          color: #fff;

          font-size: 18px;

          backdrop-filter: blur(10px);

          border: 1px solid rgba(255,255,255,.18);

          transition: .35s ease;
        }

        .rd-footer-socials a:hover {
          transform: translateY(-6px) scale(1.05);

          background: rgba(255,255,255,.26);

          color: #ffffff;

          box-shadow: 0 15px 35px rgba(0,0,0,.18);
        }

        /* TITLES */

        .rd-footer h5 {
          position: relative;

          display: inline-block;

          margin-bottom: 28px;

          font-size: 22px;
          font-weight: 900;

          color: #ffffff;
        }

        .rd-footer h5::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -10px;

          width: 45px;
          height: 3px;

          border-radius: 999px;

          background:
            linear-gradient(
              90deg,
              #ffffff,
              #b8ecff
            );
        }

        /* LINKS */

        .rd-footer-links,
        .rd-footer-services,
        .rd-contact-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .rd-footer-links a {
          display: inline-flex;
          align-items: center;
          gap: 8px;

          color: #e8f9ff;

          font-weight: 700;

          transition: .3s ease;
        }

        .rd-footer-links a:hover {
          transform: translateX(5px);

          color: #ffffff;
        }

        .rd-footer-services p,
        .rd-contact-list p {
          display: flex;
          align-items: center;
          gap: 10px;

          margin: 0;

          color: #e8f9ff;

          line-height: 1.8;
        }

        .rd-contact-list svg {
          color: #d7f5ff;

          min-width: 18px;
        }

        /* BOTTOM */

        .rd-footer-bottom {
          margin-top: 65px;
          padding-top: 26px;

          border-top:
            1px solid rgba(255,255,255,.16);

          display: flex;
          align-items: center;
          justify-content: space-between;

          gap: 20px;

          flex-wrap: wrap;
        }

        .rd-footer-bottom p {
          margin: 0;
          color: #dff7ff;
        }

        .rd-footer-bottom-links {
          display: flex;
          align-items: center;
          gap: 24px;
        }

        .rd-footer-bottom-links a {
          color: #dff7ff;

          font-weight: 600;

          transition: .3s ease;
        }

        .rd-footer-bottom-links a:hover {
          color: #ffffff;
        }

        /* TABLET */

        @media(max-width:991px) {

          .rd-footer {
            padding: 75px 0 28px;
          }

          .rd-footer-logo {
            width: 80px;
            height: 80px;
          }

          .rd-footer-brand h3 {
            font-size: 28px;
          }
        }

        /* MOBILE */

        @media(max-width:575px) {

          .rd-footer {
            padding: 65px 0 25px;
          }

          .rd-footer-brand {
            align-items: center;
            gap: 14px;
          }

          .rd-footer-logo {
            width: 68px;
            height: 68px;
          }

          .rd-footer-brand h3 {
            font-size: 24px;
          }

          .rd-footer h5 {
            font-size: 20px;
          }

          .rd-footer-bottom {
            text-align: center;
            justify-content: center;
          }

          .rd-footer-bottom-links {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}