import { useAssets } from "../hooks/useAssets";
import { useDeleteAsset } from "../hooks/useDeleteAssets";

export default function AssetList() {
    const { data, isLoading } = useAssets()
    const { mutate: deleteAsset } = useDeleteAsset();

    if (isLoading) return <p>Loading ...</p>

    return (
        <div>
            <h2>Assets</h2>
            <ul>
                {data?.map((aset) => (
                    <li key={aset.id}>{aset.name}
                        <button onClick={() => deleteAsset(aset.id)}>
                        Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}