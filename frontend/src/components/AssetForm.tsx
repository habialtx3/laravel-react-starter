import { useState } from "react";
import { useCreateAsset } from "../hooks/useCreateAssets";

export default function AssetForm() {
  const [name, setName] = useState("");
  const { mutate } = useCreateAsset();

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Asset name"
      />

      <button
        onClick={() => {
          mutate({ name });
          setName("");
        }}
      >
        Create
      </button>
    </div>
  );
}