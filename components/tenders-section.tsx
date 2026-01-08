"use client"

import { useEffect, useRef, useState } from "react"
import { ArrowUpDown } from "lucide-react"

const tenders = [
  {
    id: 1,
    title: "Road Construction - Nakki Lake Area",
    department: "PWD",
    value: "₹45,00,000",
    closingDate: "15 Feb 2026",
  },
  {
    id: 2,
    title: "Street Light Installation Phase 2",
    department: "Electrical",
    value: "₹12,50,000",
    closingDate: "20 Feb 2026",
  },
  {
    id: 3,
    title: "Garden Maintenance Contract",
    department: "Horticulture",
    value: "₹8,75,000",
    closingDate: "28 Feb 2026",
  },
  {
    id: 4,
    title: "Waste Management Equipment",
    department: "Sanitation",
    value: "₹22,00,000",
    closingDate: "05 Mar 2026",
  },
  {
    id: 5,
    title: "Public Toilet Construction",
    department: "Civil",
    value: "₹15,00,000",
    closingDate: "10 Mar 2026",
  },
  {
    id: 6,
    title: "Water Supply Pipeline Repair",
    department: "Water Works",
    value: "₹18,50,000",
    closingDate: "15 Mar 2026",
  },
]

export default function TendersSection() {
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
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(44, 66, 56, 0.7), rgba(44, 66, 56, 0.85)), url('/mount-abu-sunset-hills-orange-sky-scenic.jpg')`,
      }}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">TENDER</span>
          <h2 className="text-white text-3xl md:text-4xl font-normal mt-2 max-w-3xl mx-auto">
            View Active Municipal Tenders With Key Details And NIT Downloads.
          </h2>
        </div>

        {/* Table */}
        <div
          className={`overflow-x-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="bg-yellow-400 text-black">
                <th className="px-6 py-4 text-left font-semibold rounded-l-lg">Tender Title</th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    Department
                    <ArrowUpDown className="w-4 h-4" />
                  </span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">
                  <span className="flex items-center gap-2">
                    Estimated Value
                    <ArrowUpDown className="w-4 h-4" />
                  </span>
                </th>
                <th className="px-6 py-4 text-left font-semibold">Bid Closing Date</th>
                <th className="px-6 py-4 text-left font-semibold rounded-r-lg">NIT Download (PDF)</th>
              </tr>
            </thead>
            <tbody>
              {tenders.map((tender, index) => (
                <tr
                  key={tender.id}
                  className={`border-b border-white/10 ${index % 2 === 0 ? "bg-black/20" : "bg-transparent"}`}
                >
                  <td className="px-6 py-4 text-white">{tender.title}</td>
                  <td className="px-6 py-4 text-white/80">{tender.department}</td>
                  <td className="px-6 py-4 text-white/80">{tender.value}</td>
                  <td className="px-6 py-4 text-white/80">{tender.closingDate}</td>
                  <td className="px-6 py-4">
                    <button className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded text-sm transition-colors">
                      Download PDF
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
