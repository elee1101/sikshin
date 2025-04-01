export const Search = () => {

  return (
    <main className="max-w-5xl mx-auto px-4 py-8">
      <div className="max-w-xl mx-auto px-4 py-8">
        <input
          type="text"
          placeholder="🔍 Search for a recipe..."
          className="w-full p-3 border border-zinc-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>
    </main>
  );
};

export default Search;