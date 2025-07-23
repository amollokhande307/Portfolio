import React, { useState, useEffect } from 'react';
import { Github, Linkedin, ExternalLink, Filter, Code, Server, Brain, Globe, Play, GitBranch, Users, TrendingUp } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  category: string;
  githubUrl?: string;
  linkedinUrl: string;
  tags: string[];
  icon: string;
  status?: 'PROD' | 'DEV';
  metrics?: {
    stars?: number;
    forks?: number;
    engagement?: string;
  };
}

interface ProjectsProps {
  isDarkMode: boolean;
}

const Projects: React.FC<ProjectsProps> = ({ isDarkMode }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [animatingCards, setAnimatingCards] = useState<number[]>([]);

  const projects: Project[] = [
    // Python Projects
    {
      title: 'College Student Info',
      description: 'Student profile management system with advanced data handling and intuitive user interface for educational institutions.',
      category: 'Python',
      githubUrl: 'https://github.com/amollokhande307/summer-internship-/blob/main/college%20student.txt',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-project-college-student-profile-activity-7346395278616186880-fASR',
      tags: ['Python', 'Data Management', 'UI/UX'],
      icon: '🎓',
      status: 'PROD',
      metrics: { stars: 12, forks: 5, engagement: '2.1K views' }
    },
    {
      title: 'WhatsApp Message Sender',
      description: 'Enterprise-grade automated messaging solution with bulk sending capabilities and delivery tracking.',
      category: 'Python',
      githubUrl: 'https://github.com/amollokhande307/summer-internship-/blob/main/whatsapp.py',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_just-built-whatsapp-message-sender-app-using-activity-7348555003076186113-bhUL',
      tags: ['Python', 'Automation', 'WhatsApp API'],
      icon: '📱',
      status: 'PROD',
      metrics: { stars: 28, forks: 12, engagement: '3.5K views' }
    },
    {
      title: 'Email Sender App',
      description: 'Professional email automation platform with template management, scheduling, and analytics dashboard.',
      category: 'Python',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Python', 'SMTP', 'Automation', 'Templates'],
      icon: '📧',
      status: 'DEV',
      metrics: { engagement: 'Coming Soon' }
    },
    {
      title: 'Twilio Communication App',
      description: 'Multi-channel communication hub integrating SMS, voice calls, and messaging with advanced routing.',
      category: 'Python',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Python', 'Twilio API', 'Communication', 'Voice'],
      icon: '📞',
      status: 'PROD',
      metrics: { engagement: 'In Development' }
    },
    {
      title: 'Instagram Messenger',
      description: 'Intelligent Instagram automation bot with content scheduling and engagement analytics.',
      category: 'Python',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Python', 'Instagram API', 'Bot', 'Analytics'],
      icon: '📸',
      status: 'DEV',
      metrics: { engagement: 'Beta Testing' }
    },
    {
      title: 'Twitter Client (Tweepy)',
      description: 'Advanced Twitter management tool with sentiment analysis and automated engagement features.',
      category: 'Python',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Python', 'Tweepy', 'Social Media', 'ML'],
      icon: '🐦',
      status: 'PROD',
      metrics: { engagement: 'Live Demo' }
    },
    {
      title: 'All-in-One Communication App',
      description: 'Unified communication platform integrating multiple messaging services with centralized management.',
      category: 'Python',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Python', 'Multi-platform', 'Integration', 'Dashboard'],
      icon: '💬',
      status: 'PROD',
      metrics: { engagement: 'Enterprise Ready' }
    },
    {
      title: 'System RAM Monitor',
      description: 'Real-time system performance monitoring with alerting, logging, and predictive analytics.',
      category: 'Python',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Python', 'System Monitoring', 'Performance', 'Alerts'],
      icon: '📊',
      status: 'PROD',
      metrics: { engagement: 'Production Use' }
    },
    // Docker Projects
    {
      title: 'Apache Web Server',
      description: 'Production-ready containerized Apache deployment with SSL, load balancing, and auto-scaling.',
      category: 'Docker',
      githubUrl: 'https://github.com/amollokhande307/summer-internship-/tree/main/apache%20setup',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_devops-docker-apache-activity-7350381049182392321-ZTwX',
      tags: ['Docker', 'Apache', 'DevOps', 'SSL'],
      icon: '🐳',
      status: 'PROD',
      metrics: { stars: 15, forks: 8, engagement: '1.8K views' }
    },
    {
      title: 'Docker-in-Docker (DinD)',
      description: 'Advanced containerization setup enabling nested Docker environments for CI/CD pipelines.',
      category: 'Docker',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Docker', 'DinD', 'CI/CD', 'Orchestration'],
      icon: '🔄',
      status: 'PROD',
      metrics: { engagement: 'Enterprise Solution' }
    },
    {
      title: 'Flask Inside Docker',
      description: 'Containerized Flask application with multi-stage builds, health checks, and production optimization.',
      category: 'Docker',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['Docker', 'Flask', 'Python', 'Multi-stage'],
      icon: '🌶️',
      status: 'PROD',
      metrics: { engagement: 'Best Practices' }
    },
    // AI Projects
    {
      title: 'AI-Powered Banking Assistant',
      description: 'Intelligent banking chatbot with NLP capabilities for customer service and financial advisory.',
      category: 'AI',
      githubUrl: 'https://github.com/amollokhande307/summer-internship-/blob/main/bank%20manager.txt',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_my-first-ai-powered-banking-assistant-activity-7346942613884698624-nqnB',
      tags: ['AI', 'NLP', 'Banking', 'Chatbot'],
      icon: '🤖',
      status: 'PROD',
      metrics: { stars: 22, forks: 9, engagement: '4.2K views' }
    },
    {
      title: 'AI-Powered Multi-Tech Tool',
      description: 'Comprehensive AI toolkit integrating machine learning models for automated problem-solving.',
      category: 'AI',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['AI', 'Machine Learning', 'Automation', 'Multi-platform'],
      icon: '🧠',
      status: 'DEV',
      metrics: { engagement: 'Research Phase' }
    },
    {
      title: 'Stock Market Predictor',
      description: 'Advanced ML model for financial forecasting using historical data and market sentiment analysis.',
      category: 'AI',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['AI', 'Machine Learning', 'Finance', 'Prediction'],
      icon: '📈',
      status: 'PROD',
      metrics: { engagement: 'Alpha Testing' }
    },
    // Fullstack Projects
    {
      title: 'Live Location Viewer',
      description: 'Real-time geolocation tracking application with interactive maps and location sharing features.',
      category: 'Fullstack',
      githubUrl: 'https://github.com/amollokhande307/summer-internship-/blob/main/Live%20Location.html',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_webdevelopment-javascript-html-activity-7351210348974080000-rfTy',
      tags: ['JavaScript', 'Geolocation', 'Maps API', 'Real-time'],
      icon: '🌐',
      status: 'PROD',
      metrics: { stars: 18, forks: 7, engagement: '2.8K views' }
    },
    {
      title: 'Video Recording + Email System',
      description: 'Integrated platform for video capture, processing, compression, and automated email distribution.',
      category: 'Fullstack',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['JavaScript', 'Video Processing', 'Email', 'WebRTC'],
      icon: '🎥',
      status: 'PROD',
      metrics: { engagement: 'Media Solution' }
    },
    {
      title: 'Grocery Store Finder',
      description: 'Location-based grocery discovery app with inventory tracking, price comparison, and delivery integration.',
      category: 'Fullstack',
      githubUrl: '#',
      linkedinUrl: '#',
      tags: ['React', 'Maps API', 'Database', 'E-commerce'],
      icon: '🛒',
      status: 'DEV',
      metrics: { engagement: 'MVP Ready' }
    }
  ];

  const categories = ['All', 'Python', 'Docker', 'AI', 'Fullstack'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  useEffect(() => {
    // Trigger CI/CD-style animation when filter changes
    const cardIndices = filteredProjects.map((_, index) => index);
    setAnimatingCards(cardIndices);
    
    const timer = setTimeout(() => {
      setAnimatingCards([]);
    }, 1000);

    return () => clearTimeout(timer);
  }, [activeFilter, filteredProjects]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Python': return <Code className="w-5 h-5" />;
      case 'Docker': return <Server className="w-5 h-5" />;
      case 'AI': return <Brain className="w-5 h-5" />;
      case 'Fullstack': return <Globe className="w-5 h-5" />;
      default: return <Filter className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Python': return 'from-[#3776AB] to-[#FFD43B]';
      case 'Docker': return 'from-[#2496ED] to-[#0DB7ED]';
      case 'AI': return 'from-[#FF6B6B] to-[#4ECDC4]';
      case 'Fullstack': return 'from-[#61DAFB] to-[#21759B]';
      default: return 'from-[#007FFF] to-[#232F3E]';
    }
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* AWS Console Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#232F3E]/10 via-transparent to-[#007FFF]/10"></div>
        <pre className={`absolute top-10 right-10 text-xs font-mono ${
          isDarkMode ? 'text-blue-400' : 'text-blue-600'
        } opacity-20`}>
{`# CI/CD Pipeline Status
✓ Build: SUCCESS
✓ Test: PASSED  
✓ Deploy: RUNNING`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#232F3E] to-[#007FFF] bg-clip-text text-transparent">
              📦 Project Portfolio
            </span>
          </h2>
          <p className={`text-lg md:text-xl max-w-2xl mx-auto mb-8 ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Enterprise-grade solutions across cloud infrastructure, DevOps automation, and AI integration
          </p>

          {/* AWS Console Style Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-8">
            {[
              { label: 'Total Projects', value: projects.length, icon: '🚀', color: 'text-[#007FFF]' },
              { label: 'Production', value: projects.filter(p => p.status === 'PROD').length, icon: '✅', color: 'text-green-500' },
              { label: 'Technologies', value: [...new Set(projects.flatMap(p => p.tags))].length, icon: '⚡', color: 'text-[#FF9900]' },
              { label: 'Categories', value: categories.length - 1, icon: '📁', color: 'text-purple-500' }
            ].map((metric, index) => (
              <div key={index} className={`p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                isDarkMode 
                  ? 'bg-slate-800 border-slate-700' 
                  : 'bg-white border-gray-200 shadow-sm'
              }`}>
                <div className="text-2xl mb-1">{metric.icon}</div>
                <div className={`text-2xl font-bold ${metric.color}`}>{metric.value}</div>
                <div className={`text-xs font-mono ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {metric.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`group relative px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category
                  ? `bg-gradient-to-r ${getCategoryColor(category)} text-white shadow-lg shadow-blue-500/25`
                  : isDarkMode
                    ? 'bg-slate-800 hover:bg-slate-700 text-gray-300 border border-slate-600'
                    : 'bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 shadow-md hover:shadow-lg'
              }`}
            >
              <div className="flex items-center gap-2">
                {getCategoryIcon(category)}
                <span>{category}</span>
                {category !== 'All' && (
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    activeFilter === category 
                      ? 'bg-white/20' 
                      : isDarkMode ? 'bg-slate-700' : 'bg-gray-100'
                  }`}>
                    {projects.filter(p => p.category === category).length}
                  </span>
                )}
              </div>
              
              {/* Active indicator */}
              {activeFilter === category && (
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-white rounded-full"></div>
              )}
            </button>
          ))}
        </div>

        {/* Projects Grid with CI/CD Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                animatingCards.includes(index) ? 'animate-pulse' : ''
              } ${
                isDarkMode 
                  ? 'bg-slate-800 border border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20' 
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20'
              }`}
              style={{
                animationDelay: `${index * 0.1}s`,
              }}
            >
              {/* AWS Console Style Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {project.icon}
                    </span>
                    <div>
                      <span className={`text-xs px-3 py-1 rounded-full font-mono font-bold ${
                        project.category === 'Python' ? 'bg-blue-100 text-blue-700' :
                        project.category === 'Docker' ? 'bg-cyan-100 text-cyan-700' :
                        project.category === 'AI' ? 'bg-purple-100 text-purple-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Status Light */}
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${
                      project.status === 'PROD' 
                        ? 'bg-green-500 animate-pulse' 
                        : 'bg-orange-500 animate-pulse'
                    }`}></div>
                    <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${
                      project.status === 'PROD' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {project.status || 'PROD'}
                    </span>
                  </div>
                </div>

                <h3 className={`text-xl font-bold mb-3 group-hover:text-[#007FFF] transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-4 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`text-xs px-2 py-1 rounded-md font-mono border ${
                        isDarkMode 
                          ? 'bg-slate-700 text-blue-300 border-slate-600' 
                          : 'bg-blue-50 text-blue-700 border-blue-200'
                      }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Metrics */}
                {project.metrics && (
                  <div className={`flex items-center gap-4 mb-4 text-xs ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    {project.metrics.stars && (
                      <div className="flex items-center gap-1">
                        <GitBranch size={12} />
                        <span>{project.metrics.stars}</span>
                      </div>
                    )}
                    {project.metrics.forks && (
                      <div className="flex items-center gap-1">
                        <Users size={12} />
                        <span>{project.metrics.forks}</span>
                      </div>
                    )}
                    {project.metrics.engagement && (
                      <div className="flex items-center gap-1">
                        <TrendingUp size={12} />
                        <span>{project.metrics.engagement}</span>
                      </div>
                    )}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex gap-3">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn ${
                        isDarkMode 
                          ? 'bg-slate-700 hover:bg-slate-600 text-white border border-slate-600' 
                          : 'bg-gray-800 hover:bg-gray-700 text-white'
                      }`}
                    >
                      <Github size={16} className="group-hover/btn:rotate-12 transition-transform duration-300" />
                      <span className="text-sm">Repository</span>
                    </a>
                  )}
                  {project.linkedinUrl && project.linkedinUrl !== '#' && (
                    <a
                      href={project.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn bg-[#0077B5] hover:bg-[#005885] text-white"
                    >
                      <Linkedin size={16} className="group-hover/btn:scale-110 transition-transform duration-300" />
                      <span className="text-sm">Article</span>
                    </a>
                  )}
                </div>
              </div>

              {/* CI/CD Pipeline Visualization */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${getCategoryColor(project.category)} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                <div className="h-full bg-white/30 animate-pulse"></div>
              </div>
              
              {/* Deployment Status */}
              <div className="absolute top-2 left-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className={`text-xs px-2 py-1 rounded font-mono ${
                  project.status === 'PROD' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-orange-500 text-white'
                }`}>
                  {project.status === 'PROD' ? 'DEPLOYED' : 'BUILDING'}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Infrastructure Summary */}
        <div className="mt-16">
          <div className={`p-8 rounded-xl border ${
            isDarkMode 
              ? 'bg-slate-800 border-slate-700 shadow-lg' 
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Deployment Infrastructure
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[#FF9900] text-4xl mb-4">☁️</div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Cloud Platforms
                </h4>
                <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  AWS • Azure • GCP<br />
                  Multi-region deployment
                </div>
              </div>

              <div className="text-center">
                <div className="text-[#007FFF] text-4xl mb-4">🔄</div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  CI/CD Pipeline
                </h4>
                <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  GitHub Actions • Docker<br />
                  Automated testing & deployment
                </div>
              </div>

              <div className="text-center">
                <div className="text-green-500 text-4xl mb-4">📊</div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Monitoring
                </h4>
                <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  CloudWatch • Prometheus<br />
                  Real-time metrics & alerts
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;