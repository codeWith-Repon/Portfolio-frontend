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