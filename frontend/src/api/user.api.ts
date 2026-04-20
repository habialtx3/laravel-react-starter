import { api } from "./clients";

export type User = {
    id : number;
    name : string;
    email : string;
    roles : string[]
    permission : string[];
}

export const userApi = {
    me : () => api<User>("/api/me")
}

