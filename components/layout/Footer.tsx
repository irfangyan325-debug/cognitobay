'use client'

import Link from 'next/link'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'
import { MdEmail, MdPhone, MdLocationOn } from 'react-icons/md'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const services = [
    'Web Development',
    'Mobile App Development',
    'AI Solutions',
    'Cloud Services',
    'Cybersecurity',
    'Digital Marketing',
  ]

  const company = [
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Contact', href: '/contact' },
  ]

  const socialLinks = [
    { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
    { icon: FaTwitter, href: '#', label: 'Twitter' },
    { icon: FaGithub, href: '#', label: 'GitHub' },
    { icon: FaFacebook, href: '#', label: 'Facebook' },
    { icon: FaInstagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-navy-950 text-white">
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">CB</span>
              </div>
              <span className="text-2xl font-display font-bold">CognitoBay</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transforming businesses with innovative IT solutions. Your trusted partner for digital excellence.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 bg-navy-900 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 transition-all duration-300 transform hover:-translate-y-1"
                >
                  <social.icon className="text-lg" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="/services"
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">Company</h3>
            <ul className="space-y-3">
              {company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-cyan-500 transition-colors duration-300 flex items-center group"
                  >
                    <span className="mr-2 text-cyan-500 group-hover:translate-x-1 transition-transform duration-300">→</span>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <MdEmail className="text-cyan-500 text-xl mt-1 flex-shrink-0" />
                <span>info@cognitobay.com</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MdPhone className="text-cyan-500 text-xl mt-1 flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MdLocationOn className="text-cyan-500 text-xl mt-1 flex-shrink-0" />
                <span>123 Tech Street, Silicon Valley, CA 94025</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-navy-900">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} CognitoBay. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-cyan-500 transition-colors duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer