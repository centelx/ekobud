import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { to: '/', label: 'Strona Główna' },
  { to: '/szamba', label: 'Szamba' },
  { to: '/oczyszczalnie', label: 'Oczyszczalnie' },
  { to: '/przylacza', label: 'Przyłącza' },
  { to: '/kontakt', label: 'Kontakt' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-secondary-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
            <img src="/logo2_cmyk.png" alt="EkoBud" className="h-12 lg:h-14 w-auto" />
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${pathname === link.to
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href="tel:+48500000000"
            className="hidden md:inline-flex items-center gap-2 bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors"
            aria-label="Zadzwoń do nas"
          >
            <Phone className="w-4 h-4" />
            <span>+48 500 000 000</span>
          </a>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg text-secondary-600 hover:bg-secondary-50 transition-colors"
            aria-label={open ? 'Zamknij menu' : 'Otwórz menu'}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden border-t border-secondary-100 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${pathname === link.to
                    ? 'text-primary-600 bg-primary-50'
                    : 'text-secondary-600 hover:text-primary-600 hover:bg-secondary-50'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="tel:+48500000000"
              className="flex items-center gap-2 px-4 py-3 text-primary-600 font-semibold text-sm"
              aria-label="Zadzwoń do nas"
            >
              <Phone className="w-4 h-4" />
              +48 500 000 000
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
