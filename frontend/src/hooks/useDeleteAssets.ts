import { useMutation, useQueryClient } from "@tanstack/react-query";
import  { deleteAsset } from "../api/assets.api";

export function useDeleteAsset() {
    const queryClient = useQueryClient();

    return useMutation({
        mutationFn: deleteAsset,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ["assets"] })
        }
    })
}