import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Rajesh Kumar',
    role: 'League Organizer',
    content: 'BidArena made our cricket auction incredibly smooth! The platform is intuitive and our participants loved the experience. Highly recommended for any cricket league.',
    rating: 5
  },
  {
    id: 2,
    name: 'Priya Sharma',
    role: 'Team Captain',
    content: 'The bidding process was transparent and exciting. We managed to build our dream team within budget. The support team was also very responsive to our queries.',
    rating: 5
  },
  {
    id: 3,
    name: 'Amit Patel',
    role: 'Tournament Director',
    content: 'We\'ve used BidArena for three seasons now. It\'s reliable, easy to use, and adds real excitement to our player auctions. The rates are competitive too!',
    rating: 5
  },
  {
    id: 4,
    name: 'Sneha Reddy',
    role: 'Cricket Enthusiast',
    content: 'As someone new to cricket auctions, I found BidArena very user-friendly. The instructions were clear and the whole process was enjoyable. Can\'t wait for the next season!',
    rating: 5
  }
];

export function TestimonialsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      {/* Main testimonial card with fixed height */}
      <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg min-h-[280px] md:min-h-[240px] flex flex-col justify-between">
        {/* Stars */}
        <div className="flex gap-1 mb-4">
          {Array.from({ length: currentTestimonial.rating }).map((_, i) => (
            <Star key={i} className="w-5 h-5 fill-accent text-accent" />
          ))}
        </div>

        {/* Content */}
        <blockquote className="text-lg md:text-xl text-foreground mb-6 flex-grow">
          "{currentTestimonial.content}"
        </blockquote>

        {/* Author */}
        <div className="flex items-center justify-between">
          <div>
            <div className="font-bold text-foreground">{currentTestimonial.name}</div>
            <div className="text-sm text-muted-foreground">{currentTestimonial.role}</div>
          </div>

          {/* Navigation buttons - desktop */}
          <div className="hidden md:flex gap-2">
            <button
              onClick={goToPrevious}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={goToNext}
              className="p-2 rounded-lg border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Navigation buttons - mobile (below card) */}
      <div className="flex md:hidden justify-center gap-2 mt-4">
        <button
          onClick={goToPrevious}
          className="p-3 rounded-lg border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={goToNext}
          className="p-3 rounded-lg border border-border hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-ring"
          aria-label="Next testimonial"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Dots indicator */}
      <div className="flex justify-center gap-2 mt-6">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${
              index === currentIndex
                ? 'bg-primary w-8'
                : 'bg-border hover:bg-muted-foreground'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

