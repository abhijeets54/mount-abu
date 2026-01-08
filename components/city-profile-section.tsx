"use client"

import { useEffect, useRef, useState } from "react"

const cityStats = [
  { label: "Area In Sq. km.", value: "21.64 sq. km" },
  { label: "No. of wards", value: "25" },
  { label: "Population estimate", value: "30,545" },
  { label: "Ward boundries", value: "Attached", isLink: true },
  { label: "Rental Properties of corporation", value: "25" },
  { label: "Number of Slums", value: "0" },
  { label: "Solid waste per day", value: "9.1 Tones" },
  { label: "Street Light poles", value: "150" },
  { label: "No. of employee in the municipal board", value: "135" },
]

const householdStats = [
  { label: "Residential", value: "4500" },
  { label: "Shops & Offices", value: "550" },
  { label: "Open Plots", value: "0" },
]

const birthDeathStats = [
  { label: "Registration per year", value: "800" },
  { label: "Certificate per year", value: "900" },
]

export default function CityProfileSection() {
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
    <section ref={sectionRef} id="city-profile" className="relative py-20 min-h-screen flex items-center bg-[#5a6c66]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src="/dilwara-temples-mount-abu-intricate-marble-carving.jpg" alt="Dilwara Temples Background" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-[#5a6c66]/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">CITY PROFILE</span>
          <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-normal mt-2">Mount Abu And Its Environment</h2>
        </div>

        {/* Stats Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Column - Main Stats */}
          <div
            className={`bg-black/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-lg p-6 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <table className="w-full">
              <tbody>
                {cityStats.map((stat, index) => (
                  <tr key={stat.label} className="border-b border-white/10 last:border-0">
                    <td className="py-3 text-white/90">{stat.label}</td>
                    <td className="py-3 text-right">
                      {stat.isLink ? (
                        <a href="#" className="text-yellow-400 hover:text-yellow-300 underline transition-colors">
                          {stat.value}
                        </a>
                      ) : (
                        <span className="text-white font-medium">{stat.value}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Right Column - Household & Birth/Death Stats */}
          <div className="flex flex-col gap-6">
            {/* Household Stats */}
            <div
              className={`bg-black/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-lg p-6 transition-all duration-700 delay-300 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-white text-xl font-semibold text-center mb-4">No of House holds</h3>
              <table className="w-full">
                <tbody>
                  {householdStats.map((stat) => (
                    <tr key={stat.label} className="border-b border-white/10 last:border-0">
                      <td className="py-3 text-white/90">{stat.label}</td>
                      <td className="py-3 text-right text-white font-medium">{stat.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Birth/Death Stats */}
            <div
              className={`bg-black/20 backdrop-blur-sm border-2 border-yellow-400/50 rounded-lg p-6 transition-all duration-700 delay-400 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <h3 className="text-white text-xl font-semibold text-center mb-4">Birth/Death</h3>
              <table className="w-full">
                <tbody>
                  {birthDeathStats.map((stat) => (
                    <tr key={stat.label} className="border-b border-white/10 last:border-0">
                      <td className="py-3 text-white/90">{stat.label}</td>
                      <td className="py-3 text-right text-white font-medium">{stat.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
