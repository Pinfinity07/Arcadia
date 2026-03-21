'use client';

import { useEffect, useState } from 'react';
import { Lock, Mail, Eye, EyeOff, Github, User, Gamepad2 } from 'lucide-react';
import { initializeLoginAnimations, animatePageTransition } from '@/lib/loginAnimations';
import gsap from 'gsap';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    animatePageTransition();
    initializeLoginAnimations();
  }, []);

  const handleToggle = (mode: boolean) => {
    if (isLogin === mode) return;

    // Animate form out
    const form = document.querySelector('.auth-form');
    const header = document.querySelector('.auth-header');
    
    if (form && header) {
      gsap.to([header, form], {
        duration: 0.3,
        opacity: 0,
        y: -15,
        ease: 'power2.in',
        onComplete: () => {
          setIsLogin(mode);
          // Animate form in
          gsap.from([header, form], {
            duration: 0.4,
            opacity: 0,
            y: 15,
            ease: 'power2.out',
            clearProps: 'all',
          });
        },
      });
    } else {
      setIsLogin(mode);
    }
  };

  const heroTitle = isLogin 
    ? { prefix: 'Level up your', highlight: 'social game.' }
    : { prefix: 'Join the', highlight: 'ultimate hub.' };

  const heroDesc = isLogin
    ? 'Connect with millions of players, join guilds, and share your greatest gaming moments on the ultimate platform for gamers.'
    : 'Create an account and start connecting with millions of players, join guilds, and share your greatest gaming moments on the ultimate platform for gamers.';

  return (
    <div className="w-screen min-h-screen bg-[#1A1022] flex page-transition opacity-100">
      {/* Left Side - Hero Section */}
      <div className="hidden lg:flex flex-1 flex-col justify-between px-12 py-16 bg-gradient-to-br from-[#1A1022] to-[#2D1B3D]">
        <div className="flex items-center gap-3 mb-16">
          <div className="w-11 h-11 bg-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
            <Gamepad2 size={26} className="text-white" />
          </div>
          <h2 className="text-white text-2xl font-bold tracking-tight">Arcadia</h2>
        </div>

        <div className="hero-content">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-white">{heroTitle.prefix}</span>
            <br />
            <span className="text-purple-500 relative inline-block">
              {heroTitle.highlight}
              <div className="absolute bottom-0 left-0 w-full h-1 bg-purple-500 rounded"></div>
            </span>
          </h1>
          <p className="text-gray-400 text-lg mb-12 max-w-md">
            {heroDesc}
          </p>

          <div className="flex items-center gap-2 bg-[#210F36] w-fit px-4 py-3 rounded-lg border border-[#2A1840]">
            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
            <span className="text-gray-400">12,482 Players Online</span>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mt-12 relative h-96">
          <div className="absolute inset-0 bg-gradient-to-t from-purple-600/20 to-transparent rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&h=400&fit=crop" 
              alt="Gaming setup" 
              className="w-full h-full object-cover opacity-60"
            />
          </div>
        </div>
      </div>

      {/* Right Side - Auth Form */}
      <div className="flex-1 flex items-center justify-center px-6 md:px-12 bg-[#1A1022]">
        <div className="w-full max-w-md">
          {/* Header */}
          <div className="mb-10 auth-header login-header">
            <h2 className="text-4xl font-bold text-white mb-3">
              {isLogin ? 'Welcome back' : 'Join the Vanguard'}
            </h2>
            <p className="text-gray-400 text-base">
              {isLogin 
                ? 'Join the community and start your journey.' 
                : 'Create your account and start your journey.'}
            </p>
          </div>

          {/* Tabs - Button Style */}
          <div className="flex gap-3 mb-12 login-tabs">
            <button
              onClick={() => handleToggle(true)}
              className={`flex-1 font-bold py-3.5 rounded-xl transition-all duration-300 ${
                isLogin
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                  : 'bg-transparent border border-[#2A1840] hover:border-purple-500/50 text-gray-400 hover:text-gray-300'
              }`}
            >
              Login
            </button>
            <button
              onClick={() => handleToggle(false)}
              className={`flex-1 font-bold py-3.5 rounded-xl transition-all duration-300 ${
                !isLogin
                  ? 'bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white'
                  : 'bg-transparent border border-[#2A1840] hover:border-purple-500/50 text-gray-400 hover:text-gray-300'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form className="space-y-5 auth-form login-form">
            {/* Username Input - Only for Signup */}
            {!isLogin && (
              <div className="form-group">
                <label className="block text-sm font-medium text-gray-200 mb-2.5">Username</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition" size={18} />
                  <input
                    type="text"
                    placeholder="Vanguard_01"
                    className="w-full bg-[#1A1530] border border-[#2A2540] text-gray-200 placeholder-gray-500 rounded-lg pl-12 pr-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
                  />
                </div>
              </div>
            )}

            {/* Email Input */}
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-200 mb-2.5">Email Address</label>
              <div className="relative group">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition" size={18} />
                <input
                  type="email"
                  placeholder="name@example.com"
                  className="w-full bg-[#1A1530] border border-[#2A2540] text-gray-200 placeholder-gray-500 rounded-lg pl-12 pr-4 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
                />
              </div>
            </div>

            {/* Password and Confirm Password - Side by side for Signup */}
            {!isLogin ? (
              <div className="grid grid-cols-2 gap-4">
                {/* Password Input */}
                <div className="form-group">
                  <label className="text-sm font-medium text-gray-200 mb-2.5 block">Password</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition" size={18} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full bg-[#1A1530] border border-[#2A2540] text-gray-200 placeholder-gray-500 rounded-lg pl-12 pr-12 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>

                {/* Confirm Password Input */}
                <div className="form-group">
                  <label className="text-sm font-medium text-gray-200 mb-2.5 block">Confirm</label>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition" size={18} />
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full bg-[#1A1530] border border-[#2A2540] text-gray-200 placeholder-gray-500 rounded-lg pl-12 pr-12 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition"
                    >
                      {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <>
                {/* Password Input - For Login */}
                <div className="form-group">
                  <div className="flex items-center justify-between mb-2.5">
                    <label className="text-sm font-medium text-gray-200">Password</label>
                    <a href="#" className="text-xs text-purple-400 hover:text-purple-300 transition font-medium">
                      Forgot Password?
                    </a>
                  </div>
                  <div className="relative group">
                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-purple-400 transition" size={18} />
                    <input
                      type={showPassword ? 'text' : 'password'}
                      placeholder="••••••••"
                      className="w-full bg-[#1A1530] border border-[#2A2540] text-gray-200 placeholder-gray-500 rounded-lg pl-12 pr-12 py-2.5 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500/30 transition duration-200"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-400 transition"
                    >
                      {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                    </button>
                  </div>
                </div>
              </>
            )}

            {/* Remember Me Checkbox - Only for Login */}
            {isLogin && (
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 bg-[#1A1530] border border-[#2A2540] rounded cursor-pointer accent-purple-600 transition"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition">
                  Remember me for 30 days
                </label>
              </div>
            )}

            {/* Agree Terms Checkbox - Only for Signup */}
            {!isLogin && (
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 bg-[#1A1530] border border-[#2A2540] rounded cursor-pointer accent-purple-600 transition mt-0.5 flex-shrink-0"
                />
                <label htmlFor="agreeTerms" className="text-sm text-gray-400 cursor-pointer hover:text-gray-300 transition">
                  By signing up, you agree to Arcadia's <a href="#" className="text-purple-400 hover:text-purple-300 transition">Terms of Service</a> and <a href="#" className="text-purple-400 hover:text-purple-300 transition">Privacy Policy</a>
                </label>
              </div>
            )}

            {/* Auth Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-600/30 flex items-center justify-center gap-2 sign-in-btn mt-6"
            >
              {isLogin ? 'Sign In' : 'Create Account'}
              <span className="transition">→</span>
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-[#2A1840]"></div>
            <span className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Or continue with</span>
            <div className="flex-1 h-px bg-[#2A1840]"></div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-3 gap-3 social-buttons">
            <button className="bg-[#1A1530] border border-[#2A2540] hover:border-purple-500/50 text-gray-400 hover:text-white py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#251C40] group">
              <svg className="w-5 h-5 group-hover:text-purple-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
              <span className="text-sm font-semibold hidden sm:inline">GitHub</span>
            </button>

            <button className="bg-[#1A1530] border border-[#2A2540] hover:border-purple-500/50 text-gray-400 hover:text-white py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#251C40] group">
              <svg className="w-5 h-5 group-hover:text-purple-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="text-sm font-semibold hidden sm:inline">Google</span>
            </button>

            <button className="bg-[#1A1530] border border-[#2A2540] hover:border-purple-500/50 text-gray-400 hover:text-white py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:bg-[#251C40] group">
              <svg className="w-5 h-5 group-hover:text-purple-400 transition" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.317 4.3671a19.8062 19.8062 0 0 0-4.8851-1.5152.074.074 0 0 0-.0789.0371c-.211.3667-.444.8461-.607 1.2250a18.27 18.27 0 0 0-5.487 0c-.163-.3789-.405-.8583-.618-1.2250a.077.077 0 0 0-.0790-.037 19.7355 19.7355 0 0 0-4.8854 1.515.0766.0766 0 0 0-.0326.0277C1.087 8.3093.7065 12.0038 1.1004 15.6212a.0996.0996 0 0 0 .0393.0434 19.9643 19.9643 0 0 0 6.0859 3.0812.0777.0777 0 0 0 .084-.0277c.462-.6122.873-1.2587 1.216-1.9365a.0755.0755 0 0 0-.0379-.1047 12.9964 12.9964 0 0 1-1.853-.892.0744.0744 0 0 1-.0074-.1193c.122-.092.245-.189.365-.276a.0749.0749 0 0 1 .078-.0105c3.928 1.793 8.18 1.793 12.062 0a.0747.0747 0 0 1 .078.0095c.12.087.242.184.365.276a.0745.0745 0 0 1-.009.1192 12.979 12.979 0 0 1-1.873.892.0744.0744 0 0 0-.037.1047c.342.7265.753 1.3832 1.215 1.9584a.077.077 0 0 0 .084.0277 19.963 19.963 0 0 0 6.097-3.0812.0796.0796 0 0 0 .029-.0434c.487-3.9116.146-7.3286-2.021-10.3359a.0628.0628 0 0 0-.028-.0277zM8.02 15.3312c-.8981 0-1.6381-.8139-1.6381-1.8139 0-1.0139.7215-1.8139 1.6381-1.8139.8323 0 1.6381.8139 1.6381 1.8139 0 1-.757 1.8139-1.6381 1.8139zm7.9634 0c-.8323 0-1.6381-.8139-1.6381-1.8139 0-1.0139.7215-1.8139 1.6381-1.8139.8981 0 1.6381.8139 1.6381 1.8139 0 1-.6595 1.8139-1.6381 1.8139z"/>
              </svg>
              <span className="text-sm font-semibold hidden sm:inline">Discord</span>
            </button>
          </div>

          {/* Toggle Link */}
          <p className="text-center text-gray-400 text-sm mt-8">
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              onClick={() => handleToggle(!isLogin)}
              className="text-purple-500 font-semibold hover:text-purple-400 transition"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}
