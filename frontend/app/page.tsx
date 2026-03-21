'use client';

import { useEffect } from 'react';
import { Search, Rocket, Video, Users, Star, Zap, UserPlus, Share2, Mail } from "lucide-react";
import ClipOfTheDay from "../components/clip_of_the_day";
import { initializeAllAnimations } from "@/lib/animations";

export default function Home() {
  useEffect(() => {
    // Initialize animations when component mounts
    initializeAllAnimations();
  }, []);
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

      {/* Popular Games Section */}
      <section className="w-full px-4 md:px-10 py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-3">Explore Popular Games</h2>
              <p className="text-xl text-gray-400">Discover what's trending and join the conversation</p>
            </div>
            <a href="/discover" className="text-purple-500 hover:text-purple-400 font-semibold transition whitespace-nowrap">
              View All Games →
            </a>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Cyberpunk 2077 Card */}
            <div className="bg-[#210F36] border border-[#2A1840] hover:border-purple-600 rounded-lg overflow-hidden transition-colors duration-300 group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-purple-600 to-purple-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1618005182384-a83a8e7d3e32?w=400&h=300&fit=crop" 
                  alt="Cyberpunk 2077" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  HOT
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Cyberpunk 2077</h3>
                <p className="text-gray-400 text-sm mb-4">Action RPG • CD PROJEKT RED</p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-purple-500" />
                    <span>1.2M Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-purple-500" />
                    <span>450+ Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Valorant Card */}
            <div className="bg-[#210F36] border border-[#2A1840] hover:border-purple-600 rounded-lg overflow-hidden transition-colors duration-300 group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-green-900 to-gray-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop" 
                  alt="Valorant" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Valorant</h3>
                <p className="text-gray-400 text-sm mb-4">Tactical Shooter • Riot Games</p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-purple-500" />
                    <span>850k Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-purple-500" />
                    <span>1.2k Active</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Elden Ring Card */}
            <div className="bg-[#210F36] border border-[#2A1840] hover:border-purple-600 rounded-lg overflow-hidden transition-colors duration-300 group cursor-pointer">
              <div className="relative h-48 bg-gradient-to-br from-yellow-700 to-purple-900 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop" 
                  alt="Elden Ring" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Elden Ring</h3>
                <p className="text-gray-400 text-sm mb-4">Fantasy RPG • FromSoftware</p>
                <div className="flex items-center gap-6 text-gray-400 text-sm">
                  <div className="flex items-center gap-2">
                    <Users size={18} className="text-purple-500" />
                    <span>2.1M Members</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap size={18} className="text-purple-500" />
                    <span>300+ Active</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-4 md:px-10 py-16 md:py-24 bg-[#1A1022] flex items-center justify-center">
        <div className="w-full max-w-5xl bg-gradient-to-r from-purple-600 to-purple-700 rounded-3xl px-8 md:px-16 py-16 md:py-20">
          <div className="text-center">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Ready to enter the Arcadia hub?
            </h2>
            <p className="text-lg text-purple-100 mb-12 max-w-2xl mx-auto">
              Join over 500,000+ players already building the future of gaming social.
            </p>
            <div className="flex items-center justify-center gap-6">
              <button className="bg-white hover:bg-gray-100 text-purple-600 px-8 py-3 rounded-lg font-semibold flex items-center gap-2 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-600/30 hover:cursor-pointer">
                <UserPlus size={20} />
                Create Account
              </button>
              <button className="border-2 border-white hover:border-purple-300 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/30 hover:cursor-pointer">
                Discover More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full px-4 md:px-10 py-12 border-t border-[#2A1840] bg-[#0F0618]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-12">
            {/* Logo and Copyright */}
            <div className="flex-shrink-0">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-8 h-8 bg-purple-500 rounded-lg"></div>
                <h3 className="text-lg font-bold text-white">Arcadia</h3>
              </div>
              <p className="text-gray-500 text-sm">© 2024 Arcadia Platforms Inc. All rights reserved.</p>
            </div>

            {/* Links */}
            <div className="flex items-center gap-8 text-gray-400 flex-1 justify-center">
              <a href="#" className="hover:text-purple-500 transition text-sm whitespace-nowrap">Privacy Policy</a>
              <a href="#" className="hover:text-purple-500 transition text-sm whitespace-nowrap">Terms of Service</a>
              <a href="#" className="hover:text-purple-500 transition text-sm whitespace-nowrap">Contact Support</a>
              <a href="#" className="hover:text-purple-500 transition text-sm whitespace-nowrap">Careers</a>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 flex-shrink-0">
              <button className="text-gray-400 hover:text-purple-500 transition hover:cursor-pointer">
                <Share2 size={20} />
              </button>
              <button className="text-gray-400 hover:text-purple-500 transition hover:cursor-pointer">
                <Mail size={20} />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );

}
