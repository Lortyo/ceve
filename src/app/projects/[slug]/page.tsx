'use client'
import { useParams } from 'next/navigation'
import siteData from '../../data/siteData.json'
import Link from 'next/link'

export default function ProjectDetail() {
  const params = useParams()
  
  const project = siteData.projects.find(p => p.slug === params.slug)

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
        <p>Project not found. <Link href="/projects" className="text-emerald-500 underline">Go back</Link></p>
      </div>
    )
  }

return (
  /* 1. Container Luar: Mengunci layar agar tidak ada scrollbar browser */
  <div className="h-[calc(100vh-64px)] w-full overflow-hidden bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
    
    {/* 2. Container Dalam: Tempat konten berada dan tempat scrollbar disembunyikan */}
    <div className="h-full w-full overflow-y-auto flex flex-col items-center py-12 px-6 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      
      {/* Konten Card Kamu */}
      <div className="max-w-3xl w-full bg-white dark:bg-[#2a2d33] p-8 rounded-2xl shadow-xl border border-gray-200 dark:border-white/10 transition-colors shrink-0 mb-20">
        
        {/* Gambar di Detail Page */}
        <img src={project.imageUrl} alt={project.title} className="w-full h-64 object-cover rounded-xl mb-8 border border-gray-200 dark:border-white/5" />
        
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {project.title}
        </h1>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tags.map(tag => (
            <span key={tag} className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 text-xs font-bold rounded-full border border-emerald-200 dark:border-emerald-500/20">
              {tag}
            </span>
          ))}
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          {project.content}
        </p>

        <div className="flex justify-between items-center border-t border-gray-100 dark:border-white/5 pt-8">
          <Link href="/projects" className="text-sm font-medium text-gray-400 hover:text-emerald-500 transition-colors">
            [ ← Back to Projects ]
          </Link>
          <a href={project.actionUrl} target="_blank" className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
            Open {project.actionText}
          </a>
        </div>

      </div>
    </div>
  </div>
)
}