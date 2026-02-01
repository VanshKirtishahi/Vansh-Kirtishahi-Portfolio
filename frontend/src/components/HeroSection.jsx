import { motion } from 'framer-motion';
import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { TypewriterEffect } from './ui/typewriter-effect';
import { SparklesCore } from './ui/sparkles';

export const HeroSection = () => {
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const words = [
    {
      text: "Full",
      className: "text-slate-300",
    },
    {
      text: "Stack",
      className: "text-slate-300",
    },
    {
      text: "Developer",
      className: "text-cyan-400 dark:text-cyan-400",
    },
    {
      text: "&",
      className: "text-slate-300",
    },
    {
      text: "Problem",
      className: "text-slate-300",
    },
    {
      text: "Solver",
      className: "text-purple-400 dark:text-purple-400",
    },
  ];

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-950" data-testid="hero-section">
      {/* Sparkles Background */}
      <div className="absolute inset-0 w-full h-full">
        <SparklesCore
          id="hero-sparkles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="pointer-events-auto"
        >
          <motion.p
            className="text-cyan-400 font-mono text-sm md:text-base mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            data-testid="hero-greeting"
          >
            Hi, my name is
          </motion.p>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-heading font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            data-testid="hero-name"
          >
            Vansh Kirtishahi
          </motion.h1>

          <div className="h-20 md:h-24 mb-6 flex items-center justify-center">
            <TypewriterEffect words={words} className="text-2xl md:text-4xl lg:text-5xl" />
          </div>

          <motion.p
            className="text-slate-400 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            data-testid="hero-description"
          >
            I craft exceptional digital experiences with cutting-edge technologies.
            Specializing in building scalable full-stack applications and AI-powered solutions.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection('projects')}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 text-white shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 text-base md:text-lg px-8 py-6 z-20"
              data-testid="hero-cta-projects"
            >
              View Projects
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('contact')}
              className="border-2 border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 text-base md:text-lg px-8 py-6 z-20"
              data-testid="hero-cta-contact"
            >
              <Mail className="mr-2 h-5 w-5" />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            className="flex gap-6 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
          >
            <a
              href="https://github.com/VanshKirtishahi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 z-20"
              data-testid="hero-social-github"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/vansh-kirtishahi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 z-20"
              data-testid="hero-social-linkedin"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:vanshkirtishahi@gmail.com"
              className="text-slate-400 hover:text-cyan-400 transition-colors duration-300 z-20"
              data-testid="hero-social-email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          data-testid="hero-scroll-indicator"
        >
          <ChevronDown className="h-8 w-8 text-slate-600" />
        </motion.div>
      </div>

      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-500/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px] -z-10" />
    </section>
  );
};
