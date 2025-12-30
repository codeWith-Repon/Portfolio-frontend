import { projects } from '@/data/project';
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import { notFound } from 'next/navigation';


export const generateMetadata = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: 'Project Not Found' };

  return {
    title: `${project.title} | Repon's Portfolio`,
    description: project.description,
  };
};

const ProjectDetails = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) notFound();

  const links = project.links || {};
  const githubLinks = [
    links.frontend && { url: links.frontend, label: 'Frontend' },
    links.backend && { url: links.backend, label: 'Backend' },
    !links.frontend &&
      !links.backend &&
      links.github && { url: links.github, label: 'Code' },
  ].filter(Boolean) as { url: string; label: string }[];

  return (
    <div className='min-h-screen bg-background my-20'>
      <section className='md:px-6'>
        <div className='max-w-4xl mx-auto'>
          {/* Back Button */}
          <Link
            href='/projects'
            className='inline-flex items-center gap-2 px-4 py-2 rounded-lg text-accent hover:bg-accent/10 transition-colors font-medium mb-8'
          >
            <ArrowLeft className='w-4 h-4' /> Back to Projects
          </Link>

          {/* Project Header */}
          <div className='space-y-6 mb-12 section-animate'>
            <div className='inline-flex items-center px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-sm font-medium text-accent'>
              {project.category}
            </div>
            <div className='flex items-start gap-4'>
              {project.icon && <div className='text-5xl'>{project.icon}</div>}
              <div>
                <h1 className='text-4xl md:text-5xl font-bold text-foreground'>
                  {project.title}
                </h1>
                <p className='text-lg text-foreground/70 mt-2'>
                  {project.description}
                </p>
              </div>
            </div>
          </div>

          {/* Main Image */}
          <div className='relative aspect-video rounded-xl overflow-hidden mb-12 border border-border section-animate'>
            <img
              src={project.image}
              alt={project.title}
              className='w-full h-full object-cover'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
            <div className='md:col-span-2 space-y-12'>
              {/* Description */}
              <div className='space-y-4 section-animate'>
                <h2 className='text-2xl font-bold'>Overview</h2>
                <p className='text-foreground/80 leading-relaxed text-lg'>
                  {project.longDescription}
                </p>
              </div>

              {/* CORE FEATURES GRID */}
              {project.features && (
                <div className='space-y-6 section-animate'>
                  <h2 className='text-2xl font-bold'>Core Features</h2>
                  <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                    {project.features.map((feature, i) => (
                      <div
                        key={i}
                        className='flex items-center gap-3 p-4 rounded-xl bg-card border border-border group hover:border-accent transition-all'
                      >
                        <CheckCircle2 className='w-5 h-5 text-accent shrink-0' />
                        <span className='font-medium text-foreground/80 group-hover:text-foreground'>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Tech Stack */}
              <div className='space-y-4 section-animate'>
                <h2 className='text-2xl font-bold'>Technologies</h2>
                <div className='flex flex-wrap gap-2'>
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className='px-4 py-2 rounded-full bg-muted border border-border text-accent text-sm font-semibold'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar Links */}
            <div className='space-y-6 section-animate'>
              <div className='p-6 bg-card border border-border rounded-xl space-y-4 sticky top-24'>
                <h3 className='font-bold text-lg'>Project Links</h3>
                <div className='flex flex-col gap-3'>
                  {links.live && (
                    <a
                      href={links.live}
                      target='_blank'
                      className='flex items-center justify-center gap-2 px-4 py-3 rounded-lg bg-accent text-white hover:opacity-90 font-bold transition-all'
                    >
                      View Live <ExternalLink className='w-4 h-4' />
                    </a>
                  )}
                  {githubLinks.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.url}
                      target='_blank'
                      className='flex items-center justify-center gap-2 px-4 py-3 rounded-lg border border-border hover:bg-muted font-bold transition-all'
                    >
                      {link.label} <Github className='w-4 h-4' />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* More Projects Section */}
          <div className='border-t border-border pt-12 mt-20 section-animate'>
            <h2 className='text-2xl font-bold text-foreground mb-8'>
              Discover More
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
              {projects
                .filter((p) => p.slug !== project.slug)
                .slice(0, 3)
                .map((p) => (
                  <Link
                    key={p.id}
                    href={`/projects/${p.slug}`}
                    className='group rounded-xl bg-card border border-border hover:border-accent overflow-hidden transition-all'
                  >
                    <div className='aspect-video overflow-hidden'>
                      <img
                        src={p.image}
                        alt={p.title}
                        className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
                      />
                    </div>
                    <div className='p-4'>
                      <h4 className='font-bold group-hover:text-accent transition-colors'>
                        {p.title}
                      </h4>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetails;
