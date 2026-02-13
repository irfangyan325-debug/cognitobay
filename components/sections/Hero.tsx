'use client'

import { useEffect, useRef } from 'react'
import Link from 'next/link'
import { FiArrowRight, FiPlay } from 'react-icons/fi'

const Hero = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
    }> = []

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((particle, i) => {
        particle.x += particle.vx
        particle.y += particle.vy

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(9, 104, 201, 0.3)'
        ctx.fill()

        particles.forEach((otherParticle, j) => {
          if (i === j) return
          const dx = particle.x - otherParticle.x
          const dy = particle.y - otherParticle.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            ctx.beginPath()
            ctx.moveTo(particle.x, particle.y)
            ctx.lineTo(otherParticle.x, otherParticle.y)
            ctx.strokeStyle = `rgba(0, 217, 255, ${0.15 * (1 - distance / 150)})`
            ctx.lineWidth = 1
            ctx.stroke()
          }
        })
      })

      requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-navy-950 via-navy-900 to-navy-950">
      {/* Animated Background */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-0"
      />

      {/* Grid Overlay */}
      <div className="absolute inset-0 grid-background opacity-20"></div>

      {/* Gradient Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-float"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        <div className="max-w-5xl mx-auto space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white bg-opacity-10 backdrop-blur-md rounded-full border border-white border-opacity-20 animate-fade-in">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-black-900 text-sm font-medium">Trusted by 500+ Companies Worldwide</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-black-900 leading-tight animate-fade-in stagger-1">
            Transform Your Business
            <br />
            <span className="gradient-text text-white bg-gradient-to-r from-cyan-400 to-blue-500">
              With Innovation
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-900 max-w-3xl mx-auto leading-relaxed animate-fade-in stagger-2">
            CognitoBay delivers world-class IT solutions that drive growth, enhance efficiency, and accelerate digital transformation for businesses of all sizes.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-fade-in stagger-3">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold rounded-lg shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <FiArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              href="/portfolio"
              className="group px-8 py-4 bg-white bg-opacity-10 backdrop-blur-md text-black-900 font-semibold rounded-lg border-2 border-white border-opacity-30 hover:bg-opacity-20 transition-all duration-300 flex items-center space-x-2"
            >
              <FiPlay />
              <span>View Our Work</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 animate-fade-in stagger-4">
            {[
              { number: '500+', label: 'Projects Delivered' },
              { number: '98%', label: 'Client Satisfaction' },
              { number: '50+', label: 'Expert Team' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white border-opacity-30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero