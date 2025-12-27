import { IProject } from '@/data/project';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';

interface ProjectProps {
  project: IProject;
}

export default function ProjectCard({ project }: ProjectProps) {
  const githubLinks = [
    project.links.frontend && {
      url: project.links.frontend,
      label: 'Frontend',
    },
    project.links.backend && { url: project.links.backend, label: 'Backend' },
    !project.links.frontend &&
      !project.links.backend &&
      project.links.github && { url: project.links.github, label: 'Code' },
  ].filter(Boolean) as { url: string; label: string }[];

  // Non-featured card with image
  return (
    <div className='group relative h-full overflow-hidden rounded-xl glassmorphism-dark card-hover flex flex-col'>
      {/* Subtle glow on hover */}
      <div className='absolute -inset-0.5 bg-linear-to-r from-emerald-500/0 via-emerald-500/0 to-emerald-500/0 group-hover:from-emerald-500/10 group-hover:via-emerald-500/5 group-hover:to-emerald-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />

      {/* Image Container */}
      <div className='relative overflow-hidden h-40 bg-linear-to-br from-emerald-900/20 to-slate-900/40 shrink-0'>
        <img
          src={
            typeof project.image === 'string'
              ? project.image
              : project.image.src
          }
          alt={project.title}
          className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-105'
        />
        <div className='absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent' />

        {/* Category Badge */}
        <div className='absolute top-3 right-3'>
          <span className='inline-flex px-2 py-1 rounded-md text-xs font-medium bg-black/40 border border-emerald-500/30 text-emerald-300 backdrop-blur-sm'>
            {project.category}
          </span>
        </div>
      </div>

      {/* Content Container */}
      <div className='relative p-5 flex flex-col h-full flex-1'>
        {/* Header with icon */}
        <div className='flex items-start gap-3 mb-3'>
          {project.icon && (
            <span className='text-2xl shrink-0'>{project.icon}</span>
          )}
          <div className='flex-1 min-w-0'>
            <h3 className='text-base font-bold text-white truncate group-hover:text-emerald-400 transition-colors'>
              {project.title}
            </h3>
          </div>
        </div>

        {/* Description */}
        <p className='text-white/60 text-xs mb-4 line-clamp-2 grow'>
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className='flex flex-wrap gap-1 mb-4'>
          {project.techStack.slice(0, 2).map((tech, i) => (
            <span
              key={i}
              className='inline-flex px-2 py-0.5 rounded-sm text-xs font-medium bg-white/10 text-emerald-300/80 border border-white/10'
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 2 && (
            <span className='inline-flex px-2 py-0.5 rounded-sm text-xs font-medium bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'>
              +{project.techStack.length - 2}
            </span>
          )}
        </div>

        {/* Links */}
        <div className='flex gap-2 mt-auto flex-wrap'>
          {project.links.live && (
            <a
              href={project.links.live}
              target='_blank'
              rel='noopener noreferrer'
              className='flex-1 min-w-fit flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 text-xs font-semibold transition-all hover:bg-emerald-500/30 hover:border-emerald-500/50'
            >
              <ExternalLink className='w-3.5 h-3.5' />
              <span className='hidden sm:inline'>Live</span>
            </a>
          )}

          {githubLinks.length > 0 && (
            <div className='flex gap-1.5 flex-1 min-w-fit'>
              {githubLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='flex-1 flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg glassmorphism-dark hover:bg-white/15 text-white/70 text-xs font-semibold transition-all group/link'
                  title={link.label}
                >
                  <Github className='w-3.5 h-3.5' />
                  <span className='hidden sm:inline'>{link.label}</span>
                </a>
              ))}
            </div>
          )}
          <Link
            href={`/projects/${project.slug}`}
            className='w-full px-4 py-2 bg-accent text-foreground mt-2 rounded-lg font-bold text-sm hover:bg-accent/90 transition-all  group-hover:opacity-100 text-center'
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
}
