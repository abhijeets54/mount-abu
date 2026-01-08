"use client"

import { useEffect, useRef, useState } from "react"

export default function AboutSection() {
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
    <section ref={sectionRef} id="about" className="relative">
      {/* Torn Paper Edge Top */}
      <div className="absolute top-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 100" className="absolute -top-1 w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,0 L0,60 Q60,80 120,55 T240,65 T360,50 T480,70 T600,55 T720,65 T840,50 T960,60 T1080,45 T1200,65 T1320,55 T1440,60 L1440,0 Z"
            fill="#2c4238"
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="bg-cream pt-32 pb-20">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div
              className={`transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">ABOUT</span>
              <h2 className="text-header text-3xl md:text-4xl lg:text-5xl font-normal mt-2">Welcome To</h2>
              <h3 className="text-header text-4xl md:text-5xl lg:text-6xl font-bold">Mount Abu</h3>
              <p className="text-header/80 text-lg mt-4 font-normal">Discover Rajasthan's Only Hill Station</p>
              <p className="text-header/70 mt-6 leading-relaxed text-base md:text-lg">
                Nestled in the Aravalli Hills, Mount Abu is Rajasthan's only hill station—blessed with cool climate,
                lush greenery, serene lakes, and ancient temples. A perfect blend of nature, spirituality, and
                adventure, it welcomes travelers year-round.
              </p>

              {/* Nagar Palika Building Image */}
              <div className="mt-8 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/indian-government-building-night-golden-lights-mou.jpg"
                  alt="Nagar Palika Mount Abu Building"
                  className="w-full h-64 md:h-80 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Right Content */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              {/* Sunset Viewpoint Image */}
              <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src="/mount-abu-sunset-viewpoint-tourists-scenic-overloo.jpg"
                  alt="Mount Abu Sunset Viewpoint"
                  className="w-full h-72 md:h-96 object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Nagar Palika Info */}
              <div className="mt-12 text-right">
                <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">ABOUT</span>
                <h3 className="text-header text-3xl md:text-4xl font-bold mt-2">Nagar Palika</h3>
                <h4 className="text-header text-3xl md:text-4xl font-bold">Mount Abu</h4>
                <p className="text-header/80 text-lg mt-4 font-normal">Serving Our Community</p>
                <p className="text-header/70 mt-4 leading-relaxed">
                  Nagar Palika Mount Abu is dedicated to developing and maintaining the city's beauty, infrastructure,
                  and public services. With a focus on tourism, sustainability, and citizen welfare, it ensures Mount
                  Abu remains clean, vibrant, and welcoming for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Torn Paper Edge Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-24 overflow-hidden">
        <svg viewBox="0 0 1440 100" className="absolute -bottom-1 w-full h-full" preserveAspectRatio="none">
          <path
            d="M0,100 L0,40 Q60,20 120,45 T240,35 T360,50 T480,30 T600,45 T720,35 T840,50 T960,40 T1080,55 T1200,35 T1320,45 T1440,40 L1440,100 Z"
            fill="#5a6c66"
          />
        </svg>
      </div>
    </section>
  )
}
