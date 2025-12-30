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

export const updateBlog = async (slug: string, token: string, data: any) => {
    try {

        if (!token) {
            throw new Error("No accessToken")
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`, {
            method: "PATCH",
            headers: {
                "Authorization": `Bearer ${token}`
            },
            body: data
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message || "Failed to update project")
        }

        const result = await res.json()

        return result
    } catch (error) {
        console.log("update blog error:", error)
        throw error
    }
}


export async function deleteBlog(slug: string, token: string) {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts/${slug}`, {
        method: "DELETE",
        headers: {
            "Authorization": `Bearer ${token}`
        },
    })

    if (!res.ok) {
        throw new Error(`Failed to delete blog: ${res.statusText}`)
    }

    const result = await res.json()

    return result
}