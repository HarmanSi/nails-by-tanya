import MainLayout from '../Layouts/MainLayout';

export default function About() {
  return (
    <MainLayout>
      <div className="max-w-2xl mx-auto p-6 bg-white/40 rounded-lg shadow-md text-maroon backdrop-blur-sm">
        <h2 className="text-3xl font-bold mb-4">About Tanya</h2>
        <p className="text-lg leading-relaxed">
          Hi! I'm Tanya, a passionate nail artist based in Burpengary East. I specialize in gorgeous, long-lasting nail designs that help my clients feel confident, beautiful, and pampered. Every set is a work of art, crafted with love and care in a cozy, relaxing environment.
        </p>
      </div>
    </MainLayout>
  );
}