'use client'
import siteData from '../data/siteData.json'

const TechCard = ({ iconUrl, name }: { iconUrl: string, name: string }) => {
  return (
    // 1. Kotak TechCard: Terang (bg-white), Gelap (dark:bg-[#2a2d33])
    <div className="bg-white dark:bg-[#2a2d33] p-6 rounded-2xl flex flex-col items-center justify-center gap-3 w-32 h-32 border border-gray-200 dark:border-white/5 shadow-sm dark:shadow-none hover:scale-105 transition-all duration-300">
      <img src={iconUrl} alt={`${name} logo`} className="w-16 h-16 object-contain" />
      {/* Teks di dalam kartu: Terang (text-gray-800), Gelap (dark:text-white) */}
      <p className="text-gray-800 dark:text-white text-sm font-semibold text-center transition-colors duration-300">{name}</p>
    </div>
  )
}

export default function About() {
  const { about } = siteData
  return (
    <div className="relative isolate min-h-[calc(100vh-64px)] overflow-hidden font-sans flex flex-col justify-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300 py-12 md:py-0">
      
      {/* Efek Latar Belakang */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-emerald-500 to-green-600 opacity-40 dark:opacity-30 transition-opacity duration-300 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
      
      {/* Efek Latar Belakang Bawah */}
      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-emerald-500 to-green-600 opacity-40 dark:opacity-30 transition-opacity duration-300 sm:left-[calc(50%+36rem)] sm:w-288.75"
        ></div>
      </div>

      {/* Konten Utama */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-20 px-6 sm:px-10 items-center justify-between">
        
        {/* Kolom Kiri: About Me & Bio */}
        <div className="flex-1 w-full text-center md:text-left">
          <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 dark:text-white mb-8 sm:mb-10 tracking-tight leading-tight transition-colors duration-300">{about.title}</h1>
          
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4 sm:mb-6 tracking-tight transition-colors duration-300">{about.bioTitle}</h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-3xl leading-relaxed mx-auto md:mx-0 transition-colors duration-300">
              {about.bio}
            </p>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mt-4 sm:mt-6 max-w-3xl leading-relaxed mx-auto md:mx-0 transition-colors duration-300">
                {about.subBio}
            </p>
          </div>
        </div>

        {/* Kolom Kanan: Tech Stack & Tools */}
        <div className="flex-1 w-full flex flex-col items-center md:items-start">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-8 sm:mb-10 tracking-tight transition-colors duration-300 text-center md:text-left">{about.techStackTitle}</h2>
          
          {/* Grid Kartu Tech Stack */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 w-full place-items-center md:place-items-start">
            {about.techStack.map((tech) => (
              <TechCard key={tech.name} iconUrl={tech.iconUrl} name={tech.name} />
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}