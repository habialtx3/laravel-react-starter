import AssetForm from "../../components/AssetForm";
import AssetList from "../../components/AssetsList";

export default function AssetsPage() {
  return (
    <div>
      <h1>Asset Management</h1>
      <AssetForm />
      <AssetList />
    </div>
  );
}