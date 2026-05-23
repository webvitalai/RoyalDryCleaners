import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  Droplets,
  Truck,
  MessageCircle,
  CalendarCheck,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  return (
    <>
      <section className="rd-contact-hero">
        <div className="rd-contact-overlay"></div>

        <Container>
          <div className="rd-contact-hero-content rd-reveal">
            <span className="rd-contact-badge">
              <Droplets size={16} />
              Contact Royal Dry Cleaners
            </span>

            <h1>
              Book Your Collection Or Ask About Our <em>Garment Care.</em>
            </h1>

            <p>
              Need dry cleaning, laundry, ironing, alterations or pickup and
              delivery? Send us your request and our team will help you choose
              the right service.
            </p>
          </div>
        </Container>
      </section>

      <section className="rd-contact-page">
        <Container>
          <div className="rd-section-title rd-reveal">
            <span>Get In Touch</span>
            <h2>We Are Ready To Help</h2>
            <p>
              Contact us for collection bookings, garment care questions,
              service information or business laundry support.
            </p>
          </div>

          <Row className="g-4">
            <Col lg={4} md={6} className="rd-reveal">
              <div className="rd-info-card">
                <div className="rd-info-icon">
                  <Phone size={28} />
                </div>
                <h4>Call Us</h4>
                <p>Speak directly with our cleaning team.</p>
                <a href="tel:+442078334984">+44 2078 334 984</a>
              </div>
            </Col>

            <Col lg={4} md={6} className="rd-reveal">
              <div className="rd-info-card">
                <div className="rd-info-icon">
                  <Mail size={28} />
                </div>
                <h4>Email Us</h4>
                <p>Send service questions or booking details.</p>
                <a href="mailto:info@royaldrycleaners.co.uk">
                  info@royaldrycleaners.co.uk
                </a>
              </div>
            </Col>

            <Col lg={4} md={6} className="rd-reveal">
              <div className="rd-info-card">
                <div className="rd-info-icon">
                  <Clock size={28} />
                </div>
                <h4>Opening Hours</h4>
                <p>Visit or contact us during working hours.</p>
                <span>Mon - Sat: 8:00 AM - 7:00 PM</span>
              </div>
            </Col>
          </Row>

          <Row className="g-4 mt-5">
            <Col lg={5} className="rd-reveal">
              <div className="rd-contact-box">
                <span className="rd-mini-title">Contact Details</span>

                <h3>Book A Fresh Garment Care Service</h3>

                <p>
                  <Phone size={18} />
                  +44 2078 334 984
                </p>

                <p>
                  <Mail size={18} />
                  info@royaldrycleaners.co.uk
                </p>

                <p>
                  <MapPin size={18} />
                  Gensurco House, 46 Rosebery Ave, London EC1R 4RP, UK
                </p>

                <p>
                  <Clock size={18} />
                  Mon - Sat: 8:00 AM - 7:00 PM
                </p>

                <div className="rd-contact-features">
                  <div>
                    <Truck size={20} />
                    Collection & Delivery Available
                  </div>

                  <div>
                    <CalendarCheck size={20} />
                    Same Week Service Options
                  </div>

                  <div>
                    <CheckCircle size={20} />
                    Professional Garment Inspection
                  </div>
                </div>
              </div>
            </Col>

            <Col lg={7} className="rd-reveal">
              <Form className="rd-form">
                <div className="rd-form-heading">
                  <MessageCircle size={28} />
                  <div>
                    <h3>Send Your Request</h3>
                    <p>
                      Tell us what you need and we will contact you back.
                    </p>
                  </div>
                </div>

                <Row className="g-3">
                  <Col md={6}>
                    <Form.Control placeholder="Your Name" />
                  </Col>

                  <Col md={6}>
                    <Form.Control placeholder="Phone Number" />
                  </Col>

                  <Col md={6}>
                    <Form.Control placeholder="Email Address" />
                  </Col>

                  <Col md={6}>
                    <Form.Select defaultValue="">
                      <option value="" disabled>
                        Select Service
                      </option>
                      <option>Dry Cleaning</option>
                      <option>Laundry Service</option>
                      <option>Ironing & Pressing</option>
                      <option>Alterations</option>
                      <option>Collection & Delivery</option>
                    </Form.Select>
                  </Col>

                  <Col md={12}>
                    <Form.Control
                      as="textarea"
                      rows={5}
                      placeholder="Tell us what service you need..."
                    />
                  </Col>

                  <Col md={12}>
                    <Button className="rd-submit">
                      <Send size={18} />
                      Send Message
                    </Button>
                  </Col>
                </Row>
              </Form>
            </Col>
          </Row>

          <section className="rd-contact-strip rd-reveal">
            <Row className="g-4 align-items-center">
              <Col lg={7}>
                <h3>Need collection from your home or business?</h3>
                <p>
                  Contact us with your location and garment details. We will
                  guide you with the best collection and service option.
                </p>
              </Col>

              <Col lg={5}>
                <div className="rd-strip-actions">
                  <a href="tel:+442078334984">
                    <Phone size={18} />
                    Call Now
                  </a>

                  <a href="mailto:info@royaldrycleaners.co.uk">
                    <Mail size={18} />
                    Email Us
                  </a>
                </div>
              </Col>
            </Row>
          </section>

          <div className="rd-map rd-reveal">
            <div className="rd-map rd-reveal">
              <iframe
                title="Royal Dry Cleaners Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.3274144985457!2d-0.11281292325300721!3d51.52555430937677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b458b4010a5%3A0x6db7275e6fb755f3!2sRoyal%20Dry%20Cleaners!5e0!3m2!1sen!2s!4v1779532216670!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Container>
      </section>

      <style>{`
        a,
        a:hover,
        a:focus,
        a:active {
          text-decoration: none !important;
        }

        .rd-contact-hero {
          position: relative;
          min-height: 74vh;
          display: flex;
          align-items: center;

          background:
            url("https://images.unsplash.com/photo-1604335399105-a0c585fd81a1?auto=format&fit=crop&w=1800&q=80")
            center/cover no-repeat;
        }

        .rd-contact-overlay {
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

        .rd-contact-hero-content {
          position: relative;
          z-index: 2;
          max-width: 850px;
          padding: 80px 0;
        }

        .rd-contact-badge {
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

        .rd-contact-hero h1 {
          font-family: Georgia, serif;
          font-style: italic;

          font-size: clamp(44px, 6vw, 82px);

          line-height: 1;

          font-weight: 900;

          color: #fff;

          letter-spacing: -2px;

          text-shadow: 0 14px 40px rgba(0,0,0,.24);
        }

        .rd-contact-hero h1 em {
          color: #d8f5ff;
        }

        .rd-contact-hero p {
          margin-top: 22px;

          color: #f3fbff;

          font-size: 18px;

          line-height: 1.9;

          max-width: 720px;
        }

        .rd-contact-page {
          padding: 95px 0;

          background:
            linear-gradient(135deg, #f9fcff, #eaf8ff);
        }

        .rd-section-title {
          text-align: center;
          margin-bottom: 50px;
        }

        .rd-section-title span,
        .rd-mini-title {
          color: #2ea8e6;

          font-weight: 900;

          text-transform: uppercase;

          letter-spacing: 2px;
        }

        .rd-section-title h2 {
          font-family: Georgia, serif;
          font-style: italic;

          font-size: clamp(34px, 4vw, 58px);

          font-weight: 900;

          color: #31556c;
        }

        .rd-section-title p {
          margin: 12px auto 0;

          color: #6c8797;

          max-width: 720px;

          line-height: 1.8;
        }

        .rd-info-card {
          height: 100%;

          padding: 32px 26px;

          border-radius: 30px;

          background:
            rgba(255,255,255,.92);

          border:
            1px solid rgba(126,217,255,.25);

          box-shadow:
            0 18px 45px rgba(46,168,230,.1);

          transition: .35s ease;
        }

        .rd-info-card:hover {
          transform: translateY(-8px);

          background:
            linear-gradient(135deg, #ffffff, #eaf8ff);
        }

        .rd-info-icon {
          width: 70px;
          height: 70px;

          border-radius: 23px;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 18px;

          background:
            linear-gradient(135deg, #7fd9ff, #ffffff);

          color: #2d8ec7;

          box-shadow:
            0 16px 35px rgba(46,168,230,.14);
        }

        .rd-info-card h4 {
          color: #31556c;

          font-weight: 900;

          margin-bottom: 10px;
        }

        .rd-info-card p {
          color: #6c8797;

          line-height: 1.7;

          margin-bottom: 10px;
        }

        .rd-info-card a,
        .rd-info-card span {
          color: #2ea8e6;

          font-weight: 900;
        }

        .rd-contact-box,
        .rd-form {
          height: 100%;

          padding: 36px;

          border-radius: 34px;

          background:
            rgba(255,255,255,.95);

          border:
            1px solid rgba(126,217,255,.25);

          backdrop-filter:
            blur(14px);

          box-shadow:
            0 22px 60px rgba(46,168,230,.12);
        }

        .rd-contact-box h3,
        .rd-form-heading h3,
        .rd-contact-strip h3 {
          font-family: Georgia, serif;
          font-style: italic;

          font-weight: 900;

          color: #31556c;
        }

        .rd-contact-box h3 {
          margin: 12px 0 24px;

          font-size: 34px;
        }

        .rd-contact-box p {
          display: flex;
          align-items: center;
          gap: 12px;

          color: #4b6e83;

          font-weight: 800;

          margin-bottom: 18px;
        }

        .rd-contact-box p svg {
          color: #2ea8e6;

          min-width: 18px;
        }

        .rd-contact-features {
          margin-top: 28px;

          display: grid;
          gap: 14px;
        }

        .rd-contact-features div {
          display: flex;
          align-items: center;
          gap: 10px;

          padding: 14px;

          border-radius: 18px;

          background: #eaf8ff;

          color: #31556c;

          font-weight: 800;
        }

        .rd-contact-features svg {
          color: #2ea8e6;
        }

        .rd-form-heading {
          display: flex;
          gap: 14px;
          align-items: flex-start;

          margin-bottom: 24px;
        }

        .rd-form-heading svg {
          color: #2ea8e6;

          min-width: 28px;
        }

        .rd-form-heading h3 {
          margin: 0;

          font-size: 32px;
        }

        .rd-form-heading p {
          margin: 6px 0 0;

          color: #6c8797;
        }

        .rd-form .form-control,
        .rd-form .form-select {
          min-height: 56px;

          border-radius: 18px;

          border:
            1px solid rgba(126,217,255,.35);

          padding: 14px 16px;

          box-shadow: none;

          color: #31556c;

          font-weight: 600;

          background: #f9fcff;
        }

        .rd-form .form-control:focus,
        .rd-form .form-select:focus {
          border-color: #2ea8e6;

          box-shadow:
            0 0 0 4px rgba(46,168,230,.12);
        }

        .rd-form textarea.form-control {
          min-height: 155px;
        }

        .rd-submit {
          border: none !important;

          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 14px 28px;

          border-radius: 999px;

          color: #ffffff !important;

          font-weight: 900;

          background:
            linear-gradient(135deg, #7fd9ff, #2ea8e6) !important;

          box-shadow:
            0 16px 35px rgba(46,168,230,.28);

          transition: .35s ease;
        }

        .rd-submit:hover {
          transform: translateY(-4px);
        }

        .rd-contact-strip {
          margin-top: 55px;

          padding: 36px;

          border-radius: 34px;

          background:
            linear-gradient(135deg, #ffffff, #eaf8ff);

          border:
            1px solid rgba(126,217,255,.25);

          box-shadow:
            0 22px 60px rgba(46,168,230,.12);
        }

        .rd-contact-strip p {
          color: #6c8797;

          margin: 0;

          line-height: 1.8;
        }

        .rd-strip-actions {
          display: flex;
          justify-content: flex-end;
          gap: 14px;
          flex-wrap: wrap;
        }

        .rd-strip-actions a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 13px 22px;

          border-radius: 999px;

          color: #ffffff;

          font-weight: 900;

          background:
            linear-gradient(135deg, #7fd9ff, #2ea8e6);

          box-shadow:
            0 14px 30px rgba(46,168,230,.22);
        }

        .rd-map {
          margin-top: 45px;

          border-radius: 34px;

          overflow: hidden;

          box-shadow:
            0 24px 65px rgba(46,168,230,.18);

          border:
            1px solid rgba(126,217,255,.25);
        }

        .rd-map iframe {
          width: 100%;
          height: 430px;

          border: 0;
        }

        @media(max-width:991px) {
          .rd-strip-actions {
            justify-content: flex-start;
            margin-top: 18px;
          }
        }

        @media(max-width:575px) {
          .rd-contact-page {
            padding: 65px 0;
          }

          .rd-contact-hero h1 {
            font-size: 43px;
          }

          .rd-contact-hero p {
            font-size: 16px;
          }

          .rd-contact-box,
          .rd-form,
          .rd-contact-strip {
            padding: 24px;
            border-radius: 28px;
          }

          .rd-form-heading h3,
          .rd-contact-box h3 {
            font-size: 26px;
          }

          .rd-map iframe {
            height: 340px;
          }

          .rd-strip-actions a,
          .rd-submit {
            width: 100%;
          }
        }
      `}</style>
    </>
  );
}