import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Droplets, Flame, CheckCircle2 } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Testimonials from '../components/Testimonials';

const wodkanSteps = [
  {
    num: '01',
    title: 'Warunki przyłączenia',
    text: 'Pomagamy uzyskać warunki techniczne przyłączenia od zakładu wodociągowego.',
  },
  {
    num: '02',
    title: 'Projekt',
    text: 'Przygotowujemy kompletną dokumentację projektową przyłącza.',
  },
  {
    num: '03',
    title: 'Wycena',
    text: 'Przedstawiamy szczegółową, transparentną wycenę całości prac.',
  },
  {
    num: '04',
    title: 'Realizacja',
    text: 'Profesjonalne wykonanie, podłączenie i odbiory techniczne.',
  },
];

const gasSteps = [
  'Mapa do celów projektowych',
  'Projekt przyłącza gazowego',
  'Pozwolenie lub zgłoszenie',
  'Fizyczne wykonanie przyłącza',
  'Protokół szczelności',
  'Opinia kominiarska',
];

const bottleGasSteps = [
  'Płyta fundamentowa pod zbiornik',
  'Dostawa butli gazowych',
  'Poprowadzenie instalacji do kotłowni',
  'Odbiory UDT',
];

export default function Przylacza() {
  return (
    <>
      <section className="relative bg-secondary-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1504307651254-35680f356f12?auto=format&fit=crop&w=1920&q=80"
            alt="Przyłącza"
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
              Profesjonalne Przyłącza Wodno-Kanalizacyjne i Gazowe
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Zajmujemy się kompleksową realizacją przyłączy \u2013 od uzyskania warunków
              technicznych, przez projekt, aż po wykonanie i odbiory. Zdejmujemy z Twoich
              barków cały ciężar papierologii.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
            <Droplets className="w-6 h-6 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-secondary-800">
            Przyłącza wodno-kanalizacyjne
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {wodkanSteps.map((step, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 border border-secondary-100 hover:border-primary-200 transition-colors"
            >
              <span className="text-4xl font-bold text-primary-100 block mb-3">
                {step.num}
              </span>
              <h3 className="text-lg font-bold text-secondary-800 mb-2">{step.title}</h3>
              <p className="text-secondary-500 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="bg-secondary-50 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-secondary-800 mb-3">
            Studnia wodomierzowa
          </h3>
          <p className="text-secondary-600 text-sm leading-relaxed">
            W przypadku budynków nieocieplonych lub gdy niemożliwy jest montaż licznika
            wewnątrz, konieczne jest zainstalowanie studni wodomierzowej. To specjalna
            komora umieszczona w gruncie, w której znajduje się wodomierz wraz z zaworem
            odcinającym. Zajmujemy się kompletnym doborem i montażem studni wodomierzowej.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center">
            <Flame className="w-6 h-6 text-amber-600" />
          </div>
          <h2 className="text-3xl font-bold text-secondary-800">
            Przyłącza gazowe
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Gaz ziemny</h3>
            <p className="text-secondary-500 text-sm leading-relaxed mb-6">
              Realizujemy pełny proces podłączenia gazu ziemnego do budynku. Od sporządzenia
              mapy do celów projektowych po uzyskanie protokołu szczelności i opinii
              kominiarskiej.
            </p>
            <ul className="space-y-3">
              {gasSteps.map((step, i) => (
                <li key={i} className="flex items-center gap-3">
                  <span className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center shrink-0">
                    <span className="text-primary-600 text-xs font-bold">{i + 1}</span>
                  </span>
                  <span className="text-secondary-600 text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold text-secondary-800 mb-4">Gaz z butli (zbiornikowy)</h3>
            <p className="text-secondary-500 text-sm leading-relaxed mb-6">
              Gdy brak dostępu do gazu ziemnego, oferujemy instalację zbiornikowego gazu
              płynnego. Kompleksowa usługa od fundamentu po odbiory UDT.
            </p>
            <ul className="space-y-3">
              {bottleGasSteps.map((step, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-secondary-600 text-sm">{step}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      <Testimonials />

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">
            Potrzebujesz przyłącza?
          </h2>
          <p className="text-secondary-500 max-w-xl mx-auto mb-8">
            Zadzwoń lub napisz \u2013 pomożemy Ci przejść przez cały proces od A do Z.
          </p>
          <Link to="/kontakt">
            <Button>
              Zapytaj o wycenę
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </SectionWrapper>
    </>
  );
}
