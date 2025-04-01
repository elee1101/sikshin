const Profile = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-zinc-200 rounded-full flex items-center justify-center text-2xl">
            🔺◼️⚪
          </div>
          <div>
            <h2 className="text-xl font-semibold">Username</h2>
            <p className="text-zinc-500">@userId</p>
          </div>
        </div>
        <button className="bg-zinc-800 text-white px-4 py-2 rounded-md text-sm hover:bg-zinc-700">
          Button
        </button>
      </div>
    </div>
  );
};

export default Profile;