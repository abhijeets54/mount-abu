"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"

const officials = [
  {
    name: "Shri Bhajan Lal Sharma",
    title: "Chief Minister, Rajasthan",
    image: "/indian-politician-man-formal-portrait.jpg",
  },
  {
    name: "Shri Jhabar Singh Kharra",
    title: "Hon'ble Minister of UDH",
    image: "/indian-politician-man-with-turban-portrait.jpg",
  },
]

const heroImages = [
  { image: "/guru-shikhar-mount-abu-winding-road-observatory.jpg", subtitle: "Guru Shikhar" },
  { image: "/sunset-point-mount-abu-orange-sky-mountains.jpg", subtitle: "Sunset Point" },
  { image: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1920&q=80", subtitle: "Achalgarh Fort" },
]

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const currentImage = heroImages[currentImageIndex]

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((item, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img src={item.image} alt={item.subtitle} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-start px-6 md:px-12 lg:px-20 pt-20">
        {/* Main Title */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-yellow-400 font-serif italic text-5xl md:text-7xl lg:text-8xl animate-fade-in block">
            Majestic
          </h2>
          <h1 className="text-white font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight block">
            Mount Abu
          </h1>
        </div>

        {/* Subtitle Label - positioned below title */}
        <div
          className={`transition-all duration-1000 delay-300 mt-8 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p
            key={currentImageIndex}
            className="text-yellow-400 text-2xl md:text-3xl lg:text-4xl font-bold animate-fade-in"
          >
            {currentImage?.subtitle}
          </p>
        </div>

        {/* Officials Cards */}
        <div
          className={`absolute bottom-20 md:bottom-24 right-8 md:right-16 flex gap-4 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          {officials.map((official, index) => (
            <div
              key={official.name}
              className="bg-black/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-lg p-4 w-40 md:w-48 text-center hover:border-yellow-400 transition-all duration-300 hover:scale-105"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-full overflow-hidden border-2 border-yellow-400/70">
                <img
                  src={official.image || "/placeholder.svg"}
                  alt={official.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-white text-sm md:text-base font-bold leading-tight">{official.name}</h3>
              <p className="text-white/90 text-xs md:text-sm mt-1">{official.title}</p>
            </div>
          ))}
        </div>

        {/* Explore Button */}
        <div
          className={`absolute bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
          }`}
        >
          <button className="flex flex-col items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors group">
            <span className="text-sm md:text-base tracking-widest uppercase font-semibold">EXPLORE</span>
            <ChevronDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  )
}
