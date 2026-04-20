import { api } from "./clients";

export const authApi = {
    login: (data: { email: string; password: string }) =>
        api('/api/login', {
            method: "POST",
            body: JSON.stringify(data)
        }),
    logout: () => {
        api('api/logout',{
            method : "POST"
        })
    }

}