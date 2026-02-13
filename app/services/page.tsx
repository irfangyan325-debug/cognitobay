'use client'

import { FiCode, FiSmartphone, FiCloud, FiShield, FiTrendingUp, FiCpu, FiLayers, FiActivity, FiCheck } from 'react-icons/fi'

export default function ServicesPage() {
  const services = [
    {
      icon: FiCode,
      title: 'Web Development',
      description: 'Build powerful, scalable web applications that drive business growth.',
      features: [
        'Custom Web Applications',
        'E-commerce Platforms',
        'Progressive Web Apps (PWA)',
        'Content Management Systems',
        'API Development & Integration',
        'Responsive Design',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'MongoDB', 'PostgreSQL'],
      color: 'from-blue-600 to-cyan-500',
    },
    {
      icon: FiSmartphone,
      title: 'Mobile App Development',
      description: 'Create engaging mobile experiences for iOS and Android platforms.',
      features: [
        'Native iOS & Android Apps',
        'Cross-Platform Development',
        'Mobile UI/UX Design',
        'App Store Optimization',
        'Mobile Backend Solutions',
        'App Maintenance & Support',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase'],
      color: 'from-purple-600 to-pink-500',
    },
    {
      icon: FiCpu,
      title: 'AI & Machine Learning',
      description: 'Harness the power of AI to automate and optimize your business processes.',
      features: [
        'Predictive Analytics',
        'Natural Language Processing',
        'Computer Vision',
        'Chatbots & Virtual Assistants',
        'Recommendation Systems',
        'ML Model Development',
      ],
      technologies: ['Python', 'TensorFlow', 'PyTorch', 'OpenAI', 'Hugging Face'],
      color: 'from-green-600 to-teal-500',
    },
    {
      icon: FiCloud,
      title: 'Cloud Services',
      description: 'Migrate, deploy, and manage your applications on cloud infrastructure.',
      features: [
        'Cloud Architecture Design',
        'Cloud Migration Services',
        'Serverless Solutions',
        'Container Orchestration',
        'Cloud Security',
        'Cost Optimization',
      ],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes'],
      color: 'from-orange-600 to-red-500',
    },
    {
      icon: FiShield,
      title: 'Cybersecurity',
      description: 'Protect your digital assets with comprehensive security solutions.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'Vulnerability Assessment',
        'Security Compliance',
        'Incident Response',
        'Security Training',
      ],
      technologies: ['OWASP', 'Nessus', 'Metasploit', 'Wireshark', 'Snort'],
      color: 'from-red-600 to-rose-500',
    },
    {
      icon: FiLayers,
      title: 'DevOps Solutions',
      description: 'Streamline development with automated CI/CD and infrastructure.',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Monitoring & Logging',
        'Configuration Management',
        'Release Management',
      ],
      technologies: ['Jenkins', 'GitLab CI', 'Terraform', 'Ansible', 'Prometheus'],
      color: 'from-indigo-600 to-blue-500',
    },
    {
      icon: FiTrendingUp,
      title: 'Digital Marketing',
      description: 'Grow your online presence with data-driven marketing strategies.',
      features: [
        'Search Engine Optimization',
        'Pay-Per-Click Advertising',
        'Social Media Marketing',
        'Content Marketing',
        'Email Marketing',
        'Analytics & Reporting',
      ],
      technologies: ['Google Analytics', 'SEMrush', 'HubSpot', 'Mailchimp', 'Hootsuite'],
      color: 'from-yellow-600 to-orange-500',
    },
    {
      icon: FiActivity,
      title: 'IT Consulting',
      description: 'Get expert guidance on technology strategy and digital transformation.',
      features: [
        'Technology Strategy',
        'Digital Transformation',
        'IT Architecture Review',
        'Process Optimization',
        'Vendor Selection',
        'Project Management',
      ],
      technologies: ['TOGAF', 'ITIL', 'Agile', 'Scrum', 'SAFe'],
      color: 'from-cyan-600 to-blue-500',
    },
  ]

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-blue-900 to-navy-950 text-white">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-cyan-400 rounded-full text-sm font-semibold mb-6">
            Our Services
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Comprehensive IT Solutions for
            <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-500"> Every Need</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            From web development to AI solutions, we provide complete technology services that drive innovation and growth.
          </p>
        </div>
      </section>

      {/* Services Detail */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex p-4 bg-gradient-to-br ${service.color} rounded-xl mb-6`}>
                    <service.icon className="text-4xl text-white" />
                  </div>
                  <h2 className="text-4xl font-bold text-navy-900 mb-4">{service.title}</h2>
                  <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                  {/* Features */}
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start space-x-3">
                        <FiCheck className="text-green-600 text-xl mt-1 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-500 mb-3">TECHNOLOGIES WE USE</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image/Illustration */}
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className={`relative bg-gradient-to-br ${service.color} rounded-2xl p-12 h-96 flex items-center justify-center`}>
                    <service.icon className="text-9xl text-white opacity-20" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-20 rounded-2xl"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-blue-600 to-cyan-500 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Project?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Get a Free Consultation
          </a>
        </div>
      </section>
    </div>
  )
}