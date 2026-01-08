"use client"

import { useEffect, useRef, useState } from "react"

const guidelines = [
  {
    id: 1,
    title: "Nagar Palika Act",
    action: "Download PDF",
    actionType: "download",
    buttonColor: "bg-red-700 hover:bg-red-800",
  },
  {
    id: 2,
    title: "Construction Guidelines",
    action: "Download PDF",
    actionType: "download",
    buttonColor: "bg-red-700 hover:bg-red-800",
  },
  {
    id: 3,
    title: "Wards List",
    action: "View Map",
    actionType: "view",
    buttonColor: "bg-blue-700 hover:bg-blue-800",
  },
  {
    id: 4,
    title: "Eco Sensitive Zone",
    action: "Download PDF",
    actionType: "download",
    buttonColor: "bg-red-700 hover:bg-red-800",
  },
  {
    id: 5,
    title: "Restaurant Licences",
    action: "Apply Online",
    actionType: "apply",
    buttonColor: "bg-green-600 hover:bg-green-700",
  },
  {
    id: 6,
    title: "Land Purchase Guidelines",
    action: "Download PDF",
    actionType: "download",
    buttonColor: "bg-red-700 hover:bg-red-800",
  },
  {
    id: 7,
    title: "Tenders",
    action: "View Tenders",
    actionType: "view",
    buttonColor: "bg-gold hover:bg-gold-light text-header",
  },
  {
    id: 8,
    title: "Taxes",
    action: "Download PDF",
    actionType: "download",
    buttonColor: "bg-red-700 hover:bg-red-800",
  },
  {
    id: 9,
    title: "Budget",
    action: "Download PDF",
    actionType: "download",
    buttonColor: "bg-red-700 hover:bg-red-800",
  },
]

export default function GuidelinesSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative py-20 bg-[#2c4238]"
      style={{
        backgroundImage: `url('/placeholder.svg?height=800&width=800')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-[#2c4238]/90" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">ALL YOU NEED</span>
          <h2 className="text-white text-4xl md:text-5xl font-normal mt-2">Information & Guidelines</h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {guidelines.map((item, index) => (
            <div
              key={item.id}
              className={`bg-black/20 backdrop-blur-sm rounded-xl p-6 border-2 border-yellow-400/40 hover:border-yellow-400/60 transition-all duration-500 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 50 + 200}ms` }}
            >
              <h3 className="text-white text-xl font-semibold text-center mb-4">{item.title}</h3>
              <button className={`w-full py-3 rounded-lg text-white font-medium transition-colors ${item.buttonColor}`}>
                {item.action}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
