import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import Button from '../components/ui/Button';
import SectionWrapper from '../components/ui/SectionWrapper';

const contactInfo = [
  {
    icon: Phone,
    label: 'Telefon',
    value: '+48 500 000 000',
    href: 'tel:+48500000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'biuro@ekobud.pl',
    href: 'mailto:biuro@ekobud.pl',
  },
  {
    icon: MapPin,
    label: 'Adres',
    value: 'Nowa 3, 07-200 Natalin',
    href: null,
  },
  {
    icon: Clock,
    label: 'Godziny pracy',
    value: 'Pon\u2013Pt: 7:00\u201317:00, Sob: 8:00\u201314:00',
    href: null,
  },
];

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');

    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');
    formData.append('subject', 'Nowe zapytanie ze strony EkoBud');

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section className="relative bg-secondary-900 pt-32 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary-900 to-secondary-800" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
              Skontaktuj się z nami
            </h1>
            <p className="text-lg text-secondary-300 leading-relaxed">
              Masz pytanie lub chcesz otrzymać wycenę? Wypełnij formularz lub skontaktuj się
              z nami telefonicznie. Odpowiadamy na zapytania w ciągu 24 godzin.
            </p>
          </motion.div>
        </div>
      </section>

      <SectionWrapper>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">
              Formularz kontaktowy
            </h2>

            {status === 'success' ? (
              <div className="bg-primary-50 border border-primary-200 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold text-secondary-800 mb-2">
                  Wiadomość wysłana!
                </h3>
                <p className="text-secondary-500">
                  Dziękujemy za kontakt. Odezwiemy się najszybciej jak to możliwe.
                </p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 text-primary-600 font-semibold text-sm hover:underline"
                >
                  Wyślij kolejną wiadomość
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <input
                  type="checkbox"
                  name="botcheck"
                  className="hidden"
                  style={{ display: 'none' }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-secondary-700 mb-1.5"
                    >
                      Imię i nazwisko
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      required
                      className="w-full border border-secondary-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="Jan Kowalski"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-secondary-700 mb-1.5"
                    >
                      Telefon
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      required
                      className="w-full border border-secondary-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                      placeholder="+48 500 000 000"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-secondary-700 mb-1.5"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full border border-secondary-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                    placeholder="jan@email.pl"
                  />
                </div>

                <div>
                  <label
                    htmlFor="location"
                    className="block text-sm font-medium text-secondary-700 mb-1.5"
                  >
                    Miejscowość
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    className="w-full border border-secondary-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow"
                    placeholder="Wyszków"
                  />
                </div>

                <div>
                  <label
                    htmlFor="service"
                    className="block text-sm font-medium text-secondary-700 mb-1.5"
                  >
                    Temat zapytania
                  </label>
                  <select
                    id="service"
                    name="service"
                    className="w-full border border-secondary-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow bg-white"
                  >
                    <option value="ogolne">Zapytanie ogólne</option>
                    <option value="szamba">Szamba betonowe</option>
                    <option value="oczyszczalnie">Oczyszczalnie ścieków</option>
                    <option value="przylacza-wodkan">Przyłącza wod-kan</option>
                    <option value="przylacza-gaz">Przyłącza gazowe</option>
                    <option value="inne">Inne</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-secondary-700 mb-1.5"
                  >
                    Wiadomość
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full border border-secondary-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-shadow resize-y"
                    placeholder="Opisz swoje potrzeby..."
                  />
                </div>

                <Button type="submit" isLoading={status === 'loading'} className="w-full sm:w-auto">
                  Wyślij wiadomość
                </Button>

                {status === 'error' && (
                  <p className="text-red-600 text-sm">
                    Wystąpił błąd podczas wysyłania. Spróbuj ponownie lub skontaktuj się
                    telefonicznie.
                  </p>
                )}
              </form>
            )}
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-secondary-800 mb-6">
              Dane kontaktowe
            </h2>
            <div className="space-y-6">
              {contactInfo.map((info, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-11 h-11 bg-primary-50 rounded-xl flex items-center justify-center shrink-0">
                    <info.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-xs text-secondary-400 font-medium uppercase tracking-wider mb-1">
                      {info.label}
                    </p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-secondary-800 font-medium hover:text-primary-600 transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-secondary-800 font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 bg-secondary-50 rounded-2xl p-6">
              <h3 className="font-bold text-secondary-800 mb-2">Eko Bud Paweł Sergiejuk</h3>
              <p className="text-secondary-500 text-sm leading-relaxed">
                Nowa 3, 07-200 Natalin
                <br />
                NIP: 714 200 73 23
              </p>
              <p className="text-secondary-500 text-sm mt-3 leading-relaxed">
                Obsługujemy Wyszków i miejscowości w promieniu 75 km: Serock, Pułtusk,
                Legionowo, Ostrów Mazowiecka, Ostrołęka, Długosiodło, Łochów, Węgrów,
                Mińsk Mazowiecki, Radzymin, Wołomin, Tłuszcz.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </>
  );
}
