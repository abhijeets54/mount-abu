"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const newsItems = [
  {
    id: 1,
    label: "Fairs and Festivals for the next 5 years",
    title: "Experience Mount Abu's Vibrant Festivals",
    period: "2025-26 To 2029-30",
    image: "https://images.pexels.com/photos/3052360/pexels-photo-3052360.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 2,
    label: "Annual Tourism Report",
    title: "Mount Abu Tourism Milestones",
    period: "2024-25",
    image: "https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: 3,
    label: "Infrastructure Development",
    title: "New Road Projects & Facilities",
    period: "2025-26",
    image: "https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
]

export default function NewsUpdatesSection() {
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
      setCurrentIndex((prev) => (prev + 1) % newsItems.length)
    }, 5000) // Change slide every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % newsItems.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length)
  }

  const currentItem = newsItems[currentIndex]

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(92, 82, 70, 0.85), rgba(92, 82, 70, 0.9)), url('https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&w=1920')`,
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`flex justify-between items-start mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div>
            <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">UPDATES</span>
            <h2 className="text-white text-4xl md:text-5xl font-normal mt-2">News & Updates</h2>
          </div>
          <button className="border border-yellow-400/50 text-yellow-400 hover:bg-yellow-400/20 px-6 py-2 rounded transition-colors duration-300">
            View More
          </button>
        </div>

        {/* News Card */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="bg-cream rounded-3xl overflow-hidden flex flex-col lg:flex-row max-w-5xl mx-auto">
            {/* Text Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-between lg:w-1/2">
              <div>
                <p className="text-header/60 text-sm">{currentItem.label}</p>
                <h3 className="text-teal text-2xl md:text-3xl font-bold mt-2 leading-tight">{currentItem.title}</h3>
                <p className="text-header/70 mt-4">{currentItem.period}</p>
              </div>

              <div className="mt-8 flex items-center gap-4">
                {/* Navigation */}
                <div className="flex gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-10 h-10 rounded-full border border-header/20 flex items-center justify-center hover:bg-header/10 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5 text-header/60" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-10 h-10 rounded-full border border-header/20 flex items-center justify-center hover:bg-header/10 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5 text-header/60" />
                  </button>
                </div>

                {/* Download Button */}
                <button className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-full transition-colors duration-300 ml-auto">
                  Download PDF
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="lg:w-1/2 h-64 lg:h-auto">
              <img
                key={currentItem.id}
                src={currentItem.image || "/placeholder.svg"}
                alt={currentItem.title}
                className="w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Bottom Navigation Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {newsItems.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-8 h-8 rounded-full border flex items-center justify-center transition-colors ${
                index === currentIndex ? "border-yellow-400 bg-yellow-400/20" : "border-white/30 hover:border-white/50"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            >
              {index === currentIndex && <ChevronRight className="w-4 h-4 text-yellow-400" />}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
