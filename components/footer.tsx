"use client"

import { Instagram, Facebook, Send } from "lucide-react"

export default function Footer() {
  return (
    <footer className="relative">
      {/* Torn Paper Edge Top */}
      <div className="relative h-16 md:h-24 bg-[#2c4238] overflow-visible">
        <svg
          viewBox="0 0 1440 100"
          preserveAspectRatio="none"
          className="absolute left-0 w-full h-16 md:h-24 bottom-0 translate-y-full"
          style={{ zIndex: 0 }}
        >
          <path
            fill="#F5F0E1"
            d="M0,0 C150,80 350,20 500,50 C650,80 800,10 1000,40 C1200,70 1350,20 1440,60 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      {/* Main Footer Content */}
      <div className="bg-cream pt-24 md:pt-32 pb-8 relative" style={{ zIndex: 5 }}>
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
            {/* Logo & Description Column */}
            <div className="lg:col-span-1">
              {/* Logo */}
              <div className="w-24 h-24 mb-4">
                <img
                  src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
                  alt="Nagar Palika Mount Abu"
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-3 mb-6">
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-header/30 flex items-center justify-center hover:bg-header hover:text-white transition-colors text-header"
                >
                  <Instagram className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-header/30 flex items-center justify-center hover:bg-header hover:text-white transition-colors text-header"
                >
                  <Facebook className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-header/30 flex items-center justify-center hover:bg-header hover:text-white transition-colors text-header"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-header/30 flex items-center justify-center hover:bg-header hover:text-white transition-colors text-header"
                >
                  <Send className="w-4 h-4" />
                </a>
                <a
                  href="#"
                  className="w-9 h-9 rounded-full border border-header/30 flex items-center justify-center hover:bg-header hover:text-white transition-colors text-header"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
              </div>

              {/* Description */}
              <p className="text-header/70 text-sm leading-relaxed">
                The Nagar Palika Mount Abu Is The Local Governing Body Responsible For The Administration And
                Development Of The Hill Station. Located Near The Polo Ground, It Oversees Various Municipal Functions
                Including Sanitation, Water Supply, Infrastructure Development, And Public Services.
              </p>
            </div>

            {/* Contact Info Column */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-header shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  <span className="text-header text-sm">+91 8305591122</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-header shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <span className="text-header text-sm">Palikaabu@Gmail.Com</span>
                </div>
                <div className="flex items-start gap-3">
                  <svg
                    className="w-5 h-5 text-header shrink-0 mt-0.5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span className="text-header text-sm">Nagar Palika Mount Abu Near Polo Ground</span>
                </div>
              </div>
            </div>

            {/* Adventure Links Column */}
            <div className="lg:col-span-1">
              <h4 className="text-header font-bold mb-4">Adventure</h4>
              <ul className="space-y-2">
                {[
                  "Monuments",
                  "Trek",
                  "Religious Places",
                  "Important Places",
                  "Hotels",
                  "Hospital",
                  "Fairs And Festivals",
                  "Water Bodies",
                  "Water Point",
                  "Parking",
                  "Schools & Institutes",
                  "Rock Climbing",
                  "Market",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-header/70 hover:text-gold transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links & Connect Column */}
            <div className="lg:col-span-1">
              <h4 className="text-header font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 mb-8">
                {[
                  "Administrative Office",
                  "Rajasthan Sampark",
                  "Pehchan",
                  "Eproc",
                  "Other Govt. Links",
                  "Notices",
                  "Tenders",
                  "Complaints",
                  "Digital Construction Token",
                  "Emergency Contacts",
                ].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-header/70 hover:text-gold transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>

              <h4 className="text-header font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                {["About Us", "Contact Us"].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-header/70 hover:text-gold transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-12 pt-8 border-t border-header/10 text-center">
            <p className="text-header/60 text-sm">© 2025 Nagar Palika Mount Abu. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
