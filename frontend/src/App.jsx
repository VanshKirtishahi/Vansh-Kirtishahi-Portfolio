import { useState, useEffect } from "react";
import "@/App.css";
import { Toaster } from 'sonner';
import { Progress } from "@/components/ui/progress";
import { AnimatedCursor } from "@/components/ui/animated-cursor"; // 👈 Import this

import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ContactSection } from './components/ContactSection';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(13);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          clearInterval(timer);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        const diff = Math.random() * 15;
        return Math.min(oldProgress + diff, 100);
      });
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-slate-950 text-slate-100">
        <div className="w-[80%] md:w-[40%] space-y-6 flex flex-col items-center">
          <h1 className="text-4xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-cyan-400 animate-pulse">
            VK
          </h1>
          <p className="font-mono text-sm text-cyan-400">Initializing Portfolio...</p>
          <Progress value={progress} className="w-full h-2 bg-slate-800" />
          <p className="font-mono text-xs text-slate-500">
            {Math.round(progress)}%
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="App bg-slate-950 text-slate-100 min-h-screen overflow-x-hidden animate-in fade-in duration-700 cursor-none"> {/* Added cursor-none class here if you want to hide default cursor */}
      
      {/* 👇 Add the Animated Cursor Component Here */}
      <AnimatedCursor />

      <div className="fixed inset-0 z-0 opacity-20 mix-blend-overlay pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <ContactSection />
      </div>

      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: 'rgba(15, 23, 42, 0.9)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(100, 116, 139, 0.3)',
            color: '#f8fafc',
          },
        }}
      />
    </div>
  );
}

export default App;