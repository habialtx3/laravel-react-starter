import { useQuery } from "@tanstack/react-query"

async function getAssets() {
  const res = await fetch("http://127.0.0.1:8000/api/assets")
  const json = await res.json()
  return json
}

export default function App() {

  const { data, isLoading } = useQuery({
    queryKey: ["assets"],
    queryFn: getAssets
  })

  const assets = data?.data ?? [];
  const meta = data?.meta;

  if (isLoading) return <p>Loading ...</p>

  return (
    <div>
      <h1>Assets</h1>
      <ul>
        {assets.map((a) => (
          <li key={a.id}>{a.name}</li>
        ))}
      </ul>
      <p>Page {meta?.current_page} / {meta?.last_page}</p>
    </div>
  )
}
