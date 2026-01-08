"use client"

import { useEffect, useRef, useState } from "react"

const services = [
  {
    id: 1,
    title: "Digital Construction Token",
    description: "Instant eco-zone approvals with QR token generation",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 2,
    title: "Complaint Redressal & Tracking",
    description: "File complaints without login, get real-time SMS updates",
    image: "https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 3,
    title: "Vital Certificates (Birth/Death)",
    description: "Instant download from government portal",
    image: "https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "#",
  },
  {
    id: 4,
    title: "Marriage Certificate",
    description: "Register marriage digitally, get certified copy online",
    image: "https://images.pexels.com/photos/265895/pexels-photo-265895.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    link: "#",
  },
]

export default function DigitalServicesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(44, 66, 56, 0.85), rgba(44, 66, 56, 0.9)), url('https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">SERVICES</span>
          <h2 className="text-white text-4xl md:text-5xl font-normal mt-2">Streamlined Digital Services</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`group bg-black/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-yellow-400/30 hover:border-yellow-400/50 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100 + 200}ms` }}
            >
              {/* Image */}
              <div className="h-48 overflow-hidden rounded-xl m-3">
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-4 pt-0">
                <h3 className="text-white text-lg font-bold">{service.title}</h3>
                <p className="text-white/70 text-sm mt-2">{service.description}</p>
                <a href={service.link} className="text-yellow-400 text-sm mt-4 inline-block hover:underline">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
