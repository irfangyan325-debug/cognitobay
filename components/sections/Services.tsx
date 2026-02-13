'use client'

import { FiCode, FiSmartphone, FiCloud, FiShield, FiTrendingUp, FiCpu, FiLayers, FiActivity } from 'react-icons/fi'

const Services = () => {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Build responsive, scalable, and high-performance web applications with cutting-edge technologies.',
      features: ['React & Next.js', 'Node.js Backend', 'Progressive Web Apps', 'E-commerce Solutions'],
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Create native and cross-platform mobile applications that deliver exceptional user experiences.',
      features: ['iOS & Android', 'React Native', 'Flutter', 'Custom Mobile Solutions'],
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Leverage artificial intelligence to automate processes and gain valuable business insights.',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'Chatbots & AI Assistants'],
      color: 'from-green-500 to-teal-500',
    },
    {
      icon: FiCloud,
      title: 'Cloud Services',
      description: 'Deploy, manage, and scale your applications with enterprise-grade cloud infrastructure.',
      features: ['AWS & Azure', 'Cloud Migration', 'Serverless Architecture', 'Microservices'],
      color: 'from-orange-500 to-red-500',
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Protect your business with comprehensive security solutions and vulnerability assessments.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance', 'Threat Monitoring'],
      color: 'from-red-500 to-rose-500',
    },
    {
      icon: FiLayers,
      title: 'DevOps Solutions',
      description: 'Streamline your development workflow with automated CI/CD pipelines and infrastructure.',
      features: ['CI/CD Pipelines', 'Docker & Kubernetes', 'Infrastructure as Code', 'Monitoring & Logging'],
      color: 'from-indigo-500 to-blue-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven marketing strategies and SEO optimization.',
      features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting'],
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: FiActivity,
      title: 'IT Consulting',
      description: 'Get expert guidance on technology strategy, digital transformation, and IT infrastructure.',
      features: ['Technology Strategy', 'Digital Transformation', 'IT Architecture', 'Process Optimization'],
      color: 'from-cyan-500 to-blue-500',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-6">
            Complete IT Solutions for
            <span className="gradient-text"> Every Business Need</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            From concept to deployment, we provide end-to-end technology services that drive innovation and accelerate growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                  <service.icon className="text-3xl text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Hover Effect Line */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <a
            href="/services"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Explore All Services
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Services