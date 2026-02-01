import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from './ui/sheet';

export const Navbar = () => {
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ['rgba(2, 6, 23, 0)', 'rgba(2, 6, 23, 0.9)']
  );
  const backdropBlur = useTransform(scrollY, [0, 100], ['0px', '12px']);
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Experience', href: '#experience' },
    { label: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 border-b border-slate-800/50"
      style={{ backgroundColor, backdropFilter: backdropBlur }}
      data-testid="navbar"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.a
            href="#hero"
            className="text-xl md:text-2xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            data-testid="navbar-logo"
          >
            VK
          </motion.a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.button
                key={item.href}
                onClick={() => scrollToSection(item.href.slice(1))}
                className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-mono text-sm"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
                data-testid={`navbar-link-${item.href.slice(1)}`}
              >
                <span className="text-cyan-400">0{index + 1}.</span> {item.label}
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="navbar-mobile-menu-trigger">
                <Menu className="h-6 w-6 text-slate-300" />
              </Button>
            </SheetTrigger>
            <SheetContent className="bg-slate-950/95 backdrop-blur-xl border-slate-800" data-testid="navbar-mobile-menu">
              <div className="flex flex-col gap-6 mt-8">
                {menuItems.map((item, index) => (
                  <SheetClose asChild key={item.href}>
                    <button
                      onClick={() => scrollToSection(item.href.slice(1))}
                      className="text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-mono text-lg text-left"
                      data-testid={`navbar-mobile-link-${item.href.slice(1)}`}
                    >
                      <span className="text-cyan-400">0{index + 1}.</span> {item.label}
                    </button>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.nav>
  );
};
