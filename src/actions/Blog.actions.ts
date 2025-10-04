'use server'

/* eslint-disable @typescript-eslint/no-explicit-any */

export async function createBlog(data: any) {
    const res = fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: data
    })

    const result = (await res).json()

    console.log(result)
}