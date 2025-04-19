import MainLayout from '../Layouts/MainLayout';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function Home() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(setServices);
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

      <div className="flex flex-wrap gap-4">
        {services.map(service => (
          <Link
            key={service.id}
            href={`/service/${service.id}`}
            className="inline-block px-4 py-2 rounded-lg text-maroon border border-maroon hover:bg-pink hover:shadow-md transition"
          >
            <span className="font-semibold">{service.title}</span> – ${service.price}
          </Link>
        ))}
      </div>
    </MainLayout>
  );
}