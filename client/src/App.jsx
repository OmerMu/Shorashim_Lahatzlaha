import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ServicesSection from "./sections/ServicesSection";
import WhyChooseUsSection from "./sections/WhyChooseUsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import GallerySection from "./sections/GallerySection";
import FaqSection from "./sections/FaqSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import AdminLoginPage from "./admin/AdminLoginPage";
import AdminRoute from "./admin/AdminRoute";
import AdminLayout from "./admin/AdminLayout";
import LeadsPage from "./admin/LeadsPage";

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null;
}

function PublicLayout({ children, pageClass = "" }) {
  return (
    <div className={`app-shell app-shell--public ${pageClass}`}>
      <Navbar />
      <main className="site-main">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

function HomePage() {
  return (
    <PublicLayout pageClass="page page--home">
      <HeroSection />
      <WhyChooseUsSection />
    </PublicLayout>
  );
}

function AboutPage() {
  return (
    <PublicLayout pageClass="page page--inside">
      <section className="page-hero page-hero--about">
        <div className="container page-hero__inner">
          <span className="page-hero__eyebrow">אודות</span>
          <h1>שורשים להצלחה מתחילים בחיבור אישי, מקצועיות ואמונה בדרך</h1>
          <p>
            מקום שמעניק לילדים קרקע יציבה לצמיחה לימודית ורגשית, מתוך יחס אישי
            אמיתי ולמידה מותאמת.
          </p>
        </div>
      </section>
      <AboutSection />
    </PublicLayout>
  );
}

function ServicesPage() {
  return (
    <PublicLayout pageClass="page page--inside">
      <section className="page-hero page-hero--services">
        <div className="container page-hero__inner">
          <span className="page-hero__eyebrow">שירותים</span>
          <h1>מסלולי למידה שנבנו כדי להצמיח ביטחון, ידע והרגלי למידה נכונים</h1>
          <p>כל תהליך נבנה בהתאמה לילד, למטרה ולדרך שנכונה לו באמת.</p>
        </div>
      </section>
      <ServicesSection />
    </PublicLayout>
  );
}

function TestimonialsPage() {
  return (
    <PublicLayout pageClass="page page--inside">
      <section className="page-hero page-hero--testimonials">
        <div className="container page-hero__inner">
          <span className="page-hero__eyebrow">המלצות</span>
          <h1>מה הורים מספרים על הדרך, על היחס האישי ועל ההתקדמות של הילדים</h1>
          <p>חוויות אמיתיות מתהליך שבונה לא רק ציונים, אלא גם אמון וביטחון.</p>
        </div>
      </section>
      <TestimonialsSection />
    </PublicLayout>
  );
}

function GalleryPage() {
  return (
    <PublicLayout pageClass="page page--inside">
      <section className="page-hero page-hero--gallery">
        <div className="container page-hero__inner">
          <span className="page-hero__eyebrow">גלריה</span>
          <h1>רגעים, אווירה וסגנון למידה שמרגישים בהם את השורש והצמיחה</h1>
          <p>מבט אל החוויה, הסביבה והדרך שבה הלמידה הופכת לנעימה ומקדמת.</p>
        </div>
      </section>
      <GallerySection />
    </PublicLayout>
  );
}

function FaqPage() {
  return (
    <PublicLayout pageClass="page page--inside">
      <section className="page-hero page-hero--faq">
        <div className="container page-hero__inner">
          <span className="page-hero__eyebrow">שאלות נפוצות</span>
          <h1>כל מה שחשוב לדעת לפני שמתחילים תהליך משותף</h1>
          <p>תשובות מסודרות וברורות להורים שרוצים להבין מה מתאים לילד שלהם.</p>
        </div>
      </section>
      <FaqSection />
    </PublicLayout>
  );
}

function ContactPage() {
  return (
    <PublicLayout pageClass="page page--inside">
      <section className="page-hero page-hero--contact">
        <div className="container page-hero__inner">
          <span className="page-hero__eyebrow">צור קשר</span>
          <h1>בואו נתחיל מהיכרות ונבנה יחד דרך שמתאימה בדיוק לילד שלכם</h1>
          <p>
            אפשר להשאיר פרטים, ליצור קשר ישיר או לפנות דרך הרשתות והוואטסאפ.
          </p>
        </div>
      </section>
      <ContactSection />
    </PublicLayout>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/admin/login" element={<AdminLoginPage />} />
        <Route element={<AdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/leads" replace />} />
            <Route path="leads" element={<LeadsPage />} />
          </Route>
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
