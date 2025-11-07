import { ReactNode, useEffect, useRef, useState } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number;
}

export const ParallaxSection = ({ 
  children, 
  className = "",
  speed = 0.5 
}: ParallaxSectionProps) => {
  const [offset, setOffset] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const scrolled = window.scrollY;
      const elementTop = scrolled + rect.top;
      const elementHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      // Only apply parallax when element is in view
      if (rect.top < windowHeight && rect.bottom > 0) {
        const parallaxOffset = (scrolled - elementTop + windowHeight) * speed;
        setOffset(parallaxOffset);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener('scroll', handleScroll);
  }, [speed]);

  return (
    <div ref={sectionRef} className={className}>
      <div 
        style={{ 
          transform: `translateY(${offset}px)`,
          willChange: 'transform'
        }}
        className="transition-transform duration-0"
      >
        {children}
      </div>
    </div>
  );
};
