import React, { useEffect, useRef, useState } from "react";
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
  X,
  ChevronLeft,
  ChevronRight as ChevronRightIcon,
  Upload,
  Download,
  Search,
  Filter,
  Settings,
  Bell,
  HelpCircle,
  Database,
  Target,
  TrendingUp,
  Award,
  Globe as Globe2,
  ShieldCheck,
  Zap as Bolt,
  Cloud,
  RefreshCw,
  Eye,
  Edit3,
  Copy,
  Share2,
  Calendar,
  Heart,
  Activity,
  PieChart
} from "lucide-react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function Home() {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [showDemoVideo, setShowDemoVideo] = useState(false);

  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const features = [
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI-Powered Extraction",
      description: "Advanced NLP algorithms accurately extract ICD-11 codes from medical reports with human-level understanding",
      color: "from-blue-600 to-purple-600",
      gradient: "bg-gradient-to-br from-blue-600 to-purple-600",
      delay: 0.1,
      details: [
        "Real-time code suggestions",
        "Context-aware analysis",
        "Multi-language support",
        "Continuous learning"
      ]
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "HIPAA Compliant",
      description: "Enterprise-grade security with end-to-end encryption and full HIPAA compliance",
      color: "from-emerald-600 to-green-600",
      gradient: "bg-gradient-to-br from-emerald-600 to-green-600",
      delay: 0.2,
      details: [
        "End-to-end encryption",
        "Audit trail logging",
        "Role-based access control",
        "Regular security audits"
      ]
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: "Multi-Format Support",
      description: "Smart processing of PDF, DOCX, TXT, and images with advanced OCR capability",
      color: "from-violet-600 to-purple-600",
      gradient: "bg-gradient-to-br from-violet-600 to-purple-600",
      delay: 0.3,
      details: [
        "PDF & DOCX parsing",
        "Image OCR processing",
        "Handwriting recognition",
        "Batch processing"
      ]
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Analytics Dashboard",
      description: "Real-time insights into coding accuracy, trends, and productivity metrics",
      color: "from-orange-600 to-red-600",
      gradient: "bg-gradient-to-br from-orange-600 to-red-600",
      delay: 0.4,
      details: [
        "Real-time analytics",
        "Productivity tracking",
        "Accuracy reports",
        "Exportable insights"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: <Target className="w-10 h-10" />,
      title: "Smart Validation",
      description: "Cross-references diagnoses with treatment plans for optimal coding accuracy",
      stats: "99.2% accuracy"
    },
    {
      icon: <RefreshCw className="w-10 h-10" />,
      title: "Auto-Update",
      description: "Automatically updates with latest ICD-11 revisions and clinical guidelines",
      stats: "Real-time updates"
    },
    {
      icon: <Database className="w-10 h-10" />,
      title: "Knowledge Base",
      description: "Access to comprehensive medical coding database with clinical context",
      stats: "40K+ codes"
    },
    {
      icon: <Activity className="w-10 h-10" />,
      title: "Live Monitoring",
      description: "Track coding progress and team productivity in real-time",
      stats: "24/7 monitoring"
    }
  ];

  const stats = [
    { 
      label: "ICD-11 Codes", 
      value: "40,000+", 
      icon: <FileText className="w-6 h-6" />,
      description: "Comprehensive database",
      change: "+5% monthly"
    },
    { 
      label: "Accuracy Rate", 
      value: "98.7%", 
      icon: <CheckCircle className="w-6 h-6" />,
      description: "Clinically validated",
      change: "Industry leading"
    },
    { 
      label: "Medical Professionals", 
      value: "5,000+", 
      icon: <Users className="w-6 h-6" />,
      description: "Trusted globally",
      change: "+200 this month"
    },
    { 
      label: "Time Saved", 
      value: "85%", 
      icon: <Clock className="w-6 h-6" />,
      description: "Average reduction",
      change: "Saves 20+ hours weekly"
    }
  ];

  const testimonials = [
    {
      quote: "Reduced our coding time by 70% while improving accuracy. Game changer for our medical billing team.",
      author: "Dr. Sarah Chen",
      role: "Medical Director, City Hospital",
      avatar: "SC",
      rating: 5,
      hospital: "City General Hospital",
      beforeAfter: {
        before: "8 hours/day",
        after: "2.5 hours/day"
      }
    },
    {
      quote: "The AI's understanding of complex medical terminology is impressive. It catches nuances we sometimes miss.",
      author: "Michael Rodriguez",
      role: "Medical Coder, HealthPlus Network",
      avatar: "MR",
      rating: 5,
      hospital: "HealthPlus Network",
      beforeAfter: {
        before: "92% accuracy",
        after: "98.5% accuracy"
      }
    },
    {
      quote: "Implementation was seamless and our ROI was achieved within the first month. Exceptional support team.",
      author: "Dr. James Wilson",
      role: "CIO, Mercy Health Systems",
      avatar: "JW",
      rating: 5,
      hospital: "Mercy Health",
      beforeAfter: {
        before: "$50K/month in errors",
        after: "$8K/month in errors"
      }
    }
  ];

  const integrations = [
    { name: "Epic", color: "bg-purple-500", icon: "E" },
    { name: "Cerner", color: "bg-blue-500", icon: "C" },
    { name: "Athenahealth", color: "bg-green-500", icon: "A" },
    { name: "Meditech", color: "bg-red-500", icon: "M" },
    { name: "Allscripts", color: "bg-orange-500", icon: "A" },
    { name: "NextGen", color: "bg-cyan-500", icon: "N" }
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

  const scrollToFeatures = () => {
    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
  };



  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50/30 font-sans overflow-hidden">
      {/* Animated Background Particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-blue-300/30 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              x: [null, Math.random() * window.innerWidth],
            }}
            transition={{
              duration: 20 + Math.random() * 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Navigation */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg' 
            : 'bg-transparent'
        }`}
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
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl blur-sm group-hover:blur-md transition-all duration-300 animate-pulse" />
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

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => navigate("/dashboard")}
                className="relative group bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center space-x-2">
                  <span>Dashboard</span>
                </span>
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Animated Gradient Orbs */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 50, 0],
              y: [0, -30, 0],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full"
            animate={{
              scale: [1.2, 1, 1.2],
              x: [0, -30, 0],
              y: [0, 50, 0],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* New: Interactive Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 px-4 py-3 rounded-full text-sm font-medium mb-8 border border-blue-100 shadow-sm cursor-pointer group hover:shadow-md transition-all"
              onClick={() => setShowDemoVideo(true)}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500 rounded-full animate-ping opacity-75" />
                <PlayCircle className="relative w-5 h-5" />
              </div>
              <span>Healthcare, Reimagined with AI.</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
            >
              <span className="relative">
                <span className="bg-gradient-to-r from-blue-700 via-cyan-600 to-purple-600 bg-clip-text text-transparent bg-[length:200%_auto] animate-gradient">
                  Next-Generation Medical Intelligence,
                </span>
                <motion.div 
                  className="absolute -top-4 -right-4"
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full blur-md" />
                    <div className="relative w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                  </div>
                </motion.div>
              </span>
              <br />
              <span className="text-gray-900">Powered by AI</span>
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

            {/* New: Interactive Stats Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="inline-block bg-white/80 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-gray-100/50 shadow-lg"
            >
              <div className="flex items-center space-x-6">
                {stats.slice(0, 2).map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center space-x-2">
                      <div className="text-blue-500">{stat.icon}</div>
                      <span className="text-3xl font-bold bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
                        {stat.value}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm font-medium mt-2">{stat.label}</p>
                  </div>
                ))}
                <div className="h-12 w-px bg-gradient-to-b from-transparent via-gray-300 to-transparent" />
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-2">
                    <Zap className="w-5 h-5 text-amber-500" />
                    <span className="text-lg font-bold text-gray-900">Fast Setup</span>
                  </div>
                  <p className="text-gray-500 text-sm mt-2">5 minutes</p>
                </div>
              </div>
            </motion.div>

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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToFeatures()}
                className="group bg-white/80 backdrop-blur-sm text-gray-700 hover:text-blue-600 font-semibold px-8 py-5 rounded-2xl border-2 border-gray-100 hover:border-blue-100 transition-all duration-300"
              >
                <span className="flex items-center space-x-2">
                  <span>Explore Features</span>
                  <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* New: Interactive Demo Preview */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              See it in 
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Action</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Watch how MedCodeAI transforms complex medical reports into accurate codes in seconds
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-1 shadow-2xl overflow-hidden group cursor-pointer"
            onClick={() => setShowDemoVideo(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-purple-500/20 animate-gradient-xy" />
            <div className="relative bg-gray-900 rounded-2xl p-8">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-gray-400 text-sm">MedCodeAI • Dashboard</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Upload className="w-4 h-4" />
                    <span className="text-sm">Upload Report</span>
                  </div>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Brain className="w-4 h-4" />
                    <span className="text-sm">AI Processing</span>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-6">
                <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">Input</span>
                    <FileText className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="h-2 bg-gray-700 rounded-full" />
                    <div className="h-2 bg-gray-700 rounded-full w-4/5" />
                    <div className="h-2 bg-gray-700 rounded-full w-3/4" />
                  </div>
                </div>
                
                <div className="relative col-span-2 bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                  <div className="absolute top-4 right-4">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    >
                      <RefreshCw className="w-5 h-5 text-cyan-400" />
                    </motion.div>
                  </div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400">AI Analysis</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-sm text-green-400">Processing</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">ICD-11: 2B50.0</p>
                          <p className="text-gray-400 text-sm">Malignant neoplasm of lung</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">98.7%</p>
                        <p className="text-gray-400 text-xs">Confidence</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                          <Brain className="w-4 h-4 text-white" />
                        </div>
                        <div>
                          <p className="text-white font-medium">ICD-11: 9C87.0</p>
                          <p className="text-gray-400 text-sm">Essential hypertension</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-green-400 font-bold">96.2%</p>
                        <p className="text-gray-400 text-xs">Confidence</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-black/50 backdrop-blur-sm rounded-full p-8">
                  <PlayCircle className="w-16 h-16 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-32 bg-gradient-to-b from-white to-gray-50/50">
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
          
          {/* New: Feature Navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-100 rounded-2xl p-2">
              {features.map((feature, index) => (
                <button
                  key={index}
                  onClick={() => setActiveFeature(index)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all ${
                    activeFeature === index
                      ? 'bg-white shadow-lg text-blue-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {feature.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: feature.delay }}
                whileHover={{ y: -8 }}
                onClick={() => setActiveFeature(index)}
                className={`group relative cursor-pointer transition-all ${
                  activeFeature === index ? 'scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 rounded-3xl transform transition-all duration-500 shadow-xl ${
                  activeFeature === index 
                    ? 'bg-gradient-to-br from-blue-50 to-cyan-50 scale-105 shadow-2xl' 
                    : 'bg-gradient-to-br from-white to-gray-50 group-hover:scale-105'
                }`} />
                <div className={`relative rounded-3xl p-8 border overflow-hidden ${
                  activeFeature === index
                    ? 'border-blue-200 bg-white/90'
                    : 'border-gray-100/50 bg-white/80'
                } backdrop-blur-sm`}>
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
                  
                  <div className="space-y-2">
                    {feature.details?.map((detail, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* New: Advanced Features */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-12 border border-gray-100 shadow-2xl"
          >
            <div className="text-center mb-12">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Advanced Capabilities
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Beyond basic coding - intelligent features that adapt to your workflow
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {advancedFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="group"
                >
                  <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <div className="text-blue-600">
                          {feature.icon}
                        </div>
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-bold text-gray-900 mb-3">
                      {feature.title}
                    </h4>
                    
                    <p className="text-gray-600 text-sm mb-4">
                      {feature.description}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-blue-600 font-semibold text-sm">
                        {feature.stats}
                      </span>
                      <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* New: Integrations Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h3 className="text-4xl font-bold text-gray-900 mb-6">
              Seamless
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent"> Integrations</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Works with your existing healthcare systems and EHR platforms
            </p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {integrations.map((integration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center">
                  <div className={`w-16 h-16 ${integration.color} rounded-2xl flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto group-hover:scale-110 transition-transform`}>
                    {integration.icon}
                  </div>
                  <p className="font-semibold text-gray-900">{integration.name}</p>
                  <p className="text-gray-500 text-sm mt-2">EHR System</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-32 bg-gradient-to-br from-blue-50/30 via-white to-cyan-50/30">
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
            {/* Animated Connecting Line */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-blue-300 to-transparent">
              <motion.div 
                className="h-full bg-gradient-to-r from-blue-500 to-cyan-500"
                initial={{ width: 0 }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true }}
                transition={{ duration: 2 }}
              />
            </div>
            
            {[1, 2, 3].map((step) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: step * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                <div className="relative z-10">
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                    <motion.div 
                      className="relative"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full blur-md group-hover:blur-lg transition-all" />
                      <div className="relative w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-xl">
                        {step}
                      </div>
                    </motion.div>
                  </div>
                  
                  <div className="bg-white rounded-3xl p-8 pt-16 border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-300 group-hover:border-blue-100">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {step === 1 && "Upload & Process"}
                      {step === 2 && "AI Analysis"}
                      {step === 3 && "Review & Export"}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {step === 1 && "Drag and drop medical reports in any format. Our intelligent system automatically processes and structures the content."}
                      {step === 2 && "Advanced AI analyzes medical terminology, identifies diagnoses, and extracts precise ICD-11 codes with contextual understanding."}
                      {step === 3 && "Review AI-suggested codes with confidence scores, make adjustments, and seamlessly export to your billing system."}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {step === 1 && "Supports 15+ file formats"}
                        {step === 2 && "Processes in seconds"}
                        {step === 3 && "One-click export"}
                      </span>
                      <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                    </div>
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
          
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8 }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl transform group-hover:scale-105 transition-all duration-500" />
                <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-xl group-hover:shadow-2xl transition-all duration-500 border border-gray-100/50">
                  <div className="flex items-center mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-700 text-lg italic mb-8 leading-relaxed font-light">
                    "{testimonial.quote}"
                  </p>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-14 h-14 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-gray-900 text-lg">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.role}</p>
                      <p className="text-gray-500 text-sm">{testimonial.hospital}</p>
                    </div>
                  </div>
                  
                  {/* Before/After Comparison */}
                  <div className="border-t border-gray-100 pt-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center">
                        <p className="text-gray-500 text-sm mb-2">Before</p>
                        <p className="text-red-500 font-bold">{testimonial.beforeAfter.before}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-500 text-sm mb-2">After</p>
                        <p className="text-green-500 font-bold">{testimonial.beforeAfter.after}</p>
                      </div>
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
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full mb-6">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-medium">Industry Leader in Medical AI</span>
                </div>
                
                <h2 className="text-5xl font-bold mb-8 leading-tight">
                  Ready to Transform Your
                  <span className="block bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                    Medical Coding?
                  </span>
                </h2>
                
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-light">
                  Join 5,000+ healthcare providers saving time and increasing accuracy with MedCodeAI
                </p>
              </motion.div>
              
              <motion.div 
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
              >
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => navigate("/dashboard")}
                  className="group bg-white text-gray-900 hover:text-blue-600 font-bold px-12 py-5 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-300 text-lg flex items-center justify-center space-x-3"
                >
                  <span>Get Started Free</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                </motion.button>
                
                <motion.button
                  variants={fadeInUp}
                  whileHover={{ y: -2 }}
                  className="bg-transparent border-2 border-white/30 hover:border-white text-white hover:bg-white/10 font-semibold px-12 py-5 rounded-2xl transition-all duration-300 text-lg flex items-center justify-center space-x-3"
                >
                  <span>Schedule a Demo</span>
                  <Calendar className="w-5 h-5" />
                </motion.button>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="grid grid-cols-3 gap-8 max-w-2xl mx-auto"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <p className="text-sm opacity-80">HIPAA Compliant</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-6 h-6" />
                  </div>
                  <p className="text-sm opacity-80">14-day free trial</p>
                </div>
                
                <div className="text-center">
                  <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <HelpCircle className="w-6 h-6" />
                  </div>
                  <p className="text-sm opacity-80">24/7 Support</p>
                </div>
              </motion.div>
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
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl blur-sm"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                  />
                  <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Brain className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">MedCodeAI</h2>
                  <p className="text-sm text-gray-400">Intelligent Medical Coding</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6">
                Revolutionizing healthcare documentation with AI-powered precision and security.
              </p>
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Globe2 className="w-5 h-5" />
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
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Privacy Policy
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Terms of Service
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Cookie Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* New: Demo Video Modal */}
      {showDemoVideo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm p-4"
          onClick={() => setShowDemoVideo(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative w-full max-w-4xl bg-gray-900 rounded-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="p-4 bg-gradient-to-r from-gray-800 to-gray-900 flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="flex space-x-1">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <span className="text-gray-300">MedCodeAI Demo</span>
              </div>
              <button
                onClick={() => setShowDemoVideo(false)}
                className="text-gray-400 hover:text-white"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="aspect-video bg-black flex items-center justify-center">
              <div className="text-center">
                <PlayCircle className="w-24 h-24 text-white/50 mx-auto mb-4" />
                <p className="text-gray-400">Demo video would play here</p>
              </div>
            </div>
            
            <div className="p-8 bg-gray-900">
              <h3 className="text-2xl font-bold text-white mb-4">
                See MedCodeAI in Action
              </h3>
              <p className="text-gray-400 mb-6">
                Watch how our AI transforms complex medical reports into accurate ICD-11 codes in seconds.
              </p>
              <button
                onClick={() => navigate("/dashboard")}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-3 rounded-xl hover:opacity-90 transition-opacity"
              >
                Try it Yourself
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* New: Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => navigate("/dashboard")}
        className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-blue-600 to-cyan-600 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all"
      >
        <Brain className="w-6 h-6" />
      </motion.button>
    </div>
  );
}