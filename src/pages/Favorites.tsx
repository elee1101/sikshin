export const Favorites = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Favorites</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <div
            key={num}
            className="bg-zinc-100 rounded-lg p-4 text-center shadow-sm hover:shadow-md"
          >
            📁 Folder {num}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Favorites;