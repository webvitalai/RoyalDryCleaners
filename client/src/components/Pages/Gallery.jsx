import React, { useState } from "react";
import { Container, Row, Col, Modal } from "react-bootstrap";
import {
  Droplets,
  Sparkles,
  Shirt,
  Scissors,
  Truck,
  X,
  ZoomIn,
} from "lucide-react";

export default function Gallery() {
  const galleryItems = [
    {
      category: "Dry Cleaning",
      title: "Premium Suit Care",
      text: "Formalwear cleaned and finished with professional attention.",
      image:
        "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1000&q=80",
      icon: Shirt,
    },
    {
      category: "Laundry",
      title: "Fresh Folded Laundry",
      text: "Everyday laundry washed, dried and neatly folded.",
      image:
        "https://images.unsplash.com/photo-1517677208171-0bc6725a3e60?auto=format&fit=crop&w=1000&q=80",
      icon: Sparkles,
    },
    {
      category: "Pressing",
      title: "Crisp Shirt Finish",
      text: "Clean shirts and garments pressed for a sharp look.",
      image:
        "https://images.unsplash.com/photo-1523381294911-8d3cead13475?auto=format&fit=crop&w=1000&q=80",
      icon: Droplets,
    },
    {
      category: "Alterations",
      title: "Tailoring Support",
      text: "Minor repairs and adjustments for better garment fit.",
      image:
        "https://images.unsplash.com/photo-1592878904946-b3cd8ae243d0?auto=format&fit=crop&w=1000&q=80",
      icon: Scissors,
    },
    {
      category: "Garment Care",
      title: "Coats & Outerwear",
      text: "Outerwear cleaned and refreshed with careful handling.",
      image:
        "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=1000&q=80",
      icon: Shirt,
    },
    {
      category: "Delivery",
      title: "Ready To Wear Return",
      text: "Fresh garments packed, prepared and returned with care.",
      image:
        "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1000&q=80",
      icon: Truck,
    },
    {
      category: "Delicate Care",
      title: "Soft Fabric Cleaning",
      text: "Gentle treatment for clothes that need extra attention.",
      image:
        "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1000&q=80",
      icon: Sparkles,
    },
    {
      category: "Premium Finish",
      title: "Clothes On Hangers",
      text: "Cleaned garments returned fresh, smooth and presentation ready.",
      image:
        "https://images.unsplash.com/photo-1523381210434-271e8be1f52b?auto=format&fit=crop&w=1000&q=80",
      icon: Droplets,
    },
    {
      category: "Quality Check",
      title: "Professional Inspection",
      text: "Every garment checked before final packing and return.",
      image:
        "https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1000&q=80",
      icon: Sparkles,
    },
  ];

  const categories = ["All", ...new Set(galleryItems.map((item) => item.category))];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems =
    activeCategory === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <section className="rd-gallery-hero">
        <div className="rd-gallery-overlay"></div>

        <Container>
          <div className="rd-gallery-hero-content rd-reveal">
            <span className="rd-gallery-badge">
              <Droplets size={16} />
              Fresh Work Gallery
            </span>

            <h1>
              Clean, Pressed & Professionally Finished <em>Garment Care.</em>
            </h1>

            <p>
              Explore our dry cleaning, laundry, pressing, garment care and
              ready-to-wear finishing style for modern UK customers.
            </p>
          </div>
        </Container>
      </section>

      <section className="rd-gallery-page">
        <Container>
          <div className="rd-section-title rd-reveal">
            <span>Our Work</span>
            <h2>Fresh Clothing Results & Premium Finish</h2>
            <p>
              A visual showcase of clean garments, careful fabric handling,
              laundry preparation and premium garment finishing.
            </p>
          </div>

          <div className="rd-gallery-tabs rd-reveal">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={activeCategory === cat ? "active" : ""}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>

          <Row className="g-4">
            {filteredItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Col lg={4} md={6} key={index} className="rd-reveal">
                  <div
                    className="rd-gallery-card"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img src={item.image} alt={item.title} />

                    <div className="rd-gallery-category">
                      <Icon size={16} />
                      {item.category}
                    </div>

                    <div className="rd-gallery-zoom">
                      <ZoomIn size={22} />
                    </div>

                    <div className="rd-gallery-content">
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </Col>
              );
            })}
          </Row>
        </Container>
      </section>

      <section className="rd-gallery-cta">
        <Container>
          <div className="rd-gallery-cta-box rd-reveal">
            <Sparkles size={44} />
            <h2>Want Your Clothes To Look Fresh & Ready To Wear?</h2>
            <p>
              Book dry cleaning, laundry, ironing or collection service and get
              your garments returned with a professional finish.
            </p>
          </div>
        </Container>
      </section>

      <Modal
        show={!!selectedItem}
        onHide={() => setSelectedItem(null)}
        centered
        size="lg"
        className="rd-gallery-modal"
      >
        {selectedItem && (
          <div className="rd-modal-content">
            <button
              type="button"
              className="rd-modal-close"
              onClick={() => setSelectedItem(null)}
            >
              <X size={22} />
            </button>

            <img src={selectedItem.image} alt={selectedItem.title} />

            <div className="rd-modal-info">
              <span>{selectedItem.category}</span>
              <h3>{selectedItem.title}</h3>
              <p>{selectedItem.text}</p>
            </div>
          </div>
        )}
      </Modal>

      <style>{`
        button,
        a,
        a:hover,
        a:focus,
        a:active {
          text-decoration: none !important;
        }

        .rd-gallery-hero {
          position: relative;
          min-height: 76vh;
          display: flex;
          align-items: center;
          background:
            url("https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=1800&q=80")
            center/cover no-repeat;
        }

        .rd-gallery-overlay {
          position: absolute;
          inset: 0;
          background:
            radial-gradient(circle at 72% 20%, rgba(126,217,255,.25), transparent 32%),
            linear-gradient(
              90deg,
              rgba(8,54,79,.9),
              rgba(72,165,207,.66),
              rgba(255,255,255,.16)
            );
        }

        .rd-gallery-hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
          padding: 80px 0;
        }

        .rd-gallery-badge {
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

        .rd-gallery-hero h1 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(44px, 6vw, 82px);
          line-height: 1;
          font-weight: 900;
          color: #fff;
          letter-spacing: -2px;
          text-shadow: 0 14px 40px rgba(0,0,0,.24);
        }

        .rd-gallery-hero h1 em {
          color: #d8f5ff;
        }

        .rd-gallery-hero p {
          margin-top: 22px;
          color: #f3fbff;
          font-size: 18px;
          line-height: 1.9;
          max-width: 720px;
        }

        .rd-gallery-page {
          padding: 95px 0;
          background: #f9fcff;
        }

        .rd-section-title {
          text-align: center;
          margin-bottom: 40px;
        }

        .rd-section-title span {
          color: #2ea8e6;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 2px;
        }

        .rd-section-title h2,
        .rd-gallery-cta-box h2 {
          font-family: Georgia, serif;
          font-style: italic;
          font-size: clamp(34px, 4vw, 58px);
          font-weight: 900;
          color: #31556c;
          line-height: 1.08;
        }

        .rd-section-title p,
        .rd-gallery-cta-box p {
          margin: 12px auto 0;
          color: #6c8797;
          max-width: 760px;
          line-height: 1.8;
        }

        .rd-gallery-tabs {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 45px;
        }

        .rd-gallery-tabs button {
          border: 1px solid rgba(126,217,255,.35);
          background: #ffffff;
          color: #4b6e83;
          padding: 11px 18px;
          border-radius: 999px;
          font-weight: 900;
          transition: .3s ease;
        }

        .rd-gallery-tabs button.active,
        .rd-gallery-tabs button:hover {
          background: linear-gradient(135deg, #7fd9ff, #2ea8e6);
          color: #ffffff;
          transform: translateY(-3px);
          box-shadow: 0 14px 30px rgba(46,168,230,.22);
        }

        .rd-gallery-card {
          position: relative;
          overflow: hidden;
          border-radius: 30px;
          height: 370px;
          cursor: pointer;
          box-shadow: 0 22px 60px rgba(46,168,230,.14);
          background: #ffffff;
        }

        .rd-gallery-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .48s ease;
        }

        .rd-gallery-card:hover img {
          transform: scale(1.08);
        }

        .rd-gallery-card::after {
          content: "";
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              180deg,
              rgba(0,0,0,.05),
              rgba(8,54,79,.82)
            );
        }

        .rd-gallery-category {
          position: absolute;
          top: 18px;
          left: 18px;
          z-index: 2;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 13px;
          border-radius: 999px;
          background: rgba(255,255,255,.9);
          color: #2d8ec7;
          font-size: 13px;
          font-weight: 900;
          backdrop-filter: blur(10px);
        }

        .rd-gallery-zoom {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 2;
          width: 44px;
          height: 44px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(255,255,255,.9);
          color: #2d8ec7;
          opacity: 0;
          transform: translateY(-8px);
          transition: .3s ease;
        }

        .rd-gallery-card:hover .rd-gallery-zoom {
          opacity: 1;
          transform: translateY(0);
        }

        .rd-gallery-content {
          position: absolute;
          left: 18px;
          right: 18px;
          bottom: 18px;
          z-index: 2;
          padding: 18px;
          border-radius: 22px;
          background: rgba(255,255,255,.88);
          color: #31556c;
          backdrop-filter: blur(12px);
        }

        .rd-gallery-content h4 {
          margin: 0;
          font-weight: 900;
        }

        .rd-gallery-content p {
          margin: 5px 0 0;
          color: #6c8797;
          font-size: 14px;
          line-height: 1.5;
        }

        .rd-gallery-cta {
          padding: 95px 0;
          background: linear-gradient(135deg, #eaf8ff, #ffffff);
        }

        .rd-gallery-cta-box {
          text-align: center;
          padding: 62px 28px;
          border-radius: 38px;
          background: #ffffff;
          border: 1px solid rgba(126,217,255,.2);
          box-shadow: 0 25px 70px rgba(46,168,230,.12);
        }

        .rd-gallery-cta-box svg {
          color: #2ea8e6;
          margin-bottom: 18px;
        }

        .rd-gallery-modal .modal-content {
          border: 0;
          border-radius: 30px;
          overflow: hidden;
          background: transparent;
        }

        .rd-modal-content {
          position: relative;
          background: #ffffff;
          border-radius: 30px;
          overflow: hidden;
        }

        .rd-modal-close {
          position: absolute;
          top: 18px;
          right: 18px;
          z-index: 3;
          width: 44px;
          height: 44px;
          border: 0;
          border-radius: 50%;
          background: rgba(255,255,255,.9);
          color: #2d8ec7;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .rd-modal-content img {
          width: 100%;
          height: 520px;
          object-fit: cover;
        }

        .rd-modal-info {
          padding: 28px;
        }

        .rd-modal-info span {
          color: #2ea8e6;
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }

        .rd-modal-info h3 {
          margin: 8px 0;
          color: #31556c;
          font-weight: 900;
          font-family: Georgia, serif;
          font-style: italic;
        }

        .rd-modal-info p {
          margin: 0;
          color: #6c8797;
          line-height: 1.8;
        }

        @media(max-width:575px) {
          .rd-gallery-page,
          .rd-gallery-cta {
            padding: 65px 0;
          }

          .rd-gallery-card {
            height: 310px;
          }

          .rd-modal-content img {
            height: 330px;
          }

          .rd-gallery-hero h1 {
            font-size: 43px;
          }

          .rd-gallery-hero p {
            font-size: 16px;
          }

          .rd-gallery-cta-box {
            padding: 42px 20px;
          }
        }
      `}</style>
    </>
  );
}