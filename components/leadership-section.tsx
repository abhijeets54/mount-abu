"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const leaders = [
  {
    id: 1,
    name: "Shri Bhajan Lal Sharma",
    position: "Chief Minister, Rajasthan",
    image: "/indian-politician-formal-portrait-pink-shirt.jpg",
    message:
      "Mount Abu is not only a crown jewel of Rajasthan's tourism but also a symbol of our state's commitment to sustainable development and civic excellence. As Chief Minister, I am proud of the efforts being made by the Mount Abu Nagar Palika to preserve its natural beauty and enhance the quality of life for its residents and visitors. I encourage every citizen and tourist to experience the unique blend of spirituality, history, and nature that Mount Abu offers, and I assure continued support from the state government for its growth and prosperity.",
  },
  {
    id: 2,
    name: "Shri Jhabar Singh Kharra",
    position: "Hon'ble Minister of UDH",
    image: "/indian-politician-formal-portrait-rajasthani-turba.jpg",
    message:
      "Mount Abu represents the perfect harmony between urban development and environmental preservation. Our ministry is committed to ensuring that this hill station continues to thrive as a model for sustainable tourism while maintaining its ecological balance and cultural heritage.",
  },
]

export default function LeadershipSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextLeader = () => {
    setCurrentIndex((prev) => (prev + 1) % leaders.length)
  }

  const prevLeader = () => {
    setCurrentIndex((prev) => (prev - 1 + leaders.length) % leaders.length)
  }

  const currentLeader = leaders[currentIndex]

  return (
    <section ref={sectionRef} className="relative py-24 bg-[#2c4238] overflow-hidden">
      {/* Subtle background pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url('/indian-architectural-pattern-ornate.jpg')`,
          backgroundSize: "400px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">TESTIMONIALS</span>
          <h2 className="text-white text-4xl md:text-5xl font-normal mt-2">Leadership Messages</h2>
        </div>

        {/* Content */}
        <div
          className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Leader Image */}
          <div className="relative transition-all duration-1000 ease-in-out">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-yellow-400 relative z-10 transition-opacity duration-1000">
              <img
                key={currentLeader.id}
                src={currentLeader.image || "/placeholder.svg"}
                alt={currentLeader.name}
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              />
            </div>
            {/* Decorative ring */}
            <div className="absolute inset-0 w-64 h-64 md:w-80 md:h-80 rounded-full border border-yellow-400/30 transform translate-x-2 translate-y-2" />
          </div>

          {/* Leader Info */}
          <div className="flex-1 max-w-2xl transition-all duration-1000 ease-in-out">
            <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold uppercase tracking-wide transition-opacity duration-1000">{currentLeader.name}</h3>
            <p className="text-white text-lg font-medium mt-2 transition-opacity duration-1000">{currentLeader.position}</p>
            <p className="text-white/90 mt-6 leading-relaxed text-base md:text-lg transition-opacity duration-1000">{currentLeader.message}</p>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-12">
          <button
            onClick={prevLeader}
            className="w-12 h-12 rounded-full border border-yellow-400/50 flex items-center justify-center hover:bg-yellow-400/20 transition-colors"
            aria-label="Previous leader"
          >
            <ChevronLeft className="w-6 h-6 text-yellow-400" />
          </button>
          <button
            onClick={nextLeader}
            className="w-12 h-12 rounded-full border border-yellow-400/50 flex items-center justify-center hover:bg-yellow-400/20 transition-colors"
            aria-label="Next leader"
          >
            <ChevronRight className="w-6 h-6 text-yellow-400" />
          </button>
        </div>

        {/* Indicator dots */}
        <div className="flex justify-center gap-2 mt-6">
          {leaders.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${index === currentIndex ? "bg-yellow-400" : "bg-white/30"}`}
              aria-label={`Go to leader ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
