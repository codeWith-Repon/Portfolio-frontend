"use server"
export const addProject = async (data: FormData) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
            method: "POST",
            credentials: 'include',
            body: data,
        })

        if (!res.ok) throw new Error("Failed to add project");

        const result = (await res).json()

        return result
    } catch (error) {
        console.error("Error adding project:", error);
        throw error
    }
}

export const deleteProject = async (slug: string, token: string) => {
    try {

        if (!token) {
            throw new Error("No accessToken")
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`, {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            },
            method: "DELETE"
        })

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message || "Failed to delete project")
        }

        const result = await res.json()

        return result
    } catch (error) {
        console.log("Delete project error:", error)
        throw error
    }
}

export const getProjectBySlug = async (slug: string) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`,
            {
                cache: 'no-store',
            }
        )

        if (!res.ok) {
            const error = await res.json()
            throw new Error(error.message || "Failed to find project")
        }

        const result = await res.json()

        return result
    } catch (error) {
        console.log("project find error", error)
        throw error
    }
}


export const updateProject = async (slug: string, token: string, data: FormData) => {
    try {

        if (!token) {
            throw new Error("No accessToken")
        }

        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects/${slug}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
            method: "PATCH",
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

