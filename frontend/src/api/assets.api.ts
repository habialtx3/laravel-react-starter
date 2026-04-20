import { api } from "./clients";

export type Asset = {
    id: number,
    name: string;
}

export function getAssets() {
    return api<Asset[]>("/assets");
}

export function createAssets(data: { name: string }) {
    return api("/assets", {
        method: "POST",
        body: JSON.stringify(data),
    })
}

export function deleteAsset(id: number) {
    return api(`/assets/${id}`, {
        method: "DELETE",
    });
}