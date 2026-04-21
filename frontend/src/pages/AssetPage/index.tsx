
import { useState } from "react";
import { useAssets } from "../../hooks/useAssets";
import { useCreateAsset } from "../../hooks/useCreateAssets";
import { useDeleteAsset } from "../../hooks/useDeleteAssets";

export default function AssetsPage() {

  const { data, isLoading } = useAssets()
  const { mutate } = useCreateAsset()
  const { mutate: deleteMutate, isPending: isDeleting } = useDeleteAsset()


  const [name, setName] = useState('')
  const [code, setCode] = useState('')
  const [qty, setQty] = useState(0)

  const handleSubmit = () => {
    mutate({ name, code, qty });
    setName('')
    setCode('')
    setQty(0)
  }

  if (isLoading) return <p>Loading ... </p>

  return (
    <>
      <div>
        <h1>Assets</h1>
        <div>
          <input value={name} placeholder="Masukkan nama aset" onChange={(e) => setName(e.target.value)}></input>
          <input value={code} placeholder="Masukkan kode aset" onChange={(e) => setCode(e.target.value)}></input>
          <input value={qty} placeholder="Masukkan qty aset" onChange={(e) => setQty(Number(e.target.value))}></input>
          <button onClick={handleSubmit}>Tambah asset</button>
        </div>
        <ul>
          {data?.data?.map((asset) => (
            <li key={asset.id}>
              {asset.name}
              <button onClick={()=> deleteMutate(asset.id)} disabled={isDeleting}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}