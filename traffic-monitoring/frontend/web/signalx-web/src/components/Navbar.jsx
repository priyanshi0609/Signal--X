"use client"

import { useState, useEffect } from "react"
import { Star, ChevronRight, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scrolling effect
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY
      if (offset > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // Scroll to section function
  const scrollToSection = (sectionId) => {
    setIsOpen(false)
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white backdrop-blur-md shadow-lg py-2" 
        : "bg-white/80 backdrop-blur-sm py-4"
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <h1 className={`text-2xl font-bold tracking-tight transition-all duration-300 ${
                scrolled ? "scale-90" : ""
              }`}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">Signal</span>
                <span className="text-blue-500">-X</span>
              </h1>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="space-x-6">
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:content-[''] after:h-[2px] after:w-0 after:bg-blue-500 after:absolute after:-bottom-1 after:left-0 after:transition-all"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:content-[''] after:h-[2px] after:w-0 after:bg-blue-500 after:absolute after:-bottom-1 after:left-0 after:transition-all"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:content-[''] after:h-[2px] after:w-0 after:bg-blue-500 after:absolute after:-bottom-1 after:left-0 after:transition-all"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors relative hover:after:w-full after:content-[''] after:h-[2px] after:w-0 after:bg-blue-500 after:absolute after:-bottom-1 after:left-0 after:transition-all"
              >
                Team
              </button>
            </div>

            <div className="flex items-center space-x-4">
              <a
                href="https://github.com/ArshTiwari2004/Signal-X"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-blue-600 hover:text-blue-700 transition-colors border border-gray-200 hover:border-blue-500 rounded-full px-4 py-1.5 hover:bg-blue-50"
              >
                <Star className="h-4 w-4 mr-1" />
                <span className="font-medium">Star Repo</span>
              </a>
              <button
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full px-6 py-2 shadow-md shadow-blue-500/20 flex items-center transition-all hover:scale-105 font-medium"
                onClick={() => (window.location.href = "/results")}
              >
                Get Started
                <ChevronRight className="h-4 w-4 ml-1" />
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors p-2 rounded-full hover:bg-blue-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu - Slide Down Animation */}
      <div 
        className={`md:hidden absolute w-full bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <div className="container mx-auto px-4 py-4 space-y-2">
          <button
            onClick={() => scrollToSection("about")}
            className="block w-full text-left py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            About
          </button>
          <button
            onClick={() => scrollToSection("features")}
            className="block w-full text-left py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("how-it-works")}
            className="block w-full text-left py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            How It Works
          </button>
          <button
            onClick={() => scrollToSection("team")}
            className="block w-full text-left py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
          >
            Team
          </button>
          <div className="pt-2 pb-2">
            <a
              href="https://github.com/ArshTiwari2004/Signal-X"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center py-3 px-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors font-medium"
            >
              <Star className="h-4 w-4 mr-2" />
              Star Repo
            </a>
          </div>
          <div className="pt-2">
            <button
              className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-full py-3 shadow-md shadow-blue-500/10 flex items-center justify-center font-medium"
              onClick={() => (window.location.href = "/results")}
            >
              Get Started
              <ChevronRight className="h-4 w-4 ml-1" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar