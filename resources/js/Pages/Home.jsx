import MainLayout from '../Layouts/MainLayout';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Home() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch('https://api.nailsbytanya.com/api/services')
      .then(res => {
        if (!res.ok) throw new Error("API not reachable");
        return res.json();
      })
      .then(setServices)
      .catch(err => {
        console.error("API error:", err);
        setError(true);
        // fallback placeholder data
        setServices([
          { id: 1, title: 'Nail Art (Placeholder)', description: 'Sample design', price: 40 },
          { id: 2, title: 'Acrylic Extensions (Placeholder)', description: 'Example service', price: 60 }
        ]);
      });
  }, []);

  return (
    <MainLayout>
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-maroon">Nails By Tanya</h1>
        <nav className="space-x-4">
          <Link href="/" className="text-purple hover:underline">Home</Link>
          <Link href="/about" className="text-purple hover:underline">About</Link>
          <Link href="/contact" className="text-purple hover:underline">Contact</Link>
        </nav>
      </header>

      <h2 className="text-xl font-semibold mb-4 text-maroon">Our Services</h2>

      {error && (
        <div className="text-sm text-red-600 mb-4">
          Couldn't load live services. Showing sample data instead.
        </div>
      )}

      <div className="grid gap-4">
        {services.map(service => (
          <Link
            key={service.id}
            href={`/service/${service.id}`}
            className="block p-4 rounded-lg shadow-lg backdrop-blur-sm bg-white/40 hover:bg-white/60 transition"
          >
            <h3 className="text-lg font-bold text-maroon">{service.title}</h3>
            <p className="text-sm text-maroon">${service.price}</p>
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}