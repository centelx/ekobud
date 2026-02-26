import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import Button from '../components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4">
      <div className="text-center max-w-md">
        <p className="text-8xl font-bold text-primary-600 mb-4">404</p>
        <h1 className="text-2xl font-bold text-secondary-800 mb-3">
          Strona nie została znaleziona
        </h1>
        <p className="text-secondary-500 mb-8">
          Przepraszamy, ale strona, której szukasz, nie istnieje lub została przeniesiona.
        </p>
        <Link to="/">
          <Button>
            <Home className="w-4 h-4" />
            Wróć na stronę główną
          </Button>
        </Link>
      </div>
    </div>
  );
}
