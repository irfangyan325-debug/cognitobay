'use client'

import { useState } from 'react'
import { FiMail, FiPhone, FiMapPin, FiSend } from 'react-icons/fi'
import { FaLinkedin, FaTwitter, FaGithub, FaFacebook } from 'react-icons/fa'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // This will be connected to backend later
    console.log('Form submitted:', formData)
    alert('Thank you for your inquiry! We will get back to you soon.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-blue-900 to-navy-950 text-white">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-cyan-400 rounded-full text-sm font-semibold mb-6">
            Get In Touch
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Let's Build Something
            <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-500"> Amazing Together</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Have a project in mind? We'd love to hear from you. Get in touch and let's start the conversation.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold text-navy-900 mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24 hours.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                    <FiMail className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Email</h3>
                    <a href="mailto:info@cognitobay.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                      info@cognitobay.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                    <FiPhone className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Phone</h3>
                    <a href="tel:+15551234567" className="text-gray-600 hover:text-blue-600 transition-colors">
                      +1 (555) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                    <FiMapPin className="text-2xl text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy-900 mb-1">Office</h3>
                    <p className="text-gray-600">
                      123 Tech Street<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="font-semibold text-navy-900 mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  {[
                    { icon: FaLinkedin, href: '#' },
                    { icon: FaTwitter, href: '#' },
                    { icon: FaGithub, href: '#' },
                    { icon: FaFacebook, href: '#' },
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-500 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <social.icon className="text-xl" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                      placeholder="Your Company"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select a service</option>
                      <option value="web-development">Web Development</option>
                      <option value="mobile-development">Mobile App Development</option>
                      <option value="ai-ml">AI & Machine Learning</option>
                      <option value="cloud-services">Cloud Services</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="devops">DevOps Solutions</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="it-consulting">IT Consulting</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
                      Project Budget
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"
                    >
                      <option value="">Select budget range</option>
                      <option value="under-10k">Under $10,000</option>
                      <option value="10k-25k">$10,000 - $25,000</option>
                      <option value="25k-50k">$25,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="over-100k">Over $100,000</option>
                    </select>
                  </div>
                </div>

                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Project Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <span>Send Message</span>
                  <FiSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="h-96 bg-gray-200">
        <div className="w-full h-full flex items-center justify-center">
          <div className="text-center">
            <FiMapPin className="text-6xl text-gray-400 mx-auto mb-4" />
            <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
          </div>
        </div>
      </section>
    </div>
  )
}