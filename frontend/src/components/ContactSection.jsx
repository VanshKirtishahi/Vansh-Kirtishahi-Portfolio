import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Send, 
  Phone,
  MapPin,
  Calendar,
  Code,
  Sparkles,
  ArrowRight,
  CheckCircle,
  Zap
} from 'lucide-react';
import { BackgroundGradient } from './ui/background-gradient';
import { Badge } from './ui/badge';

export const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    subject: '', 
    message: '' 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  // 1. CONFIGURATION
  const config = {
    emailjs: {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    },
    contact: {
      email: 'vanshkirtishahi@gmail.com',
      phone: '+91 86009 86491',
      location: 'Kolhapur, Maharashtra',
      name: 'Vansh Kirtishahi'
    },
    urls: {
      github: 'https://github.com/VanshKirtishahi',
      linkedin: 'https://linkedin.com/in/vansh-kirtishahi',
      portfolio: window.location.origin
    }
  };

  // 2. Initialize EmailJS
  useEffect(() => {
    if (config.emailjs.publicKey) {
      emailjs.init(config.emailjs.publicKey);
    }
  }, []);

  const socialLinks = [
    { icon: Github, href: config.urls.github, label: 'GitHub', color: 'hover:text-indigo-400', bgColor: 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10', handle: '@VanshKirtishahi' },
    { icon: Linkedin, href: config.urls.linkedin, label: 'LinkedIn', color: 'hover:text-blue-400', bgColor: 'bg-gradient-to-br from-blue-500/10 to-cyan-500/10', handle: '/in/vansh-kirtishahi' },
    { icon: Mail, href: `mailto:${config.contact.email}`, label: 'Email', color: 'hover:text-emerald-400', bgColor: 'bg-gradient-to-br from-emerald-500/10 to-green-500/10', handle: config.contact.email },
  ];

  const contactDetails = [
    { icon: Mail, label: 'Email Address', value: config.contact.email, color: 'text-emerald-400', bgColor: 'bg-emerald-500/10', borderColor: 'border-emerald-500/30' },
    { icon: Phone, label: 'Phone Number', value: config.contact.phone, color: 'text-cyan-400', bgColor: 'bg-cyan-500/10', borderColor: 'border-cyan-500/30' },
    { icon: MapPin, label: 'Location', value: config.contact.location, color: 'text-purple-400', bgColor: 'bg-purple-500/10', borderColor: 'border-purple-500/30' },
    { icon: Calendar, label: 'Availability', value: 'Open to Opportunities', color: 'text-yellow-400', bgColor: 'bg-yellow-500/10', borderColor: 'border-yellow-500/30' }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);

    try {
      if (!formData.name || !formData.email || !formData.message) {
        throw new Error('Please fill in all required fields');
      }

      // Generate Initials & Time
      const initials = formData.name.split(' ').map(n => n[0]).join('').toUpperCase().slice(0, 2);
      const time = new Date().toLocaleString('en-US', { 
        weekday: 'short', year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' 
      });

      // ✅ FIX: Use unique variable names and handle empty fields here
      const templateParams = {
        // User Data (Prefixed to avoid system conflicts)
        user_name: formData.name,
        user_email: formData.email,
        user_subject: formData.subject || 'Portfolio Inquiry',
        user_message: formData.message,
        user_phone: formData.phone || 'Not Provided', // Send text instead of empty string
        
        // Metadata
        initials: initials,
        time: time,
        portfolio_url: config.urls.portfolio,
        current_year: new Date().getFullYear(),
        your_name: config.contact.name,
        
        // System Fields
        reply_to: formData.email,
      };

      await emailjs.send(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        templateParams
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
      
    } catch (error) {
      console.error('Email error:', error);
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative overflow-hidden" ref={ref}>
      <div className="absolute inset-0">
        <div className="absolute top-1/3 -left-40 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 -right-40 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: `radial-gradient(circle at 1px 1px, rgba(100, 116, 139, 0.3) 1px, transparent 0)`, backgroundSize: '60px 60px' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }} className="text-center mb-16">
          <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm">
            <Sparkles className="h-4 w-4 text-cyan-400" />
            <span className="text-sm font-mono text-cyan-400">05.</span>
            <span className="text-sm text-slate-300">Let's Connect</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6"><span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">Get In Touch</span></h2>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">I'm currently open to new opportunities, collaborations, and exciting projects.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          <motion.div initial={{ opacity: 0, x: -30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="lg:col-span-1 space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3"><Zap className="h-6 w-6 text-cyan-400" />Contact Information</h3>
              {contactDetails.map((detail, index) => (
                <div key={index} className={`flex items-start gap-4 p-4 rounded-xl backdrop-blur-sm ${detail.bgColor} border ${detail.borderColor} hover:border-opacity-50 transition-all duration-300`}>
                  <div className={`p-3 rounded-lg ${detail.bgColor} ${detail.borderColor}`}><detail.icon className={`h-5 w-5 ${detail.color}`} /></div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-slate-400 mb-1">{detail.label}</div>
                    <div className={`text-base font-semibold ${detail.color} break-words`}>{detail.value}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-6">
              <h3 className="text-xl font-bold text-white">Connect With Me</h3>
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="group">
                    <div className={`p-4 rounded-xl backdrop-blur-sm ${social.bgColor} border border-slate-800 hover:border-slate-700 transition-all duration-300 h-full`}>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="p-2 rounded-lg bg-slate-900/50"><social.icon className={`h-5 w-5 ${social.color.replace('hover:', '')}`} /></div>
                        <span className="text-sm font-semibold text-slate-200">{social.label}</span>
                      </div>
                      <div className="text-xs text-slate-400 truncate">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.6, delay: 0.3 }} className="lg:col-span-2">
            {isSubmitted ? (
              <BackgroundGradient className="rounded-3xl p-8 md:p-12 text-center">
                <CheckCircle className="h-16 w-16 text-emerald-400 mx-auto mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Message Sent!</h3>
                <p className="text-slate-300 mb-6">I've received your message and will respond shortly.</p>
                <Button variant="gradient" onClick={() => setIsSubmitted(false)}>Send Another</Button>
              </BackgroundGradient>
            ) : (
              <BackgroundGradient className="rounded-3xl p-8 md:p-12 h-full">
                <div className="flex items-center gap-3 mb-8"><Code className="h-6 w-6 text-cyan-400" /><h3 className="text-2xl font-bold text-white">Send Me a Message</h3></div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3"><label className="text-sm font-semibold text-slate-300">Name *</label><Input name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required disabled={isSubmitting} /></div>
                    <div className="space-y-3"><label className="text-sm font-semibold text-slate-300">Email *</label><Input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="john@example.com" required disabled={isSubmitting} /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3"><label className="text-sm font-semibold text-slate-300">Phone (Optional)</label><Input name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91..." disabled={isSubmitting} /></div>
                    <div className="space-y-3"><label className="text-sm font-semibold text-slate-300">Subject</label><Input name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" disabled={isSubmitting} /></div>
                  </div>
                  <div className="space-y-3"><label className="text-sm font-semibold text-slate-300">Message *</label><Textarea name="message" value={formData.message} onChange={handleChange} placeholder="How can I help you?" rows={6} required disabled={isSubmitting} /></div>
                  
                  {(!config.emailjs.serviceId || !config.emailjs.publicKey) && <div className="p-3 bg-yellow-500/10 text-yellow-400 text-sm rounded-lg border border-yellow-500/30">⚠️ Keys missing in .env</div>}
                  {error && <div className="p-3 bg-red-500/10 text-red-400 text-sm rounded-lg border border-red-500/30">{error}</div>}
                  
                  <Button type="submit" size="lg" disabled={isSubmitting} className="w-full">{isSubmitting ? 'Sending...' : 'Send Message'}</Button>
                </form>
              </BackgroundGradient>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};