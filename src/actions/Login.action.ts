
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

        return await res.json()

    } catch (error) {
        console.log(error)
    }
}