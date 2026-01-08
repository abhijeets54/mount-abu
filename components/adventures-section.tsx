"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const treks = [
  {
    id: 1,
    name: "Shanti Shikhar",
    from: "Limdi Kothi",
    description:
      "This is a calm and refreshing trek through forested paths of the Aravalli hills. The route is shaded and rich in natural vegetation, making it pleasant even during warmer months. Shanti Shikhar offers quiet surroundings and scenic views, ideal for relaxation and nature appreciation. The trek is easy to moderate and suitable for beginners.",
    guide: "Rabisankar Mishra",
    images: [
      "https://images.pexels.com/photos/1470169/pexels-photo-1470169.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    ],
  },
  {
    id: 2,
    name: "Aadesh Cave",
    from: "Town Center",
    description:
      "Explore the mystical Aadesh Cave, a hidden gem tucked away in the Aravalli hills. This moderate trek takes you through dense forest cover, offering glimpses of local wildlife and rare flora. The cave itself holds spiritual significance and provides a serene spot for meditation.",
    guide: "Local Forest Guide",
    images: [
      "https://images.pexels.com/photos/1470169/pexels-photo-1470169.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/417173/pexels-photo-417173.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1209843/pexels-photo-1209843.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    ],
    from: "Nakki Lake",
    description:
      "A scenic trek leading to one of Mount Abu's most spectacular viewpoints. Craigs Point offers panoramic views of the surrounding valleys and is especially beautiful during sunset. The trail passes through pine forests and rocky terrain.",
    guide: "Adventure Mount Abu",
    images: [
      "https://images.pexels.com/photos/1506681/pexels-photo-1506681.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    ],
  },
  {
    id: 4,
    name: "Table Rock",
    from: "Bailey's Walk",
    description:
      "A unique geological formation that has become a popular trekking destination. The flat-topped rock formation offers stunning views and a perfect spot for photography. The trek is moderately challenging with some steep sections.",
    guide: "Mount Abu Trekkers",
    images: [
      "https://images.pexels.com/photos/1933900/pexels-photo-1933900.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1619317/pexels-photo-1619317.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
      "https://images.pexels.com/photos/1268855/pexels-photo-1268855.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
    ],
  },
]

export default function AdventuresSection() {
  const [activeTrek, setActiveTrek] = useState(0)
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

  const handlePrev = () => {
    setActiveTrek((prev) => (prev === 0 ? treks.length - 1 : prev - 1))
  }

  const handleNext = () => {
    setActiveTrek((prev) => (prev === treks.length - 1 ? 0 : prev + 1))
  }

  const currentTrek = treks[activeTrek]

  return (
    <section ref={sectionRef} id="adventures" className="relative py-20 bg-[#2c4238]">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/placeholder.svg?height=1000&width=1600"
          alt="Aravalli Hills Background"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-[#2c4238]/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">ADVENTURES</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal mt-2">Eco Tourism & Adventures</h2>
        </div>

        {/* Trek Content */}
        <div
          className={`grid lg:grid-cols-2 gap-12 items-start transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left - Trek Info */}
          <div className="transition-all duration-1000 ease-in-out">
            <p className="text-white/70 text-base transition-opacity duration-1000">{currentTrek.from} To</p>
            <h3 className="text-yellow-400 text-3xl md:text-4xl font-bold uppercase tracking-wide mt-1 transition-opacity duration-1000">
              {currentTrek.name}
            </h3>
            <p className="text-white/90 mt-6 leading-relaxed text-base md:text-lg transition-opacity duration-1000">{currentTrek.description}</p>
            <p className="text-yellow-400 mt-4 transition-opacity duration-1000">
              Official Guides- <span className="underline">{currentTrek.guide}</span>
            </p>

            {/* Trek Timeline */}
            <div className="mt-10">
              <div className="flex items-center gap-4 overflow-x-auto pb-4">
                {treks.map((trek, index) => (
                  <button
                    key={trek.id}
                    onClick={() => setActiveTrek(index)}
                    className="flex flex-col items-start min-w-[140px] group"
                  >
                    <span className="text-white/50 text-sm mb-2">Trek {index + 1}</span>
                    <div className="flex items-center w-full">
                      <div
                        className={`w-4 h-4 rounded-full border-2 transition-colors ${
                          index === activeTrek
                            ? "bg-yellow-400 border-yellow-400"
                            : "bg-transparent border-yellow-400/50 group-hover:border-yellow-400"
                        }`}
                      />
                      <div
                        className={`flex-1 h-0.5 transition-colors ${index < activeTrek ? "bg-yellow-400" : "bg-yellow-400/30"}`}
                      />
                    </div>
                    <span
                      className={`text-sm uppercase tracking-wide mt-2 transition-colors ${
                        index === activeTrek ? "text-yellow-400" : "text-white/50"
                      }`}
                    >
                      {trek.name}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Details Button */}
            <button className="mt-8 px-8 py-3 bg-yellow-400/20 border border-yellow-400 text-yellow-400 rounded-lg hover:bg-yellow-400/30 transition-colors">
              Look For Details
            </button>
          </div>

          {/* Right - Images */}
          <div className="grid grid-cols-2 gap-4 transition-all duration-1000 ease-in-out">
            {/* Main Large Image */}
            <div className="col-span-2 md:col-span-1 row-span-2 rounded-xl overflow-hidden">
              <img
                key={currentTrek.id}
                src={currentTrek.images[0] || "/placeholder.svg"}
                alt={currentTrek.name}
                className="w-full h-full object-cover hover:scale-105 transition-all duration-1000 ease-in-out"
              />
            </div>
            {/* Small Images */}
            <div className="rounded-xl overflow-hidden transition-all duration-1000 ease-in-out">
              <img
                key={`${currentTrek.id}-2`}
                src={currentTrek.images[1] || "/placeholder.svg"}
                alt={`${currentTrek.name} view 2`}
                className="w-full h-40 object-cover hover:scale-105 transition-all duration-1000 ease-in-out"
              />
            </div>
            <div className="rounded-xl overflow-hidden transition-all duration-1000 ease-in-out">
              <img
                key={`${currentTrek.id}-3`}
                src={currentTrek.images[2] || "/placeholder.svg"}
                alt={`${currentTrek.name} view 3`}
                className="w-full h-40 object-cover hover:scale-105 transition-all duration-1000 ease-in-out"
              />
            </div>
          </div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex justify-end gap-4 mt-8">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-yellow-400/50 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition-colors"
            aria-label="Previous trek"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-yellow-400/50 flex items-center justify-center text-yellow-400 hover:bg-yellow-400/10 transition-colors"
            aria-label="Next trek"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  )
}
