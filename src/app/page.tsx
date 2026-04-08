'use client'

import Link from 'next/link'
import siteData from './data/siteData.json'

export default function Home() {
  const { home } = siteData
  return (
    <div className="relative isolate px-6 lg:px-8 flex flex-col justify-center min-h-[calc(100vh-64px)] overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Background Efek Blur Atas */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-emerald-400 to-green-600 opacity-40 dark:opacity-30 transition-opacity duration-300 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
      
      {/* Konten Utama */}
      <div className="relative z-10 mx-auto max-w-2xl text-center">
        <h2 className="text-5xl tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl transition-colors duration-300">
          {home.greeting} <span className="text-emerald-600 dark:text-emerald-500">{home.name}</span>
        </h2>

        <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 dark:text-white sm:text-5xl mt-2 transition-colors duration-300">
          {home.role}
        </h1>
        
        {/* 4. Teks paragraf berubah jadi abu-abu agak gelap di mode terang */}
        <p className="mt-4 text-lg font-medium text-pretty text-gray-600 dark:text-gray-400 sm:text-xl/8 transition-colors duration-300">
          {home.description}
        </p>
        
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* Tombol View Projects */}
          <Link 
            href={home.primaryLink} 
            className="rounded-md bg-emerald-600 dark:bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-700 dark:hover:bg-emerald-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-colors duration-200"
          >
            [{home.primaryAction}]
          </Link>
          
          {/* Tombol Contact Me */}
          <Link 
            href={home.secondaryLink}
            className="rounded-md border border-emerald-600 dark:border-emerald-500 px-4 py-2.5 text-sm font-semibold text-emerald-600 dark:text-emerald-500 shadow-sm hover:bg-emerald-50 dark:hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 transition-all duration-200"
          >
            [{home.secondaryAction}]
          </Link>
        </div>
      </div>

      {/* Background Efek Blur Bawah */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
          // Sama seperti blur atas, opacity disesuaikan
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-emerald-500 to-green-600 opacity-40 dark:opacity-30 transition-opacity duration-300 sm:left-[calc(50%+36rem)] sm:w-288.75"
        ></div>
      </div>

    </div>
  )
}