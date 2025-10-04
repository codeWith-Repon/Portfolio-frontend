
import { LoginFormInputs } from "@/components/Auth/LoginForm";

export const login = async (data: LoginFormInputs) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            credentials: 'include',
            body: JSON.stringify(data)
        })
        console.log(res)

        if (!res.ok) {
            return {
                success: false,
                message:
                    res.status === 500
                        ? 'Server error. Please try again later.'
                        : 'Unable to reach server. Please check your connection.',
            };
        }

        return await res.json()

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Server is not responding. Please try again later."
        }
    }
}