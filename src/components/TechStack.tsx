import React from 'react';

const technologies = [
  { name: 'Next.js', logo: 'https://cdn.worldvectorlogo.com/logos/next-js.svg', invert: true },
  { name: 'NestJS', logo: 'https://nestjs.com/img/logo-small.svg' },
  { name: 'React', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' },
  { name: 'FastAPI', logo: 'https://fastapi.tiangolo.com/img/logo-margin/logo-teal.png' },
  { name: 'PostgreSQL', logo: 'https://www.postgresql.org/media/img/about/press/elephant.png' },
  { name: 'MongoDB', logo: 'https://img.icons8.com/?size=512&id=74402&format=png' },
  { name: 'Redis', logo: 'https://cdn.worldvectorlogo.com/logos/redis.svg' },
  { name: 'Docker', logo: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
  { name: 'AWS', logo: 'https://cast-software.awsworkshop.io/images/AWS-Logo_White-Color.png' },
  { name: 'Railway', logo: 'https://railway.app/brand/logo-light.svg' },
  { name: 'Vercel', logo: 'https://assets.vercel.com/image/upload/v1588805858/repositories/vercel/logo.png' }
];

export function TechStack() {
  return (
      <section className="container mx-auto px-6 pb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {technologies.map((tech, index) => (
              <div
                  key={`${tech.name}-${index}`}
                  className="flex flex-col items-center justify-center p-3 bg-[#1A1A1A] rounded-lg border border-[#2A2A2A] transition-transform duration-300 hover:scale-105 w-[calc(50%-8px)] sm:w-[calc(33.33%-16px)] md:w-[calc(25%-16px)] lg:w-[calc(16.66%-16px)]"
              >
                <div className="h-10 sm:h-12 flex items-center justify-center p-2">
                  <img
                      src={tech.logo}
                      alt={tech.name}
                      className={`h-8 sm:h-10 w-auto object-contain ${tech.invert ? 'invert' : ''}`}
                  />
                </div>
                <span className="text-xs sm:text-sm text-gray-400 mt-2">{tech.name}</span>
              </div>
          ))}
        </div>
      </section>
  );
}
