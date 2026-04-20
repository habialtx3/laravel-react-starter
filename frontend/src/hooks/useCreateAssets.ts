import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createAssets } from "../api/assets.api";

export function useCreateAsset() {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn : createAssets,
        onSuccess : () => {
            queryClient.invalidateQueries({queryKey : ["assets"]} )
        }
    })  
}