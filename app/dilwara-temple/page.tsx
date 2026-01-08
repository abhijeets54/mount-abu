"use client"

import { useEffect, useState } from "react"
import { Heart, Share2, Clock, Camera, User, Moon, Ban, PawPrint } from "lucide-react"
import Header from "@/components/header"
import Footer from "@/components/footer"

const imageGallery = [
  "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/5207262/pexels-photo-5207262.jpeg?auto=compress&cs=tinysrgb&w=800",
  "https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=800",
]

export default function DilwaraTemplePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div className="min-h-screen bg-[#d4c5a0]">
      <Header />

      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          {/* Title Section */}
          <div
            className={`flex justify-between items-start mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#4a5c4e] uppercase tracking-wide mb-4">
                DILWARA JAIN TEMPLE
              </h1>
              <p className="text-[#4a5c4e]/80 text-lg md:text-xl max-w-4xl leading-relaxed">
                Renowned for their stunning white marble craftsmanship, these Jain temples from the 11th–13th
                centuries showcase awe-inspiring carvings, domes, and pillars that reflect India's architectural
                brilliance.
              </p>
            </div>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border-2 border-[#4a5c4e] flex items-center justify-center hover:bg-[#4a5c4e] hover:text-white hover:scale-110 transition-all duration-300">
                <Heart className="w-5 h-5" />
              </button>
              <button className="w-12 h-12 rounded-full border-2 border-[#4a5c4e] flex items-center justify-center hover:bg-[#4a5c4e] hover:text-white hover:scale-110 transition-all duration-300">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Image Gallery and History Section */}
          <div
            className={`grid lg:grid-cols-2 gap-8 mb-12 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Left - Image Gallery */}
            <div className="space-y-4">
              <div className="relative rounded-3xl overflow-hidden h-[400px] md:h-[500px] bg-white/50 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-shadow duration-500">
                <img
                  key={selectedImage}
                  src={imageGallery[selectedImage]}
                  alt="Dilwara Temple"
                  className="w-full h-full object-cover transition-opacity duration-700 ease-in-out"
                />
                <div className="absolute bottom-4 right-4 bg-black/70 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center gap-2">
                  <Camera className="w-4 h-4" />
                  <span className="text-sm font-medium">86+</span>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                {imageGallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`relative rounded-xl overflow-hidden h-24 transition-all duration-500 ease-in-out cursor-pointer ${
                      selectedImage === index
                        ? "ring-4 ring-yellow-400 scale-110 shadow-lg"
                        : "hover:scale-110 opacity-60 hover:opacity-100 shadow-md hover:shadow-lg"
                    }`}
                  >
                    <img src={img} alt={`View ${index + 1}`} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
                  </button>
                ))}
              </div>
            </div>

            {/* Right - History */}
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 transition-all duration-500 hover:shadow-xl hover:bg-white/60 hover:translate-y-[-4px]">
              <h2 className="text-3xl font-bold text-[#4a5c4e] mb-6 uppercase">History</h2>
              <p className="text-[#4a5c4e]/80 leading-relaxed text-base">
                The Dilwara Temples were built between the 11th and 13th centuries by Jain ministers Vimal Shah and
                Tejapala. Vimal Vasahi was constructed in 1031 CE by Vimal Shah, a minister of Bhima I, the Solanki
                king of Gujarat. Luna Vasahi was built in 1230 CE by Tejapala and his brother Vastupal, ministers of
                Vastupal, the prime minister of Gujarat. The temples are renowned for their intricate marble carvings,
                domes, and pillars, showcasing the pinnacle of Jain artistry. The complex includes Pittalhar,
                Parshvanath, and Mahavir Swami temples, each with unique architectural features and historical
                significance. The temples have been a center of Jain pilgrimage and cultural heritage for centuries.
              </p>
            </div>
          </div>

          {/* Information Cards */}
          <div
            className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 transition-all duration-700 delay-400 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {/* Entry Fee */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0">
                  <span className="text-xl">💵</span>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">Entry Fee</h3>
                  <p className="text-[#4a5c4e]/70">Free</p>
                </div>
              </div>
            </div>

            {/* Open Hours */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a5c4e]/40">
                  <Clock className="w-5 h-5 text-[#4a5c4e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">Open for tourists</h3>
                  <p className="text-[#4a5c4e]/70">12:00 PM to 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Photography */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a5c4e]/40">
                  <Camera className="w-5 h-5 text-[#4a5c4e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">Photography</h3>
                  <p className="text-[#4a5c4e]/70">Photography: Not allowed inside main halls</p>
                </div>
              </div>
            </div>

            {/* Age Restriction */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a5c4e]/40">
                  <User className="w-5 h-5 text-[#4a5c4e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">No age restriction</h3>
                  <p className="text-[#4a5c4e]/70">Guests of all ages are welcome.</p>
                </div>
              </div>
            </div>

            {/* Quiet Hours */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a5c4e]/40">
                  <Moon className="w-5 h-5 text-[#4a5c4e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">Quiet hours</h3>
                  <p className="text-[#4a5c4e]/70">Guests must be quiet between 12:00 PM to 5:00 PM</p>
                </div>
              </div>
            </div>

            {/* Smoking */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a5c4e]/40">
                  <Ban className="w-5 h-5 text-[#4a5c4e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">Smoking</h3>
                  <p className="text-[#4a5c4e]/70">Smoking not allowed.</p>
                </div>
              </div>
            </div>

            {/* Pets */}
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-4px] cursor-pointer group">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-[#4a5c4e]/20 flex items-center justify-center shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:bg-[#4a5c4e]/40">
                  <PawPrint className="w-5 h-5 text-[#4a5c4e]" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#4a5c4e] mb-1">Pets</h3>
                  <p className="text-[#4a5c4e]/70">Pets are not allowed.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Notice Cards */}
          <div
            className={`grid md:grid-cols-2 gap-6 mb-12 transition-all duration-700 delay-600 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-2px]">
              <p className="text-[#4a5c4e] font-medium">Jain devotees may enter earlier for prayers</p>
            </div>
            <div className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 text-center border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-lg hover:bg-white/60 hover:translate-y-[-2px]">
              <p className="text-[#4a5c4e] font-medium">Closed on major Jain festivals (check locally)</p>
            </div>
          </div>

          {/* Location Section */}
          <div
            className={`transition-all duration-700 delay-800 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <h2 className="text-3xl font-bold text-[#4a5c4e] mb-6 uppercase">Location</h2>
            <div className="rounded-3xl overflow-hidden h-96 bg-white/40 backdrop-blur-sm border border-[#4a5c4e]/20 transition-all duration-500 hover:shadow-2xl hover:bg-white/60">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3627.123456789!2d72.7123456!3d24.5987654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDM1JzU1LjYiTiA3MsKwNDInNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
