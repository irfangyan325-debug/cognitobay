'use client'

import { FiCheckCircle, FiClock, FiDollarSign, FiHeadphones, FiShield, FiZap } from 'react-icons/fi'

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: FiZap,
      title: 'Lightning-Fast Delivery',
      description: 'Agile development methodology ensures rapid deployment without compromising quality.',
    },
    {
      icon: FiCheckCircle,
      title: 'Proven Track Record',
      description: '500+ successful projects with 98% client satisfaction rate across diverse industries.',
    },
    {
      icon: FiHeadphones,
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance to keep your systems running smoothly.',
    },
    {
      icon: FiShield,
      title: 'Enterprise Security',
      description: 'Bank-level security protocols and compliance with international data protection standards.',
    },
    {
      icon: FiDollarSign,
      title: 'Cost-Effective Solutions',
      description: 'Competitive pricing with transparent costs and no hidden fees or surprise charges.',
    },
    {
      icon: FiClock,
      title: 'On-Time Delivery',
      description: 'Strict adherence to deadlines with milestone-based project management approach.',
    },
  ]

  return (
    <section className="section-padding bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 dot-background opacity-30"></div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Why CognitoBay
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-6">
            Why Leading Companies
            <span className="gradient-text"> Choose Us</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            We combine technical excellence with business expertise to deliver solutions that drive real results.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-200 relative overflow-hidden"
            >
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-5 transition-opacity duration-500"></div>

              {/* Number Badge */}
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="relative z-10 mb-6">
                <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-lg transform group-hover:scale-110 transition-all duration-500">
                  <reason.icon className="text-3xl text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-navy-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-8 md:p-12">
            <h3 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have accelerated their growth with CognitoBay.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
              >
                Schedule a Consultation
              </a>
              <a
                href="/portfolio"
                className="px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg border-2 border-blue-600 hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Success Stories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs