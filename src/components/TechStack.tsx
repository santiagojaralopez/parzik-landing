import React, { useEffect, useRef, useState } from 'react';

const technologies = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', invert: true },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
  { name: 'Express', logo: 'https://cdn.worldvectorlogo.com/logos/express-109.svg', invert: true },
  { name: 'MongoDB', logo: 'https://img.icons8.com/?size=512&id=74402&format=png' },
  { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
  { name: 'PostgreSQL', logo: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
  { name: 'AWS', logo: 'https://cast-software.awsworkshop.io/images/AWS-Logo_White-Color.png' },
  { name: 'Docker', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png', }
];

export function TechStack() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const scroll = () => {
      if (isHovered) return;
      
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0;
      } else {
        scrollContainer.scrollLeft += 1;
      }
    };

    const interval = setInterval(scroll, 20);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section className="container mx-auto px-6 py-16 border-t border-gray-800">
      <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
        Impulsado por Tecnologías Líderes en la Industria
      </h2>
      <div 
        className="overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div 
          ref={scrollRef}
          className="flex gap-8 overflow-x-hidden whitespace-nowrap"
        >
          {[...technologies, ...technologies].map((tech, index) => (
            <div 
              key={`${tech.name}-${index}`} 
              className="inline-flex flex-col items-center min-w-[200px] group"
            >
              <div className="h-16 flex items-center justify-center p-2">
                <img 
                  src={tech.logo} 
                  alt={tech.name}
                  className={`h-12 w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${
                    tech.invert ? 'invert' : ''
                  }`}
                />
              </div>
              <span className="text-gray-400 text-sm mt-2">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}