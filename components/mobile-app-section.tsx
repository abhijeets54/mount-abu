"use client"

export default function MobileAppSection() {
  return (
    <section
      className="relative py-20 md:py-28 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(44,66,56,0.85), rgba(44,66,56,0.9)), url('/mount-abu-aravalli-hills-misty-morning-view.jpg')`,
      }}
    >
      <div className="container mx-auto px-6">
        {/* App Card */}
        <div className="bg-white rounded-3xl overflow-hidden max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-header uppercase tracking-wide mb-4">
                Get Our Application
              </h2>
              <p className="text-header/70 leading-relaxed mb-8 text-sm md:text-base">
                Complete digital companion: Instant token approvals with QR tracking, real-time complaint filing &
                status updates with photo evidence, essential certificates access, live municipal alerts, ward maps, &
                24/7 service dashboard—all from your phone
              </p>

              {/* Store Buttons */}
              <div className="flex flex-wrap gap-4">
                {/* Google Play Button */}
                <a
                  href="#"
                  className="flex items-center bg-[#00A651] hover:bg-[#008c45] transition-colors rounded-lg px-4 py-3 gap-3"
                >
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 512 512" className="w-full h-full">
                      <path
                        fill="#FFFFFF"
                        d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1zM47 0C34 6.8 25.3 19.2 25.3 35.3v441.3c0 16.1 8.7 28.5 21.7 35.3l256.6-256L47 0z"
                      />
                      <path fill="#FFFFFF" d="M325.3 277.7l-60.1-60.1L47 512c12.9 6.8 29.2 6.8 42.1 0l236.2-234.3z" />
                      <path
                        fill="#FFFFFF"
                        d="M486.7 234.3l-86.1-49.6-75.3 75.3 75.3 75.3 86.1-49.6c24.3-14.5 24.3-37.4 0-51.4z"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <span className="text-[10px] block leading-none">Get it on</span>
                    <span className="text-lg font-semibold leading-tight">Google Play</span>
                  </div>
                </a>

                {/* App Store Button */}
                <a
                  href="#"
                  className="flex items-center bg-black hover:bg-gray-900 transition-colors rounded-lg px-4 py-3 gap-3"
                >
                  <div className="w-8 h-8">
                    <svg viewBox="0 0 384 512" className="w-full h-full text-white">
                      <path
                        fill="currentColor"
                        d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"
                      />
                    </svg>
                  </div>
                  <div className="text-white">
                    <span className="text-[10px] block leading-none">Download on the</span>
                    <span className="text-lg font-semibold leading-tight">App Store</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right - Phone Mockup */}
            <div className="relative h-80 md:h-full min-h-[350px] bg-gradient-to-br from-blue-50/50 to-orange-50/50 overflow-hidden flex items-end justify-center">
              <div
                className="absolute inset-0 bg-cover bg-center opacity-30"
                style={{
                  backgroundImage: `url('/misty-mountains-sunrise-pastel-colors.jpg')`,
                }}
              />
              {/* Phone mockup representation */}
              <div className="relative z-10 mb-0">
                <div className="w-48 md:w-56 h-80 md:h-96 bg-black rounded-[2rem] border-4 border-gray-800 overflow-hidden shadow-2xl">
                  <div className="w-full h-full bg-gradient-to-b from-blue-400 to-green-500 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center">
                      <img
                        src="/nagar-palika-mount-abu-official-logo-circular-badg.jpg"
                        alt="App Logo"
                        className="w-16 h-16 rounded-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
