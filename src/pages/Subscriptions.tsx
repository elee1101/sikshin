export const Subscriptions = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Subscriptions</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="flex flex-col items-center gap-2 p-4 bg-white shadow-sm rounded-lg border"
          >
            <div className="w-14 h-14 bg-zinc-200 rounded-full flex items-center justify-center text-xl">
              🧑‍🍳
            </div>
            <div className="text-sm text-zinc-700">Recipe Preview</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Subscriptions;