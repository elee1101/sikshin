import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-md border-b border-zinc-200">
      <div className="max-w-5xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo / Title */}
        <Link to="/" className="text-xl font-bold text-zinc-800">
          🍱 Sikshin
        </Link>

        {/* Navigation Links */}
        <ul className="flex gap-6 font-medium text-zinc-700">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/search">Search</Link></li>
          <li><Link to="/explore">Explore</Link></li>
          <li><Link to="/subscriptions">Subscriptions</Link></li>
          <li><Link to="/favorites">Favorites</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
      </div>
    </nav>
  );
}
