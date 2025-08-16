import Container from './Container';
import { useState, useEffect } from 'react';

export default function Testimonials() {
  const testimonials = [
    { src: 'assets/test 1.png', alt: 'Testimonial 1' },
    { src: 'assets/test 2.png', alt: 'Testimonial 2' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <Container>
      <div className="h-screen grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
        <div>
          <div>
            <h3 className="text-orange-500 font-semibold mb-2">TESTIMONIALS</h3>
            <h1 className="text-4xl font-bold max-w-sm">
              What People Say About Us.
            </h1>
          </div>
          <div className="flex mt-4 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  index === currentIndex ? 'bg-gray-500' : 'bg-gray-300'
                }`}
              ></button>
            ))}
          </div>
        </div>

        <div>
          <img
            src={testimonials[currentIndex].src}
            alt={testimonials[currentIndex].alt}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </Container>
  );
}
