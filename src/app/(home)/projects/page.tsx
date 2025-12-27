import ProjectCard from '@/components/Public/ProjectCard';
import { projects } from '@/data/project';

export default function Projects() {
  return (
    <div className='min-h-screen bg-black text-white'>
      {/* Page Header */}
      <section className='relative pt-20 md:pt-28 overflow-hidden'>
        <div className='absolute inset-0 bg-linear-to-b from-emerald-900/20 via-black to-black' />
        <div className='absolute -top-40 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-40 pointer-events-none' />

        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10'>
          <div className='max-w-3xl'>
            {/* Label */}
            <div className='flex items-center gap-3 mb-6'>
              <div className='h-0.5 w-12 bg-linear-to-r from-emerald-500 to-emerald-500/50' />
              <span className='text-xs font-semibold text-emerald-400 uppercase tracking-widest'>
                Complete Collection
              </span>
            </div>

            {/* Title */}
            <h1 className='text-5xl sm:text-6xl md:text-7xl font-bold mb-6 leading-tight'>
              <span className='block text-white mb-2'>All My</span>
              <span className='block glow-text'>Projects</span>
            </h1>

            {/* Description */}
            <p className='text-lg text-white/60 max-w-2xl leading-relaxed'>
              Explore my complete portfolio of {projects.length} projects
              spanning various industries and technologies. Each represents a
              unique challenge solved with innovation and precision.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className='relative py-15 md:py-20'>
        <div className='container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8'>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
