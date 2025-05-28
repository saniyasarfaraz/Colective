
import React, { useEffect, useRef } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Check } from 'lucide-react';

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted: boolean;
  buttonText: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Free",
    price: "₹0",
    description: "Perfect for college students and small teams",
    features: [
      "Up to 10 team members",
      "3 active projects",
      "Basic collaboration features",
      "Progress tracking with Kanban",
      "Email support"
    ],
    highlighted: false,
    buttonText: "Sign Up Free"
  },
  {
    name: "Academic",
    price: "₹999",
    description: "For departments and larger college teams",
    features: [
      "Up to 100 students",
      "Unlimited projects",
      "Advanced collaboration features",
      "50GB storage",
      "Priority support",
      "Progress tracking dashboard",
      "Department management"
    ],
    highlighted: true,
    buttonText: "Start Free Trial"
  },
  {
    name: "Institution",
    price: "Custom",
    description: "For entire colleges and educational institutions",
    features: [
      "Unlimited students and faculty",
      "Unlimited projects",
      "Premium features for academia",
      "Unlimited storage",
      "24/7 dedicated support",
      "Advanced security features",
      "Custom integration with college systems",
      "Dedicated success manager"
    ],
    highlighted: false,
    buttonText: "Contact Sales"
  }
];

const Pricing = () => {
  const pricingRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const elements = pricingRef.current?.querySelectorAll('.reveal-on-scroll');
            elements?.forEach(el => {
              el.classList.add('active');
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (pricingRef.current) {
      observer.observe(pricingRef.current);
    }

    return () => {
      if (pricingRef.current) {
        observer.unobserve(pricingRef.current);
      }
    };
  }, []);

  return (
    <section id="pricing" className="py-20" ref={pricingRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-on-scroll">
          <span className="text-colective-purple font-medium">Pricing</span>
          <h2 className="text-3xl sm:text-4xl font-bold mt-2 mb-4">Choose the plan that fits your academic needs</h2>
          <p className="text-gray-600 text-lg">Free for students, affordable options for departments and institutions.</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <div 
              key={tier.name}
              className="reveal-on-scroll" 
              style={{transitionDelay: `${index * 100}ms`}}
            >
              <Card 
                className={`h-full flex flex-col ${
                  tier.highlighted 
                    ? 'border-colective-purple shadow-lg shadow-colective-purple/10 relative scale-105 z-10' 
                    : 'border-gray-200'
                }`}
              >
                {tier.highlighted && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-colective-purple text-white text-xs font-bold py-1 px-3 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className={`p-6 ${tier.highlighted ? 'bg-gradient-to-br from-colective-purple/10 to-colective-blue/5 rounded-t-lg' : ''}`}>
                  <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
                  <div className="flex items-baseline mb-2">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    {tier.price !== "Custom" && tier.price !== "₹0" && <span className="text-gray-600 ml-2">/month</span>}
                  </div>
                  <p className="text-gray-600 mb-6">{tier.description}</p>
                  <Button 
                    className={`w-full ${
                      tier.highlighted 
                        ? 'bg-colective-purple hover:bg-colective-purple-dark' 
                        : 'bg-white text-colective-purple hover:bg-gray-50 border border-colective-purple'
                    }`}
                  >
                    {tier.buttonText}
                  </Button>
                </div>
                
                <div className="p-6 border-t border-gray-100 flex-grow">
                  <p className="font-medium text-sm text-gray-700 mb-4">Features include:</p>
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check size={16} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
