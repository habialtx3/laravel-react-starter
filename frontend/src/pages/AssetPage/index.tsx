
import { useAssets } from "../../hooks/useAssets";

export default function AssetsPage() {

  const {data,isLoading} = useAssets()
  if(isLoading) return <p>Loading ... </p>
  
  return (
    <>
    <div>
      <h1>Assets</h1>
      <ul>
        {data?.data?.map((asset)=>(
          <li key={asset.id}>{asset.name}</li>
        ))}
      </ul>
    </div>
    </>
  );
}