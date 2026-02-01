import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Briefcase, 
  Calendar, 
  Award, 
  Trophy, 
  Users, 
  Zap,
  TrendingUp,
  Database,
  Cloud,
  Shield,
  GitBranch,
  Clock,
  Layers,
  BarChart
} from 'lucide-react';
import { BackgroundGradient } from './ui/background-gradient';
import { Badge } from './ui/badge';
import { Button } from './ui/button';

export const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const experiences = [
    {
      title: 'Software Development Intern',
      company: 'Infosys Springboard',
      period: 'Oct 2025 - Dec 2025',
      description: 'Engineered a full-stack web application with role-based access (User, Admin, and Pickup) using React, Java Spring Boot, and MySQL, increasing request processing efficiency by 40%.',
      achievements: [
        'Designed secure authentication, image-based e-waste reporting, and real-time request tracking, reducing manual errors by 30%',
        'Architected admin and pickup dashboards for approval workflows, scheduling, and completion monitoring',
        'Enabled sub-24-hour pickup turnaround through optimized workflow design',
        'Validated REST APIs using Postman and maintained version control with GitHub',
        'Supported recycling of 10,000+ devices, reducing over 25 tons of CO₂ emissions'
      ],
      tech: ['React', 'Spring Boot', 'MySQL', 'Postman', 'GitHub'],
      icon: <Briefcase className="h-5 w-5" />,
      color: 'from-blue-500 to-cyan-500'
    }
  ];

  const education = {
    degree: 'B.Tech in Computer Science and Engineering (Data Science)',
    institution: "Dr. D. Y. Patil Pratishthan's College of Engineering, Kolhapur",
    period: '2023 - 2027',
    cgpa: '7.5',
    coursework: ['Software Engineering', 'Data Structures and Algorithms', 'Computer Networks']
  };

  const achievements = [
    {
      title: '3rd Place - Innovation Council Project Competition',
      description: 'Institution\'s Innovation Council Project Competition 2025 for Wall of Humanity',
      icon: <Trophy className="h-5 w-5" />,
      year: '2025',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Open Source Contributor',
      description: 'Selected twice for GirlScript Summer of Code (GSSoC\'24 and GSSoC\'25)',
      icon: <GitBranch className="h-5 w-5" />,
      year: '2024-2025',
      color: 'from-pink-500 to-purple-500'
    }
  ];

  const skills = {
    programming: ['Java', 'C/C++', 'Dart', 'Python'],
    development: ['Flutter', 'HTML5', 'CSS3', 'JavaScript', 'React.js', 'Node.js', 'Next.js', 'Express.js'],
    databases: ['MySQL', 'MongoDB', 'SQL Server'],
    tools: ['Git', 'GitHub', 'VS Code', 'Vercel', 'Render'],
    soft: ['Problem Solving', 'Critical Thinking', 'Communication', 'Collaboration', 'Adaptability', 'Time Management']
  };

  const stats = [
    { icon: <TrendingUp className="h-5 w-5" />, label: 'Efficiency Gain', value: '40%', description: 'Request processing' },
    { icon: <Database className="h-5 w-5" />, label: 'CO₂ Reduction', value: '25+ tons', description: 'Environmental impact' },
    { icon: <Users className="h-5 w-5" />, label: 'Users Reached', value: '500+', description: 'Platform adoption' },
    { icon: <Zap className="h-5 w-5" />, label: 'Performance Boost', value: '35%', description: 'Load time reduction' }
  ];

  return (
    <section id="experience" className="py-24 md:py-32 relative overflow-hidden" ref={ref} data-testid="experience-section">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.5) 1px, transparent 0)`,
            backgroundSize: '50px 50px',
          }} />
        </div>
        
        {/* Floating Elements */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"
            animate={{
              y: [0, -100, 0],
              x: [0, Math.sin(i) * 30, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: Math.random() * 3 + 2,
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
            <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            <Briefcase className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-mono text-blue-400">04.</span>
            <span className="text-sm text-slate-300">Career Journey</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
              Experience & Education
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Combining academic excellence with practical industry experience to build impactful solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column: Experience Timeline */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500 via-cyan-500 to-emerald-500 hidden md:block"></div>
                
                <div className="pl-8 md:pl-12">
                  <BackgroundGradient className="rounded-3xl p-8">
                    {/* Experience Header */}
                    <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                      <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 mb-3">
                          <Calendar className="h-4 w-4 text-blue-400" />
                          <span className="text-sm font-mono text-blue-400">{experiences[0].period}</span>
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-2">{experiences[0].title}</h3>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-5 w-5 text-cyan-400" />
                          <span className="text-lg font-semibold text-cyan-300">{experiences[0].company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Shield className="h-5 w-5 text-green-400" />
                        <span className="text-sm text-slate-400">Internship</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-slate-300 leading-relaxed mb-6">
                      {experiences[0].description}
                    </p>

                    {/* Tech Stack */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Layers className="h-4 w-4 text-blue-400" />
                        <span className="text-sm font-semibold text-slate-300">Technologies Used</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {experiences[0].tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="tech"
                            className="text-xs"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Key Achievements */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Award className="h-5 w-5 text-yellow-400" />
                        <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                      </div>
                      <div className="space-y-3">
                        {experiences[0].achievements.map((achievement, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={isInView ? { opacity: 1, x: 0 } : {}}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="flex items-start gap-3 group/ach"
                          >
                            <div className="p-1.5 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 group-hover/ach:from-blue-500/30 group-hover/ach:to-cyan-500/30 transition-all mt-1">
                              <div className="w-2 h-2 rounded-full bg-cyan-400"></div>
                            </div>
                            <span className="text-slate-300 text-sm leading-relaxed flex-1">
                              {achievement}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </BackgroundGradient>
                </div>
              </div>
            </motion.div>

            {/* Education Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative pl-8 md:pl-12">
                <BackgroundGradient className="rounded-3xl p-8">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-6">
                    <div className="flex-1">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 mb-3">
                        <Calendar className="h-4 w-4 text-emerald-400" />
                        <span className="text-sm font-mono text-emerald-400">{education.period}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2">{education.degree}</h3>
                      <p className="text-lg font-semibold text-emerald-300">{education.institution}</p>
                    </div>
                    <div className="text-center p-4 rounded-xl bg-gradient-to-br from-emerald-500/10 to-green-500/10 border border-emerald-500/30">
                      <div className="text-3xl font-bold text-white">{education.cgpa}</div>
                      <div className="text-sm text-emerald-300">CGPA</div>
                    </div>
                  </div>

                  {/* Coursework */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <BarChart className="h-5 w-5 text-emerald-400" />
                      <h4 className="text-lg font-semibold text-white">Relevant Coursework</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {education.coursework.map((course, index) => (
                        <Badge
                          key={course}
                          variant="outline"
                          className="bg-emerald-500/5 text-emerald-300 border-emerald-500/30"
                        >
                          {course}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </BackgroundGradient>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Skills & Achievements */}
          <div className="space-y-8">
            {/* Skills Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Zap className="h-6 w-6 text-cyan-400" />
                <h3 className="text-2xl font-bold text-white">Technical Skills</h3>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Programming Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.programming.map((skill) => (
                      <Badge
                        key={skill}
                        variant="tech"
                        className="bg-blue-500/10 text-blue-300 border-blue-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Development</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.development.map((skill) => (
                      <Badge
                        key={skill}
                        variant="tech"
                        className="bg-purple-500/10 text-purple-300 border-purple-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Databases</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.databases.map((skill) => (
                      <Badge
                        key={skill}
                        variant="tech"
                        className="bg-emerald-500/10 text-emerald-300 border-emerald-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-slate-400 mb-3">Tools & Platforms</h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.tools.map((skill) => (
                      <Badge
                        key={skill}
                        variant="tech"
                        className="bg-cyan-500/10 text-cyan-300 border-cyan-500/30"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Soft Skills */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Users className="h-5 w-5 text-pink-400" />
                  <h4 className="text-lg font-semibold text-white">Soft Skills</h4>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.soft.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className="bg-pink-500/5 text-pink-300 border-pink-500/30"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3">
                <Award className="h-6 w-6 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Achievements</h3>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="group"
                  >
                    <div className="relative p-5 rounded-2xl backdrop-blur-sm bg-slate-900/40 border border-slate-800 hover:border-slate-700 transition-all duration-300">
                      <div className="flex items-start gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${achievement.color} bg-opacity-10`}>
                          {achievement.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-semibold text-white mb-1">
                            {achievement.title}
                          </h4>
                          <p className="text-slate-300 text-sm mb-2">
                            {achievement.description}
                          </p>
                          <div className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-800/50">
                            <Clock className="h-3 w-3 text-slate-400" />
                            <span className="text-xs text-slate-400">{achievement.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Download Resume Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.8 }}
              >
                <Button
                  variant="default"
                  className="w-full gap-3 py-6 rounded-xl text-lg font-semibold"
                  asChild
                >
                  <a
                    href="src/assets/Vansh_Kirtishahi_Resume_Infosys.pdf"
                    download="Vansh_Kirtishahi_Resume.pdf"
                  >
                    <Cloud className="h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};