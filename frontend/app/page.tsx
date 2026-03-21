import { Search, Rocket, Video, Users, Star } from "lucide-react";
import ClipOfTheDay from "../components/clip_of_the_day";

export default function Home() {
  return (
    <div className="w-screen min-h-screen bg-[#1A1022]">
      <nav className="w-full flex items-center justify-around mx-auto px-4 md:px-10 py-4 md:py-6 border-b border-[#2A1840]">
        {/* Logo and Brand */}
        <div className="flex items-center gap-20">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
            <h2 className="text-slate-900 dark:text-slate-100 text-xl font-bold leading-tight tracking-tight">Arcadia</h2>
          </div>
          {/* Navigation Links */}
          <div className="flex items-center gap-8 text-[#CAD4E0]">
            <a href="#" className="hover:text-purple-500 transition">Home</a>
            <a href="#" className="hover:text-purple-500 transition">Explore Games</a>
            <a href="#" className="hover:text-purple-500 transition">Communities</a>
            <a href="#" className="hover:text-purple-500 transition">Profile</a>
          </div>
        </div>


        {/* Search and Sign Up */}
        <div className="flex items-center gap-4">
          <div className="group bg-[#210F36] border border-[#210F36] focus-within:border-purple-600 flex items-center gap-2 px-3 py-2 rounded-lg transition-colors duration-200">
            <Search className="text-white group-focus-within:text-purple-600" size={18}/>
            <input 
              type="text" 
              placeholder="Search games..." 
              className="bg-inherit text-white placeholder-gray-400 outline-none w-48" 
            />
          </div>
          <button className="bg-purple-600 hover:bg-purple-700 hover:cursor-pointer text-white px-6 py-2 rounded-lg font-semibold transition">
            Sign Up
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1">
            <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="text-white">Your Gaming</span>
              <br />
              <span className="text-white">Universe,</span>
              <br />
              <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Connected.</span>
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-md">
              Share your best clips, find your next squad with our LFG system, and read authentic reviews from fellow gamers.
            </p>

            {/* Buttons */}
            <div className="flex items-center gap-4 mb-12">
              <button className="bg-purple-600 hover:bg-purple-700 hover:cursor-pointer text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition">
                <Rocket size={20} />
                Join the Hub
              </button>
              <button className="border border-purple-600 hover:border-purple-500 hover:cursor-pointer text-purple-400 hover:text-purple-300 px-6 py-3 rounded-lg font-semibold transition">
                Explore Clips
              </button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-4">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-purple-600 border-2 border-[#1A1022]"></div>
                <div className="w-10 h-10 rounded-full bg-purple-500 border-2 border-[#1A1022]"></div>
                <div className="w-10 h-10 rounded-full bg-pink-500 border-2 border-[#1A1022]"></div>
              </div>
              <p className="text-gray-400">Joined by 10,000+ gamers this month</p>
            </div>
          </div>

          {/* Right Content - Featured Clip */}
          <ClipOfTheDay />
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full px-4 md:px-10 py-16 md:py-24 border-t border-[#2A1840]">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Level Up Your</span>
              <br />
              <span className="bg-linear-to-r from-purple-500 to-purple-600 bg-clip-text text-transparent">Social Experience</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Everything you need to stay connected with your favorite games and players in one ecosystem.
            </p>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Clip Sharing Card */}
            <div className="bg-[#210F36] border border-[#2A1840] hover:border-purple-600 rounded-lg p-8 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800 transition">
                <Video className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Clip Sharing</h3>
              <p className="text-gray-400 mb-6">
                Post your epic plays and viral moments instantly. Our high-bitrate player ensures every frame is crisp.
              </p>
              <a href="#" className="text-purple-500 hover:text-purple-400 font-semibold flex items-center gap-2 transition">
                Learn more <span>→</span>
              </a>
            </div>

            {/* LFG System Card */}
            <div className="bg-[#210F36] border border-[#2A1840] hover:border-purple-600 rounded-lg p-8 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800 transition">
                <Users className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">LFG System</h3>
              <p className="text-gray-400 mb-6">
                Find players that match your playstyle and rank. Filter by game, region, and competitive mindset.
              </p>
              <a href="#" className="text-purple-500 hover:text-purple-400 font-semibold flex items-center gap-2 transition">
                Find a squad <span>→</span>
              </a>
            </div>

            {/* Game Reviews Card */}
            <div className="bg-[#210F36] border border-[#2A1840] hover:border-purple-600 rounded-lg p-8 transition-colors duration-300 group">
              <div className="w-12 h-12 bg-purple-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-800 transition">
                <Star className="w-6 h-6 text-purple-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Game Reviews</h3>
              <p className="text-gray-400 mb-6">
                Get honest feedback and ratings on the latest titles. Written by gamers, for gamers, no fluff included.
              </p>
              <a href="#" className="text-purple-500 hover:text-purple-400 font-semibold flex items-center gap-2 transition">
                Read reviews <span>→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );

}
