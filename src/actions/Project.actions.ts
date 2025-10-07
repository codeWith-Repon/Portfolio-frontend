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

export const getAllProject = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
            cache: 'no-cache',
        })

        if (!res.ok) throw new Error("Failed to fetch projects");

        const result = (await res).json()
        console.log(result)
        return result
    } catch (error) {
        console.log(error);
        throw error
    }
}