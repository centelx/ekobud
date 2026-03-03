import { Star } from 'lucide-react';
import SectionWrapper from './ui/SectionWrapper';

interface Review {
  name: string;
  text: string;
}

interface TestimonialsProps {
  reviews: Review[];
}

export default function Testimonials({ reviews }: TestimonialsProps) {
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
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
