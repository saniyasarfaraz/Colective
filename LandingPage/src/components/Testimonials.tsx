
import React, { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { Star } from 'lucide-react';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  college: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Aditya Kumar",
    role: "Computer Science Student",
    college: "SRMS CET",
    content: "Colective has transformed how our project team collaborates. The real-time features have made group assignments much easier to coordinate!",
    rating: 5
  },
  {
    id: 2,
    name: "Priya Sharma",
    role: "Engineering Student",
    college: "SRMS CET&R",
    content: "As a design team lead for our engineering project, Colective has streamlined our workflow and helped us meet tight deadlines effectively.",
    rating: 5
  },
  {
    id: 3,
    name: "Rahul Verma",
    role: "Research Assistant",
    college: "SRMS CET",
    content: "We've tried many collaboration tools for our research team, but Colective's interface is perfect for academic projects and research collaboration.",
    rating: 4
  },
  {
    id: 4,
    name: "Anjali Patel",
    role: "Final Year Student",
    college: "SRMS CET&R",
    content: "The progress tracking features in Colective helped our final year project team stay organized and focused throughout our capstone project.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = testimonialsRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (testimonialsRef.current) {
      observer.observe(testimonialsRef.current);
    }

    const intervalId = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);

    return () => {
      if (testimonialsRef.current) {
        observer.unobserve(testimonialsRef.current);
      }
      clearInterval(intervalId);
    };
  }, []);

  useEffect(() => {
    if (carouselRef.current) {
      const scrollPosition = activeIndex * (carouselRef.current.scrollWidth / testimonials.length);
      carouselRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  }, [activeIndex]);

  return (
    <section id="testimonials" className="py-20 bg-gray-50" ref={testimonialsRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 reveal-on-scroll">
          <span className="text-colective-purple font-medium">Testimonials</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">What our students say</h2>
          <p className="text-gray-600 text-lg">Students from SRMS CET and SRMS CET&R love using Colective for their academic collaboration.</p>
        </div>
        
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-2 gap-8 reveal-on-scroll">
          {testimonials.map((testimonial, index) => (
            <Card key={testimonial.id} className="p-6 border-none shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg italic mb-6">&ldquo;{testimonial.content}&rdquo;</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-colective-purple to-colective-blue flex items-center justify-center text-white font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.college}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        {/* Mobile Layout - Carousel */}
        <div className="lg:hidden relative reveal-on-scroll">
          <div 
            ref={carouselRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id} 
                className="min-w-full snap-center px-4"
              >
                <Card className="p-6 border-none shadow-lg bg-white">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={18} className="fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-lg italic mb-6">&ldquo;{testimonial.content}&rdquo;</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-colective-purple to-colective-blue flex items-center justify-center text-white font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <p className="font-medium">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.college}</p>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
          
          {/* Indicators */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  activeIndex === index ? 'bg-colective-purple' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
