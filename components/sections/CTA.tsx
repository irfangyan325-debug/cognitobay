'use client'

import Link from 'next/link'
import { FiArrowRight, FiMail, FiPhone } from 'react-icons/fi'

const CTA = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-navy-950 via-blue-900 to-navy-950 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container-custom relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Content */}
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-cyan-400 rounded-full text-sm font-semibold mb-6">
            Let's Build Something Amazing
          </span>
          
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 leading-tight">
            Ready to Transform Your
            <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {' '}Digital Future?
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Partner with CognitoBay and unlock the full potential of technology for your business. Let's create something extraordinary together.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            <Link
              href="/contact"
              className="group w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Start Your Project</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/services"
              className="w-full sm:w-auto px-8 py-4 bg-white bg-opacity-10 backdrop-blur-md text-white font-semibold rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300"
            >
              Explore Services
            </Link>
          </div>

          {/* Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <a
              href="mailto:info@cognitobay.com"
              className="group bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                  <FiMail className="text-2xl" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400 mb-1">Email Us</div>
                  <div className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    info@cognitobay.com
                  </div>
                </div>
              </div>
            </a>

            <a
              href="tel:+15551234567"
              className="group bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                  <FiPhone className="text-2xl" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-gray-400 mb-1">Call Us</div>
                  <div className="text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-12 border-t border-white border-opacity-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-400 text-sm">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">98%</div>
                <div className="text-gray-400 text-sm">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support Available</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA