const BASE_URL = 'http://127.0.0.1:8000/api'

export async function api<T>(endpoints: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${BASE_URL}${endpoints}`, {
        headers: {
            "Content-Type": "application/json",
        },
        credentials: "include",
        ...options
    })

    if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new Error(error.message || "Api Error");
    }

    return res.json()

}