import { useEffect, useState, useRef } from "react";
import { Card } from "@/components/ui/card";

interface WaterStatCardProps {
  icon: string;
  title: string;
  value: string;
  unit: string;
  description: string;
  delay?: number;
}

export const WaterStatCard = ({ 
  icon, 
  title, 
  value, 
  unit, 
  description,
  delay = 0 
}: WaterStatCardProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const targetValue = parseInt(value.replace(/\D/g, ''));

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.2 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 1500;
    const steps = 60;
    const increment = targetValue / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= targetValue) {
        setCount(targetValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <Card
  ref={cardRef}
  className={`p-6 md:p-8 bg-white text-gray-900 border border-drought-light hover:border-water transition-all duration-500 shadow-lg hover:shadow-glow rounded-2xl group ${
    isVisible ? 'animate-scale-in' : 'opacity-0'
  }`}
>

      <div className="flex justify-center mb-6">
  <img
    src={icon}
    alt={title}
    className="w-20 h-20 object-contain drop-shadow-[0_0_10px_rgba(0,0,0,0.15)] group-hover:scale-110 transition-transform duration-300 animate-float"
  />
</div>
      <h3 className="text-lg md:text-xl font-semibold mb-3 text-foreground">
        {title}
      </h3>
      <div className="flex items-baseline gap-2 mb-4">
        <span className="text-4xl md:text-5xl font-bold text-gradient-water animate-counter">
          {isVisible ? count : 0}
        </span>
        <span className="text-2xl md:text-3xl font-medium text-water">
          {unit}
        </span>
      </div>
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>
    </Card>
  );
};
