import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { 
  Server, 
  Code, 
  Smartphone, 
  Wrench, 
  Zap, 
  Layers,
  Cpu,
  Database,
  Terminal,
  GitBranch,
  Cloud,
  Brain,
  Sparkles,
  TrendingUp,
  Shield
} from 'lucide-react';
import { BackgroundGradient } from './ui/background-gradient';
import { Badge } from './ui/badge';

export const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [activeCategory, setActiveCategory] = useState(null);

  const skillCategories = [
    {
      icon: Code,
      title: 'Frontend Development',
      color: 'text-indigo-400',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10',
      borderColor: 'border-indigo-500/30',
      description: 'Crafting responsive and interactive user interfaces',
      skills: [
        { name: 'React', level: 90, icon: <Layers className="h-4 w-4" /> },
        { name: 'Next.js', level: 85, icon: <Zap className="h-4 w-4" /> },
        { name: 'TypeScript', level: 88, icon: <Terminal className="h-4 w-4" /> },
        { name: 'Tailwind CSS', level: 92, icon: <Sparkles className="h-4 w-4" /> },
        { name: 'Framer Motion', level: 80, icon: <motion.div animate={{ rotate: 360 }} transition={{ duration: 20, repeat: Infinity, ease: "linear" }}><Cpu className="h-4 w-4" /></motion.div> },
        { name: 'Redux', level: 82, icon: <GitBranch className="h-4 w-4" /> }
      ]
    },
    {
      icon: Server,
      title: 'Backend & APIs',
      color: 'text-emerald-400',
      gradient: 'from-emerald-500 to-cyan-500',
      bgGradient: 'bg-gradient-to-br from-emerald-500/10 to-cyan-500/10',
      borderColor: 'border-emerald-500/30',
      description: 'Building scalable server-side applications and APIs',
      skills: [
        { name: 'Node.js', level: 88, icon: <Terminal className="h-4 w-4" /> },
        { name: 'Python', level: 85, icon: <Brain className="h-4 w-4" /> },
        { name: 'FastAPI', level: 80, icon: <Zap className="h-4 w-4" /> },
        { name: 'GraphQL', level: 78, icon: <GitBranch className="h-4 w-4" /> },
        { name: 'PostgreSQL', level: 82, icon: <Database className="h-4 w-4" /> },
        { name: 'MongoDB', level: 80, icon: <Database className="h-4 w-4" /> }
      ]
    },
    {
      icon: Smartphone,
      title: 'Mobile & Flutter',
      color: 'text-cyan-400',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'bg-gradient-to-br from-cyan-500/10 to-blue-500/10',
      borderColor: 'border-cyan-500/30',
      description: 'Developing cross-platform mobile applications',
      skills: [
        { name: 'Flutter', level: 85, icon: <Smartphone className="h-4 w-4" /> },
        { name: 'React Native', level: 80, icon: <Smartphone className="h-4 w-4" /> },
        { name: 'Dart', level: 82, icon: <Terminal className="h-4 w-4" /> },
        { name: 'Firebase', level: 78, icon: <Cloud className="h-4 w-4" /> },
        { name: 'App Store', level: 75, icon: <Shield className="h-4 w-4" /> },
        { name: 'Material UI', level: 80, icon: <Layers className="h-4 w-4" /> }
      ]
    },
    {
      icon: Wrench,
      title: 'DevOps & Tools',
      color: 'text-pink-400',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'bg-gradient-to-br from-pink-500/10 to-rose-500/10',
      borderColor: 'border-pink-500/30',
      description: 'Infrastructure, deployment, and development workflow',
      skills: [
        { name: 'Docker', level: 82, icon: <Cpu className="h-4 w-4" /> },
        { name: 'Kubernetes', level: 75, icon: <Layers className="h-4 w-4" /> },
        { name: 'AWS', level: 78, icon: <Cloud className="h-4 w-4" /> },
        { name: 'CI/CD', level: 80, icon: <GitBranch className="h-4 w-4" /> },
        { name: 'Git', level: 90, icon: <GitBranch className="h-4 w-4" /> },
        { name: 'Linux', level: 85, icon: <Terminal className="h-4 w-4" /> }
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      }
    }
  };

  const skillItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { type: "spring", stiffness: 100 }
    }
  };

  const floatingTags = [
    { text: 'Full Stack', color: 'from-indigo-500/10 to-purple-500/10', border: 'border-indigo-500/20' },
    { text: 'Cloud Native', color: 'from-cyan-500/10 to-blue-500/10', border: 'border-cyan-500/20' },
    { text: 'Mobile First', color: 'from-emerald-500/10 to-green-500/10', border: 'border-emerald-500/20' },
    { text: 'Responsive Design', color: 'from-pink-500/10 to-rose-500/10', border: 'border-pink-500/20' },
    { text: 'Performance', color: 'from-yellow-500/10 to-orange-500/10', border: 'border-yellow-500/20' },
    { text: 'Security', color: 'from-red-500/10 to-pink-500/10', border: 'border-red-500/20' }
  ];

  return (
    <section id="skills" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 40, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">03.</span>
            <span className="text-sm text-slate-300">Technical Expertise</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
              Skills & Expertise
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Mastering modern technologies to build scalable, performant applications with clean code and best practices.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              onMouseEnter={() => setActiveCategory(index)}
              onMouseLeave={() => setActiveCategory(null)}
              className="group h-full"
            >
              <div className={`relative h-full overflow-hidden rounded-3xl border ${category.borderColor} backdrop-blur-sm bg-slate-900/40 transition-all duration-500 hover:shadow-2xl hover:shadow-${category.color.split('-')[1]}-500/10 ${
                activeCategory === index ? 'scale-[1.02]' : ''
              }`}>
                {/* Animated Background */}
                <div className={`absolute inset-0 ${category.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>

                {/* Card Content */}
                <div className="relative p-8">
                  {/* Header */}
                  <div className="flex items-start gap-4 mb-8">
                    <div className={`p-3 rounded-xl ${category.bgGradient} border ${category.borderColor} group-hover:border-opacity-50 transition-all`}>
                      <category.icon className={`h-8 w-8 ${category.color}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold ${category.color} mb-2`}>
                        {category.title}
                      </h3>
                      <p className="text-slate-400 text-sm">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skill.name}
                        variants={skillItemVariants}
                        initial="hidden"
                        animate={isInView ? "visible" : "hidden"}
                        transition={{ delay: 0.3 + index * 0.1 + skillIndex * 0.05 }}
                        whileHover={{ scale: 1.05 }}
                        className="group/skill"
                      >
                        <div className={`relative overflow-hidden rounded-xl p-4 border border-slate-800 bg-gradient-to-br from-slate-900/50 to-slate-950/50 hover:border-${category.color.split('-')[1]}-500/30 transition-all duration-300`}>
                          {/* Skill Header */}
                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-3">
                              <div className={`p-1.5 rounded-lg ${category.bgGradient}`}>
                                {skill.icon}
                              </div>
                              <span className="font-semibold text-slate-200 text-sm">
                                {skill.name}
                              </span>
                            </div>
                            <div className="text-xs font-mono text-slate-400">
                              {skill.level}%
                            </div>
                          </div>

                          {/* Progress Bar */}
                          <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={isInView ? { width: `${skill.level}%` } : {}}
                              transition={{ delay: 0.5 + skillIndex * 0.1, duration: 1 }}
                              className={`h-full rounded-full bg-gradient-to-r ${category.gradient}`}
                            >
                              {/* Shimmer Effect */}
                              <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
                            </motion.div>
                          </div>

                          {/* Skill Level Indicator */}
                          <div className="flex items-center justify-between mt-2">
                            <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                              Proficiency
                            </div>
                            <div className="flex items-center gap-1">
                              {skill.level >= 80 && (
                                <>
                                  <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse"></div>
                                  <div className="text-[10px] text-green-400">Expert</div>
                                </>
                              )}
                              {skill.level >= 70 && skill.level < 80 && (
                                <>
                                  <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></div>
                                  <div className="text-[10px] text-yellow-400">Advanced</div>
                                </>
                              )}
                              {skill.level < 70 && (
                                <>
                                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse"></div>
                                  <div className="text-[10px] text-blue-400">Intermediate</div>
                                </>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* Category Stats */}
                  <div className="mt-8 pt-6 border-t border-slate-800/50">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <TrendingUp className="h-4 w-4 text-slate-400" />
                        <span className="text-sm text-slate-400">Overall Mastery</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="text-xl font-bold text-slate-200">
                          {Math.round(category.skills.reduce((acc, skill) => acc + skill.level, 0) / category.skills.length)}%
                        </div>
                        <div className="text-xs text-slate-500">Avg</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Corner Accents */}
                <div className={`absolute top-0 right-0 w-16 h-16 border-t border-r ${category.borderColor} rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                <div className={`absolute bottom-0 left-0 w-16 h-16 border-b border-l ${category.borderColor} rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech Stack Overview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-slate-200 mb-3">Complete Tech Stack</h3>
            <p className="text-slate-400">Technologies I work with across the development spectrum</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { category: 'Frontend', tech: ['React', 'Next.js', 'TypeScript', 'Tailwind'], color: 'indigo' },
              { category: 'Backend', tech: ['Node.js', 'Python', 'FastAPI', 'PostgreSQL'], color: 'emerald' },
              { category: 'Mobile', tech: ['Flutter', 'React Native', 'Dart', 'Firebase'], color: 'cyan' },
              { category: 'DevOps', tech: ['Docker', 'AWS', 'Git', 'Linux'], color: 'pink' }
            ].map((stack, index) => (
              <motion.div
                key={stack.category}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.9 + index * 0.1 }}
                className="p-6 rounded-2xl backdrop-blur-sm bg-slate-900/40 border border-slate-800"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className={`w-3 h-3 rounded-full bg-${stack.color}-400 animate-pulse`}></div>
                  <h4 className={`text-lg font-semibold text-${stack.color}-400`}>{stack.category}</h4>
                </div>
                <div className="space-y-2">
                  {stack.tech.map((tech) => (
                    <div key={tech} className="flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${stack.color}-400`}></div>
                      <span className="text-slate-300 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Floating Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-16 flex flex-wrap gap-3 justify-center"
        >
          {floatingTags.map((tag, index) => (
            <motion.div
              key={tag.text}
              initial={{ opacity: 0, scale: 0 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 1.2 + index * 0.1 }}
              whileHover={{ y: -5 }}
              className="px-4 py-2 rounded-full backdrop-blur-sm border"
              style={{
                background: `linear-gradient(to right, ${tag.color.split(' ')[1]}, ${tag.color.split(' ')[3]})`,
                borderColor: tag.border.split(' ')[1]
              }}
            >
              <span className="text-sm font-medium text-white">{tag.text}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};