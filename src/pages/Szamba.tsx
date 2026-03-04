import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, X, ChevronLeft, ChevronRight, Camera } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';
import Testimonials from '../components/Testimonials';

const galleryImages = Array.from({ length: 6 }, (_, i) => ({
  src: `/szamba_${i + 1}.jpg`,
  alt: `Realizacja szamba ${i + 1}`,
}));

const tanks = [
  { vol: '4 m\u00B3', w: '2,00 m', l: '2,50 m', h: '1,10 m' },
  { vol: '5 m\u00B3', w: '2,00 m', l: '2,50 m', h: '1,25 m' },
  { vol: '6 m\u00B3', w: '2,00 m', l: '2,50 m', h: '1,50 m' },
  { vol: '7 m\u00B3', w: '2,40 m', l: '3,40 m', h: '1,10 m' },
  { vol: '8 m\u00B3', w: '2,40 m', l: '3,00 m', h: '1,40 m' },
  { vol: '9 m\u00B3', w: '2,40 m', l: '3,00 m', h: '1,50 m' },
  { vol: '10 m\u00B3 (niskie)', w: '2,40 m', l: '3,40 m', h: '1,50 m' },
  { vol: '10 m\u00B3 (wysokie)', w: '2,40 m', l: '3,00 m', h: '1,75 m' },
  { vol: '12 m\u00B3 (niskie)', w: '2,40 m', l: '3,40 m', h: '1,75 m' },
  { vol: '12 m\u00B3 (wysokie)', w: '3,00 m', l: '2,40 m', h: '2,05 m' },
];

const accessories = [
  'Szambo dwukomorowe',
  'Płyty najazdowe (10 ton)',
  'Szybkozłącza do wypompowywania w ogrodzeniu',
  'Pokrywy żeliwne',
  'Kominki (25/50 cm w standardzie)',
];

const channels = [
  { name: 'Kanał 4m', dims: '1,00 x 4,00 x 1,70 m' },
  { name: 'Kanał 6m', dims: '1,24 x 6,00 x 1,70 m' },
];

export default function Szamba() {
  const [lightbox, setLightbox] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightbox(i);
  const closeLightbox = () => setLightbox(null);
  const prevImage = () => setLightbox((prev) => (prev !== null ? (prev - 1 + galleryImages.length) % galleryImages.length : null));
  const nextImage = () => setLightbox((prev) => (prev !== null ? (prev + 1) % galleryImages.length : null));

  return (
    <>
      <section className="relative bg-secondary-900 pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1682146224885-7051da250554?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Szambo betonowe"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-secondary-900/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Szamba betonowe, piwnice ogrodowe i kanały samochodowe{' '}
              <span className="text-primary-400">– trwałość na lata</span>
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Brak dostępu do miejskiej sieci kanalizacyjnej to nie problem. Nasze szamba
              betonowe to sprawdzone i bezpieczne rozwiązanie, które pozwala na komfortowe
              funkcjonowanie we własnym domu czy na działce rekreacyjnej. Zbiorniki
              charakteryzują się ogromną wytrzymałością i szczelnością. Wykonujemy pełną
              usługę: od wykopu, przez profesjonalny montaż, aż po finalne podłączenie do
              budynku.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <h2 className="text-3xl font-bold text-secondary-800 mb-8 text-center">
          Dostępne pojemności i wymiary
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-secondary-50 text-secondary-600">
                <th className="text-left px-6 py-4 font-semibold rounded-tl-xl">Pojemność</th>
                <th className="text-left px-6 py-4 font-semibold">Szerokość</th>
                <th className="text-left px-6 py-4 font-semibold">Długość</th>
                <th className="text-left px-6 py-4 font-semibold rounded-tr-xl">Wysokość</th>
              </tr>
            </thead>
            <tbody>
              {tanks.map((t, i) => (
                <tr
                  key={i}
                  className={`border-b border-secondary-100 ${i % 2 === 0 ? 'bg-white' : 'bg-secondary-50/50'
                    }`}
                >
                  <td className="px-6 py-4 font-semibold text-secondary-800">{t.vol}</td>
                  <td className="px-6 py-4 text-secondary-600">{t.w}</td>
                  <td className="px-6 py-4 text-secondary-600">{t.l}</td>
                  <td className="px-6 py-4 text-secondary-600">{t.h}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </SectionWrapper>

      <SectionWrapper bg="gray">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">
              Akcesoria i wyposażenie
            </h2>
            <ul className="space-y-3">
              {accessories.map((a, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-primary-600 shrink-0 mt-0.5" />
                  <span className="text-secondary-600">{a}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold text-secondary-800 mb-6">
              Kanały samochodowe
            </h2>
            <div className="space-y-4">
              {channels.map((c, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-secondary-100"
                >
                  <p className="font-semibold text-secondary-800 mb-1">{c.name}</p>
                  <p className="text-secondary-500 text-sm">Wymiary: {c.dims}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-secondary-800 mb-3">
                Piwniczki ogrodowe
              </h3>
              <p className="text-secondary-500 text-sm leading-relaxed">
                Betonowe piwniczki ogrodowe z otworem na drzwi. Idealne do przechowywania
                przetworów i warzyw – utrzymują stałą, niską temperaturę przez cały rok.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Galeria */}
      <SectionWrapper>
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center">
            <Camera className="w-6 h-6 text-primary-600" />
          </div>
          <h2 className="text-3xl font-bold text-secondary-800">
            Galeria realizacji
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="relative group cursor-pointer rounded-2xl overflow-hidden aspect-[4/3]"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-secondary-900/0 group-hover:bg-secondary-900/30 transition-colors duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-medium text-sm">
                  Powiększ
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </SectionWrapper>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={closeLightbox}
            onKeyDown={(e) => {
              if (e.key === 'Escape') closeLightbox();
              if (e.key === 'ArrowLeft') prevImage();
              if (e.key === 'ArrowRight') nextImage();
            }}
            tabIndex={0}
          >
            <button
              onClick={(e) => { e.stopPropagation(); closeLightbox(); }}
              className="absolute top-4 right-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>

            <motion.img
              key={lightbox}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />

            <button
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-4 text-white/70 hover:text-white transition-colors z-10"
            >
              <ChevronRight className="w-10 h-10" />
            </button>

            <div className="absolute bottom-4 text-white/60 text-sm">
              {lightbox + 1} / {galleryImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Testimonials reviews={[
        { name: 'Jan K.', text: 'Szybki montaż szamba, zero problemów z dojazdem na trudną działkę. Panowie zostawili po sobie idealny porządek.' },
        { name: 'Piotr M.', text: 'Szambo betonowe 10m3 zamontowane w kilka godzin. Solidna robota i świetny kontakt z panem Pawłem.' },
        { name: 'Krzysztof W.', text: 'Polecam! Bardzo solidne zbiorniki, doradztwo przy wyborze pojemności i wymiarów było bezbłędne.' },
      ]} />

      <SectionWrapper>
        <div className="text-center">
          <h2 className="text-3xl font-bold text-secondary-800 mb-4">
            Potrzebujesz szamba?
          </h2>
          <p className="text-secondary-500 max-w-xl mx-auto mb-8">
            Skontaktuj się z nami, aby otrzymać bezpłatną wycenę. Doradzimy najlepsze
            rozwiązanie dla Twojej działki.
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
