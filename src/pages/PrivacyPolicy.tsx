import { motion } from 'framer-motion';
import SectionWrapper from '../components/ui/SectionWrapper';

export default function PrivacyPolicy() {
  return (
    <>
      <section className="relative bg-secondary-900 pt-32 pb-16">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white">
              Polityka prywatności i regulamin
            </h1>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="max-w-3xl mx-auto prose-sm">
          <h2 className="text-2xl font-bold text-secondary-800 mb-6">Polityka Prywatności</h2>

          <div className="space-y-6 text-secondary-600 leading-relaxed text-sm">
            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                1. Administrator Danych
              </h3>
              <p>
                Administratorem danych osobowych jest Eko Bud Paweł Sergiejuk z siedzibą
                przy Nowa 3, 07-200 Natalin, NIP: 714 200 73 23.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                2. Cel przetwarzania
              </h3>
              <p>
                Przetwarzamy dane (imię, nazwisko, email, telefon, miejscowość) w celu:
                odpowiedzi na zapytania, realizacji usługi oraz wypełnienia obowiązków
                prawnych.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                3. Nagrywanie rozmów
              </h3>
              <p>
                Rozmowy telefoniczne mogą być nagrywane w celach jakościowych i dowodowych.
                Brak zgody na nagrywanie = prosimy o kontakt mailowy:{' '}
                <a
                  href="mailto:biuro@ekobud.pl"
                  className="text-primary-600 hover:underline"
                >
                  biuro@ekobud.pl
                </a>
                .
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                4. Prawa
              </h3>
              <p>
                Masz prawo dostępu do swoich danych, ich sprostowania oraz usunięcia.
                W celu realizacji praw skontaktuj się z administratorem.
              </p>
            </div>
          </div>

          <hr className="my-12 border-secondary-200" />

          <h2 className="text-2xl font-bold text-secondary-800 mb-6">Regulamin Serwisu</h2>

          <div className="space-y-6 text-secondary-600 leading-relaxed text-sm">
            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                1. Postanowienia ogólne
              </h3>
              <p>
                Strona internetowa ma charakter informacyjny i służy prezentacji oferty
                firmy Eko Bud Paweł Sergiejuk.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                2. Wymagania techniczne
              </h3>
              <p>
                Do korzystania z serwisu wymagane jest urządzenie z dostępem do Internetu
                oraz przeglądarka internetowa.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                3. Formularz kontaktowy
              </h3>
              <p>
                Użytkownik korzystający z formularza kontaktowego podaje tylko prawdziwe
                dane. Zakazane jest przesyłanie treści o charakterze bezprawnym.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                4. Odpowiedzialność
              </h3>
              <p>
                Treści prezentowane na stronie stanowią zaproszenie do zawarcia umowy,
                nie ofertę w rozumieniu Kodeksu Cywilnego. Serwis nie zawiera cenników.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-secondary-800 mb-2">
                5. Reklamacje
              </h3>
              <p>
                Zgłoszenia reklamacyjne należy kierować na adres email:{' '}
                <a
                  href="mailto:biuro@ekobud.pl"
                  className="text-primary-600 hover:underline"
                >
                  biuro@ekobud.pl
                </a>
                . Reklamacje rozpatrywane są w terminie 14 dni. Działamy zgodnie z
                przepisami RODO.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
