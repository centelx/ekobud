import { useState, FormEvent } from 'react';

export default function ContactFormSmall() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('loading');

    const formData = new FormData(form);
    formData.append('access_key', '4343a106-203d-4279-9980-da05e02f360f');
    formData.append('subject', 'Nowe zapytanie z formularza w stopce - EkoBud');

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

  if (status === 'success') {
    return (
      <p className="text-primary-400 text-sm">Wiadomość wysłana. Odezwiemy się wkrótce.</p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
      <input
        type="text"
        name="name"
        placeholder="Imię"
        required
        className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-500 focus:outline-none focus:border-primary-500"
      />
      <input
        type="tel"
        name="phone"
        placeholder="Telefon"
        required
        className="w-full bg-secondary-800 border border-secondary-700 rounded-lg px-3 py-2 text-sm text-white placeholder:text-secondary-500 focus:outline-none focus:border-primary-500"
      />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-primary-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors disabled:opacity-60"
      >
        {status === 'loading' ? 'Wysyłanie...' : 'Oddzwońcie do mnie'}
      </button>
      {status === 'error' && (
        <p className="text-red-400 text-xs">Błąd wysyłania. Spróbuj ponownie.</p>
      )}
    </form>
  );
}
