import MainLayout from '../Layouts/MainLayout';
import { useEffect, useState } from 'react';
import { Link } from '@inertiajs/react';

export default function ServiceDetail({ id }) {
  const [service, setService] = useState(null);

  useEffect(() => {
    fetch('/api/services')
      .then(res => res.json())
      .then(data => {
        const found = data.find(s => s.id == id);
        setService(found);
      });
  }, [id]);

  if (!service) return <MainLayout><div className="p-4 text-maroon">Loading...</div></MainLayout>;

  return (
    <MainLayout>
      <div className="max-w-xl mx-auto p-6 bg-white/40 rounded-lg shadow-md text-maroon backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-2">{service.title}</h2>
        <p className="mb-2 text-lg">{service.description}</p>
        <p className="text-lg font-semibold mb-4">Price: ${service.price}</p>

        {/* Image placeholder box */}
        <div className="w-full h-64 bg-gray-200 rounded-md mb-6 flex items-center justify-center text-gray-500">
          Image Placeholder
        </div>

        {/* Book Now Button */}
        <a
          href="https://instagram.com/nailsbytanya22" // or your booking link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink text-maroon px-6 py-2 rounded-full shadow hover:bg-pink/70 transition"
        >
          Book Now
        </a>

        {/* Back to Services Link */}
        <div className="mt-6">
          <Link href="/" className="text-purple underline hover:text-pink">
            ← Back to Services
          </Link>
        </div>
      </div>
    </MainLayout>
  );
}