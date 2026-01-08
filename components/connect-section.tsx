"use client"

import { ArrowUpRight } from "lucide-react"

const socialCards = [
  {
    name: "Facebook",
    description: "Follow updates, photos and announcements from Mount Abu Nagar Parishad.",
    image: "/dilwara-temples-mount-abu-tourists-visiting.jpg",
  },
  {
    name: "Instagram",
    description: "See visual stories of events, initiatives and life in Mount Abu.",
    image: "/mount-abu-scenic-hill-station-view.jpg",
  },
  {
    name: "Twitter",
    description: "Get quick alerts, notices and service updates in real time.",
    image: "/mount-abu-golden-sunset-sky.jpg",
  },
  {
    name: "YouTube",
    description: "Watch event coverage, public messages and awareness videos.",
    image: "/nakki-lake-mount-abu-colorful-boats.jpg",
  },
]

export default function ConnectSection() {
  return (
    <section className="bg-[#2c4238] py-20 md:py-28">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-yellow-400 uppercase tracking-[0.2em] text-sm font-medium">CONNECT WITH US</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-normal text-white mt-3">
            Stay Updated And Reach Out Anytime
          </h2>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-6">
          {/* Facebook - Large Card Left */}
          <div className="lg:col-span-4">
            <div className="bg-cream rounded-2xl overflow-hidden h-full group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={socialCards[0].image || "/placeholder.svg"}
                  alt="Facebook"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-header mb-2">{socialCards[0].name}</h3>
                <p className="text-header/60 text-sm leading-relaxed">{socialCards[0].description}</p>
              </div>
            </div>
          </div>

          {/* Instagram & Twitter - Stacked Middle */}
          <div className="lg:col-span-4 flex flex-col gap-4 md:gap-6">
            {/* Instagram */}
            <div className="bg-cream rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={socialCards[1].image || "/placeholder.svg"}
                  alt="Instagram"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-header mb-2">{socialCards[1].name}</h3>
                <p className="text-header/60 text-sm leading-relaxed">{socialCards[1].description}</p>
              </div>
            </div>

            {/* Twitter */}
            <div className="bg-cream rounded-2xl overflow-hidden group cursor-pointer hover:shadow-xl transition-shadow">
              <div className="aspect-video overflow-hidden">
                <img
                  src={socialCards[2].image || "/placeholder.svg"}
                  alt="Twitter"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-header mb-2">{socialCards[2].name}</h3>
                <p className="text-header/60 text-sm leading-relaxed">{socialCards[2].description}</p>
              </div>
            </div>
          </div>

          {/* YouTube - Right Side */}
          <div className="lg:col-span-4">
            <div className="bg-cream rounded-2xl overflow-hidden h-full group cursor-pointer hover:shadow-xl transition-shadow relative">
              {/* Arrow Icon */}
              <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-header flex items-center justify-center group-hover:bg-gold transition-colors">
                <ArrowUpRight className="w-5 h-5 text-white" />
              </button>
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={socialCards[3].image || "/placeholder.svg"}
                  alt="YouTube"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-5">
                <h3 className="text-xl font-bold text-header mb-2">{socialCards[3].name}</h3>
                <p className="text-header/60 text-sm leading-relaxed">{socialCards[3].description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
