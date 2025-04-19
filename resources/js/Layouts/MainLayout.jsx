export default function MainLayout({ children }) {
    return (
      <div
      className="min-h-screen bg-cover bg-center transition-all duration-500"
      style={{
        backgroundImage: "url('/images/bg.jpg')",
      }}
      >
        <div className="bg-white bg-opacity-50 min-h-screen p-6">
          {children}
        </div>
      </div>
    );
  }