'use client'

import React from 'react'
import Link from 'next/link'
import siteData from '../data/siteData.json'

// 1. Tambahkan 'slug' ke dalam parameter ProjectCard
const ProjectCard = ({ 
  title, 
  description, 
  imageUrl, 
  tags, 
  actionUrl,
  slug,
  actionText = 'GitHub' 
}: { 
  title: string, 
  description: string, 
  imageUrl: string, 
  tags: string[], 
  actionUrl: string,
  slug: string,
  actionText?: string 
}) => {
  return (
    <div className="bg-white/90 dark:bg-[#2a2d33]/80 backdrop-blur-sm border border-gray-200 dark:border-white/10 p-4 rounded-xl flex flex-col hover:-translate-y-2 transition-all duration-300 shadow-lg dark:shadow-none">
      <div className="w-full h-32 bg-gray-100 dark:bg-gray-800 rounded-lg mb-4 overflow-hidden border border-gray-200 dark:border-white/5">
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" 
        />
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-1.5 transition-colors duration-300">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-xs mb-4 flex-grow leading-relaxed line-clamp-3 transition-colors duration-300">
        {description}
      </p>

      <div className="flex flex-wrap gap-1.5 mb-5">
        {tags.map((tag, index) => (
          <span 
            key={index} 
            className="bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-[10px] px-2 py-1 rounded transition-colors duration-300"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Link Section */}
      <div className="mt-auto flex justify-between items-center">
        <a 
          href={actionUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-emerald-600 dark:text-emerald-500 font-semibold text-xs hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors inline-block"
        >
          [{actionText}]
        </a>
        
        {/* Sekarang href pakai slug yang dikirim dari props */}
        <Link 
          href={`/projects/${slug}`} 
          className="text-gray-400 font-semibold text-xs hover:text-gray-900 dark:hover:text-white transition-colors duration-200"
        >
          [View Detail]
        </Link>
      </div>
    </div>
  )
}

export default function Projects() {
  const { projects } = siteData
  return (
    <div className="relative isolate h-[calc(100vh-64px)] overflow-hidden font-sans flex flex-col items-center bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      
      {/* Efek Latar Belakang */}
      <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80 pointer-events-none">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
          className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-emerald-500 to-green-600 opacity-40 dark:opacity-30 transition-opacity duration-300 sm:left-[calc(50%-30rem)] sm:w-288.75"
        ></div>
      </div>
      <div aria-hidden="true" className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)] pointer-events-none">
        <div 
          style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }} 
          className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-emerald-500 to-green-600 opacity-40 dark:opacity-30 transition-opacity duration-300 sm:left-[calc(50%+36rem)] sm:w-288.75"
        ></div>
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto h-full overflow-y-auto px-6 lg:px-8 py-12 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              imageUrl={project.imageUrl}
              tags={project.tags}
              actionUrl={project.actionUrl}
              actionText={project.actionText}
              slug={project.slug} // <--- PASTIKAN MENGIRIM SLUG DI SINI
            />
          ))}
        </div>
      </div>
      
    </div>
  )
}