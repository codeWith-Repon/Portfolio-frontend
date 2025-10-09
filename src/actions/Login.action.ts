
import { LoginFormInputs } from "@/components/Auth/LoginForm";

export const login = async (data: LoginFormInputs) => {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/auth/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data),
        })

        if (!res.ok) {
            return {
                success: false,
                message:
                    res.status === 500
                        ? 'Server error. Please try again later.'
                        : 'Unable to reach server. Please check your connection.',
            };
        }

        const result = await res.json()

        if (res.ok && result.data.accessToken) {
            localStorage.setItem("accessToken", result.data.accessToken)
        }

        return result

    } catch (error) {
        console.log(error)
        return {
            success: false,
            message: "Server is not responding. Please try again later."
        }
    }
}