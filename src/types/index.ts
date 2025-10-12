/* eslint-disable @typescript-eslint/no-explicit-any */
export interface IBlog {
    id: number
    title: string
    slug: string
    thumbnail: string
    content: {
        type: string,
        content: any
    },
    isPublished: boolean
    views: number
    featured: boolean
    tags: string[]
    authorId: number
    createdAt: string
    updatedAt: string
    author: Author
}

export interface Author {
    id: number
    name: string
    email: string
    picture: string
}

export interface IProject {
  id: number
  title: string
  slug: string
  description: string
  thumbnails: string[]
  technologies: string[]
  features: string[]
  liveUrl: string
  githubUrls: GithubUrls
  isFeatured: boolean
  ownerId: number
  createdAt: string
  updatedAt: string
  owner: Owner
}

export interface GithubUrls {
  backend: string
  frontend: string
}

export interface Owner {
  id: number
  name: string
  email: string
  picture: string
}
