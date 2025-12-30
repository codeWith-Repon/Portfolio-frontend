import { IProject, projects } from '@/data/project';
import ProjectCard from './ProjectCard';
import Link from 'next/link';

export default function FeaturedProjects() {
  const featuredProjects: IProject[] = projects
    .filter((p): p is IProject => p.featured === true)
    .slice(0, 3);

  return (
    <section id="featured-project" className='relative py-15 md:py-20 bg-linear-to-b from-black via-slate-900/50 to-black overflow-hidden'>
      {/* Background glow elements */}
      <div className='absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/15 rounded-full blur-3xl opacity-30 pointer-events-none' />
      <div className='absolute bottom-20 right-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl opacity-20 pointer-events-none' />

      <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
        {/* Section Header */}
        <div className='mb-16 md:mb-20'>
          {/* Accent line and label */}
          <div className='flex items-center gap-3 mb-6'>
            <div className='h-0.5 w-12 bg-linear-to-r from-emerald-500 to-emerald-500/50' />
            <span className='text-xs font-semibold text-emerald-400 uppercase tracking-widest letter-spacing-wide'>
              Featured Projects
            </span>
          </div>

          {/* Main title with gradient text */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight'>
            <span className='block text-white mb-2'>Exceptional Work</span>
            <span className='block glow-text text-4xl sm:text-5xl md:text-6xl'>
              Curated Portfolio
            </span>
          </h2>

          {/* Description */}
          <p className='text-base sm:text-lg text-white/60 max-w-2xl leading-relaxed'>
           Handpicked projects that demonstrate my expertise in design and development
          </p>
        </div>

        {/* Projects Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12'>
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project as IProject} />
          ))}
        </div>

        {/* Explore All Button */}
        <div className='flex justify-center mt-16'>
          <Link
            href='/projects'
            className='group relative px-8 py-4 rounded-lg font-semibold text-white transition-all duration-500'
          >
            {/* Button background with glow */}
            <div className='absolute inset-0 rounded-lg bg-linear-to-r from-emerald-500 to-emerald-600 opacity-100 group-hover:opacity-110 transition-opacity duration-300' />
            <div className='absolute inset-0 rounded-lg glow-emerald opacity-0 group-hover:opacity-100 transition-opacity duration-500' />

            {/* Button content */}
            <span className='relative flex items-center justify-center gap-2'>
              View All Projects
              <svg
                className='w-5 h-5 transition-transform duration-300 group-hover:translate-x-1'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 7l5 5m0 0l-5 5m5-5H6'
                />
              </svg>
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
