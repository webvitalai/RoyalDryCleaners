import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "../components/Header.jsx";
import Footer from "../components/Footer.jsx";

import {
  Whatsapp,
  TelephoneFill,
  ArrowUpShort,
} from "react-bootstrap-icons";

export default function MainLayout() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="rd-layout">
      <Header />

      <Outlet />

      <Footer />

      <a
        href="tel:+442078334984"
        className="phone-float"
        aria-label="Call Us"
      >
        <TelephoneFill />
      </a>

      <a
        href="https://wa.me/442078334984"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float"
        aria-label="WhatsApp Chat"
      >
        <Whatsapp />
      </a>

      {showScrollTop && (
        <button
          className="scroll-top-btn"
          onClick={scrollToTop}
          aria-label="Scroll To Top"
        >
          <ArrowUpShort />
        </button>
      )}

      <style>{`
        .rd-layout{
          background:#f9fcff;
        }

        .scroll-top-btn{
          position:fixed;

          right:42px;
          bottom:182px;

          width:62px;
          height:62px;

          border:none;
          border-radius:50%;

          background:
            linear-gradient(
              135deg,
              #7fd9ff,
              #2ea8e6,
              #0d6ea8
            );

          color:#fff;

          display:flex;
          align-items:center;
          justify-content:center;

          cursor:pointer;

          z-index:999999;

          backdrop-filter:blur(12px);

          border:
            1px solid rgba(255,255,255,.25);

          box-shadow:
            0 18px 40px rgba(46,168,230,.34);

          animation:scrollFade .35s ease;

          transition:all .35s ease;
        }

        .scroll-top-btn:hover{
          transform:translateY(-6px) scale(1.08);

          box-shadow:
            0 24px 55px rgba(46,168,230,.45);
        }

        .scroll-top-btn svg{
          width:38px;
          height:38px;
        }

        @keyframes scrollFade{
          from{
            opacity:0;
            transform:translateY(20px);
          }

          to{
            opacity:1;
            transform:translateY(0);
          }
        }

        .phone-float,
        .whatsapp-float{
          position:fixed;

          right:42px;

          width:62px;
          height:62px;

          border-radius:50%;

          display:flex;
          align-items:center;
          justify-content:center;

          color:#fff !important;

          z-index:999999;

          overflow:hidden;

          border:
            1px solid rgba(255,255,255,.2);

          backdrop-filter:blur(12px);

          transition:all .35s ease;
        }

        .phone-float::before,
        .whatsapp-float::before,
        .scroll-top-btn::before{
          content:"";

          position:absolute;
          inset:0;

          background:
            linear-gradient(
              135deg,
              rgba(255,255,255,.35),
              transparent
            );

          opacity:.8;
        }

        .phone-float{
          bottom:108px;

          background:
            linear-gradient(
              135deg,
              #38bdf8,
              #0ea5e9,
              #0369a1
            );

          box-shadow:
            0 18px 40px rgba(14,165,233,.34);
        }

        .whatsapp-float{
          bottom:34px;

          background:
            linear-gradient(
              135deg,
              #34d399,
              #22c55e,
              #16a34a
            );

          box-shadow:
            0 18px 40px rgba(34,197,94,.34);

          animation:
            whatsappPulse 2s infinite;
        }

        .phone-float:hover,
        .whatsapp-float:hover{
          transform:
            translateY(-6px)
            scale(1.08);

          color:#fff !important;
        }

        .phone-float svg,
        .whatsapp-float svg{
          width:30px;
          height:30px;

          position:relative;
          z-index:2;
        }

        @keyframes whatsappPulse{
          0%{
            box-shadow:
              0 0 0 0 rgba(34,197,94,.42);
          }

          70%{
            box-shadow:
              0 0 0 20px rgba(34,197,94,0);
          }

          100%{
            box-shadow:
              0 0 0 0 rgba(34,197,94,0);
          }
        }

        @media (max-width: 991px){

          .phone-float,
          .whatsapp-float,
          .scroll-top-btn{
            right:18px;
          }
        }

        @media (max-width:575px){

          .phone-float,
          .whatsapp-float,
          .scroll-top-btn{
            width:54px;
            height:54px;

            right:10px;
          }

          .phone-float{
            bottom:82px;
          }

          .whatsapp-float{
            bottom:12px;
          }

          .scroll-top-btn{
            bottom:150px;
          }

          .phone-float svg,
          .whatsapp-float svg{
            width:26px;
            height:26px;
          }

          .scroll-top-btn svg{
            width:34px;
            height:34px;
          }
        }
      `}</style>
    </div>
  );
}