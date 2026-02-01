import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { 
  ExternalLink, 
  Github, 
  Zap, 
  Star, 
  Users, 
  TrendingUp,
  Eye,
  Code,
  Database,
  Server,
  Smartphone
} from 'lucide-react';
import { BackgroundGradient } from './ui/background-gradient';

// Import images
import campusEventsImage from '../assets/CHE.jpeg';
import wallOfHumanityImage from '../assets/image.png';
import ewasteImage from '../assets/E-Waste.png';

export const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      title: 'Campus Events Hub',
      description:
        'A full-stack event management platform enabling event discovery, registration, and QR-based ticketing for 1,000+ users. Includes organizer dashboards, dynamic forms, real-time attendance tracking, notifications, and automated certificate generation.',
      image: campusEventsImage,
      tech: ['Flutter', 'React', 'Node.js', 'Express', 'MongoDB', 'Firebase'],
      stats: [
        { icon: Users, label: 'Users', value: '1K+' },
        { icon: Zap, label: 'Performance', value: '40% ↑' },
        { icon: Star, label: 'Rating', value: '4.8/5' }
      ],
      category: 'Ongoing',
      color: 'from-cyan-500 to-blue-500',
      accentColor: 'cyan',
      accentColorClass: 'text-cyan-400'
    },
    {
      title: 'Wall of Humanity',
      description:
        'A social-impact web platform adopted by 500+ users, designed to increase community engagement. Features secure authentication, cloud storage, responsive UI, and optimized frontend performance with 35% faster load times.',
      image: wallOfHumanityImage,
      tech: ['React', 'JavaScript', 'CSS3', 'Firebase', 'MongoDB', 'node.js', 'Express', 'Cloudinary', 'Vercel', 'GitHub', 'Postman', 'Figma','Render'],
      github: 'https://github.com/VanshKirtishahi/Wall-Of-Humanity.git',
      live: 'https://wall-of-humanity.vercel.app/',
      stats: [
        { icon: Users, label: 'Adopted by', value: '500+' },
        { icon: TrendingUp, label: 'Load Time', value: '35% ↓' },
        { icon: Eye, label: 'Engagement', value: '75% ↑' }
      ],
      category: 'Social Impact',
      color: 'from-purple-500 to-pink-500',
      accentColor: 'purple',
      accentColorClass: 'text-purple-400'
    },
    {
      title: 'E-Waste Management System',
      description:
        'Full-stack web application built during Infosys Springboard Internship with role-based access (Admin, User, Pickup). Features image-based reporting, real-time tracking, dashboards, and REST APIs, reducing manual errors by 30%.',
      image: ewasteImage,
      tech: ['React', 'Spring Boot', 'MySQL', 'Postman', 'GitHub'],
      github: 'https://github.com/VanshKirtishahi/E-Waste-Management-System.git',
      live: 'https://e-waste-management-system-nu.vercel.app/',
      stats: [
        { icon: Database, label: 'Errors Reduced', value: '30% ↓' },
        { icon: Server, label: 'API Endpoints', value: '25+' },
        { icon: Smartphone, label: 'Access Roles', value: '3' }
      ],
      category: 'Enterprise',
      color: 'from-emerald-500 to-green-500',
      accentColor: 'emerald',
      accentColorClass: 'text-emerald-400'
    },
  ];

  const categories = [
    { label: 'All Projects', count: 3 },
    { label: 'Full Stack', count: 3 },
    { label: 'Web App', count: 2 },
    { label: 'Mobile', count: 1 }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: [0.22, 1, 0.36, 1] 
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.4 }
    }
  };

  const borderColorMap = {
    cyan: 'border-cyan-500/20',
    purple: 'border-purple-500/20',
    emerald: 'border-emerald-500/20'
  };

  const shadowColorMap = {
    cyan: 'hover:shadow-cyan-500/10',
    purple: 'hover:shadow-purple-500/10',
    emerald: 'hover:shadow-emerald-500/10'
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="py-24 md:py-32 relative overflow-hidden"
      data-testid="projects-section"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.5) 1px, transparent 0)`,
            backgroundSize: '60px 60px',
          }} />
        </div>
        
        {/* Floating Elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-cyan-500 to-purple-500"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 4 + 3,
              repeat: Infinity,
              delay: Math.random() * 2,
              ease: "easeInOut"
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <div className="w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
            <Code className="h-4 w-4 text-purple-400" />
            <span className="text-sm font-mono text-purple-400">02.</span>
            <span className="text-sm text-slate-300">Featured Work</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              Project Portfolio
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Showcasing impactful projects that combine innovative ideas with technical excellence 
            to solve real-world problems.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <Button
              key={category.label}
              variant="outline"
              size="sm"
              className="group relative overflow-hidden"
            >
              <span className="relative z-10">{category.label}</span>
              <Badge variant="default" className="ml-2 text-xs">
                {category.count}
              </Badge>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-cyan-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 transition-all duration-300" />
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={itemVariants}
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
              className="group"
            >
              {/* Main Container with proper overflow containment */}
              <div className="relative h-full overflow-hidden rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900/40 to-slate-950/40 backdrop-blur-sm transition-all duration-500 hover:border-slate-700">
                {/* Outer shadow container - ADDED pointer-events-none */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                  <div className={`absolute inset-0 ${shadowColorMap[project.accentColor]} opacity-0 group-hover:opacity-100 transition-all duration-500 blur-2xl`} />
                </div>

                {/* Project Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                  <Badge 
                    variant="gradient" 
                    className="backdrop-blur-sm"
                  >
                    {project.category}
                  </Badge>
                </div>

                {/* Image Container with Live Link */}
                <a
                  href={project.live || '#'}
                  target={project.live ? "_blank" : "_self"}
                  rel={project.live ? "noopener noreferrer" : ""}
                  className="relative h-56 overflow-hidden rounded-t-3xl block"
                  onClick={(e) => !project.live && e.preventDefault()}
                >
                  {/* Image with Gradient Overlay */}
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    animate={hoveredProject === index ? { scale: 1.1 } : { scale: 1 }}
                  />
                  
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />
                  
                  {/* Animated Gradient Border */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 rounded-t-3xl`} />
                  
                  {/* External Link Icon Overlay */}
                  {project.live && (
                    <div className="absolute top-4 right-4 z-10 p-2 rounded-lg bg-black/50 backdrop-blur-sm border border-slate-700/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink className="h-4 w-4 text-white" />
                    </div>
                  )}
                </a>

                {/* Content Container - ADDED relative z-10 */}
                <div className="relative z-10 p-6 space-y-5">
                  {/* Project Title with GitHub Link */}
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-200 group-hover:text-cyan-300 transition-colors duration-300">
                        {project.title}
                      </h3>
                      {/* GitHub Link */}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 mt-1 text-xs text-slate-400 hover:text-cyan-300 transition-colors cursor-pointer relative z-20"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-3 w-3" />
                          <span>View Repository</span>
                        </a>
                      ) : (
                        <div className="inline-flex items-center gap-1 mt-1 text-xs text-slate-500">
                          <Github className="h-3 w-3" />
                          <span>Private Repository</span>
                        </div>
                      )}
                    </div>
                    <motion.div
                      animate={hoveredProject === index ? { rotate: 45 } : { rotate: 0 }}
                      transition={{ duration: 0.3 }}
                      className="p-2 rounded-lg bg-slate-800/50 border border-slate-700"
                    >
                      <ExternalLink className="h-4 w-4 text-slate-400" />
                    </motion.div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Stats Row */}
                  <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    animate={isInView ? "visible" : "hidden"}
                    className="grid grid-cols-3 gap-3 pt-2"
                  >
                    {project.stats.map((stat, statIndex) => (
                      <motion.div
                        key={stat.label}
                        variants={statItemVariants}
                        className="text-center p-2 rounded-lg bg-slate-900/30 border border-slate-800/50"
                      >
                        <div className="flex items-center justify-center gap-1 mb-1">
                          <stat.icon className={`h-3 w-3 ${project.accentColorClass}`} />
                          <span className="text-xs font-semibold text-slate-300">
                            {stat.value}
                          </span>
                        </div>
                        <div className="text-[10px] text-slate-500 uppercase tracking-wider">
                          {stat.label}
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>

                  {/* Tech Stack */}
                  <div className="pt-4 border-t border-slate-800/50">
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <Badge
                          key={tech}
                          variant="tech"
                          className="text-xs py-1 px-2.5"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3 pt-4">
                    {project.github ? (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 group/btn justify-center gap-2 cursor-pointer relative z-20"
                        asChild
                      >
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Github className="h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                          <span>Code</span>
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="ghost"
                        size="sm"
                        className="flex-1 group/btn justify-center gap-2 opacity-50 cursor-not-allowed"
                        disabled
                      >
                        <Github className="h-4 w-4" />
                        <span>Private Repo</span>
                      </Button>
                    )}
                    
                    {project.live ? (
                      <Button
                        variant="gradient"
                        size="sm"
                        className="flex-1 justify-center gap-2 cursor-pointer relative z-20"
                        asChild
                      >
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Eye className="h-4 w-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="gradient"
                        size="sm"
                        className="flex-1 justify-center gap-2 opacity-50 cursor-not-allowed"
                        disabled
                      >
                        <Eye className="h-4 w-4" />
                        <span>Coming Soon</span>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Glow Effect - ADDED pointer-events-none */}
                <div className="absolute inset-0 overflow-hidden rounded-3xl -z-10 pointer-events-none">
                  <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>
                
                {/* Corner Accents - ADDED pointer-events-none */}
                <div className={`absolute top-0 right-0 w-16 h-16 border-t border-r ${borderColorMap[project.accentColor]} rounded-tr-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
                <div className={`absolute bottom-0 left-0 w-16 h-16 border-b border-l ${borderColorMap[project.accentColor]} rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View More Projects - Fixed shadow containment */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="max-w-2xl mx-auto relative overflow-hidden rounded-3xl">
            <BackgroundGradient className="p-8 text-center">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 p-3 rounded-xl bg-slate-900/50 mb-4">
                  <TrendingUp className="h-6 w-6 text-cyan-400" />
                  <span className="text-slate-300 font-medium">More Projects Available</span>
                </div>
                
                <h3 className="text-2xl font-bold text-slate-200 mb-3">
                  Explore Complete Portfolio
                </h3>
                
                <p className="text-slate-300 mb-6">
                  Discover more innovative solutions, open-source contributions, and side projects on GitHub.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    variant="default"
                    size="lg"
                    className="gap-3"
                    asChild
                  >
                    <a
                      href="https://github.com/VanshKirtishahi?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-5 w-5" />
                      View All Projects
                    </a>
                  </Button>
                  
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-3"
                    asChild
                  >
                    <a
                      href="#contact"
                    >
                      <ExternalLink className="h-5 w-5" />
                      Discuss Project
                    </a>
                  </Button>
                </div>
              </div>
            </BackgroundGradient>
          </div>
        </motion.div>
      </div>
    </section>
  );
};