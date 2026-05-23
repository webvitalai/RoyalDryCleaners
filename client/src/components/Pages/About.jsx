import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Sparkles,
  CheckCircle,
  Shirt,
  Clock3,
  Award,
  Truck,
  Droplets,
  ShieldCheck,
  ArrowRight,
  Users,
  HeartHandshake,
} from "lucide-react";

export default function About() {
  const features = [
    {
      icon: Shirt,
      title: "Premium Garment Care",
      text: "Professional cleaning and finishing for delicate, luxury and daily wear fabrics.",
    },
    {
      icon: Clock3,
      title: "Fast Turnaround",
      text: "Quick and reliable service designed for busy UK customers.",
    },
    {
      icon: Truck,
      title: "Collection & Delivery",
      text: "Convenient pickup and delivery service for homes and businesses.",
    },
    {
      icon: Award,
      title: "Quality Standard",
      text: "Every garment is inspected, cleaned, pressed and finished carefully.",
    },
  ];

  return (
    <>
      <section className="rd-about-hero">
        <div className="rd-about-overlay"></div>

        <Container>
          <Row className="align-items-center rd-about-row">
            <Col lg={7} className="rd-reveal">
              <span className="rd-about-badge">
                <Droplets size={16} />
                Premium UK Dry Cleaning
              </span>

              <h1>
                Fresh Garment Care With A <em>Royal Standard.</em>
              </h1>

              <p>
                Royal Dry Cleaners delivers premium dry cleaning, laundry,
                ironing, alterations and garment care services with a fresh,
                clean and professional finish.
              </p>

              <div className="rd-about-actions">
                <Link to="/contact" className="rd-about-btn">
                  Contact Us <ArrowRight size={18} />
                </Link>

                <Link to="/services" className="rd-about-btn-outline">
                  View Services
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-about-story">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="rd-reveal">
              <div className="rd-about-image-wrap">
                <img
                  src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional dry cleaning machine"
                />

                <div className="rd-about-floating">
                  <ShieldCheck size={28} />
                  <div>
                    <h3>10+</h3>
                    <p>Years Experience</p>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="rd-reveal">
              <span className="rd-section-mini">About Royal Dry Cleaners</span>

              <h2>Modern Cleaning Service Built Around Freshness & Trust</h2>

              <p>
                We believe your garments deserve more than basic cleaning. Our
                team focuses on fabric care, stain treatment, professional
                pressing and premium finishing to ensure every item looks fresh,
                clean and ready to wear.
              </p>

              <p>
                Whether it is business wear, delicate dresses, coats, shirts,
                uniforms or everyday laundry, we handle each garment with
                precision, care and attention to detail.
              </p>

              <div className="rd-about-checks">
                {[
                  "Professional steam pressing",
                  "Safe fabric treatment process",
                  "Reliable collection service",
                  "Premium customer experience",
                ].map((item) => (
                  <div className="rd-check-item" key={item}>
                    <CheckCircle size={20} />
                    {item}
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-about-mission">
        <Container>
          <Row className="g-4">
            <Col lg={4} className="rd-reveal">
              <div className="rd-mission-card">
                <Droplets size={42} />
                <h3>Our Mission</h3>
                <p>
                  To provide clean, fresh and premium garment care that makes
                  every customer feel confident in their clothes.
                </p>
              </div>
            </Col>

            <Col lg={4} className="rd-reveal">
              <div className="rd-mission-card active">
                <Users size={42} />
                <h3>Our Customers</h3>
                <p>
                  We serve busy professionals, families, businesses and anyone
                  who wants reliable clothing care.
                </p>
              </div>
            </Col>

            <Col lg={4} className="rd-reveal">
              <div className="rd-mission-card">
                <HeartHandshake size={42} />
                <h3>Our Promise</h3>
                <p>
                  Careful handling, honest service, fresh finishing and garments
                  returned ready to wear.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-about-features">
        <Container>
          <div className="rd-title-center rd-reveal">
            <span>Why Choose Us</span>
            <h2>Reliable Service With Premium Quality</h2>
          </div>

          <Row className="g-4">
            {features.map((item, index) => {
              const Icon = item.icon;

              return (
                <Col lg={3} md={6} key={index} className="rd-reveal">
                  <div className="rd-feature-card">
                    <div className="rd-feature-icon">
                      <Icon size={34} />
                    </div>

                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="rd-about-gallery">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="rd-reveal">
              <span className="rd-section-mini">Fresh Results</span>
              <h2>Cleaned, Pressed & Ready To Wear</h2>
              <p>
                From hanging garments to carefully pressed clothing, our process
                is designed to give your clothes a crisp, fresh and premium
                appearance.
              </p>

              <Link to="/gallery" className="rd-about-btn">
                View Gallery <ArrowRight size={18} />
              </Link>
            </Col>

            <Col lg={6} className="rd-reveal">
              <div className="rd-gallery-stack">
                <img
                  src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=900&q=80"
                  alt="Clothes on hangers"
                />
                <img
                  src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80"
                  alt="Clean folded clothes"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-about-stats">
        <Container>
          <Row className="g-4">
            {[
              ["5000+", "Garments Cleaned"],
              ["98%", "Happy Customers"],
              ["24H", "Fast Turnaround"],
              ["100%", "Professional Care"],
            ].map(([num, text]) => (
              <Col lg={3} md={6} xs={6} key={text} className="rd-reveal">
                <div className="rd-stat-box">
                  <h3>{num}</h3>
                  <p>{text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style>{`
        a,
        a:hover,
        a:focus,
        a:active,
        .rd-about-btn,
        .rd-about-btn:hover,
        .rd-about-btn-outline,
        .rd-about-btn-outline:hover {
          text-decoration: none !important;
        }

        .rd-about-hero {
          position: relative;
          min-height: 88vh;
          background:
            url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=80")
            center/cover no-repeat;
        }

        .rd-about-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 70% 20%, rgba(126,217,255,.25), transparent 30%),
            linear-gradient(
              90deg,
              rgba(8,54,79,.9),
              rgba(72,165,207,.66),
              rgba(255,255,255,.18)
            );
        }

        .rd-about-row {
          min-height: 88vh;
          position: relative;
          z-index: 2;
          padding: 80px 0;
        }

        .rd-about-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.18);
          border: 1px solid rgba(255,255,255,.28);
          color: #e9f9ff;
          font-weight: 900;
          margin-bottom: 20px;
          backdrop-filter: blur(10px);
        }

        .rd-about-hero h1 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(44px, 6vw, 86px);
          line-height: 1;
          font-weight: 900;
          color: #fff;
          max-width: 850px;
          letter-spacing: -2px;
          text-shadow: 0 14px 40px rgba(0,0,0,.24);
        }

        .rd-about-hero h1 em {
          color: #d8f5ff;
        }

        .rd-about-hero p {
          color: #f3fbff;
          font-size: 18px;
          line-height: 1.9;
          max-width: 680px;
          margin-top: 22px;
        }

        .rd-about-actions {
          display: flex;
          gap: 16px;
          flex-wrap: wrap;
          margin-top: 35px;
        }

        .rd-about-btn,
        .rd-about-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: 999px;
          font-weight: 900;
          transition: .35s ease;
        }

        .rd-about-btn {
          background: linear-gradient(135deg, #7fd9ff, #2ea8e6);
          color: #fff !important;
          box-shadow: 0 16px 35px rgba(46,168,230,.32);
        }

        .rd-about-btn:hover {
          transform: translateY(-4px);
        }

        .rd-about-btn-outline {
          border: 1px solid rgba(255,255,255,.65);
          color: #fff !important;
          backdrop-filter: blur(10px);
        }

        .rd-about-story,
        .rd-about-mission,
        .rd-about-features,
        .rd-about-gallery,
        .rd-about-stats {
          padding: 95px 0;
        }

        .rd-about-story {
          background: linear-gradient(135deg, #ffffff, #eaf8ff);
        }

        .rd-about-image-wrap {
          position: relative;
        }

        .rd-about-image-wrap img {
          width: 100%;
          height: 620px;
          object-fit: cover;
          border-radius: 34px;
          box-shadow: 0 25px 70px rgba(46,168,230,.16);
        }

        .rd-about-floating {
          position: absolute;
          bottom: 25px;
          left: 25px;
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 22px;
          border-radius: 28px;
          background: rgba(255,255,255,.9);
          color: #31556c;
          backdrop-filter: blur(12px);
          min-width: 210px;
          box-shadow: 0 18px 40px rgba(0,0,0,.12);
        }

        .rd-about-floating svg {
          color: #2ea8e6;
        }

        .rd-about-floating h3 {
          margin: 0;
          font-size: 46px;
          color: #2ea8e6;
          font-weight: 900;
        }

        .rd-about-floating p {
          margin: 3px 0 0;
          color: #6c8797;
          font-weight: 800;
        }

        .rd-section-mini {
          display: inline-block;
          color: #2ea8e6;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 18px;
        }

        .rd-about-story h2,
        .rd-title-center h2,
        .rd-about-gallery h2 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(34px,4vw,58px);
          line-height: 1.1;
          font-weight: 900;
          color: #31556c;
        }

        .rd-about-story p,
        .rd-about-gallery p {
          color: #6c8797;
          line-height: 1.9;
          font-size: 17px;
        }

        .rd-about-checks {
          margin-top: 30px;
        }

        .rd-check-item {
          display: flex;
          align-items: center;
          gap: 10px;
          margin: 14px 0;
          font-weight: 800;
          color: #31556c;
        }

        .rd-check-item svg {
          color: #2ea8e6;
        }

        .rd-about-mission {
          background: #f9fcff;
        }

        .rd-mission-card {
          height: 100%;
          padding: 34px 28px;
          border-radius: 30px;
          background: #fff;
          border: 1px solid rgba(126,217,255,.25);
          box-shadow: 0 18px 45px rgba(46,168,230,.1);
          transition: .35s ease;
        }

        .rd-mission-card.active,
        .rd-mission-card:hover {
          transform: translateY(-10px);
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }

        .rd-mission-card svg {
          color: #2ea8e6;
          margin-bottom: 18px;
        }

        .rd-mission-card h3 {
          color: #31556c;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .rd-mission-card p {
          color: #6c8797;
          line-height: 1.8;
          margin: 0;
        }

        .rd-about-features {
          background: #fff;
        }

        .rd-title-center {
          text-align: center;
          margin-bottom: 55px;
        }

        .rd-title-center span {
          color: #2ea8e6;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .rd-feature-card {
          height: 100%;
          padding: 34px 28px;
          border-radius: 30px;
          background: linear-gradient(145deg,#fff,#eaf8ff);
          box-shadow: 0 18px 45px rgba(46,168,230,.1);
          transition: .35s;
        }

        .rd-feature-card:hover {
          transform: translateY(-10px);
        }

        .rd-feature-icon {
          width: 78px;
          height: 78px;
          border-radius: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 22px;
          background: linear-gradient(135deg,#7fd9ff,#ffffff);
          color: #2d8ec7;
          box-shadow: 0 16px 35px rgba(46,168,230,.14);
        }

        .rd-feature-card h4 {
          font-weight: 900;
          color: #31556c;
          margin-bottom: 14px;
        }

        .rd-feature-card p {
          color: #6c8797;
          line-height: 1.8;
        }

        .rd-about-gallery {
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }

        .rd-gallery-stack {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 18px;
        }

        .rd-gallery-stack img {
          width: 100%;
          height: 430px;
          object-fit: cover;
          border-radius: 30px;
          box-shadow: 0 22px 60px rgba(46,168,230,.14);
        }

        .rd-gallery-stack img:nth-child(2) {
          margin-top: 60px;
        }

        .rd-about-stats {
          background: linear-gradient(135deg,#07273a,#178bc0,#67d6ff);
        }

        .rd-stat-box {
          text-align: center;
          padding: 38px 20px;
          border-radius: 30px;
          background: rgba(255,255,255,.12);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(12px);
        }

        .rd-stat-box h3 {
          margin: 0;
          font-size: 54px;
          color: #ffffff;
          font-weight: 900;
        }

        .rd-stat-box p {
          margin: 10px 0 0;
          color: #e8f9ff;
          font-weight: 700;
        }

        @media(max-width:991px) {
          .rd-about-image-wrap img {
            height: 500px;
          }

          .rd-gallery-stack img {
            height: 360px;
          }
        }

        @media(max-width:575px) {
          .rd-about-story,
          .rd-about-mission,
          .rd-about-features,
          .rd-about-gallery,
          .rd-about-stats {
            padding: 65px 0;
          }

          .rd-about-hero h1 {
            font-size: 44px;
          }

          .rd-about-hero p {
            font-size: 16px;
          }

          .rd-about-image-wrap img {
            height: 380px;
          }

          .rd-about-floating {
            left: 15px;
            right: 15px;
            bottom: 15px;
            min-width: unset;
          }

          .rd-about-floating h3 {
            font-size: 36px;
          }

          .rd-gallery-stack {
            grid-template-columns: 1fr;
          }

          .rd-gallery-stack img,
          .rd-gallery-stack img:nth-child(2) {
            height: 320px;
            margin-top: 0;
          }
        }
      `}</style>
    </>
  );
}