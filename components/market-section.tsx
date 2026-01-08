"use client"

import { useEffect, useState } from "react"
import { TrendingUp, TrendingDown } from "lucide-react"

interface CryptoData {
  id: string
  symbol: string
  name: string
  current_price: number
  price_change_percentage_24h: number
  market_cap: number
}

export default function MarketSection() {
  const [cryptoData, setCryptoData] = useState<CryptoData[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const section = document.getElementById("market-section")
    if (section) {
      observer.observe(section)
    }

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const fetchCryptoData = async () => {
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false",
        )
        const data = await response.json()
        setCryptoData(data)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching crypto data:", error)
        setIsLoading(false)
      }
    }

    fetchCryptoData()
    // Refresh data every 60 seconds
    const interval = setInterval(fetchCryptoData, 60000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="market-section" className="relative py-20 bg-[#2c4238]">
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url(https://images.pexels.com/photos/1141853/pexels-photo-1141853.jpeg?auto=compress&cs=tinysrgb&w=1920)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      </div>

      <div className="relative z-10 container mx-auto px-6">
        {/* Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
          }`}
        >
          <span className="text-yellow-400 uppercase tracking-widest text-sm font-semibold">LIVE DATA</span>
          <h2 className="text-white text-4xl md:text-5xl font-normal mt-2">Global Market Overview</h2>
          <p className="text-white/70 mt-4 max-w-2xl mx-auto">
            Real-time cryptocurrency market data powered by CoinGecko API
          </p>
        </div>

        {/* Market Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            // Loading Skeletons
            Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 animate-pulse"
              >
                <div className="h-6 bg-white/10 rounded w-1/2 mb-4"></div>
                <div className="h-8 bg-white/10 rounded w-3/4 mb-2"></div>
                <div className="h-4 bg-white/10 rounded w-1/3"></div>
              </div>
            ))
          ) : (
            // Actual Data
            cryptoData.map((crypto, index) => (
              <div
                key={crypto.id}
                className={`bg-black/20 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-500 hover:scale-105 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${index * 100 + 200}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-white text-xl font-bold">{crypto.name}</h3>
                    <p className="text-white/60 text-sm uppercase">{crypto.symbol}</p>
                  </div>
                  <div
                    className={`flex items-center gap-1 px-3 py-1 rounded-full ${
                      crypto.price_change_percentage_24h >= 0
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                  >
                    {crypto.price_change_percentage_24h >= 0 ? (
                      <TrendingUp className="w-4 h-4" />
                    ) : (
                      <TrendingDown className="w-4 h-4" />
                    )}
                    <span className="text-sm font-semibold">
                      {Math.abs(crypto.price_change_percentage_24h).toFixed(2)}%
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div>
                    <p className="text-white/60 text-sm">Current Price</p>
                    <p className="text-white text-2xl font-bold">
                      ${crypto.current_price.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </p>
                  </div>
                  <div>
                    <p className="text-white/60 text-sm">Market Cap</p>
                    <p className="text-white font-medium">
                      ${(crypto.market_cap / 1000000000).toFixed(2)}B
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Disclaimer */}
        <div
          className={`mt-12 text-center transition-all duration-700 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <p className="text-white/50 text-sm">
            Data provided by CoinGecko API. Updates every 60 seconds. For informational purposes only.
          </p>
        </div>
      </div>
    </section>
  )
}
