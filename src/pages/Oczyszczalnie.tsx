import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Leaf, Shield, Zap, DollarSign } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Testimonials from '../components/Testimonials';

const benefits = [
  { icon: DollarSign, text: 'Koniec comiesięcznych rachunków za wywóz nieczystości' },
  { icon: Leaf, text: '100% bezpieczeństwo dla środowiska' },
  { icon: Shield, text: 'Brak uciążliwych zapachów' },
  { icon: Zap, text: 'Szybki zwrot z inwestycji' },
];

const brands = [
  {
    name: 'Traidenis (NV-1, NV-2)',
    features: [
      'Bezobsługowe, hybrydowe',
      'Laminat z włóknem szklanym',
      '20 lat gwarancji',
      'Brak zapachów (dmuchawy)',
      'Brak chemii',
      'Różne wysokości nadstawek',
    ],
    highlight: true,
  },
  {
    name: 'Felix Navis',
    features: [
      'Produkcja litewska',
      'Tańsza alternatywa dla Traidenis',
      'Sprawdzona technologia',
      'Dobry stosunek jakości do ceny',
    ],
    highlight: false,
  },
  {
    name: 'Eco House',
    features: [
      'Plastik PP',
      'System trzykomorowy z pompką',
      'Prosta konstrukcja',
      'Łatwa instalacja',
    ],
    highlight: false,
  },
  {
    name: 'Kingspan Water',
    features: [
      'Zaawansowane technologicznie',
      'Kompaktowa budowa',
      'Certyfikowane rozwiązania',
      'Wysoka efektywność oczyszczania',
    ],
    highlight: false,
  },
];

const pricingFactors = [
  'Wielkość oczyszczalni (liczba domowników)',
  'Sposób rozsączania (tunele, drenaż, studnia chłonna)',
  'Zasilanie elektryczne',
  'Papierologia i pozwolenia',
];

export default function Oczyszczalnie() {
  return (
    <>
      <section className="relative bg-secondary-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1920&q=80"
            alt="Ekologiczna oczyszczalnia"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-secondary-900/80 to-secondary-900" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Przydomowe Oczyszczalnie Ścieków{' '}
              <span className="text-primary-400">
                – ekologia i oszczędność na Twojej działce
              </span>
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Własna oczyszczalnia to inwestycja, która zwraca się niezwykle szybko. Oznacza
              koniec comiesięcznych rachunków za wywóz nieczystości, brak uciążliwych zapachów
              i 100% bezpieczeństwo dla środowiska.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits.map((b, i) => (
            <div
              key={i}
              className="flex items-start gap-4 bg-primary-50 rounded-xl p-6"
            >
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0">
                <b.icon className="w-5 h-5 text-primary-600" />
              </div>
              <p className="text-secondary-700 text-sm font-medium leading-snug">
                {b.text}
              </p>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">
          Marki w naszej ofercie
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {brands.map((brand, i) => (
            <div
              key={i}
              className={`rounded-2xl p-8 border ${brand.highlight
                ? 'border-primary-200 bg-primary-50/50 ring-1 ring-primary-100'
                : 'border-secondary-100 bg-white'
                }`}
            >
              <div className="flex items-center gap-3 mb-4">
                {brand.highlight && (
                  <span className="px-2 py-0.5 bg-primary-600 text-white text-xs font-semibold rounded">
                    Polecamy
                  </span>
                )}
                <h3 className="text-xl font-bold text-secondary-800">{brand.name}</h3>
              </div>
              <ul className="space-y-2">
                {brand.features.map((f, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-primary-600 shrink-0 mt-0.5" />
                    <span className="text-secondary-600 text-sm">{f}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">
            Od czego zależy koszt?
          </h2>
          <p className="text-secondary-500 mb-8">
            Wycena oczyszczalni jest indywidualna. Cena zależy od kilku kluczowych czynników:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {pricingFactors.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-xl p-5 border border-secondary-100 text-left"
              >
                <div className="flex items-start gap-3">
                  <span className="w-8 h-8 bg-primary-100 rounded-lg flex items-center justify-center shrink-0 text-primary-600 font-bold text-sm">
                    {i + 1}
                  </span>
                  <p className="text-secondary-700 text-sm font-medium">{f}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Testimonials reviews={[
        { name: 'Anna W.', text: 'Oczyszczalnia działa bez zarzutu. Pan Paweł doradził najlepsze rozwiązanie i pomógł z całą papierologią zgłoszeniową.' },
        { name: 'Michał S.', text: 'Super inwestycja, w końcu koniec z wywozem szamba. Ekipa zamontowała wszystko sprawnie i czysto.' },
        { name: 'Magdalena T.', text: 'Pełen profesjonalizm od wyceny po montaż oczyszczalni. Teren po wykopach ładnie wyrównany.' },
      ]} />

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">
            Chcesz poznać szczegóły?
          </h2>
          <p className="text-secondary-500 max-w-xl mx-auto mb-8">
            Zadzwoń lub napisz – doradzimy najlepszą oczyszczalnię dopasowaną do
            Twojej działki i budżetu.
          </p>
          <Link to="/kontakt">
            <Button>
              Skontaktuj się z nami
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
