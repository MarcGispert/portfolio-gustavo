import { Container } from '../Container';

const logoSrc = '/logo-footer.svg';

/* ------------------------------------------------------------------ */
/*  Data                                                              */
/* ------------------------------------------------------------------ */

const navLinks = [
  { label: 'Services', href: '/#services' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
];

const legalLinks = [
  { label: 'Terms', href: '#terms' },
  { label: 'Privacy', href: '#privacy' },
  { label: 'Cookies', href: '#cookies' },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */

export function Footer() {
  return (
    <footer className="w-full bg-black py-16 text-white md:py-16">
      <Container className="px-6 md:px-12">
        <div className="flex flex-col gap-12">

          {/* ============= UPPER SECTION ============= */}
          <div className="flex flex-col gap-12">

          {/* ---- Logo ---- */}
          <div className="flex justify-center md:justify-start">
            <img
              src={logoSrc}
              alt="Design: Gustavo Higón"
              className="h-[67px] w-[156px] object-contain"
            />
          </div>

          {/* ---- Nav + Email row ---- */}
          <div className="flex flex-col items-center gap-12 md:flex-row md:items-end md:justify-between md:gap-10">

            {/* Navigation links */}
            <nav aria-label="Footer navigation">
              <ul className="flex flex-col items-center gap-6 md:flex-row md:gap-[25px]">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="font-sans text-[18px] font-normal uppercase text-white transition-colors hover:text-gray-400 md:text-body-md"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Email */}
            <a
              href="mailto:info@gustavohigon.com"
              className="font-sans text-[18px] font-bold text-white transition-colors hover:text-gray-400 md:text-body-md"
            >
              info@gustavohigon.com
            </a>
            </div>
          </div>

          {/* ============= LOWER SECTION ============= */}
          <div className="flex flex-col gap-8">

          {/* ---- Divider ---- */}
          <hr className="h-px w-full border-0 bg-[#555]" />

          {/* ---- Copyright + Legal row ---- */}
          <div className="flex flex-col items-center gap-8 md:flex-row md:items-center md:gap-8">

            {/* Legal links - hidden for now */}

            {/* Copyright - show last on mobile, first on desktop */}
            <p className="text-center font-body text-base leading-6 text-white md:order-1 md:flex-1 md:text-left">
              &copy; {new Date().getFullYear()} Gustavo Higón. All rights reserved.
            </p>
          </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
