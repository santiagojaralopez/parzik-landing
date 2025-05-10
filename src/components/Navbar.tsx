import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

interface NavItemProps {
  label: string;
  href?: string;
  children?: {
    label: string;
    href: string;
  }[];
}

const navItems: NavItemProps[] = [
  {
    label: 'Servicios',
    children: [
      { label: 'Páginas Web', href: '#web-development' },
      { label: 'Aplicaciones Web', href: '#custom-software' },
      { label: 'Tarjetas Inteligentes', href: '#smart-cards' },
    ],
  },
  {
    label: 'Precios',
    children: [
      { label: 'Páginas web', href: '#web-pricing' },
      { label: 'Aplicaciones web', href: '#software-pricing' },
      { label: 'Tarjetas inteligentes', href: '#cards-pricing' },
    ],
  },
  {
    label: 'Contáctanos',
    href: '#contact',
  },
];

function NavItem({ label, href, children }: NavItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  if (!children) {
    return (
      <a
        href={href}
        className="text-gray-300 hover:text-white transition-colors px-4 py-2"
      >
        {label}
      </a>
    );
  }

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors px-4 py-2"
        onMouseEnter={() => setIsOpen(true)}
      >
        {label}
        <ChevronDown className="h-4 w-4" />
      </button>

      {isOpen && (
        <div className="absolute left-0 mt-1 w-64 bg-[#050505] rounded-lg shadow-lg border border-gray-700 py-2">
          {children.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="block px-4 py-2 text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#0A0A0A]/95 backdrop-blur-sm border-b border-[#2A2A2A]">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://i.postimg.cc/HLHgyCSj/parzik-White-Background.png" 
              alt="Parzik Logo" 
              className="h-8 w-auto"
            />
            <span className="text-2xl font-bold text-white">Parzik</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <NavItem key={item.label} {...item} />
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-2">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.children ? (
                  <>
                    <div className="text-gray-300 font-semibold px-4 py-2">
                      {item.label}
                    </div>
                    <div className="pl-4 space-y-2 bg-[#050505] rounded-lg">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="block text-gray-400 hover:text-white transition-colors px-4 py-2"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {child.label}
                        </a>
                      ))}
                    </div>
                  </>
                ) : (
                  <a
                    href={item.href}
                    className="block text-gray-300 hover:text-white transition-colors px-4 py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}