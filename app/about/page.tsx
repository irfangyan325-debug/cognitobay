'use client'

import { FiUsers, FiTarget, FiAward, FiTrendingUp } from 'react-icons/fi'

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-navy-950 via-blue-900 to-navy-950 text-white">
        <div className="container-custom text-center">
          <span className="inline-block px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md text-cyan-400 rounded-full text-sm font-semibold mb-6">
            About CognitoBay
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold mb-6">
            Empowering Businesses Through
            <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-500"> Technology</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            We're a team of passionate innovators dedicated to transforming businesses through cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Founded in 2016, CognitoBay emerged from a simple yet powerful vision: to bridge the gap between complex technology and business success. What started as a small team of passionate developers has grown into a full-service IT powerhouse serving clients across 25+ countries.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Today, we're proud to be a trusted partner for startups, SMBs, and Fortune 500 companies alike. Our success is built on a foundation of technical excellence, innovative thinking, and an unwavering commitment to client success.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                With 500+ successful projects and a 98% client satisfaction rate, we continue to push boundaries and set new standards in the IT services industry.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">8+</div>
                <div className="text-lg">Years of Excellence</div>
              </div>
              <div className="bg-gradient-to-br from-purple-600 to-pink-500 rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">500+</div>
                <div className="text-lg">Projects Delivered</div>
              </div>
              <div className="bg-gradient-to-br from-green-600 to-teal-500 rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">50+</div>
                <div className="text-lg">Team Members</div>
              </div>
              <div className="bg-gradient-to-br from-orange-600 to-red-500 rounded-2xl p-8 text-white">
                <div className="text-5xl font-bold mb-2">25+</div>
                <div className="text-lg">Countries Served</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <div className="inline-flex p-4 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl mb-6">
                <FiTarget className="text-4xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To deliver world-class IT solutions that drive business growth, enhance operational efficiency, and create lasting competitive advantages for our clients. We strive to be more than a service provider – we aim to be a strategic partner in our clients' success journey.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-xl">
              <div className="inline-flex p-4 bg-gradient-to-br from-purple-600 to-pink-500 rounded-xl mb-6">
                <FiAward className="text-4xl text-white" />
              </div>
              <h2 className="text-3xl font-bold text-navy-900 mb-4">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                To be the global leader in innovative IT services, recognized for excellence, integrity, and transformative impact on businesses worldwide. We envision a future where technology empowers every organization to reach its full potential.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-navy-900 mb-6">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and define who we are as a company.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: FiAward,
                title: 'Excellence',
                description: 'We pursue excellence in every project, delivering solutions that exceed expectations.',
              },
              {
                icon: FiUsers,
                title: 'Collaboration',
                description: 'We believe in the power of teamwork and transparent communication.',
              },
              {
                icon: FiTrendingUp,
                title: 'Innovation',
                description: 'We stay ahead of the curve, embracing new technologies and methodologies.',
              },
              {
                icon: FiTarget,
                title: 'Integrity',
                description: 'We operate with honesty, transparency, and ethical business practices.',
              },
            ].map((value, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex p-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl mb-6 transform group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="text-4xl text-white" />
                </div>
                <h3 className="text-2xl font-bold text-navy-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}