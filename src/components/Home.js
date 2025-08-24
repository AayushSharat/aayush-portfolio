import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col justify-center min-h-[calc(100vh-6rem)]">
      <h1 className="text-6xl md:text-8xl font-bold text-text-main animate-fade-in-up">Aayush Sharat</h1>
      <h2 className="text-3xl md:text-5xl font-medium text-text-secondary mt-4 animate-fade-in-up delay-200">Just a Boy</h2>
      <style jsx>{`
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        .delay-200 {
          animation-delay: 0.2s;
        }
      `}</style>
    </div>
  );
};

export default Home;