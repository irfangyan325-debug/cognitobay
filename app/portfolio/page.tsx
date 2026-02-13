'use client'

import { FiExternalLink, FiGithub } from 'react-icons/fi'

export default function PortfolioPage() {
  const projects = [
    {
      title: 'FinanceFlow - Banking Platform',
      category: 'Fintech',
      description: 'A comprehensive digital banking solution with AI-powered financial insights and automated investment recommendations.',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      technologies: ['React', 'Node.js', 'MongoDB', 'AI/ML', 'AWS'],
      results: ['350% increase in user engagement', '200% faster transactions', '45% cost reduction'],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      title: 'HealthTech Pro - Telemedicine App',
      category: 'Healthcare',
      description: 'An intuitive telemedicine platform connecting patients with healthcare providers through video consultations and AI diagnostics.',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop',
      technologies: ['React Native', 'Python', 'TensorFlow', 'Firebase', 'WebRTC'],
      results: ['50,000+ active users', '98% patient satisfaction', '30% faster diagnosis'],
      color: 'from-green-600 to-teal-500',
    },
    {
      title: 'RetailHub - E-commerce Platform',
      category: 'Retail',
      description: 'A scalable e-commerce solution with personalized shopping experiences, inventory management, and multi-channel integration.',
      image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop',
      technologies: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
      results: ['$5M+ in sales', '300% revenue growth', '2M+ products managed'],
      color: 'from-purple-600 to-pink-500',
    },
    {
      title: 'LogiTrack - Supply Chain System',
      category: 'Logistics',
      description: 'Real-time supply chain management system with IoT integration, predictive analytics, and automated routing.',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=800&h=600&fit=crop',
      technologies: ['Angular', 'Java', 'Apache Kafka', 'IoT', 'Azure'],
      results: ['40% operational efficiency', '60% reduced delays', '$2M cost savings'],
      color: 'from-orange-600 to-red-500',
    },
    {
      title: 'EduLearn - Learning Management',
      category: 'Education',
      description: 'Interactive learning platform with virtual classrooms, AI-powered assessments, and personalized learning paths.',
      image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=600&fit=crop',
      technologies: ['Vue.js', 'Django', 'WebRTC', 'ML', 'Google Cloud'],
      results: ['100,000+ students', '85% completion rate', '4.8/5 satisfaction'],
      color: 'from-indigo-600 to-blue-500',
    },
    {
      title: 'PropTech - Real Estate Platform',
      category: 'Real Estate',
      description: 'Modern property marketplace with virtual tours, AI valuations, and integrated mortgage services.',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop',
      technologies: ['React', 'GraphQL', 'Three.js', 'Node.js', 'MongoDB'],
      results: ['10,000+ listings', '250% more viewings', '35% faster sales'],
      color: 'from-yellow-600 to-orange-500',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-blue-900 to-navy-950 text-white">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-cyan-400 rounded-full text-sm font-semibold mb-6">
            Our Portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Transforming Ideas Into
            <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-500"> Digital Reality</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise across diverse industries.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '500+', label: 'Projects Completed' },
              { number: '25+', label: 'Industries Served' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '$100M+', label: 'Revenue Generated' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${project.color} opacity-0 group-hover:opacity-80 transition-opacity duration-500 flex items-center justify-center`}>
                    <div className="flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <a
                        href="#"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <FiExternalLink className="text-2xl text-blue-600" />
                      </a>
                      <a
                        href="#"
                        className="p-3 bg-white rounded-full hover:scale-110 transition-transform duration-300"
                      >
                        <FiGithub className="text-2xl text-blue-600" />
                      </a>
                    </div>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-4 py-2 bg-white bg-opacity-90 backdrop-blur-md rounded-full text-sm font-semibold text-navy-900">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-navy-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{project.description}</p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech, idx) => (
                      <span key={idx} className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Results */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-gray-500 mb-2">KEY RESULTS</h4>
                    {project.results.map((result, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                        {result}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Build Your Success Story
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Ready to join our portfolio of successful clients? Let's discuss your project today.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Start Your Project
          </a>
        </div>
      </section>
    </div>
  )
}