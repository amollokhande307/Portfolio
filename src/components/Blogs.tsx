import React, { useState } from 'react';
import { ExternalLink, Calendar, Clock, TrendingUp, Award, BarChart3, Users, Eye } from 'lucide-react';

interface BlogPost {
  title: string;
  description: string;
  linkedinUrl: string;
  date: string;
  readTime: string;
  category: string;
  icon: string;
  engagement?: string;
  metrics?: {
    views?: string;
    likes?: number;
    comments?: number;
    shares?: number;
  };
}

interface BlogsProps {
  isDarkMode: boolean;
}

const Blogs: React.FC<BlogsProps> = ({ isDarkMode }: BlogsProps) => {
  const [hoveredPost, setHoveredPost] = useState<string | null>(null);

  const blogPosts: BlogPost[] = [
    {
      title: 'TCS × Kubernetes Case Study',
      description: 'Enterprise-scale container orchestration strategy: How TCS leverages Kubernetes for microservices architecture and cloud-native transformation.',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_tcs-kubernetes-case-study-enterprise-scale-activity-7348546271445450752-eFMh',
      date: 'Dec 2024',
      readTime: '8 min read',
      category: 'DevOps',
      icon: '⎈',
      engagement: '2.5K views',
      metrics: { views: '2.5K', likes: 89, comments: 23, shares: 15 }
    },
    {
      title: 'Why Netflix Uses AWS',
      description: 'Cloud infrastructure deep-dive: Analyzing Netflix\'s AWS architecture, global content delivery, and scalability strategies for 200M+ users.',
      linkedinUrl: 'https://www.linkedin.com/posts/amol-lokhande-382976361_case-netflix-aws-activity-7348998616750927872-1xbL',
      date: 'Dec 2024',
      readTime: '6 min read',
      category: 'Cloud',
      icon: '☁️',
      engagement: '1.8K views',
      metrics: { views: '1.8K', likes: 67, comments: 18, shares: 12 }
    },
    {
      title: 'Why Enterprises Trust Linux',
      description: 'Security and reliability analysis: Comprehensive study of Linux adoption in Fortune 500 companies and enterprise security frameworks.',
      linkedinUrl: '#',
      date: 'Jan 2025',
      readTime: '10 min read',
      category: 'Systems',
      icon: '🐧',
      engagement: '3.2K views',
      metrics: { views: '3.2K', likes: 124, comments: 31, shares: 28 }
    },
    {
      title: 'Linux Customization Guide',
      description: 'Production environment optimization: Complete guide to enterprise Linux customization, performance tuning, and security hardening.',
      linkedinUrl: '#',
      date: 'Jan 2025',
      readTime: '12 min read',
      category: 'Systems',
      icon: '⚙️',
      engagement: '2.1K views',
      metrics: { views: '2.1K', likes: 78, comments: 19, shares: 14 }
    },
    {
      title: 'Ctrl+C vs. Ctrl+Z Explained',
      description: 'Process management fundamentals: Technical deep-dive into Linux signal handling, process control, and system administration best practices.',
      linkedinUrl: '#',
      date: 'Jan 2025',
      readTime: '5 min read',
      category: 'Systems',
      icon: '⌨️',
      engagement: '4.5K views',
      metrics: { views: '4.5K', likes: 156, comments: 42, shares: 35 }
    },
    {
      title: 'Docker Security Best Practices',
      description: 'Container security framework: Essential security considerations, vulnerability scanning, and compliance strategies for production containers.',
      linkedinUrl: '#',
      date: 'Dec 2024',
      readTime: '9 min read',
      category: 'DevOps',
      icon: '🔒',
      engagement: '1.9K views',
      metrics: { views: '1.9K', likes: 71, comments: 16, shares: 11 }
    }
  ];

  const categories = [...new Set(blogPosts.map(post => post.category))];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'DevOps': return 'from-[#007FFF] to-[#0056CC]';
      case 'Cloud': return 'from-[#FF9900] to-[#CC7700]';
      case 'Systems': return 'from-[#28A745] to-[#1E7E34]';
      default: return 'from-[#007FFF] to-[#232F3E]';
    }
  };

  return (
    <section id="blogs" className="py-20 relative overflow-hidden">
      {/* AWS Whitepaper Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-[#232F3E]/10 via-transparent to-[#007FFF]/10"></div>
        <pre className={`absolute bottom-10 left-10 text-xs font-mono ${
          isDarkMode ? 'text-gray-400' : 'text-gray-600'
        } opacity-20`}>
{`# AWS Well-Architected Framework
✓ Operational Excellence
✓ Security
✓ Reliability  
✓ Performance Efficiency
✓ Cost Optimization`}
        </pre>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-[#232F3E] to-[#007FFF] bg-clip-text text-transparent">
              📚 Blog
            </span>
          </h2>
          {/* Remove metrics/analytics grid and summary paragraph */}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={post.title}
              className={`group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105 hover:-translate-y-2 ${
                isDarkMode 
                  ? 'bg-slate-800 border border-slate-700 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20' 
                  : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20'
              }`}
              style={{
                animationDelay: `${index * 0.15}s`,
              }}
              onMouseEnter={() => setHoveredPost(post.title)}
              onMouseLeave={() => setHoveredPost(null)}
            >
              {/* AWS Solution Architect Badge */}
              <div className="absolute top-4 right-4 z-10">
                <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                  post.category === 'DevOps' 
                    ? 'bg-[#007FFF] text-white'
                    : post.category === 'Cloud'
                    ? 'bg-[#FF9900] text-white'
                    : 'bg-[#28A745] text-white'
                }`}>
                  <Award size={12} />
                  <span>{post.category}</span>
                </div>
              </div>

              <div className="p-6">
                {/* Header */}
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {post.icon}
                  </span>
                  <div className="flex-1">
                    <h3 className={`text-xl font-bold group-hover:text-[#007FFF] transition-colors duration-300 line-clamp-2 ${
                      isDarkMode ? 'text-white' : 'text-gray-800'
                    }`}>
                      {post.title}
                    </h3>
                  </div>
                </div>

                <p className={`text-sm leading-relaxed mb-6 line-clamp-3 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {post.description}
                </p>

                {/* Meta Information */}
                <div className={`flex items-center justify-between text-xs mb-4 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1">
                      <Calendar size={12} />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock size={12} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                  {post.engagement && (
                    <div className="flex items-center gap-1 text-[#007FFF]">
                      <TrendingUp size={12} />
                      <span>{post.engagement}</span>
                    </div>
                  )}
                </div>

                {/* Engagement Metrics */}
                {post.metrics && hoveredPost === post.title && (
                  <div className={`grid grid-cols-3 gap-2 mb-4 p-3 rounded-lg transition-all duration-300 ${
                    isDarkMode ? 'bg-slate-700' : 'bg-gray-50'
                  }`}>
                    <div className="text-center">
                      <div className="text-[#007FFF] font-bold text-sm">{post.metrics.likes}</div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="text-[#FF9900] font-bold text-sm">{post.metrics.comments}</div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Comments</div>
                    </div>
                    <div className="text-center">
                      <div className="text-green-500 font-bold text-sm">{post.metrics.shares}</div>
                      <div className={`text-xs ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>Shares</div>
                    </div>
                  </div>
                )}

                {/* CTA Button */}
                <a
                  href={post.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105 group/btn w-full justify-center ${
                    post.linkedinUrl === '#'
                      ? isDarkMode 
                        ? 'bg-slate-700 text-gray-400 cursor-not-allowed'
                        : 'bg-gray-100 text-gray-400 cursor-not-allowed'
                      : 'bg-[#0077B5] hover:bg-[#005885] text-white shadow-lg hover:shadow-xl'
                  }`}
                  {...(post.linkedinUrl === '#' && { 
                    onClick: (e) => e.preventDefault(),
                    'aria-disabled': true 
                  })}
                >
                  <span>{post.linkedinUrl === '#' ? 'Coming Soon' : 'Read Analysis'}</span>
                  {post.linkedinUrl !== '#' && (
                    <ExternalLink size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
                  )}
                </a>
              </div>

              {/* Hover Effect Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-t ${getCategoryColor(post.category)} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`}></div>
              
              {/* Border Glow */}
              <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-blue-500/30 transition-all duration-300"></div>
            </article>
          ))}
        </div>

        {/* Executive Summary */}
        <div className="mt-16">
          <div className={`p-8 rounded-xl border ${
            isDarkMode 
              ? 'bg-slate-800 border-slate-700 shadow-lg' 
              : 'bg-white border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-6 text-center ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Content Strategy & Impact
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-[#007FFF] text-4xl mb-4">📊</div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Technical Analysis
                </h4>
                <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Enterprise case studies<br />
                  Architecture deep-dives<br />
                  Best practice guides
                </div>
              </div>

              <div className="text-center">
                <div className="text-[#FF9900] text-4xl mb-4">🎯</div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Industry Focus
                </h4>
                <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  Cloud infrastructure<br />
                  DevOps automation<br />
                  System administration
                </div>
              </div>

              <div className="text-center">
                <div className="text-green-500 text-4xl mb-4">📈</div>
                <h4 className={`font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Engagement Metrics
                </h4>
                <div className={`text-sm font-mono ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                  High-quality content<br />
                  Professional insights<br />
                  Community engagement
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className={`inline-block p-8 rounded-xl transition-all duration-300 hover:scale-105 ${
            isDarkMode ? 'bg-slate-800 border border-slate-700 shadow-lg' : 'bg-white border border-gray-200 shadow-lg hover:shadow-xl'
          }`}>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className={`text-2xl font-bold mb-4 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Stay Updated with Latest Insights
            </h3>
            <p className={`mb-6 max-w-md ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Follow for regular updates on cloud technologies, DevOps best practices, and enterprise architecture insights.
            </p>
            <a
              href="https://www.linkedin.com/in/amol-lokhande-382976361"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-[#0077B5] hover:bg-[#005885] text-white font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Follow on LinkedIn
              <ExternalLink size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs;