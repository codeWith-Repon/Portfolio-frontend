
export const logout = async () => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/logout`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
        })

        if (!res.ok) {
            return {
                success: false,
                message: "Failed to logout. Please try again later."
            }
        }
        return await res.json()
    } catch (error) {
        console.log("Logout error:", error);
        throw new Error("Failed to logout. Please try again later.");
    }
}