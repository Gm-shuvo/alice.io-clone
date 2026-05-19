import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Products', dropdown: true },
    { name: 'Solutions', dropdown: true },
    { name: 'Intelligence', dropdown: false },
    { name: 'Where We Operate', dropdown: true },
    { name: 'Resources', dropdown: true },
    { name: 'Company', dropdown: true },
  ];

  return (
    <nav className={`sticky top-0 z-[1001] w-full transition-all duration-500 border-b ${isScrolled ? 'bg-beige/90 backdrop-blur-md border-medium-grey' : 'bg-beige border-transparent'} py-3 px-10 sm:px-5`}>
      <div className="max-w-[85.5rem] mx-auto flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="flex items-center">
          <img 
            src="https://cdn.prod.website-files.com/69005ca0f0832195cbc1370c/6935051c71a7628e57908360_fixed-icon.svg" 
            alt="Alice Logo" 
            className="w-24 h-10 object-contain"
          />
          <span className="ml-2 text-xl font-bold tracking-tight">ALICE</span>
        </a>

        {/* Center Links */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group cursor-pointer">
              <div className="flex items-center gap-1 font-haas text-[0.875rem] tracking-[0.045em] py-2 px-1 hover:border-b hover:border-black transition-all">
                {link.name}
                {link.dropdown && (
                  <svg className="w-3 h-3 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Right CTA */}
        <button className="btn-primary flex-shrink-0 !px-6 !py-2 !text-[0.75rem] !min-w-0 lg:!px-12 lg:!py-2 lg:!text-[0.875rem]">
          Get a Demo
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
