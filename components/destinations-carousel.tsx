"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react"

const destinations = [
  {
    id: 1,
    name: "Nakki Lake",
    image: "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "A scenic lake surrounded by hills, perfect for boating and evening walks.",
  },
  {
    id: 2,
    name: "Guru Shikhar Observatory",
    image: "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The highest peak in Rajasthan offering panoramic views of the Aravalli ranges.",
  },
  {
    id: 3,
    name: "Dilwara Temples",
    image: "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "The Dilwara Temples are celebrated for their exquisite white marble carvings and architectural brilliance.",
  },
  {
    id: 4,
    name: "Sunset Point",
    image: "https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Witness breathtaking sunsets over the Aravalli hills.",
  },
  {
    id: 5,
    name: "Achalgarh Fort",
    image: "https://images.pexels.com/photos/1585663/pexels-photo-1585663.jpeg?auto=compress&cs=tinysrgb&w=800",
    description: "Ancient fort with historical significance and stunning architecture.",
  },
]

export default function DestinationsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(2)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % destinations.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + destinations.length) % destinations.length)
  }

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 4000) // Change slide every 4 seconds

    return () => clearInterval(interval)
  }, [currentIndex])

  const getCardStyle = (index: number) => {
    const diff = (index - currentIndex + destinations.length) % destinations.length

    if (diff === 0) {
      return "z-30 scale-110 opacity-100 translate-x-0"
    } else if (diff === 1) {
      return "z-20 scale-95 opacity-80 translate-x-[60%]"
    } else if (diff === destinations.length - 1) {
      return "z-20 scale-95 opacity-80 -translate-x-[60%]"
    } else if (diff === 2) {
      return "z-10 scale-75 opacity-60 translate-x-[120%]"
    } else if (diff === destinations.length - 2) {
      return "z-10 scale-75 opacity-60 -translate-x-[120%]"
    }
    return "z-0 scale-50 opacity-0"
  }

  return (
    <section className="relative min-h-screen py-20 bg-[#2c4238] overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-yellow-400 text-sm font-bold uppercase tracking-widest mb-4">DESTINATIONS</p>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal">
            Top Destinations To Visit
            <br />
            Mount Abu
          </h2>
        </div>

        <div className="relative h-[600px] flex items-center justify-center mb-12">
          {destinations.map((destination, index) => (
            <div
              key={destination.id}
              className={`absolute transition-all duration-1000 ease-in-out ${getCardStyle(index)}`}
            >
              <div className="relative w-[280px] md:w-[380px] h-[480px] rounded-2xl overflow-hidden shadow-2xl group">
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                {index === currentIndex && (
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                    <button className="absolute top-6 right-6 w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-black/80 transition-colors duration-300">
                      <ArrowUpRight size={20} className="text-white" />
                    </button>
                    <h3 className="text-2xl md:text-3xl font-bold mb-3">{destination.name}</h3>
                    <p className="text-gray-200 text-sm md:text-base leading-relaxed">{destination.description}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Previous destination"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center text-white hover:bg-white/10 transition-all duration-300"
            aria-label="Next destination"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
