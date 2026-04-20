import { useQuery } from "@tanstack/react-query";
import { getAssets } from "../api/assets.api";

export function useAssets() {
    return useQuery({
        queryKey : ["assets"],
        queryFn : getAssets,
    })
}