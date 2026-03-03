import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Droplets,
  Leaf,
  Wrench,
  ClipboardCheck,
  Package,
  FileText,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';

const pillars = [
  {
    icon: Leaf,
    title: 'Przydomowe Oczyszczalnie Ścieków',
    text: 'Ekologiczne, bezobsługowe systemy m.in. marek Traidenis, Kingspan, Felix Navis i Eco House. Certyfikowane rozwiązania dla każdego gruntu.',
    link: '/oczyszczalnie',
  },
  {
    icon: Droplets,
    title: 'Szamba Betonowe i Kanały',
    text: 'Trwałe, certyfikowane zbiorniki betonowe, szamba jedno- i dwukomorowe, piwniczki ogrodowe oraz kanały samochodowe. Transport i montaż.',
    link: '/szamba',
  },
  {
    icon: Wrench,
    title: 'Przyłącza Wod-Kan i Gazowe',
    text: 'Od warunków technicznych, przez projekt, aż po fizyczne wykonanie i odbiory. Zdejmujemy z Twoich barków ciężar papierologii.',
    link: '/przylacza',
  },
];

const strengths = [
  {
    icon: ClipboardCheck,
    title: 'Kompleksowość wykonania',
    text: 'Nie musisz szukać wielu podwykonawców. Zajmujemy się wszystkim – od pozyskania warunków przyłączeniowych, poprzez projekt, doradztwo, aż po montaż, podłączenie i ostateczne odbiory.',
  },
  {
    icon: Package,
    title: 'Różnorodność produktów',
    text: 'Nie faworyzujemy jednego rozwiązania. Dobieramy technologię idealnie dopasowaną do Twojego budżetu, warunków gruntowych na działce oraz liczby domowników.',
  },
  {
    icon: FileText,
    title: 'Pomoc w formalnościach',
    text: 'Papierologia to nasza codzienność. Pomagamy w zdobyciu niezbędnych pozwoleń, sporządzamy mapy do celów projektowych i zgłaszamy instalacje.',
  },
];

const areas = [
  'Wyszków',
  'Serock',
  'Pułtusk',
  'Legionowo',
  'Ostrów Mazowiecka',
  'Ostrołęka',
  'Długosiodło',
  'Łochów',
  'Węgrów',
  'Mińsk Mazowiecki',
  'Radzymin',
  'Wołomin',
  'Tłuszcz',
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-secondary-900 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1646324554833-f0b6a479fa5d?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Budowa domu"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-secondary-900 via-secondary-900/80 to-secondary-900/40" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              Niezawodne instalacje dla Twojego domu i działki.{' '}
              <span className="text-primary-400">Kompleksowe wykonanie od projektu po montaż.</span>
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed mb-10 max-w-2xl mx-auto">
              Specjalizujemy się w sprzedaży i montażu przydomowych oczyszczalni ścieków,
              szamb betonowych oraz kompleksowym wykonawstwie przyłączy wodno-kanalizacyjnych
              i gazowych. Działamy na terenie Wyszkowa i w promieniu 75 kilometrów.
              Gwarantujemy najwyższą jakość, różnorodność produktów i wsparcie w załatwieniu
              wszelkich formalności.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/szamba">
                <Button>
                  Poznaj naszą ofertę
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Link to="/kontakt">
                <Button variant="outline" className="border-white text-white hover:bg-white/10">
                  Darmowa wycena
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            Czym się zajmujemy?
          </h2>
          <p className="text-secondary-500 max-w-2xl mx-auto">
            Oferujemy pełen zakres usług związanych z infrastrukturą wodno-kanalizacyjną i gazową.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((p, i) => (
            <Link
              key={i}
              to={p.link}
              className="group bg-white rounded-2xl p-8 border border-secondary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 bg-primary-50 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary-100 transition-colors">
                <p.icon className="w-7 h-7 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-secondary-800 mb-3">{p.title}</h3>
              <p className="text-secondary-500 text-sm leading-relaxed mb-4">{p.text}</p>
              <span className="inline-flex items-center gap-1 text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                Dowiedz się więcej <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-4">
            Dlaczego warto z nami współpracować?
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {strengths.map((s, i) => (
            <div key={i} className="text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <s.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-lg font-bold text-secondary-800 mb-3">{s.title}</h3>
              <p className="text-secondary-500 text-sm leading-relaxed">{s.text}</p>
            </div>
          ))}
        </div>
      </SectionWrapper>

      <SectionWrapper>
        <div className="bg-primary-600 rounded-3xl p-8 sm:p-12 lg:p-16 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Działamy na terenie Wyszkowa i okolic
          </h2>
          <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
            Realizujemy zlecenia w promieniu 75 km od Wyszkowa. Sprawdź, czy Twoja
            miejscowość jest w naszym zasięgu.
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {areas.map((area) => (
              <span
                key={area}
                className="px-4 py-2 bg-white/15 rounded-full text-white text-sm font-medium backdrop-blur-sm"
              >
                {area}
              </span>
            ))}
          </div>
          <Link to="/kontakt">
            <Button variant="outline" className="bg-white !text-primary-700 !border-white hover:bg-primary-50">
              Zapytaj o swoją lokalizację
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary-800 mb-6">
              Profesjonalizm potwierdzony doświadczeniem
            </h2>
            <p className="text-secondary-500 leading-relaxed mb-8">
              Każdy projekt traktujemy indywidualnie. Doradzamy najlepsze rozwiązanie
              dopasowane do specyfiki Twojej działki, potrzeb domowników i budżetu.
              Cały proces realizujemy terminowo, z dbałością o każdy detal.
            </p>
            <ul className="space-y-4">
              {[
                'Gwarancja na wykonane prace',
                'Terminowa realizacja zleceń',
                'Fachowe doradztwo techniczne',
                'Pomoc z dokumentacją i pozwoleniami',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src="https://plus.unsplash.com/premium_photo-1664477100909-72e25a69f553?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Prace budowlane"
              loading="lazy"
              className="w-full h-80 lg:h-96 object-cover"
            />
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
