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
