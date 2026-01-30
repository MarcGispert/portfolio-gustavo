import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container } from '../Container';

/* ------------------------------------------------------------------ */
/*  Inline SVG icons                                                  */
/* ------------------------------------------------------------------ */

function IconMenu() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

function IconClose() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function IconChevron({ open }: { open: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={`ml-1 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

interface HeaderProps {
  variant?: 'light' | 'dark';
}

export function Header({ variant = 'dark' }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const isLight = variant === 'light';
  const headerBg = isLight ? 'bg-white' : 'bg-black';
  const borderColor = isLight ? 'border-black/10' : 'border-white/10';
  const textColor = isLight ? 'text-black' : 'text-white';
  const hoverColor = isLight ? 'hover:text-gray-600' : 'hover:text-gray-300';
  const dropdownBg = isLight ? 'bg-white border-black/10' : 'bg-black border-white/10';
  const dropdownText = isLight ? 'text-black/80 hover:bg-black/10 hover:text-black' : 'text-white/80 hover:bg-white/10 hover:text-white';

  return (
    <header className={`fixed top-0 z-50 w-full border-b ${borderColor} ${headerBg}`}>
      <Container className="flex h-20 items-center justify-between !px-6 md:!px-12">

        {/* ==================== LOGO (left) ==================== */}
        <Link to="/" className="flex-shrink-0">
          <img
            src="/logo-header.svg"
            alt="Design: Gustavo Higón"
            className="h-10 w-auto"
          />
        </Link>

        {/* ============= DESKTOP NAV (right, md+) ============== */}
        <nav className="hidden md:flex items-center gap-10" aria-label="Main navigation">

          {/* -- Services (dropdown) -- */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setServicesOpen((v) => !v)}
              className={`inline-flex items-center text-sm font-medium uppercase tracking-wider ${textColor} transition-colors ${hoverColor}`}
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <IconChevron open={servicesOpen} />
            </button>

            {/* Floating dropdown — wrapper div with pt-2 bridges the hover gap */}
            {servicesOpen && (
              <div className="absolute left-0 top-full z-50 pt-2">
                <ul className={`min-w-[280px] border ${dropdownBg} py-2 shadow-lg`}>
                  <li key="concept-sketching">
                    <Link
                      to="/services/concept-sketching"
                      className={`block px-5 py-2.5 text-sm ${dropdownText} transition-colors`}
                    >
                      Concept & Sketching
                    </Link>
                  </li>
                  <li key="virtual-clay">
                    <Link
                      to="/services/virtual-clay-class-a"
                      className={`block px-5 py-2.5 text-sm ${dropdownText} transition-colors`}
                    >
                      Virtual Clay & Class A Surfacing
                    </Link>
                  </li>
                  <li key="engineering">
                    <Link
                      to="/services/engineering"
                      className={`block px-5 py-2.5 text-sm ${dropdownText} transition-colors`}
                    >
                      Engineering
                    </Link>
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* -- Portfolio -- */}
          <Link
            to="/portfolio"
            className={`text-sm font-medium uppercase tracking-wider ${textColor} transition-colors ${hoverColor}`}
          >
            Portfolio
          </Link>

          {/* -- About -- */}
          <Link
            to="/about"
            className={`text-sm font-medium uppercase tracking-wider ${textColor} transition-colors ${hoverColor}`}
          >
            About
          </Link>
        </nav>

        {/* ============= HAMBURGER (mobile only) =============== */}
        <button
          type="button"
          className={`md:hidden ${textColor}`}
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu />
        </button>
      </Container>

      {/* ============= MOBILE OVERLAY ========================== */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black md:hidden">
          {/* Top bar — mirrors header height */}
          <div className="flex h-20 items-center justify-between px-6">
            <Link to="/" onClick={() => setMobileOpen(false)}>
              <img
                src="/logo-header.svg"
                alt="Design: Gustavo Higón"
                className="h-10 w-auto"
              />
            </Link>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setServicesOpen(false);
              }}
              aria-label="Close menu"
              className="text-white"
            >
              <IconClose />
            </button>
          </div>

          {/* Nav links */}
          <nav className="flex flex-1 flex-col px-6 pt-8" aria-label="Mobile navigation">
            <ul className="space-y-6">
              {/* Services accordion */}
              <li>
                <button
                  type="button"
                  onClick={() => setServicesOpen((v) => !v)}
                  className="flex w-full items-center justify-between text-xl font-medium uppercase tracking-wider text-white"
                  aria-expanded={servicesOpen}
                >
                  Services
                  <IconChevron open={servicesOpen} />
                </button>

                {servicesOpen && (
                  <ul className="mt-4 space-y-3 border-l border-white/20 pl-4">
                    <li>
                      <Link
                        to="/services/concept-sketching"
                        onClick={() => setMobileOpen(false)}
                        className="block text-base text-white/70 transition-colors hover:text-white"
                      >
                        Concept & Sketching
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/virtual-clay-class-a"
                        onClick={() => setMobileOpen(false)}
                        className="block text-base text-white/70 transition-colors hover:text-white"
                      >
                        Virtual Clay & Class A Surfacing
                      </Link>
                    </li>
                    <li>
                      <Link
                        to="/services/engineering"
                        onClick={() => setMobileOpen(false)}
                        className="block text-base text-white/70 transition-colors hover:text-white"
                      >
                        Engineering
                      </Link>
                    </li>
                  </ul>
                )}
              </li>

              <li>
                <Link
                  to="/portfolio"
                  onClick={() => setMobileOpen(false)}
                  className="block text-xl font-medium uppercase tracking-wider text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  onClick={() => setMobileOpen(false)}
                  className="block text-xl font-medium uppercase tracking-wider text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
