import { Search } from "lucide-react";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-[#1A1022]">
      <nav className="w-full flex items-center justify-between mx-auto px-4 md:px-10 py-4 md:py-6 border-b border-[#2A1840]">
        {/* Logo and Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
          <h2 className="text-xl font-bold text-white">Arcadia</h2>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-8 text-white">
          <a href="#" className="hover:text-purple-400 transition">Home</a>
          <a href="#" className="hover:text-purple-400 transition">Explore Games</a>
          <a href="#" className="hover:text-purple-400 transition">Communities</a>
          <a href="#" className="hover:text-purple-400 transition">Profile</a>
        </div>

        {/* Search and Sign Up */}
        <div className="flex items-center gap-4">
          <div className="bg-[#210F36] flex items-center gap-2 px-3 py-2 rounded-lg">
            <Search color="white" size={20}/>
            <input 
              type="text" 
              placeholder="Search games..." 
              className="bg-inherit text-white placeholder-gray-400 outline-none w-48" 
            />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-lg font-semibold transition">
            Sign Up
          </button>
        </div>
      </nav>
    </div>
  );
}
