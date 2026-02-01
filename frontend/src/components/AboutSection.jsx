import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  Code2,
  Database,
  Zap,
  Users,
  Cpu,
  Layers,
  Code,
  Terminal,
  Smartphone,
  Palette,
  Cloud,
  Trophy,
  TrendingUp,
  Calendar,
  Briefcase,
  Globe,
  ArrowRight
} from 'lucide-react';
import { BackgroundGradient } from './ui/background-gradient';

// Mobile Card Component
function TimelineCardMobile({ item, index, total }) {
  return (
    <div className="p-5 rounded-xl backdrop-blur-sm bg-slate-900/40 border border-slate-800">
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-lg bg-slate-800/50">
          <item.icon className="h-4 w-4 text-cyan-400" />
        </div>
        <div>
          <h4 className="text-lg font-bold text-slate-200 mb-1">{item.title}</h4>
          <p className="text-slate-300 text-sm">{item.description}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-xs text-slate-400">Step {index + 1} of {total}</span>
        <div className="w-20 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

// Desktop Card Component
function TimelineCardDesktop({ item, index, total, align }) {
  return (
    <div className={`p-6 rounded-xl backdrop-blur-sm bg-slate-900/40 border border-slate-800 hover:border-cyan-500/30 transition-colors ${align === 'right' ? 'text-right' : 'text-left'}`}>
      <div className={`flex items-start gap-3 mb-4 ${align === 'right' ? 'flex-row-reverse' : ''}`}>
        <div className="p-2 rounded-lg bg-slate-800/50 flex-shrink-0">
          <item.icon className="h-4 w-4 text-cyan-400" />
        </div>
        <div className={align === 'right' ? 'text-right' : ''}>
          <h4 className="text-lg font-bold text-slate-200 mb-1">{item.title}</h4>
          <p className="text-slate-300 text-sm">{item.description}</p>
        </div>
      </div>
      <div className={`flex items-center ${align === 'right' ? 'justify-end' : 'justify-start'} gap-3`}>
        <span className="text-xs text-slate-400">Step {index + 1} of {total}</span>
        <div className="w-24 h-1.5 bg-slate-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
            style={{ width: `${((index + 1) / total) * 100}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [animatedNumbers, setAnimatedNumbers] = useState({
    projects: 0,
    experience: 0,
    contributions: 0,
    events: 0
  });

  const stats = [
    {
      icon: Code2,
      label: 'Projects Built',
      value: '15+',
      endValue: 15,
      suffix: '+',
      color: 'text-indigo-400',
      gradient: 'from-indigo-500 to-purple-500',
      description: 'Completed projects',
      borderColor: 'border-indigo-500/30'
    },
    {
      icon: Zap,
      label: 'Years Experience',
      value: '2',
      endValue: 2,
      suffix: '+',
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      description: 'Professional work',
      borderColor: 'border-cyan-500/30'
    },
    {
      icon: Database,
      label: 'GitHub Commits',
      value: '300+',
      endValue: 300,
      suffix: '+',
      color: 'text-emerald-400',
      gradient: 'from-emerald-500 to-green-500',
      description: 'Total contributions',
      borderColor: 'border-emerald-500/30'
    },
    {
      icon: Users,
      label: 'Team Projects',
      value: '5+',
      endValue: 5,
      suffix: '+',
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      description: 'Collaborative work',
      borderColor: 'border-pink-500/30'
    },
  ];

  // Animate numbers
  useEffect(() => {
    if (isInView) {
      stats.forEach((stat, index) => {
        const duration = 2000;
        const steps = 60;
        const increment = stat.endValue / (duration / steps);
        let current = 0;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= stat.endValue) {
            current = stat.endValue;
            clearInterval(timer);
          }
          
          setAnimatedNumbers(prev => ({
            ...prev,
            [stat.label.toLowerCase().replace(/\s+/g, '')]: Math.floor(current)
          }));
        }, steps);
        
        return () => clearInterval(timer);
      });
    }
  }, [isInView]);

  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const competencies = [
    {
      title: 'Frontend Development',
      icon: Terminal,
      color: 'text-purple-400',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30',
      level: 90,
      skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Mobile Development',
      icon: Smartphone,
      color: 'text-cyan-400',
      bgColor: 'bg-cyan-500/10',
      borderColor: 'border-cyan-500/30',
      level: 85,
      skills: ['Flutter', 'React Native', 'Dart', 'Firebase']
    },
    {
      title: 'Backend & APIs',
      icon: Cloud,
      color: 'text-emerald-400',
      bgColor: 'bg-emerald-500/10',
      borderColor: 'border-emerald-500/30',
      level: 80,
      skills: ['Node.js', 'Express', 'PostgreSQL', 'REST/GraphQL']
    },
    {
      title: 'UI/UX Design',
      icon: Palette,
      color: 'text-pink-400',
      bgColor: 'bg-pink-500/10',
      borderColor: 'border-pink-500/30',
      level: 75,
      skills: ['Figma', 'Prototyping', 'Wireframing', 'User Research']
    }
  ];

  const timeline = [
    {
      year: '2022',
      title: 'Started Development Journey',
      description: 'Began learning web development fundamentals',
      icon: Code
    },
    {
      year: '2023',
      title: 'First Professional Projects',
      description: 'Built and deployed multiple production applications',
      icon: Briefcase
    },
    {
      year: '2024',
      title: 'Full Stack & Mobile Focus',
      description: 'Expanded into Flutter and advanced backend development',
      icon: Globe
    },
    {
      year: 'Now',
      title: 'Continuous Learning',
      description: 'Exploring AI/ML integration and advanced architectures',
      icon: TrendingUp
    }
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header with Typewriter Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 mb-6 backdrop-blur-sm">
            <Code className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">01.</span>
            <span className="text-sm text-slate-300">Introduction</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
              About Me
            </span>
          </h1>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Building the future, one line of code at a time. Full Stack & Mobile Developer 
            passionate about creating exceptional digital experiences.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-16">
          {/* Left Column: Introduction Card */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="h-full"
          >
            <BackgroundGradient className="h-full">
              <div className="p-8 h-full">
                <div className="flex items-start gap-4 mb-8">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-slate-800">
                    <Layers className="h-8 w-8 text-cyan-400" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-slate-200 mb-3">
                      Full Stack & Mobile Developer
                    </h2>
                    <div className="flex items-center gap-2 mb-4">
                      <div className="w-16 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full"></div>
                      <div className="w-4 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 text-slate-300 leading-relaxed">
                  <p>
                    Hello! I'm a <span className="text-cyan-400 font-semibold">passionate developer</span> with expertise in 
                    building modern web and mobile applications. My journey in tech started with curiosity 
                    and has evolved into a commitment to creating impactful digital solutions.
                  </p>
                  
                  <p>
                    I specialize in <span className="text-purple-400 font-semibold">React, and Flutter</span>, 
                    crafting applications that are not only visually appealing but also performant and scalable. 
                    I believe in clean code, user-centered design, and continuous learning.
                  </p>

                  <p>
                    When I'm not coding, you can find me exploring new technologies, contributing to open-source 
                    projects, or sharing knowledge with the developer community.
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-slate-800">
                  <div className="flex flex-wrap gap-3">
                    {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail Oriented'].map((trait) => (
                      <span
                        key={trait}
                        className="px-3 py-1 rounded-full bg-slate-800/50 text-slate-300 text-sm border border-slate-700"
                      >
                        {trait}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </BackgroundGradient>
          </motion.div>

          {/* Right Column: Stats Grid */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-6"
          >
            <div className="flex items-center gap-3 mb-6">
              <Zap className="h-6 w-6 text-yellow-400 animate-pulse" />
              <h3 className="text-2xl font-bold text-slate-200">My Journey in Numbers</h3>
            </div>

            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={cardVariants}
                  custom={index}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="group cursor-pointer"
                >
                  <div className="relative h-full p-6 rounded-2xl backdrop-blur-sm bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
                    {/* Animated Background */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-3 rounded-lg bg-slate-800/30 border ${stat.borderColor}`}>
                          <stat.icon className={`h-6 w-6 ${stat.color}`} />
                        </div>
                      </div>
                      
                      <div className="mb-2">
                        <div className={`text-3xl font-bold ${stat.color} mb-1`}>
                          {animatedNumbers[stat.label.toLowerCase().replace(/\s+/g, '')] || 0}
                          {stat.suffix}
                        </div>
                        <div className="text-slate-200 font-semibold text-sm">
                          {stat.label}
                        </div>
                      </div>
                      
                      <p className="text-slate-400 text-xs">
                        {stat.description}
                      </p>
                    </div>

                    {/* Progress Line */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 rounded-b-2xl overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: '100%' } : {}}
                        transition={{ delay: 0.5 + index * 0.1, duration: 1.5 }}
                        className={`h-full bg-gradient-to-r ${stat.gradient}`}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Core Competencies Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="mb-16"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <Cpu className="h-6 w-6 text-indigo-400" />
              <h3 className="text-2xl font-bold text-slate-200">Core Competencies</h3>
            </div>
            <ArrowRight className="h-5 w-5 text-slate-500" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {competencies.map((skill, index) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className={`relative overflow-hidden rounded-xl p-6 border ${skill.borderColor} backdrop-blur-sm bg-slate-900/30 hover:bg-slate-900/50 transition-all duration-300`}>
                  {/* Skill Icon */}
                  <div className={`p-3 rounded-lg ${skill.bgColor} mb-4 inline-block`}>
                    <skill.icon className={`h-6 w-6 ${skill.color}`} />
                  </div>

                  {/* Skill Title */}
                  <h4 className={`text-lg font-semibold ${skill.color} mb-2`}>
                    {skill.title}
                  </h4>

                  {/* Skills List */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {skill.skills.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs rounded bg-slate-800/50 text-slate-300 border border-slate-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-slate-400">Proficiency</span>
                      <span className="text-slate-300 font-semibold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ delay: 0.6 + index * 0.1, duration: 1.2 }}
                        className={`h-full rounded-full ${skill.color.replace('text-', 'bg-')}`}
                      />
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${skill.color.replace('text-', 'from-')} ${skill.color.replace('text-', 'to-')} opacity-0 group-hover:opacity-10 transition-opacity duration-300 -z-10`} />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Development Timeline - Clean Version */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative mb-20"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
              <Calendar className="h-5 w-5 text-cyan-400" />
              <span className="text-sm font-mono text-cyan-400">02.</span>
              <span className="text-sm text-slate-300 font-medium">My Journey</span>
            </div>
            
            <h3 className="text-3xl md:text-4xl font-bold text-slate-200 mb-4">
              Development <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Timeline</span>
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              A visual journey through my growth as a developer, from foundational learning to professional expertise.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2 hidden md:block">
              <div className="absolute inset-0 bg-gradient-to-b from-cyan-500 via-purple-500 to-pink-500"></div>
            </div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Mobile Layout */}
                  <div className="md:hidden flex gap-4">
                    {/* Timeline Dot */}
                    <div className="flex-shrink-0">
                      <div className="relative">
                        <div className="w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500"></div>
                        <div className="absolute inset-1 rounded-full bg-cyan-400 animate-pulse"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <TimelineCardMobile item={item} index={index} total={timeline.length} />
                    </div>
                  </div>

                  {/* Desktop Layout */}
                  <div className="hidden md:flex items-center">
                    {/* Left Side (Even indices) */}
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'opacity-0'}`}>
                      {index % 2 === 0 && (
                        <TimelineCardDesktop 
                          item={item} 
                          index={index} 
                          total={timeline.length}
                          align="right"
                        />
                      )}
                    </div>

                    {/* Center Timeline */}
                    <div className="relative w-12 flex-shrink-0 flex flex-col items-center">
                      {/* Year Badge */}
                      <div className="px-3 py-1.5 rounded-full bg-slate-900 border border-slate-800 mb-2">
                        <span className="text-sm font-bold text-cyan-400">
                          {item.year}
                        </span>
                        {item.year === 'Now' && (
                          <div className="mt-0.5 px-1.5 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs text-cyan-300">
                            Current
                          </div>
                        )}
                      </div>

                      {/* Timeline Dot */}
                      <div className="relative w-4 h-4 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500">
                        <div className="absolute inset-1 rounded-full bg-cyan-400 animate-pulse"></div>
                      </div>

                      {/* Connecting Line */}
                      <div className="flex-1 w-0.5 bg-gradient-to-b from-cyan-500 to-purple-500 mt-2"></div>
                    </div>

                    {/* Right Side (Odd indices) */}
                    <div className={`w-1/2 ${index % 2 !== 0 ? 'pl-12' : 'opacity-0'}`}>
                      {index % 2 !== 0 && (
                        <TimelineCardDesktop 
                          item={item} 
                          index={index} 
                          total={timeline.length}
                          align="left"
                        />
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};