"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const hiddenPlaces = [
  {
    id: 1,
    name: "Nakki Lake",
    description:
      "Mount Abu is not only a crown jewel of Rajasthan's tourism but also a symbol of our state's commitment to sustainable development and civic excellence. As Chief Minister, I am proud of the efforts being made by the Mount Abu",
    images: [
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/1578750/pexels-photo-1578750.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    ],
  },
  {
    id: 2,
    name: "Guru Shikhar",
    description:
      "The highest peak in the Aravalli Range, Guru Shikhar offers breathtaking panoramic views and houses the ancient Dattatreya Temple. A must-visit for trekkers and spiritual seekers alike.",
    images: [
      "https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    ],
  },
  {
    id: 3,
    name: "Trevor's Tank",
    description:
      "A serene crocodile breeding spot surrounded by lush forests. This hidden gem is perfect for wildlife enthusiasts and bird watchers seeking tranquility away from the crowds.",
    images: [
      "https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&fit=crop",
      "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
      "https://images.pexels.com/photos/1108701/pexels-photo-1108701.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop"
    ],
  },
]

export default function HiddenPlacesSection() {
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

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % hiddenPlaces.length)
    }, 5000) // Change place every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextPlace = () => {
    setCurrentIndex((prev) => (prev + 1) % hiddenPlaces.length)
  }

  const prevPlace = () => {
    setCurrentIndex((prev) => (prev - 1 + hiddenPlaces.length) % hiddenPlaces.length)
  }

  const currentPlace = hiddenPlaces[currentIndex]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 min-h-[700px] bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(44, 66, 56, 0.4), rgba(44, 66, 56, 0.6)), url('https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">HIDDEN PLACES</span>
          <h2 className="text-white text-4xl md:text-5xl font-normal mt-2">Unexplored Gems Of Mount Abu</h2>
        </div>

        {/* Content Grid */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-end transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left - Text Content */}
          <div>
            <h3 className="text-yellow-400 text-2xl md:text-3xl font-bold uppercase tracking-wide">{currentPlace.name}</h3>
            <p className="text-white/90 mt-4 leading-relaxed max-w-lg">{currentPlace.description}</p>

            <div className="flex items-center gap-4 mt-8">
              <button className="bg-yellow-400/20 border border-yellow-400 text-yellow-400 hover:bg-yellow-400/30 px-6 py-2 rounded transition-colors duration-300">
                View More
              </button>

              {/* Navigation */}
              <div className="flex gap-2 ml-4">
                <button
                  onClick={prevPlace}
                  className="w-10 h-10 rounded-full border border-yellow-400/50 flex items-center justify-center hover:bg-yellow-400/10 transition-colors"
                  aria-label="Previous place"
                >
                  <ChevronLeft className="w-5 h-5 text-yellow-400" />
                </button>
                <button
                  onClick={nextPlace}
                  className="w-10 h-10 rounded-full border border-yellow-400/50 flex items-center justify-center hover:bg-yellow-400/10 transition-colors"
                  aria-label="Next place"
                >
                  <ChevronRight className="w-5 h-5 text-yellow-400" />
                </button>
              </div>
            </div>
          </div>

          {/* Right - Image Gallery */}
          <div className="flex gap-4 justify-end">
            {/* Main Image */}
            <div className="w-64 h-80 rounded-2xl overflow-hidden border-2 border-yellow-400/50 shadow-xl transform transition-all duration-1000 ease-in-out hover:scale-105 hover:border-yellow-400">
              <img
                key={currentPlace.id}
                src={currentPlace.images[0] || "/placeholder.svg"}
                alt={currentPlace.name}
                className="w-full h-full object-cover transition-transform duration-1000 ease-in-out hover:scale-110"
              />
            </div>

            {/* Side Images */}
            <div className="flex flex-col gap-4">
              <div className="w-40 h-36 rounded-xl overflow-hidden shadow-lg border border-yellow-400/30 transform transition-all duration-700 delay-100 hover:scale-105 hover:border-yellow-400/70 animate-slide-up">
                <img
                  src={currentPlace.images[1] || "/placeholder.svg"}
                  alt={`${currentPlace.name} view 2`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="w-40 h-36 rounded-xl overflow-hidden shadow-lg border border-yellow-400/30 transform transition-all duration-700 delay-200 hover:scale-105 hover:border-yellow-400/70 animate-slide-up">
                <img
                  src={currentPlace.images[2] || "/placeholder.svg"}
                  alt={`${currentPlace.name} view 3`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
