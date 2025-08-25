export default function SortBar({ sortOrder, setSortOrder }) {
  return (
    <div className="flex justify-between items-center">
      <label className="text-xs px-1">Ordenar por:</label>
      <select
        value={sortOrder}
        onChange={(e) => setSortOrder(e.target.value)}
        className="border border-amber-200 rounded p-1 text-xs"
      >
        <option value="asc">$ menor a mayor</option>
        <option value="desc">$ mayor a menor</option>
      </select>
    </div>
  );
}
