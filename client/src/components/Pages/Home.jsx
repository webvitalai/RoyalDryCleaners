import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Shirt,
  Sparkles,
  Leaf,
  Star,
  CheckCircle,
  Truck,
  Clock3,
  Scissors,
  ShieldCheck,
  ArrowRight,
  Phone,
  MapPin,
  Droplets,
  BadgeCheck,
  PackageCheck,
} from "lucide-react";

export default function Home() {
  const services = [
    {
      icon: Shirt,
      title: "Dry Cleaning",
      text: "Professional cleaning for suits, coats, dresses, jackets and delicate garments.",
    },
    {
      icon: Sparkles,
      title: "Laundry Service",
      text: "Freshly washed, dried and folded laundry for everyday clothing.",
    },
    {
      icon: Star,
      title: "Ironing & Pressing",
      text: "Sharp steam pressing for shirts, trousers, uniforms and formalwear.",
    },
    {
      icon: Scissors,
      title: "Alterations",
      text: "Garment repairs, fitting adjustments and basic tailoring support.",
    },
  ];

  const process = [
    "Book Collection",
    "Garment Inspection",
    "Cleaning & Pressing",
    "Fresh Delivery",
  ];

  return (
    <>
      <section className="rd-home-hero">
        <div className="rd-hero-overlay"></div>

        <Container>
          <Row className="align-items-center rd-hero-row">
            <Col lg={7} className="rd-reveal">
              <span className="rd-badge">
                <Droplets size={16} />
                Premium UK Dry Cleaning Service
              </span>

              <h1>
                Fresh, Clean & Perfectly Pressed With A{" "}
                <em>Royal Finish.</em>
              </h1>

              <p>
                Royal Dry Cleaners provides premium dry cleaning, laundry,
                ironing, alterations and collection service for customers who
                want their garments handled with care, detail and elegance.
              </p>

              <div className="rd-actions">
                <Link to="/contact" className="rd-btn">
                  Book Collection <ArrowRight size={18} />
                </Link>

                <a href="tel:+447402926246" className="rd-btn-outline">
                  <Phone size={18} /> Call Now
                </a>
              </div>

              <div className="rd-hero-points">
                <span>
                  <CheckCircle size={18} /> Fast Turnaround
                </span>
                <span>
                  <CheckCircle size={18} /> Collection Available
                </span>
                <span>
                  <CheckCircle size={18} /> Premium Finish
                </span>
              </div>
            </Col>

            <Col lg={5} className="rd-reveal">
              <div className="rd-hero-card">
                <h3>Luxury Garment Care</h3>
                <p>
                  Suits, dresses, coats, shirts, uniforms and delicate fabrics
                  cleaned with a fresh water-inspired premium process.
                </p>

                <div className="rd-mini-list">
                  <span>
                    <Clock3 size={18} /> Mon - Sat: 8am - 7pm
                  </span>
                  <span>
                    <Truck size={18} /> Pickup & Delivery
                  </span>
                  <span>
                    <MapPin size={18} /> UK Local Service
                  </span>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-stats-strip">
        <Container>
          <Row className="g-4">
            {[
              ["10+", "Years Experience"],
              ["5k+", "Garments Cleaned"],
              ["98%", "Customer Satisfaction"],
              ["24h", "Fast Turnaround"],
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

      <section className="rd-services-section">
        <Container>
          <div className="rd-section-title rd-reveal">
            <span>What We Do</span>
            <h2>Complete Garment Care Services</h2>
            <p>
              From everyday laundry to premium dry cleaning, we handle every
              garment with clean precision, soft finishing and professional care.
            </p>
          </div>

          <Row className="g-4">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Col lg={3} md={6} key={index} className="rd-reveal">
                  <Card className="rd-service-card">
                    <div className="rd-service-icon">
                      <Icon size={36} />
                    </div>

                    <h4>{item.title}</h4>
                    <p>{item.text}</p>

                    <Link to="/services">
                      View Service <ArrowRight size={16} />
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="rd-about-preview">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="rd-reveal">
              <div className="rd-image-stack">
                <img
                  className="main-img"
                  src="https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1200&q=80"
                  alt="Dry cleaning machine clothes"
                />

                <div className="rd-floating-note">
                  <ShieldCheck size={26} />
                  <div>
                    <strong>Quality Checked</strong>
                    <span>Every garment inspected before return</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="rd-reveal">
              <span className="rd-badge dark">About Royal Dry Cleaners</span>

              <h2>
                A Fresh, Modern Cleaning Company Built Around Care & Trust.
              </h2>

              <p>
                Royal Dry Cleaners is created for customers who want more than
                basic cleaning. We focus on fabric protection, stain care,
                careful pressing and a premium finish that makes every garment
                feel fresh, clean and ready to wear.
              </p>

              <div className="rd-check-grid">
                {[
                  "Delicate fabric handling",
                  "Professional steam pressing",
                  "Reliable collection service",
                  "Friendly customer support",
                ].map((item) => (
                  <div className="rd-check" key={item}>
                    <CheckCircle size={19} /> {item}
                  </div>
                ))}
              </div>

              <Link to="/about" className="rd-btn dark-btn">
                Learn More <ArrowRight size={18} />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-feature-banner">
        <Container>
          <Row className="g-4">
            <Col lg={4} className="rd-reveal">
              <div className="rd-water-card">
                <Droplets size={40} />
                <h3>Fresh Water-Inspired Finish</h3>
                <p>
                  Clean, light and premium garment care with a soft fresh look.
                </p>
              </div>
            </Col>

            <Col lg={4} className="rd-reveal">
              <div className="rd-water-card active">
                <BadgeCheck size={40} />
                <h3>Trusted Quality Control</h3>
                <p>
                  Every garment is checked, cleaned, pressed and finished
                  carefully.
                </p>
              </div>
            </Col>

            <Col lg={4} className="rd-reveal">
              <div className="rd-water-card">
                <PackageCheck size={40} />
                <h3>Ready To Wear Return</h3>
                <p>
                  Your clothes return fresh, packed, pressed and ready to use.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-process-section">
        <Container>
          <div className="rd-section-title light rd-reveal">
            <span>How It Works</span>
            <h2>Simple, Fast & Convenient</h2>
          </div>

          <Row className="g-4">
            {process.map((item, index) => (
              <Col lg={3} md={6} key={item} className="rd-reveal">
                <div className="rd-process-card">
                  <div className="rd-process-num">0{index + 1}</div>
                  <h4>{item}</h4>
                  <p>
                    A smooth and professional process designed to save your time
                    and protect your garments.
                  </p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="rd-premium-section">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="rd-reveal">
              <span className="rd-badge dark">Why Customers Choose Us</span>

              <h2>Premium Results For Everyday & Luxury Clothing</h2>

              <p>
                We combine careful garment inspection, professional cleaning,
                stain attention and final pressing to deliver a polished result
                every time.
              </p>

              <div className="rd-premium-list">
                <div>
                  <Leaf size={24} />
                  <span>Fabric-safe cleaning approach</span>
                </div>

                <div>
                  <Sparkles size={24} />
                  <span>Fresh fragrance and luxury finish</span>
                </div>

                <div>
                  <Truck size={24} />
                  <span>Collection and delivery available</span>
                </div>
              </div>
            </Col>

            <Col lg={6} className="rd-reveal">
              <img
                className="rd-premium-img"
                src="https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1200&q=80"
                alt="Clothes on hangers"
              />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-final-cta">
        <Container>
          <div className="rd-final-box rd-reveal">
            <h2>Ready To Give Your Clothes The Royal Treatment?</h2>
            <p>
              Book your dry cleaning, laundry or ironing service today and enjoy
              fresh professional garment care with a premium finish.
            </p>

            <div className="rd-actions center">
              <Link to="/contact" className="rd-btn">
                Book Collection <ArrowRight size={18} />
              </Link>

              <a href="tel:+442078334984" className="rd-btn-outline dark-outline">
                Call Now
              </a>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        a,
        a:hover,
        a:focus,
        a:active,
        .rd-btn,
        .rd-btn:hover,
        .rd-btn:focus,
        .rd-btn:active,
        .rd-btn-outline,
        .rd-btn-outline:hover,
        .rd-btn-outline:focus,
        .rd-btn-outline:active,
        .rd-service-card a,
        .rd-service-card a:hover,
        .rd-service-card a:focus,
        .rd-service-card a:active {
          text-decoration: none !important;
        }

        .rd-home-hero {
          position: relative;
          min-height: 100vh;
          background:
            url("https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1800&q=80")
            center/cover no-repeat;
          overflow: hidden;
        }

        .rd-hero-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 70% 20%, rgba(126, 217, 255, .22), transparent 32%),
            linear-gradient(
              90deg,
              rgba(8, 54, 79, .88),
              rgba(72, 165, 207, .62),
              rgba(255,255,255,.15)
            );
        }

        .rd-hero-row {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          padding: 80px 0;
        }

        .rd-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 11px 18px;
          border-radius: 999px;
          background: rgba(255,255,255,.2);
          color: #e9f9ff;
          font-weight: 900;
          margin-bottom: 20px;
          border: 1px solid rgba(255,255,255,.28);
          backdrop-filter: blur(10px);
        }

        .rd-badge.dark {
          background: #eaf8ff;
          color: #2d8ec7;
          border: 1px solid #c8efff;
        }

        .rd-home-hero h1 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(44px, 6vw, 86px);
          font-weight: 900;
          line-height: 1;
          letter-spacing: -2.5px;
          color: #ffffff;
          max-width: 900px;
          text-shadow: 0 14px 40px rgba(0,0,0,.24);
        }

        .rd-home-hero h1 em {
          color: #d8f5ff;
        }

        .rd-home-hero p {
          margin-top: 22px;
          color: #f3fbff;
          font-size: 18px;
          line-height: 1.9;
          max-width: 700px;
        }

        .rd-actions {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .rd-actions.center {
          justify-content: center;
        }

        .rd-btn,
        .rd-btn-outline {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: 999px;
          font-weight: 900;
          transition: .35s ease;
        }

        .rd-btn {
          color: #ffffff !important;
          background: linear-gradient(135deg, #7fd9ff, #2ea8e6);
          box-shadow: 0 16px 35px rgba(46,168,230,.32);
        }

        .rd-btn:hover {
          transform: translateY(-4px);
        }

        .rd-btn-outline {
          color: #fff !important;
          border: 1px solid rgba(255,255,255,.65);
          backdrop-filter: blur(10px);
        }

        .dark-outline {
          color: #2d6d91 !important;
          border-color: rgba(46,168,230,.35);
        }

        .dark-btn {
          margin-top: 22px;
        }

        .rd-hero-points {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
          margin-top: 28px;
        }

        .rd-hero-points span {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #ffffff;
          font-weight: 800;
          font-size: 14px;
        }

        .rd-hero-points svg {
          color: #d8f5ff;
        }

        .rd-hero-card {
          padding: 32px;
          border-radius: 34px;
          background: rgba(255,255,255,.18);
          border: 1px solid rgba(255,255,255,.28);
          backdrop-filter: blur(18px);
          color: #fff;
          box-shadow: 0 30px 80px rgba(0,0,0,.18);
        }

        .rd-hero-card h3 {
          font-family: Georgia, serif;
          font-style: italic;
          font-weight: 900;
          font-size: 34px;
          color: #ffffff;
        }

        .rd-hero-card p {
          color: #f1fbff;
          font-size: 16px;
          line-height: 1.7;
        }

        .rd-mini-list {
          display: grid;
          gap: 14px;
          margin-top: 25px;
        }

        .rd-mini-list span {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 13px 14px;
          border-radius: 18px;
          background: rgba(255,255,255,.16);
          font-weight: 800;
        }

        .rd-stats-strip {
          padding: 42px 0;
          background: linear-gradient(135deg, #eaf8ff, #ffffff, #dff4ff);
        }

        .rd-stat-box {
          text-align: center;
          padding: 30px 18px;
          border-radius: 28px;
          background: rgba(255,255,255,.88);
          border: 1px solid rgba(126,217,255,.28);
          box-shadow: 0 16px 40px rgba(46,168,230,.12);
        }

        .rd-stat-box h3 {
          margin: 0;
          font-size: 46px;
          color: #2ea8e6;
          font-weight: 900;
        }

        .rd-stat-box p {
          margin: 8px 0 0;
          color: #4b6e83;
          font-weight: 800;
        }

        .rd-services-section,
        .rd-about-preview,
        .rd-feature-banner,
        .rd-process-section,
        .rd-premium-section,
        .rd-final-cta {
          padding: 95px 0;
        }

        .rd-services-section {
          background: #f9fcff;
        }

        .rd-section-title {
          text-align: center;
          margin-bottom: 55px;
        }

        .rd-section-title span {
          color: #2ea8e6;
          font-weight: 900;
          letter-spacing: 2px;
          text-transform: uppercase;
        }

        .rd-section-title h2,
        .rd-about-preview h2,
        .rd-premium-section h2,
        .rd-final-box h2 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(34px, 4vw, 58px);
          font-weight: 900;
          color: #31556c;
          line-height: 1.08;
        }

        .rd-section-title p {
          max-width: 720px;
          margin: 12px auto 0;
          color: #6c8797;
          line-height: 1.8;
        }

        .rd-service-card {
          height: 100%;
          border: 0;
          border-radius: 30px;
          padding: 34px 28px;
          background: linear-gradient(145deg, #ffffff, #eaf8ff);
          box-shadow: 0 18px 45px rgba(46,168,230,.12);
          transition: .35s;
        }

        .rd-service-card:hover {
          transform: translateY(-10px);
        }

        .rd-service-icon {
          width: 76px;
          height: 76px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 24px;
          background: linear-gradient(135deg, #7fd9ff, #ffffff);
          color: #2d8ec7;
          margin-bottom: 22px;
          box-shadow: 0 15px 30px rgba(46,168,230,.14);
        }

        .rd-service-card h4 {
          color: #31556c;
          font-weight: 900;
          margin-bottom: 12px;
        }

        .rd-service-card p {
          color: #6c8797;
          line-height: 1.8;
        }

        .rd-service-card a {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          margin-top: 8px;
          color: #2ea8e6;
          font-weight: 900;
        }

        .rd-about-preview {
          background: linear-gradient(135deg, #ffffff, #eaf8ff);
        }

        .rd-image-stack {
          position: relative;
        }

        .main-img,
        .rd-premium-img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 36px;
          box-shadow: 0 28px 75px rgba(46,168,230,.15);
        }

        .rd-floating-note {
          position: absolute;
          left: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 24px;
          background: rgba(255,255,255,.88);
          color: #31556c;
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 40px rgba(0,0,0,.12);
        }

        .rd-floating-note svg {
          color: #2ea8e6;
        }

        .rd-floating-note strong,
        .rd-floating-note span {
          display: block;
        }

        .rd-floating-note span {
          color: #6c8797;
          font-size: 13px;
        }

        .rd-about-preview p,
        .rd-premium-section p {
          color: #6c8797;
          line-height: 1.9;
          font-size: 17px;
        }

        .rd-check-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 14px;
          margin-top: 25px;
        }

        .rd-check {
          display: flex;
          align-items: center;
          gap: 9px;
          color: #31556c;
          font-weight: 800;
        }

        .rd-check svg {
          color: #2ea8e6;
        }

        .rd-feature-banner {
          background: #f9fcff;
        }

        .rd-water-card {
          height: 100%;
          padding: 34px 28px;
          border-radius: 30px;
          background: #ffffff;
          border: 1px solid rgba(126,217,255,.25);
          box-shadow: 0 18px 45px rgba(46,168,230,.1);
          transition: .35s;
        }

        .rd-water-card.active,
        .rd-water-card:hover {
          transform: translateY(-10px);
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }

        .rd-water-card svg {
          color: #2ea8e6;
          margin-bottom: 18px;
        }

        .rd-water-card h3 {
          color: #31556c;
          font-weight: 900;
          margin-bottom: 10px;
        }

        .rd-water-card p {
          color: #6c8797;
          line-height: 1.8;
          margin: 0;
        }

        .rd-process-section {
          background:
            linear-gradient(rgba(13, 82, 116, .86), rgba(25, 144, 195, .86)),
            url("https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1800&q=80")
            center/cover fixed;
        }

        .rd-section-title.light h2 {
          color: #fff;
        }

        .rd-section-title.light span {
          color: #d8f5ff;
        }

        .rd-process-card {
          height: 100%;
          padding: 32px 26px;
          border-radius: 30px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(12px);
          color: #fff;
          transition: .35s;
        }

        .rd-process-card:hover {
          transform: translateY(-10px);
          background: rgba(255,255,255,.2);
        }

        .rd-process-num {
          width: 62px;
          height: 62px;
          border-radius: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff, #bcecff);
          color: #2d8ec7;
          font-size: 22px;
          font-weight: 900;
          margin-bottom: 22px;
        }

        .rd-process-card h4 {
          font-weight: 900;
          margin-bottom: 12px;
        }

        .rd-process-card p {
          color: #f0fbff;
          line-height: 1.75;
        }

        .rd-premium-section {
          background: #f9fcff;
        }

        .rd-premium-list {
          display: grid;
          gap: 18px;
          margin-top: 28px;
        }

        .rd-premium-list div {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px;
          border-radius: 22px;
          background: #fff;
          box-shadow: 0 14px 35px rgba(46,168,230,.1);
          font-weight: 900;
          color: #31556c;
        }

        .rd-premium-list svg {
          color: #2ea8e6;
        }

        .rd-final-cta {
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }

        .rd-final-box {
          text-align: center;
          padding: 62px 28px;
          border-radius: 38px;
          background: #ffffff;
          border: 1px solid rgba(126,217,255,.2);
          box-shadow: 0 25px 70px rgba(46,168,230,.12);
        }

        .rd-final-box p {
          max-width: 720px;
          margin: 15px auto 0;
          color: #6c8797;
          line-height: 1.8;
        }

        @media(max-width:991px) {
          .rd-hero-card {
            margin-top: 35px;
          }

          .main-img,
          .rd-premium-img {
            height: 460px;
          }

          .rd-check-grid {
            grid-template-columns: 1fr;
          }
        }

        @media(max-width:575px) {
          .rd-home-hero h1 {
            font-size: 43px;
          }

          .rd-home-hero p {
            font-size: 16px;
          }

          .rd-hero-row {
            padding: 55px 0;
          }

          .rd-services-section,
          .rd-about-preview,
          .rd-feature-banner,
          .rd-process-section,
          .rd-premium-section,
          .rd-final-cta {
            padding: 65px 0;
          }

          .main-img,
          .rd-premium-img {
            height: 360px;
            border-radius: 28px;
          }

          .rd-floating-note {
            left: 15px;
            right: 15px;
            bottom: 15px;
          }

          .rd-hero-card {
            padding: 24px;
            border-radius: 28px;
          }

          .rd-stat-box h3 {
            font-size: 36px;
          }

          .rd-final-box {
            padding: 42px 20px;
          }
        }
      `}</style>
    </>
  );
}