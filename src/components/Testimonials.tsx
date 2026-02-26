import { Star } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

const reviews = [
  {
    name: 'Marek K.',
    location: 'Wyszków',
    text: 'Bardzo profesjonalne podejście od początku do końca. Panowie przyjechali punktualnie, zamontowali szambo w kilka godzin. Polecam z czystym sumieniem!',
  },
  {
    name: 'Anna W.',
    location: 'Pułtusk',
    text: 'Pan Paweł doradził najlepsze rozwiązanie dla naszej działki. Oczyszczalnia działa bez zarzutu od ponad roku. Pomógł też z całą papierkową robotą.',
  },
  {
    name: 'Tomasz S.',
    location: 'Radzymin',
    text: 'Kompleksowa obsługa przyłącza gazowego. Wszystko od projektu po odbiory załatwione sprawnie. Teren po wykopach zostawiony w idealnym porządku.',
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper bg="gray">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-secondary-800 mb-4">
          Opinie naszych klientów
        </h2>
        <p className="text-secondary-500 max-w-2xl mx-auto">
          Zaufanie klientów to nasza największa nagroda. Oto co mówią o naszej pracy.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-8 shadow-sm border border-secondary-100"
          >
            <div className="flex gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, j) => (
                <Star
                  key={j}
                  className="w-4 h-4 fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <p className="text-secondary-600 text-sm leading-relaxed mb-6">
              "{review.text}"
            </p>
            <div>
              <p className="font-semibold text-secondary-800 text-sm">{review.name}</p>
              <p className="text-secondary-400 text-xs">{review.location}</p>
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
