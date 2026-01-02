import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { 
  ArrowRight, 
  Shield, 
  Zap, 
  FileText, 
  CheckCircle,
  BarChart3,
  Users,
  Clock,
  Sparkles,
  Brain,
  Cpu,
  Lock,
  ChevronRight,
  Star,
  PlayCircle,
  Globe,
  Mail,
  Phone,
  Menu,
  X
} from "lucide-react";
import { motion } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Extraction",
      description: "Advanced NLP algorithms accurately extract ICD-11 codes from medical reports with human-level understanding",
      color: "from-blue-600 to-purple-600",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
      delay: 0.1
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption and full HIPAA compliance",
      color: "from-emerald-600 to-green-600",
      gradient: "bg-gradient-to-br from-emerald-600 to-green-600",
      delay: 0.2
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Multi-Format Support",
      description: "Smart processing of PDF, DOCX, TXT, and images with advanced OCR capability",
      color: "from-violet-600 to-purple-600",
      gradient: "bg-gradient-to-br from-violet-600 to-purple-600",
      delay: 0.3
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into coding accuracy, trends, and productivity metrics",
      color: "from-orange-600 to-red-600",
      gradient: "bg-gradient-to-br from-orange-600 to-red-600",
      delay: 0.4
    }
  ];

  const stats = [
    { 
      label: "ICD-11 Codes", 
      value: "40,000+", 
      icon: <FileText className="w-5 h-5" />,
      description: "Comprehensive database" 
    },
    { 
      label: "Accuracy Rate", 
      value: "98.7%", 
      icon: <CheckCircle className="w-5 h-5" />,
      description: "Clinically validated" 
    },
    { 
      label: "Medical Professionals", 
      value: "5,000+", 
      icon: <Users className="w-5 h-5" />,
      description: "Trusted globally" 
    },
    { 
      label: "Time Saved", 
      value: "85%", 
      icon: <Clock className="w-5 h-5" />,
      description: "Average reduction" 
    }
  ];

  const testimonials = [
    {
      quote: "Reduced our coding time by 70% while improving accuracy. Game changer for our medical billing team.",
      author: "Dr. Sarah Chen",
      role: "Medical Director, City Hospital",
      avatar: "SC",
      rating: 5
    },
    {
      quote: "The AI's understanding of complex medical terminology is impressive. It catches nuances we sometimes miss.",
      author: "Michael Rodriguez",
      role: "Medical Coder, HealthPlus Network",
      avatar: "MR",
      rating: 5
    }
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 font-sans overflow-hidden">
      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-gray-100/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-3 group cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl blur-sm group-hover:blur-md transition-all duration-300" />
                <div className="relative w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg">
                  <Brain className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                  MedCodeAI
                </h1>
                <p className="text-xs text-gray-500 font-medium">by HealthCodeX</p>
              </div>
            </motion.div>

            <div className="hidden md:flex items-center space-x-8">
              {['Product', 'Solutions', 'Pricing', 'Resources'].map((item) => (
                <motion.a
                  key={item}
                  whileHover={{ y: -2 }}
                  className="text-gray-600 hover:text-blue-600 font-medium transition-colors cursor-pointer"
                >
                  {item}
                </motion.a>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <button className="text-gray-600 hover:text-blue-600 font-medium px-4 py-2 rounded-lg hover:bg-gray-50 transition-all">
                Sign In
              </button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center space-x-2">
                  <span>Launch Dashboard</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute inset-0 border-2 border-blue-300/30 rounded-full animate-ping"
                  style={{
                    width: `${600 + i * 100}px`,
                    height: `${600 + i * 100}px`,
                    animationDelay: `${i * 0.2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-3 rounded-full text-sm font-medium mb-8 border border-blue-100 shadow-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Now featuring GPT-4 Medical Coding Intelligence</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Medical
                </span>
                <div className="absolute -top-4 -right-4">
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md" />
                    <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </div>
              </span>
              <br />
              <span className="text-gray-900">Coding, Reimagined</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-2xl md:text-3xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
            >
              Transform medical documentation into accurate ICD-11 codes instantly with 
              <span className="font-semibold text-blue-600"> AI-powered precision</span>
            </motion.p>

            <motion.div 
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
            >
              <motion.button
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="group relative bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold px-10 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center space-x-3">
                  <span>Start Coding for Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </span>
              </motion.button>

              <motion.button
                variants={fadeInUp}
                whileHover={{ y: -2 }}
                className="group bg-white text-gray-700 hover:text-blue-600 font-semibold px-10 py-5 rounded-2xl shadow-xl hover:shadow-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 text-lg flex items-center space-x-3"
              >
                <PlayCircle className="w-5 h-5" />
                <span>Watch Demo</span>
              </motion.button>
            </motion.div>

            {/* Stats Preview */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center space-x-2 mb-2">
                    <div className="text-blue-500">{stat.icon}</div>
                    <span className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                      {stat.value}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm font-medium">{stat.label}</p>
                  <p className="text-gray-400 text-xs">{stat.description}</p>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-blue-500 rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-32 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold tracking-widest uppercase">Features</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Built for Modern
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Healthcare</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
              Combining cutting-edge AI with deep medical expertise to revolutionize coding workflows
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-xl group-hover:shadow-2xl" />
                <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-gray-100/50 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-full -translate-y-16 translate-x-16" />
                  
                  <div className="relative mb-8">
                    <div className={`w-16 h-16 rounded-2xl ${feature.gradient} p-4 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      <div className="text-white">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                    {feature.title}
                    <div className="absolute -bottom-2 left-0 w-12 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full" />
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {feature.description}
                  </p>
                  
                  <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                    <span>Explore feature</span>
                    <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-2 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold tracking-widest uppercase">Process</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Simple & 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Seamless</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-blue-200 via-cyan-200 to-blue-200" />
            
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative"
              >
                <div className="relative z-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-md" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                        {step}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-3xl p-8 pt-16 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step === 1 && "Upload & Process"}
                      {step === 2 && "AI Analysis"}
                      {step === 3 && "Review & Export"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step === 1 && "Drag and drop medical reports in any format. Our intelligent system automatically processes and structures the content."}
                      {step === 2 && "Advanced AI analyzes medical terminology, identifies diagnoses, and extracts precise ICD-11 codes with contextual understanding."}
                      {step === 3 && "Review AI-suggested codes with confidence scores, make adjustments, and seamlessly export to your billing system."}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-gradient-to-br from-blue-50/50 via-white to-cyan-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center space-x-2 text-blue-600 mb-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
              <span className="text-sm font-semibold tracking-widest uppercase">Testimonials</span>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent" />
            </div>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Trusted by 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Leaders</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-10 shadow-xl group-hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center mb-8">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-xl italic mb-8 leading-relaxed font-light">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Background Effects */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[3rem] blur-3xl opacity-30" />
            <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl" />
            
            <div className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-[2.5rem] p-16 text-center text-white shadow-2xl overflow-hidden">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-5xl font-bold mb-8 leading-tight"
              >
                Ready to Transform Your
                <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Medical Coding?
                </span>
              </motion.h2>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xl mb-12 opacity-90 max-w-2xl mx-auto font-light"
              >
                Join 5,000+ healthcare providers saving time and increasing accuracy with MedCodeAI
              </motion.p>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center"
              >
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/dashboard")}
                  className="group bg-white text-gray-900 hover:text-blue-600 font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center space-x-3"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-12 py-5 rounded-2xl transition-all duration-300 text-lg"
                >
                  Schedule a Demo
                </motion.button>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="mt-8 text-sm opacity-80"
              >
                <span className="inline-flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>No credit card required</span>
                </span>
                <span className="mx-4">•</span>
                <span className="inline-flex items-center space-x-2">
                  <Clock className="w-4 h-4" />
                  <span>14-day free trial</span>
                </span>
                <span className="mx-4">•</span>
                <span className="inline-flex items-center space-x-2">
                  <Shield className="w-4 h-4" />
                  <span>HIPAA Compliant</span>
                </span>
              </motion.p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur-sm" />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">MedCodeAI</h2>
                  <p className="text-sm text-gray-400">Intelligent Medical Coding</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Revolutionizing healthcare documentation with AI-powered precision and security.
              </p>
            </div>
            
            {['Product', 'Company', 'Resources', 'Legal'].map((category) => (
              <div key={category}>
                <h3 className="font-bold text-lg mb-6 text-white">{category}</h3>
                <ul className="space-y-3">
                  {['Feature 1', 'Feature 2', 'Feature 3'].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="pt-12 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="mb-6 md:mb-0">
                <p className="text-gray-400 text-sm">
                  © {new Date().getFullYear()} MedCodeAI. All rights reserved.
                </p>
                <p className="text-gray-500 text-xs mt-2">
                  For medical coding assistance only • Always verify with medical professionals • HIPAA Compliant
                </p>
              </div>
              
              <div className="flex items-center space-x-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}