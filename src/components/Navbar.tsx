import { useState, useEffect, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { navLinks, companyInfo } from "@/data/company";
import { images } from "@/data/images";
import Container from "./Container";
import Button from "./Button";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = useCallback(() => setIsMobileMenuOpen(false), []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isMobileMenuOpen) {
        closeMobileMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isMobileMenuOpen, closeMobileMenu]);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass shadow-lg shadow-black/10"
          : "bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={images.company.logo} alt="Avinash Roadways Logo" className="h-10 w-10 rounded-full object-cover border border-gold/30" />
            <span className="text-2xl font-black italic uppercase tracking-wider text-white">
              AVINASH<span className="text-gold"> ROADWAYS</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium uppercase tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold rounded ${
                    isActive
                      ? "text-gold"
                      : "text-slate-200 hover:text-gold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${companyInfo.phone}`}
              className="flex items-center gap-2 text-sm text-slate-200 transition-colors hover:text-gold"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden xl:inline">{companyInfo.phone}</span>
            </a>
            <Button href="/contact" size="sm">
              Get Quote
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-white transition-colors hover:text-gold focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Menu className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 top-20 z-40 transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />

        {/* Menu Panel */}
        <nav
          className={`absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-navy-dark p-6 shadow-2xl transition-transform duration-300 ${
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          role="navigation"
          aria-label="Mobile navigation"
        >
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMobileMenu}
                className={({ isActive }) =>
                  `rounded-lg px-4 py-3 text-base font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold ${
                    isActive
                      ? "bg-gold/10 text-gold"
                      : "text-slate-200 hover:bg-white/5 hover:text-gold"
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="mt-8 border-t border-white/10 pt-6">
            <a
              href={`tel:${companyInfo.phone}`}
              className="mb-4 flex items-center gap-3 text-slate-200 transition-colors hover:text-gold"
            >
              <Phone className="h-5 w-5" />
              {companyInfo.phone}
            </a>
            <Button href="/contact" className="w-full" onClick={closeMobileMenu}>
              Get Quote
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
