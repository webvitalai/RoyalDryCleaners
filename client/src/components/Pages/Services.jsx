import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  Shirt,
  Sparkles,
  Star,
  Scissors,
  Leaf,
  Truck,
  ArrowRight,
  CheckCircle,
  Droplets,
  Clock3,
  ShieldCheck,
  PackageCheck,
  BadgeCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Shirt,
      title: "Premium Dry Cleaning",
      image:
        "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=900&q=80",
      text: "Specialist garment care for suits, coats, blazers, formalwear and delicate fabrics.",
      points: ["Formalwear care", "Fabric inspection", "Luxury finishing"],
    },
    {
      icon: Sparkles,
      title: "Wash & Fold Laundry",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=900&q=80",
      text: "Fresh everyday laundry washed, dried, folded and prepared for homes and families.",
      points: ["Fresh washing", "Neat folding", "Weekly laundry"],
    },
    {
      icon: Star,
      title: "Shirt Pressing",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=900&q=80",
      text: "Crisp shirt, trouser and uniform pressing for a sharp ready-to-wear finish.",
      points: ["Steam pressing", "Office shirts", "Sharp finish"],
    },
    {
      icon: Scissors,
      title: "Repairs & Alterations",
      image:
        "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=900&q=80",
      text: "Simple repairs, hems, button replacement and fitting adjustments for better comfort.",
      points: ["Hems", "Buttons", "Minor repairs"],
    },
    {
      icon: Leaf,
      title: "Delicate Fabric Care",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=900&q=80",
      text: "Gentle cleaning for delicate garments, soft fabrics and clothing needing extra care.",
      points: ["Gentle handling", "Soft finish", "Careful cleaning"],
    },
    {
      icon: Truck,
      title: "Pickup & Delivery",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80",
      text: "Convenient collection and return service for busy customers, homes and businesses.",
      points: ["Doorstep pickup", "Easy booking", "Fresh return"],
    },
  ];

  const process = [
    {
      icon: Clock3,
      title: "Schedule Collection",
      text: "Contact us and select the service you need for your garments.",
    },
    {
      icon: ShieldCheck,
      title: "Sort & Inspect",
      text: "We check stains, fabric type, care labels and finishing requirements.",
    },
    {
      icon: Droplets,
      title: "Clean & Finish",
      text: "Items are professionally cleaned, pressed and prepared with care.",
    },
    {
      icon: PackageCheck,
      title: "Return Ready",
      text: "Your garments return fresh, packed and ready to wear.",
    },
  ];

  return (
    <>
      <section className="rd-services-hero">
        <div className="rd-services-overlay"></div>

        <Container>
          <Row className="align-items-center rd-services-hero-row">
            <Col lg={8} className="rd-reveal">
              <span className="rd-services-badge">
                <Droplets size={16} />
                Fresh Garment Care Services
              </span>

              <h1>
                Tailored Cleaning Services For Every <em>Garment Type.</em>
              </h1>

              <p>
                From office shirts and family laundry to delicate fabrics,
                alterations and collection service — our cleaning solutions are
                designed for freshness, convenience and professional results.
              </p>

              <div className="rd-services-actions">
                <Link to="/contact" className="rd-main-btn">
                  Book A Service <ArrowRight size={18} />
                </Link>

                <Link to="/gallery" className="rd-outline-btn">
                  View Gallery
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-services-page">
        <Container>
          <div className="rd-section-title rd-reveal">
            <span>Service Menu</span>
            <h2>Fresh, Pressed & Professionally Finished</h2>
            <p>
              Choose the cleaning service that fits your garment, schedule and
              lifestyle.
            </p>
          </div>

          <Row className="g-4">
            {services.map((item, index) => {
              const Icon = item.icon;

              return (
                <Col lg={4} md={6} key={index} className="rd-reveal">
                  <Card className="rd-service-card large">
                    <div className="rd-service-img">
                      <img src={item.image} alt={item.title} />
                      <div className="rd-card-icon">
                        <Icon size={34} />
                      </div>
                    </div>

                    <div className="rd-card-body">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>

                      <div className="rd-service-points">
                        {item.points.map((point) => (
                          <span key={point}>
                            <CheckCircle size={16} />
                            {point}
                          </span>
                        ))}
                      </div>

                      <Link to="/contact" className="rd-card-link">
                        Book This Service <ArrowRight size={16} />
                      </Link>
                    </div>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="rd-service-showcase">
        <Container>
          <Row className="align-items-center g-5">
            <Col lg={6} className="rd-reveal">
              <div className="rd-showcase-img">
                <img
                  src="https://images.unsplash.com/photo-1561053720-76cd73ff22c3?auto=format&fit=crop&w=1200&q=80"
                  alt="Professional laundry service"
                />

                <div className="rd-showcase-floating">
                  <BadgeCheck size={26} />
                  <div>
                    <strong>Fresh Finish</strong>
                    <span>Cleaned, pressed and checked</span>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={6} className="rd-reveal">
              <span className="rd-mini-title">Service Quality</span>

              <h2>More Than Cleaning — We Protect The Look Of Your Clothes</h2>

              <p>
                Every item is handled according to its fabric, condition and
                finish. Our aim is to return garments looking fresh, smooth and
                ready for your next day, meeting or event.
              </p>

              <div className="rd-check-list">
                {[
                  "Fabric sorting before cleaning",
                  "Stain and care-label checking",
                  "Fresh pressing and neat packing",
                  "Pickup and return options available",
                ].map((item) => (
                  <div key={item}>
                    <CheckCircle size={20} />
                    {item}
                  </div>
                ))}
              </div>

              <Link to="/contact" className="rd-main-btn dark">
                Request Collection <ArrowRight size={18} />
              </Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="rd-process-section">
        <Container>
          <div className="rd-section-title light rd-reveal">
            <span>Simple Process</span>
            <h2>From Collection To Fresh Return</h2>
          </div>

          <Row className="g-4">
            {process.map((item, index) => {
              const Icon = item.icon;

              return (
                <Col lg={3} md={6} key={index} className="rd-reveal">
                  <div className="rd-process-card">
                    <div className="rd-process-number">0{index + 1}</div>

                    <div className="rd-process-icon">
                      <Icon size={30} />
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

      <section className="rd-service-gallery-strip">
        <Container>
          <div className="rd-section-title rd-reveal">
            <span>Service Results</span>
            <h2>Clean Clothing, Crisp Finish, Fresh Feel</h2>
          </div>

          <Row className="g-4">
            {[
              {
                img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=900&q=80",
                title: "Formalwear Care",
                text: "Suits and premium clothing handled carefully.",
              },
              {
                img: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=900&q=80",
                title: "Fresh Laundry",
                text: "Washed, folded and ready for daily use.",
              },
              {
                img: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=900&q=80",
                title: "Coat Cleaning",
                text: "Outerwear refreshed with a clean finish.",
              },
            ].map((item, index) => (
              <Col lg={4} md={6} key={index} className="rd-reveal">
                <div className="rd-gallery-img-card">
                  <img src={item.img} alt={item.title} />
                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.text}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="rd-service-cta">
        <Container>
          <div className="rd-cta-box rd-reveal">
            <h2>Not Sure Which Service You Need?</h2>

            <p>
              Tell us about your garments and we will recommend the right
              cleaning, pressing or collection option for you.
            </p>

            <Link to="/contact" className="rd-main-btn">
              Ask For Advice <ArrowRight size={18} />
            </Link>
          </div>
        </Container>
      </section>

      <style>{`
        a,
        a:hover,
        a:focus,
        a:active,
        .rd-main-btn,
        .rd-main-btn:hover,
        .rd-outline-btn,
        .rd-outline-btn:hover,
        .rd-card-link,
        .rd-card-link:hover {
          text-decoration: none !important;
        }

        .rd-services-hero {
          position: relative;
          min-height: 82vh;
          background:
            url("https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1800&q=80")
            center/cover no-repeat;
        }

        .rd-services-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 70% 18%, rgba(126,217,255,.24), transparent 30%),
            linear-gradient(90deg, rgba(8,54,79,.9), rgba(72,165,207,.68), rgba(255,255,255,.16));
        }

        .rd-services-hero-row {
          min-height: 82vh;
          position: relative;
          z-index: 2;
          padding: 80px 0;
        }

        .rd-services-badge {
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

        .rd-services-hero h1 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1;
          font-weight: 900;
          color: #fff;
          max-width: 950px;
          letter-spacing: -2px;
          text-shadow: 0 14px 40px rgba(0,0,0,.24);
        }

        .rd-services-hero h1 em {
          color: #d8f5ff;
        }

        .rd-services-hero p {
          margin-top: 22px;
          color: #f3fbff;
          font-size: 18px;
          line-height: 1.9;
          max-width: 720px;
        }

        .rd-services-actions {
          display: flex;
          align-items: center;
          gap: 15px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .rd-main-btn,
        .rd-outline-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 14px 26px;
          border-radius: 999px;
          font-weight: 900;
          transition: .35s ease;
        }

        .rd-main-btn {
          color: #ffffff !important;
          background: linear-gradient(135deg, #7fd9ff, #2ea8e6);
          box-shadow: 0 16px 35px rgba(46,168,230,.32);
        }

        .rd-main-btn.dark {
          margin-top: 24px;
        }

        .rd-main-btn:hover {
          transform: translateY(-4px);
        }

        .rd-outline-btn {
          color: #fff !important;
          border: 1px solid rgba(255,255,255,.65);
          backdrop-filter: blur(10px);
        }

        .rd-services-page,
        .rd-service-showcase,
        .rd-process-section,
        .rd-service-gallery-strip,
        .rd-service-cta {
          padding: 95px 0;
        }

        .rd-services-page {
          background: #f9fcff;
        }

        .rd-section-title {
          text-align: center;
          margin-bottom: 55px;
        }

        .rd-section-title span,
        .rd-mini-title {
          color: #2ea8e6;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .rd-section-title h2,
        .rd-service-showcase h2,
        .rd-cta-box h2 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(34px, 4vw, 58px);
          font-weight: 900;
          color: #31556c;
          line-height: 1.08;
        }

        .rd-section-title p,
        .rd-service-showcase p,
        .rd-cta-box p {
          margin: 12px auto 0;
          color: #6c8797;
          max-width: 760px;
          line-height: 1.8;
        }

        .rd-service-card {
          height: 100%;
          border: 0;
          border-radius: 30px;
          overflow: hidden;
          background: linear-gradient(145deg, #ffffff, #eaf8ff);
          box-shadow: 0 18px 45px rgba(46,168,230,.12);
          transition: .35s;
        }

        .rd-service-card.large {
          min-height: 465px;
          display: flex;
          flex-direction: column;
        }

        .rd-service-card:hover {
          transform: translateY(-10px);
        }

        .rd-service-img {
          position: relative;
          height: 210px;
          overflow: hidden;
        }

        .rd-service-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .45s ease;
        }

        .rd-service-card:hover .rd-service-img img {
          transform: scale(1.08);
        }

        .rd-card-icon {
          position: absolute;
          left: 22px;
          bottom: -30px;
          width: 66px;
          height: 66px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #7fd9ff, #ffffff);
          color: #2d8ec7;
          box-shadow: 0 16px 35px rgba(46,168,230,.2);
          border: 4px solid #ffffff;
        }

        .rd-card-body {
          padding: 44px 28px 30px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        .rd-service-card h4 {
          font-weight: 900;
          color: #31556c;
          margin-bottom: 12px;
        }

        .rd-service-card p {
          color: #6c8797;
          line-height: 1.8;
        }

        .rd-service-points {
          display: grid;
          gap: 10px;
          margin: 12px 0 20px;
        }

        .rd-service-points span {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #31556c;
          font-weight: 800;
          font-size: 14px;
        }

        .rd-service-points svg {
          color: #2ea8e6;
        }

        .rd-card-link {
          margin-top: auto;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          color: #2ea8e6;
          font-weight: 900;
        }

        .rd-service-showcase {
          background: linear-gradient(135deg, #ffffff, #eaf8ff);
        }

        .rd-showcase-img {
          position: relative;
        }

        .rd-showcase-img img {
          width: 100%;
          height: 560px;
          object-fit: cover;
          border-radius: 36px;
          box-shadow: 0 28px 75px rgba(46,168,230,.15);
        }

        .rd-showcase-floating {
          position: absolute;
          left: 25px;
          bottom: 25px;
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 24px;
          background: rgba(255,255,255,.9);
          color: #31556c;
          backdrop-filter: blur(14px);
          box-shadow: 0 18px 40px rgba(0,0,0,.12);
        }

        .rd-showcase-floating svg {
          color: #2ea8e6;
        }

        .rd-showcase-floating strong,
        .rd-showcase-floating span {
          display: block;
        }

        .rd-showcase-floating span {
          color: #6c8797;
          font-size: 13px;
        }

        .rd-check-list {
          display: grid;
          gap: 14px;
          margin-top: 25px;
        }

        .rd-check-list div {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #31556c;
          font-weight: 800;
        }

        .rd-check-list svg {
          color: #2ea8e6;
        }

        .rd-process-section {
          background:
            linear-gradient(rgba(13, 82, 116, .86), rgba(25, 144, 195, .86)),
            url("https://images.unsplash.com/photo-1582735689369-4fe89db7114c?auto=format&fit=crop&w=1800&q=80")
            center/cover fixed;
        }

        .rd-section-title.light h2 {
          color: #fff;
        }

        .rd-section-title.light span {
          color: #d8f5ff;
        }

        .rd-process-card {
          position: relative;
          height: 100%;
          padding: 32px 26px;
          border-radius: 30px;
          background: rgba(255,255,255,.14);
          border: 1px solid rgba(255,255,255,.18);
          backdrop-filter: blur(12px);
          color: #fff;
          transition: .35s;
          overflow: hidden;
        }

        .rd-process-card:hover {
          transform: translateY(-10px);
          background: rgba(255,255,255,.2);
        }

        .rd-process-number {
          position: absolute;
          top: 18px;
          right: 22px;
          font-size: 48px;
          font-weight: 900;
          color: rgba(255,255,255,.16);
        }

        .rd-process-icon {
          width: 68px;
          height: 68px;
          border-radius: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #ffffff, #bcecff);
          color: #2d8ec7;
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

        .rd-service-gallery-strip {
          background: #f9fcff;
        }

        .rd-gallery-img-card {
          position: relative;
          overflow: hidden;
          height: 360px;
          border-radius: 32px;
          box-shadow: 0 22px 60px rgba(46,168,230,.14);
        }

        .rd-gallery-img-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .45s ease;
        }

        .rd-gallery-img-card:hover img {
          transform: scale(1.08);
        }

        .rd-gallery-img-card div {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.88);
          backdrop-filter: blur(12px);
        }

        .rd-gallery-img-card h4 {
          margin: 0;
          color: #31556c;
          font-weight: 900;
        }

        .rd-gallery-img-card p {
          margin: 4px 0 0;
          color: #6c8797;
        }

        .rd-service-cta {
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }

        .rd-cta-box {
          text-align: center;
          padding: 62px 28px;
          border-radius: 38px;
          background: #ffffff;
          border: 1px solid rgba(126,217,255,.2);
          box-shadow: 0 25px 70px rgba(46,168,230,.12);
        }

        .rd-cta-box p {
          margin-bottom: 26px;
        }

        @media(max-width:991px) {
          .rd-showcase-img img {
            height: 460px;
          }
        }

        @media(max-width:575px) {
          .rd-services-hero h1 {
            font-size: 43px;
          }

          .rd-services-hero p {
            font-size: 16px;
          }

          .rd-services-page,
          .rd-service-showcase,
          .rd-process-section,
          .rd-service-gallery-strip,
          .rd-service-cta {
            padding: 65px 0;
          }

          .rd-showcase-img img {
            height: 360px;
            border-radius: 28px;
          }

          .rd-showcase-floating {
            left: 15px;
            right: 15px;
            bottom: 15px;
          }

          .rd-gallery-img-card {
            height: 300px;
          }

          .rd-cta-box {
            padding: 42px 20px;
          }
        }
      `}</style>
    </>
  );
}