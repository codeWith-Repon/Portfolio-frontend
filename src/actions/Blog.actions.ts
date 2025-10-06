'use server'

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function createBlog(data: any) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
        method: "POST",
        credentials: 'include',
        body: data,
    })

    if (!res.ok) {
        throw new Error(`Failed to create blog: ${res.statusText}`)
    }

    const result = (await res).json()

    return result
}