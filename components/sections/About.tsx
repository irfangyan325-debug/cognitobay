'use client'

import { FiAward, FiUsers, FiTarget, FiTrendingUp } from 'react-icons/fi'

const About = () => {
  const values = [
    {
      icon: FiAward,
      title: 'Excellence',
      description: 'We deliver exceptional quality in every project, exceeding client expectations consistently.',
    },
    {
      icon: FiUsers,
      title: 'Collaboration',
      description: 'We work as partners with our clients, fostering transparent and productive relationships.',
    },
    {
      icon: FiTarget,
      title: 'Innovation',
      description: 'We stay ahead of technology trends, bringing cutting-edge solutions to every challenge.',
    },
    {
      icon: FiTrendingUp,
      title: 'Growth',
      description: 'We focus on scalable solutions that grow with your business and adapt to changing needs.',
    },
  ]

  return (
    <section className="section-padding bg-navy-950 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-background opacity-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="inline-block px-4 py-2 bg-blue-600 bg-opacity-20 text-cyan-400 rounded-full text-sm font-semibold mb-4">
              About CognitoBay
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6">
              Your Trusted Partner in
              <span className="gradient-text bg-gradient-to-r from-cyan-400 to-blue-500"> Digital Excellence</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              CognitoBay is a leading full-service IT company dedicated to empowering businesses through innovative technology solutions. We combine technical expertise with business acumen to deliver transformative results.
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              With a team of 50+ seasoned professionals and 500+ successful projects, we've established ourselves as a trusted partner for startups, SMBs, and enterprises worldwide. Our comprehensive suite of services covers every aspect of digital transformation.
            </p>

            {/* Mission & Vision */}
            <div className="space-y-6">
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver world-class IT solutions that drive business growth, enhance operational efficiency, and create lasting competitive advantages for our clients.
                </p>
              </div>
              <div className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10">
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in innovative IT services, recognized for excellence, integrity, and transformative impact on businesses worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Right Content - Values */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center lg:text-left">Our Core Values</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white bg-opacity-5 backdrop-blur-md rounded-xl p-6 border border-white border-opacity-10 hover:bg-opacity-10 transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl group"
                >
                  <div className="mb-4">
                    <div className="inline-flex p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                      <value.icon className="text-2xl text-white" />
                    </div>
                  </div>
                  <h4 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">8+</div>
                <div className="text-gray-400 text-sm">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">25+</div>
                <div className="text-gray-400 text-sm">Countries Served</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-400 text-sm">Industries</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About