"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/5 backdrop-blur-md border-b border-white/10">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-yellow-400 flex items-center justify-center overflow-hidden">
            <img
              src="https://images.pexels.com/photos/3225517/pexels-photo-3225517.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
              alt="Nagar Palika Mount Abu Logo"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-white text-lg font-semibold tracking-wide">Nagar Palika Mount Abu</span>
        </Link>

        {/* Right side controls */}
        <div className="flex items-center gap-4">
          {/* Hindi Toggle */}
          <button className="px-6 py-2 border border-white/50 rounded-full text-white hover:bg-white/10 transition-colors">
            हिन्दी
          </button>

          {/* Hamburger Menu */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-black/80 backdrop-blur-md border-t border-white/10 animate-slide-down">
          <div className="container mx-auto px-6 py-4">
            <ul className="flex flex-col gap-4">
              {["Home", "About", "Destinations", "Dilwara Temple", "City Profile", "Adventures", "Contact"].map((item, index) => (
                <li
                  key={item}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <a
                    href={item === "Dilwara Temple" ? "/dilwara-temple" : item === "Home" ? "/" : `#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white hover:text-yellow-400 transition-colors block py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      )}
    </header>
  )
}
