'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import siteData from '../data/siteData.json' // Pastikan path ini benar

export default function Navbar() {
  const { navbar } = siteData
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme === 'light') {
      setIsDarkMode(false)
      document.documentElement.classList.remove('dark')
    } else {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
      setIsDarkMode(false)
    } else {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
      setIsDarkMode(true)
    }
  }

  return (
    <nav className="relative bg-white/80 dark:bg-gray-800/10 backdrop-blur-md after:pointer-events-none after:absolute after:inset-x-0 after:bottom-0 after:h-px after:bg-black/10 dark:after:bg-white/10 transition-colors duration-300 z-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          
          {/* Mobile menu button */}
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button 
              type="button" 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-500 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white focus:outline-none transition-colors"
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Logo & Desktop Menu */}
          <div className="flex flex-1 items-center justify-center sm:items-stretch">
            {/* Teks Logo */}
            <div className="flex shrink-0 items-center text-gray-900 dark:text-white font-bold text-xl transition-colors duration-300">
              <Link href="/">{navbar.logo}</Link>
            </div>
            
            <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
              <div className="flex space-x-4">
                {navbar.links.map((link) => (
                  <Link 
                    key={link.label}
                    href={link.href} 
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-all duration-200 ${
                      pathname === link.href 
                        ? 'text-emerald-600 dark:text-emerald-500 underline decoration-2 underline-offset-8' 
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Tombol Dark/Light Mode */}
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:pr-0">
            <button
              onClick={toggleTheme}
              // Kita pakai title/aria-label dari JSON juga buat aksesibilitas
              aria-label={isDarkMode ? navbar.themeToggle.toLight : navbar.themeToggle.toDark}
              title={isDarkMode ? navbar.themeToggle.toLight : navbar.themeToggle.toDark}
              className="p-2 rounded-full text-gray-500 hover:text-emerald-600 dark:text-gray-400 dark:hover:text-emerald-400 bg-gray-100 dark:bg-white/5 transition-all duration-200 focus:outline-none"
            >
              {isDarkMode ? (
                // Ikon Bulan
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
              ) : (
                // Ikon Matahari
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="12" cy="12" r="5" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isMobileMenuOpen && (
        <div className="sm:hidden bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="space-y-1 px-2 pt-2 pb-3">
            {/* 2. KITA GUNAKAN MAP JUGA DI SINI UNTUK MOBILE */}
            {navbar.links.map((link) => (
              <Link 
                key={link.label}
                href={link.href} 
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-white/5 hover:text-gray-900 dark:hover:text-white transition-colors"
                onClick={() => setIsMobileMenuOpen(false)} // Opsional: tutup menu pas diklik
              >
                [ {link.label} ]
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  )
}