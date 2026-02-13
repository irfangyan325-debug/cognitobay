'use client'

import { FiStar } from 'react-icons/fi'

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      position: 'CEO, TechStart Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      rating: 5,
      text: 'CognitoBay transformed our entire digital infrastructure. Their team\'s expertise and dedication resulted in a 200% increase in our operational efficiency. Absolutely exceptional service!',
    },
    {
      name: 'Michael Chen',
      position: 'CTO, FinanceFlow',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Working with CognitoBay was a game-changer. They delivered a robust, scalable platform that exceeded all our expectations. Their technical prowess is unmatched.',
    },
    {
      name: 'Emily Rodriguez',
      position: 'Founder, HealthTech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      rating: 5,
      text: 'The AI solution CognitoBay developed for us has revolutionized our patient care process. Their innovative approach and attention to detail are truly impressive.',
    },
    {
      name: 'David Kim',
      position: 'VP of Technology, RetailHub',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'CognitoBay\'s e-commerce solution increased our online sales by 350%. Their team understood our vision and delivered beyond what we imagined possible.',
    },
    {
      name: 'Lisa Anderson',
      position: 'Director, Global Enterprises',
      image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop',
      rating: 5,
      text: 'Outstanding service from start to finish. CognitoBay\'s cloud migration strategy saved us thousands while improving our system performance dramatically.',
    },
    {
      name: 'James Wright',
      position: 'COO, Manufacturing Pro',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop',
      rating: 5,
      text: 'The custom software CognitoBay built streamlined our entire supply chain. Their professionalism and expertise made the complex project seamless.',
    },
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-4">
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy-900 mb-6">
            Trusted by Industry
            <span className="gradient-text"> Leaders Worldwide</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about working with CognitoBay.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden"
            >
              {/* Quote Icon Background */}
              <div className="absolute top-0 right-0 text-9xl text-blue-50 font-serif leading-none opacity-50 group-hover:opacity-100 transition-opacity duration-500">
                "
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4 relative z-10">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FiStar key={i} className="text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-700 leading-relaxed mb-6 relative z-10 italic">
                "{testimonial.text}"
              </p>

              {/* Author Info */}
              <div className="flex items-center space-x-4 relative z-10">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-blue-600"
                />
                <div>
                  <h4 className="font-bold text-navy-900 group-hover:text-blue-600 transition-colors duration-300">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600">{testimonial.position}</p>
                </div>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-cyan-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <p className="text-center text-gray-600 mb-8 text-lg font-semibold">
            Trusted by Leading Organizations
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
            {['Microsoft', 'Amazon', 'Google', 'IBM', 'Oracle', 'SAP'].map((company, index) => (
              <div key={index} className="text-2xl font-bold text-gray-600">
                {company}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials