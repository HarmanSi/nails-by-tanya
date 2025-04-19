import MainLayout from '../Layouts/MainLayout';

export default function Contact() {
  return (
    <MainLayout>
      <div className="max-w-xl mx-auto p-6 bg-white/40 rounded-lg shadow-md text-maroon backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <p className="text-lg mb-2">📞 <strong>Phone:</strong> 0468948446</p>
        <p className="text-lg">📸 <strong>Instagram:</strong>{' '}
          <a
            href="https://instagram.com/nailsbytanya22"
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple underline hover:text-pink"
          >
            @nailsbytanya22
          </a>
        </p>
      </div>
    </MainLayout>
  );
}