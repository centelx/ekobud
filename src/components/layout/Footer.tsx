import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin } from 'lucide-react';


export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-secondary-900 text-secondary-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div>

            <p className="text-sm leading-relaxed mb-4">
              Eko Bud Paweł Sergiejuk
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+48500000000"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                aria-label="Zadzwoń"
              >
                <Phone className="w-4 h-4 shrink-0" />
                +48 500 000 000
              </a>
              <a
                href="mailto:biuro@ekobud.pl"
                className="flex items-center gap-2 hover:text-primary-400 transition-colors"
                aria-label="Napisz email"
              >
                <Mail className="w-4 h-4 shrink-0" />
                biuro@ekobud.pl
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                <span>Nowa 3, 07-200 Natalin<br />NIP: 714 200 73 23</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Oferta</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/szamba" className="hover:text-primary-400 transition-colors">
                  Szamba betonowe
                </Link>
              </li>
              <li>
                <Link to="/oczyszczalnie" className="hover:text-primary-400 transition-colors">
                  Oczyszczalnie ścieków
                </Link>
              </li>
              <li>
                <Link to="/przylacza" className="hover:text-primary-400 transition-colors">
                  Przyłącza wod-kan i gaz
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Informacje</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/kontakt" className="hover:text-primary-400 transition-colors">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/polityka-prywatnosci" className="hover:text-primary-400 transition-colors">
                  Polityka prywatności
                </Link>
              </li>
            </ul>
            <div className="mt-4">
              <h4 className="text-white font-semibold mb-2 text-sm">Obszar działania</h4>
              <p className="text-xs leading-relaxed">
                Wyszków, Serock, Pułtusk, Legionowo, Ostrów Maz., Ostrołęka, Długosiodło,
                Łochów, Węgrów, Mińsk Maz., Radzymin, Wołomin, Tłuszcz
              </p>
            </div>
          </div>


        </div>
      </div>

      <div className="border-t border-secondary-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p>&copy; {year} Eko Bud Paweł Sergiejuk. Wszelkie prawa zastrzeżone.</p>
          <Link
            to="/polityka-prywatnosci"
            className="hover:text-primary-400 transition-colors"
          >
            Polityka prywatności i regulamin
          </Link>
        </div>
      </div>
    </footer>
  );
}
