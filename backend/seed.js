import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Component } from './models/ComponentModel.js';
import { Sparkles, Zap, Heart, Star, TrendingUp, Award, Crown, Flame, Check } from 'lucide-react';

 
const components = [
  {
    name: "Card Example",
    category: "Cards",
    code: `function ExampleCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', padding: '48px 16px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '32px', 
          background: 'rgba(255, 255, 255, 0.1)', 
          backdropFilter: 'blur(10px)',
          borderRadius: '24px', 
          border: '1px solid rgba(255, 255, 255, 0.2)',
          boxShadow: isHovered ? '0 20px 60px rgba(0, 0, 0, 0.3)' : '0 8px 32px rgba(0, 0, 0, 0.1)',
          transition: 'all 0.3s',
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          cursor: 'pointer',
          maxWidth: '400px',
          width: '100%'
        }}
      >
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: 'bold', 
          color: 'white',
          marginBottom: '12px',
          letterSpacing: '0.5px'
        }}>
          Sample Card
        </h3>
        
        <p style={{ 
          fontSize: '0.875rem', 
          color: 'rgba(255, 255, 255, 0.7)',
          marginBottom: '24px',
          lineHeight: '1.5'
        }}>
          This is a sample card component
        </p>
        
        <div style={{ 
          marginTop: '24px',
          padding: '20px',
          background: 'rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          border: '1px solid rgba(255, 255, 255, 0.1)'
        }}>
          <p style={{ 
            color: 'white',
            fontSize: '1rem',
            lineHeight: '1.6'
          }}>
            This is the card content with glassmorphism effect and smooth animations
          </p>
        </div>

        <button 
          style={{ 
            marginTop: '24px', 
            padding: '12px 28px', 
            background: isHovered ? 'rgba(255, 255, 255, 0.95)' : 'white',
            color: '#667eea', 
            border: 'none', 
            borderRadius: '12px', 
            fontWeight: 'bold', 
            cursor: 'pointer', 
            transition: 'all 0.3s',
            fontSize: '0.95rem',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            width: '100%'
          }}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

`
  },
  {
    name: "StylishComponents",
    category: "Cards",
    code: `function StylishCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const SparkleIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l1.5 6.5L20 8l-6.5 1.5L12 16l-1.5-6.5L4 8l6.5-1.5L12 0z" />
      <path d="M19 14l1 3 3 1-3 1-1 3-1-3-3-1 3-1 1-3z" />
    </svg>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #064e3b 100%)', 
      padding: '48px 16px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '2px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #10b981, #34d399, #6ee7b7)' 
            : 'linear-gradient(135deg, #065f46, #059669, #10b981)',
          borderRadius: '24px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 70px rgba(16, 185, 129, 0.5), 0 0 60px rgba(16, 185, 129, 0.3)' 
            : '0 10px 40px rgba(16, 185, 129, 0.2)',
          cursor: 'pointer',
          maxWidth: '420px',
          width: '100%'
        }}
      >
        <div style={{ 
          padding: '36px', 
          background: 'linear-gradient(135deg, #0f172a, #1e293b)',
          borderRadius: '22px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 1 : 0.5
          }}></div>

          {/* Icon */}
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'linear-gradient(135deg, #10b981, #34d399)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '20px',
            color: '#0f172a',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
            transition: 'all 0.3s',
            transform: isHovered ? 'rotate(5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}>
            <SparkleIcon />
          </div>

          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #10b981, #6ee7b7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px',
            letterSpacing: '0.5px'
          }}>
            Premium Card
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '28px',
            lineHeight: '1.6'
          }}>
            Experience the power of modern design with dark theme and vibrant green accents
          </p>
          
          {/* Content Box */}
          <div style={{ 
            marginBottom: '28px',
            padding: '24px',
            background: 'rgba(16, 185, 129, 0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(16, 185, 129, 0.2)',
            transition: 'all 0.3s',
            boxShadow: isHovered ? '0 0 30px rgba(16, 185, 129, 0.1)' : 'none'
          }}>
            <p style={{ 
              color: '#e2e8f0',
              fontSize: '1rem',
              lineHeight: '1.7',
              marginBottom: '16px'
            }}>
              This stylish card features a dark elegant design with beautiful green gradient effects
            </p>

            {/* Features List */}
            <div style={{ marginTop: '20px' }}>
              {['Modern Design', 'Smooth Animations', 'Responsive Layout'].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '10px' 
                }}>
                  <div style={{ 
                    color: '#10b981',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <CheckIcon />
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button 
            style={{ 
              padding: '14px 32px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #10b981, #34d399)' 
                : 'linear-gradient(135deg, #059669, #10b981)',
              color: '#0f172a', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1rem',
              boxShadow: '0 8px 20px rgba(16, 185, 129, 0.3)',
              width: '100%',
              letterSpacing: '0.5px'
            }}
          >
            Get Started
          </button>

          {/* Stats */}
          <div style={{ 
            marginTop: '28px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '24px',
            borderTop: '1px solid rgba(16, 185, 129, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#10b981',
                marginBottom: '4px'
              }}>
                99%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Satisfaction</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#10b981',
                marginBottom: '4px'
              }}>
                24/7
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Support</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#10b981',
                marginBottom: '4px'
              }}>
                5K+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

`
  },
 
 
  {
    name: "Feature Card",
    category: "Cards",
    code: `function FeatureCard() {
  return (
    <div className="relative w-80 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/30 via-cyan-500/30 to-blue-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">
          Feature Card
        </h3>

        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          A modern UI component with glass effect, smooth hover glow and clean typography.
        </p>

        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
          Learn More
        </button>
      </div>
    </div>
  );
}

  `
  },
  {
    name: "Feature Card",
    code: `function StylishComponents() {
  const [activeTab, setActiveTab] = React.useState('home');
  const [liked, setLiked] = React.useState(false);
  const [rating, setRating] = React.useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {/* Hero Section */}
        <div className="relative p-12 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-pink-600/20 backdrop-blur-xl border border-white/20 rounded-3xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-600/30 to-pink-600/30 opacity-0 hover:opacity-100 transition duration-700"></div>
          <div className="relative z-10 text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Stylish Components
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Modern, animated UI components with glassmorphism and neon effects
            </p>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1 - Premium */}
          <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-cyan-500/30 group hover:border-cyan-400/50 transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Premium</h3>
              <p className="text-gray-400 text-sm mb-4">Unlock all features</p>
              <div className="text-3xl font-bold text-cyan-400 mb-4">
                $29<span className="text-sm text-gray-400">/mo</span>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold hover:scale-105 transition">
                Subscribe
              </button>
            </div>
          </div>

          {/* Card 2 - Elite */}
          <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-fuchsia-500/30 group hover:border-fuchsia-400/50 transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-fuchsia-400 to-pink-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Elite</h3>
              <p className="text-gray-400 text-sm mb-4">For professionals</p>
              <div className="text-3xl font-bold text-fuchsia-400 mb-4">
                $99<span className="text-sm text-gray-400">/mo</span>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-600 text-white font-semibold hover:scale-105 transition">
                Upgrade
              </button>
            </div>
          </div>

          {/* Card 3 - Starter */}
          <div className="relative p-6 bg-black/40 backdrop-blur-xl rounded-2xl border border-emerald-500/30 group hover:border-emerald-400/50 transition duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-green-500/10 opacity-0 group-hover:opacity-100 transition duration-500 rounded-2xl"></div>
            <div className="relative z-10">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-emerald-400 to-green-600 flex items-center justify-center mb-3">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Starter</h3>
              <p className="text-gray-400 text-sm mb-4">Perfect to begin</p>
              <div className="text-3xl font-bold text-emerald-400 mb-4">
                $9<span className="text-sm text-gray-400">/mo</span>
              </div>
              <button className="w-full py-2 rounded-lg bg-gradient-to-r from-emerald-500 to-green-600 text-white font-semibold hover:scale-105 transition">
                Start Free
              </button>
            </div>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="relative p-2 bg-black/40 backdrop-blur-xl rounded-2xl border border-white/10 inline-flex gap-2">
          <button
            onClick={() => setActiveTab('home')}
            className={activeTab === 'home' ? 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-lg' : 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 text-gray-400 hover:text-white'}
          >
            Home
          </button>
          <button
            onClick={() => setActiveTab('explore')}
            className={activeTab === 'explore' ? 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-lg' : 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 text-gray-400 hover:text-white'}
          >
            Explore
          </button>
          <button
            onClick={() => setActiveTab('trending')}
            className={activeTab === 'trending' ? 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-lg' : 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 text-gray-400 hover:text-white'}
          >
            Trending
          </button>
          <button
            onClick={() => setActiveTab('profile')}
            className={activeTab === 'profile' ? 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 bg-gradient-to-r from-violet-500 to-fuchsia-600 text-white shadow-lg' : 'px-6 py-3 rounded-xl font-semibold capitalize transition duration-300 text-gray-400 hover:text-white'}
          >
            Profile
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="p-6 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 backdrop-blur-xl border border-blue-500/30 rounded-2xl">
            <svg className="w-8 h-8 text-blue-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
            </svg>
            <div className="text-3xl font-bold text-white mb-1">2.5K</div>
            <div className="text-blue-300 text-sm">Active Users</div>
          </div>

          <div className="p-6 bg-gradient-to-br from-fuchsia-600/20 to-pink-600/20 backdrop-blur-xl border border-fuchsia-500/30 rounded-2xl">
            <svg className="w-8 h-8 text-fuchsia-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <div className="text-3xl font-bold text-white mb-1">18.9K</div>
            <div className="text-fuchsia-300 text-sm">Total Likes</div>
          </div>

          <div className="p-6 bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-xl border border-amber-500/30 rounded-2xl">
            <svg className="w-8 h-8 text-amber-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
            </svg>
            <div className="text-3xl font-bold text-white mb-1">95%</div>
            <div className="text-amber-300 text-sm">Satisfaction</div>
          </div>

          <div className="p-6 bg-gradient-to-br from-emerald-600/20 to-green-600/20 backdrop-blur-xl border border-emerald-500/30 rounded-2xl">
            <svg className="w-8 h-8 text-emerald-400 mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
            <div className="text-3xl font-bold text-white mb-1">47</div>
            <div className="text-emerald-300 text-sm">Awards Won</div>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap gap-4">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white font-bold shadow-lg shadow-violet-500/50 hover:shadow-violet-500/80 hover:scale-105 transition duration-300">
            Primary Action
          </button>

          <button className="px-8 py-4 rounded-xl bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold hover:bg-white/20 hover:border-white/50 transition duration-300">
            Secondary
          </button>

          <button
            onClick={() => setLiked(!liked)}
            className={liked ? 'px-8 py-4 rounded-xl font-bold transition duration-300 bg-gradient-to-r from-pink-600 to-rose-600 text-white shadow-lg shadow-pink-500/50' : 'px-8 py-4 rounded-xl font-bold transition duration-300 bg-white/10 backdrop-blur-sm border border-white/30 text-white hover:bg-white/20'}
          >
            <svg className={liked ? 'w-5 h-5 inline mr-2 fill-white' : 'w-5 h-5 inline mr-2'} fill={liked ? 'currentColor' : 'none'} stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {liked ? 'Liked' : 'Like'}
          </button>
        </div>

        {/* Rating Component */}
        <div className="p-8 bg-gradient-to-br from-amber-600/20 to-orange-600/20 backdrop-blur-xl border border-amber-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">Rate Your Experience</h3>
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="transition duration-300 hover:scale-110"
              >
                <svg
                  className={star <= rating ? 'w-10 h-10 text-amber-400' : 'w-10 h-10 text-gray-600'}
                  fill={star <= rating ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                </svg>
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="text-amber-300 mt-4">
              You rated {rating} star{rating !== 1 ? 's' : ''}! Thank you for your feedback.
            </p>
          )}
        </div>

        {/* Feature List */}
        <div className="p-8 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-6">Features Included</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Unlimited Projects</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Advanced Analytics</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Priority Support</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Custom Branding</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">API Access</span>
            </div>

            <div className="flex items-center gap-3 p-4 bg-white/5 rounded-xl hover:bg-white/10 transition duration-300">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-400 to-emerald-600 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span className="text-gray-300">Team Collaboration</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
  `
  },

    {
    name: "FuturisticFooter",
    category: "Footer",
    code: `
function FuturisticFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  const products = ['Neural Core', 'Quantum Drive', 'UINEX Shield', 'Data Matrix', 'Cloud Nexus'];
  const company = ['About Us', 'Careers', 'Press Kit', 'Partners', 'Contact'];
  const resources = ['Documentation', 'API Reference', 'Community', 'Support', 'Blog'];
  const socials = [
    { name: 'Twitter', icon: '𝕏', color: 'rgb(34, 211, 238)' },
    { name: 'GitHub', icon: '⚡', color: 'rgb(236, 72, 153)' },
    { name: 'Discord', icon: '◆', color: 'rgb(167, 139, 250)' },
    { name: 'LinkedIn', icon: '◉', color: 'rgb(34, 211, 238)' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-purple-950 flex items-end relative overflow-hidden">
      
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.5) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>

        {/* Floating Particles */}
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full animate-pulse"
            style={{
              backgroundColor: i % 3 === 0 ? 'rgb(34, 211, 238)' : i % 3 === 1 ? 'rgb(236, 72, 153)' : 'rgb(167, 139, 250)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (2 + Math.random() * 2) + 's',
              boxShadow: '0 0 8px currentColor',
            }}
          ></div>
        ))}

        {/* Gradient Lines */}
        <div 
          className="absolute w-full h-px top-0"
          style={{
            background: 'linear-gradient(to right, transparent, rgb(34, 211, 238), transparent)',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
          }}
        ></div>
      </div>

      {/* Footer Content */}
      <footer className="relative z-10 w-full">
        
        {/* Top Border with Animation */}
        <div className="relative h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, rgba(34, 211, 238, 0.8), transparent)',
              boxShadow: '0 0 20px rgba(34, 211, 238, 0.6)',
            }}
          ></div>
        </div>

        <div className="backdrop-blur-lg" style={{ backgroundColor: 'rgba(15, 23, 42, 0.9)' }}>
          <div className="max-w-7xl mx-auto px-8 py-16">
            
            {/* Main Footer Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
              
              {/* Company Section */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div 
                    className="w-12 h-12 rounded-lg border-2 flex items-center justify-center relative overflow-hidden"
                    style={{
                      borderColor: 'rgb(34, 211, 238)',
                      backgroundColor: 'rgba(34, 211, 238, 0.1)',
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
                    }}
                  >
                    <div 
                      className="w-6 h-6 rounded animate-pulse"
                      style={{
                        backgroundColor: 'rgb(34, 211, 238)',
                        boxShadow: '0 0 15px rgb(34, 211, 238)',
                      }}
                    ></div>
                  </div>
                  <h3 
                    className="text-2xl font-black tracking-tight"
                    style={{
                      background: 'linear-gradient(90deg, #22d3ee, #ec4899)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                    }}
                  >
                    NEXUS
                  </h3>
                </div>
                <p className="text-sm leading-relaxed mb-6" style={{ color: 'rgb(148, 163, 184)' }}>
                  Building the future of technology with cutting-edge solutions and innovative design.
                </p>
                <div className="flex items-center gap-2">
                  <div 
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(34, 211, 238)',
                      boxShadow: '0 0 10px rgb(34, 211, 238)',
                    }}
                  ></div>
                  <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'rgb(100, 181, 246)' }}>
                    Systems Online
                  </span>
                </div>
              </div>

              {/* Products Section */}
              <div>
                <h4 
                  className="text-lg font-bold uppercase tracking-wider mb-6 relative inline-block"
                  style={{ color: 'rgb(34, 211, 238)' }}
                >
                  Products
                  <div 
                    className="absolute -bottom-2 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: '40px',
                      backgroundColor: 'rgb(34, 211, 238)',
                      boxShadow: '0 0 10px rgb(34, 211, 238)',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {products.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 inline-flex items-center gap-2 group"
                        style={{ 
                          color: hoveredLink === item ? 'rgb(34, 211, 238)' : 'rgb(148, 163, 184)',
                          textShadow: hoveredLink === item ? '0 0 10px rgba(34, 211, 238, 0.5)' : 'none',
                        }}
                        onMouseEnter={() => setHoveredLink(item)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span 
                          className="transition-transform duration-300"
                          style={{
                            transform: hoveredLink === item ? 'translateX(5px)' : 'translateX(0)',
                          }}
                        >
                          ▸
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company Section */}
              <div>
                <h4 
                  className="text-lg font-bold uppercase tracking-wider mb-6 relative inline-block"
                  style={{ color: 'rgb(236, 72, 153)' }}
                >
                  Company
                  <div 
                    className="absolute -bottom-2 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: '40px',
                      backgroundColor: 'rgb(236, 72, 153)',
                      boxShadow: '0 0 10px rgb(236, 72, 153)',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {company.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 inline-flex items-center gap-2"
                        style={{ 
                          color: hoveredLink === item ? 'rgb(236, 72, 153)' : 'rgb(148, 163, 184)',
                          textShadow: hoveredLink === item ? '0 0 10px rgba(236, 72, 153, 0.5)' : 'none',
                        }}
                        onMouseEnter={() => setHoveredLink(item)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span 
                          className="transition-transform duration-300"
                          style={{
                            transform: hoveredLink === item ? 'translateX(5px)' : 'translateX(0)',
                          }}
                        >
                          ▸
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Section */}
              <div>
                <h4 
                  className="text-lg font-bold uppercase tracking-wider mb-6 relative inline-block"
                  style={{ color: 'rgb(167, 139, 250)' }}
                >
                  Resources
                  <div 
                    className="absolute -bottom-2 left-0 h-0.5 transition-all duration-300"
                    style={{
                      width: '40px',
                      backgroundColor: 'rgb(167, 139, 250)',
                      boxShadow: '0 0 10px rgb(167, 139, 250)',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {resources.map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 inline-flex items-center gap-2"
                        style={{ 
                          color: hoveredLink === item ? 'rgb(167, 139, 250)' : 'rgb(148, 163, 184)',
                          textShadow: hoveredLink === item ? '0 0 10px rgba(167, 139, 250, 0.5)' : 'none',
                        }}
                        onMouseEnter={() => setHoveredLink(item)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span 
                          className="transition-transform duration-300"
                          style={{
                            transform: hoveredLink === item ? 'translateX(5px)' : 'translateX(0)',
                          }}
                        >
                          ▸
                        </span>
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Divider with Animation */}
            <div className="relative h-px mb-8 overflow-hidden">
              <div 
                className="absolute inset-0"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(34, 211, 238, 0.5), rgba(236, 72, 153, 0.5), rgba(167, 139, 250, 0.5), transparent)',
                }}
              ></div>
            </div>

            {/* Newsletter Section */}
            <div className="mb-12 p-8 border rounded-xl relative overflow-hidden" style={{
              borderColor: 'rgb(34, 211, 238)',
              backgroundColor: 'rgba(15, 23, 42, 0.5)',
              boxShadow: '0 0 30px rgba(34, 211, 238, 0.2)',
            }}>
              <div className="absolute top-0 left-0 right-0 h-1" style={{
                background: 'linear-gradient(to right, rgb(34, 211, 238), rgb(236, 72, 153), rgb(167, 139, 250))',
              }}></div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <h4 className="text-2xl font-bold mb-2" style={{ color: 'rgb(34, 211, 238)' }}>
                    Stay Connected
                  </h4>
                  <p className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>
                    Subscribe to our newsletter for the latest updates and innovations
                  </p>
                </div>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-4 py-3 bg-transparent border-2 rounded-lg font-mono text-sm transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: 'rgb(51, 65, 85)',
                      color: 'rgb(203, 213, 225)',
                    }}
                  />
                  <button 
                    className="px-6 py-3 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105 rounded-lg whitespace-nowrap"
                    style={{
                      backgroundColor: 'rgba(34, 211, 238, 0.2)',
                      border: '2px solid rgb(34, 211, 238)',
                      color: 'rgb(34, 211, 238)',
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.3)',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              {/* Social Links */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    borderColor: hoveredSocial === 'Twitter' ? 'rgb(34, 211, 238)' : 'rgb(51, 65, 85)',
                    backgroundColor: hoveredSocial === 'Twitter' ? 'rgba(34, 211, 238, 0.2)' : 'rgba(15, 23, 42, 0.5)',
                    boxShadow: hoveredSocial === 'Twitter' ? '0 0 25px rgba(34, 211, 238, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredSocial('Twitter')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span 
                    className="text-xl font-bold transition-all duration-300"
                    style={{ 
                      color: hoveredSocial === 'Twitter' ? 'rgb(34, 211, 238)' : 'rgb(148, 163, 184)',
                      textShadow: hoveredSocial === 'Twitter' ? '0 0 15px rgb(34, 211, 238)' : 'none',
                      transform: hoveredSocial === 'Twitter' ? 'scale(1.2)' : 'scale(1)',
                    }}
                  >
                    𝕏
                  </span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    borderColor: hoveredSocial === 'GitHub' ? 'rgb(236, 72, 153)' : 'rgb(51, 65, 85)',
                    backgroundColor: hoveredSocial === 'GitHub' ? 'rgba(236, 72, 153, 0.2)' : 'rgba(15, 23, 42, 0.5)',
                    boxShadow: hoveredSocial === 'GitHub' ? '0 0 25px rgba(236, 72, 153, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredSocial('GitHub')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span 
                    className="text-xl font-bold transition-all duration-300"
                    style={{ 
                      color: hoveredSocial === 'GitHub' ? 'rgb(236, 72, 153)' : 'rgb(148, 163, 184)',
                      textShadow: hoveredSocial === 'GitHub' ? '0 0 15px rgb(236, 72, 153)' : 'none',
                      transform: hoveredSocial === 'GitHub' ? 'scale(1.2)' : 'scale(1)',
                    }}
                  >
                    ⚡
                  </span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    borderColor: hoveredSocial === 'Discord' ? 'rgb(167, 139, 250)' : 'rgb(51, 65, 85)',
                    backgroundColor: hoveredSocial === 'Discord' ? 'rgba(167, 139, 250, 0.2)' : 'rgba(15, 23, 42, 0.5)',
                    boxShadow: hoveredSocial === 'Discord' ? '0 0 25px rgba(167, 139, 250, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredSocial('Discord')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span 
                    className="text-xl font-bold transition-all duration-300"
                    style={{ 
                      color: hoveredSocial === 'Discord' ? 'rgb(167, 139, 250)' : 'rgb(148, 163, 184)',
                      textShadow: hoveredSocial === 'Discord' ? '0 0 15px rgb(167, 139, 250)' : 'none',
                      transform: hoveredSocial === 'Discord' ? 'scale(1.2)' : 'scale(1)',
                    }}
                  >
                    ◆
                  </span>
                </a>
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 relative overflow-hidden group"
                  style={{
                    borderColor: hoveredSocial === 'LinkedIn' ? 'rgb(34, 211, 238)' : 'rgb(51, 65, 85)',
                    backgroundColor: hoveredSocial === 'LinkedIn' ? 'rgba(34, 211, 238, 0.2)' : 'rgba(15, 23, 42, 0.5)',
                    boxShadow: hoveredSocial === 'LinkedIn' ? '0 0 25px rgba(34, 211, 238, 0.4)' : 'none',
                  }}
                  onMouseEnter={() => setHoveredSocial('LinkedIn')}
                  onMouseLeave={() => setHoveredSocial(null)}
                >
                  <span 
                    className="text-xl font-bold transition-all duration-300"
                    style={{ 
                      color: hoveredSocial === 'LinkedIn' ? 'rgb(34, 211, 238)' : 'rgb(148, 163, 184)',
                      textShadow: hoveredSocial === 'LinkedIn' ? '0 0 15px rgb(34, 211, 238)' : 'none',
                      transform: hoveredSocial === 'LinkedIn' ? 'scale(1.2)' : 'scale(1)',
                    }}
                  >
                    ◉
                  </span>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-sm mb-2" style={{ color: 'rgb(148, 163, 184)' }}>
                  © 2025 Nexus Corp. All rights reserved.
                </p>
                <div className="flex gap-4 justify-center md:justify-end text-xs">
                  <a href="#" className="transition-colors duration-300 hover:text-cyan-400" style={{ color: 'rgb(100, 116, 139)' }}>
                    Privacy Policy
                  </a>
                  <span style={{ color: 'rgb(51, 65, 85)' }}>•</span>
                  <a href="#" className="transition-colors duration-300 hover:text-cyan-400" style={{ color: 'rgb(100, 116, 139)' }}>
                    Terms of Service
                  </a>
                  <span style={{ color: 'rgb(51, 65, 85)' }}>•</span>
                  <a href="#" className="transition-colors duration-300 hover:text-cyan-400" style={{ color: 'rgb(100, 116, 139)' }}>
                    Cookie Policy
                  </a>
                </div>
              </div>

            </div>

            {/* Tech Indicator */}
            <div className="mt-8 flex justify-center">
              <div 
                className="flex items-center gap-3 px-6 py-2 border rounded-full"
                style={{
                  borderColor: 'rgba(34, 211, 238, 0.3)',
                  backgroundColor: 'rgba(15, 23, 42, 0.5)',
                }}
              >
                <div className="flex gap-1">
                  <div
                    className="w-1 h-3 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(34, 211, 238)',
                      animationDelay: '0s',
                      boxShadow: '0 0 8px rgb(34, 211, 238)',
                    }}
                  ></div>
                  <div
                    className="w-1 h-3 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(236, 72, 153)',
                      animationDelay: '0.2s',
                      boxShadow: '0 0 8px rgb(236, 72, 153)',
                    }}
                  ></div>
                  <div
                    className="w-1 h-3 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(167, 139, 250)',
                      animationDelay: '0.4s',
                      boxShadow: '0 0 8px rgb(167, 139, 250)',
                    }}
                  ></div>
                </div>
                <span className="text-xs font-mono uppercase tracking-widest" style={{ color: 'rgb(100, 181, 246)' }}>
                  Powered by Advanced Neural Networks
                </span>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Glow */}
        <div 
          className="h-1"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(34, 211, 238, 0.5), rgba(236, 72, 153, 0.5), rgba(167, 139, 250, 0.5), transparent)',
            boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)',
          }}
        ></div>

      </footer>
    </div>
  );
}



  `
  },

  {
    name: "NeonWaveFooter",
    category: "Footer",
    code: `

function NeonWaveFooter() {
  const [activeSection, setActiveSection] = useState(null);
  const [emailFocused, setEmailFocused] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Animated Wave Background */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div 
          className="absolute w-full h-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 80%, rgba(139, 92, 246, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 20% 70%, rgba(59, 130, 246, 0.3) 0%, transparent 50%), radial-gradient(ellipse at 80% 70%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)',
          }}
        ></div>
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            className="absolute w-full h-px animate-pulse"
            style={{
              background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.5), transparent)',
              top: 20 * i + '%',
              animationDelay: i * 0.8 + 's',
              animationDuration: '4s',
            }}
          ></div>
        ))}
      </div>

      {/* Glowing Dots */}
      <div className="absolute inset-0">
        {[...Array(40)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-pulse"
            style={{
              width: Math.random() * 4 + 2 + 'px',
              height: Math.random() * 4 + 2 + 'px',
              backgroundColor: i % 2 === 0 ? 'rgb(139, 92, 246)' : 'rgb(236, 72, 153)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 4 + 's',
              animationDuration: (3 + Math.random() * 3) + 's',
              boxShadow: '0 0 10px currentColor',
            }}
          ></div>
        ))}
      </div>

      <footer className="relative z-10 w-full">
        
        {/* Wavy Top Border */}
        <div className="relative h-2">
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 1200 10">
            <path 
              d="M0,5 Q300,0 600,5 T1200,5" 
              fill="none" 
              stroke="url(#gradient)" 
              strokeWidth="2"
              style={{
                filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.8))',
              }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" style={{ stopColor: 'rgb(59, 130, 246)', stopOpacity: 1 }} />
                <stop offset="50%" style={{ stopColor: 'rgb(139, 92, 246)', stopOpacity: 1 }} />
                <stop offset="100%" style={{ stopColor: 'rgb(236, 72, 153)', stopOpacity: 1 }} />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div 
          className="relative"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.95), rgba(10, 10, 20, 0.98))',
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-20">
            
            {/* Logo and CTA Section */}
            <div className="text-center mb-16">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div 
                    className="w-20 h-20 rounded-full border-4 flex items-center justify-center relative"
                    style={{
                      borderColor: 'rgb(139, 92, 246)',
                      background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
                      boxShadow: '0 0 40px rgba(139, 92, 246, 0.6), inset 0 0 20px rgba(139, 92, 246, 0.3)',
                    }}
                  >
                    <div 
                      className="absolute inset-0 rounded-full animate-pulse"
                      style={{
                        border: '2px solid rgba(236, 72, 153, 0.5)',
                        boxShadow: '0 0 30px rgba(236, 72, 153, 0.4)',
                      }}
                    ></div>
                    <span className="text-3xl font-black" style={{ color: 'rgb(139, 92, 246)' }}>V</span>
                  </div>
                  <div 
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(236, 72, 153)',
                      boxShadow: '0 0 20px rgb(236, 72, 153)',
                    }}
                  ></div>
                </div>
              </div>
              
              <h2 
                className="text-5xl font-black mb-4"
                style={{
                  background: 'linear-gradient(135deg, #8b5cf6, #ec4899, #3b82f6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: '0 0 40px rgba(139, 92, 246, 0.3)',
                }}
              >
                VELOCITY LABS
              </h2>
              
              <p className="text-xl mb-8" style={{ color: 'rgb(156, 163, 175)' }}>
                Innovation at the speed of light
              </p>

              {/* Newsletter Box */}
              <div 
                className="max-w-2xl mx-auto p-8 rounded-2xl border-2 relative overflow-hidden"
                style={{
                  borderColor: emailFocused ? 'rgb(139, 92, 246)' : 'rgb(55, 65, 81)',
                  background: 'rgba(17, 24, 39, 0.8)',
                  backdropFilter: 'blur(10px)',
                  boxShadow: emailFocused ? '0 0 40px rgba(139, 92, 246, 0.4)' : '0 0 20px rgba(0, 0, 0, 0.5)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div className="absolute top-0 left-0 right-0 h-1 opacity-70" style={{
                  background: 'linear-gradient(to right, rgb(59, 130, 246), rgb(139, 92, 246), rgb(236, 72, 153))',
                }}></div>

                <h3 className="text-2xl font-bold mb-3" style={{ color: 'rgb(139, 92, 246)' }}>
                  Join the Future
                </h3>
                <p className="text-sm mb-6" style={{ color: 'rgb(156, 163, 175)' }}>
                  Get exclusive access to cutting-edge updates and innovations
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="your@email.com"
                    className="flex-1 px-6 py-4 bg-black border-2 rounded-xl font-mono transition-all duration-300 focus:outline-none"
                    style={{
                      borderColor: emailFocused ? 'rgb(139, 92, 246)' : 'rgb(31, 41, 55)',
                      color: 'rgb(229, 231, 235)',
                      boxShadow: emailFocused ? '0 0 20px rgba(139, 92, 246, 0.3)' : 'none',
                    }}
                    onFocus={() => setEmailFocused(true)}
                    onBlur={() => setEmailFocused(false)}
                  />
                  <button 
                    className="px-8 py-4 font-bold uppercase rounded-xl transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                    style={{
                      background: 'linear-gradient(135deg, rgb(139, 92, 246), rgb(236, 72, 153))',
                      color: 'white',
                      boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
                    }}
                  >
                    <span className="relative z-10">Subscribe</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Main Footer Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
              
              {/* Solutions */}
              <div
                onMouseEnter={() => setActiveSection('solutions')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <h4 
                  className="text-lg font-bold uppercase mb-6 relative inline-block transition-all duration-300"
                  style={{ 
                    color: activeSection === 'solutions' ? 'rgb(139, 92, 246)' : 'rgb(209, 213, 219)',
                    textShadow: activeSection === 'solutions' ? '0 0 20px rgba(139, 92, 246, 0.8)' : 'none',
                  }}
                >
                  Solutions
                  <div 
                    className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-300"
                    style={{
                      width: activeSection === 'solutions' ? '100%' : '30%',
                      backgroundColor: 'rgb(139, 92, 246)',
                      boxShadow: activeSection === 'solutions' ? '0 0 15px rgb(139, 92, 246)' : 'none',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {['AI Platform', 'Cloud Services', 'Data Analytics', 'IoT Solutions', 'Blockchain'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        style={{ color: 'rgb(156, 163, 175)' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Developers */}
              <div
                onMouseEnter={() => setActiveSection('developers')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <h4 
                  className="text-lg font-bold uppercase mb-6 relative inline-block transition-all duration-300"
                  style={{ 
                    color: activeSection === 'developers' ? 'rgb(236, 72, 153)' : 'rgb(209, 213, 219)',
                    textShadow: activeSection === 'developers' ? '0 0 20px rgba(236, 72, 153, 0.8)' : 'none',
                  }}
                >
                  Developers
                  <div 
                    className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-300"
                    style={{
                      width: activeSection === 'developers' ? '100%' : '30%',
                      backgroundColor: 'rgb(236, 72, 153)',
                      boxShadow: activeSection === 'developers' ? '0 0 15px rgb(236, 72, 153)' : 'none',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {['API Docs', 'SDK', 'Tutorials', 'GitHub', 'Community'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        style={{ color: 'rgb(156, 163, 175)' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div
                onMouseEnter={() => setActiveSection('company')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <h4 
                  className="text-lg font-bold uppercase mb-6 relative inline-block transition-all duration-300"
                  style={{ 
                    color: activeSection === 'company' ? 'rgb(59, 130, 246)' : 'rgb(209, 213, 219)',
                    textShadow: activeSection === 'company' ? '0 0 20px rgba(59, 130, 246, 0.8)' : 'none',
                  }}
                >
                  Company
                  <div 
                    className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-300"
                    style={{
                      width: activeSection === 'company' ? '100%' : '30%',
                      backgroundColor: 'rgb(59, 130, 246)',
                      boxShadow: activeSection === 'company' ? '0 0 15px rgb(59, 130, 246)' : 'none',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {['About', 'Careers', 'News', 'Partners', 'Contact'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        style={{ color: 'rgb(156, 163, 175)' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div
                onMouseEnter={() => setActiveSection('support')}
                onMouseLeave={() => setActiveSection(null)}
              >
                <h4 
                  className="text-lg font-bold uppercase mb-6 relative inline-block transition-all duration-300"
                  style={{ 
                    color: activeSection === 'support' ? 'rgb(139, 92, 246)' : 'rgb(209, 213, 219)',
                    textShadow: activeSection === 'support' ? '0 0 20px rgba(139, 92, 246, 0.8)' : 'none',
                  }}
                >
                  Support
                  <div 
                    className="absolute -bottom-2 left-0 h-1 rounded-full transition-all duration-300"
                    style={{
                      width: activeSection === 'support' ? '100%' : '30%',
                      backgroundColor: 'rgb(139, 92, 246)',
                      boxShadow: activeSection === 'support' ? '0 0 15px rgb(139, 92, 246)' : 'none',
                    }}
                  ></div>
                </h4>
                <ul className="space-y-3">
                  {['Help Center', 'Status', 'FAQs', 'Security', 'Legal'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm transition-all duration-300 hover:translate-x-2 inline-block"
                        style={{ color: 'rgb(156, 163, 175)' }}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Divider with Glow */}
            <div className="relative h-px mb-12">
              <div 
                className="absolute inset-0 opacity-50"
                style={{
                  background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8), transparent)',
                  boxShadow: '0 0 20px rgba(139, 92, 246, 0.5)',
                }}
              ></div>
            </div>

            {/* Bottom Bar */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Social Icons */}
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 hover:scale-110 relative group"
                  style={{
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  }}
                >
                  <span className="text-xl" style={{ color: 'rgb(59, 130, 246)' }}>f</span>
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)',
                    }}
                  ></div>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 hover:scale-110 relative group"
                  style={{
                    borderColor: 'rgb(139, 92, 246)',
                    backgroundColor: 'rgba(139, 92, 246, 0.1)',
                  }}
                >
                  <span className="text-xl" style={{ color: 'rgb(139, 92, 246)' }}>𝕏</span>
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 25px rgba(139, 92, 246, 0.6)',
                    }}
                  ></div>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 hover:scale-110 relative group"
                  style={{
                    borderColor: 'rgb(236, 72, 153)',
                    backgroundColor: 'rgba(236, 72, 153, 0.1)',
                  }}
                >
                  <span className="text-xl" style={{ color: 'rgb(236, 72, 153)' }}>in</span>
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 25px rgba(236, 72, 153, 0.6)',
                    }}
                  ></div>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 flex items-center justify-center rounded-lg border-2 transition-all duration-300 hover:scale-110 relative group"
                  style={{
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                  }}
                >
                  <span className="text-xl" style={{ color: 'rgb(59, 130, 246)' }}>⚡</span>
                  <div 
                    className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      boxShadow: '0 0 25px rgba(59, 130, 246, 0.6)',
                    }}
                  ></div>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-sm mb-2" style={{ color: 'rgb(156, 163, 175)' }}>
                  © 2025 Velocity Labs. All rights reserved.
                </p>
                <div className="flex gap-6 text-xs justify-center">
                  <a href="#" className="transition-colors duration-300 hover:text-purple-400" style={{ color: 'rgb(107, 114, 128)' }}>
                    Privacy
                  </a>
                  <a href="#" className="transition-colors duration-300 hover:text-purple-400" style={{ color: 'rgb(107, 114, 128)' }}>
                    Terms
                  </a>
                  <a href="#" className="transition-colors duration-300 hover:text-purple-400" style={{ color: 'rgb(107, 114, 128)' }}>
                    Cookies
                  </a>
                </div>
              </div>

              {/* Status Badge */}
              <div 
                className="flex items-center gap-3 px-5 py-3 rounded-full border-2"
                style={{
                  borderColor: 'rgba(34, 197, 94, 0.5)',
                  backgroundColor: 'rgba(34, 197, 94, 0.1)',
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'rgb(34, 197, 94)',
                    boxShadow: '0 0 10px rgb(34, 197, 94)',
                  }}
                ></div>
                <span className="text-xs font-mono uppercase tracking-wider" style={{ color: 'rgb(34, 197, 94)' }}>
                  All Systems Operational
                </span>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Gradient Glow */}
        <div 
          className="h-1"
          style={{
            background: 'linear-gradient(to right, transparent, rgba(139, 92, 246, 0.8), rgba(236, 72, 153, 0.8), transparent)',
            boxShadow: '0 5px 30px rgba(139, 92, 246, 0.5)',
          }}
        ></div>

      </footer>
    </div>
  );
}



  `
  },


  {
    name: "PremiumFooter",
    category: "Footer",
    code: `

function PremiumFooter() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        {/* Diagonal Gold Lines */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute w-full h-px transform rotate-45 origin-center"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
              top: '30%',
            }}
          ></div>
          <div 
            className="absolute w-full h-px transform -rotate-45 origin-center"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
              top: '70%',
            }}
          ></div>
        </div>

        {/* Ambient Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
          }}
        ></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: 'rgb(212, 175, 55)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (4 + Math.random() * 3) + 's',
              boxShadow: '0 0 8px rgb(212, 175, 55)',
            }}
          ></div>
        ))}
      </div>

      <footer className="relative z-10 w-full">
        
        {/* Premium Top Border */}
        <div className="relative">
          <div 
            className="h-px w-full"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            }}
          ></div>
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 flex justify-center gap-2"
          >
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(212, 175, 55)', boxShadow: '0 0 8px rgb(212, 175, 55)' }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(212, 175, 55)', boxShadow: '0 0 8px rgb(212, 175, 55)' }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(212, 175, 55)', boxShadow: '0 0 8px rgb(212, 175, 55)' }}></div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(10, 10, 10, 1))' }}>
          <div className="max-w-7xl mx-auto px-8 py-20">
            
            {/* Premium Brand Section */}
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Outer Ring */}
                  <div 
                    className="w-32 h-32 rounded-full border flex items-center justify-center relative"
                    style={{
                      borderColor: 'rgb(212, 175, 55)',
                      borderWidth: '2px',
                      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                      boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), inset 0 0 30px rgba(212, 175, 55, 0.1)',
                    }}
                  >
                    {/* Inner Diamond */}
                    <div 
                      className="w-16 h-16 transform rotate-45 border-2"
                      style={{
                        borderColor: 'rgb(212, 175, 55)',
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                      }}
                    >
                      <div 
                        className="absolute inset-0 flex items-center justify-center transform -rotate-45"
                      >
                        <span 
                          className="text-3xl font-serif font-bold"
                          style={{ 
                            color: 'rgb(212, 175, 55)',
                            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                          }}
                        >
                          L
                        </span>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                  </div>

                  {/* Rotating Outer Ring */}
                  <div 
                    className="absolute inset-0 rounded-full border animate-pulse"
                    style={{
                      borderColor: 'rgba(212, 175, 55, 0.3)',
                      borderWidth: '1px',
                      animation: 'pulse 3s ease-in-out infinite',
                    }}
                  ></div>
                </div>
              </div>
              
              <h2 
                className="text-6xl font-serif font-light mb-3 tracking-widest"
                style={{
                  color: 'rgb(212, 175, 55)',
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                  letterSpacing: '0.3em',
                }}
              >
                LUXOR
              </h2>
              
              <div 
                className="flex items-center justify-center gap-4 mb-6"
              >
                <div className="h-px w-16" style={{ backgroundColor: 'rgb(212, 175, 55)' }}></div>
                <span 
                  className="text-sm font-serif tracking-widest"
                  style={{ color: 'rgb(156, 163, 175)' }}
                >
                  EST. 2025
                </span>
                <div className="h-px w-16" style={{ backgroundColor: 'rgb(212, 175, 55)' }}></div>
              </div>

              <p 
                className="text-lg font-light tracking-wide mb-12"
                style={{ color: 'rgb(156, 163, 175)' }}
              >
                Timeless Elegance. Uncompromising Quality.
              </p>

              {/* Premium Newsletter */}
              <div className="max-w-2xl mx-auto">
                <h3 
                  className="text-2xl font-serif mb-6 tracking-wide"
                  style={{ color: 'rgb(212, 175, 55)' }}
                >
                  Join Our Distinguished Circle
                </h3>
                
                <div 
                  className="flex flex-col sm:flex-row gap-4 p-2 border rounded-lg transition-all duration-500"
                  style={{
                    borderColor: emailFocus ? 'rgb(212, 175, 55)' : 'rgb(55, 65, 81)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    boxShadow: emailFocus ? '0 0 30px rgba(212, 175, 55, 0.2)' : 'none',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-transparent font-light text-sm tracking-wide focus:outline-none"
                    style={{
                      color: 'rgb(229, 231, 235)',
                    }}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <button 
                    className="px-8 py-4 font-light tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'rgb(212, 175, 55)',
                      color: 'rgb(0, 0, 0)',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Elegant Divider */}
            <div className="flex items-center justify-center gap-8 mb-16">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgb(212, 175, 55))' }}></div>
              <div 
                className="w-3 h-3 transform rotate-45"
                style={{
                  border: '1px solid rgb(212, 175, 55)',
                  backgroundColor: 'rgba(212, 175, 55, 0.2)',
                }}
              ></div>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgb(212, 175, 55))' }}></div>
            </div>

            {/* Luxury Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              
              {/* Collections */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Collections
                </h4>
                <ul className="space-y-4">
                  {['Signature Series', 'Limited Edition', 'Heritage', 'Contemporary', 'Bespoke'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block group"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Services
                </h4>
                <ul className="space-y-4">
                  {['Personal Consultation', 'Concierge Service', 'Private Events', 'Custom Design', 'VIP Access'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Company
                </h4>
                <ul className="space-y-4">
                  {['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Support
                </h4>
                <ul className="space-y-4">
                  {['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Care Guide'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Elegant Divider */}
            <div 
              className="h-px mb-12"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent)',
              }}
            ></div>

            {/* Premium Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Social Icons */}
              <div className="flex gap-6">
                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>fb</span>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>tw</span>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>ig</span>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>li</span>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-sm font-light tracking-wide mb-2" style={{ color: 'rgb(107, 114, 128)' }}>
                  © 2025 Luxor. All Rights Reserved.
                </p>
                <div className="flex gap-6 text-xs font-light">
                  <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(107, 114, 128)' }}>
                    Privacy Policy
                  </a>
                  <span style={{ color: 'rgb(55, 65, 81)' }}>•</span>
                  <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(107, 114, 128)' }}>
                    Terms of Service
                  </a>
                  <span style={{ color: 'rgb(55, 65, 81)' }}>•</span>
                  <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(107, 114, 128)' }}>
                    Accessibility
                  </a>
                </div>
              </div>

              {/* Awards Badge */}
              <div 
                className="flex items-center gap-3 px-6 py-3 border"
                style={{
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  backgroundColor: 'rgba(212, 175, 55, 0.05)',
                }}
              >
                <div 
                  className="w-8 h-8 border flex items-center justify-center"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                  }}
                >
                  <span className="text-xs" style={{ color: 'rgb(212, 175, 55)' }}>★</span>
                </div>
                <div>
                  <div className="text-xs font-light tracking-wide" style={{ color: 'rgb(212, 175, 55)' }}>
                    Award Winning
                  </div>
                  <div className="text-xs font-light" style={{ color: 'rgb(107, 114, 128)' }}>
                    Design Excellence
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Premium Bottom Border */}
        <div 
          className="h-px"
          style={{
            background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
            boxShadow: '0 -2px 20px rgba(212, 175, 55, 0.3)',
          }}
        ></div>

      </footer>
    </div>
  );
}
 

  `
  },
  {
    name: "DarkGreenFooter",
    category: "Footer",
    code: `

function DarkGreenFooter() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen flex items-end relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0a1e0a 0%, #1a3a1a 25%, #0d4d0d 50%, #15661f 75%, #1a8a2e 100%)',
      }}
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.6) 0%, transparent 70%)',
            top: '10%',
            left: '20%',
            animationDuration: '4s',
          }}
        ></div>
        <div 
          className="absolute w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.5) 0%, transparent 70%)',
            bottom: '20%',
            right: '15%',
            animationDuration: '6s',
            animationDelay: '1s',
          }}
        ></div>
        <div 
          className="absolute w-64 h-64 rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(74, 222, 128, 0.4) 0%, transparent 70%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animationDuration: '5s',
            animationDelay: '2s',
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full opacity-30 animate-pulse"
            style={{
              background: 'rgb(34, 197, 94)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 3 + 's',
              animationDuration: (2 + Math.random() * 2) + 's',
              boxShadow: '0 0 10px rgba(34, 197, 94, 0.5)',
            }}
          ></div>
        ))}
      </div>

      <footer className="relative z-10 w-full">
        
        {/* Glass Container */}
        <div 
          className="backdrop-blur-xl border-t"
          style={{
            background: 'rgba(10, 30, 10, 0.7)',
            borderColor: 'rgba(34, 197, 94, 0.2)',
            boxShadow: '0 -8px 32px rgba(0, 0, 0, 0.3)',
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-20">
            
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              
              {/* Brand Card */}
              <div 
                className="lg:col-span-1 p-8 rounded-3xl backdrop-blur-md transition-all duration-500"
                style={{
                  background: hoveredCard === 'brand' 
                    ? 'rgba(34, 197, 94, 0.15)' 
                    : 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  boxShadow: hoveredCard === 'brand'
                    ? '0 8px 32px rgba(34, 197, 94, 0.2)'
                    : '0 4px 16px rgba(0, 0, 0, 0.2)',
                  transform: hoveredCard === 'brand' ? 'translateY(-5px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard('brand')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center backdrop-blur-sm"
                    style={{
                      background: 'rgba(34, 197, 94, 0.2)',
                      border: '2px solid rgba(34, 197, 94, 0.4)',
                      boxShadow: '0 0 20px rgba(34, 197, 94, 0.3)',
                    }}
                  >
                    <span className="text-2xl font-bold" style={{ color: 'rgb(74, 222, 128)' }}>✦</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold" style={{ color: 'rgb(74, 222, 128)' }}>PIXNOVA</h2>
                    <p className="text-xs tracking-widest" style={{ color: 'rgb(134, 239, 172)', opacity: 0.8 }}>CREATIVE LAB</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-6" style={{ color: 'rgb(187, 247, 208)', opacity: 0.9 }}>
                  Pushing boundaries of design and technology to create unforgettable digital experiences.
                </p>
                <div className="flex gap-3">
                  {['✱', '◆', '●', '▲'].map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-300 hover:scale-110"
                      style={{
                        background: 'rgba(34, 197, 94, 0.15)',
                        border: '1px solid rgba(34, 197, 94, 0.3)',
                      }}
                    >
                      <span className="text-sm" style={{ color: 'rgb(74, 222, 128)' }}>{icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Card */}
              <div 
                className="lg:col-span-2 p-8 rounded-3xl backdrop-blur-md transition-all duration-500"
                style={{
                  background: hoveredCard === 'newsletter' 
                    ? 'rgba(34, 197, 94, 0.15)' 
                    : 'rgba(34, 197, 94, 0.08)',
                  border: '1px solid rgba(34, 197, 94, 0.3)',
                  boxShadow: hoveredCard === 'newsletter'
                    ? '0 8px 32px rgba(34, 197, 94, 0.2)'
                    : '0 4px 16px rgba(0, 0, 0, 0.2)',
                  transform: hoveredCard === 'newsletter' ? 'translateY(-5px)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard('newsletter')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="text-2xl font-bold mb-3" style={{ color: 'rgb(74, 222, 128)' }}>Stay in the Loop</h3>
                <p className="mb-6" style={{ color: 'rgb(187, 247, 208)', opacity: 0.8 }}>
                  Get exclusive updates, early access, and creative inspiration delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-4 rounded-2xl backdrop-blur-md focus:outline-none transition-all duration-300"
                    style={{
                      background: 'rgba(34, 197, 94, 0.1)',
                      border: '1px solid rgba(34, 197, 94, 0.3)',
                      color: 'rgb(187, 247, 208)',
                    }}
                  />
                  <button 
                    className="px-8 py-4 rounded-2xl font-semibold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, rgba(34, 197, 94, 0.4) 0%, rgba(34, 197, 94, 0.2) 100%)',
                      border: '1px solid rgba(34, 197, 94, 0.5)',
                      boxShadow: '0 4px 16px rgba(34, 197, 94, 0.3)',
                      color: 'rgb(74, 222, 128)',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              
              {[
                { title: 'Product', links: ['Features', 'Pricing', 'Updates', 'Beta'] },
                { title: 'Explore', links: ['Gallery', 'Showcase', 'Blog', 'Stories'] },
                { title: 'Company', links: ['About', 'Team', 'Careers', 'Press'] },
                { title: 'Support', links: ['Help', 'Contact', 'FAQ', 'Docs'] },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-bold uppercase tracking-wider mb-6" style={{ color: 'rgb(74, 222, 128)', opacity: 0.9 }}>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="transition-all duration-300 inline-block hover:translate-x-1"
                          style={{ 
                            color: 'rgb(187, 247, 208)', 
                            opacity: 0.7,
                          }}
                          onMouseEnter={(e) => e.target.style.opacity = '1'}
                          onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

            {/* Divider */}
            <div 
              className="h-px mb-12"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(34, 197, 94, 0.3), transparent)',
              }}
            ></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex items-center gap-8">
                <p className="text-sm" style={{ color: 'rgb(187, 247, 208)', opacity: 0.7 }}>
                  © 2025 PIXNOVA Creative Lab
                </p>
                <div className="flex gap-6 text-sm">
                  <a 
                    href="#" 
                    className="transition-opacity duration-300"
                    style={{ color: 'rgb(187, 247, 208)', opacity: 0.7 }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                  >
                    Privacy
                  </a>
                  <a 
                    href="#" 
                    className="transition-opacity duration-300"
                    style={{ color: 'rgb(187, 247, 208)', opacity: 0.7 }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                  >
                    Terms
                  </a>
                  <a 
                    href="#" 
                    className="transition-opacity duration-300"
                    style={{ color: 'rgb(187, 247, 208)', opacity: 0.7 }}
                    onMouseEnter={(e) => e.target.style.opacity = '1'}
                    onMouseLeave={(e) => e.target.style.opacity = '0.7'}
                  >
                    Cookies
                  </a>
                </div>
              </div>

              {/* Floating Badge */}
              <div 
                className="px-6 py-3 rounded-full backdrop-blur-md flex items-center gap-3"
                style={{
                  background: 'rgba(34, 197, 94, 0.15)',
                  border: '1px solid rgba(34, 197, 94, 0.4)',
                }}
              >
                <div 
                  className="w-8 h-8 rounded-full flex items-center justify-center"
                  style={{
                    background: 'rgba(34, 197, 94, 0.3)',
                  }}
                >
                  <span className="text-xs">🌟</span>
                </div>
                <div>
                  <div className="text-xs font-semibold" style={{ color: 'rgb(74, 222, 128)' }}>Featured</div>
                  <div className="text-xs" style={{ color: 'rgb(187, 247, 208)', opacity: 0.7 }}>Awwwards 2025</div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Glass Edge */}
        <div 
          className="h-2"
          style={{
            background: 'linear-gradient(to right, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.4), rgba(34, 197, 94, 0.2))',
            backdropFilter: 'blur(10px)',
          }}
        ></div>

      </footer>
    </div>
  );
}


  `
  },
  {
    name: "UINEXTechFooter",
    category: "Footer",
    code: `

function UINEXTechFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Scanning Line Effect */}
      <div 
        className="absolute w-full h-0.5 pointer-events-none"
        style={{
          top: '50%',
          background: 'linear-gradient(to bottom, transparent, rgba(0, 255, 255, 0.8), transparent)',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
        }}
      ></div>

      {/* Digital Rain Effect */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-px opacity-30"
            style={{
              height: '100px',
              background: 'linear-gradient(to bottom, transparent, rgb(0, 255, 255), transparent)',
              left: '50%',
            }}
          ></div>
        ))}
      </div>

      {/* Corner Brackets */}
      <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2" style={{ borderColor: 'rgb(0, 255, 255)' }}></div>
      <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2" style={{ borderColor: 'rgb(0, 255, 255)' }}></div>

      <footer className="relative z-10 w-full">
        
        {/* Top Glitch Line */}
        <div className="relative h-1 mb-8">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(0, 255, 255), transparent)',
              boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Brand Section */}
            <div className="relative">
              <div 
                className="absolute -inset-4 border opacity-20"
                style={{
                  borderColor: 'rgb(0, 255, 255)',
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                }}
              ></div>
              
              <div className="relative p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 relative"
                    style={{
                      clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                      background: 'linear-gradient(135deg, rgb(0, 255, 255) 0%, rgb(0, 150, 150) 100%)',
                      boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-bold text-black">N</span>
                    </div>
                  </div>
                  <div>
                    <h2 
                      className="text-4xl font-bold tracking-wider"
                      style={{ 
                        color: 'rgb(0, 255, 255)',
                        textShadow: '0 0 10px rgba(0, 255, 255, 0.8)',
                        fontFamily: 'monospace',
                      }}
                    >
                      NEXUS
                    </h2>
                    <p className="text-xs tracking-widest" style={{ color: 'rgb(0, 200, 200)' }}>
                      [DIGITAL SYSTEMS]
                    </p>
                  </div>
                </div>
                
                <div className="space-y-2 mb-8">
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: 'rgb(0, 255, 255)' }}>{'>'}</span>
                    <span className="text-sm" style={{ color: 'rgb(100, 255, 255)' }}>
                      SYSTEM.STATUS: ONLINE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: 'rgb(0, 255, 255)' }}>{'>'}</span>
                    <span className="text-sm" style={{ color: 'rgb(100, 255, 255)' }}>
                      CONNECTION: SECURE
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs" style={{ color: 'rgb(0, 255, 255)' }}>{'>'}</span>
                    <span className="text-sm" style={{ color: 'rgb(100, 255, 255)' }}>
                      UPTIME: 99.9%
                    </span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  {['TWITTER', 'GITHUB', 'DISCORD', 'TELEGRAM'].map((platform, i) => (
                    <a
                      key={i}
                      href="#"
                      className="px-4 py-2 border text-xs font-mono transition-all duration-300 hover:scale-105"
                      style={{
                        borderColor: hoveredLink === platform ? 'rgb(0, 255, 255)' : 'rgb(0, 150, 150)',
                        color: hoveredLink === platform ? 'rgb(0, 255, 255)' : 'rgb(0, 200, 200)',
                        boxShadow: hoveredLink === platform ? '0 0 20px rgba(0, 255, 255, 0.5)' : 'none',
                      }}
                      onMouseEnter={() => setHoveredLink(platform)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Terminal Newsletter */}
            <div className="relative">
              <div 
                className="absolute -inset-4 border opacity-20"
                style={{
                  borderColor: 'rgb(0, 255, 255)',
                  clipPath: 'polygon(0 0, calc(100% - 20px) 0, 100% 20px, 100% 100%, 20px 100%, 0 calc(100% - 20px))',
                }}
              ></div>
              
              <div 
                className="relative p-8"
                style={{
                  background: 'rgba(0, 255, 255, 0.03)',
                }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 255)' }}></div>
                  <span className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)' }}>
                    NEWSLETTER_PROTOCOL
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 font-mono" style={{ color: 'rgb(0, 255, 255)' }}>
                  {'>'} JOIN_NETWORK
                </h3>
                
                <p className="text-sm mb-6 font-mono leading-relaxed" style={{ color: 'rgb(100, 255, 255)' }}>
                  Subscribe for system updates, security patches, and exclusive access to beta features.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="user@domain.com"
                    className="flex-1 px-4 py-3 bg-black border text-sm font-mono focus:outline-none transition-all duration-300"
                    style={{
                      borderColor: 'rgb(0, 150, 150)',
                      color: 'rgb(0, 255, 255)',
                    }}
                  />
                  <button 
                    className="px-6 py-3 border font-mono text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      borderColor: 'rgb(0, 255, 255)',
                      color: 'rgb(0, 255, 255)',
                      background: 'rgba(0, 255, 255, 0.1)',
                      boxShadow: '0 0 20px rgba(0, 255, 255, 0.3)',
                    }}
                  >
                    CONNECT
                  </button>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Grid */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 pb-16 border-b" style={{ borderColor: 'rgba(0, 255, 255, 0.2)' }}>
            
            {[
              { title: 'SYSTEM', links: ['Dashboard', 'Analytics', 'Reports', 'Logs'] },
              { title: 'PROTOCOLS', links: ['API Docs', 'SDK', 'Webhooks', 'CLI Tools'] },
              { title: 'SECURITY', links: ['Auth', 'Encryption', 'Compliance', 'Audits'] },
              { title: 'NETWORK', links: ['Status', 'Incidents', 'Updates', 'Support'] },
              { title: 'ENTITY', links: ['About', 'Team', 'Careers', 'Contact'] },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 
                  className="text-xs font-bold font-mono mb-6 tracking-wider"
                  style={{ color: 'rgb(0, 255, 255)' }}
                >
                  [{section.title}]
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-mono transition-all duration-300 inline-flex items-center gap-2"
                        style={{ 
                          color: hoveredLink === link ? 'rgb(0, 255, 255)' : 'rgb(0, 200, 200)',
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {hoveredLink === link && <span>{'>'}</span>}
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex items-center gap-8">
              <p className="text-xs font-mono" style={{ color: 'rgb(0, 200, 200)' }}>
                © 2025 NEXUS SYSTEMS. ALL_RIGHTS_RESERVED.
              </p>
              <div className="flex gap-6 text-xs font-mono">
                <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(0, 200, 200)' }}>
                  PRIVACY
                </a>
                <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(0, 200, 200)' }}>
                  TERMS
                </a>
                <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(0, 200, 200)' }}>
                  LICENSE
                </a>
              </div>
            </div>

            {/* Status Badge */}
            <div 
              className="flex items-center gap-3 px-4 py-2 border"
              style={{
                borderColor: 'rgb(0, 255, 255)',
                background: 'rgba(0, 255, 255, 0.05)',
              }}
            >
              <div className="flex gap-1">
                <div className="w-1 h-4 animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 255)', animationDelay: '0s' }}></div>
                <div className="w-1 h-4 animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 255)', animationDelay: '0.1s' }}></div>
                <div className="w-1 h-4 animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 255)', animationDelay: '0.2s' }}></div>
                <div className="w-1 h-4 animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 255)', animationDelay: '0.3s' }}></div>
              </div>
              <span className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)' }}>
                OPERATIONAL
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Border Effect */}
        <div 
          className="h-1"
          style={{
            background: 'linear-gradient(to right, transparent, rgb(0, 255, 255), transparent)',
            boxShadow: '0 0 20px rgba(0, 255, 255, 0.5)',
          }}
        >        </div>

      </footer>
    </div>
  );
}



  `
  },
  {
    name: "UINEXTechFooterV2",
    category: "Footer",
    code: `
function UINEXTechFooterV2() {
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div 
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.3) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
          className="absolute inset-0"
        ></div>
      </div>

      {/* Corner HUD Elements */}
      <div className="absolute bottom-8 left-8 flex gap-2">
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(0, 255, 255)' }}></div>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(255, 0, 255)' }}></div>
        <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(0, 255, 255)' }}></div>
      </div>

      <footer className="relative z-10 w-full">
        
        {/* Animated Top Border */}
        <div className="relative h-px mb-12 overflow-hidden">
          <div 
            className="absolute inset-0 animate-pulse"
            style={{
              background: 'linear-gradient(90deg, transparent, rgb(255, 0, 255), rgb(0, 255, 255), rgb(255, 0, 255), transparent)',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-20">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <div className="relative mb-8">
                {/* Hexagonal Logo */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-20 h-20 relative"
                    style={{
                      clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                      background: 'linear-gradient(135deg, rgb(255, 0, 255) 0%, rgb(0, 255, 255) 100%)',
                      boxShadow: '0 0 40px rgba(255, 0, 255, 0.6)',
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-bold" style={{ color: 'rgb(0, 0, 0)' }}>Ω</span>
                    </div>
                  </div>
                  <div>
                    <h2 
                      className="text-5xl font-bold tracking-tight mb-1"
                      style={{ 
                        color: 'rgb(255, 0, 255)',
                        textShadow: '0 0 20px rgba(255, 0, 255, 0.8)',
                        fontFamily: 'monospace',
                      }}
                    >
                      OMEGA
                    </h2>
                    <div className="flex gap-1 text-xs" style={{ color: 'rgb(0, 255, 255)' }}>
                      <span>╔</span>
                      <span className="tracking-widest">TECH_CORE</span>
                      <span>╗</span>
                    </div>
                  </div>
                </div>

                <p className="text-sm font-mono leading-relaxed mb-6" style={{ color: 'rgb(150, 150, 255)' }}>
                  Next-generation infrastructure powering the decentralized future. Built for scale, designed for innovation.
                </p>

                {/* Status Indicators */}
                <div className="space-y-3 mb-8">
                  {[
                    { label: 'NETWORK_LATENCY', value: '12ms', color: 'rgb(0, 255, 255)' },
                    { label: 'ACTIVE_NODES', value: '10,847', color: 'rgb(255, 0, 255)' },
                    { label: 'TRANSACTIONS/SEC', value: '2.4M', color: 'rgb(0, 255, 255)' },
                  ].map((stat, i) => (
                    <div key={i} className="flex justify-between items-center border-l-2 pl-3" style={{ borderColor: stat.color }}>
                      <span className="text-xs font-mono" style={{ color: stat.color }}>{stat.label}</span>
                      <span className="text-sm font-bold font-mono" style={{ color: 'rgb(255, 255, 255)' }}>{stat.value}</span>
                    </div>
                  ))}
                </div>

                {/* Social Icons */}
                <div className="flex gap-3">
                  {['X', 'GH', 'DC', 'TG'].map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-10 h-10 border flex items-center justify-center text-xs font-bold font-mono transition-all duration-300 hover:scale-110"
                      style={{
                        borderColor: hoveredItem === icon ? 'rgb(255, 0, 255)' : 'rgb(100, 100, 100)',
                        color: hoveredItem === icon ? 'rgb(255, 0, 255)' : 'rgb(150, 150, 150)',
                        boxShadow: hoveredItem === icon ? '0 0 20px rgba(255, 0, 255, 0.6)' : 'none',
                        background: hoveredItem === icon ? 'rgba(255, 0, 255, 0.1)' : 'transparent',
                      }}
                      onMouseEnter={() => setHoveredItem(icon)}
                      onMouseLeave={() => setHoveredItem(null)}
                    >
                      {icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-4 gap-8">
              
              {[
                { title: 'PRODUCTS', links: ['Cloud', 'API', 'SDK', 'Tools', 'Blockchain'] },
                { title: 'DEVELOPERS', links: ['Docs', 'GitHub', 'Tutorials', 'Community', 'Forum'] },
                { title: 'COMPANY', links: ['About', 'Blog', 'Careers', 'Press', 'Partners'] },
                { title: 'RESOURCES', links: ['Help', 'Status', 'Legal', 'Privacy', 'Terms'] },
              ].map((section, idx) => (
                <div key={idx}>
                  <div className="mb-6 flex items-center gap-2">
                    <div className="w-1 h-6" style={{ backgroundColor: idx % 2 === 0 ? 'rgb(255, 0, 255)' : 'rgb(0, 255, 255)' }}></div>
                    <h4 
                      className="text-xs font-bold font-mono tracking-wider"
                      style={{ color: idx % 2 === 0 ? 'rgb(255, 0, 255)' : 'rgb(0, 255, 255)' }}
                    >
                      {section.title}
                    </h4>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="text-sm font-mono transition-all duration-300 inline-flex items-center gap-2 group"
                          style={{ 
                            color: hoveredItem === link ? 'rgb(255, 255, 255)' : 'rgb(150, 150, 200)',
                          }}
                          onMouseEnter={() => setHoveredItem(link)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <span className="text-xs" style={{ 
                            color: idx % 2 === 0 ? 'rgb(255, 0, 255)' : 'rgb(0, 255, 255)',
                            opacity: hoveredItem === link ? 1 : 0,
                          }}>
                            ▸
                          </span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Newsletter Section */}
          <div 
            className="relative mb-20 p-8 border"
            style={{
              borderColor: 'rgb(255, 0, 255)',
              background: 'linear-gradient(135deg, rgba(255, 0, 255, 0.05), rgba(0, 255, 255, 0.05))',
            }}
          >
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2" style={{ borderColor: 'rgb(255, 0, 255)' }}></div>
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2" style={{ borderColor: 'rgb(0, 255, 255)' }}></div>
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2" style={{ borderColor: 'rgb(0, 255, 255)' }}></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2" style={{ borderColor: 'rgb(255, 0, 255)' }}></div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(255, 0, 255)' }}></div>
                  <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 255)', animationDelay: '0.5s' }}></div>
                  <span className="text-xs font-mono" style={{ color: 'rgb(200, 200, 255)' }}>BROADCAST_ENABLED</span>
                </div>
                <h3 className="text-2xl font-bold font-mono mb-2" style={{ color: 'rgb(255, 255, 255)' }}>
                  Stay Connected
                </h3>
                <p className="text-sm font-mono" style={{ color: 'rgb(150, 150, 200)' }}>
                  Get the latest updates, security alerts, and exclusive insights.
                </p>
              </div>

              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="email@address.com"
                  className="flex-1 px-4 py-3 bg-black border text-sm font-mono focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: 'rgb(100, 100, 100)',
                    color: 'rgb(255, 255, 255)',
                  }}
                />
                <button 
                  className="px-8 py-3 font-mono text-sm font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'linear-gradient(135deg, rgb(255, 0, 255), rgb(0, 255, 255))',
                    color: 'rgb(0, 0, 0)',
                    boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
                  }}
                >
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-xs font-mono" style={{ color: 'rgb(150, 150, 150)' }}>
              <span>© 2025 OMEGA TECH CORE</span>
              <div className="flex gap-4">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((link, i) => (
                  <a
                    key={i}
                    href="#"
                    className="transition-colors duration-300 hover:text-white"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            {/* Live Status */}
            <div className="flex items-center gap-2 px-4 py-2 border" style={{ borderColor: 'rgb(0, 255, 0)' }}>
              <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 0)' }}></div>
              <span className="text-xs font-mono font-bold" style={{ color: 'rgb(0, 255, 0)' }}>
                SYSTEM ONLINE
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Gradient Line */}
        <div 
          className="h-1"
          style={{
            background: 'linear-gradient(90deg, rgb(255, 0, 255), rgb(0, 255, 255), rgb(255, 0, 255))',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
          }}
        ></div>

      </footer>
    </div>
  );
}


  `
  },
  {
    name: "UINEXTechFooterV3",
    category: "Footer",
    code: `
function UINEXTechFooterV3() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Circuit Board Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(90deg, rgba(0, 255, 200, 0.2) 1px, transparent 1px), linear-gradient(rgba(0, 255, 200, 0.2) 1px, transparent 1px)',
            backgroundSize: '30px 30px',
          }}
        ></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgb(0, 255, 200), transparent)' }}></div>
      <div className="absolute bottom-40 right-32 w-80 h-80 rounded-full opacity-20 blur-3xl" style={{ background: 'radial-gradient(circle, rgb(100, 200, 255), transparent)' }}></div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 200, 0.03) 2px, rgba(0, 255, 200, 0.03) 4px)',
      }}></div>

      <footer className="relative z-10 w-full">
        
        {/* Top Accent Line */}
        <div className="relative h-px mb-16">
          <div 
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(0, 255, 200), transparent)',
              boxShadow: '0 0 20px rgba(0, 255, 200, 0.6)',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Top Row - Brand + CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
            
            {/* Brand Section */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div 
                  className="w-16 h-16 relative border-2"
                  style={{
                    borderColor: 'rgb(0, 255, 200)',
                    transform: 'rotate(45deg)',
                    boxShadow: '0 0 30px rgba(0, 255, 200, 0.4)',
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center" style={{ transform: 'rotate(-45deg)' }}>
                    <span className="text-2xl font-bold" style={{ color: 'rgb(0, 255, 200)' }}>V</span>
                  </div>
                </div>
                
                <div>
                  <h2 
                    className="text-4xl font-bold tracking-wider mb-1"
                    style={{ 
                      color: 'rgb(0, 255, 200)',
                      textShadow: '0 0 15px rgba(0, 255, 200, 0.8)',
                      fontFamily: 'monospace',
                    }}
                  >
                    VERTEX
                  </h2>
                  <p className="text-xs tracking-[0.3em] font-mono" style={{ color: 'rgb(100, 200, 255)' }}>
                    DIGITAL SOLUTIONS
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-8 font-mono" style={{ color: 'rgb(150, 200, 220)' }}>
                Pioneering the future of technology with cutting-edge solutions. 
                Building tomorrow's infrastructure today.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {[
                  { value: '500K+', label: 'USERS' },
                  { value: '99.99%', label: 'UPTIME' },
                  { value: '24/7', label: 'SUPPORT' },
                ].map((stat, i) => (
                  <div 
                    key={i} 
                    className="text-center p-4 border"
                    style={{
                      borderColor: 'rgba(0, 255, 200, 0.3)',
                      background: 'rgba(0, 255, 200, 0.05)',
                    }}
                  >
                    <div className="text-xl font-bold font-mono mb-1" style={{ color: 'rgb(0, 255, 200)' }}>
                      {stat.value}
                    </div>
                    <div className="text-xs font-mono" style={{ color: 'rgb(100, 200, 255)' }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-4">
                {['TWITTER', 'LINKEDIN', 'GITHUB', 'YOUTUBE'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="text-xs font-mono px-3 py-2 border transition-all duration-300"
                    style={{
                      borderColor: hoveredLink === platform ? 'rgb(0, 255, 200)' : 'rgba(0, 255, 200, 0.3)',
                      color: hoveredLink === platform ? 'rgb(0, 255, 200)' : 'rgb(100, 200, 220)',
                      boxShadow: hoveredLink === platform ? '0 0 15px rgba(0, 255, 200, 0.4)' : 'none',
                    }}
                    onMouseEnter={() => setHoveredLink(platform)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Newsletter Box */}
            <div 
              className="relative p-8 border-2"
              style={{
                borderColor: 'rgb(0, 255, 200)',
                background: 'rgba(0, 30, 30, 0.6)',
                boxShadow: '0 0 40px rgba(0, 255, 200, 0.2)',
              }}
            >
              <div className="absolute -top-3 left-8 px-3 bg-black">
                <span className="text-xs font-mono font-bold" style={{ color: 'rgb(0, 255, 200)' }}>
                  ▸ NEWSLETTER
                </span>
              </div>

              <h3 className="text-2xl font-bold mb-4 font-mono" style={{ color: 'rgb(255, 255, 255)' }}>
                Stay Updated
              </h3>
              
              <p className="text-sm mb-6 font-mono leading-relaxed" style={{ color: 'rgb(150, 200, 220)' }}>
                Join 50,000+ subscribers receiving weekly insights on technology, innovation, and industry trends.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-black border text-sm font-mono focus:outline-none transition-all duration-300"
                  style={{
                    borderColor: 'rgba(0, 255, 200, 0.5)',
                    color: 'rgb(0, 255, 200)',
                  }}
                />
                <button 
                  className="w-full px-6 py-3 font-mono text-sm font-bold transition-all duration-300 hover:scale-105"
                  style={{
                    background: 'rgb(0, 255, 200)',
                    color: 'rgb(0, 0, 0)',
                    boxShadow: '0 0 20px rgba(0, 255, 200, 0.4)',
                  }}
                >
                  SUBSCRIBE NOW
                </button>
              </div>

              <p className="text-xs mt-4 font-mono" style={{ color: 'rgb(100, 150, 170)' }}>
                By subscribing, you agree to our Privacy Policy and consent to receive updates.
              </p>
            </div>

          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 pb-16 border-b" style={{ borderColor: 'rgba(0, 255, 200, 0.2)' }}>
            
            {[
              { title: 'PLATFORM', links: ['Dashboard', 'Analytics', 'Workspace', 'Integration', 'API Access'] },
              { title: 'SOLUTIONS', links: ['Enterprise', 'Startups', 'Developers', 'Agencies', 'Education'] },
              { title: 'RESOURCES', links: ['Documentation', 'Guides', 'Tutorials', 'Blog', 'Case Studies'] },
              { title: 'COMPANY', links: ['About Us', 'Careers', 'Press Kit', 'Contact', 'Partners'] },
            ].map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-5">
                  <div className="w-2 h-2 border" style={{ borderColor: 'rgb(0, 255, 200)', transform: 'rotate(45deg)' }}></div>
                  <h4 
                    className="text-xs font-bold font-mono tracking-widest"
                    style={{ color: 'rgb(0, 255, 200)' }}
                  >
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-mono transition-all duration-300 block"
                        style={{ 
                          color: hoveredLink === link ? 'rgb(0, 255, 200)' : 'rgb(150, 200, 220)',
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {hoveredLink === link ? '▸ ' : ''}{link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Section */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-xs font-mono" style={{ color: 'rgb(100, 150, 170)' }}>
                © 2025 VERTEX. All rights reserved.
              </p>
              <div className="flex gap-5 text-xs font-mono">
                {['Privacy', 'Terms', 'Security', 'Cookies'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="transition-colors duration-300"
                    style={{ 
                      color: hoveredLink === item ? 'rgb(0, 255, 200)' : 'rgb(100, 150, 170)',
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div 
              className="flex items-center gap-3 px-4 py-2 border"
              style={{
                borderColor: 'rgb(0, 255, 200)',
                background: 'rgba(0, 255, 200, 0.1)',
              }}
            >
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(0, 255, 0)' }}></div>
                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 200)' }}></div>
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: 'rgb(100, 200, 255)' }}></div>
              </div>
              <span className="text-xs font-mono font-bold" style={{ color: 'rgb(0, 255, 200)' }}>
                ALL SYSTEMS GO
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Border */}
        <div 
          className="h-1 mt-8"
          style={{
            background: 'linear-gradient(to right, transparent, rgb(0, 255, 200), rgb(100, 200, 255), rgb(0, 255, 200), transparent)',
            boxShadow: '0 0 20px rgba(0, 255, 200, 0.5)',
          }}
        ></div>

      </footer>
    </div>
  );
}


  `
  },

  {
    name: "PremiumFooter",
    category: "Footer",
    code: `

    
function PremiumFooter() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Elegant Background Pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(212, 175, 55) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        
        {/* Diagonal Gold Lines */}
        <div className="absolute inset-0 opacity-10">
          <div 
            className="absolute w-full h-px transform rotate-45 origin-center"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
              top: '30%',
            }}
          ></div>
          <div 
            className="absolute w-full h-px transform -rotate-45 origin-center"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
              top: '70%',
            }}
          ></div>
        </div>

        {/* Ambient Glow */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at 50% 100%, rgba(212, 175, 55, 0.15) 0%, transparent 60%)',
          }}
        ></div>
      </div>

      {/* Floating Sparkles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: 'rgb(212, 175, 55)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 5 + 's',
              animationDuration: (4 + Math.random() * 3) + 's',
              boxShadow: '0 0 8px rgb(212, 175, 55)',
            }}
          ></div>
        ))}
      </div>

      <footer className="relative z-10 w-full">
        
        {/* Premium Top Border */}
        <div className="relative">
          <div 
            className="h-px w-full"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
              boxShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
            }}
          ></div>
          <div 
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-4 flex justify-center gap-2"
          >
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(212, 175, 55)', boxShadow: '0 0 8px rgb(212, 175, 55)' }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(212, 175, 55)', boxShadow: '0 0 8px rgb(212, 175, 55)' }}></div>
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(212, 175, 55)', boxShadow: '0 0 8px rgb(212, 175, 55)' }}></div>
          </div>
        </div>

        <div style={{ background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.98), rgba(10, 10, 10, 1))' }}>
          <div className="max-w-7xl mx-auto px-8 py-20">
            
            {/* Premium Brand Section */}
            <div className="text-center mb-20">
              <div className="flex justify-center mb-8">
                <div className="relative">
                  {/* Outer Ring */}
                  <div 
                    className="w-32 h-32 rounded-full border flex items-center justify-center relative"
                    style={{
                      borderColor: 'rgb(212, 175, 55)',
                      borderWidth: '2px',
                      background: 'radial-gradient(circle, rgba(212, 175, 55, 0.05) 0%, transparent 70%)',
                      boxShadow: '0 0 40px rgba(212, 175, 55, 0.3), inset 0 0 30px rgba(212, 175, 55, 0.1)',
                    }}
                  >
                    {/* Inner Diamond */}
                    <div 
                      className="w-16 h-16 transform rotate-45 border-2"
                      style={{
                        borderColor: 'rgb(212, 175, 55)',
                        background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.2), rgba(212, 175, 55, 0.05))',
                      }}
                    >
                      <div 
                        className="absolute inset-0 flex items-center justify-center transform -rotate-45"
                      >
                        <span 
                          className="text-3xl font-serif font-bold"
                          style={{ 
                            color: 'rgb(212, 175, 55)',
                            textShadow: '0 0 20px rgba(212, 175, 55, 0.5)',
                          }}
                        >
                          L
                        </span>
                      </div>
                    </div>

                    {/* Corner Accents */}
                    <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                    <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                    <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                    <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2" style={{ borderColor: 'rgb(212, 175, 55)' }}></div>
                  </div>

                  {/* Rotating Outer Ring */}
                  <div 
                    className="absolute inset-0 rounded-full border animate-pulse"
                    style={{
                      borderColor: 'rgba(212, 175, 55, 0.3)',
                      borderWidth: '1px',
                      animation: 'pulse 3s ease-in-out infinite',
                    }}
                  ></div>
                </div>
              </div>
              
              <h2 
                className="text-6xl font-serif font-light mb-3 tracking-widest"
                style={{
                  color: 'rgb(212, 175, 55)',
                  textShadow: '0 0 30px rgba(212, 175, 55, 0.3)',
                  letterSpacing: '0.3em',
                }}
              >
                LUXOR
              </h2>
              
              <div 
                className="flex items-center justify-center gap-4 mb-6"
              >
                <div className="h-px w-16" style={{ backgroundColor: 'rgb(212, 175, 55)' }}></div>
                <span 
                  className="text-sm font-serif tracking-widest"
                  style={{ color: 'rgb(156, 163, 175)' }}
                >
                  EST. 2025
                </span>
                <div className="h-px w-16" style={{ backgroundColor: 'rgb(212, 175, 55)' }}></div>
              </div>

              <p 
                className="text-lg font-light tracking-wide mb-12"
                style={{ color: 'rgb(156, 163, 175)' }}
              >
                Timeless Elegance. Uncompromising Quality.
              </p>

              {/* Premium Newsletter */}
              <div className="max-w-2xl mx-auto">
                <h3 
                  className="text-2xl font-serif mb-6 tracking-wide"
                  style={{ color: 'rgb(212, 175, 55)' }}
                >
                  Join Our Distinguished Circle
                </h3>
                
                <div 
                  className="flex flex-col sm:flex-row gap-4 p-2 border rounded-lg transition-all duration-500"
                  style={{
                    borderColor: emailFocus ? 'rgb(212, 175, 55)' : 'rgb(55, 65, 81)',
                    background: 'rgba(0, 0, 0, 0.5)',
                    boxShadow: emailFocus ? '0 0 30px rgba(212, 175, 55, 0.2)' : 'none',
                  }}
                >
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className="flex-1 px-6 py-4 bg-transparent font-light text-sm tracking-wide focus:outline-none"
                    style={{
                      color: 'rgb(229, 231, 235)',
                    }}
                    onFocus={() => setEmailFocus(true)}
                    onBlur={() => setEmailFocus(false)}
                  />
                  <button 
                    className="px-8 py-4 font-light tracking-widest uppercase text-sm transition-all duration-300 hover:scale-105"
                    style={{
                      backgroundColor: 'rgb(212, 175, 55)',
                      color: 'rgb(0, 0, 0)',
                      boxShadow: '0 4px 20px rgba(212, 175, 55, 0.3)',
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>
            </div>

            {/* Elegant Divider */}
            <div className="flex items-center justify-center gap-8 mb-16">
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to right, transparent, rgb(212, 175, 55))' }}></div>
              <div 
                className="w-3 h-3 transform rotate-45"
                style={{
                  border: '1px solid rgb(212, 175, 55)',
                  backgroundColor: 'rgba(212, 175, 55, 0.2)',
                }}
              ></div>
              <div className="h-px flex-1" style={{ background: 'linear-gradient(to left, transparent, rgb(212, 175, 55))' }}></div>
            </div>

            {/* Luxury Links Grid */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
              
              {/* Collections */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Collections
                </h4>
                <ul className="space-y-4">
                  {['Signature Series', 'Limited Edition', 'Heritage', 'Contemporary', 'Bespoke'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block group"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Services
                </h4>
                <ul className="space-y-4">
                  {['Personal Consultation', 'Concierge Service', 'Private Events', 'Custom Design', 'VIP Access'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Company */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Company
                </h4>
                <ul className="space-y-4">
                  {['Our Story', 'Craftsmanship', 'Sustainability', 'Press', 'Careers'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support */}
              <div>
                <h4 
                  className="text-base font-serif tracking-widest uppercase mb-8 pb-3 border-b"
                  style={{ 
                    color: 'rgb(212, 175, 55)',
                    borderColor: 'rgba(212, 175, 55, 0.3)',
                  }}
                >
                  Support
                </h4>
                <ul className="space-y-4">
                  {['Contact Us', 'FAQs', 'Shipping', 'Returns', 'Care Guide'].map((item, i) => (
                    <li key={i}>
                      <a
                        href="#"
                        className="text-sm font-light tracking-wide transition-all duration-300 inline-block"
                        style={{ 
                          color: hoveredItem === item ? 'rgb(212, 175, 55)' : 'rgb(156, 163, 175)',
                        }}
                        onMouseEnter={() => setHoveredItem(item)}
                        onMouseLeave={() => setHoveredItem(null)}
                      >
                        <span className="relative">
                          {item}
                          <span 
                            className="absolute -bottom-1 left-0 h-px transition-all duration-300"
                            style={{
                              width: hoveredItem === item ? '100%' : '0%',
                              backgroundColor: 'rgb(212, 175, 55)',
                            }}
                          ></span>
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Elegant Divider */}
            <div 
              className="h-px mb-12"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(212, 175, 55, 0.5), transparent)',
              }}
            ></div>

            {/* Premium Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              
              {/* Social Icons */}
              <div className="flex gap-6">
                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>fb</span>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>tw</span>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>ig</span>
                </a>

                <a
                  href="#"
                  className="w-12 h-12 border flex items-center justify-center transition-all duration-300 hover:scale-110"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                    backgroundColor: 'rgba(212, 175, 55, 0.05)',
                  }}
                >
                  <span className="text-sm font-serif" style={{ color: 'rgb(212, 175, 55)' }}>li</span>
                </a>
              </div>

              {/* Copyright */}
              <div className="text-center">
                <p className="text-sm font-light tracking-wide mb-2" style={{ color: 'rgb(107, 114, 128)' }}>
                  © 2025 Luxor. All Rights Reserved.
                </p>
                <div className="flex gap-6 text-xs font-light">
                  <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(107, 114, 128)' }}>
                    Privacy Policy
                  </a>
                  <span style={{ color: 'rgb(55, 65, 81)' }}>•</span>
                  <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(107, 114, 128)' }}>
                    Terms of Service
                  </a>
                  <span style={{ color: 'rgb(55, 65, 81)' }}>•</span>
                  <a href="#" className="transition-colors duration-300" style={{ color: 'rgb(107, 114, 128)' }}>
                    Accessibility
                  </a>
                </div>
              </div>

              {/* Awards Badge */}
              <div 
                className="flex items-center gap-3 px-6 py-3 border"
                style={{
                  borderColor: 'rgba(212, 175, 55, 0.3)',
                  backgroundColor: 'rgba(212, 175, 55, 0.05)',
                }}
              >
                <div 
                  className="w-8 h-8 border flex items-center justify-center"
                  style={{
                    borderColor: 'rgb(212, 175, 55)',
                  }}
                >
                  <span className="text-xs" style={{ color: 'rgb(212, 175, 55)' }}>★</span>
                </div>
                <div>
                  <div className="text-xs font-light tracking-wide" style={{ color: 'rgb(212, 175, 55)' }}>
                    Award Winning
                  </div>
                  <div className="text-xs font-light" style={{ color: 'rgb(107, 114, 128)' }}>
                    Design Excellence
                  </div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Premium Bottom Border */}
        <div 
          className="h-px"
          style={{
            background: 'linear-gradient(to right, transparent, rgb(212, 175, 55), transparent)',
            boxShadow: '0 -2px 20px rgba(212, 175, 55, 0.3)',
          }}
        ></div>

      </footer>
    </div>
  );
}

  `
  },
  {
    name: "UINEXTechFooterV4",
    category: "Footer",
    code: `

function UINEXTechFooterV4() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Dot UIZONBackground */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255, 100, 0, 0.3) 1px, transparent 1px)',
            backgroundSize: '25px 25px',
          }}
        ></div>
      </div>

      {/* Gradient Glow */}
      <div className="absolute top-0 left-1/2 w-full h-96 -translate-x-1/2 opacity-20 blur-3xl" style={{ background: 'radial-gradient(ellipse, rgb(255, 100, 0), transparent)' }}></div>

      {/* Edge Glow Lines */}
      <div className="absolute top-0 left-0 w-px h-full opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, rgb(255, 100, 0), transparent)' }}></div>
      <div className="absolute top-0 right-0 w-px h-full opacity-30" style={{ background: 'linear-gradient(to bottom, transparent, rgb(255, 100, 0), transparent)' }}></div>

      <footer className="relative z-10 w-full">
        
        {/* Top Divider */}
        <div className="relative h-0.5 mb-20">
          <div 
            className="absolute inset-0 opacity-60"
            style={{
              background: 'linear-gradient(to right, transparent, rgb(255, 100, 0) 20%, rgb(255, 150, 0) 50%, rgb(255, 100, 0) 80%, transparent)',
              boxShadow: '0 0 25px rgba(255, 100, 0, 0.5)',
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
            
            {/* Left: Brand + Info */}
            <div>
              <div className="flex items-start gap-5 mb-8">
                <div 
                  className="w-20 h-20 relative border-4 flex items-center justify-center"
                  style={{
                    borderColor: 'rgb(255, 100, 0)',
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                    boxShadow: '0 0 35px rgba(255, 100, 0, 0.5)',
                    background: 'rgba(255, 100, 0, 0.1)',
                  }}
                >
                  <span className="text-3xl font-bold" style={{ color: 'rgb(255, 100, 0)' }}>Σ</span>
                </div>
                
                <div>
                  <h2 
                    className="text-5xl font-bold tracking-tight mb-2"
                    style={{ 
                      color: 'rgb(255, 150, 0)',
                      textShadow: '0 0 20px rgba(255, 100, 0, 0.8)',
                      fontFamily: 'monospace',
                    }}
                  >
                    SIGMA
                  </h2>
                  <p className="text-xs tracking-[0.4em] font-mono" style={{ color: 'rgb(255, 150, 100)' }}>
                    TECH NETWORKS
                  </p>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-10 font-mono" style={{ color: 'rgb(200, 180, 170)' }}>
                Advanced infrastructure and intelligent systems powering the next generation of digital experiences. 
                Where innovation meets execution.
              </p>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 mb-10">
                {[
                  { num: '2M+', text: 'TRANSACTIONS' },
                  { num: '150+', text: 'COUNTRIES' },
                  { num: '10ms', text: 'LATENCY' },
                ].map((metric, i) => (
                  <div 
                    key={i}
                    className="border-l-4 pl-3"
                    style={{ borderColor: 'rgb(255, 100, 0)' }}
                  >
                    <div className="text-2xl font-bold font-mono mb-1" style={{ color: 'rgb(255, 150, 0)' }}>
                      {metric.num}
                    </div>
                    <div className="text-xs font-mono" style={{ color: 'rgb(200, 150, 100)' }}>
                      {metric.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(255, 100, 0)' }}></div>
                  <span className="text-sm font-mono" style={{ color: 'rgb(200, 180, 170)' }}>
                    contact@sigmatech.io
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(255, 100, 0)' }}></div>
                  <span className="text-sm font-mono" style={{ color: 'rgb(200, 180, 170)' }}>
                    +1 (555) 123-4567
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgb(255, 100, 0)' }}></div>
                  <span className="text-sm font-mono" style={{ color: 'rgb(200, 180, 170)' }}>
                    San Francisco, CA
                  </span>
                </div>
              </div>

              {/* Social Grid */}
              <div className="grid grid-cols-4 gap-3">
                {['TW', 'LI', 'GH', 'FB'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="aspect-square border flex items-center justify-center font-mono text-sm font-bold transition-all duration-300"
                    style={{
                      borderColor: hoveredLink === social ? 'rgb(255, 100, 0)' : 'rgba(255, 100, 0, 0.3)',
                      color: hoveredLink === social ? 'rgb(255, 150, 0)' : 'rgb(200, 150, 100)',
                      background: hoveredLink === social ? 'rgba(255, 100, 0, 0.1)' : 'transparent',
                      boxShadow: hoveredLink === social ? '0 0 20px rgba(255, 100, 0, 0.3)' : 'none',
                    }}
                    onMouseEnter={() => setHoveredLink(social)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Right: Newsletter */}
            <div className="relative">
              <div 
                className="relative p-10 border-2"
                style={{
                  borderColor: 'rgb(255, 100, 0)',
                  background: 'linear-gradient(135deg, rgba(30, 10, 0, 0.8), rgba(50, 20, 0, 0.6))',
                }}
              >
                {/* Corner Accents */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-4 border-l-4" style={{ borderColor: 'rgb(255, 150, 0)' }}></div>
                <div className="absolute top-0 right-0 w-4 h-4 border-t-4 border-r-4" style={{ borderColor: 'rgb(255, 150, 0)' }}></div>
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-4 border-l-4" style={{ borderColor: 'rgb(255, 150, 0)' }}></div>
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-4 border-r-4" style={{ borderColor: 'rgb(255, 150, 0)' }}></div>

                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xs font-mono font-bold px-3 py-1 border" style={{ 
                    borderColor: 'rgb(255, 100, 0)',
                    color: 'rgb(255, 150, 0)',
                    background: 'rgba(255, 100, 0, 0.1)',
                  }}>
                    NEWSLETTER
                  </span>
                  <div className="flex gap-1">
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(255, 100, 0)' }}></div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(255, 100, 0)', animationDelay: '0.3s' }}></div>
                    <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(255, 100, 0)', animationDelay: '0.6s' }}></div>
                  </div>
                </div>

                <h3 className="text-3xl font-bold mb-4 font-mono" style={{ color: 'rgb(255, 255, 255)' }}>
                  Get Weekly Insights
                </h3>
                
                <p className="text-sm mb-8 font-mono leading-relaxed" style={{ color: 'rgb(200, 180, 170)' }}>
                  Join our community of 100,000+ tech leaders and innovators. Receive exclusive content, 
                  industry analysis, and early access to new features.
                </p>

                <div className="space-y-4">
                  <input
                    type="email"
                    placeholder="your.email@company.com"
                    className="w-full px-5 py-4 bg-black border-2 text-sm font-mono focus:outline-none transition-all duration-300"
                    style={{
                      borderColor: 'rgba(255, 100, 0, 0.5)',
                      color: 'rgb(255, 150, 0)',
                    }}
                  />
                  <button 
                    className="w-full px-6 py-4 font-mono text-sm font-bold transition-all duration-300 hover:scale-105"
                    style={{
                      background: 'linear-gradient(135deg, rgb(255, 100, 0), rgb(255, 150, 0))',
                      color: 'rgb(0, 0, 0)',
                      boxShadow: '0 0 25px rgba(255, 100, 0, 0.4)',
                    }}
                  >
                    SUBSCRIBE
                  </button>
                </div>

                <p className="text-xs mt-6 font-mono text-center" style={{ color: 'rgb(150, 130, 120)' }}>
                  No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>

          </div>

          {/* Navigation Section */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-16 pb-16 border-b-2" style={{ borderColor: 'rgba(255, 100, 0, 0.2)' }}>
            
            {[
              { title: 'PRODUCTS', links: ['Cloud Platform', 'Edge Computing', 'Data Analytics', 'AI Services', 'Security'] },
              { title: 'DEVELOPERS', links: ['API Reference', 'Documentation', 'SDK Downloads', 'Code Examples', 'Changelog'] },
              { title: 'SOLUTIONS', links: ['Enterprise', 'Small Business', 'Developers', 'Education', 'Government'] },
              { title: 'SUPPORT', links: ['Help Center', 'Community', 'System Status', 'Contact Us', 'Training'] },
              { title: 'LEGAL', links: ['Privacy Policy', 'Terms of Use', 'Security', 'Compliance', 'Licenses'] },
            ].map((section, idx) => (
              <div key={idx}>
                <h4 
                  className="text-xs font-bold font-mono mb-6 tracking-widest flex items-center gap-2"
                  style={{ color: 'rgb(255, 150, 0)' }}
                >
                  <span className="inline-block w-3 h-px" style={{ backgroundColor: 'rgb(255, 100, 0)' }}></span>
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-mono transition-all duration-300 inline-flex items-center gap-2"
                        style={{ 
                          color: hoveredLink === link ? 'rgb(255, 150, 0)' : 'rgb(180, 160, 150)',
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span style={{ opacity: hoveredLink === link ? 1 : 0 }}>→</span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-xs font-mono" style={{ color: 'rgb(150, 130, 120)' }}>
              <p>© 2025 Sigma Tech Networks, Inc.</p>
              <div className="flex gap-5">
                {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="transition-colors duration-300"
                    style={{ 
                      color: hoveredLink === item ? 'rgb(255, 150, 0)' : 'rgb(150, 130, 120)',
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Server Status */}
            <div 
              className="flex items-center gap-3 px-5 py-2 border-2"
              style={{
                borderColor: 'rgb(0, 255, 0)',
                background: 'rgba(0, 255, 0, 0.05)',
              }}
            >
              <div className="w-3 h-3 rounded-full animate-pulse" style={{ backgroundColor: 'rgb(0, 255, 0)' }}></div>
              <span className="text-xs font-mono font-bold" style={{ color: 'rgb(0, 255, 0)' }}>
                SERVERS ONLINE
              </span>
            </div>

          </div>

        </div>

        {/* Bottom Accent */}
        <div 
          className="h-1 mt-8"
          style={{
            background: 'linear-gradient(to right, transparent 10%, rgb(255, 100, 0) 30%, rgb(255, 150, 0) 50%, rgb(255, 100, 0) 70%, transparent 90%)',
            boxShadow: '0 0 20px rgba(255, 100, 0, 0.5)',
          }}
        ></div>

      </footer>
    </div>
  );
}


  `
  },
  {
    name: "NeonHoloFooter",
    category: "Footer",
    code: `

function NeonHoloFooter() {
  const [hoveredItem, setHoveredItem] = React.useState(null);
  const [email, setEmail] = React.useState('');

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute w-96 h-96 top-20 left-20 bg-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute w-80 h-80 bottom-40 right-32 bg-purple-600 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute w-64 h-64 top-1/2 left-1/2 bg-pink-500 rounded-full blur-3xl animate-ping-slow" />
      </div>

      <footer className="relative z-10 w-full pb-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            {/* Brand Section */}
            <div className="lg:col-span-5 space-y-10">
              <div className="flex items-center gap-8">
                {/* Holographic Logo */}
                <div
                  className="relative group cursor-pointer"
                  onMouseEnter={() => setHoveredItem('logo')}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-1000" />
                  <div
                    className="relative p-8 rounded-3xl"
                    style={{
                      background: 'linear-gradient(145deg, rgba(20, 10, 40, 0.8), rgba(10, 20, 40, 0.6))',
                      backdropFilter: 'blur(20px)',
                      border: '1px solid rgba(0, 255, 255, 0.3)',
                      boxShadow: hoveredItem === 'logo' 
                        ? '0 0 80px rgba(0, 255, 255, 0.6), inset 0 0 40px rgba(0, 255, 255, 0.1)' 
                        : '0 0 40px rgba(0, 255, 255, 0.3)',
                      transition: 'all 0.8s ease',
                    }}
                  >
                    <div className="text-7xl font-black" style={{
                      background: 'linear-gradient(90deg, #00ffff, #ff00ff, #00ffff)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      textShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
                    }}>
                      Δ
                    </div>
                  </div>
                </div>

                <div>
                  <h1 className="text-6xl font-black tracking-tighter" style={{
                    background: 'linear-gradient(90deg, #00ffff, #ff00ff)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}>
                    NEXARA
                  </h1>
                  <p className="text-lg uppercase tracking-[1em] font-light mt-2" style={{ color: '#00ffff', letterSpacing: '0.8em' }}>
                    Quantum Link
                  </p>
                </div>
              </div>

              <p className="text-base max-w-md leading-relaxed font-light" style={{ color: '#b0b0ff' }}>
                Pioneering the fusion of quantum consciousness and decentralized neural networks. Securing the future of autonomous intelligence.
              </p>

              {/* Status Cards */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: '∞', label: 'UPTIME' },
                  { value: '142K+', label: 'NODES' },
                  { value: '<0.1ms', label: 'LATENCY' },
                  { value: 'ENCRYPTED', label: 'PROTOCOL' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="relative p-6 rounded-2xl border overflow-hidden group"
                    style={{
                      borderColor: 'rgba(0, 255, 255, 0.2)',
                      background: 'rgba(0, 255, 255, 0.05)',
                      backdropFilter: 'blur(10px)',
                    }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-600/10 translate-y-full group-hover:translate-y-0 transition-transform duration-700" />
                    <div className="relative z-10">
                      <div className="text-4xl font-black" style={{ color: '#00ffff' }}>{stat.value}</div>
                      <div className="text-xs uppercase tracking-widest mt-3 font-mono" style={{ color: '#ff00ff' }}>{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="lg:col-span-4 grid grid-cols-2 gap-16">
              {[
                { title: 'SYSTEM', items: ['Dashboard', 'API Gateway', 'Node Sync', 'Validator', 'Explorer'] },
                { title: 'NETWORK', items: ['Docs', 'Whitepaper', 'SDKs', 'Forum', 'DAO Portal'] },
              ].map((col) => (
                <div key={col.title}>
                  <h4 className="text-sm uppercase tracking-widest mb-10 flex items-center gap-5 font-mono">
                    <div className="w-12 h-px bg-gradient-to-r from-cyan-400 to-transparent" />
                    <span style={{ color: '#ff00ff' }}>{col.title}</span>
                  </h4>
                  <ul className="space-y-6">
                    {col.items.map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="group flex items-center gap-4 text-base font-light transition-all duration-500"
                          style={{ color: hoveredItem === item ? '#00ffff' : '#a0a0ff' }}
                          onMouseEnter={() => setHoveredItem(item)}
                          onMouseLeave={() => setHoveredItem(null)}
                        >
                          <span className="text-cyan-400 opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 transition-all duration-500">
                            ▶
                          </span>
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Newsletter */}
            <div className="lg:col-span-3">
              <div
                className="relative p-10 rounded-3xl border-2 overflow-hidden group cursor-pointer"
                style={{
                  borderColor: '#ff00ff',
                  background: 'linear-gradient(160deg, rgba(50,0,80,0.6), rgba(0,50,80,0.4))',
                  backdropFilter: 'blur(20px)',
                  boxShadow: '0 0 60px rgba(255,0,255,0.3)',
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-cyan-500/10 opacity-40 group-hover:opacity-70 transition-opacity duration-1000" />
                
                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-8">
                    <span className="px-5 py-2 border text-xs uppercase tracking-wider font-mono" style={{ borderColor: '#00ffff', color: '#00ffff' }}>
                      QUANTUM FEED
                    </span>
                    <div className="flex gap-3">
                      <div className="w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
                      <div className="w-4 h-4 bg-purple-500 rounded-full animate-ping delay-300" />
                    </div>
                  </div>

                  <h3 className="text-4xl font-black mb-5" style={{ color: '#ffffff' }}>
                    Stay Synced
                  </h3>
                  <p className="text-sm mb-10 leading-relaxed font-light" style={{ color: '#d0d0ff' }}>
                    Get real-time protocol updates, security alerts, and quantum layer notifications.
                  </p>

                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="node@nexara.link"
                    className="w-full px-6 py-5 mb-6 rounded-2xl bg-white/5 border font-mono text-sm focus:outline-none focus:border-cyan-400 transition-all duration-500"
                    style={{ borderColor: '#ff00ff40', color: '#00ffff' }}
                  />

                  <button
                    className="w-full py-5 rounded-2xl font-bold uppercase tracking-widest transition-all duration-500 hover:scale-105"
                    style={{
                      background: email ? 'linear-gradient(90deg, #00ffff, #ff00ff)' : 'rgba(255,255,255,0.1)',
                      color: email ? '#000' : '#666',
                      boxShadow: email ? '0 0 50px rgba(0,255,255,0.7)' : 'none',
                    }}
                    disabled={!email}
                  >
                    Engage Link
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 pt-12 border-t" style={{ borderColor: 'rgba(0,255,255,0.2)' }}>
            <div className="flex flex-wrap items-center gap-10 text-sm font-mono" style={{ color: '#8888ff' }}>
              <span>© 2025 Nexara Quantum Link</span>
              <div className="flex gap-10">
                {['Privacy', 'Security', 'Terms', 'Status'].map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="hover:text-cyan-400 transition-colors duration-400"
                    style={{ color: hoveredItem === link ? '#00ffff' : '#8888ff' }}
                    onMouseEnter={() => setHoveredItem(link)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-6 px-10 py-5 rounded-full border-2"
              style={{
                borderColor: '#00ff00',
                background: 'rgba(0, 255, 0, 0.1)',
                boxShadow: '0 0 40px rgba(0, 255, 0, 0.4)',
              }}
            >
              <div className="w-6 h-6 bg-green-400 rounded-full shadow-lg shadow-green-400 animate-ping" />
              <span className="text-xl font-black uppercase tracking-wider" style={{ color: '#00ffff' }}>
                SYSTEM ONLINE • HYPER SYNC ACTIVE
              </span>
            </div>
          </div>

          {/* Final Glow Line */}
          <div className="h-1 mt-20 rounded-full"
            style={{
              background: 'linear-gradient(90deg, transparent, #00ffff 30%, #ff00ff 50%, #00ffff 70%, transparent)',
              boxShadow: '0 0 80px #00ffff, 0 0 120px #ff00ff',
              filter: 'blur(1px)',
            }}
          />
        </div>
      </footer>
    </div>
  );
}


  `
  },
 
  {
    name: "QuantumHeader",
    category: "Header",
    code: `

function QuantumHeader() {
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-cyan-950 to-slate-900 flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      {/* Smooth Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-72 h-72 rounded-full blur-3xl opacity-30"
          style={{
            background: 'linear-gradient(135deg, rgba(0, 255, 200, 0.6), rgba(34, 211, 238, 0.3))',
            top: '-10%',
            right: '-5%',
            animation: 'pulse 6s ease-in-out infinite',
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-25"
          style={{
            background: 'linear-gradient(225deg, rgba(34, 211, 238, 0.5), rgba(0, 255, 200, 0.2))',
            bottom: '-15%',
            left: '-8%',
            animation: 'pulse 7s ease-in-out infinite 1s',
          }}
        ></div>
      </div>

      {/* Simple Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: i % 2 === 0 ? 'rgb(0, 255, 200)' : 'rgb(34, 211, 238)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              boxShadow: i % 2 === 0 ? '0 0 10px rgb(0, 255, 200)' : '0 0 10px rgb(34, 211, 238)',
              opacity: 0.4,
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-6xl relative z-10">
        
        <div className="relative py-16">

          {/* Geometric Frame */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Left Edge */}
            <div className="absolute left-0 top-1/4 bottom-1/4 w-1">
              <div 
                className="h-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(to bottom, rgb(0, 255, 200), transparent, rgb(0, 255, 200))',
                  boxShadow: isActive ? '0 0 20px rgb(0, 255, 200)' : '0 0 10px rgb(0, 255, 200)',
                }}
              ></div>
            </div>

            {/* Right Edge */}
            <div className="absolute right-0 top-1/4 bottom-1/4 w-1">
              <div 
                className="h-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(to bottom, rgb(34, 211, 238), transparent, rgb(34, 211, 238))',
                  boxShadow: isActive ? '0 0 20px rgb(34, 211, 238)' : '0 0 10px rgb(34, 211, 238)',
                }}
              ></div>
            </div>

            {/* Corner Accents */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-12 h-12"
                style={{
                  top: i < 2 ? '0' : 'auto',
                  bottom: i >= 2 ? '0' : 'auto',
                  left: i % 2 === 0 ? '0' : 'auto',
                  right: i % 2 === 1 ? '0' : 'auto',
                }}
              >
                <div 
                  className="absolute w-full h-0.5 transition-all duration-500"
                  style={{
                    background: i % 2 === 0 ? 'linear-gradient(to right, rgb(0, 255, 200), transparent)' : 'linear-gradient(to left, rgb(34, 211, 238), transparent)',
                    top: i < 2 ? '0' : 'auto',
                    bottom: i >= 2 ? '0' : 'auto',
                    boxShadow: isActive ? (i % 2 === 0 ? '0 0 15px rgb(0, 255, 200)' : '0 0 15px rgb(34, 211, 238)') : 'none',
                  }}
                ></div>
                <div 
                  className="absolute h-full w-0.5 transition-all duration-500"
                  style={{
                    background: i % 2 === 0 ? 'linear-gradient(to bottom, rgb(0, 255, 200), transparent)' : 'linear-gradient(to bottom, rgb(34, 211, 238), transparent)',
                    left: i % 2 === 0 ? '0' : 'auto',
                    right: i % 2 === 1 ? '0' : 'auto',
                    boxShadow: isActive ? (i % 2 === 0 ? '0 0 15px rgb(0, 255, 200)' : '0 0 15px rgb(34, 211, 238)') : 'none',
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center px-6">
            
            {/* System Status Badge */}
            <div className="flex justify-center mb-10">
              <div 
                className="flex items-center gap-3 px-6 py-2 border transition-all duration-500 backdrop-blur-md rounded-full"
                style={{
                  borderColor: isActive ? 'rgb(0, 255, 200)' : 'rgb(15, 118, 110)',
                  backgroundColor: 'rgba(0, 255, 200, 0.05)',
                  boxShadow: isActive ? '0 0 25px rgba(0, 255, 200, 0.4)' : '0 0 8px rgba(0, 255, 200, 0.15)',
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'rgb(0, 255, 200)',
                    boxShadow: '0 0 10px rgb(0, 255, 200)',
                  }}
                ></div>
                <span 
                  className="text-xs font-mono uppercase tracking-wider transition-all duration-500"
                  style={{
                    color: isActive ? 'rgb(0, 255, 200)' : 'rgb(0, 188, 212)',
                  }}
                >
                  System Initialized
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="relative mb-10">
              <h1 
                className="text-8xl md:text-9xl font-black mb-3 tracking-tighter transition-all duration-500"
                style={{
                  color: isActive ? 'rgb(0, 255, 200)' : 'rgb(100, 116, 139)',
                  textShadow: isActive ? '0 0 20px rgba(0, 255, 200, 0.7)' : 'none',
                  letterSpacing: '-0.02em',
                }}
              >
                QUANTUM
              </h1>

              <p 
                className="text-xl md:text-2xl font-bold uppercase tracking-widest transition-all duration-700"
                style={{
                  color: isActive ? 'rgb(0, 255, 200)' : 'rgb(100, 116, 139)',
                  textShadow: isActive ? '0 0 20px rgba(0, 255, 200, 0.7)' : 'none',
                }}
              >
                Powered by Innovation
              </p>
            </div>

            {/* Animated Separator */}
            <div className="flex justify-center items-center gap-3 mb-10">
              <div 
                className="flex-1 h-px transition-all duration-700"
                style={{
                  background: 'linear-gradient(to right, transparent, rgb(0, 255, 200))',
                  maxWidth: '80px',
                  boxShadow: isActive ? '0 0 10px rgb(0, 255, 200)' : 'none',
                }}
              ></div>
              <div 
                className="w-3 h-3 rounded-full transition-all duration-500"
                style={{
                  backgroundColor: isActive ? 'rgb(34, 211, 238)' : 'rgb(71, 85, 105)',
                  boxShadow: isActive ? '0 0 15px rgb(34, 211, 238)' : 'none',
                }}
              ></div>
              <div 
                className="flex-1 h-px transition-all duration-700"
                style={{
                  background: 'linear-gradient(to left, transparent, rgb(34, 211, 238))',
                  maxWidth: '80px',
                  boxShadow: isActive ? '0 0 10px rgb(34, 211, 238)' : 'none',
                }}
              ></div>
            </div>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-500"
              style={{
                color: isActive ? 'rgb(203, 213, 225)' : 'rgb(148, 163, 184)',
                textShadow: isActive ? '0 0 10px rgba(0, 255, 200, 0.2)' : 'none',
              }}
            >
              Experience cutting-edge technology with seamless integration and unparalleled performance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mb-16">
              <button 
                className="relative px-10 py-3 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: 'rgba(0, 255, 200, 0.1)',
                  border: '2px solid rgb(0, 255, 200)',
                  color: 'rgb(0, 255, 200)',
                  boxShadow: isActive ? '0 0 25px rgba(0, 255, 200, 0.5)' : '0 0 12px rgba(0, 255, 200, 0.2)',
                }}
              >
                <span className="relative z-10">Explore Now</span>
                <div 
                  className="absolute inset-0 transition-transform duration-500"
                  style={{
                    backgroundColor: 'rgba(0, 255, 200, 0.15)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                ></div>
              </button>

              <button 
                className="px-10 py-3 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  border: '2px solid rgb(34, 211, 238)',
                  color: 'rgb(34, 211, 238)',
                  boxShadow: isActive ? '0 0 25px rgba(34, 211, 238, 0.5)' : '0 0 12px rgba(34, 211, 238, 0.2)',
                }}
              >
                Learn More
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              {[
                { icon: '⚡', title: 'Ultra Fast', desc: 'Lightning-speed processing', color: 'rgb(0, 255, 200)' },
                { icon: '🔒', title: 'Secure', desc: 'Bank-level encryption', color: 'rgb(34, 211, 238)' },
                { icon: '∞', title: 'Scalable', desc: 'Grow without limits', color: 'rgb(0, 255, 200)' },
              ].map((feature, idx) => (
                <div 
                  key={idx}
                  className="p-7 border transition-all duration-500 backdrop-blur-sm rounded-lg overflow-hidden relative"
                  style={{
                    borderColor: isActive ? feature.color : 'rgb(30, 58, 138)',
                    backgroundColor: 'rgba(15, 23, 42, 0.6)',
                    boxShadow: isActive ? '0 0 25px rgba(0, 255, 200, 0.2)' : 'none',
                  }}
                >
                  <div 
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                    style={{ 
                      backgroundColor: feature.color,
                      boxShadow: isActive ? '0 0 15px ' + feature.color : 'none',
                    }}
                  ></div>
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <div className="text-lg font-bold uppercase mb-2" style={{ color: feature.color }}>{feature.title}</div>
                  <div className="text-sm" style={{ color: 'rgb(100, 116, 139)' }}>{feature.desc}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Hover Aura Effect */}
          {isActive && (
            <div
              className="absolute pointer-events-none w-80 h-80 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgb(0, 255, 200), transparent)',
                left: mousePos.x - 160 + 'px',
                top: mousePos.y - 160 + 'px',
                transition: 'all 0.1s ease-out',
              }}
            ></div>
          )}

        </div>
      </div>
    </div>
  );
}


    
  `
  },
  {
    name: "PremiumHeader",
    category: "Header",
    code: `

function PremiumHeader() {
  const [isActive, setIsActive] = useState(false);

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      {/* Animated Orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.8), rgba(147, 51, 234, 0.4))',
            top: '-10%',
            right: '5%',
            animation: 'pulse 8s ease-in-out infinite',
            opacity: isActive ? 0.6 : 0.3,
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(225deg, rgba(168, 85, 247, 0.7), rgba(59, 130, 246, 0.3))',
            bottom: '-5%',
            left: '5%',
            animation: 'pulse 10s ease-in-out infinite 1s',
            opacity: isActive ? 0.5 : 0.25,
          }}
        ></div>
        <div 
          className="absolute w-72 h-72 rounded-full blur-3xl"
          style={{
            background: 'linear-gradient(45deg, rgba(99, 102, 241, 0.6), rgba(168, 85, 247, 0.3))',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            animation: 'pulse 12s ease-in-out infinite 2s',
            opacity: isActive ? 0.4 : 0.2,
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: '2px',
              height: '2px',
              backgroundColor: i % 4 === 0 ? 'rgb(59, 130, 246)' : i % 4 === 1 ? 'rgb(168, 85, 247)' : i % 4 === 2 ? 'rgb(139, 92, 246)' : 'rgb(99, 102, 241)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              boxShadow: i % 4 === 0 ? '0 0 10px rgb(59, 130, 246)' : i % 4 === 1 ? '0 0 10px rgb(168, 85, 247)' : i % 4 === 2 ? '0 0 10px rgb(139, 92, 246)' : '0 0 10px rgb(99, 102, 241)',
              opacity: 0.5,
            }}
          ></div>
        ))}
      </div>

      <div className="w-full max-w-7xl relative z-10">
        <div className="relative py-20">

          {/* Elegant Corner Frames */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left */}
            <div className="absolute top-0 left-0">
              <div 
                className="absolute w-40 h-1 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to right, rgb(59, 130, 246), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(59, 130, 246)' : '0 0 10px rgb(59, 130, 246)',
                }}
              ></div>
              <div 
                className="absolute w-1 h-40 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to bottom, rgb(59, 130, 246), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(59, 130, 246)' : '0 0 10px rgb(59, 130, 246)',
                }}
              ></div>
            </div>

            {/* Top Right */}
            <div className="absolute top-0 right-0">
              <div 
                className="absolute w-40 h-1 right-0 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to left, rgb(168, 85, 247), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(168, 85, 247)' : '0 0 10px rgb(168, 85, 247)',
                }}
              ></div>
              <div 
                className="absolute h-40 w-1 right-0 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to bottom, rgb(168, 85, 247), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(168, 85, 247)' : '0 0 10px rgb(168, 85, 247)',
                }}
              ></div>
            </div>

            {/* Bottom Left */}
            <div className="absolute bottom-0 left-0">
              <div 
                className="absolute w-40 h-1 bottom-0 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to right, rgb(139, 92, 246), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(139, 92, 246)' : '0 0 10px rgb(139, 92, 246)',
                }}
              ></div>
              <div 
                className="absolute h-40 w-1 bottom-0 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to top, rgb(139, 92, 246), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(139, 92, 246)' : '0 0 10px rgb(139, 92, 246)',
                }}
              ></div>
            </div>

            {/* Bottom Right */}
            <div className="absolute bottom-0 right-0">
              <div 
                className="absolute w-40 h-1 bottom-0 right-0 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to left, rgb(99, 102, 241), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(99, 102, 241)' : '0 0 10px rgb(99, 102, 241)',
                }}
              ></div>
              <div 
                className="absolute h-40 w-1 bottom-0 right-0 transition-all duration-700"
                style={{
                  background: 'linear-gradient(to top, rgb(99, 102, 241), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(99, 102, 241)' : '0 0 10px rgb(99, 102, 241)',
                }}
              ></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center px-8">
            
            {/* Animated Badge */}
            <div className="flex justify-center mb-14">
              <div 
                className="flex items-center gap-4 px-8 py-4 border transition-all duration-500 backdrop-blur-lg rounded-full"
                style={{
                  borderColor: isActive ? 'rgb(59, 130, 246)' : 'rgb(30, 58, 138)',
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  boxShadow: isActive ? '0 0 40px rgba(59, 130, 246, 0.6)' : '0 0 15px rgba(59, 130, 246, 0.2)',
                  transform: isActive ? 'scale(1.05)' : 'scale(1)',
                }}
              >
                <div 
                  className="w-3 h-3 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'rgb(59, 130, 246)',
                    boxShadow: '0 0 20px rgb(59, 130, 246)',
                  }}
                ></div>
                <span 
                  className="text-sm font-mono uppercase tracking-widest transition-all duration-500"
                  style={{
                    color: isActive ? 'rgb(59, 130, 246)' : 'rgb(96, 165, 250)',
                  }}
                >
                  Powered by AI Intelligence
                </span>
              </div>
            </div>

            {/* Main Heading */}
            <div className="relative mb-8">
              <h1 
                className="text-8xl md:text-9xl font-black mb-4 tracking-tight transition-all duration-700"
                style={{
                  color: isActive ? 'rgb(59, 130, 246)' : 'rgb(139, 92, 246)',
                  textShadow: isActive 
                    ? '0 0 40px rgba(59, 130, 246, 0.8), 0 0 80px rgba(168, 85, 247, 0.5)'
                    : '0 0 20px rgba(139, 92, 246, 0.3)',
                  filter: isActive ? 'brightness(1.3)' : 'brightness(1)',
                  letterSpacing: '-0.02em',
                }}
              >
                ZENITH
              </h1>

              <div className="h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent mx-auto mb-8 max-w-2xl transition-all duration-700" style={{
                boxShadow: isActive ? '0 0 20px rgba(59, 130, 246, 0.5)' : 'none',
                opacity: isActive ? 1 : 0.5,
              }}></div>

              <p 
                className="text-2xl md:text-3xl font-bold uppercase tracking-widest transition-all duration-700"
                style={{
                  color: isActive ? 'rgb(168, 85, 247)' : 'rgb(148, 163, 184)',
                  textShadow: isActive 
                    ? '0 0 30px rgba(168, 85, 247, 0.8)' 
                    : 'none',
                }}
              >
                Next Generation Platform
              </p>
            </div>

            {/* Description */}
            <p 
              className="text-lg md:text-xl max-w-3xl mx-auto mb-16 leading-relaxed transition-all duration-500 font-light"
              style={{
                color: isActive ? 'rgb(226, 232, 240)' : 'rgb(148, 163, 184)',
                letterSpacing: '0.5px',
              }}
            >
              Unlock unprecedented potential with our revolutionary AI-powered platform. 
              Transform your business with intelligent automation and real-time insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <button 
                className="group relative px-12 py-4 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: isActive ? 'rgba(59, 130, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                  border: '2px solid rgb(59, 130, 246)',
                  color: 'rgb(59, 130, 246)',
                  boxShadow: isActive ? '0 0 40px rgba(59, 130, 246, 0.6)' : '0 0 20px rgba(59, 130, 246, 0.3)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                <span className="relative z-10">Start Free Trial</span>
                <div 
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    backgroundColor: 'rgba(59, 130, 246, 0.2)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                ></div>
              </button>

              <button 
                className="px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.9)',
                  border: '2px solid rgb(168, 85, 247)',
                  color: 'rgb(168, 85, 247)',
                  boxShadow: isActive ? '0 0 40px rgba(168, 85, 247, 0.6)' : '0 0 20px rgba(168, 85, 247, 0.3)',
                  transform: isActive ? 'translateY(-2px)' : 'translateY(0)',
                }}
              >
                Watch Demo
              </button>
            </div>

            {/* Premium Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-md relative overflow-hidden rounded-xl"
                style={{
                  borderColor: isActive ? 'rgb(59, 130, 246)' : 'rgb(30, 58, 138)',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: isActive ? '0 0 35px rgba(59, 130, 246, 0.3)' : 'none',
                  transform: isActive ? 'translateY(-15px)' : 'translateY(0)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgb(59, 130, 246)',
                    boxShadow: isActive ? '0 0 20px rgb(59, 130, 246)' : 'none',
                  }}
                ></div>
                <div className="text-6xl mb-4 transition-transform duration-500" style={{
                  transform: isActive ? 'scale(1.2)' : 'scale(1)',
                }}>
                  ⚡
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 transition-all duration-500" style={{ color: 'rgb(59, 130, 246)' }}>
                  Lightning Speed
                </h3>
                <p className="text-sm text-gray-400">Sub-millisecond response</p>
              </div>

              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-md relative overflow-hidden rounded-xl"
                style={{
                  borderColor: isActive ? 'rgb(168, 85, 247)' : 'rgb(30, 58, 138)',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: isActive ? '0 0 35px rgba(168, 85, 247, 0.3)' : 'none',
                  transform: isActive ? 'translateY(-15px)' : 'translateY(0)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgb(168, 85, 247)',
                    boxShadow: isActive ? '0 0 20px rgb(168, 85, 247)' : 'none',
                  }}
                ></div>
                <div className="text-6xl mb-4 transition-transform duration-500" style={{
                  transform: isActive ? 'scale(1.2)' : 'scale(1)',
                }}>
                  🛡️
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 transition-all duration-500" style={{ color: 'rgb(168, 85, 247)' }}>
                  Enterprise Security
                </h3>
                <p className="text-sm text-gray-400">256-bit encryption standard</p>
              </div>

              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-md relative overflow-hidden rounded-xl"
                style={{
                  borderColor: isActive ? 'rgb(139, 92, 246)' : 'rgb(30, 58, 138)',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: isActive ? '0 0 35px rgba(139, 92, 246, 0.3)' : 'none',
                  transform: isActive ? 'translateY(-15px)' : 'translateY(0)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    backgroundColor: 'rgb(139, 92, 246)',
                    boxShadow: isActive ? '0 0 20px rgb(139, 92, 246)' : 'none',
                  }}
                ></div>
                <div className="text-6xl mb-4 transition-transform duration-500" style={{
                  transform: isActive ? 'scale(1.2)' : 'scale(1)',
                }}>
                  ♾️
                </div>
                <h3 className="text-xl font-bold uppercase mb-2 transition-all duration-500" style={{ color: 'rgb(139, 92, 246)' }}>
                  Infinite Scale
                </h3>
                <p className="text-sm text-gray-400">Grows with your needs</p>
              </div>
            </div>

          </div>

          {/* Animated Rings on Hover */}
          {isActive && (
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
              <div
                className="absolute rounded-full border-2"
                style={{
                  borderColor: 'rgba(59, 130, 246, 0.3)',
                  width: '150px',
                  height: '150px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse 2s ease-out infinite',
                  opacity: 0.4,
                }}
              ></div>
              <div
                className="absolute rounded-full border-2"
                style={{
                  borderColor: 'rgba(168, 85, 247, 0.3)',
                  width: '230px',
                  height: '230px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse 2.5s ease-out infinite',
                  opacity: 0.3,
                }}
              ></div>
              <div
                className="absolute rounded-full border-2"
                style={{
                  borderColor: 'rgba(139, 92, 246, 0.3)',
                  width: '310px',
                  height: '310px',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  animation: 'pulse 3s ease-out infinite',
                  opacity: 0.2,
                }}
              ></div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
} 
  `
  },
  {
    name: "EliteCard",
    category: "Cards",
    code: `

function EliteCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const CrownIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm0 4h14v2H5v-2z" />
    </svg>
  );

  const CheckCircleIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <circle cx="12" cy="12" r="10" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #431407 50%, #7c2d12 100%)', 
      padding: '48px 16px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '2px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #f97316, #fb923c, #fdba74)' 
            : 'linear-gradient(135deg, #c2410c, #ea580c, #f97316)',
          borderRadius: '24px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 70px rgba(249, 115, 22, 0.5), 0 0 60px rgba(249, 115, 22, 0.3)' 
            : '0 10px 40px rgba(249, 115, 22, 0.2)',
          cursor: 'pointer',
          maxWidth: '420px',
          width: '100%'
        }}
      >
        <div style={{ 
          padding: '28px', 
          background: 'linear-gradient(135deg, #0f172a, #1c1917)',
          borderRadius: '22px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(249, 115, 22, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 1 : 0.5
          }}></div>

          {/* Elite Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #f97316, #fb923c)',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#0f172a',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(249, 115, 22, 0.4)'
          }}>
            ELITE
          </div>

          {/* Icon */}
          <div style={{ 
            width: '56px', 
            height: '56px', 
            background: 'linear-gradient(135deg, #f97316, #fb923c)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '16px',
            color: '#0f172a',
            boxShadow: '0 8px 24px rgba(249, 115, 22, 0.4)',
            transition: 'all 0.3s',
            transform: isHovered ? 'rotate(10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}>
            <CrownIcon />
          </div>

          <h3 style={{ 
            fontSize: '1.6rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #f97316, #fdba74)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px',
            letterSpacing: '0.5px'
          }}>
            Elite Membership
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Join the exclusive circle of professionals with premium benefits and VIP treatment
          </p>
          
          {/* Content Box */}
          <div style={{ 
            marginBottom: '20px',
            padding: '20px',
            background: 'rgba(249, 115, 22, 0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(249, 115, 22, 0.2)',
            transition: 'all 0.3s',
            boxShadow: isHovered ? '0 0 30px rgba(249, 115, 22, 0.1)' : 'none'
          }}>
            <div style={{
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(249, 115, 22, 0.2)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#fb923c',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                ANNUAL MEMBERSHIP
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px'
              }}>
                <span style={{
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  color: '#f97316',
                  lineHeight: '1'
                }}>$499</span>
                <span style={{
                  fontSize: '1.2rem',
                  color: '#64748b',
                  textDecoration: 'line-through'
                }}>$799</span>
              </div>
            </div>

            {/* Features List */}
            <div style={{ marginTop: '16px' }}>
              {['VIP Event Access', 'Dedicated Account Manager', 'Exclusive Resources', 'Early Product Launch', 'Custom Integrations'].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '10px' 
                }}>
                  <div style={{ 
                    color: '#f97316',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <CheckCircleIcon />
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button 
            style={{ 
              padding: '12px 28px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #f97316, #fb923c)' 
                : 'linear-gradient(135deg, #ea580c, #f97316)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1rem',
              boxShadow: '0 8px 20px rgba(249, 115, 22, 0.3)',
              width: '100%',
              letterSpacing: '0.5px'
            }}
          >
            Claim Your Spot
          </button>

          <div style={{
            marginTop: '12px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            Limited to 100 members • 12 spots left
          </div>

          {/* Stats */}
          <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '20px',
            borderTop: '1px solid rgba(249, 115, 22, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#f97316',
                marginBottom: '4px'
              }}>
                500+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Elite Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#f97316',
                marginBottom: '4px'
              }}>
                $2M+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Value Saved</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#f97316',
                marginBottom: '4px'
              }}>
                98%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Renewal Rate</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


    
  `
  },
   {
    name: "CreativeStudioCard",
    category: "Cards",
    code: `
function CreativeStudioCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const PaletteIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.1 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.3-.5-.8-.5-1.3 0-1.1.9-2 2-2h2.4c3.3 0 5.6-2.7 5.6-6C22 6.5 17.5 2 12 2z" />
      <circle cx="7" cy="10" r="1.5" />
      <circle cx="11" cy="7" r="1.5" />
      <circle cx="16" cy="10" r="1.5" />
    </svg>
  );

  const HeartIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
    </svg>
  );

  const VerifiedIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 1L9 4H5v4L2 12l3 4v4h4l3 3 3-3h4v-4l3-4-3-4V4h-4l-3-3z" />
      <path d="M9 12l2 2 4-4" stroke="white" strokeWidth="2" fill="none" />
    </svg>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #1a0b1e 0%, #2d1436 50%, #4a1d5f 100%)', 
      padding: '48px 16px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '2px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #ec4899, #f472b6, #fb7185)' 
            : 'linear-gradient(135deg, #be185d, #db2777, #ec4899)',
          borderRadius: '24px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 70px rgba(236, 72, 153, 0.5), 0 0 60px rgba(236, 72, 153, 0.3)' 
            : '0 10px 40px rgba(236, 72, 153, 0.2)',
          cursor: 'pointer',
          maxWidth: '420px',
          width: '100%'
        }}
      >
        <div style={{ 
          padding: '28px', 
          background: 'linear-gradient(135deg, #1a0b1e, #2d1436)',
          borderRadius: '22px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 1 : 0.5
          }}></div>

          {/* Decorative element left side */}
          <div style={{
            position: 'absolute',
            bottom: '10%',
            left: '-5%',
            width: '100px',
            height: '100px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.1) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 0.8 : 0.3
          }}></div>

          {/* Creator Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '6px 16px',
            background: 'linear-gradient(135deg, #ec4899, #f472b6)',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(236, 72, 153, 0.4)'
          }}>
            <HeartIcon />
            CREATOR
          </div>

          {/* Icon */}
          <div style={{ 
            width: '56px', 
            height: '56px', 
            background: 'linear-gradient(135deg, #ec4899, #f472b6)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '16px',
            color: '#ffffff',
            boxShadow: '0 8px 24px rgba(236, 72, 153, 0.4)',
            transition: 'all 0.3s',
            transform: isHovered ? 'rotate(15deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}>
            <PaletteIcon />
          </div>

          <h3 style={{ 
            fontSize: '1.6rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #ec4899, #fda4af)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px',
            letterSpacing: '0.5px'
          }}>
            Creative Studio
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Unleash your creativity with premium design tools and unlimited creative assets
          </p>
          
          {/* Content Box */}
          <div style={{ 
            marginBottom: '20px',
            padding: '20px',
            background: 'rgba(236, 72, 153, 0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(236, 72, 153, 0.2)',
            transition: 'all 0.3s',
            boxShadow: isHovered ? '0 0 30px rgba(236, 72, 153, 0.1)' : 'none'
          }}>
            <div style={{
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(236, 72, 153, 0.2)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{
                  fontSize: '0.75rem',
                  color: '#f472b6',
                  fontWeight: 'bold',
                  letterSpacing: '1px',
                  marginBottom: '8px'
                }}>
                  ANNUAL PLAN
                </div>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  gap: '8px'
                }}>
                  <span style={{
                    fontSize: '2.2rem',
                    fontWeight: 'bold',
                    color: '#ec4899',
                    lineHeight: '1'
                  }}>$99</span>
                  <span style={{
                    fontSize: '0.9rem',
                    color: '#64748b'
                  }}>/year</span>
                </div>
              </div>
              <div style={{
                padding: '8px 12px',
                background: 'rgba(34, 197, 94, 0.2)',
                borderRadius: '8px',
                border: '1px solid rgba(34, 197, 94, 0.3)'
              }}>
                <div style={{
                  fontSize: '0.7rem',
                  color: '#4ade80',
                  fontWeight: 'bold'
                }}>SAVE 40%</div>
              </div>
            </div>

            {/* Features List */}
            <div style={{ marginTop: '16px' }}>
              {['10,000+ Design Templates', 'AI-Powered Tools', 'Cloud Storage 500GB', 'Collaboration Features', 'Commercial License'].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '10px' 
                }}>
                  <div style={{ 
                    color: '#ec4899',
                    display: 'flex',
                    alignItems: 'center'
                  }}>
                    <VerifiedIcon />
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button 
            style={{ 
              padding: '12px 28px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #ec4899, #f472b6)' 
                : 'linear-gradient(135deg, #db2777, #ec4899)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1rem',
              boxShadow: '0 8px 20px rgba(236, 72, 153, 0.3)',
              width: '100%',
              letterSpacing: '0.5px'
            }}
          >
            Start Creating Today
          </button>

          <div style={{
            marginTop: '12px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            30-day money-back guarantee
          </div>

          {/* Stats */}
          <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '20px',
            borderTop: '1px solid rgba(236, 72, 153, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#ec4899',
                marginBottom: '4px'
              }}>
                200K+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Creators</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#ec4899',
                marginBottom: '4px'
              }}>
                5M+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Projects</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#ec4899',
                marginBottom: '4px'
              }}>
                4.8★
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    
  `
  },
   {
    name: "HolographicHeader",
    category: "Header",
    code: `

function HolographicHeader() {
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [glitchActive, setGlitchActive] = useState(false);

  useEffect(() => {
    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    return () => clearInterval(glitchInterval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-purple-950 via-black to-blue-950 flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full animate-pulse"
          style={{
            backgroundImage: 'linear-gradient(rgba(147, 51, 234, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(147, 51, 234, 0.3) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Scan Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div 
          className="w-full h-0.5 absolute top-0 animate-pulse"
          style={{
            background: 'linear-gradient(to right, transparent, rgb(167, 139, 250), transparent)',
            boxShadow: '0 0 20px rgb(167, 139, 250)',
          }}
        ></div>
      </div>

      {/* Data Streams */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute text-xs font-mono opacity-30 left-[10%] top-0 text-purple-600 animate-bounce">
          xf9k2jd8s
        </div>
        <div className="absolute text-xs font-mono opacity-30 left-[25%] top-0 text-blue-500 animate-bounce">
          p3m7nq1w
        </div>
        <div className="absolute text-xs font-mono opacity-30 left-[40%] top-0 text-pink-500 animate-bounce">
          z5t8rh4k
        </div>
        <div className="absolute text-xs font-mono opacity-30 left-[55%] top-0 text-purple-600 animate-bounce">
          b6y9vs2c
        </div>
        <div className="absolute text-xs font-mono opacity-30 left-[70%] top-0 text-blue-500 animate-bounce">
          l4g7xm3j
        </div>
        <div className="absolute text-xs font-mono opacity-30 left-[85%] top-0 text-pink-500 animate-bounce">
          w8n1qp5d
        </div>
      </div>

      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-40 h-40 rounded-full blur-xl opacity-40 top-[20%] left-[15%] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6), transparent)',
          }}
        ></div>
        <div
          className="absolute w-48 h-48 rounded-full blur-xl opacity-40 top-[60%] right-[20%] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.6), transparent)',
          }}
        ></div>
        <div
          className="absolute w-36 h-36 rounded-full blur-xl opacity-40 bottom-[30%] left-[40%] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6), transparent)',
          }}
        ></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        
        <div className="relative py-16">

          {/* Holographic Frame */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 h-1">
              <div 
                className="h-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(to right, transparent, rgb(147, 51, 234), rgb(59, 130, 246), transparent)',
                  boxShadow: isActive ? '0 0 30px rgb(147, 51, 234)' : '0 0 15px rgb(147, 51, 234)',
                }}
              ></div>
            </div>

            {/* Bottom Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1">
              <div 
                className="h-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(to right, transparent, rgb(59, 130, 246), rgb(147, 51, 234), transparent)',
                  boxShadow: isActive ? '0 0 30px rgb(59, 130, 246)' : '0 0 15px rgb(59, 130, 246)',
                }}
              ></div>
            </div>

            {/* Corner Brackets */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-16 h-16 transition-all duration-500"
                style={{
                  top: i < 2 ? '-4px' : 'auto',
                  bottom: i >= 2 ? '-4px' : 'auto',
                  left: i % 2 === 0 ? '-4px' : 'auto',
                  right: i % 2 === 1 ? '-4px' : 'auto',
                }}
              >
                <div 
                  className="absolute h-1 transition-all duration-500"
                  style={{
                    width: '100%',
                    background: i % 2 === 0 ? 'rgb(147, 51, 234)' : 'rgb(59, 130, 246)',
                    top: i < 2 ? '0' : 'auto',
                    bottom: i >= 2 ? '0' : 'auto',
                    boxShadow: isActive ? (i % 2 === 0 ? '0 0 20px rgb(147, 51, 234)' : '0 0 20px rgb(59, 130, 246)') : 'none',
                  }}
                ></div>
                <div 
                  className="absolute w-1 transition-all duration-500"
                  style={{
                    height: '100%',
                    background: i % 2 === 0 ? 'rgb(147, 51, 234)' : 'rgb(59, 130, 246)',
                    left: i % 2 === 0 ? '0' : 'auto',
                    right: i % 2 === 1 ? '0' : 'auto',
                    boxShadow: isActive ? (i % 2 === 0 ? '0 0 20px rgb(147, 51, 234)' : '0 0 20px rgb(59, 130, 246)') : 'none',
                  }}
                ></div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center px-6">
            
            {/* Status Indicator */}
            <div className="flex justify-center mb-10">
              <div 
                className="flex items-center gap-3 px-6 py-2 border transition-all duration-500 backdrop-blur-md rounded-full relative overflow-hidden"
                style={{
                  borderColor: isActive ? 'rgb(147, 51, 234)' : 'rgb(88, 28, 135)',
                  backgroundColor: 'rgba(147, 51, 234, 0.1)',
                  boxShadow: isActive ? '0 0 30px rgba(147, 51, 234, 0.5)' : '0 0 10px rgba(147, 51, 234, 0.2)',
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse relative z-10"
                  style={{
                    backgroundColor: 'rgb(147, 51, 234)',
                    boxShadow: '0 0 12px rgb(147, 51, 234)',
                  }}
                ></div>
                <span 
                  className="text-xs font-mono uppercase tracking-wider transition-all duration-500 relative z-10"
                  style={{
                    color: isActive ? 'rgb(167, 139, 250)' : 'rgb(147, 51, 234)',
                  }}
                >
                  Connection Established
                </span>
              </div>
            </div>

            {/* Main Heading with Glitch */}
            <div className="relative mb-10">
              <h1 
                className="text-8xl md:text-9xl font-black mb-3 tracking-tighter transition-all duration-500 relative"
                style={{
                  color: isActive ? 'rgb(167, 139, 250)' : 'rgb(100, 116, 139)',
                  textShadow: isActive ? '0 0 30px rgba(147, 51, 234, 0.8)' : 'none',
                  letterSpacing: '-0.02em',
                  transform: glitchActive ? 'translate(2px, 2px)' : 'translate(0, 0)',
                }}
              >
                NEXUS
                {glitchActive && (
                  <>
                    <span 
                      className="absolute inset-0"
                      style={{
                        color: 'rgb(59, 130, 246)',
                        transform: 'translate(-2px, -2px)',
                        opacity: 0.7,
                      }}
                    >
                      NEXUS
                    </span>
                    <span 
                      className="absolute inset-0"
                      style={{
                        color: 'rgb(236, 72, 153)',
                        transform: 'translate(3px, 0)',
                        opacity: 0.7,
                      }}
                    >
                      NEXUS
                    </span>
                  </>
                )}
              </h1>

              <p 
                className="text-xl md:text-2xl font-bold uppercase tracking-widest transition-all duration-700"
                style={{
                  color: isActive ? 'rgb(59, 130, 246)' : 'rgb(100, 116, 139)',
                  textShadow: isActive ? '0 0 25px rgba(59, 130, 246, 0.8)' : 'none',
                }}
              >
                Enter The Digital Realm
              </p>
            </div>

            {/* Holographic Divider */}
            <div className="flex justify-center items-center gap-3 mb-10">
              <div 
                className="flex-1 h-px transition-all duration-700"
                style={{
                  background: 'linear-gradient(to right, transparent, rgb(147, 51, 234))',
                  maxWidth: '100px',
                  boxShadow: isActive ? '0 0 15px rgb(147, 51, 234)' : 'none',
                }}
              ></div>
              <div 
                className="w-2 h-2 transition-all duration-500"
                style={{
                  backgroundColor: isActive ? 'rgb(167, 139, 250)' : 'rgb(71, 85, 105)',
                  boxShadow: isActive ? '0 0 20px rgb(167, 139, 250)' : 'none',
                  transform: 'rotate(45deg)',
                }}
              ></div>
              <div 
                className="flex-1 h-px transition-all duration-700"
                style={{
                  background: 'linear-gradient(to left, transparent, rgb(59, 130, 246))',
                  maxWidth: '100px',
                  boxShadow: isActive ? '0 0 15px rgb(59, 130, 246)' : 'none',
                }}
              ></div>
            </div>

            {/* Subtitle */}
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-500 font-light"
              style={{
                color: isActive ? 'rgb(203, 213, 225)' : 'rgb(148, 163, 184)',
                textShadow: isActive ? '0 0 15px rgba(147, 51, 234, 0.3)' : 'none',
              }}
            >
              Immerse yourself in a world where reality and digital converge into pure innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-5 mb-16">
              <button 
                className="relative px-10 py-3 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 rounded-lg group"
                style={{
                  backgroundColor: 'rgba(147, 51, 234, 0.15)',
                  border: '2px solid rgb(147, 51, 234)',
                  color: 'rgb(167, 139, 250)',
                  boxShadow: isActive ? '0 0 30px rgba(147, 51, 234, 0.6)' : '0 0 15px rgba(147, 51, 234, 0.3)',
                }}
              >
                <span className="relative z-10">Access Portal</span>
                <div 
                  className="absolute inset-0 transition-transform duration-500"
                  style={{
                    background: 'linear-gradient(45deg, rgba(147, 51, 234, 0.3), rgba(59, 130, 246, 0.3))',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                ></div>
              </button>

              <button 
                className="px-10 py-3 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: 'rgba(15, 23, 42, 0.8)',
                  border: '2px solid rgb(59, 130, 246)',
                  color: 'rgb(59, 130, 246)',
                  boxShadow: isActive ? '0 0 30px rgba(59, 130, 246, 0.6)' : '0 0 15px rgba(59, 130, 246, 0.3)',
                }}
              >
                Discover
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl mx-auto">
              <div 
                className="p-7 border transition-all duration-500 backdrop-blur-sm rounded-lg overflow-hidden relative group"
                style={{
                  borderColor: isActive ? 'rgb(147, 51, 234)' : 'rgb(30, 27, 75)',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: isActive ? '0 0 30px rgba(147, 51, 234, 0.25)' : 'none',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to right, rgb(147, 51, 234), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(147, 51, 234)' : 'none',
                  }}
                ></div>
                <div className="text-4xl mb-3 relative z-10">⚛</div>
                <div className="text-lg font-bold uppercase mb-2 relative z-10" style={{ color: 'rgb(147, 51, 234)' }}>AI-Powered</div>
                <div className="text-sm relative z-10" style={{ color: 'rgb(148, 163, 184)' }}>Next-gen intelligence</div>
              </div>

              <div 
                className="p-7 border transition-all duration-500 backdrop-blur-sm rounded-lg overflow-hidden relative group"
                style={{
                  borderColor: isActive ? 'rgb(59, 130, 246)' : 'rgb(30, 27, 75)',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: isActive ? '0 0 30px rgba(59, 130, 246, 0.25)' : 'none',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to right, rgb(59, 130, 246), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(59, 130, 246)' : 'none',
                  }}
                ></div>
                <div className="text-4xl mb-3 relative z-10">🌐</div>
                <div className="text-lg font-bold uppercase mb-2 relative z-10" style={{ color: 'rgb(59, 130, 246)' }}>Connected</div>
                <div className="text-sm relative z-10" style={{ color: 'rgb(148, 163, 184)' }}>Global network access</div>
              </div>

              <div 
                className="p-7 border transition-all duration-500 backdrop-blur-sm rounded-lg overflow-hidden relative group"
                style={{
                  borderColor: isActive ? 'rgb(236, 72, 153)' : 'rgb(30, 27, 75)',
                  backgroundColor: 'rgba(15, 23, 42, 0.7)',
                  boxShadow: isActive ? '0 0 30px rgba(236, 72, 153, 0.25)' : 'none',
                }}
              >
                <div 
                  className="absolute top-0 left-0 right-0 h-1 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to right, rgb(236, 72, 153), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(236, 72, 153)' : 'none',
                  }}
                ></div>
                <div className="text-4xl mb-3 relative z-10">◈</div>
                <div className="text-lg font-bold uppercase mb-2 relative z-10" style={{ color: 'rgb(236, 72, 153)' }}>Immersive</div>
                <div className="text-sm relative z-10" style={{ color: 'rgb(148, 163, 184)' }}>Holographic experience</div>
              </div>
            </div>

          </div>

          {/* Mouse Follower Effect */}
          {isActive && (
            <div
              className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl opacity-15"
              style={{
                background: 'radial-gradient(circle, rgb(147, 51, 234), rgb(59, 130, 246), transparent)',
                left: mousePos.x - 192 + 'px',
                top: mousePos.y - 192 + 'px',
                transition: 'all 0.15s ease-out',
              }}
            ></div>
          )}

        </div>
      </div>
    </div>
  );
}

    
  `
  },
   {
    name: "NeonUINEXHeader",
    category: "Header",
    code: `

function NeonUINEXHeader() {
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-gradient-to-br from-black via-slate-900 to-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      {/* Neon Grid Lines */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 0, 128, 0.4) 2px, transparent 2px), linear-gradient(90deg, rgba(0, 255, 255, 0.4) 2px, transparent 2px)',
            backgroundSize: '80px 80px',
          }}
        ></div>
      </div>

      {/* Floating Neon Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-3 h-3 rounded-full animate-pulse top-[15%] left-[20%]"
          style={{
            backgroundColor: 'rgb(255, 0, 128)',
            boxShadow: '0 0 20px rgb(255, 0, 128)',
          }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full animate-pulse top-[30%] right-[25%]"
          style={{
            backgroundColor: 'rgb(0, 255, 255)',
            boxShadow: '0 0 15px rgb(0, 255, 255)',
          }}
        ></div>
        <div
          className="absolute w-3 h-3 rounded-full animate-pulse bottom-[25%] left-[30%]"
          style={{
            backgroundColor: 'rgb(255, 0, 128)',
            boxShadow: '0 0 20px rgb(255, 0, 128)',
          }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full animate-pulse bottom-[40%] right-[35%]"
          style={{
            backgroundColor: 'rgb(0, 255, 255)',
            boxShadow: '0 0 15px rgb(0, 255, 255)',
          }}
        ></div>
        <div
          className="absolute w-3 h-3 rounded-full animate-pulse top-[50%] left-[10%]"
          style={{
            backgroundColor: 'rgb(255, 0, 255)',
            boxShadow: '0 0 20px rgb(255, 0, 255)',
          }}
        ></div>
        <div
          className="absolute w-2 h-2 rounded-full animate-pulse top-[70%] right-[15%]"
          style={{
            backgroundColor: 'rgb(0, 255, 255)',
            boxShadow: '0 0 15px rgb(0, 255, 255)',
          }}
        ></div>
      </div>

      {/* Glowing Background Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full blur-3xl opacity-30 top-[10%] left-[5%] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 128, 0.5), transparent)',
          }}
        ></div>
        <div
          className="absolute w-80 h-80 rounded-full blur-3xl opacity-30 bottom-[15%] right-[10%] animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.5), transparent)',
          }}
        ></div>
      </div>

      <div className="w-full max-w-6xl relative z-10">
        
        <div className="relative py-16">

          {/* Neon Frame Border */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Top Left Corner */}
            <div className="absolute top-0 left-0 w-24 h-24">
              <div 
                className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to right, rgb(255, 0, 128), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 128)' : '0 0 10px rgb(255, 0, 128)',
                }}
              ></div>
              <div 
                className="absolute top-0 left-0 h-full w-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to bottom, rgb(255, 0, 128), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 128)' : '0 0 10px rgb(255, 0, 128)',
                }}
              ></div>
            </div>

            {/* Top Right Corner */}
            <div className="absolute top-0 right-0 w-24 h-24">
              <div 
                className="absolute top-0 right-0 w-full h-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to left, rgb(0, 255, 255), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : '0 0 10px rgb(0, 255, 255)',
                }}
              ></div>
              <div 
                className="absolute top-0 right-0 h-full w-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to bottom, rgb(0, 255, 255), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : '0 0 10px rgb(0, 255, 255)',
                }}
              ></div>
            </div>

            {/* Bottom Left Corner */}
            <div className="absolute bottom-0 left-0 w-24 h-24">
              <div 
                className="absolute bottom-0 left-0 w-full h-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to right, rgb(255, 0, 128), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 128)' : '0 0 10px rgb(255, 0, 128)',
                }}
              ></div>
              <div 
                className="absolute bottom-0 left-0 h-full w-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to top, rgb(255, 0, 128), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 128)' : '0 0 10px rgb(255, 0, 128)',
                }}
              ></div>
            </div>

            {/* Bottom Right Corner */}
            <div className="absolute bottom-0 right-0 w-24 h-24">
              <div 
                className="absolute bottom-0 right-0 w-full h-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to left, rgb(0, 255, 255), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : '0 0 10px rgb(0, 255, 255)',
                }}
              ></div>
              <div 
                className="absolute bottom-0 right-0 h-full w-1 transition-all duration-500"
                style={{
                  background: 'linear-gradient(to top, rgb(0, 255, 255), transparent)',
                  boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : '0 0 10px rgb(0, 255, 255)',
                }}
              ></div>
            </div>

            {/* Side Accent Lines */}
            <div className="absolute left-0 top-1/2 w-1 h-32 -translate-y-1/2">
              <div 
                className="w-full h-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgb(255, 0, 128), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(255, 0, 128)' : '0 0 12px rgb(255, 0, 128)',
                }}
              ></div>
            </div>

            <div className="absolute right-0 top-1/2 w-1 h-32 -translate-y-1/2">
              <div 
                className="w-full h-full transition-all duration-500"
                style={{
                  background: 'linear-gradient(to bottom, transparent, rgb(0, 255, 255), transparent)',
                  boxShadow: isActive ? '0 0 25px rgb(0, 255, 255)' : '0 0 12px rgb(0, 255, 255)',
                }}
              ></div>
            </div>
          </div>

          {/* Main Content */}
          <div className="text-center px-6">
            
            {/* Status Badge */}
            <div className="flex justify-center mb-10">
              <div 
                className="flex items-center gap-3 px-8 py-2 border-2 transition-all duration-500 backdrop-blur-md rounded-full"
                style={{
                  borderColor: isActive ? 'rgb(255, 0, 128)' : 'rgb(100, 0, 50)',
                  backgroundColor: 'rgba(255, 0, 128, 0.1)',
                  boxShadow: isActive ? '0 0 30px rgba(255, 0, 128, 0.6)' : '0 0 15px rgba(255, 0, 128, 0.3)',
                }}
              >
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'rgb(255, 0, 128)',
                    boxShadow: '0 0 15px rgb(255, 0, 128)',
                  }}
                ></div>
                <span 
                  className="text-xs font-mono uppercase tracking-widest transition-all duration-500"
                  style={{
                    color: isActive ? 'rgb(255, 100, 180)' : 'rgb(200, 50, 125)',
                  }}
                >
                  Online Status
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="relative mb-10">
              <h1 
                className="text-8xl md:text-9xl font-black mb-4 tracking-tighter transition-all duration-500"
                style={{
                  color: isActive ? 'rgb(255, 0, 128)' : 'rgb(100, 116, 139)',
                  textShadow: isActive ? '0 0 40px rgba(255, 0, 128, 0.9), 0 0 80px rgba(255, 0, 128, 0.5)' : 'none',
                  letterSpacing: '-0.03em',
                }}
              >
                UINEX
              </h1>

              <p 
                className="text-xl md:text-2xl font-bold uppercase tracking-widest transition-all duration-700"
                style={{
                  color: isActive ? 'rgb(0, 255, 255)' : 'rgb(100, 116, 139)',
                  textShadow: isActive ? '0 0 30px rgba(0, 255, 255, 0.8)' : 'none',
                }}
              >
                Future is Now
              </p>
            </div>

            {/* Neon Divider */}
            <div className="flex justify-center items-center gap-4 mb-10">
              <div 
                className="flex-1 h-px transition-all duration-700"
                style={{
                  background: 'linear-gradient(to right, transparent, rgb(255, 0, 128))',
                  maxWidth: '120px',
                  boxShadow: isActive ? '0 0 15px rgb(255, 0, 128)' : 'none',
                }}
              ></div>
              <div className="flex gap-2">
                <div 
                  className="w-2 h-2 rounded-sm transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? 'rgb(255, 0, 128)' : 'rgb(71, 85, 105)',
                    boxShadow: isActive ? '0 0 15px rgb(255, 0, 128)' : 'none',
                  }}
                ></div>
                <div 
                  className="w-2 h-2 rounded-sm transition-all duration-500"
                  style={{
                    backgroundColor: isActive ? 'rgb(0, 255, 255)' : 'rgb(71, 85, 105)',
                    boxShadow: isActive ? '0 0 15px rgb(0, 255, 255)' : 'none',
                  }}
                ></div>
              </div>
              <div 
                className="flex-1 h-px transition-all duration-700"
                style={{
                  background: 'linear-gradient(to left, transparent, rgb(0, 255, 255))',
                  maxWidth: '120px',
                  boxShadow: isActive ? '0 0 15px rgb(0, 255, 255)' : 'none',
                }}
              ></div>
            </div>

            {/* Description */}
            <p 
              className="text-lg md:text-xl max-w-2xl mx-auto mb-14 leading-relaxed transition-all duration-500"
              style={{
                color: isActive ? 'rgb(226, 232, 240)' : 'rgb(148, 163, 184)',
                textShadow: isActive ? '0 0 10px rgba(255, 0, 128, 0.2)' : 'none',
              }}
            >
              Step into the neon-lit world of tomorrow where technology meets imagination in spectacular fusion.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button 
                className="relative px-12 py-4 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: 'rgba(255, 0, 128, 0.1)',
                  border: '2px solid rgb(255, 0, 128)',
                  color: 'rgb(255, 100, 180)',
                  boxShadow: isActive ? '0 0 35px rgba(255, 0, 128, 0.7)' : '0 0 15px rgba(255, 0, 128, 0.4)',
                }}
              >
                <span className="relative z-10">Enter Portal</span>
                <div 
                  className="absolute inset-0 transition-transform duration-500"
                  style={{
                    backgroundColor: 'rgba(255, 0, 128, 0.2)',
                    transform: isActive ? 'scaleX(1)' : 'scaleX(0)',
                    transformOrigin: 'left',
                  }}
                ></div>
              </button>

              <button 
                className="px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300 rounded-lg"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '2px solid rgb(0, 255, 255)',
                  color: 'rgb(0, 255, 255)',
                  boxShadow: isActive ? '0 0 35px rgba(0, 255, 255, 0.7)' : '0 0 15px rgba(0, 255, 255, 0.4)',
                }}
              >
                Explore
              </button>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              
              {/* Card 1 */}
              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-sm rounded-lg relative overflow-hidden"
                style={{
                  borderColor: isActive ? 'rgb(255, 0, 128)' : 'rgb(30, 41, 59)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  boxShadow: isActive ? '0 0 30px rgba(255, 0, 128, 0.3)' : 'none',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to right, rgb(255, 0, 128), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(255, 0, 128)' : 'none',
                  }}
                ></div>
                <div 
                  className="absolute top-0 right-0 w-1 h-full transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to bottom, rgb(255, 0, 128), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(255, 0, 128)' : 'none',
                  }}
                ></div>
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-xl font-bold uppercase mb-2" style={{ color: 'rgb(255, 0, 128)' }}>High Speed</div>
                <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>Instant response time</div>
              </div>

              {/* Card 2 */}
              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-sm rounded-lg relative overflow-hidden"
                style={{
                  borderColor: isActive ? 'rgb(0, 255, 255)' : 'rgb(30, 41, 59)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  boxShadow: isActive ? '0 0 30px rgba(0, 255, 255, 0.3)' : 'none',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to right, rgb(0, 255, 255), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : 'none',
                  }}
                ></div>
                <div 
                  className="absolute top-0 right-0 w-1 h-full transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to bottom, rgb(0, 255, 255), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : 'none',
                  }}
                ></div>
                <div className="text-5xl mb-4">🛡</div>
                <div className="text-xl font-bold uppercase mb-2" style={{ color: 'rgb(0, 255, 255)' }}>Protected</div>
                <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>Military-grade security</div>
              </div>

              {/* Card 3 */}
              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-sm rounded-lg relative overflow-hidden"
                style={{
                  borderColor: isActive ? 'rgb(255, 0, 255)' : 'rgb(30, 41, 59)',
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  boxShadow: isActive ? '0 0 30px rgba(255, 0, 255, 0.3)' : 'none',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to right, rgb(255, 0, 255), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(255, 0, 255)' : 'none',
                  }}
                ></div>
                <div 
                  className="absolute top-0 right-0 w-1 h-full transition-all duration-500"
                  style={{ 
                    background: 'linear-gradient(to bottom, rgb(255, 0, 255), transparent)',
                    boxShadow: isActive ? '0 0 20px rgb(255, 0, 255)' : 'none',
                  }}
                ></div>
                <div className="text-5xl mb-4">♾</div>
                <div className="text-xl font-bold uppercase mb-2" style={{ color: 'rgb(255, 0, 255)' }}>Unlimited</div>
                <div className="text-sm" style={{ color: 'rgb(148, 163, 184)' }}>Infinite possibilities</div>
              </div>

            </div>

          </div>

          {/* Mouse Glow Effect */}
          {isActive && (
            <div
              className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgb(255, 0, 128), transparent)',
                left: mousePos.x - 192 + 'px',
                top: mousePos.y - 192 + 'px',
                transition: 'all 0.2s ease-out',
              }}
            ></div>
          )}

        </div>
      </div>
    </div>
  );
}

    
  `
  },
   {
    name: "DiamondCard",
    category: "Cards",
    code: `
function DiamondCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const DiamondIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  );

  const StarIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0a0e27 0%, #1a0b2e 50%, #2d1b4e 100%)', 
      padding: '48px 16px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center' 
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '2px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #a78bfa, #c4b5fd, #e0e7ff)' 
            : 'linear-gradient(135deg, #7c3aed, #8b5cf6, #a78bfa)',
          borderRadius: '24px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 70px rgba(139, 92, 246, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)' 
            : '0 10px 40px rgba(139, 92, 246, 0.2)',
          cursor: 'pointer',
          maxWidth: '420px',
          width: '100%'
        }}
      >
        <div style={{ 
          padding: '28px', 
          background: 'linear-gradient(135deg, #0a0e27, #1a0b2e)',
          borderRadius: '22px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative glow */}
          <div style={{
            position: 'absolute',
            top: '-50%',
            right: '-50%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 1 : 0.5
          }}></div>

          {/* Diamond Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#0a0e27',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px'
          }}>
            <StarIcon />
            DIAMOND
          </div>

          {/* Icon */}
          <div style={{ 
            width: '56px', 
            height: '56px', 
            background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '16px',
            color: '#0a0e27',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.4)',
            transition: 'all 0.3s',
            transform: isHovered ? 'rotate(-10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}>
            <DiamondIcon />
          </div>

          <h3 style={{ 
            fontSize: '1.6rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #8b5cf6, #c4b5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px',
            letterSpacing: '0.5px'
          }}>
            Diamond Tier
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Experience ultimate luxury with our most prestigious membership level
          </p>
          
          {/* Content Box */}
          <div style={{ 
            marginBottom: '20px',
            padding: '20px',
            background: 'rgba(139, 92, 246, 0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            transition: 'all 0.3s',
            boxShadow: isHovered ? '0 0 30px rgba(139, 92, 246, 0.1)' : 'none'
          }}>
            <div style={{
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(139, 92, 246, 0.2)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#a78bfa',
                fontWeight: 'bold',
                letterSpacing: '1px',
                marginBottom: '8px'
              }}>
                LIFETIME ACCESS
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px'
              }}>
                <span style={{
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  color: '#8b5cf6',
                  lineHeight: '1'
                }}>$2,999</span>
                <span style={{
                  fontSize: '1.2rem',
                  color: '#64748b',
                  textDecoration: 'line-through'
                }}>$4,999</span>
              </div>
              <div style={{
                fontSize: '0.8rem',
                color: '#a78bfa',
                marginTop: '6px'
              }}>
                One-time payment • No recurring fees
              </div>
            </div>

            {/* Features List */}
            <div style={{ marginTop: '16px' }}>
              {[
                'Unlimited Premium Access',
                'White Glove Concierge',
                'Private Community Network',
                'Quarterly Strategy Sessions',
                'Lifetime Updates & Features',
                'Personal Brand Partnership'
              ].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '10px' 
                }}>
                  <div style={{ 
                    color: '#8b5cf6',
                    display: 'flex',
                    alignItems: 'center',
                    width: '20px',
                    height: '20px',
                    background: 'rgba(139, 92, 246, 0.15)',
                    borderRadius: '50%',
                    justifyContent: 'center'
                  }}>
                    <CheckIcon />
                  </div>
                  <span style={{ color: '#cbd5e1', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button 
            style={{ 
              padding: '12px 28px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #8b5cf6, #a78bfa)' 
                : 'linear-gradient(135deg, #7c3aed, #8b5cf6)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1rem',
              boxShadow: '0 8px 20px rgba(139, 92, 246, 0.3)',
              width: '100%',
              letterSpacing: '0.5px'
            }}
          >
            Unlock Diamond Access
          </button>

          <div style={{
            marginTop: '12px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            Exclusive offer • Only 25 lifetime spots available
          </div>

          {/* Stats */}
          <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '20px',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#8b5cf6',
                marginBottom: '4px'
              }}>
                250+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>VIP Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#8b5cf6',
                marginBottom: '4px'
              }}>
                $5M+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>ROI Generated</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#8b5cf6',
                marginBottom: '4px'
              }}>
                100%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    
  `
  },
 
   {
    name: "CompactStylishCard",
    category: "Cards",
    code: `
function CompactStylishCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // SVG Icons
  const CrownIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3 7 7 1-5 5 1 7-6-4-6 4 1-7-5-5 7-1z" />
    </svg>
  );

  const ArrowIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <line x1="5" y1="12" x2="19" y2="12" />
      <polyline points="12 5 19 12 12 19" />
    </svg>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #0f172a 100%)', 
      padding: '48px 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '380px',
          padding: '2px',
          background: isHovered 
            ? 'linear-gradient(135deg, #f59e0b, #ef4444, #ec4899)' 
            : 'linear-gradient(135deg, #d97706, #dc2626, #db2777)',
          borderRadius: '24px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 60px rgba(245, 158, 11, 0.4), 0 0 50px rgba(236, 72, 153, 0.3)' 
            : '0 12px 35px rgba(217, 119, 6, 0.3)',
          cursor: 'pointer'
        }}
      >
        {/* Inner Card */}
        <div style={{
          padding: '28px 24px',
          background: 'linear-gradient(135deg, #1e293b, #0f172a)',
          borderRadius: '22px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          
          {/* Decorative Glow */}
          <div style={{
            position: 'absolute',
            top: '-80px',
            right: '-80px',
            width: '180px',
            height: '180px',
            background: 'radial-gradient(circle, rgba(245, 158, 11, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 1 : 0.4
          }}></div>

          {/* Top Section - Icon & Badge */}
          <div style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ 
              width: '56px', 
              height: '56px', 
              background: 'linear-gradient(135deg, #f59e0b, #ef4444)', 
              borderRadius: '14px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              color: 'white',
              boxShadow: '0 8px 24px rgba(245, 158, 11, 0.4)',
              transition: 'all 0.3s',
              transform: isHovered ? 'rotate(8deg) scale(1.05)' : 'rotate(0deg) scale(1)'
            }}>
              <CrownIcon />
            </div>

            <div style={{
              padding: '6px 14px',
              background: 'rgba(245, 158, 11, 0.15)',
              borderRadius: '10px',
              color: '#fbbf24',
              fontSize: '0.7rem',
              fontWeight: '700',
              letterSpacing: '0.5px'
            }}>
              ELITE
            </div>
          </div>

          {/* Title & Price */}
          <div style={{ marginBottom: '16px', position: 'relative', zIndex: 1 }}>
            <h3 style={{ 
              fontSize: '1.6rem', 
              fontWeight: 'bold', 
              color: 'white',
              marginBottom: '8px',
              letterSpacing: '-0.3px'
            }}>
              Elite Plan
            </h3>
            
            <div style={{ 
              fontSize: '2.5rem', 
              fontWeight: 'bold', 
              color: 'white',
              marginBottom: '4px'
            }}>
              $79
              <span style={{ fontSize: '1rem', color: '#64748b', fontWeight: 'normal' }}>/mo</span>
            </div>

            <p style={{ 
              fontSize: '0.85rem', 
              color: '#94a3b8',
              lineHeight: '1.5'
            }}>
              Premium features for power users
            </p>
          </div>

          {/* Quick Stats */}
          <div style={{ 
            display: 'flex', 
            gap: '16px',
            marginBottom: '20px',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              flex: 1,
              padding: '12px',
              background: 'rgba(245, 158, 11, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(245, 158, 11, 0.15)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#f59e0b', marginBottom: '2px' }}>
                100GB
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Storage</div>
            </div>

            <div style={{
              flex: 1,
              padding: '12px',
              background: 'rgba(239, 68, 68, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(239, 68, 68, 0.15)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ef4444', marginBottom: '2px' }}>
                ∞
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Projects</div>
            </div>

            <div style={{
              flex: 1,
              padding: '12px',
              background: 'rgba(236, 72, 153, 0.08)',
              borderRadius: '12px',
              border: '1px solid rgba(236, 72, 153, 0.15)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '1.3rem', fontWeight: 'bold', color: '#ec4899', marginBottom: '2px' }}>
                24/7
              </div>
              <div style={{ fontSize: '0.7rem', color: '#64748b' }}>Support</div>
            </div>
          </div>

          {/* Button */}
          <button 
            style={{
              width: '100%',
              padding: '14px',
              background: isHovered 
                ? 'linear-gradient(135deg, #f59e0b, #ef4444)' 
                : 'linear-gradient(135deg, #d97706, #dc2626)',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              fontWeight: 'bold',
              fontSize: '0.95rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px',
              transition: 'all 0.3s',
              boxShadow: isHovered 
                ? '0 8px 24px rgba(245, 158, 11, 0.4)' 
                : '0 4px 12px rgba(217, 119, 6, 0.3)',
              position: 'relative',
              zIndex: 1,
              letterSpacing: '0.3px'
            }}
          >
            Upgrade Now
            <ArrowIcon />
          </button>

          {/* Trust Line */}
          <div style={{
            marginTop: '16px',
            textAlign: 'center',
            color: '#64748b',
            fontSize: '0.75rem',
            position: 'relative',
            zIndex: 1
          }}>
            ✓ Cancel anytime • Secure payment
          </div>
        </div>
      </div>
    </div>
  );
}
    
  `
  },
  {
    name: "PlatinumLuxuryCard",
    category: "Cards",
    code: `
   function PlatinumLuxuryCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVGs
  const InfinityIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.6 6.62c-1.44 0-2.8.56-3.77 1.53L12 10.66 10.48 12h.01L7.8 14.39c-.64.64-1.49.99-2.4.99-1.87 0-3.39-1.51-3.39-3.38S3.53 8.62 5.4 8.62c.91 0 1.76.35 2.44 1.03l1.13 1 1.51-1.34L9.22 8.2C8.2 7.18 6.84 6.62 5.4 6.62 2.42 6.62 0 9.04 0 12s2.42 5.38 5.4 5.38c1.44 0 2.8-.56 3.77-1.53l2.83-2.5.01-.01L13.52 12l2.69-2.39c.64-.64 1.49-.99 2.4-.99 1.87 0 3.39 1.51 3.39 3.38s-1.52 3.38-3.39 3.38c-.9 0-1.76-.35-2.44-1.03l-1.14-1.01-1.51 1.34 1.27 1.12c1.02 1.01 2.37 1.57 3.82 1.57 2.98 0 5.4-2.41 5.4-5.38s-2.42-5.38-5.4-5.38z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );

  const SparkleIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2.5 7.5L22 10l-7.5 2.5L12 20l-2.5-7.5L2 10l7.5-2.5L12 0z"/>
    </svg>
  );

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: 'linear-gradient(135deg, #0c0a1d 0%, #1a1332 50%, #2d1b4e 100%)', 
      padding: '48px 16px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '3px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6, #06b6d4)' 
            : 'linear-gradient(135deg, #8b5cf6, #6366f1, #3b82f6)',
          borderRadius: '28px',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 30px 80px rgba(139, 92, 246, 0.6), 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 40px rgba(139, 92, 246, 0.1)' 
            : '0 20px 50px rgba(139, 92, 246, 0.3)',
          cursor: 'pointer',
          maxWidth: '440px',
          width: '100%',
          position: 'relative'
        }}
      >
        {/* Animated border glow */}
        <div style={{
          position: 'absolute',
          top: '-4px',
          left: '-4px',
          right: '-4px',
          bottom: '-4px',
          background: 'linear-gradient(135deg, #ec4899, #a855f7, #3b82f6, #06b6d4)',
          borderRadius: '28px',
          opacity: isHovered ? 0.6 : 0,
          filter: 'blur(20px)',
          transition: 'opacity 0.5s',
          zIndex: -1
        }}></div>

        <div style={{ 
          padding: '32px', 
          background: 'linear-gradient(135deg, #0c0a1d, #1a1332, #16082f)',
          borderRadius: '26px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Animated background patterns */}
          <div style={{
            position: 'absolute',
            top: '-100px',
            right: '-100px',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.6s',
            transform: isHovered ? 'scale(1.3)' : 'scale(1)',
            opacity: isHovered ? 1 : 0.6
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: '-80px',
            left: '-80px',
            width: '250px',
            height: '250px',
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.6s',
            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
          }}></div>

          {/* Premium Badge */}
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            padding: '10px 20px',
            background: 'linear-gradient(135deg, #a855f7, #ec4899)',
            borderRadius: '24px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#ffffff',
            letterSpacing: '1.5px',
            boxShadow: '0 8px 16px rgba(168, 85, 247, 0.5)',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            animation: isHovered ? 'pulse 2s infinite' : 'none'
          }}>
            <SparkleIcon />
            PLATINUM
            <SparkleIcon />
          </div>

          {/* Icon Container */}
          <div style={{ 
            width: '70px', 
            height: '70px', 
            background: 'linear-gradient(135deg, #8b5cf6, #6366f1)', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '20px',
            color: '#ffffff',
            boxShadow: '0 12px 30px rgba(139, 92, 246, 0.5), inset 0 2px 8px rgba(255, 255, 255, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'rotate(360deg) scale(1.15)' : 'rotate(0deg) scale(1)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            {/* Icon shine effect */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-50%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(45deg, transparent, rgba(255,255,255,0.3), transparent)',
              transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)',
              transition: 'transform 0.6s'
            }}></div>
            <InfinityIcon />
          </div>

          {/* Title */}
          <h2 style={{ 
            fontSize: '2rem', 
            fontWeight: '800', 
            background: 'linear-gradient(135deg, #a855f7, #ec4899, #06b6d4)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundSize: '200% 200%',
            marginBottom: '12px',
            letterSpacing: '0.5px',
            lineHeight: '1.2'
          }}>
            Platinum Infinity
          </h2>
          
          <p style={{ 
            fontSize: '1rem', 
            color: '#a1a1aa',
            marginBottom: '24px',
            lineHeight: '1.7',
            fontWeight: '400'
          }}>
            Unlimited power meets unparalleled luxury in our most exclusive membership tier
          </p>
          
          {/* Pricing Box */}
          <div style={{ 
            marginBottom: '24px',
            padding: '24px',
            background: 'rgba(139, 92, 246, 0.1)',
            borderRadius: '20px',
            border: '1px solid rgba(139, 92, 246, 0.3)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s',
            boxShadow: isHovered ? '0 0 40px rgba(139, 92, 246, 0.2)' : 'none'
          }}>
            <div style={{
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid rgba(139, 92, 246, 0.3)'
            }}>
              <div style={{
                fontSize: '0.8rem',
                color: '#c084fc',
                fontWeight: 'bold',
                letterSpacing: '1.5px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <SparkleIcon />
                ANNUAL ELITE ACCESS
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '12px',
                marginBottom: '8px'
              }}>
                <span style={{
                  fontSize: '3rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1',
                  letterSpacing: '-1px'
                }}>$1,999</span>
                <span style={{
                  fontSize: '1.4rem',
                  color: '#52525b',
                  textDecoration: 'line-through',
                  fontWeight: '600'
                }}>$3,499</span>
              </div>
              <div style={{
                display: 'inline-block',
                padding: '6px 14px',
                background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                borderRadius: '8px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                color: '#ffffff',
                letterSpacing: '0.5px'
              }}>
                SAVE 43% TODAY
              </div>
            </div>

            {/* Premium Features */}
            <div style={{ marginTop: '20px' }}>
              {[
                'Unlimited Premium Features',
                'White-Glove Concierge Service',
                'Exclusive VIP Events & Networking',
                'Priority 24/7 Platinum Support',
                'Advanced Analytics Dashboard',
                'Custom API & Integrations',
                'Personal Success Strategist',
                'Lifetime Updates & New Features'
              ].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px', 
                  marginBottom: '12px',
                  transition: 'all 0.3s',
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                }}>
                  <div style={{ 
                    color: '#a855f7',
                    display: 'flex',
                    alignItems: 'center',
                    width: '24px',
                    height: '24px',
                    background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.2), rgba(236, 72, 153, 0.2))',
                    borderRadius: '50%',
                    justifyContent: 'center',
                    flexShrink: 0,
                    border: '1.5px solid rgba(168, 85, 247, 0.4)'
                  }}>
                    <CheckIcon />
                  </div>
                  <span style={{ 
                    color: '#e4e4e7', 
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <button 
            style={{ 
              padding: '16px 32px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #a855f7, #ec4899, #8b5cf6)' 
                : 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '16px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1.1rem',
              boxShadow: '0 12px 28px rgba(139, 92, 246, 0.4)',
              width: '100%',
              letterSpacing: '0.5px',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>
              Unlock Platinum Access
            </span>
            <div style={{
              position: 'absolute',
              top: 0,
              left: '-100%',
              width: '100%',
              height: '100%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transition: 'left 0.5s',
              left: isHovered ? '100%' : '-100%'
            }}></div>
          </button>

          <div style={{
            marginTop: '14px',
            textAlign: 'center',
            fontSize: '0.85rem',
            color: '#71717a',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px'
          }}>
            <SparkleIcon />
            Only 8 exclusive spots remaining this month
            <SparkleIcon />
          </div>

          {/* Premium Stats */}
          <div style={{ 
            marginTop: '28px', 
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '16px',
            paddingTop: '24px',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '6px'
              }}>
                2K+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: '500' }}>Elite Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '6px'
              }}>
                $50M+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: '500' }}>Value Created</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.8rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #a855f7, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '6px'
              }}>
                99%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: '500' }}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
    
  `
  },
  {
    name: "StylishHeader",
    category: "Header",
    code: `
function StylishHeader() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      
      {/* Gradient Orbs Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-400 rounded-full opacity-50 animate-ping"></div>
        <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-60 animate-pulse"></div>
        <div className="absolute top-2/3 right-1/3 w-1 h-1 bg-purple-400 rounded-full opacity-50 animate-bounce"></div>
        <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full opacity-60 animate-ping"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        
        {/* Top Navigation */}
        <div className="absolute top-8 left-0 right-0 flex justify-between items-center px-8 max-w-7xl mx-auto">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg shadow-purple-500/50">
              <span className="text-white font-black text-xl">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">Stylish</span>
          </div>
          
          <nav className="hidden md:flex gap-8 text-white/70 font-medium">
            <a href="#" className="hover:text-white transition-colors duration-300">Product</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Features</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Pricing</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </nav>

          <button className="px-6 py-2 bg-white/10 backdrop-blur-xl border border-white/20 text-white rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg">
            Sign In
          </button>
        </div>

        {/* Hero Section */}
        <div className="text-center max-w-6xl mx-auto mt-12">
          
          {/* Floating Badge */}
          <div className="inline-flex items-center gap-3 px-6 py-2 mb-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-full shadow-2xl">
            <div className="flex items-center gap-2">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <div className="relative w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-emerald-400 text-sm font-semibold">Now Live</span>
            </div>
            <div className="w-px h-4 bg-white/20"></div>
            <span className="text-white/70 text-sm">Version 2.0 is here</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block mb-2 bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Create Without
            </span>
            <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Limits
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            The most powerful creative platform designed for the next generation of makers, dreamers, and innovators
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-20">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-2xl overflow-hidden shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Start Building
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/20 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/40 transition-all duration-300 shadow-xl hover:scale-105">
              <span className="flex items-center gap-2">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                Watch Demo
              </span>
            </button>
          </div>

          {/* Feature Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            
            {/* Large Feature Card */}
            <div 
              className="md:col-span-2 group relative p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className="p-4 bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 rounded-2xl backdrop-blur-xl shadow-lg">
                    <span className="text-4xl">✨</span>
                  </div>
                  <div className="text-xs text-white/40 font-mono uppercase tracking-wider">Featured</div>
                </div>
                
                <h3 className="text-3xl font-bold text-white mb-3">
                  AI-Powered Design
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed">
                  Generate stunning designs in seconds with our advanced AI engine that understands your creative vision
                </p>

                <div className="flex gap-2 flex-wrap">
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">Smart</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">Fast</span>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-white/70">Intuitive</span>
                </div>
              </div>

              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-500/20 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>

            {/* Tall Feature Card */}
            <div 
              className="md:row-span-2 group relative p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-pink-500/20"
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-pink-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 h-full flex flex-col">
                <div className="p-4 bg-gradient-to-br from-pink-500/20 to-blue-500/20 border border-pink-500/30 rounded-2xl backdrop-blur-xl w-fit mb-6 shadow-lg">
                  <span className="text-4xl">🚀</span>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3">
                  Lightning Performance
                </h3>
                <p className="text-white/60 mb-6 leading-relaxed flex-grow">
                  Experience blazing-fast rendering and real-time collaboration that keeps pace with your creativity
                </p>

                <div className="grid grid-cols-2 gap-3 mt-auto">
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <div className="text-2xl font-bold text-white mb-1">99.9%</div>
                    <div className="text-xs text-white/50">Uptime</div>
                  </div>
                  <div className="p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-colors duration-300">
                    <div className="text-2xl font-bold text-white mb-1">&lt;10ms</div>
                    <div className="text-xs text-white/50">Latency</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Wide Feature Card */}
            <div 
              className="md:col-span-2 group relative p-8 bg-white/5 backdrop-blur-2xl border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10 flex items-center justify-between">
                <div className="flex-1">
                  <div className="p-4 bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl backdrop-blur-xl w-fit mb-6 shadow-lg">
                    <span className="text-4xl">🎨</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-white mb-3">
                    Infinite Possibilities
                  </h3>
                  <p className="text-white/60 leading-relaxed max-w-md">
                    Access unlimited templates, assets, and tools to bring any creative vision to life
                  </p>
                </div>

                <div className="hidden lg:flex flex-col gap-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-xl backdrop-blur-xl hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-xl backdrop-blur-xl hover:scale-110 transition-transform duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-white/5 to-white/10 border border-white/20 rounded-xl backdrop-blur-xl hover:scale-110 transition-transform duration-300"></div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Proof */}
          <div className="mt-20 flex flex-wrap justify-center items-center gap-8 text-white/40">
            <span className="text-sm">Trusted by creative teams at</span>
            <span className="text-white/60 font-semibold hover:text-white transition-colors duration-300 cursor-pointer">Adobe</span>
            <span className="text-white/60 font-semibold hover:text-white transition-colors duration-300 cursor-pointer">Figma</span>
            <span className="text-white/60 font-semibold hover:text-white transition-colors duration-300 cursor-pointer">Notion</span>
            <span className="text-white/60 font-semibold hover:text-white transition-colors duration-300 cursor-pointer">Stripe</span>
          </div>

        </div>

      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-gradient-to-t from-purple-600/20 via-transparent to-transparent blur-3xl pointer-events-none"></div>
    </div>
  );
}

    
  `
  },
  {
    name: "ModernPremiumHeader",
    category: "Header",
    code: `
function ModernPremiumHeader() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute top-40 -left-40 w-80 h-80 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 left-1/2 w-80 h-80 bg-gradient-to-br from-pink-500 to-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 border-2 border-cyan-500/20 rounded-lg rotate-12 animate-spin-slow"></div>
        <div className="absolute top-40 right-20 w-16 h-16 border-2 border-indigo-500/20 rounded-full animate-bounce"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-pink-500/20 rotate-45 animate-pulse"></div>
        <div className="absolute bottom-20 right-40 w-24 h-24 border-2 border-orange-500/20 rounded-full animate-spin-slow"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-20 px-8 py-6 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl shadow-xl shadow-cyan-500/50 flex items-center justify-center">
              <span className="text-white font-black text-2xl">M</span>
              <div className="absolute -inset-1 bg-gradient-to-br from-cyan-500 to-indigo-600 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-300"></div>
            </div>
            <div>
              <div className="text-white font-bold text-xl">Modern</div>
              <div className="text-cyan-400 text-xs font-semibold">PREMIUM</div>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-medium">Features</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-medium">Solutions</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-medium">Pricing</a>
            <a href="#" className="text-white/70 hover:text-white transition-colors duration-300 font-medium">Resources</a>
          </div>

          <div className="flex items-center gap-3">
            <button className="px-5 py-2 text-white/80 hover:text-white transition-colors duration-300 font-semibold">
              Login
            </button>
            <button className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative z-10 px-8 py-20 max-w-7xl mx-auto">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          
          {/* Left Column - Text */}
          <div className="space-y-8">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 rounded-full">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span className="text-cyan-400 text-sm font-bold">NEW RELEASE</span>
              </div>
              <div className="w-px h-4 bg-white/20"></div>
              <span className="text-white/70 text-sm">v3.0 Available Now</span>
            </div>

            {/* Heading */}
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-black leading-none mb-6">
                <span className="block text-white mb-2">Build The</span>
                <span className="block bg-gradient-to-r from-cyan-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
                  Future Today
                </span>
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                Transform your ideas into reality with our cutting-edge platform. Built for creators who refuse to compromise.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white font-bold rounded-2xl shadow-xl shadow-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 overflow-hidden hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  Start Free Trial
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </button>

              <button className="px-8 py-4 bg-white/5 backdrop-blur-xl border-2 border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105">
                View Demo
              </button>
            </div>

            {/* Stats */}
            <div className="flex gap-8 pt-8">
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">200K+</div>
                <div className="text-sm text-white/50 font-medium">Active Users</div>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">50M+</div>
                <div className="text-sm text-white/50 font-medium">Projects Created</div>
              </div>
              <div className="w-px bg-white/10"></div>
              <div>
                <div className="text-3xl font-black bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">4.9★</div>
                <div className="text-sm text-white/50 font-medium">User Rating</div>
              </div>
            </div>

          </div>

          {/* Right Column - Interactive Card */}
          <div className="relative">
            
            {/* Main Feature Card */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl border border-white/20 rounded-3xl p-8 shadow-2xl">
              
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                <button
                  onClick={() => setActiveTab(0)}
                  className={activeTab === 0 ? "flex-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg" : "flex-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 bg-white/5 text-white/50 hover:text-white/80"}
                >
                  Design
                </button>
                <button
                  onClick={() => setActiveTab(1)}
                  className={activeTab === 1 ? "flex-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg" : "flex-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 bg-white/5 text-white/50 hover:text-white/80"}
                >
                  Code
                </button>
                <button
                  onClick={() => setActiveTab(2)}
                  className={activeTab === 2 ? "flex-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg" : "flex-1 px-4 py-2 rounded-xl font-semibold transition-all duration-300 bg-white/5 text-white/50 hover:text-white/80"}
                >
                  Deploy
                </button>
              </div>

              {/* Tab Content */}
              <div className="space-y-4">
                {activeTab === 0 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🎨</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Visual Editor</div>
                        <div className="text-white/50 text-sm">Drag and drop interface</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-cyan-500/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">✨</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">AI Assistant</div>
                        <div className="text-white/50 text-sm">Smart suggestions</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">⚡</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Fast Build</div>
                        <div className="text-white/50 text-sm">Lightning speed compilation</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🔧</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Dev Tools</div>
                        <div className="text-white/50 text-sm">Professional debugging</div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🚀</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">One-Click Deploy</div>
                        <div className="text-white/50 text-sm">Instant production</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-pink-500/50 transition-colors duration-300">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <div>
                        <div className="text-white font-semibold">Global CDN</div>
                        <div className="text-white/50 text-sm">Worldwide distribution</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* Bottom Badge */}
              <div className="mt-6 flex items-center justify-between p-4 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 rounded-xl border border-cyan-500/20">
                <span className="text-white/70 text-sm font-medium">Everything you need to ship faster</span>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                  <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                  </svg>
                </div>
              </div>

            </div>

            {/* Floating Accent Cards */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block animate-pulse"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-500/20 to-orange-500/20 backdrop-blur-xl border border-white/10 rounded-2xl hidden lg:block animate-bounce"></div>
          </div>

        </div>

        {/* Feature Cards Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
          
          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">💎</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Premium</h3>
            <p className="text-sm text-white/50">Top-tier quality</p>
          </div>

          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="inline-flex p-3 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Fast</h3>
            <p className="text-sm text-white/50">Lightning speed</p>
          </div>

          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="inline-flex p-3 bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🔒</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Secure</h3>
            <p className="text-sm text-white/50">Bank-level security</p>
          </div>

          <div className="group p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl">
            <div className="inline-flex p-3 bg-gradient-to-br from-cyan-500 to-indigo-500 rounded-xl mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span className="text-2xl">🌍</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-1">Global</h3>
            <p className="text-sm text-white/50">Worldwide reach</p>
          </div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-indigo-950/50 to-transparent pointer-events-none"></div>

    </div>
  );
}

    
  `
  },
  {
    name: "UINEXpunkNeonHeader",
    category: "Header",
    code: `
function UINEXpunkNeonHeader() {
  const [isActive, setIsActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      
      {/* Neon Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.1) 2px, transparent 2px), linear-gradient(90deg, rgba(255, 0, 255, 0.1) 2px, transparent 2px)',
            backgroundSize: '80px 80px',
            transform: 'perspective(500px) rotateX(60deg)',
            transformOrigin: 'center center',
          }}
        ></div>
      </div>

      {/* Static Particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '10%', top: '15%', backgroundColor: 'rgb(0, 255, 255)', boxShadow: '0 0 15px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '25%', top: '30%', backgroundColor: 'rgb(255, 0, 255)', boxShadow: '0 0 20px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '40%', top: '20%', backgroundColor: 'rgb(255, 255, 0)', boxShadow: '0 0 18px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '60%', top: '40%', backgroundColor: 'rgb(0, 255, 255)', boxShadow: '0 0 22px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '75%', top: '25%', backgroundColor: 'rgb(255, 0, 255)', boxShadow: '0 0 16px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '85%', top: '35%', backgroundColor: 'rgb(255, 255, 0)', boxShadow: '0 0 19px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '15%', top: '60%', backgroundColor: 'rgb(255, 0, 255)', boxShadow: '0 0 17px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '35%', top: '70%', backgroundColor: 'rgb(0, 255, 255)', boxShadow: '0 0 21px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '55%', top: '65%', backgroundColor: 'rgb(255, 255, 0)', boxShadow: '0 0 14px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '70%', top: '75%', backgroundColor: 'rgb(0, 255, 255)', boxShadow: '0 0 23px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '90%', top: '80%', backgroundColor: 'rgb(255, 0, 255)', boxShadow: '0 0 15px currentColor' }}></div>
        <div className="absolute w-1 h-1 rounded-full animate-pulse" style={{ left: '20%', top: '85%', backgroundColor: 'rgb(255, 255, 0)', boxShadow: '0 0 20px currentColor' }}></div>
      </div>

      {/* Neon Lights */}
      <div className="absolute top-0 left-0 right-0 h-2" style={{
        background: 'linear-gradient(to right, rgb(0, 255, 255), rgb(255, 0, 255), rgb(255, 255, 0), rgb(0, 255, 255))',
        boxShadow: '0 0 40px rgba(0, 255, 255, 0.8)',
      }}></div>
      <div className="absolute bottom-0 left-0 right-0 h-2" style={{
        background: 'linear-gradient(to right, rgb(255, 0, 255), rgb(0, 255, 255), rgb(255, 0, 255))',
        boxShadow: '0 0 40px rgba(255, 0, 255, 0.8)',
      }}></div>

      <div className="w-full max-w-6xl relative z-10">
        
        <div className="relative py-16">

          {/* Terminal Frame */}
          <div className="absolute inset-0 pointer-events-none border-2 transition-all duration-500" style={{
            borderColor: isActive ? 'rgb(0, 255, 255)' : 'rgb(0, 128, 128)',
            boxShadow: isActive ? '0 0 40px rgba(0, 255, 255, 0.6), inset 0 0 40px rgba(0, 255, 255, 0.2)' : '0 0 20px rgba(0, 255, 255, 0.3)',
          }}>
            {/* Corner Accents */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-24 h-24"
                style={{
                  top: i < 2 ? '-2px' : 'auto',
                  bottom: i >= 2 ? '-2px' : 'auto',
                  left: i % 2 === 0 ? '-2px' : 'auto',
                  right: i % 2 === 1 ? '-2px' : 'auto',
                }}
              >
                <div className="absolute w-full h-1" style={{
                  background: 'rgb(255, 0, 255)',
                  top: i < 2 ? '0' : 'auto',
                  bottom: i >= 2 ? '0' : 'auto',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 255)' : 'none',
                }}></div>
                <div className="absolute w-1 h-full" style={{
                  background: 'rgb(255, 0, 255)',
                  left: i % 2 === 0 ? '0' : 'auto',
                  right: i % 2 === 1 ? '0' : 'auto',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 255)' : 'none',
                }}></div>
              </div>
            ))}
          </div>

          {/* Main Content */}
          <div className="text-center px-6">
            
            {/* System Status */}
            <div className="flex justify-center mb-12">
              <div 
                className="flex items-center gap-4 px-8 py-3 border-2 transition-all duration-500 backdrop-blur-md relative overflow-hidden"
                style={{
                  borderColor: isActive ? 'rgb(255, 0, 255)' : 'rgb(128, 0, 128)',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  boxShadow: isActive ? '0 0 40px rgba(255, 0, 255, 0.6)' : '0 0 20px rgba(255, 0, 255, 0.3)',
                }}
              >
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{
                    backgroundColor: 'rgb(0, 255, 0)',
                    boxShadow: '0 0 15px rgb(0, 255, 0)',
                  }}></div>
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{
                    backgroundColor: 'rgb(255, 255, 0)',
                    boxShadow: '0 0 15px rgb(255, 255, 0)',
                    animationDelay: '0.3s',
                  }}></div>
                  <div className="w-3 h-3 rounded-full animate-pulse" style={{
                    backgroundColor: 'rgb(255, 0, 0)',
                    boxShadow: '0 0 15px rgb(255, 0, 0)',
                    animationDelay: '0.6s',
                  }}></div>
                </div>
                <span className="text-sm font-mono uppercase tracking-widest" style={{
                  color: isActive ? 'rgb(0, 255, 255)' : 'rgb(0, 200, 200)',
                  textShadow: isActive ? '0 0 10px rgb(0, 255, 255)' : 'none',
                }}>
                  SYSTEM ONLINE
                </span>
              </div>
            </div>

            {/* Main Title */}
            <div className="relative mb-8">
              <h1 
                className="text-8xl md:text-9xl font-black mb-4 tracking-tight transition-all duration-500"
                style={{
                  color: 'rgb(255, 255, 255)',
                  textShadow: isActive 
                    ? '0 0 20px rgb(0, 255, 255), 0 0 40px rgb(255, 0, 255), 0 0 60px rgb(0, 255, 255)' 
                    : '0 0 10px rgb(0, 255, 255)',
                  WebkitTextStroke: '2px rgb(0, 255, 255)',
                  paintOrder: 'stroke fill',
                }}
              >
                UINEX
              </h1>

              <div className="flex justify-center items-center gap-3 mb-4">
                <div className="h-px w-20 transition-all duration-500" style={{
                  background: 'linear-gradient(to right, transparent, rgb(255, 0, 255))',
                  boxShadow: isActive ? '0 0 10px rgb(255, 0, 255)' : 'none',
                }}></div>
                <div className="text-3xl font-mono tracking-widest" style={{
                  color: 'rgb(255, 0, 255)',
                  textShadow: isActive ? '0 0 20px rgb(255, 0, 255)' : '0 0 10px rgb(255, 0, 255)',
                }}>
                  //LINK//
                </div>
                <div className="h-px w-20 transition-all duration-500" style={{
                  background: 'linear-gradient(to left, transparent, rgb(255, 0, 255))',
                  boxShadow: isActive ? '0 0 10px rgb(255, 0, 255)' : 'none',
                }}></div>
              </div>

              <p className="text-2xl md:text-3xl font-bold uppercase tracking-widest transition-all duration-500" style={{
                color: isActive ? 'rgb(255, 255, 0)' : 'rgb(200, 200, 0)',
                textShadow: isActive ? '0 0 30px rgba(255, 255, 0, 0.8)' : 'none',
              }}>
                JACK INTO THE FUTURE
              </p>
            </div>

            {/* Animated Binary Divider */}
            <div className="flex justify-center mb-10 font-mono text-xs overflow-hidden" style={{
              color: 'rgb(0, 255, 255)',
              textShadow: '0 0 10px rgb(0, 255, 255)',
            }}>
              <div className="animate-pulse">01001110 01000101 01001111 01001110</div>
            </div>

            {/* Description */}
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-14 leading-relaxed transition-all duration-500" style={{
              color: isActive ? 'rgb(200, 200, 255)' : 'rgb(150, 150, 200)',
              textShadow: isActive ? '0 0 15px rgba(0, 255, 255, 0.3)' : 'none',
            }}>
              Experience the bleeding edge of technology where neon dreams collide with digital reality in a UINEXpunk paradise.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button 
                className="relative px-12 py-4 font-bold uppercase tracking-widest overflow-hidden transition-all duration-300 group"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: '3px solid rgb(0, 255, 255)',
                  color: 'rgb(0, 255, 255)',
                  boxShadow: isActive ? '0 0 40px rgba(0, 255, 255, 0.8)' : '0 0 20px rgba(0, 255, 255, 0.4)',
                }}
              >
                <span className="relative z-10">CONNECT NOW</span>
              </button>

              <button 
                className="px-12 py-4 font-bold uppercase tracking-widest transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  border: '3px solid rgb(255, 0, 255)',
                  color: 'rgb(255, 0, 255)',
                  boxShadow: isActive ? '0 0 40px rgba(255, 0, 255, 0.8)' : '0 0 20px rgba(255, 0, 255, 0.4)',
                }}
              >
                EXPLORE
              </button>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group"
                style={{
                  borderColor: isActive ? 'rgb(0, 255, 255)' : 'rgb(0, 128, 128)',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  boxShadow: isActive ? '0 0 30px rgba(0, 255, 255, 0.4)' : 'none',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 transition-all duration-500" style={{ 
                  background: 'rgb(0, 255, 255)',
                  boxShadow: isActive ? '0 0 20px rgb(0, 255, 255)' : 'none',
                }}></div>
                <div className="text-5xl mb-4">⚡</div>
                <div className="text-xl font-bold uppercase mb-3" style={{ 
                  color: 'rgb(0, 255, 255)',
                  textShadow: '0 0 10px rgb(0, 255, 255)',
                }}>
                  LIGHTNING FAST
                </div>
                <div className="text-sm" style={{ color: 'rgb(150, 150, 200)' }}>
                  Quantum speed processing
                </div>
              </div>

              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group"
                style={{
                  borderColor: isActive ? 'rgb(255, 0, 255)' : 'rgb(128, 0, 128)',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  boxShadow: isActive ? '0 0 30px rgba(255, 0, 255, 0.4)' : 'none',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 transition-all duration-500" style={{ 
                  background: 'rgb(255, 0, 255)',
                  boxShadow: isActive ? '0 0 20px rgb(255, 0, 255)' : 'none',
                }}></div>
                <div className="text-5xl mb-4">🔐</div>
                <div className="text-xl font-bold uppercase mb-3" style={{ 
                  color: 'rgb(255, 0, 255)',
                  textShadow: '0 0 10px rgb(255, 0, 255)',
                }}>
                  SECURE
                </div>
                <div className="text-sm" style={{ color: 'rgb(150, 150, 200)' }}>
                  Military-grade encryption
                </div>
              </div>

              <div 
                className="p-8 border-2 transition-all duration-500 backdrop-blur-sm relative overflow-hidden group"
                style={{
                  borderColor: isActive ? 'rgb(255, 255, 0)' : 'rgb(128, 128, 0)',
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  boxShadow: isActive ? '0 0 30px rgba(255, 255, 0, 0.4)' : 'none',
                }}
              >
                <div className="absolute top-0 left-0 w-full h-1 transition-all duration-500" style={{ 
                  background: 'rgb(255, 255, 0)',
                  boxShadow: isActive ? '0 0 20px rgb(255, 255, 0)' : 'none',
                }}></div>
                <div className="text-5xl mb-4">🌐</div>
                <div className="text-xl font-bold uppercase mb-3" style={{ 
                  color: 'rgb(255, 255, 0)',
                  textShadow: '0 0 10px rgb(255, 255, 0)',
                }}>
                  DECENTRALIZED
                </div>
                <div className="text-sm" style={{ color: 'rgb(150, 150, 200)' }}>
                  Distributed network power
                </div>
              </div>
            </div>

          </div>

          {/* Mouse Follower Glow */}
          {isActive && (
            <div
              className="absolute pointer-events-none w-96 h-96 rounded-full blur-3xl opacity-20"
              style={{
                background: 'radial-gradient(circle, rgb(0, 255, 255), rgb(255, 0, 255), transparent)',
                left: mousePos.x - 192 + 'px',
                top: mousePos.y - 192 + 'px',
                transition: 'all 0.2s ease-out',
              }}
            ></div>
          )}

        </div>
      </div>

      {/* Bottom Terminal Text */}
      <div className="absolute bottom-4 left-0 right-0 text-center">
        <div className="text-xs font-mono opacity-50" style={{ color: 'rgb(0, 255, 255)' }}>
          &gt; SYSTEM_ID: CYB3R-L1NK-2077 | STATUS: ACTIVE | UPLINK: ESTABLISHED_
        </div>
      </div>
    </div>
  );
}

    
  `
  },
  {
    name: "UINEXpunkHeader",
    category: "Header",
    code: `
function UINEXpunkHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* UIZONRain Effect */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        {[...Array(20)].map((_, i) => {
          const leftPosition = i * 5;
          
          return (
            <div
              key={i}
              className="absolute text-xs font-mono"
              style={{
                left: leftPosition + '%',
                top: '-20%',
                color: 'rgb(0, 255, 0)',
                textShadow: '0 0 10px rgb(0, 255, 0)',
                opacity: 0.6 + (i % 3) * 0.2,
              }}
            >
              {Array(20).fill(0).map((_, j) => (
                <div key={j} className="mb-2">{j % 2 === 0 ? '1' : '0'}</div>
              ))}
            </div>
          );
        })}
      </div>

      {/* Scanlines */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(transparent 50%, rgba(0, 255, 0, 0.05) 50%)',
        backgroundSize: '100% 4px',
      }}></div>

      <div className="relative z-10 text-center max-w-6xl w-full">
        {/* Glitch Title */}
        <div className="relative mb-12">
          <h1 
            className="text-9xl font-black tracking-tighter mb-6 relative"
            style={{
              color: 'rgb(255, 255, 255)',
              textShadow: isHovered 
                ? '3px 3px 0 rgb(255, 0, 0), -3px -3px 0 rgb(0, 255, 255), 0 0 40px rgb(255, 0, 255)' 
                : '1px 1px 0 rgb(255, 0, 0), -1px -1px 0 rgb(0, 255, 255)',
            }}
          >
            MATRIX
          </h1>
          
          {/* Glitch Overlay */}
          {isHovered && (
            <h1 
              className="text-9xl font-black tracking-tighter absolute inset-0 animate-pulse"
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px rgb(0, 255, 0)',
                transform: 'translate(2px, -2px)',
                opacity: 0.7,
              }}
            >
              MATRIX
            </h1>
          )}
        </div>

        {/* Terminal Window */}
        <div 
          className="border-4 p-8 mx-auto max-w-4xl backdrop-blur-md transition-all duration-500"
          style={{
            borderColor: isHovered ? 'rgb(0, 255, 0)' : 'rgb(0, 150, 0)',
            backgroundColor: 'rgba(0, 0, 0, 0.9)',
            boxShadow: isHovered ? '0 0 60px rgba(0, 255, 0, 0.6), inset 0 0 30px rgba(0, 255, 0, 0.1)' : 'none',
          }}
        >
          <div className="flex items-center gap-3 mb-6 pb-4 border-b-2" style={{ borderColor: 'rgb(0, 255, 0)' }}>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgb(255, 0, 0)', boxShadow: '0 0 10px rgb(255, 0, 0)' }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgb(255, 255, 0)', boxShadow: '0 0 10px rgb(255, 255, 0)' }}></div>
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: 'rgb(0, 255, 0)', boxShadow: '0 0 10px rgb(0, 255, 0)' }}></div>
            </div>
            <span className="text-sm font-mono" style={{ color: 'rgb(0, 255, 0)' }}>root@system:~$</span>
          </div>

          <div className="font-mono text-left space-y-2 mb-8" style={{ color: 'rgb(0, 255, 0)' }}>
            <div className="animate-pulse">&gt; Initializing neural interface...</div>
            <div className="animate-pulse" style={{ animationDelay: '0.2s' }}>&gt; Connecting to mainframe...</div>
            <div className="animate-pulse" style={{ animationDelay: '0.4s' }}>&gt; ACCESS GRANTED</div>
          </div>

          <p className="text-xl mb-8 leading-relaxed" style={{ color: 'rgb(150, 255, 150)' }}>
            Enter the digital realm where code flows like water and reality bends to your will
          </p>

          <div className="flex justify-center gap-4">
            <button 
              className="px-10 py-4 font-bold uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                border: '3px solid rgb(0, 255, 0)',
                color: 'rgb(0, 255, 0)',
                boxShadow: isHovered ? '0 0 40px rgba(0, 255, 0, 0.6)' : 'none',
              }}
            >
              JACK IN
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

    
  `
  },
  {
    name: "HolographicHeader",
    category: "Header",
    code: `
function HolographicHeader() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Holographic Grid */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-30"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0, 255, 255, 0.3) 2px, rgba(0, 255, 255, 0.3) 4px), repeating-linear-gradient(90deg, transparent, transparent 2px, rgba(255, 0, 255, 0.3) 2px, rgba(255, 0, 255, 0.3) 4px)',
            backgroundSize: '50px 50px',
          }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => {
          const colors = ['rgb(0, 255, 255)', 'rgb(255, 0, 255)', 'rgb(255, 255, 0)'];
          const color = colors[i % 3];
          const left = (i * 7) % 100;
          const top = (i * 13) % 100;
          
          return (
            <div
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: left + '%',
                top: top + '%',
                backgroundColor: color,
                boxShadow: '0 0 20px ' + color,
                opacity: 0.6,
              }}
            ></div>
          );
        })}
      </div>

      <div className="relative z-10 text-center max-w-6xl w-full">
        {/* Holographic Frame */}
        <div 
          className="relative p-16 border-2 transition-all duration-700"
          style={{
            borderColor: 'rgb(0, 255, 255)',
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.1), rgba(255, 0, 255, 0.1))' 
              : 'transparent',
            boxShadow: isHovered 
              ? '0 0 80px rgba(0, 255, 255, 0.5), inset 0 0 80px rgba(0, 255, 255, 0.1)' 
              : '0 0 40px rgba(0, 255, 255, 0.3)',
          }}
        >
          {/* Corner Decorations */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-16 h-16 transition-all duration-500"
              style={{
                top: i < 2 ? '-2px' : 'auto',
                bottom: i >= 2 ? '-2px' : 'auto',
                left: i % 2 === 0 ? '-2px' : 'auto',
                right: i % 2 === 1 ? '-2px' : 'auto',
                borderTop: i < 2 ? '4px solid rgb(255, 0, 255)' : 'none',
                borderBottom: i >= 2 ? '4px solid rgb(255, 0, 255)' : 'none',
                borderLeft: i % 2 === 0 ? '4px solid rgb(255, 0, 255)' : 'none',
                borderRight: i % 2 === 1 ? '4px solid rgb(255, 0, 255)' : 'none',
                boxShadow: isHovered ? '0 0 30px rgb(255, 0, 255)' : 'none',
              }}
            ></div>
          ))}

          {/* Title with Holographic Effect */}
          <div className="relative mb-8">
            <h1 
              className="text-8xl font-black mb-4 tracking-tight transition-all duration-500"
              style={{
                background: 'linear-gradient(45deg, rgb(0, 255, 255), rgb(255, 0, 255), rgb(255, 255, 0))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: isHovered ? 'drop-shadow(0 0 30px rgb(0, 255, 255))' : 'none',
              }}
            >
              HOLOGRAM
            </h1>
            
            {/* Subtitle */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <div className="h-px w-24" style={{ 
                background: 'linear-gradient(to right, transparent, rgb(0, 255, 255))',
                boxShadow: '0 0 10px rgb(0, 255, 255)',
              }}></div>
              <span 
                className="text-2xl font-mono tracking-widest"
                style={{
                  color: 'rgb(255, 0, 255)',
                  textShadow: '0 0 20px rgb(255, 0, 255)',
                }}
              >
                INTERFACE
              </span>
              <div className="h-px w-24" style={{ 
                background: 'linear-gradient(to left, transparent, rgb(0, 255, 255))',
                boxShadow: '0 0 10px rgb(0, 255, 255)',
              }}></div>
            </div>
          </div>

          {/* Stats Display */}
          <div className="grid grid-cols-3 gap-6 mb-10 max-w-4xl mx-auto">
            {[
              { value: '99.9%', label: 'UPTIME', color: 'rgb(0, 255, 0)' },
              { value: '847ms', label: 'LATENCY', color: 'rgb(0, 255, 255)' },
              { value: '∞', label: 'BANDWIDTH', color: 'rgb(255, 0, 255)' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="p-6 border-2 backdrop-blur-sm transition-all duration-500"
                style={{
                  borderColor: stat.color,
                  backgroundColor: 'rgba(0, 0, 0, 0.7)',
                  boxShadow: isHovered ? '0 0 30px ' + stat.color : 'none',
                }}
              >
                <div 
                  className="text-4xl font-black mb-2"
                  style={{
                    color: stat.color,
                    textShadow: '0 0 15px ' + stat.color,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-mono" style={{ color: 'rgb(150, 150, 200)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgb(200, 200, 255)' }}>
            Project yourself into a dimension where light and data merge into pure consciousness
          </p>

          <div className="flex justify-center gap-6">
            <button 
              className="px-12 py-5 font-bold uppercase tracking-widest transition-all duration-300 relative overflow-hidden group"
              style={{
                backgroundColor: 'rgba(0, 255, 255, 0.2)',
                border: '3px solid rgb(0, 255, 255)',
                color: 'rgb(0, 255, 255)',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
              }}
            >
              ACTIVATE
            </button>
            <button 
              className="px-12 py-5 font-bold uppercase tracking-widest transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                border: '3px solid rgb(255, 0, 255)',
                color: 'rgb(255, 0, 255)',
                boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
              }}
            >
              DISCOVER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "LuxeCard",
    category: "Cards",
    code: `
function LuxeCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center p-8 overflow-hidden relative">
      {/* Animated background glow orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-br from-amber-500/20 to-orange-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '12s' }}></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-tl from-rose-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '15s', animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-purple-500/10 to-amber-500/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '8s' }}></div>
      </div>

      {/* Premium Luxe Card */}
      <div className="relative w-96 max-w-md p-1 bg-gradient-to-br from-amber-400 via-rose-400 to-purple-500 rounded-3xl shadow-2xl group/card hover:scale-[1.03] transition-all duration-500 ease-out">
        {/* Outer glowing border animation */}
        <div className="absolute -inset-1 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600 rounded-3xl blur-xl opacity-70 group-hover/card:opacity-100 transition-opacity duration-700 animate-pulse-slow"></div>

        {/* Inner card with glass effect */}
        <div className="relative h-full bg-black/80 backdrop-blur-2xl rounded-3xl p-8 overflow-hidden border border-white/10">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-purple-500/5"></div>

          {/* Floating decorative element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-amber-400/30 to-rose-400/30 rounded-full blur-2xl group-hover/card:scale-150 transition-transform duration-1000"></div>

          {/* Content */}
          <div className="relative z-10">
            {/* Luxe badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6 shadow-lg group-hover/card:shadow-amber-500/30 transition-shadow duration-500">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-amber-400 to-rose-400 animate-ping"></div>
              <span className="text-sm font-bold bg-gradient-to-r from-amber-200 to-rose-200 bg-clip-text text-transparent tracking-wider">
                LUXE EDITION
              </span>
            </div>

            {/* Title with animated shine */}
            <h2 className="text-4xl font-extrabold mb-4 relative">
              <span className="bg-gradient-to-r from-amber-200 via-white to-rose-200 bg-clip-text text-transparent">
                Opulent Glow
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-full group-hover/card:translate-x-[-200%] transition-transform duration-1000 ease-out"></div>
            </h2>

            {/* Description */}
            <p className="text-gray-200 text-base mb-8 leading-relaxed tracking-wide">
              Indulge in unparalleled elegance. Premium craftsmanship meets cutting-edge design for the ultimate luxury experience.
            </p>

            {/* Feature icons row */}
            <div className="grid grid-cols-3 gap-4 mb-10">
              <div className="flex flex-col items-center group/item">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 backdrop-blur border border-amber-400/30 flex items-center justify-center mb-2 group-hover/item:scale-125 transition-transform duration-300">
                  <svg className="w-7 h-7 text-amber-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 2l3.09 6.26L20 9.27l-5 4.87 1.18 6.88L10 17.77l-6.18 3.25L5 14.14l-5-4.87 6.91-1.01L10 2z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Premium</span>
              </div>
              <div className="flex flex-col items-center group/item">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500/20 to-pink-500/20 backdrop-blur border border-rose-400/30 flex items-center justify-center mb-2 group-hover/item:scale-125 transition-transform duration-300">
                  <svg className="w-7 h-7 text-rose-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Ultra Fast</span>
              </div>
              <div className="flex flex-col items-center group/item">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-500/20 to-amber-500/20 backdrop-blur border border-purple-400/30 flex items-center justify-center mb-2 group-hover/item:scale-125 transition-transform duration-300">
                  <svg className="w-7 h-7 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <span className="text-xs text-gray-400">Verified</span>
              </div>
            </div>

            {/* CTA Button with multi-effect */}
            <button className="relative w-full py-5 rounded-2xl overflow-hidden group/btn shadow-2xl transform hover:-translate-y-1 transition-all duration-500">
              {/* Gradient layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500 via-rose-500 to-purple-600"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover/btn:translate-x-[200%] transition-transform duration-800 ease-out"></div>
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-amber-400/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500"></div>

              {/* Glowing border effect */}
              <div className="absolute inset-0 rounded-2xl blur-lg bg-gradient-to-r from-amber-400 to-purple-600 opacity-0 group-hover/btn:opacity-80 transition-opacity duration-500"></div>

              <span className="relative z-10 text-white font-bold text-lg tracking-wider flex items-center justify-center gap-3">
                Claim Luxury
                <svg className="w-6 h-6 group-hover/btn:translate-x-3 transition-transform duration-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </button>

            {/* Price reveal on hover */}
            <div className="mt-8 text-center opacity-0 group-hover/card:opacity-100 translate-y-6 group-hover/card:translate-y-0 transition-all duration-700 delay-200">
              <div className="text-4xl font-black bg-gradient-to-r from-amber-300 via-rose-300 to-purple-300 bg-clip-text text-transparent">
                $299
                <span className="text-lg font-normal text-gray-400">/mo</span>
              </div>
              <div className="text-sm text-gray-500 mt-1">Limited Access • First Come</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
  `
  },

  {
    name: "ModernSleekHeader",
    category: "Header",
    code: `
function ModernSleekHeader() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-600 rounded-full blur-3xl animate-pulse"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-8">
        <div className="max-w-7xl w-full space-y-16">
          
          {/* Hero Section */}
          <div className="text-center space-y-8">
            
            {/* Status Badge */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 px-8 py-3 rounded-full bg-white bg-opacity-10 backdrop-blur-2xl border border-white border-opacity-30 shadow-2xl">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-ping absolute"></span>
                  <span className="w-2 h-2 rounded-full bg-green-400"></span>
                </div>
                <span className="text-white font-semibold text-sm tracking-wider uppercase">Live & Ready</span>
              </div>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-7xl md:text-9xl font-black leading-none tracking-tight">
                <div className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
                  ELEVATE
                </div>
                <div className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  YOUR BRAND
                </div>
              </h1>
              
              {/* Decorative Line */}
              <div className="flex justify-center">
                <div className="w-32 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full"></div>
              </div>
            </div>

            {/* Subtitle */}
            <p className="text-xl md:text-3xl text-gray-200 max-w-4xl mx-auto font-light leading-relaxed">
              Breakthrough design meets exceptional performance in perfect harmony
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 pt-4">
              <button className="px-12 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-2xl shadow-blue-500/50 hover:shadow-blue-500/70 hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              
              <button className="px-12 py-5 rounded-full font-bold text-lg bg-white bg-opacity-10 backdrop-blur-xl text-white border-2 border-white border-opacity-30 hover:bg-opacity-20 hover:scale-105 transition-all duration-300 shadow-xl">
                Learn More
              </button>
            </div>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div 
              onMouseEnter={() => setHoveredCard(0)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 rounded-3xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20 shadow-2xl hover:shadow-orange-500/20 hover:scale-105 transition-all duration-500"
            >
              <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">⚡</div>
              <h3 className="text-2xl font-bold text-white mb-3">Lightning Speed</h3>
              <p className="text-gray-300 mb-6">Blazing fast performance that sets new standards</p>
              {hoveredCard === 0 && (
                <div className="w-full h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
              )}
              {hoveredCard !== 0 && (
                <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-red-500 rounded-full"></div>
              )}
            </div>

            <div 
              onMouseEnter={() => setHoveredCard(1)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 rounded-3xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20 shadow-2xl hover:shadow-pink-500/20 hover:scale-105 transition-all duration-500"
            >
              <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">🎨</div>
              <h3 className="text-2xl font-bold text-white mb-3">Beautiful UI</h3>
              <p className="text-gray-300 mb-6">Stunning interfaces that captivate users</p>
              {hoveredCard === 1 && (
                <div className="w-full h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
              )}
              {hoveredCard !== 1 && (
                <div className="w-16 h-1 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full"></div>
              )}
            </div>

            <div 
              onMouseEnter={() => setHoveredCard(2)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 rounded-3xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20 shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all duration-500"
            >
              <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">🔒</div>
              <h3 className="text-2xl font-bold text-white mb-3">Secure Core</h3>
              <p className="text-gray-300 mb-6">Enterprise-grade security built-in</p>
              {hoveredCard === 2 && (
                <div className="w-full h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"></div>
              )}
              {hoveredCard !== 2 && (
                <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full"></div>
              )}
            </div>

            <div 
              onMouseEnter={() => setHoveredCard(3)}
              onMouseLeave={() => setHoveredCard(null)}
              className="p-8 rounded-3xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20 shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-500"
            >
              <div className="text-6xl mb-6 transform hover:scale-110 transition-transform duration-300">🌍</div>
              <h3 className="text-2xl font-bold text-white mb-3">Global Reach</h3>
              <p className="text-gray-300 mb-6">Connect with audiences worldwide</p>
              {hoveredCard === 3 && (
                <div className="w-full h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
              )}
              {hoveredCard !== 3 && (
                <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full"></div>
              )}
            </div>

          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20">
              <div className="text-5xl font-black text-white mb-2">99.9%</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Uptime</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20">
              <div className="text-5xl font-black text-white mb-2">50K+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Users</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20">
              <div className="text-5xl font-black text-white mb-2">24/7</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Support</div>
            </div>
            <div className="text-center p-6 rounded-2xl bg-white bg-opacity-5 backdrop-blur-xl border border-white border-opacity-20">
              <div className="text-5xl font-black text-white mb-2">150+</div>
              <div className="text-gray-300 text-sm uppercase tracking-wider">Countries</div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-8">
            <div className="flex flex-col items-center gap-3 opacity-50">
              <span className="text-white text-xs tracking-widest uppercase">Explore More</span>
              <div className="w-6 h-10 rounded-full border-2 border-white flex justify-center pt-2">
                <div className="w-1 h-3 rounded-full bg-white animate-bounce"></div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

    
  `
  },
  {
    name: "NeonUINEXHeader",
    category: "Header",
    code: `
    // import { useState, useEffect } from 'react';
function NeonUINEXHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 20,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 20,
    });
  };

  const floatAnimation1 = {
    animation: 'float1 8s ease-in-out infinite'
  };
  
  const floatAnimation2 = {
    animation: 'float2 10s ease-in-out infinite'
  };
  
  const scanAnimation = {
    animation: 'scan1 8s linear infinite'
  };
  
  const slideAnimation = {
    animation: 'slide1 2s linear infinite'
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            transform: 'perspective(500px) rotateX(60deg) translateY(-50%)',
            transformOrigin: 'center center',
          }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, black 0%, transparent 50%, black 100%)',
          }}
        ></div>
      </div>

      {/* Neon Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(255, 0, 255, 0.4), transparent)',
            top: '10%',
            left: '10%',
            ...floatAnimation1
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 255, 0.3), transparent)',
            bottom: '10%',
            right: '10%',
            ...floatAnimation2
          }}
        ></div>
      </div>

      {/* Scanlines */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, rgba(0, 0, 0, 0.15) 0px, rgba(0, 0, 0, 0.15) 1px, transparent 1px, transparent 2px)',
          ...scanAnimation
        }}
      ></div>

      <div className="w-full max-w-7xl relative z-10">
        
        {/* Hexagonal Border Frame */}
        <div className="relative py-20">
          
          {/* Top Border with Segments */}
          <div className="absolute top-0 left-0 right-0 flex justify-between px-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-1 flex-1 mx-1 transition-all duration-300"
                style={{
                  background: i % 2 === 0 ? 'linear-gradient(to right, rgb(255, 0, 255), rgb(0, 255, 255))' : 'rgb(30, 30, 30)',
                  boxShadow: i % 2 === 0 ? '0 0 10px rgb(255, 0, 255), 0 0 20px rgb(0, 255, 255)' : 'none',
                }}
              ></div>
            ))}
          </div>

          {/* Bottom Border with Segments */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between px-12">
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="h-1 flex-1 mx-1 transition-all duration-300"
                style={{
                  background: i % 2 === 1 ? 'linear-gradient(to left, rgb(255, 0, 255), rgb(0, 255, 255))' : 'rgb(30, 30, 30)',
                  boxShadow: i % 2 === 1 ? '0 0 10px rgb(255, 0, 255), 0 0 20px rgb(0, 255, 255)' : 'none',
                }}
              ></div>
            ))}
          </div>

          {/* Corner Decorations */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-16 h-16"
              style={{
                top: i < 2 ? '0' : 'auto',
                bottom: i >= 2 ? '0' : 'auto',
                left: i % 2 === 0 ? '0' : 'auto',
                right: i % 2 === 1 ? '0' : 'auto',
              }}
            >
              <div 
                className="absolute w-3 h-3 rounded-full animate-pulse"
                style={{
                  backgroundColor: i % 2 === 0 ? 'rgb(255, 0, 255)' : 'rgb(0, 255, 255)',
                  boxShadow: i % 2 === 0 ? '0 0 15px rgb(255, 0, 255)' : '0 0 15px rgb(0, 255, 255)',
                  top: i < 2 ? '0' : 'auto',
                  bottom: i >= 2 ? '0' : 'auto',
                  left: i % 2 === 0 ? '0' : 'auto',
                  right: i % 2 === 1 ? '0' : 'auto',
                }}
              ></div>
            </div>
          ))}

          {/* Main Content */}
          <div className="text-center px-6">
            
            {/* Status Indicator */}
            <div className="flex justify-center mb-12">
              <div 
                className="relative flex items-center gap-4 px-8 py-3 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  border: '2px solid rgba(255, 0, 255, 0.5)',
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 50%, 90% 100%, 10% 100%, 0% 50%)',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-30"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255, 0, 255, 0.5), transparent)',
                    ...slideAnimation
                  }}
                ></div>
                <div className="flex gap-1">
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(0, 255, 255)',
                      boxShadow: '0 0 8px rgb(0, 255, 255)',
                    }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(0, 255, 255)',
                      boxShadow: '0 0 8px rgb(0, 255, 255)',
                      animationDelay: '0.3s'
                    }}
                  ></div>
                  <div
                    className="w-1.5 h-1.5 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(0, 255, 255)',
                      boxShadow: '0 0 8px rgb(0, 255, 255)',
                      animationDelay: '0.6s'
                    }}
                  ></div>
                </div>
                <span 
                  className="text-sm font-mono uppercase tracking-widest relative z-10"
                  style={{ color: 'rgb(0, 255, 255)' }}
                >
                  Online
                </span>
              </div>
            </div>

            {/* Main Title with Glitch Effect */}
            <div className="relative mb-8">
              <h1 
                className="text-9xl font-black mb-4 tracking-tighter relative transition-transform duration-100"
                style={{
                  color: 'white',
                  textShadow: '0 0 10px rgb(255, 0, 255), 0 0 20px rgb(255, 0, 255), 0 0 30px rgb(0, 255, 255), 0 0 40px rgb(0, 255, 255)',
                  transform: mousePos.x !== 0 || mousePos.y !== 0 ? 'translate(' + mousePos.x + 'px, ' + mousePos.y + 'px)' : 'none',
                }}
              >
                UINEX
              </h1>
              
              {/* Glitch Layers */}
              {glitchActive && (
                <>
                  <h1 
                    className="absolute inset-0 text-9xl font-black tracking-tighter pointer-events-none"
                    style={{
                      color: 'rgb(255, 0, 255)',
                      opacity: 0.8,
                      transform: 'translateX(-3px)',
                      mixBlendMode: 'screen',
                    }}
                  >
                    UINEX
                  </h1>
                  <h1 
                    className="absolute inset-0 text-9xl font-black tracking-tighter pointer-events-none"
                    style={{
                      color: 'rgb(0, 255, 255)',
                      opacity: 0.8,
                      transform: 'translateX(3px)',
                      mixBlendMode: 'screen',
                    }}
                  >
                    UINEX
                  </h1>
                </>
              )}

              <div className="flex justify-center items-center gap-3 mb-2">
                <div 
                  className="h-px flex-1 max-w-24"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgb(255, 0, 255))',
                    boxShadow: '0 0 5px rgb(255, 0, 255)',
                  }}
                ></div>
                <p 
                  className="text-2xl font-bold uppercase tracking-widest"
                  style={{
                    color: 'rgb(255, 0, 255)',
                    textShadow: '0 0 10px rgb(255, 0, 255)',
                  }}
                >
                  NEXUS
                </p>
                <div 
                  className="h-px flex-1 max-w-24"
                  style={{
                    background: 'linear-gradient(to left, transparent, rgb(0, 255, 255))',
                    boxShadow: '0 0 5px rgb(0, 255, 255)',
                  }}
                ></div>
              </div>
            </div>

            {/* Digital Code Rain Effect */}
            <div className="flex justify-center gap-1 mb-10 opacity-40">
              <div className="text-xs font-mono" style={{ color: 'rgb(255, 0, 255)', animation: 'fade1 2s ease-in-out infinite' }}>1</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)', animation: 'fade2 2s ease-in-out infinite' }}>0</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(255, 0, 255)', animation: 'fade3 2s ease-in-out infinite' }}>1</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)', animation: 'fade4 2s ease-in-out infinite' }}>1</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(255, 0, 255)', animation: 'fade5 2s ease-in-out infinite' }}>0</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)', animation: 'fade6 2s ease-in-out infinite' }}>1</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(255, 0, 255)', animation: 'fade7 2s ease-in-out infinite' }}>0</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)', animation: 'fade8 2s ease-in-out infinite' }}>0</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(255, 0, 255)', animation: 'fade9 2s ease-in-out infinite' }}>1</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)', animation: 'fade10 2s ease-in-out infinite' }}>1</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(255, 0, 255)', animation: 'fade11 2s ease-in-out infinite' }}>0</div>
              <div className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)', animation: 'fade12 2s ease-in-out infinite' }}>1</div>
            </div>

            {/* Description */}
            <p 
              className="text-xl max-w-3xl mx-auto mb-14 leading-relaxed"
              style={{ 
                color: 'rgb(150, 150, 150)',
                textShadow: '0 0 5px rgba(0, 255, 255, 0.3)',
              }}
            >
              Enter the digital frontier where technology meets imagination. Unleash the power of tomorrow.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-16">
              <button 
                className="relative group px-12 py-4 font-bold uppercase tracking-wider overflow-hidden"
                style={{
                  backgroundColor: 'rgba(255, 0, 255, 0.1)',
                  border: '2px solid rgb(255, 0, 255)',
                  color: 'rgb(255, 0, 255)',
                  clipPath: 'polygon(8% 0%, 100% 0%, 92% 100%, 0% 100%)',
                  boxShadow: '0 0 20px rgba(255, 0, 255, 0.5), inset 0 0 20px rgba(255, 0, 255, 0.1)',
                }}
              >
                <span className="relative z-10">Access System</span>
              </button>

              <button 
                className="px-12 py-4 font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: 'rgba(0, 255, 255, 0.1)',
                  border: '2px solid rgb(0, 255, 255)',
                  color: 'rgb(0, 255, 255)',
                  clipPath: 'polygon(0% 0%, 92% 0%, 100% 100%, 8% 100%)',
                  boxShadow: '0 0 20px rgba(0, 255, 255, 0.5), inset 0 0 20px rgba(0, 255, 255, 0.1)',
                }}
              >
                Documentation
              </button>
            </div>

            {/* Feature Panels */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              <div 
                className="relative p-8 overflow-hidden group"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(100, 100, 100, 0.3)',
                  clipPath: 'polygon(0% 8%, 100% 0%, 100% 92%, 0% 100%)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgb(255, 0, 255)',
                    boxShadow: '0 0 10px rgb(255, 0, 255)',
                  }}
                ></div>
                
                <div 
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: 'rgb(100, 100, 100)' }}
                >
                  SPEED
                </div>
                
                <div 
                  className="text-4xl font-black mb-2"
                  style={{ 
                    color: 'rgb(255, 0, 255)',
                    textShadow: '0 0 10px rgb(255, 0, 255)',
                  }}
                >
                  99.9%
                </div>
                
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'rgb(150, 150, 150)' }}
                >
                  Uptime
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgb(255, 0, 255), transparent)',
                  }}
                ></div>
              </div>

              <div 
                className="relative p-8 overflow-hidden group"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(100, 100, 100, 0.3)',
                  clipPath: 'polygon(0% 8%, 100% 0%, 100% 92%, 0% 100%)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgb(0, 255, 255)',
                    boxShadow: '0 0 10px rgb(0, 255, 255)',
                  }}
                ></div>
                
                <div 
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: 'rgb(100, 100, 100)' }}
                >
                  SECURE
                </div>
                
                <div 
                  className="text-4xl font-black mb-2"
                  style={{ 
                    color: 'rgb(0, 255, 255)',
                    textShadow: '0 0 10px rgb(0, 255, 255)',
                  }}
                >
                  256-bit
                </div>
                
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'rgb(150, 150, 150)' }}
                >
                  Encryption
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgb(0, 255, 255), transparent)',
                  }}
                ></div>
              </div>

              <div 
                className="relative p-8 overflow-hidden group"
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  border: '1px solid rgba(100, 100, 100, 0.3)',
                  clipPath: 'polygon(0% 8%, 100% 0%, 100% 92%, 0% 100%)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1 transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgb(255, 0, 255)',
                    boxShadow: '0 0 10px rgb(255, 0, 255)',
                  }}
                ></div>
                
                <div 
                  className="text-xs font-mono uppercase tracking-widest mb-3"
                  style={{ color: 'rgb(100, 100, 100)' }}
                >
                  POWER
                </div>
                
                <div 
                  className="text-4xl font-black mb-2"
                  style={{ 
                    color: 'rgb(255, 0, 255)',
                    textShadow: '0 0 10px rgb(255, 0, 255)',
                  }}
                >
                  Unlimited
                </div>
                
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'rgb(150, 150, 150)' }}
                >
                  Scalability
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-12 h-12 opacity-20"
                  style={{
                    background: 'radial-gradient(circle, rgb(255, 0, 255), transparent)',
                  }}
                ></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

    
  `
  },
  {
    name: "NeonMatrixHeader",
    category: "Header",
    code: `
// import { useState, useEffect } from 'react';
function NeonMatrixHeader() {
  const [scrollY, setScrollY] = useState(0);
  const [glitchActive, setGlitchActive] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 150);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 15,
      y: ((e.clientY - rect.top) / rect.height - 0.5) * 15,
    });
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated Hex Grid Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(0, 255, 150, 0.15) 1px, transparent 1px)',
            backgroundSize: '40px 40px',
          }}
        ></div>
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse at center, transparent 0%, black 70%)',
          }}
        ></div>
      </div>

      {/* Neon Light Orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-96 h-96 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 150, 0.3), transparent)',
            top: '5%',
            right: '15%',
          }}
        ></div>
        <div 
          className="absolute w-80 h-80 rounded-full blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(0, 200, 255, 0.25), transparent)',
            bottom: '5%',
            left: '10%',
            animationDelay: '1s',
          }}
        ></div>
      </div>

      {/* UIZONRain Effect Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-400 to-transparent left-1/4"></div>
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-cyan-400 to-transparent left-1/2"></div>
        <div className="absolute h-full w-px bg-gradient-to-b from-transparent via-green-400 to-transparent left-3/4"></div>
      </div>

      <div className="w-full max-w-7xl relative z-10">
        
        {/* Geometric Border Frame */}
        <div className="relative py-24">
          
          {/* Top Decorative Lines */}
          <div className="absolute top-0 left-0 right-0 flex justify-center gap-2 px-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
          </div>

          {/* Bottom Decorative Lines */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-2 px-8">
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>
            <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          </div>

          {/* Corner Hexagons */}
          <div className="absolute top-0 left-8 w-12 h-12">
            <div 
              className="w-full h-full border-2 border-green-400"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                boxShadow: '0 0 20px rgba(0, 255, 150, 0.6)',
              }}
            ></div>
          </div>
          
          <div className="absolute top-0 right-8 w-12 h-12">
            <div 
              className="w-full h-full border-2 border-cyan-400"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                boxShadow: '0 0 20px rgba(0, 200, 255, 0.6)',
              }}
            ></div>
          </div>

          <div className="absolute bottom-0 left-8 w-12 h-12">
            <div 
              className="w-full h-full border-2 border-cyan-400"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                boxShadow: '0 0 20px rgba(0, 200, 255, 0.6)',
              }}
            ></div>
          </div>

          <div className="absolute bottom-0 right-8 w-12 h-12">
            <div 
              className="w-full h-full border-2 border-green-400"
              style={{
                clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
                boxShadow: '0 0 20px rgba(0, 255, 150, 0.6)',
              }}
            ></div>
          </div>

          {/* Main Content */}
          <div className="text-center px-6">
            
            {/* Status Badge */}
            <div className="flex justify-center mb-16">
              <div 
                className="relative flex items-center gap-3 px-10 py-3 overflow-hidden"
                style={{
                  backgroundColor: 'rgba(0, 20, 10, 0.7)',
                  border: '2px solid rgba(0, 255, 150, 0.4)',
                  borderRadius: '50px',
                  boxShadow: '0 0 30px rgba(0, 255, 150, 0.3)',
                }}
              >
                <div className="flex gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(0, 255, 150)',
                      boxShadow: '0 0 10px rgb(0, 255, 150)',
                    }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(0, 255, 150)',
                      boxShadow: '0 0 10px rgb(0, 255, 150)',
                      animationDelay: '0.2s',
                    }}
                  ></div>
                  <div
                    className="w-2 h-2 rounded-full animate-pulse"
                    style={{
                      backgroundColor: 'rgb(0, 255, 150)',
                      boxShadow: '0 0 10px rgb(0, 255, 150)',
                      animationDelay: '0.4s',
                    }}
                  ></div>
                </div>
                <span 
                  className="text-sm font-mono uppercase tracking-widest font-bold"
                  style={{ color: 'rgb(0, 255, 150)' }}
                >
                  System Active
                </span>
              </div>
            </div>

            {/* Main Title with Glitch Effect */}
            <div className="relative mb-6">
              <h1 
                className="text-9xl font-black mb-6 tracking-tight relative transition-transform duration-100"
                style={{
                  color: 'white',
                  textShadow: '0 0 15px rgb(0, 255, 150), 0 0 30px rgb(0, 255, 150), 0 0 45px rgb(0, 200, 255), 0 0 60px rgb(0, 200, 255)',
                  transform: mousePos.x !== 0 || mousePos.y !== 0 ? 'translate(' + mousePos.x + 'px, ' + mousePos.y + 'px)' : 'none',
                }}
              >
                MATRIX
              </h1>
              
              {/* Glitch Layers */}
              {glitchActive && (
                <>
                  <h1 
                    className="absolute inset-0 text-9xl font-black tracking-tight pointer-events-none"
                    style={{
                      color: 'rgb(0, 255, 150)',
                      opacity: 0.7,
                      transform: 'translateX(-4px)',
                      mixBlendMode: 'screen',
                    }}
                  >
                    MATRIX
                  </h1>
                  <h1 
                    className="absolute inset-0 text-9xl font-black tracking-tight pointer-events-none"
                    style={{
                      color: 'rgb(0, 200, 255)',
                      opacity: 0.7,
                      transform: 'translateX(4px)',
                      mixBlendMode: 'screen',
                    }}
                  >
                    MATRIX
                  </h1>
                </>
              )}

              <div className="flex justify-center items-center gap-4 mb-4">
                <div 
                  className="h-px flex-1 max-w-32"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgb(0, 255, 150))',
                    boxShadow: '0 0 8px rgb(0, 255, 150)',
                  }}
                ></div>
                <p 
                  className="text-3xl font-bold uppercase tracking-widest"
                  style={{
                    color: 'rgb(0, 255, 150)',
                    textShadow: '0 0 15px rgb(0, 255, 150)',
                  }}
                >
                  PROTOCOL
                </p>
                <div 
                  className="h-px flex-1 max-w-32"
                  style={{
                    background: 'linear-gradient(to left, transparent, rgb(0, 200, 255))',
                    boxShadow: '0 0 8px rgb(0, 200, 255)',
                  }}
                ></div>
              </div>
            </div>

            {/* Binary Code Display */}
            <div className="flex justify-center gap-2 mb-12 opacity-50">
              <div className="text-sm font-mono" style={{ color: 'rgb(0, 255, 150)' }}>01001101</div>
              <div className="text-sm font-mono" style={{ color: 'rgb(0, 200, 255)' }}>01000001</div>
              <div className="text-sm font-mono" style={{ color: 'rgb(0, 255, 150)' }}>01010100</div>
              <div className="text-sm font-mono" style={{ color: 'rgb(0, 200, 255)' }}>01010010</div>
              <div className="text-sm font-mono" style={{ color: 'rgb(0, 255, 150)' }}>01001001</div>
              <div className="text-sm font-mono" style={{ color: 'rgb(0, 200, 255)' }}>01011000</div>
            </div>

            {/* Description */}
            <p 
              className="text-xl max-w-3xl mx-auto mb-16 leading-relaxed"
              style={{ 
                color: 'rgb(150, 200, 180)',
                textShadow: '0 0 8px rgba(0, 255, 150, 0.2)',
              }}
            >
              Break through the digital barrier. Experience the convergence of code and consciousness.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-6 mb-20">
              <button 
                className="relative group px-14 py-5 font-bold uppercase tracking-wider overflow-hidden transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(0, 255, 150, 0.1)',
                  border: '2px solid rgb(0, 255, 150)',
                  color: 'rgb(0, 255, 150)',
                  borderRadius: '8px',
                  boxShadow: '0 0 25px rgba(0, 255, 150, 0.4), inset 0 0 25px rgba(0, 255, 150, 0.05)',
                }}
              >
                <span className="relative z-10">Enter Matrix</span>
              </button>

              <button 
                className="px-14 py-5 font-bold uppercase tracking-wider transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(0, 200, 255, 0.1)',
                  border: '2px solid rgb(0, 200, 255)',
                  color: 'rgb(0, 200, 255)',
                  borderRadius: '8px',
                  boxShadow: '0 0 25px rgba(0, 200, 255, 0.4), inset 0 0 25px rgba(0, 200, 255, 0.05)',
                }}
              >
                Learn More
              </button>
            </div>

            {/* Feature Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div 
                className="relative p-10 overflow-hidden group transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(0, 20, 10, 0.5)',
                  border: '2px solid rgba(0, 255, 150, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 0 30px rgba(0, 255, 150, 0.2)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ 
                    backgroundColor: 'rgb(0, 255, 150)',
                    boxShadow: '0 0 15px rgb(0, 255, 150)',
                  }}
                ></div>
                
                <div 
                  className="text-xs font-mono uppercase tracking-widest mb-4"
                  style={{ color: 'rgb(100, 150, 120)' }}
                >
                  Processing
                </div>
                
                <div 
                  className="text-5xl font-black mb-3"
                  style={{ 
                    color: 'rgb(0, 255, 150)',
                    textShadow: '0 0 15px rgb(0, 255, 150)',
                  }}
                >
                  10TB/s
                </div>
                
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'rgb(150, 200, 180)' }}
                >
                  Data Transfer
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-10"
                  style={{
                    background: 'radial-gradient(circle, rgb(0, 255, 150), transparent)',
                  }}
                ></div>
              </div>

              <div 
                className="relative p-10 overflow-hidden group transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(0, 20, 20, 0.5)',
                  border: '2px solid rgba(0, 200, 255, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 0 30px rgba(0, 200, 255, 0.2)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ 
                    backgroundColor: 'rgb(0, 200, 255)',
                    boxShadow: '0 0 15px rgb(0, 200, 255)',
                  }}
                ></div>
                
                <div 
                  className="text-xs font-mono uppercase tracking-widest mb-4"
                  style={{ color: 'rgb(100, 150, 170)' }}
                >
                  Network
                </div>
                
                <div 
                  className="text-5xl font-black mb-3"
                  style={{ 
                    color: 'rgb(0, 200, 255)',
                    textShadow: '0 0 15px rgb(0, 200, 255)',
                  }}
                >
                  24/7
                </div>
                
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'rgb(150, 200, 220)' }}
                >
                  Availability
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-10"
                  style={{
                    background: 'radial-gradient(circle, rgb(0, 200, 255), transparent)',
                  }}
                ></div>
              </div>

              <div 
                className="relative p-10 overflow-hidden group transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: 'rgba(0, 20, 10, 0.5)',
                  border: '2px solid rgba(0, 255, 150, 0.3)',
                  borderRadius: '16px',
                  boxShadow: '0 0 30px rgba(0, 255, 150, 0.2)',
                }}
              >
                <div 
                  className="absolute top-0 left-0 w-full h-1"
                  style={{ 
                    backgroundColor: 'rgb(0, 255, 150)',
                    boxShadow: '0 0 15px rgb(0, 255, 150)',
                  }}
                ></div>
                
                <div 
                  className="text-xs font-mono uppercase tracking-widest mb-4"
                  style={{ color: 'rgb(100, 150, 120)' }}
                >
                  Security
                </div>
                
                <div 
                  className="text-5xl font-black mb-3"
                  style={{ 
                    color: 'rgb(0, 255, 150)',
                    textShadow: '0 0 15px rgb(0, 255, 150)',
                  }}
                >
                  AES-512
                </div>
                
                <div 
                  className="text-sm uppercase tracking-wide"
                  style={{ color: 'rgb(150, 200, 180)' }}
                >
                  Encryption
                </div>

                <div 
                  className="absolute bottom-0 right-0 w-16 h-16 opacity-10"
                  style={{
                    background: 'radial-gradient(circle, rgb(0, 255, 150), transparent)',
                  }}
                ></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "UINEXNeonCard",
    category: "Cards",
    code: `
function UINEXNeonCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-8 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '10s' }}></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-to-tl from-purple-500/20 to-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '13s', animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '9s' }}></div>
      </div>

      {/* UINEX Card - HOVER EFFECTS ENHANCED */}
      <div className="relative w-96 max-w-md p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 rounded-3xl shadow-2xl transition-all duration-700 ease-out hover:scale-110 hover:rotate-2 hover:shadow-cyan-500/50 hover:shadow-[0_0_80px_rgba(34,211,238,0.6)]">
        {/* Neon glow border - STRONGER ON HOVER */}
        <div className="absolute -inset-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-40 transition-opacity duration-700 hover:opacity-100 animate-pulse" style={{ animationDuration: '3s' }}></div>

        {/* Glass card body */}
        <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-3xl p-8 overflow-hidden border-2 border-cyan-400/30 transition-all duration-700 hover:border-cyan-400/80 hover:bg-slate-800/90">
          {/* Gradient overlay - ANIMATED ON HOVER */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 transition-all duration-700 hover:from-cyan-500/30 hover:to-purple-500/30"></div>

          {/* Animated corner accent - EXPANDS ON HOVER */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-cyan-400/40 to-blue-500/40 rounded-bl-full blur-xl transition-all duration-1000 hover:scale-[2.5] hover:opacity-80"></div>
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-purple-400/40 to-pink-500/40 rounded-tr-full blur-xl transition-all duration-1000 hover:scale-[2.5] hover:opacity-80"></div>

          {/* SPINNING RINGS EFFECT ON HOVER */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 hover:opacity-100">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-4 border-cyan-400/30 rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-4 border-purple-400/30 rounded-full animate-spin" style={{ animationDuration: '6s', animationDirection: 'reverse' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Status badge - GLOWS ON HOVER */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 backdrop-blur-md border border-cyan-400/30 mb-6 shadow-lg transition-all duration-500 hover:bg-cyan-500/30 hover:border-cyan-400/80 hover:shadow-cyan-400/60 hover:shadow-xl hover:scale-110">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" style={{ animationDuration: '2s' }}></div>
              <span className="text-xs font-bold bg-gradient-to-r from-cyan-300 to-blue-300 bg-clip-text text-transparent tracking-widest uppercase">
                UINEX Elite
              </span>
            </div>

            {/* Title with glitch effect - SHAKES ON HOVER */}
            <h2 className="text-5xl font-black mb-4 relative transition-all duration-300 hover:scale-105 hover:text-shadow-lg">
              <span className="bg-gradient-to-r from-cyan-300 via-blue-200 to-purple-300 bg-clip-text text-transparent drop-shadow-lg transition-all duration-300 hover:from-cyan-200 hover:via-white hover:to-purple-200">
                Neon Fusion
              </span>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent skew-x-12 translate-x-full group-hover:translate-x-[-250%] transition-transform duration-1200 ease-in-out"></div>
            </h2>

            {/* Subtitle - FADES IN BRIGHTER */}
            <p className="text-slate-300 text-base mb-10 leading-relaxed transition-all duration-500 hover:text-slate-100 hover:scale-105">
              Experience the future of technology with cutting-edge UINEXpunk aesthetics and limitless possibilities.
            </p>

            {/* Stats grid - FLIP & GLOW ON HOVER */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              <div className="relative transition-all duration-500 hover:scale-125 hover:-rotate-6 hover:z-20">
                <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur rounded-xl p-4 border border-cyan-400/20 transition-all duration-500 hover:border-cyan-400/80 hover:bg-cyan-500/30 hover:shadow-lg hover:shadow-cyan-400/50">
                  <div className="text-2xl font-bold bg-gradient-to-br from-cyan-300 to-cyan-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-110">99%</div>
                  <div className="text-xs text-slate-400 mt-1 transition-colors duration-300 hover:text-cyan-300">Speed</div>
                </div>
              </div>
              <div className="relative transition-all duration-500 hover:scale-125 hover:rotate-0 hover:z-20">
                <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur rounded-xl p-4 border border-blue-400/20 transition-all duration-500 hover:border-blue-400/80 hover:bg-blue-500/30 hover:shadow-lg hover:shadow-blue-400/50">
                  <div className="text-2xl font-bold bg-gradient-to-br from-blue-300 to-blue-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-110">24/7</div>
                  <div className="text-xs text-slate-400 mt-1 transition-colors duration-300 hover:text-blue-300">Active</div>
                </div>
              </div>
              <div className="relative transition-all duration-500 hover:scale-125 hover:rotate-6 hover:z-20">
                <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur rounded-xl p-4 border border-purple-400/20 transition-all duration-500 hover:border-purple-400/80 hover:bg-purple-500/30 hover:shadow-lg hover:shadow-purple-400/50">
                  <div className="text-2xl font-bold bg-gradient-to-br from-purple-300 to-purple-500 bg-clip-text text-transparent transition-all duration-300 hover:scale-110">A+</div>
                  <div className="text-xs text-slate-400 mt-1 transition-colors duration-300 hover:text-purple-300">Grade</div>
                </div>
              </div>
            </div>

            {/* Feature chips - BOUNCE ON HOVER */}
            <div className="flex flex-wrap gap-2 mb-8">
              <span className="px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/30 text-cyan-300 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-cyan-500/40 hover:border-cyan-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-400/50 cursor-pointer">
                AI Powered
              </span>
              <span className="px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-blue-500/40 hover:border-blue-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-blue-400/50 cursor-pointer">
                Encrypted
              </span>
              <span className="px-3 py-1 rounded-full bg-purple-500/20 border border-purple-400/30 text-purple-300 text-xs font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-purple-500/40 hover:border-purple-400/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-400/50 cursor-pointer">
                Cloud Ready
              </span>
            </div>

            {/* Action button - POWERFUL HOVER EFFECT */}
            <button className="relative w-full py-5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:shadow-cyan-500/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.6)] hover:scale-105">
              {/* Button background layers */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 transition-all duration-500 hover:from-cyan-400 hover:via-blue-400 hover:to-purple-500"></div>
              
              {/* Animated shine - ALWAYS MOVING ON HOVER */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/50 to-white/0 -translate-x-full transition-transform duration-700 hover:translate-x-full hover:duration-1000"></div>
              
              {/* Hover glow - INTENSE */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 opacity-0 blur-2xl transition-all duration-500 hover:opacity-100"></div>

              {/* Button text - MOVES & SCALES */}
              <span className="relative z-10 text-white font-bold text-lg tracking-wide flex items-center justify-center gap-3 uppercase transition-all duration-500 hover:scale-110 hover:tracking-widest">
                Access Now
                <svg className="w-6 h-6 transition-all duration-500 hover:rotate-90 hover:scale-125 hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </span>
            </button>

            {/* Price reveal - SLIDES UP & GLOWS */}
            <div className="mt-6 text-center opacity-0 -translate-y-8 transition-all duration-700 hover:opacity-100 hover:translate-y-0">
              <div className="inline-flex items-baseline gap-2 transition-all duration-500 hover:scale-110">
                <span className="text-5xl font-black bg-gradient-to-r from-cyan-300 via-blue-300 to-purple-300 bg-clip-text text-transparent transition-all duration-500 hover:from-cyan-200 hover:via-white hover:to-purple-200">
                  $199
                </span>
                <span className="text-lg text-slate-400 transition-colors duration-300 hover:text-slate-200">/month</span>
              </div>
              <div className="text-xs text-slate-500 mt-2 tracking-wider uppercase transition-all duration-300 hover:text-cyan-300 hover:tracking-widest">Elite Access • Limited Slots</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

    
  `
  },
  {
    name: "DiamondPremiumCard",
    category: "Cards",
    code: `
function DiamondPremiumCard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-slate-950 to-violet-950 flex items-center justify-center p-8 overflow-hidden relative">
      {/* Animated background orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-16 left-20 w-96 h-96 bg-gradient-to-br from-emerald-500/20 to-teal-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '11s' }}></div>
        <div className="absolute bottom-16 right-16 w-80 h-80 bg-gradient-to-tl from-violet-500/20 to-fuchsia-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '14s', animationDelay: '2.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-sky-500/10 to-emerald-500/10 rounded-full blur-3xl animate-ping" style={{ animationDuration: '10s' }}></div>
      </div>

      {/* Diamond Premium Card - SUPER HOVER EFFECTS */}
      <div className="relative w-96 max-w-md p-1 bg-gradient-to-br from-emerald-400 via-teal-500 to-violet-600 rounded-3xl shadow-2xl transition-all duration-700 ease-out hover:scale-110 hover:-rotate-3 hover:shadow-emerald-500/60 hover:shadow-[0_0_100px_rgba(52,211,153,0.7)]">
        {/* Outer glow - INTENSE ON HOVER */}
        <div className="absolute -inset-3 bg-gradient-to-r from-emerald-400 via-teal-500 to-violet-600 rounded-3xl blur-2xl opacity-50 transition-opacity duration-700 hover:opacity-100 animate-pulse" style={{ animationDuration: '4s' }}></div>

        {/* Main card body */}
        <div className="relative h-full bg-slate-900/95 backdrop-blur-2xl rounded-3xl p-8 overflow-hidden border-2 border-emerald-400/30 transition-all duration-700 hover:border-emerald-400/90 hover:bg-slate-800/95">
          {/* Gradient background overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-violet-500/10 transition-all duration-700 hover:from-emerald-500/30 hover:to-violet-500/30"></div>

          {/* Corner decorative elements - EXPAND ON HOVER */}
          <div className="absolute -top-8 -left-8 w-40 h-40 bg-gradient-to-br from-emerald-400/50 to-teal-500/50 rounded-full blur-2xl transition-all duration-1000 hover:scale-[2] hover:opacity-90"></div>
          <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-tr from-violet-400/50 to-fuchsia-500/50 rounded-full blur-2xl transition-all duration-1000 hover:scale-[2] hover:opacity-90"></div>

          {/* ROTATING DIAMOND RINGS ON HOVER */}
          <div className="absolute inset-0 opacity-0 transition-opacity duration-700 hover:opacity-100">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 border-4 border-emerald-400/40 rounded-full animate-spin" style={{ animationDuration: '10s' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 border-4 border-violet-400/40 rounded-full animate-spin" style={{ animationDuration: '7s', animationDirection: 'reverse' }}></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-2 border-teal-400/30 rounded-full animate-spin" style={{ animationDuration: '5s' }}></div>
          </div>

          {/* Content */}
          <div className="relative z-10">
            {/* Premium badge - GLOWS & SCALES */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-emerald-500/10 backdrop-blur-md border border-emerald-400/30 mb-6 shadow-lg transition-all duration-500 hover:bg-emerald-500/30 hover:border-emerald-400/90 hover:shadow-emerald-400/70 hover:shadow-2xl hover:scale-110">
              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-emerald-400 to-teal-400 animate-pulse" style={{ animationDuration: '2s' }}></div>
              <span className="text-sm font-bold bg-gradient-to-r from-emerald-200 to-teal-200 bg-clip-text text-transparent tracking-widest uppercase">
                Diamond Elite
              </span>
            </div>

            {/* Title - SHAKES & GLOWS */}
            <h2 className="text-5xl font-black mb-4 relative transition-all duration-500 hover:scale-110 hover:tracking-wider">
              <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-violet-300 bg-clip-text text-transparent drop-shadow-2xl transition-all duration-500 hover:from-emerald-200 hover:via-white hover:to-violet-200">
                Crystal Nexus
              </span>
              {/* Moving shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent -skew-x-12 translate-x-full transition-transform duration-1000 hover:translate-x-[-300%]"></div>
            </h2>

            {/* Description - BRIGHTENS */}
            <p className="text-slate-300 text-base mb-10 leading-relaxed transition-all duration-500 hover:text-white hover:scale-105 hover:tracking-wide">
              Unlock infinite potential with diamond-grade precision and world-class performance that transcends boundaries.
            </p>

            {/* Premium stats - FLIP & GLOW INDIVIDUALLY */}
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="relative transition-all duration-500 hover:scale-125 hover:-rotate-12 hover:z-20">
                <div className="bg-gradient-to-br from-emerald-500/15 to-teal-500/15 backdrop-blur rounded-2xl p-4 border border-emerald-400/30 transition-all duration-500 hover:border-emerald-400/90 hover:bg-emerald-500/35 hover:shadow-2xl hover:shadow-emerald-400/60">
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-emerald-300 transition-all duration-500 hover:scale-125 hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400 text-center transition-colors duration-300 hover:text-emerald-300 font-semibold">Premium</div>
                </div>
              </div>
              <div className="relative transition-all duration-500 hover:scale-125 hover:rotate-0 hover:z-20">
                <div className="bg-gradient-to-br from-teal-500/15 to-sky-500/15 backdrop-blur rounded-2xl p-4 border border-teal-400/30 transition-all duration-500 hover:border-teal-400/90 hover:bg-teal-500/35 hover:shadow-2xl hover:shadow-teal-400/60">
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-teal-300 transition-all duration-500 hover:scale-125 hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400 text-center transition-colors duration-300 hover:text-teal-300 font-semibold">Lightning</div>
                </div>
              </div>
              <div className="relative transition-all duration-500 hover:scale-125 hover:rotate-12 hover:z-20">
                <div className="bg-gradient-to-br from-violet-500/15 to-fuchsia-500/15 backdrop-blur rounded-2xl p-4 border border-violet-400/30 transition-all duration-500 hover:border-violet-400/90 hover:bg-violet-500/35 hover:shadow-2xl hover:shadow-violet-400/60">
                  <div className="flex justify-center mb-2">
                    <svg className="w-8 h-8 text-violet-300 transition-all duration-500 hover:scale-125 hover:rotate-180" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div className="text-xs text-slate-400 text-center transition-colors duration-300 hover:text-violet-300 font-semibold">Certified</div>
                </div>
              </div>
            </div>

            {/* Features list - SLIDES IN */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 transition-all duration-500 hover:translate-x-2 hover:scale-105">
                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                <span className="text-slate-300 text-sm transition-colors duration-300 hover:text-emerald-300">Quantum-Speed Processing</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-500 hover:translate-x-2 hover:scale-105">
                <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" style={{ animationDelay: '0.3s' }}></div>
                <span className="text-slate-300 text-sm transition-colors duration-300 hover:text-teal-300">Military-Grade Encryption</span>
              </div>
              <div className="flex items-center gap-3 transition-all duration-500 hover:translate-x-2 hover:scale-105">
                <div className="w-2 h-2 rounded-full bg-violet-400 animate-pulse" style={{ animationDelay: '0.6s' }}></div>
                <span className="text-slate-300 text-sm transition-colors duration-300 hover:text-violet-300">24/7 Elite Support</span>
              </div>
            </div>

            {/* Action button - MEGA HOVER */}
            <button className="relative w-full py-5 rounded-2xl overflow-hidden shadow-2xl transition-all duration-500 hover:-translate-y-4 hover:shadow-emerald-500/60 hover:shadow-[0_25px_70px_rgba(52,211,153,0.7)] hover:scale-105">
              {/* Button gradient background */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-violet-600 transition-all duration-500 hover:from-emerald-400 hover:via-teal-400 hover:to-violet-500"></div>
              
              {/* Animated shine wave */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/60 to-white/0 -translate-x-full transition-transform duration-700 hover:translate-x-full hover:duration-1000"></div>
              
              {/* Outer glow on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-violet-500 opacity-0 blur-2xl transition-all duration-500 hover:opacity-100"></div>

              {/* Button text */}
              <span className="relative z-10 text-white font-bold text-lg tracking-wide flex items-center justify-center gap-3 uppercase transition-all duration-500 hover:scale-110 hover:tracking-widest">
                Activate Diamond
                <svg className="w-6 h-6 transition-all duration-500 hover:rotate-90 hover:scale-150 hover:translate-x-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </span>
            </button>

            {/* Price section - DRAMATIC REVEAL */}
            <div className="mt-6 text-center opacity-0 -translate-y-10 transition-all duration-700 hover:opacity-100 hover:translate-y-0">
              <div className="inline-flex items-baseline gap-2 transition-all duration-500 hover:scale-115">
                <span className="text-6xl font-black bg-gradient-to-r from-emerald-300 via-teal-300 to-violet-300 bg-clip-text text-transparent transition-all duration-500 hover:from-emerald-200 hover:via-white hover:to-violet-200">
                  $399
                </span>
                <span className="text-xl text-slate-400 transition-colors duration-300 hover:text-slate-100">/month</span>
              </div>
              <div className="text-xs text-slate-500 mt-3 tracking-widest uppercase transition-all duration-500 hover:text-emerald-300 hover:tracking-[0.3em] hover:scale-110">
                Diamond Tier • Exclusive Access
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "FuturisticFooter",
    category: "Footer",
    code: `
function FuturisticFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, #00ff88 0px, transparent 1px, transparent 50px, #00ff88 51px), repeating-linear-gradient(90deg, #00ff88 0px, transparent 1px, transparent 50px, #00ff88 51px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-10 left-10 w-80 h-80 rounded-full opacity-10 blur-3xl bg-green-400"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 rounded-full opacity-10 blur-3xl bg-cyan-400"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl bg-emerald-400"></div>

      <footer className="relative z-10 w-full">
        
        {/* Top Accent Line */}
        <div className="h-px mb-20 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-50 blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-cyan-400 rounded-lg flex items-center justify-center">
                    <span className="text-2xl font-black text-black">F</span>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">FUSION</h2>
                    <p className="text-xs font-bold text-green-400 tracking-widest">TECH LABS</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Building next-generation digital solutions with cutting-edge technology and innovative design thinking.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                <div className="text-center p-4 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-black text-green-400 mb-1">250+</div>
                  <div className="text-xs text-gray-500 font-semibold">Projects</div>
                </div>
                <div className="text-center p-4 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-black text-cyan-400 mb-1">98%</div>
                  <div className="text-xs text-gray-500 font-semibold">Success</div>
                </div>
                <div className="text-center p-4 bg-gray-900 border border-gray-800 rounded-lg">
                  <div className="text-2xl font-black text-emerald-400 mb-1">24/7</div>
                  <div className="text-xs text-gray-500 font-semibold">Online</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex gap-3">
                {['Twitter', 'LinkedIn', 'GitHub', 'Dribbble'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-gray-800 rounded-lg transition-all duration-300 hover:border-green-400 hover:bg-green-400 hover:bg-opacity-10"
                    onMouseEnter={() => setHoveredSocial(platform)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    <span className="text-sm font-bold" style={{
                      color: hoveredSocial === platform ? '#4ade80' : '#6b7280'
                    }}>
                      {platform[0]}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-12">
              
              {[
                { 
                  title: 'Products', 
                  links: ['Dashboard', 'Analytics', 'Reports', 'Automation', 'Integration'] 
                },
                { 
                  title: 'Resources', 
                  links: ['Documentation', 'API Reference', 'Guides', 'Blog', 'Support'] 
                },
                { 
                  title: 'Company', 
                  links: ['About', 'Careers', 'Press', 'Contact', 'Legal'] 
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-black text-white mb-5 tracking-wide">
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm transition-colors duration-300 inline-block"
                          style={{
                            color: hoveredLink === link ? '#4ade80' : '#9ca3af'
                          }}
                          onMouseEnter={() => setHoveredLink(link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Newsletter Section */}
          <div className="mb-20 p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <h3 className="text-xl font-black text-white">Stay Updated</h3>
              </div>
              <p className="text-gray-400 text-sm mb-6">
                Subscribe to our newsletter for the latest updates, insights, and exclusive content.
              </p>
              <div className="flex gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-black border border-gray-800 rounded-lg text-sm text-white focus:outline-none focus:border-green-400 transition-colors duration-300"
                />
                <button className="px-6 py-3 bg-green-400 text-black font-bold text-sm rounded-lg hover:bg-green-300 transition-colors duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-gray-900 flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-500">
              <p>© 2025 Fusion Tech Labs. All rights reserved.</p>
              <div className="flex gap-6">
                {['Privacy', 'Terms', 'Cookies', 'Security'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="transition-colors duration-300"
                    style={{
                      color: hoveredLink === item ? '#4ade80' : '#6b7280'
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3 px-4 py-2 bg-gray-900 border border-gray-800 rounded-full">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
              </div>
              <span className="text-xs font-bold text-green-400">SYSTEMS OPERATIONAL</span>
            </div>

          </div>

        </div>

        {/* Bottom Gradient Line */}
        <div className="h-1 mt-8 bg-gradient-to-r from-transparent via-green-400 to-transparent"></div>

      </footer>
    </div>
  );
}

    
  `
  },
  {
    name: "HyperFooter",
    category: "Footer",
    code: `
function HyperFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [emailFocus, setEmailFocus] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-black flex items-end relative overflow-hidden">
      
      {/* Diagonal Lines Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 35px, #f97316 35px, #f97316 36px), repeating-linear-gradient(-45deg, transparent, transparent 35px, #3b82f6 35px, #3b82f6 36px)',
        }}></div>
      </div>

      {/* Glowing Circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-orange-500"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl bg-blue-500"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 rounded-full opacity-15 blur-3xl bg-purple-500"></div>

      <footer className="relative z-10 w-full">
        
        {/* Top Border with Dots */}
        <div className="flex items-center justify-center gap-2 mb-16">
          <div className="h-px flex-1 bg-gradient-to-r from-transparent to-orange-500"></div>
          <div className="flex gap-2">
            <div className="w-2 h-2 rounded-full bg-orange-500"></div>
            <div className="w-2 h-2 rounded-full bg-blue-500"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500"></div>
          </div>
          <div className="h-px flex-1 bg-gradient-to-l from-transparent to-blue-500"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-20">
          
          {/* Hero Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-24">
            
            {/* Left - Brand & Info */}
            <div>
              {/* Logo */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16">
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-500 to-blue-500 rounded-xl rotate-6"></div>
                    <div className="absolute inset-0 bg-black rounded-xl flex items-center justify-center">
                      <span className="text-3xl font-black bg-gradient-to-r from-orange-500 to-blue-500 bg-clip-text text-transparent">H</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-white mb-1">HYPERNOVA</h2>
                    <p className="text-xs font-bold tracking-widest text-orange-500">DIGITAL AGENCY</p>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8">
                  We create stunning digital experiences that captivate audiences and drive results. 
                  Your vision, our expertise, unlimited possibilities.
                </p>
              </div>

              {/* Achievement Cards */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { number: '500+', label: 'Happy Clients', color: 'orange' },
                  { number: '1000+', label: 'Projects Done', color: 'blue' },
                  { number: '50+', label: 'Team Members', color: 'purple' },
                  { number: '15+', label: 'Years Experience', color: 'pink' },
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="p-5 bg-slate-900 border rounded-xl transition-all duration-300 cursor-pointer"
                    style={{
                      borderColor: hoveredCard === i ? (
                        item.color === 'orange' ? '#f97316' :
                        item.color === 'blue' ? '#3b82f6' :
                        item.color === 'purple' ? '#a855f7' : '#ec4899'
                      ) : '#1e293b',
                      transform: hoveredCard === i ? 'translateY(-4px)' : 'translateY(0)',
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="text-3xl font-black mb-2" style={{
                      color: item.color === 'orange' ? '#f97316' :
                             item.color === 'blue' ? '#3b82f6' :
                             item.color === 'purple' ? '#a855f7' : '#ec4899'
                    }}>
                      {item.number}
                    </div>
                    <div className="text-xs font-semibold text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Social Media */}
              <div className="flex flex-wrap gap-3">
                {[
                  { name: 'Facebook', icon: 'f', color: '#3b82f6' },
                  { name: 'Twitter', icon: 'X', color: '#000000' },
                  { name: 'Instagram', icon: 'IG', color: '#ec4899' },
                  { name: 'LinkedIn', icon: 'in', color: '#0ea5e9' },
                  { name: 'YouTube', icon: 'YT', color: '#ef4444' },
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center border border-slate-700 rounded-lg font-black text-sm transition-all duration-300"
                    style={{
                      backgroundColor: hoveredLink === social.name ? social.color : 'transparent',
                      borderColor: hoveredLink === social.name ? social.color : '#334155',
                      color: hoveredLink === social.name ? '#ffffff' : '#64748b',
                    }}
                    onMouseEnter={() => setHoveredLink(social.name)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Right - Newsletter */}
            <div className="relative">
              <div className="sticky top-8">
                <div className="p-8 bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-slate-800 rounded-2xl">
                  
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-blue-500 rounded-full mb-6">
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                    <span className="text-xs font-black text-white tracking-wider">JOIN 10K+ SUBSCRIBERS</span>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3">
                    Never Miss<br />An Update
                  </h3>
                  
                  <p className="text-gray-400 mb-8 leading-relaxed">
                    Get exclusive insights, tips, and updates delivered straight to your inbox every week.
                  </p>

                  {/* Email Form */}
                  <div className="space-y-4 mb-6">
                    <div>
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-slate-950 border-2 rounded-xl text-white text-sm font-medium focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: emailFocus ? '#f97316' : '#1e293b'
                        }}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="your@email.com"
                        className="w-full px-5 py-4 bg-slate-950 border-2 rounded-xl text-white text-sm font-medium focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: emailFocus ? '#3b82f6' : '#1e293b'
                        }}
                        onFocus={() => setEmailFocus(true)}
                        onBlur={() => setEmailFocus(false)}
                      />
                    </div>
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-orange-500 to-blue-500 text-white font-black rounded-xl hover:scale-105 transition-transform duration-300">
                      SUBSCRIBE NOW →
                    </button>
                  </div>

                  <p className="text-xs text-gray-600">
                    🔒 We respect your privacy. Unsubscribe at any time.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16 pb-16 border-b border-slate-800">
            
            {[
              { 
                title: 'Services',
                icon: '⚡',
                links: ['Web Design', 'App Development', 'Branding', 'SEO Marketing', 'Consulting'] 
              },
              { 
                title: 'Work',
                icon: '🎨',
                links: ['Portfolio', 'Case Studies', 'Testimonials', 'Clients', 'Awards'] 
              },
              { 
                title: 'Resources',
                icon: '📚',
                links: ['Blog', 'Ebooks', 'Webinars', 'Tools', 'Templates'] 
              },
              { 
                title: 'Company',
                icon: '🏢',
                links: ['About Us', 'Careers', 'Team', 'Contact', 'FAQ'] 
              },
            ].map((section, idx) => (
              <div key={idx}>
                <div className="flex items-center gap-2 mb-6">
                  <span className="text-xl">{section.icon}</span>
                  <h4 className="text-sm font-black text-white tracking-wide">
                    {section.title}
                  </h4>
                </div>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-medium transition-all duration-300 inline-flex items-center gap-2"
                        style={{
                          color: hoveredLink === link ? '#f97316' : '#94a3b8'
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        {hoveredLink === link && <span className="text-orange-500">→</span>}
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-sm text-gray-500 font-medium">
                © 2025 HyperNova. Crafted with ❤️
              </p>
              <div className="flex gap-6 text-sm">
                {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="font-medium transition-colors duration-300"
                    style={{
                      color: hoveredLink === item ? '#3b82f6' : '#64748b'
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Indicator */}
            <div className="flex items-center gap-3 px-5 py-2 bg-slate-900 border border-slate-700 rounded-full">
              <div className="relative">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
              </div>
              <span className="text-xs font-bold text-green-500">ALL SYSTEMS ONLINE</span>
            </div>

          </div>

        </div>

        {/* Bottom Gradient Bar */}
        <div className="h-1.5 mt-10">
          <div className="h-full bg-gradient-to-r from-orange-500 via-purple-500 to-blue-500"></div>
        </div>

      </footer>
    </div>
  );
}    
  `
  },
  {
    name: "UINEXpunkFooter",
    category: "Footer",
    code: `
function UINEXpunkFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredBox, setHoveredBox] = useState(null);
  const [emailActive, setEmailActive] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cpath d="M30 0l25.98 15v30L30 60 4.02 45V15z" fill="none" stroke="%2300ffff" stroke-width="1"/%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }}></div>
      </div>

      {/* Neon Glow Spots */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl bg-cyan-500"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-15 blur-3xl bg-yellow-500"></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl bg-lime-500"></div>

      <footer className="relative z-10 w-full">
        
        {/* Neon Top Border */}
        <div className="relative mb-20">
          <div className="h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
          <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-400 to-transparent blur-sm"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Top Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            
            {/* Brand Column */}
            <div className="lg:col-span-1">
              
              {/* Logo */}
              <div className="mb-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-14 h-14 border-2 border-cyan-400" style={{
                    clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                  }}>
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-yellow-400 opacity-20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-2xl font-black text-cyan-400">N</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-cyan-400 tracking-tighter" style={{
                      textShadow: '0 0 20px rgba(34, 211, 238, 0.8)'
                    }}>
                      NEOTECH
                    </h2>
                    <p className="text-xs font-bold tracking-widest text-yellow-400">DIGITAL FUTURE</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8 font-mono">
                  &gt; Pioneering the digital revolution with cutting-edge technology and futuristic design solutions.
                </p>
              </div>

              {/* Glitch Stats */}
              <div className="space-y-3 mb-8">
                {[
                  { label: 'ACTIVE_USERS', value: '999K+', color: 'cyan' },
                  { label: 'UPTIME_STATUS', value: '99.9%', color: 'yellow' },
                  { label: 'RESPONSE_TIME', value: '<50ms', color: 'lime' },
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between p-3 bg-gray-900 border-l-4 font-mono cursor-pointer transition-all duration-300"
                    style={{
                      borderLeftColor: hoveredBox === i ? 
                        (stat.color === 'cyan' ? '#22d3ee' : stat.color === 'yellow' ? '#eab308' : '#84cc16') : 
                        '#1f2937',
                      backgroundColor: hoveredBox === i ? '#111827' : '#111827'
                    }}
                    onMouseEnter={() => setHoveredBox(i)}
                    onMouseLeave={() => setHoveredBox(null)}
                  >
                    <span className="text-xs text-gray-500 font-bold">[{stat.label}]</span>
                    <span className="text-sm font-black" style={{
                      color: stat.color === 'cyan' ? '#22d3ee' : stat.color === 'yellow' ? '#eab308' : '#84cc16'
                    }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex gap-2">
                {['TW', 'FB', 'IG', 'LI', 'GH'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-10 h-10 flex items-center justify-center border border-gray-800 font-black text-xs font-mono transition-all duration-300"
                    style={{
                      backgroundColor: hoveredLink === platform ? '#22d3ee' : 'transparent',
                      borderColor: hoveredLink === platform ? '#22d3ee' : '#1f2937',
                      color: hoveredLink === platform ? '#000000' : '#6b7280',
                      boxShadow: hoveredLink === platform ? '0 0 20px rgba(34, 211, 238, 0.5)' : 'none'
                    }}
                    onMouseEnter={() => setHoveredLink(platform)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

            {/* Links Grid */}
            <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-10">
              
              {[
                {
                  title: 'PRODUCTS',
                  links: ['Dashboard', 'Analytics', 'Reports', 'Automation', 'Security']
                },
                {
                  title: 'DEVELOPERS',
                  links: ['API Docs', 'GitHub', 'SDK Tools', 'Plugins', 'CLI']
                },
                {
                  title: 'SUPPORT',
                  links: ['Help Center', 'Community', 'Contact', 'Status', 'Updates']
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-xs font-black text-cyan-400 mb-5 tracking-widest font-mono flex items-center gap-2">
                    <span className="text-yellow-400">&gt;</span>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm font-medium font-mono transition-all duration-300 inline-block"
                          style={{
                            color: hoveredLink === link ? '#22d3ee' : '#6b7280',
                            textShadow: hoveredLink === link ? '0 0 10px rgba(34, 211, 238, 0.8)' : 'none',
                            transform: hoveredLink === link ? 'translateX(5px)' : 'translateX(0)'
                          }}
                          onMouseEnter={() => setHoveredLink(link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          {hoveredLink === link && '>> '}{link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Terminal-Style Newsletter */}
          <div className="mb-16">
            <div className="relative bg-gray-950 border-2 border-gray-800 overflow-hidden"
              style={{
                borderColor: emailActive ? '#22d3ee' : '#1f2937'
              }}
            >
              {/* Terminal Header */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-900 border-b border-gray-800">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-xs font-mono text-gray-500 ml-2">newsletter.exe</span>
              </div>

              {/* Terminal Content */}
              <div className="p-6 font-mono">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400 text-sm font-bold">$</span>
                  <span className="text-lime-400 text-sm">subscribe --to=weekly-updates</span>
                </div>
                
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  &gt; Access exclusive tech insights, product launches, and developer resources delivered to your inbox.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input
                    type="text"
                    placeholder="user@domain.com"
                    className="md:col-span-2 px-4 py-3 bg-black border-2 border-gray-800 text-cyan-400 text-sm font-mono focus:outline-none transition-all duration-300"
                    style={{
                      borderColor: emailActive ? '#22d3ee' : '#1f2937',
                      boxShadow: emailActive ? '0 0 20px rgba(34, 211, 238, 0.3)' : 'none'
                    }}
                    onFocus={() => setEmailActive(true)}
                    onBlur={() => setEmailActive(false)}
                  />
                  <button 
                    className="px-6 py-3 bg-cyan-400 text-black font-black text-sm font-mono hover:bg-yellow-400 transition-all duration-300"
                    style={{
                      boxShadow: '0 0 20px rgba(34, 211, 238, 0.5)'
                    }}
                  >
                    EXECUTE &gt;&gt;
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-4 font-mono">&gt; Encrypted connection | Unsubscribe anytime</p>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="pt-8 border-t border-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col sm:flex-row items-center gap-6 font-mono">
                <p className="text-xs text-gray-600">
                  &copy; 2025 NEOTECH_LABS | ALL_RIGHTS_RESERVED
                </p>
                <div className="flex gap-6 text-xs">
                  {['PRIVACY.md', 'TERMS.txt', 'LICENSE'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="transition-all duration-300"
                      style={{
                        color: hoveredLink === item ? '#22d3ee' : '#6b7280',
                        textShadow: hoveredLink === item ? '0 0 10px rgba(34, 211, 238, 0.8)' : 'none'
                      }}
                      onMouseEnter={() => setHoveredLink(item)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* System Status */}
              <div className="flex items-center gap-3 px-4 py-2 bg-gray-900 border border-gray-800 font-mono">
                <div className="flex gap-1">
                  <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse"></div>
                  <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '0.3s'}}></div>
                  <div className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" style={{animationDelay: '0.6s'}}></div>
                </div>
                <span className="text-xs font-bold text-lime-400">[SYSTEM_ONLINE]</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Neon Strip */}
        <div className="relative mt-10">
          <div className="h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-lime-400"></div>
          <div className="absolute inset-0 h-1 bg-gradient-to-r from-cyan-400 via-yellow-400 to-lime-400 blur-sm opacity-70"></div>
        </div>

      </footer>
    </div>
  );
}    
  `
  },
  {
    name: "LuxuryFooter",
    category: "Footer",
    code: `
function LuxuryFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <div className="min-h-screen bg-zinc-950 flex items-end relative overflow-hidden">
      
      {/* Elegant Lines Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(to right, #d4af37 1px, transparent 1px), linear-gradient(to bottom, #d4af37 1px, transparent 1px)',
          backgroundSize: '80px 80px'
        }}></div>
      </div>

      {/* Subtle Gold Glow */}
      <div className="absolute top-0 left-1/3 w-96 h-96 rounded-full opacity-10 blur-3xl bg-yellow-600"></div>
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full opacity-10 blur-3xl bg-amber-600"></div>

      <footer className="relative z-10 w-full">
        
        {/* Elegant Top Border */}
        <div className="flex items-center justify-center mb-16">
          <div className="w-24 h-px bg-gradient-to-r from-transparent to-yellow-600"></div>
          <div className="mx-4">
            <div className="w-2 h-2 border-2 border-yellow-600 rotate-45"></div>
          </div>
          <div className="w-24 h-px bg-gradient-to-l from-transparent to-yellow-600"></div>
        </div>

        <div className="max-w-7xl mx-auto px-10 py-20">
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
            
            {/* Brand Section */}
            <div className="lg:col-span-4">
              
              {/* Luxury Logo */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="relative w-16 h-16 border border-yellow-600 flex items-center justify-center">
                    <div className="absolute inset-2 border border-yellow-600"></div>
                    <span className="text-2xl font-serif italic text-yellow-600">L</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-serif text-white mb-1 tracking-wide">
                      LUMIÈRE
                    </h2>
                    <p className="text-xs tracking-widest text-yellow-600 font-light">PREMIUM EXPERIENCES</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-loose">
                  Crafting exceptional experiences with timeless elegance and unparalleled sophistication since 2010.
                </p>
              </div>

              {/* Awards & Recognition */}
              <div className="space-y-4 mb-10">
                {[
                  { title: 'Best Design Agency', year: '2024' },
                  { title: 'Innovation Excellence', year: '2023' },
                  { title: 'Client Satisfaction', year: '2022' },
                ].map((award, i) => (
                  <div 
                    key={i}
                    className="flex items-center justify-between py-3 border-b transition-all duration-300"
                    style={{
                      borderColor: hoveredCard === i ? '#d4af37' : '#27272a'
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <span className="text-sm text-gray-300 font-light">{award.title}</span>
                    <span className="text-xs text-yellow-600 font-semibold">{award.year}</span>
                  </div>
                ))}
              </div>

              {/* Contact Info */}
              <div className="space-y-3 text-sm text-gray-400">
                <p className="flex items-center gap-3">
                  <span className="text-yellow-600">◆</span>
                  contact@lumiere.studio
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-yellow-600">◆</span>
                  +1 (555) 123-4567
                </p>
                <p className="flex items-center gap-3">
                  <span className="text-yellow-600">◆</span>
                  New York, NY 10013
                </p>
              </div>
            </div>

            {/* Navigation Links */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12">
              
              {[
                {
                  title: 'Services',
                  links: ['Branding', 'Web Design', 'Photography', 'Consulting', 'Strategy']
                },
                {
                  title: 'Portfolio',
                  links: ['Featured Work', 'Case Studies', 'Clients', 'Awards', 'Gallery']
                },
                {
                  title: 'Studio',
                  links: ['About Us', 'Our Team', 'Careers', 'Culture', 'Location']
                },
                {
                  title: 'Resources',
                  links: ['Blog', 'Insights', 'Events', 'Press', 'Contact']
                },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-light text-yellow-600 mb-6 tracking-wider">
                    {section.title}
                  </h4>
                  <ul className="space-y-4">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm font-light transition-all duration-300 inline-block relative"
                          style={{
                            color: hoveredLink === link ? '#d4af37' : '#a1a1aa',
                          }}
                          onMouseEnter={() => setHoveredLink(link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          {link}
                          <span 
                            className="absolute bottom-0 left-0 h-px bg-yellow-600 transition-all duration-300"
                            style={{
                              width: hoveredLink === link ? '100%' : '0%'
                            }}
                          ></span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

          </div>

          {/* Premium Newsletter */}
          <div className="mb-20">
            <div className="relative p-12 border border-yellow-600 bg-zinc-900 bg-opacity-50">
              
              {/* Corner Decorations */}
              <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-yellow-600"></div>
              <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-yellow-600"></div>
              <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-yellow-600"></div>
              <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-yellow-600"></div>

              <div className="max-w-3xl mx-auto text-center">
                <h3 className="text-3xl font-serif text-white mb-4">
                  Join Our Exclusive Community
                </h3>
                <p className="text-gray-400 mb-8 leading-relaxed">
                  Receive curated insights, exclusive invitations, and behind-the-scenes content from our studio.
                </p>

                <div className="flex gap-4 max-w-2xl mx-auto">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="flex-1 px-6 py-4 bg-black border border-zinc-700 text-white text-sm focus:outline-none focus:border-yellow-600 transition-all duration-300"
                  />
                  <button className="px-8 py-4 bg-yellow-600 text-black font-semibold text-sm hover:bg-yellow-500 transition-all duration-300">
                    SUBSCRIBE
                  </button>
                </div>

                <p className="text-xs text-gray-600 mt-6">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>

          {/* Social Media */}
          <div className="flex justify-center gap-6 mb-16">
            {[
              { name: 'Instagram', label: 'IG' },
              { name: 'Facebook', label: 'FB' },
              { name: 'Twitter', label: 'TW' },
              { name: 'LinkedIn', label: 'LN' },
              { name: 'Pinterest', label: 'PT' },
            ].map((social) => (
              <a
                key={social.name}
                href="#"
                className="w-12 h-12 flex items-center justify-center border font-semibold text-xs transition-all duration-300"
                style={{
                  borderColor: hoveredSocial === social.name ? '#d4af37' : '#3f3f46',
                  backgroundColor: hoveredSocial === social.name ? '#d4af37' : 'transparent',
                  color: hoveredSocial === social.name ? '#000000' : '#71717a',
                  transform: hoveredSocial === social.name ? 'translateY(-4px)' : 'translateY(0)'
                }}
                onMouseEnter={() => setHoveredSocial(social.name)}
                onMouseLeave={() => setHoveredSocial(null)}
              >
                {social.label}
              </a>
            ))}
          </div>

          {/* Bottom Section */}
          <div className="pt-10 border-t border-zinc-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col sm:flex-row items-center gap-8 text-sm text-gray-500">
                <p>© 2025 Lumière Studio. All rights reserved.</p>
                <div className="flex gap-8">
                  {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="font-light transition-colors duration-300"
                      style={{
                        color: hoveredLink === item ? '#d4af37' : '#71717a'
                      }}
                      onMouseEnter={() => setHoveredLink(item)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Certification Badge */}
              <div className="flex items-center gap-3 px-5 py-2 border border-yellow-600">
                <div className="w-2 h-2 bg-yellow-600 rotate-45"></div>
                <span className="text-xs font-semibold text-yellow-600 tracking-wider">CERTIFIED EXCELLENCE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Elegant Bottom Border */}
        <div className="h-px mt-12 bg-gradient-to-r from-transparent via-yellow-600 to-transparent"></div>

      </footer>
    </div>
  );
}    
  `
  },
  {
    name: "ProDeveloperCard",
    category: "Cards",
    code: `
function ProDeveloperCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const CodeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  const LightningIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );

  const SparkleIcon = () => (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0L14.59 8.41L23 11L14.59 13.59L12 22L9.41 13.59L1 11L9.41 8.41L12 0Z" />
    </svg>
  );

  return (
    <div style={{ 
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0e1a 0%, #1a1f35 100%)'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '3px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)' 
            : 'linear-gradient(135deg, #0891b2, #6366f1, #06b6d4)',
          borderRadius: '32px',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 35px 90px rgba(6, 182, 212, 0.6), 0 0 80px rgba(139, 92, 246, 0.4), 0 0 0 1px rgba(6, 182, 212, 0.3)' 
            : '0 15px 50px rgba(6, 182, 212, 0.25)',
          cursor: 'pointer',
          maxWidth: '440px',
          width: '100%',
          position: 'relative'
        }}
      >
        {/* Animated border glow */}
        <div style={{
          position: 'absolute',
          inset: '-3px',
          background: isHovered ? 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)' : 'transparent',
          borderRadius: '32px',
          opacity: isHovered ? 0.5 : 0,
          filter: 'blur(20px)',
          transition: 'opacity 0.5s',
          zIndex: -1
        }}></div>

        <div style={{ 
          padding: '32px', 
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
          borderRadius: '30px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background gradient orb */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '300px',
            height: '300px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, rgba(6, 182, 212, 0.1) 50%, transparent 70%)',
            borderRadius: '50%',
            transition: 'opacity 0.5s',
            opacity: isHovered ? 1 : 0.5,
            pointerEvents: 'none',
            filter: 'blur(40px)'
          }}></div>

          {/* Background pattern */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(6, 182, 212, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.05) 0%, transparent 50%)',
            opacity: 0.6
          }}></div>

          {/* Floating sparkle 1 */}
          <div style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            color: '#06b6d4',
            opacity: isHovered ? 0.6 : 0.3,
            transition: 'all 0.5s ease',
            transform: isHovered ? 'translateY(-5px) rotate(20deg)' : 'translateY(0)'
          }}>
            <SparkleIcon />
          </div>

          {/* Floating sparkle 2 */}
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '25%',
            color: '#8b5cf6',
            opacity: isHovered ? 0.5 : 0.2,
            transition: 'all 0.7s ease',
            transform: isHovered ? 'translateY(-10px) rotate(40deg)' : 'translateY(0)'
          }}>
            <SparkleIcon />
          </div>

          {/* Floating sparkle 3 */}
          <div style={{
            position: 'absolute',
            top: '80%',
            right: '40%',
            color: '#ec4899',
            opacity: isHovered ? 0.4 : 0.2,
            transition: 'all 0.9s ease',
            transform: isHovered ? 'translateY(-15px) rotate(60deg)' : 'translateY(0)'
          }}>
            <SparkleIcon />
          </div>

          {/* Pro Badge */}
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            padding: '8px 18px',
            background: 'linear-gradient(135deg, #8b5cf6, #ec4899)',
            borderRadius: '24px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#ffffff',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            letterSpacing: '1.5px',
            boxShadow: '0 6px 16px rgba(139, 92, 246, 0.5)',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)',
            transition: 'transform 0.3s'
          }}>
            <LightningIcon />
            PRO
          </div>

          {/* Icon */}
          <div style={{ 
            width: '72px', 
            height: '72px', 
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '20px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.5), 0 0 60px rgba(139, 92, 246, 0.3)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'rotate(-12deg) scale(1.15)' : 'rotate(0deg) scale(1)',
            position: 'relative',
            zIndex: 1
          }}>
            <CodeIcon />
            {/* Icon glow */}
            <div style={{
              position: 'absolute',
              inset: '-4px',
              background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
              borderRadius: '20px',
              opacity: isHovered ? 0.5 : 0,
              filter: 'blur(15px)',
              transition: 'opacity 0.4s',
              zIndex: -1
            }}></div>
          </div>

          <h3 style={{ 
            fontSize: '1.8rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '10px',
            letterSpacing: '0.5px',
            position: 'relative',
            zIndex: 1
          }}>
            Pro Developer
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '24px',
            lineHeight: '1.6',
            position: 'relative',
            zIndex: 1
          }}>
            Supercharge your development workflow with advanced tools and unlimited resources
          </p>
          
          {/* Content Box */}
          <div style={{ 
            marginBottom: '24px',
            padding: '24px',
            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.08), rgba(139, 92, 246, 0.05))',
            borderRadius: '20px',
            border: '1px solid rgba(6, 182, 212, 0.25)',
            transition: 'all 0.4s',
            boxShadow: isHovered ? '0 0 40px rgba(6, 182, 212, 0.15), inset 0 0 40px rgba(139, 92, 246, 0.05)' : 'none',
            backdropFilter: 'blur(10px)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              marginBottom: '18px',
              paddingBottom: '14px',
              borderBottom: '1px solid rgba(6, 182, 212, 0.25)'
            }}>
              <div style={{
                fontSize: '0.7rem',
                color: '#8b5cf6',
                fontWeight: 'bold',
                letterSpacing: '1.5px',
                marginBottom: '8px'
              }}>
                MONTHLY SUBSCRIPTION
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'baseline',
                gap: '8px'
              }}>
                <span style={{
                  fontSize: '2.5rem',
                  fontWeight: 'bold',
                  background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  lineHeight: '1'
                }}>$29</span>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>/mo</span>
              </div>
            </div>

            {/* Features List */}
            <div style={{ marginTop: '18px' }}>
              {['Unlimited API Calls', 'Advanced Code Editor', 'Real-time Collaboration', 'Priority Deployment', 'Custom Integrations'].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '12px',
                  opacity: isHovered ? 1 : 0.9,
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)',
                  transition: 'all 0.3s ease'
                }}>
                  <div style={{ 
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(6, 182, 212, 0.8)',
                    flexShrink: 0
                  }}></div>
                  <span style={{ color: '#e2e8f0', fontSize: '0.9rem' }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Button */}
          <button 
            style={{ 
              padding: '14px 32px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899)' 
                : 'linear-gradient(135deg, #0891b2, #6366f1)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '16px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              fontSize: '1.05rem',
              boxShadow: isHovered 
                ? '0 12px 30px rgba(139, 92, 246, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)' 
                : '0 8px 20px rgba(6, 182, 212, 0.3)',
              width: '100%',
              letterSpacing: '0.5px',
              position: 'relative',
              zIndex: 1,
              overflow: 'hidden'
            }}
          >
            <span style={{ position: 'relative', zIndex: 1 }}>Start Building Now</span>
            {/* Button shimmer effect */}
            <div style={{
              position: 'absolute',
              top: '-50%',
              left: '-100%',
              width: '200%',
              height: '200%',
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
              transform: isHovered ? 'translateX(100%)' : 'translateX(0)',
              transition: 'transform 0.6s'
            }}></div>
          </button>

          <div style={{
            marginTop: '14px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#64748b',
            position: 'relative',
            zIndex: 1
          }}>
            7-day free trial • Cancel anytime
          </div>

          {/* Stats */}
          <div style={{ 
            marginTop: '24px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '24px',
            borderTop: '1px solid rgba(6, 182, 212, 0.25)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ 
              textAlign: 'center',
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.3s ease'
            }}>
              <div style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px'
              }}>
                50K+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Developers</div>
            </div>
            
            <div style={{ 
              textAlign: 'center',
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.4s ease'
            }}>
              <div style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px'
              }}>
                99.9%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Uptime</div>
            </div>
            
            <div style={{ 
              textAlign: 'center',
              transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
              transition: 'all 0.5s ease'
            }}>
              <div style={{ 
                fontSize: '1.6rem', 
                fontWeight: 'bold', 
                background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '4px'
              }}>
                24/7
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "PremiumCard",
    category: "Cards",
    code: `
function PremiumCard() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const CrownIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l2 7 5-4-2 7h6l-5 4 2 7-8-5-8 5 2-7-5-4h6l-2-7 5 4z" />
    </svg>
  );

  const SparkleIcon = ({ size = 16 }) => (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0l2 8 8 2-8 2-2 8-2-8-8-2 8-2z" />
    </svg>
  );

  return (
    <div style={{
      padding: '0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #1a0f2e 50%, #0a0a0f 100%)'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        style={{ 
          position: 'relative',
          padding: '3px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #f59e0b, #f97316, #ec4899, #8b5cf6)' 
            : 'linear-gradient(135deg, #3b82f6, #8b5cf6, #ec4899)',
          borderRadius: '28px',
          transition: 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'translateY(-16px) scale(1.02)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 30px 80px rgba(236, 72, 153, 0.6), 0 0 80px rgba(139, 92, 246, 0.4), inset 0 0 40px rgba(255, 255, 255, 0.1)' 
            : '0 15px 50px rgba(139, 92, 246, 0.3)',
          cursor: 'pointer',
          maxWidth: '440px',
          width: '100%'
        }}
      >
        <div style={{ 
          padding: '40px', 
          background: 'linear-gradient(135deg, #0f0f1e 0%, #1a1a2e 50%, #16162a 100%)',
          borderRadius: '26px',
          position: 'relative',
          overflow: 'hidden',
          backdropFilter: 'blur(20px)'
        }}>
          {/* Animated gradient orbs */}
          <div style={{
            position: 'absolute',
            top: isHovered ? mousePosition.y - 100 : '10%',
            left: isHovered ? mousePosition.x - 100 : '20%',
            width: '200px',
            height: '200px',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.3s ease',
            filter: 'blur(40px)',
            opacity: isHovered ? 1 : 0.6
          }}></div>

          <div style={{
            position: 'absolute',
            bottom: '20%',
            right: '10%',
            width: '150px',
            height: '150px',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
            borderRadius: '50%',
            filter: 'blur(40px)',
            opacity: isHovered ? 0.6 : 1,
            transition: 'opacity 0.3s ease'
          }}></div>

          {/* Premium Badge with sparkles */}
          <div style={{
            position: 'absolute',
            top: '24px',
            right: '24px',
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #f59e0b, #f97316)',
            borderRadius: '25px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#0f0f1e',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            boxShadow: '0 6px 20px rgba(245, 158, 11, 0.5)',
            letterSpacing: '1px',
            transition: 'transform 0.3s ease',
            transform: isHovered ? 'translateY(-3px)' : 'translateY(0)'
          }}>
            <div style={{ 
              opacity: isHovered ? 1 : 0.5,
              transition: 'opacity 0.3s ease'
            }}>
              <SparkleIcon size={14} />
            </div>
            PREMIUM
            <div style={{ 
              opacity: isHovered ? 1 : 0.5,
              transition: 'opacity 0.3s ease 0.1s'
            }}>
              <SparkleIcon size={14} />
            </div>
          </div>

          {/* Crown Icon with glow */}
          <div style={{ 
            width: '72px', 
            height: '72px', 
            background: 'linear-gradient(135deg, #f59e0b, #ec4899)', 
            borderRadius: '20px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '24px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(245, 158, 11, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)',
            transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
            transform: isHovered ? 'rotate(5deg) scale(1.15)' : 'rotate(0deg) scale(1)',
            position: 'relative',
            zIndex: 1
          }}>
            <CrownIcon />
          </div>

          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: '800', 
            background: 'linear-gradient(135deg, #f59e0b 0%, #ec4899 50%, #8b5cf6 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '14px',
            letterSpacing: '1px',
            position: 'relative',
            zIndex: 1
          }}>
            Elite Membership
          </h3>
          
          <p style={{ 
            fontSize: '1rem', 
            color: '#a1a1aa',
            marginBottom: '32px',
            lineHeight: '1.7',
            position: 'relative',
            zIndex: 1
          }}>
            Experience luxury and excellence with our exclusive VIP features
          </p>
          
          {/* Glassmorphic Price Box */}
          <div style={{ 
            marginBottom: '32px',
            padding: '28px',
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '20px',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            transition: 'all 0.4s',
            boxShadow: isHovered ? '0 0 40px rgba(236, 72, 153, 0.2)' : 'none',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              marginBottom: '20px'
            }}>
              <span style={{
                fontSize: '3.5rem',
                fontWeight: '900',
                background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                lineHeight: '1'
              }}>$99</span>
              <span style={{
                fontSize: '1.1rem',
                color: '#71717a',
                marginLeft: '10px'
              }}>/month</span>
            </div>

            {/* Enhanced Features */}
            <div style={{ marginTop: '24px' }}>
              {[
                '∞ Unlimited Everything', 
                '⚡ Lightning Fast Speed', 
                '🛡️ Premium Security', 
                '👑 VIP Support 24/7'
              ].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '14px', 
                  marginBottom: '14px',
                  transition: 'all 0.3s',
                  transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                }}>
                  <div style={{ 
                    width: '8px',
                    height: '8px',
                    background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                    borderRadius: '50%',
                    boxShadow: '0 0 10px rgba(236, 72, 153, 0.6)'
                  }}></div>
                  <span style={{ 
                    color: '#e4e4e7', 
                    fontSize: '0.95rem',
                    fontWeight: '500'
                  }}>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Gradient Button */}
          <button 
            style={{ 
              padding: '16px 36px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #f59e0b, #f97316, #ec4899)' 
                : 'linear-gradient(135deg, #ec4899, #8b5cf6)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '14px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
              fontSize: '1.05rem',
              boxShadow: isHovered 
                ? '0 12px 30px rgba(236, 72, 153, 0.5), inset 0 0 20px rgba(255, 255, 255, 0.2)' 
                : '0 10px 25px rgba(139, 92, 246, 0.4)',
              width: '100%',
              letterSpacing: '1px',
              position: 'relative',
              zIndex: 1,
              transform: isHovered ? 'scale(1.02)' : 'scale(1)'
            }}
          >
            Claim Your Spot →
          </button>

          {/* Premium Stats */}
          <div style={{ 
            marginTop: '32px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '28px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)',
            position: 'relative',
            zIndex: 1
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: '900', 
                background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '6px'
              }}>
                50K+
              </div>
              <div style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: '500' }}>Elite Members</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: '900', 
                background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '6px'
              }}>
                5.0★
              </div>
              <div style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: '500' }}>Perfect Score</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.75rem', 
                fontWeight: '900', 
                background: 'linear-gradient(135deg, #f59e0b, #ec4899)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                marginBottom: '6px'
              }}>
                99.9%
              </div>
              <div style={{ fontSize: '0.8rem', color: '#71717a', fontWeight: '500' }}>Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "UltraPremiumCard",
    category: "Cards",
    code: `
function UltraPremiumCard() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative">
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      
      {/* Glowing orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-purple-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-cyan-600 rounded-full mix-blend-screen filter blur-[120px] opacity-70 animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-600 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-pulse"></div>
      </div>

      {/* Main Card Container */}
      <div className="relative group">
        {/* Rotating border effect */}
        <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-3xl blur-xl opacity-75 group-hover:opacity-100 transition duration-1000 animate-spin"></div>
        
        {/* Card */}
        <div className="relative w-[420px] bg-gradient-to-br from-zinc-900 to-black backdrop-blur-2xl rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl transition-all duration-700 group-hover:scale-105 group-hover:-rotate-1">
          
          {/* Holographic overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-cyan-600/20"></div>
            <div className="absolute inset-0 bg-gradient-to-tl from-pink-600/20 via-transparent to-purple-600/20"></div>
          </div>

          {/* Content */}
          <div className="relative p-10 z-10">
            
            {/* Top Section - Logo & Status */}
            <div className="flex items-start justify-between mb-8">
              {/* Animated Logo */}
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 blur-2xl opacity-0 group-hover:opacity-80 transition-opacity duration-700"></div>
                <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-cyan-500 flex items-center justify-center transform transition-all duration-700 group-hover:rotate-180 group-hover:scale-110">
                  <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
                  </svg>
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-pink-600/20 to-purple-600/20 border border-pink-500/30 backdrop-blur-xl transition-all duration-500 group-hover:border-pink-500 group-hover:scale-110">
                <div className="relative">
                  <div className="w-2.5 h-2.5 rounded-full bg-pink-500 animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-pink-500 animate-ping"></div>
                </div>
                <span className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 uppercase tracking-wider">Active</span>
              </div>
            </div>

            {/* Card Title */}
            <div className="mb-6">
              <h1 className="text-6xl font-black mb-3 relative overflow-hidden">
                <span className="relative inline-block bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent transition-all duration-700 group-hover:from-pink-300 group-hover:via-purple-300 group-hover:to-cyan-300">
                  NEXUS
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1500 opacity-60"></div>
                </span>
              </h1>
              <div className="flex items-center gap-2">
                <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full transition-all duration-700 group-hover:w-40"></div>
                <p className="text-zinc-500 text-sm font-medium tracking-widest uppercase">Ultra Elite</p>
              </div>
            </div>

            {/* Card Number Display */}
            <div className="mb-8 relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-pink-600/0 via-purple-600/20 to-cyan-600/0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <div className="relative grid grid-cols-4 gap-4">
                <div className="text-center transition-all duration-500 hover:scale-125 hover:-translate-y-2">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-wider">4532</span>
                </div>
                <div className="text-center transition-all duration-500 hover:scale-125 hover:-translate-y-2">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-wider">7891</span>
                </div>
                <div className="text-center transition-all duration-500 hover:scale-125 hover:-translate-y-2">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-wider">2345</span>
                </div>
                <div className="text-center transition-all duration-500 hover:scale-125 hover:-translate-y-2">
                  <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-white to-zinc-400 tracking-wider">6789</span>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-3 gap-3 mb-8">
              {/* Feature 1 */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-zinc-900 backdrop-blur-xl rounded-xl p-4 border border-zinc-800 transition-all duration-500 hover:border-transparent hover:scale-110 hover:-rotate-3">
                  <div className="text-3xl mb-2 transition-transform duration-500 hover:scale-125 hover:rotate-12">⚡</div>
                  <div className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">Instant</div>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-zinc-900 backdrop-blur-xl rounded-xl p-4 border border-zinc-800 transition-all duration-500 hover:border-transparent hover:scale-110 hover:-rotate-3">
                  <div className="text-3xl mb-2 transition-transform duration-500 hover:scale-125 hover:rotate-12">🔒</div>
                  <div className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-emerald-500">Secure</div>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl opacity-0 hover:opacity-100 blur transition duration-500"></div>
                <div className="relative bg-zinc-900 backdrop-blur-xl rounded-xl p-4 border border-zinc-800 transition-all duration-500 hover:border-transparent hover:scale-110 hover:-rotate-3">
                  <div className="text-3xl mb-2 transition-transform duration-500 hover:scale-125 hover:rotate-12">∞</div>
                  <div className="text-xs font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500">Unlimited</div>
                </div>
              </div>
            </div>

            {/* Premium Perks */}
            <div className="space-y-3 mb-8">
              <div className="flex items-center gap-3 transition-all duration-500 hover:translate-x-3 hover:scale-105">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white">Priority Processing</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-3 transition-all duration-500 hover:translate-x-3 hover:scale-105">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white">Global Access</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>

              <div className="flex items-center gap-3 transition-all duration-500 hover:translate-x-3 hover:scale-105">
                <div className="relative">
                  <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  <div className="absolute inset-0 w-2 h-2 rounded-full bg-pink-500 animate-ping opacity-75"></div>
                </div>
                <span className="text-sm text-zinc-400 transition-colors duration-300 hover:text-white">Concierge Support</span>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <button className="relative w-full">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
              <div className="relative px-8 py-5 bg-gradient-to-r from-pink-600 via-purple-600 to-cyan-600 rounded-2xl transition-all duration-500 hover:scale-105 hover:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/40 to-white/0 -translate-x-full hover:translate-x-full transition-transform duration-1000"></div>
                <div className="relative flex items-center justify-center gap-3">
                  <span className="text-white font-black text-xl tracking-wider uppercase">Activate Now</span>
                  <svg className="w-6 h-6 text-white transition-transform duration-500 hover:translate-x-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                  </svg>
                </div>
              </div>
            </button>

            {/* Footer Info */}
            <div className="mt-6 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-all duration-700 delay-200">
              <div className="flex items-baseline gap-2">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">$599</span>
                <span className="text-sm text-zinc-500">/month</span>
              </div>
              <div className="text-xs text-zinc-600 tracking-widest uppercase">Premium Tier</div>
            </div>
          </div>

          {/* Bottom glow effect */}
          <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        </div>
      </div>
    </div>
  );
}
    
  `
  },
  {
    name: "UINEXpunkHeader2",
    category: "Header",
    code: `// import { useState, useEffect } from 'react';
function UINEXpunkHeader2() {
  const [glitchActive, setGlitchActive] = useState(false);
  const [scanLine, setScanLine] = useState(0);
  const [particles, setParticles] = useState([]);
  const [gridOffset, setGridOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanLine(prev => (prev + 2) % 100);
    }, 50);

    const gridInterval = setInterval(() => {
      setGridOffset(prev => (prev + 1) % 60);
    }, 100);

    const glitchInterval = setInterval(() => {
      setGlitchActive(true);
      setTimeout(() => setGlitchActive(false), 200);
    }, 3000);

    const newParticles = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      offset: Math.random() * 20,
    }));
    setParticles(newParticles);

    return () => {
      clearInterval(interval);
      clearInterval(gridInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-pink-900 flex items-center justify-center p-8 relative overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full transition-transform duration-100"
          style={{
            backgroundImage: 'linear-gradient(rgba(255, 0, 255, 0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 255, 255, 0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
            transform: 'translateY(' + gridOffset + 'px)',
          }}
        />
      </div>

      {/* Scan Line Effect */}
      <div 
        className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-50 blur-sm transition-all duration-100"
        style={{
          top: scanLine + '%',
          boxShadow: '0 0 20px rgba(0, 255, 255, 0.8)',
        }}
      />

      {/* Floating Particles */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute w-1 h-1 bg-pink-500 rounded-full transition-transform duration-1000"
          style={{
            left: particle.x + '%',
            top: particle.y + '%',
            boxShadow: '0 0 10px rgba(255, 0, 255, 0.8)',
            transform: 'translateY(' + (Math.sin(Date.now() / 1000 + particle.offset) * 20) + 'px)',
          }}
        />
      ))}

      <div className="relative z-10 max-w-6xl w-full">
        {/* Main Container with Glitch Border */}
        <div 
          className="relative p-12 border-4 transition-all duration-300"
          style={{
            borderColor: glitchActive ? 'rgb(255, 0, 255)' : 'rgb(0, 255, 255)',
            background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.8), rgba(30, 0, 30, 0.8))',
            boxShadow: glitchActive 
              ? '0 0 100px rgba(255, 0, 255, 0.6), inset 0 0 50px rgba(255, 0, 255, 0.2)' 
              : '0 0 60px rgba(0, 255, 255, 0.4), inset 0 0 30px rgba(0, 255, 255, 0.1)',
            transform: glitchActive ? 'skew(-1deg, 0deg)' : 'none',
          }}
        >
          {/* Accent Lines */}
          <div className="absolute top-0 left-0 w-32 h-1 bg-gradient-to-r from-pink-500 to-transparent" 
               style={{ boxShadow: '0 0 15px rgba(255, 0, 255, 0.8)' }} />
          <div className="absolute bottom-0 right-0 w-32 h-1 bg-gradient-to-l from-cyan-500 to-transparent" 
               style={{ boxShadow: '0 0 15px rgba(0, 255, 255, 0.8)' }} />

          {/* Title Section */}
          <div className="text-center mb-12">
            <div className="relative inline-block">
              <h1 
                className="text-9xl font-black tracking-tighter mb-2 relative"
                style={{
                  background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(255, 0, 255), rgb(255, 255, 0))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: glitchActive ? 'blur(2px)' : 'drop-shadow(0 0 25px rgba(0, 255, 255, 0.8))',
                  textShadow: glitchActive ? '5px 0 rgb(255, 0, 255), -5px 0 rgb(0, 255, 255)' : 'none',
                }}
              >
                UINEX
              </h1>
              {glitchActive && (
                <div className="absolute inset-0 text-9xl font-black tracking-tighter opacity-30"
                     style={{
                       color: 'rgb(255, 0, 255)',
                       transform: 'translate(3px, -2px)',
                     }}>
                  UINEX
                </div>
              )}
            </div>

            <div className="flex items-center justify-center gap-3 mb-8">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 15px rgb(255, 0, 255)' }} />
              <span 
                className="text-3xl font-mono tracking-widest font-bold"
                style={{
                  color: 'rgb(0, 255, 255)',
                  textShadow: '0 0 15px rgba(0, 255, 255, 0.8), 2px 2px 0 rgba(255, 0, 255, 0.3)',
                }}
              >
                REVOLUTION 2077
              </span>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 15px rgb(0, 255, 255)' }} />
            </div>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-3 gap-4 mb-10">
            {[
              { icon: '⚡', title: 'NEURAL LINK', value: 'ACTIVE', color: 'rgb(255, 255, 0)' },
              { icon: '🔒', title: 'ENCRYPTION', value: '256-BIT', color: 'rgb(0, 255, 255)' },
              { icon: '🚀', title: 'SPEED', value: 'QUANTUM', color: 'rgb(255, 0, 255)' },
            ].map((item, i) => (
              <div 
                key={i}
                className="p-6 border-2 relative overflow-hidden group transition-all duration-300"
                style={{
                  borderColor: item.color,
                  backgroundColor: 'rgba(0, 0, 0, 0.6)',
                  boxShadow: '0 0 20px rgba(' + (item.color === 'rgb(255, 255, 0)' ? '255, 255, 0' : item.color === 'rgb(0, 255, 255)' ? '0, 255, 255' : '255, 0, 255') + ', 0.25)',
                }}
              >
                <div className="text-4xl mb-2">{item.icon}</div>
                <div className="text-xs font-mono mb-1" style={{ color: 'rgb(150, 150, 200)' }}>
                  {item.title}
                </div>
                <div 
                  className="text-2xl font-black"
                  style={{
                    color: item.color,
                    textShadow: '0 0 10px ' + item.color,
                  }}
                >
                  {item.value}
                </div>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: item.color === 'rgb(255, 255, 0)' 
                      ? 'linear-gradient(135deg, rgba(255, 255, 0, 0.12), transparent)'
                      : item.color === 'rgb(0, 255, 255)'
                      ? 'linear-gradient(135deg, rgba(0, 255, 255, 0.12), transparent)'
                      : 'linear-gradient(135deg, rgba(255, 0, 255, 0.12), transparent)',
                  }}
                />
              </div>
            ))}
          </div>

          <p className="text-center text-lg mb-10 max-w-2xl mx-auto" style={{ color: 'rgb(180, 180, 220)' }}>
            Enter the neon-lit future where technology transcends reality and digital dreams become tangible
          </p>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4">
            <button 
              className="px-10 py-4 font-black uppercase tracking-wider transition-all duration-300 relative group overflow-hidden"
              style={{
                background: 'linear-gradient(135deg, rgb(255, 0, 255), rgb(255, 0, 150))',
                border: 'none',
                color: 'white',
                boxShadow: '0 0 40px rgba(255, 0, 255, 0.6)',
              }}
            >
              <span className="relative z-10">JACK IN</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-0 group-hover:opacity-30 transform -skew-x-12 group-hover:translate-x-full transition-all duration-700" />
            </button>
            <button 
              className="px-10 py-4 font-black uppercase tracking-wider transition-all duration-300"
              style={{
                backgroundColor: 'transparent',
                border: '3px solid rgb(0, 255, 255)',
                color: 'rgb(0, 255, 255)',
                boxShadow: '0 0 30px rgba(0, 255, 255, 0.4)',
              }}
            >
              EXPLORE NET
            </button>
          </div>
        </div>

        {/* Bottom Accent */}
        <div className="mt-6 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-2 border border-pink-500" 
               style={{ 
                 backgroundColor: 'rgba(0, 0, 0, 0.7)',
                 boxShadow: '0 0 20px rgba(255, 0, 255, 0.3)',
               }}>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-xs font-mono" style={{ color: 'rgb(0, 255, 0)' }}>
              SYSTEM OPERATIONAL
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "MatrixHeader",
    category: "Header",
    code: `// import { useState, useEffect } from 'react';
function MatrixHeader() {
  const [ripples, setRipples] = useState([]);
  const [matrixChars, setMatrixChars] = useState([]);
  const [pulseActive, setPulseActive] = useState(false);
  const [orbitAngle, setOrbitAngle] = useState(0);

  useEffect(() => {
    // UIZONrain effect
    const chars = '01アイウエオカキクケコサシスセソタチツテト'.split('');
    const columns = 30;
    const matrixData = Array.from({ length: columns }, (_, i) => ({
      id: i,
      x: (i / columns) * 100,
      char: chars[Math.floor(Math.random() * chars.length)],
      speed: 2 + Math.random() * 4,
      y: Math.random() * 100,
    }));
    setMatrixChars(matrixData);

    // Orbit animation
    const orbitInterval = setInterval(() => {
      setOrbitAngle(prev => (prev + 2) % 360);
    }, 50);

    // Pulse effect
    const pulseInterval = setInterval(() => {
      setPulseActive(true);
      setTimeout(() => setPulseActive(false), 500);
    }, 4000);

    return () => {
      clearInterval(orbitInterval);
      clearInterval(pulseInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newRipple = {
      id: Date.now(),
      x,
      y,
    };
    
    setRipples(prev => [...prev, newRipple]);
    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* UIZONRain Background */}
      {matrixChars.map((char) => (
        <div
          key={char.id}
          className="absolute text-green-500 font-mono text-xl opacity-40 transition-all duration-1000"
          style={{
            left: char.x + '%',
            top: ((char.y + (Date.now() / 100) * char.speed) % 100) + '%',
            textShadow: '0 0 10px rgb(0, 255, 0)',
          }}
        >
          {char.char}
        </div>
      ))}

      {/* Mouse Ripples */}
      {ripples.map((ripple) => (
        <div
          key={ripple.id}
          className="absolute rounded-full border-2 border-green-400 pointer-events-none transition-all duration-1000"
          style={{
            left: ripple.x + '%',
            top: ripple.y + '%',
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%) scale(20)',
            opacity: 0,
            boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
          }}
        />
      ))}

      {/* Orbiting Particles */}
      {[0, 120, 240].map((offset, i) => {
        const angle = (orbitAngle + offset) * (Math.PI / 180);
        const radius = 250;
        const x = 50 + Math.cos(angle) * (radius / 10);
        const y = 50 + Math.sin(angle) * (radius / 10);
        
        return (
          <div
            key={i}
            className="absolute w-4 h-4 rounded-full transition-all duration-100"
            style={{
              left: x + '%',
              top: y + '%',
              background: i === 0 ? 'rgb(0, 255, 0)' : i === 1 ? 'rgb(0, 255, 255)' : 'rgb(255, 0, 255)',
              boxShadow: '0 0 30px ' + (i === 0 ? 'rgb(0, 255, 0)' : i === 1 ? 'rgb(0, 255, 255)' : 'rgb(255, 0, 255)'),
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}

      <div className="relative z-10 max-w-7xl w-full">
        {/* Main Container */}
        <div className="relative">
          {/* Hexagonal Border Effect */}
          <div 
            className="absolute inset-0 transition-all duration-500"
            style={{
              background: pulseActive 
                ? 'linear-gradient(45deg, rgba(0, 255, 0, 0.1), rgba(0, 255, 255, 0.1))' 
                : 'transparent',
              border: '3px solid',
              borderImage: 'linear-gradient(135deg, rgb(0, 255, 0), rgb(0, 255, 255), rgb(255, 0, 255)) 1',
              boxShadow: pulseActive 
                ? '0 0 80px rgba(0, 255, 0, 0.6), inset 0 0 60px rgba(0, 255, 0, 0.2)' 
                : '0 0 40px rgba(0, 255, 0, 0.3)',
              clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)',
            }}
          />

          <div className="relative p-16 text-center">
            {/* Corner Indicators */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-12 h-12"
                style={{
                  top: i < 2 ? '20px' : 'auto',
                  bottom: i >= 2 ? '20px' : 'auto',
                  left: i % 2 === 0 ? '20px' : 'auto',
                  right: i % 2 === 1 ? '20px' : 'auto',
                }}
              >
                <div 
                  className="w-full h-full border-4 transition-all duration-300"
                  style={{
                    borderColor: 'rgb(0, 255, 0)',
                    borderTop: i < 2 ? '4px solid rgb(0, 255, 0)' : 'none',
                    borderBottom: i >= 2 ? '4px solid rgb(0, 255, 0)' : 'none',
                    borderLeft: i % 2 === 0 ? '4px solid rgb(0, 255, 0)' : 'none',
                    borderRight: i % 2 === 1 ? '4px solid rgb(0, 255, 0)' : 'none',
                    boxShadow: pulseActive ? '0 0 20px rgb(0, 255, 0)' : 'none',
                  }}
                />
              </div>
            ))}

            {/* Title */}
            <div className="mb-10">
              <h1 
                className="text-8xl font-black mb-4 tracking-wider transition-all duration-500"
                style={{
                  background: 'linear-gradient(135deg, rgb(0, 255, 0), rgb(0, 255, 255))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: pulseActive ? 'drop-shadow(0 0 40px rgba(0, 255, 0, 1))' : 'drop-shadow(0 0 20px rgba(0, 255, 0, 0.5))',
                }}
              >
                MATRIX
              </h1>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-20 bg-gradient-to-r from-transparent to-green-500" 
                     style={{ boxShadow: '0 0 10px rgb(0, 255, 0)' }} />
                <span 
                  className="text-2xl font-mono tracking-widest"
                  style={{
                    color: 'rgb(0, 255, 255)',
                    textShadow: '0 0 15px rgb(0, 255, 255)',
                  }}
                >
                  DIGITAL REALM
                </span>
                <div className="h-px w-20 bg-gradient-to-l from-transparent to-green-500" 
                     style={{ boxShadow: '0 0 10px rgb(0, 255, 0)' }} />
              </div>
            </div>

            {/* Data Panels */}
            <div className="grid grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto">
              {[
                { label: 'NODES', value: '9,847', color: 'rgb(0, 255, 0)', icon: '◉' },
                { label: 'STREAMS', value: '∞', color: 'rgb(0, 255, 255)', icon: '◈' },
                { label: 'PACKETS', value: '2.4TB', color: 'rgb(0, 255, 0)', icon: '◆' },
                { label: 'LATENCY', value: '0.3ms', color: 'rgb(0, 255, 255)', icon: '◐' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-5 border-2 backdrop-blur-sm transition-all duration-300 relative overflow-hidden group"
                  style={{
                    borderColor: item.color,
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    boxShadow: pulseActive ? '0 0 25px ' + item.color : '0 0 10px ' + item.color + '40',
                  }}
                >
                  <div className="absolute top-1 right-1 text-xs opacity-50" style={{ color: item.color }}>
                    {item.icon}
                  </div>
                  <div className="text-xs font-mono mb-1" style={{ color: 'rgb(100, 200, 100)' }}>
                    {item.label}
                  </div>
                  <div 
                    className="text-3xl font-black"
                    style={{
                      color: item.color,
                      textShadow: '0 0 15px ' + item.color,
                    }}
                  >
                    {item.value}
                  </div>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: 'linear-gradient(135deg, ' + item.color.replace('rgb', 'rgba').replace(')', ', 0.1)') + ', transparent)',
                    }}
                  />
                </div>
              ))}
            </div>

            <p className="text-xl mb-10 max-w-3xl mx-auto leading-relaxed" style={{ color: 'rgb(150, 255, 150)' }}>
              Decode the architecture of reality where consciousness meets computation in an infinite data stream
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6">
              <button 
                className="px-12 py-5 font-black uppercase tracking-widest transition-all duration-300 relative overflow-hidden group"
                style={{
                  background: 'rgba(0, 255, 0, 0.2)',
                  border: '3px solid rgb(0, 255, 0)',
                  color: 'rgb(0, 255, 0)',
                  boxShadow: '0 0 30px rgba(0, 255, 0, 0.5)',
                }}
              >
                <span className="relative z-10">CONNECT</span>
                <div className="absolute inset-0 bg-green-500 opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
              </button>
              <button 
                className="px-12 py-5 font-black uppercase tracking-widest transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  border: '3px solid rgb(0, 255, 255)',
                  color: 'rgb(0, 255, 255)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
                }}
              >
                DECODE
              </button>
            </div>
          </div>
        </div>

        {/* Status Bar */}
        <div className="mt-8 flex justify-center gap-6">
          {['NEURAL', 'QUANTUM', 'CRYPTO'].map((status, i) => (
            <div 
              key={i}
              className="flex items-center gap-2 px-4 py-2 border border-green-500"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                boxShadow: '0 0 15px rgba(0, 255, 0, 0.3)',
              }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" 
                   style={{ boxShadow: '0 0 10px rgb(0, 255, 0)' }} />
              <span className="text-xs font-mono" style={{ color: 'rgb(0, 255, 0)' }}>
                {status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "NeonHologramHeader",
    category: "Header",
    code: `// import { useState, useEffect } from 'react';
function NeonHologramHeader() {
  const [waves, setWaves] = useState([]);
  const [particles, setParticles] = useState([]);
  const [glowActive, setGlowActive] = useState(false);
  const [rotationAngle, setRotationAngle] = useState(0);

  useEffect(() => {
    // Floating particles effect
    const symbols = '◊◈◇◆★☆✦✧❖⬡⬢⬣'.split('');
    const particleCount = 25;
    const particleData = Array.from({ length: particleCount }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      symbol: symbols[Math.floor(Math.random() * symbols.length)],
      speed: 1 + Math.random() * 2,
      size: 0.5 + Math.random() * 1.5,
    }));
    setParticles(particleData);

    // Rotation animation
    const rotationInterval = setInterval(() => {
      setRotationAngle(prev => (prev + 1) % 360);
    }, 30);

    // Glow pulse effect
    const glowInterval = setInterval(() => {
      setGlowActive(true);
      setTimeout(() => setGlowActive(false), 600);
    }, 3500);

    return () => {
      clearInterval(rotationInterval);
      clearInterval(glowInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newWave = {
      id: Date.now(),
      x,
      y,
    };
    
    setWaves(prev => [...prev, newWave]);
    setTimeout(() => {
      setWaves(prev => prev.filter(w => w.id !== newWave.id));
    }, 1200);
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Floating Particles Background */}
      {particles.map((particle) => (
        <div
          key={particle.id}
          className="absolute font-bold opacity-30 transition-all duration-1000"
          style={{
            left: particle.x + '%',
            top: ((particle.y + (Date.now() / 150) * particle.speed) % 100) + '%',
            fontSize: particle.size + 'rem',
            color: particle.id % 3 === 0 ? 'rgb(255, 0, 150)' : particle.id % 3 === 1 ? 'rgb(150, 0, 255)' : 'rgb(0, 150, 255)',
            textShadow: '0 0 20px currentColor',
          }}
        >
          {particle.symbol}
        </div>
      ))}

      {/* Mouse Wave Ripples */}
      {waves.map((wave) => (
        <div
          key={wave.id}
          className="absolute rounded-full pointer-events-none transition-all duration-1000"
          style={{
            left: wave.x + '%',
            top: wave.y + '%',
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%) scale(25)',
            opacity: 0,
            border: '2px solid rgb(255, 0, 150)',
            boxShadow: '0 0 40px rgba(255, 0, 150, 0.6), 0 0 80px rgba(150, 0, 255, 0.4)',
          }}
        />
      ))}

      {/* Rotating Energy Rings */}
      {[0, 60, 120, 180, 240, 300].map((offset, i) => {
        const angle = (rotationAngle + offset) * (Math.PI / 180);
        const radius = 300;
        const x = 50 + Math.cos(angle) * (radius / 12);
        const y = 50 + Math.sin(angle) * (radius / 12);
        
        return (
          <div
            key={i}
            className="absolute w-3 h-3 rounded-full transition-all duration-100"
            style={{
              left: x + '%',
              top: y + '%',
              background: i % 2 === 0 ? 'rgb(255, 0, 150)' : 'rgb(150, 0, 255)',
              boxShadow: '0 0 25px ' + (i % 2 === 0 ? 'rgb(255, 0, 150)' : 'rgb(150, 0, 255)'),
              transform: 'translate(-50%, -50%)',
            }}
          />
        );
      })}

      <div className="relative z-10 max-w-7xl w-full">
        {/* Main Container */}
        <div className="relative">
          {/* Holographic Border Effect */}
          <div 
            className="absolute inset-0 transition-all duration-700"
            style={{
              background: glowActive 
                ? 'linear-gradient(135deg, rgba(255, 0, 150, 0.15), rgba(150, 0, 255, 0.15))' 
                : 'transparent',
              border: '4px solid',
              borderImage: 'linear-gradient(90deg, rgb(255, 0, 150), rgb(150, 0, 255), rgb(0, 150, 255), rgb(255, 0, 150)) 1',
              boxShadow: glowActive 
                ? '0 0 100px rgba(255, 0, 150, 0.7), inset 0 0 80px rgba(150, 0, 255, 0.3)' 
                : '0 0 50px rgba(255, 0, 150, 0.4)',
              clipPath: 'polygon(5% 0%, 95% 0%, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0% 95%, 0% 5%)',
            }}
          />

          <div className="relative p-20 text-center">
            {/* Corner Brackets */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-16 h-16"
                style={{
                  top: i < 2 ? '30px' : 'auto',
                  bottom: i >= 2 ? '30px' : 'auto',
                  left: i % 2 === 0 ? '30px' : 'auto',
                  right: i % 2 === 1 ? '30px' : 'auto',
                }}
              >
                <div 
                  className="w-full h-full border-4 transition-all duration-500"
                  style={{
                    borderColor: 'transparent',
                    borderTop: i < 2 ? '4px solid rgb(255, 0, 150)' : 'none',
                    borderBottom: i >= 2 ? '4px solid rgb(255, 0, 150)' : 'none',
                    borderLeft: i % 2 === 0 ? '4px solid rgb(255, 0, 150)' : 'none',
                    borderRight: i % 2 === 1 ? '4px solid rgb(255, 0, 150)' : 'none',
                    boxShadow: glowActive ? '0 0 30px rgb(255, 0, 150)' : '0 0 15px rgb(255, 0, 150)',
                  }}
                />
              </div>
            ))}

            {/* Title Section */}
            <div className="mb-12">
              <h1 
                className="text-9xl font-black mb-6 tracking-tight transition-all duration-700"
                style={{
                  background: 'linear-gradient(90deg, rgb(255, 0, 150), rgb(150, 0, 255), rgb(0, 150, 255))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: glowActive ? 'drop-shadow(0 0 50px rgba(255, 0, 150, 1))' : 'drop-shadow(0 0 25px rgba(255, 0, 150, 0.6))',
                }}
              >
                HOLOGRAM
              </h1>
              
              <div className="flex items-center justify-center gap-5 mb-8">
                <div className="h-px w-24 bg-gradient-to-r from-transparent to-pink-500" 
                     style={{ boxShadow: '0 0 15px rgb(255, 0, 150)' }} />
                <span 
                  className="text-3xl font-bold tracking-widest"
                  style={{
                    color: 'rgb(150, 0, 255)',
                    textShadow: '0 0 20px rgb(150, 0, 255)',
                  }}
                >
                  DIMENSION
                </span>
                <div className="h-px w-24 bg-gradient-to-l from-transparent to-purple-500" 
                     style={{ boxShadow: '0 0 15px rgb(150, 0, 255)' }} />
              </div>
            </div>

            {/* Metric Panels */}
            <div className="grid grid-cols-3 gap-6 mb-14 max-w-4xl mx-auto">
              {[
                { label: 'DIMENSION', value: '∞D', color: 'rgb(255, 0, 150)', symbol: '◈' },
                { label: 'FREQUENCY', value: '777Hz', color: 'rgb(150, 0, 255)', symbol: '◆' },
                { label: 'RESONANCE', value: '99.9%', color: 'rgb(0, 150, 255)', symbol: '◊' },
              ].map((item, i) => (
                <div 
                  key={i}
                  className="p-8 border-2 backdrop-blur-sm transition-all duration-500 relative overflow-hidden group hover:scale-105"
                  style={{
                    borderColor: item.color,
                    backgroundColor: 'rgba(0, 0, 0, 0.7)',
                    boxShadow: glowActive ? '0 0 35px ' + item.color : '0 0 15px ' + item.color + '60',
                    clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                  }}
                >
                  <div className="absolute top-2 right-2 text-2xl opacity-40" style={{ color: item.color }}>
                    {item.symbol}
                  </div>
                  <div className="text-sm font-mono mb-2 uppercase tracking-wider" style={{ color: 'rgb(150, 150, 150)' }}>
                    {item.label}
                  </div>
                  <div 
                    className="text-4xl font-black"
                    style={{
                      color: item.color,
                      textShadow: '0 0 20px ' + item.color,
                    }}
                  >
                    {item.value}
                  </div>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle at center, ' + item.color.replace('rgb', 'rgba').replace(')', ', 0.15)') + ', transparent)',
                    }}
                  />
                </div>
              ))}
            </div>

            <p className="text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgb(200, 150, 255)' }}>
              Step beyond the veil into a realm where light bends reality and consciousness projects infinite possibilities
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-8 mb-10">
              <button 
                className="px-14 py-6 font-black uppercase tracking-widest transition-all duration-500 relative overflow-hidden group hover:scale-110"
                style={{
                  background: 'rgba(255, 0, 150, 0.15)',
                  border: '3px solid rgb(255, 0, 150)',
                  color: 'rgb(255, 0, 150)',
                  boxShadow: '0 0 40px rgba(255, 0, 150, 0.6)',
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                }}
              >
                <span className="relative z-10">ENTER REALM</span>
                <div className="absolute inset-0 bg-pink-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500" />
              </button>
              <button 
                className="px-14 py-6 font-black uppercase tracking-widest transition-all duration-500 hover:scale-110"
                style={{
                  backgroundColor: 'transparent',
                  border: '3px solid rgb(150, 0, 255)',
                  color: 'rgb(150, 0, 255)',
                  boxShadow: '0 0 40px rgba(150, 0, 255, 0.6)',
                  clipPath: 'polygon(10% 0%, 90% 0%, 100% 10%, 100% 90%, 90% 100%, 10% 100%, 0% 90%, 0% 10%)',
                }}
              >
                DISCOVER
              </button>
            </div>

            {/* Feature Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
              {[
                { icon: '◉', label: 'PROJECTION', active: true },
                { icon: '◈', label: 'REFRACTION', active: false },
                { icon: '◆', label: 'SYNTHESIS', active: true },
                { icon: '◊', label: 'QUANTUM', active: false },
              ].map((feature, i) => (
                <div 
                  key={i}
                  className="flex items-center gap-3 px-5 py-4 border transition-all duration-300"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.9)',
                    borderColor: feature.active ? 'rgb(255, 0, 150)' : 'rgb(100, 100, 100)',
                    boxShadow: feature.active ? '0 0 20px rgba(255, 0, 150, 0.4)' : 'none',
                  }}
                >
                  <div 
                    className="text-xl font-bold"
                    style={{ 
                      color: feature.active ? 'rgb(255, 0, 150)' : 'rgb(100, 100, 100)',
                      textShadow: feature.active ? '0 0 15px rgb(255, 0, 150)' : 'none',
                    }}
                  >
                    {feature.icon}
                  </div>
                  <span 
                    className="text-xs font-mono uppercase tracking-wider" 
                    style={{ color: feature.active ? 'rgb(255, 0, 150)' : 'rgb(100, 100, 100)' }}
                  >
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Indicators */}
        <div className="mt-10 flex justify-center gap-8">
          {[
            { label: 'PHASE', status: 'ACTIVE', color: 'rgb(255, 0, 150)' },
            { label: 'SIGNAL', status: 'STABLE', color: 'rgb(150, 0, 255)' },
            { label: 'STREAM', status: 'LIVE', color: 'rgb(0, 150, 255)' },
          ].map((stat, i) => (
            <div 
              key={i}
              className="flex items-center gap-3 px-6 py-3 border-2"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.8)',
                borderColor: stat.color,
                boxShadow: '0 0 20px ' + stat.color + '40',
              }}
            >
              <div 
                className="w-2.5 h-2.5 rounded-full animate-pulse" 
                style={{ 
                  backgroundColor: stat.color,
                  boxShadow: '0 0 15px ' + stat.color,
                }} 
              />
              <div className="flex flex-col">
                <span className="text-xs font-mono opacity-60" style={{ color: 'rgb(150, 150, 150)' }}>
                  {stat.label}
                </span>
                <span className="text-sm font-bold" style={{ color: stat.color }}>
                  {stat.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
  `
  },
  {
    name: "NeonQuantumHeader",
    category: "Header",
    code: `// import { useState, useEffect } from 'react';
function NeonQuantumHeader() {
  const [sparks, setSparks] = useState([]);
  const [dataStream, setDataStream] = useState([]);
  const [energyActive, setEnergyActive] = useState(false);
  const [spinAngle, setSpinAngle] = useState(0);

  useEffect(() => {
    // Data stream effect
    const codes = '█▓▒░▀▄│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞'.split('');
    const streamCount = 20;
    const streamData = Array.from({ length: streamCount }, (_, i) => ({
      id: i,
      x: (i / streamCount) * 100,
      y: Math.random() * 100,
      code: codes[Math.floor(Math.random() * codes.length)],
      speed: 1.5 + Math.random() * 3,
      opacity: 0.3 + Math.random() * 0.5,
    }));
    setDataStream(streamData);

    // Spin animation
    const spinInterval = setInterval(() => {
      setSpinAngle(prev => (prev + 1.5) % 360);
    }, 40);

    // Energy pulse effect
    const energyInterval = setInterval(() => {
      setEnergyActive(true);
      setTimeout(() => setEnergyActive(false), 700);
    }, 3000);

    return () => {
      clearInterval(spinInterval);
      clearInterval(energyInterval);
    };
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    
    const newSpark = {
      id: Date.now(),
      x,
      y,
    };
    
    setSparks(prev => [...prev, newSpark]);
    setTimeout(() => {
      setSparks(prev => prev.filter(s => s.id !== newSpark.id));
    }, 800);
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Data Stream Background */}
      {dataStream.map((stream) => (
        <div
          key={stream.id}
          className="absolute font-mono text-2xl transition-all duration-1000"
          style={{
            left: stream.x + '%',
            top: ((stream.y + (Date.now() / 120) * stream.speed) % 100) + '%',
            color: stream.id % 2 === 0 ? 'rgb(255, 100, 0)' : 'rgb(255, 200, 0)',
            opacity: stream.opacity,
            textShadow: '0 0 15px currentColor',
          }}
        >
          {stream.code}
        </div>
      ))}

      {/* Mouse Spark Effects */}
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute pointer-events-none transition-all duration-800"
          style={{
            left: spark.x + '%',
            top: spark.y + '%',
            width: '0px',
            height: '0px',
            transform: 'translate(-50%, -50%) scale(15)',
            opacity: 0,
          }}
        >
          <div 
            className="absolute inset-0 rounded-full"
            style={{
              border: '3px solid rgb(255, 100, 0)',
              boxShadow: '0 0 50px rgba(255, 100, 0, 0.8), 0 0 100px rgba(255, 200, 0, 0.5)',
            }}
          />
        </div>
      ))}

      {/* Spinning Quantum Dots */}
      {[0, 45, 90, 135, 180, 225, 270, 315].map((offset, i) => {
        const angle = (spinAngle + offset) * (Math.PI / 180);
        const radius = 280;
        const x = 50 + Math.cos(angle) * (radius / 11);
        const y = 50 + Math.sin(angle) * (radius / 11);
        
        return (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 transition-all duration-100"
            style={{
              left: x + '%',
              top: y + '%',
              background: i % 3 === 0 ? 'rgb(255, 100, 0)' : i % 3 === 1 ? 'rgb(255, 200, 0)' : 'rgb(255, 150, 0)',
              boxShadow: '0 0 20px ' + (i % 3 === 0 ? 'rgb(255, 100, 0)' : i % 3 === 1 ? 'rgb(255, 200, 0)' : 'rgb(255, 150, 0)'),
              transform: 'translate(-50%, -50%) rotate(' + spinAngle + 'deg)',
              clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
            }}
          />
        );
      })}

      <div className="relative z-10 max-w-7xl w-full">
        {/* Main Container */}
        <div className="relative">
          {/* Quantum Field Border */}
          <div 
            className="absolute inset-0 transition-all duration-600"
            style={{
              background: energyActive 
                ? 'linear-gradient(45deg, rgba(255, 100, 0, 0.12), rgba(255, 200, 0, 0.12))' 
                : 'transparent',
              border: '3px solid',
              borderImage: 'linear-gradient(45deg, rgb(255, 100, 0), rgb(255, 200, 0), rgb(255, 150, 0), rgb(255, 100, 0)) 1',
              boxShadow: energyActive 
                ? '0 0 90px rgba(255, 100, 0, 0.8), inset 0 0 70px rgba(255, 200, 0, 0.25)' 
                : '0 0 45px rgba(255, 100, 0, 0.45)',
              clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
            }}
          />

          <div className="relative p-20 text-center">
            {/* Corner Energy Points */}
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="absolute w-20 h-20"
                style={{
                  top: i < 2 ? '25px' : 'auto',
                  bottom: i >= 2 ? '25px' : 'auto',
                  left: i % 2 === 0 ? '25px' : 'auto',
                  right: i % 2 === 1 ? '25px' : 'auto',
                }}
              >
                <div 
                  className="w-full h-full transition-all duration-500"
                  style={{
                    background: 'transparent',
                    border: '4px solid transparent',
                    borderTop: i < 2 ? '4px solid rgb(255, 100, 0)' : 'none',
                    borderBottom: i >= 2 ? '4px solid rgb(255, 200, 0)' : 'none',
                    borderLeft: i % 2 === 0 ? '4px solid rgb(255, 100, 0)' : 'none',
                    borderRight: i % 2 === 1 ? '4px solid rgb(255, 200, 0)' : 'none',
                    boxShadow: energyActive ? '0 0 35px rgb(255, 150, 0)' : '0 0 18px rgb(255, 150, 0)',
                    clipPath: 'polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)',
                  }}
                />
              </div>
            ))}

            {/* Title Section */}
            <div className="mb-14">
              <h1 
                className="text-9xl font-black mb-7 tracking-wide transition-all duration-600"
                style={{
                  background: 'linear-gradient(180deg, rgb(255, 100, 0), rgb(255, 200, 0))',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  filter: energyActive ? 'drop-shadow(0 0 55px rgba(255, 150, 0, 1))' : 'drop-shadow(0 0 28px rgba(255, 150, 0, 0.7))',
                }}
              >
                QUANTUM
              </h1>
              
              <div className="flex items-center justify-center gap-6 mb-9">
                <div className="h-0.5 w-28 bg-gradient-to-r from-transparent to-orange-500" 
                     style={{ boxShadow: '0 0 12px rgb(255, 100, 0)' }} />
                <span 
                  className="text-3xl font-black tracking-widest"
                  style={{
                    color: 'rgb(255, 200, 0)',
                    textShadow: '0 0 18px rgb(255, 200, 0)',
                  }}
                >
                  CORE
                </span>
                <div className="h-0.5 w-28 bg-gradient-to-l from-transparent to-yellow-500" 
                     style={{ boxShadow: '0 0 12px rgb(255, 200, 0)' }} />
              </div>
            </div>

            {/* Energy Stats Grid */}
            <div className="grid grid-cols-5 gap-5 mb-16 max-w-6xl mx-auto">
              {[
                { label: 'POWER', value: '∞W', color: 'rgb(255, 100, 0)', glyph: '▲' },
                { label: 'CHARGE', value: '100%', color: 'rgb(255, 150, 0)', glyph: '▼' },
                { label: 'FLUX', value: '7.7K', color: 'rgb(255, 200, 0)', glyph: '◆' },
                { label: 'FIELD', value: 'STABLE', color: 'rgb(255, 150, 0)', glyph: '■' },
                { label: 'SYNC', value: 'LOCKED', color: 'rgb(255, 100, 0)', glyph: '●' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="p-6 border-2 backdrop-blur-sm transition-all duration-400 relative overflow-hidden group hover:scale-105"
                  style={{
                    borderColor: stat.color,
                    backgroundColor: 'rgba(0, 0, 0, 0.75)',
                    boxShadow: energyActive ? '0 0 30px ' + stat.color : '0 0 12px ' + stat.color + '50',
                  }}
                >
                  <div className="absolute top-2 right-2 text-lg opacity-40" style={{ color: stat.color }}>
                    {stat.glyph}
                  </div>
                  <div className="text-xs font-mono mb-2 uppercase tracking-wide" style={{ color: 'rgb(180, 180, 180)' }}>
                    {stat.label}
                  </div>
                  <div 
                    className="text-2xl font-black"
                    style={{
                      color: stat.color,
                      textShadow: '0 0 18px ' + stat.color,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400"
                    style={{
                      background: 'linear-gradient(180deg, ' + stat.color.replace('rgb', 'rgba').replace(')', ', 0.12)') + ', transparent)',
                    }}
                  />
                </div>
              ))}
            </div>

            <p className="text-2xl mb-14 max-w-4xl mx-auto leading-relaxed" style={{ color: 'rgb(255, 200, 150)' }}>
              Harness the infinite energy of quantum mechanics where particles dance between existence and pure potential
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-7 mb-12">
              <button 
                className="px-16 py-6 font-black uppercase tracking-widest transition-all duration-500 relative overflow-hidden group hover:scale-110"
                style={{
                  background: 'rgba(255, 100, 0, 0.18)',
                  border: '4px solid rgb(255, 100, 0)',
                  color: 'rgb(255, 100, 0)',
                  boxShadow: '0 0 45px rgba(255, 100, 0, 0.7)',
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                }}
              >
                <span className="relative z-10">ACTIVATE</span>
                <div className="absolute inset-0 bg-orange-500 opacity-0 group-hover:opacity-25 transition-opacity duration-500" />
              </button>
              <button 
                className="px-16 py-6 font-black uppercase tracking-widest transition-all duration-500 hover:scale-110"
                style={{
                  backgroundColor: 'transparent',
                  border: '4px solid rgb(255, 200, 0)',
                  color: 'rgb(255, 200, 0)',
                  boxShadow: '0 0 45px rgba(255, 200, 0, 0.7)',
                  clipPath: 'polygon(15% 0%, 85% 0%, 100% 15%, 100% 85%, 85% 100%, 15% 100%, 0% 85%, 0% 15%)',
                }}
              >
                EXPLORE
              </button>
            </div>

            {/* System Modules */}
            <div className="grid grid-cols-2 gap-5 max-w-3xl mx-auto">
              {[
                { title: 'ENTANGLEMENT', level: '█████████░', percent: '92%', color: 'rgb(255, 100, 0)' },
                { title: 'SUPERPOSITION', level: '████████░░', percent: '87%', color: 'rgb(255, 200, 0)' },
              ].map((module, i) => (
                <div 
                  key={i}
                  className="p-7 border-2 transition-all duration-400 relative group"
                  style={{ 
                    backgroundColor: 'rgba(0, 0, 0, 0.85)',
                    borderColor: module.color,
                    boxShadow: '0 0 25px ' + module.color + '40',
                  }}
                >
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-mono uppercase tracking-wider" style={{ color: module.color }}>
                      {module.title}
                    </span>
                    <span className="text-xs font-bold" style={{ color: module.color }}>
                      {module.percent}
                    </span>
                  </div>
                  <div 
                    className="text-lg font-mono tracking-wider"
                    style={{ 
                      color: module.color,
                      textShadow: '0 0 12px ' + module.color,
                    }}
                  >
                    {module.level}
                  </div>
                  <div 
                    className="absolute bottom-0 left-0 right-0 h-1 transition-all duration-400"
                    style={{
                      backgroundColor: module.color,
                      boxShadow: '0 0 15px ' + module.color,
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Status Monitor */}
        <div className="mt-12 flex justify-center gap-10">
          {[
            { id: 'REACTOR', state: 'ONLINE', color: 'rgb(255, 100, 0)' },
            { id: 'STABILIZER', state: 'ACTIVE', color: 'rgb(255, 150, 0)' },
            { id: 'EMITTER', state: 'READY', color: 'rgb(255, 200, 0)' },
          ].map((system, i) => (
            <div 
              key={i}
              className="flex items-center gap-4 px-7 py-4 border-2"
              style={{ 
                backgroundColor: 'rgba(0, 0, 0, 0.85)',
                borderColor: system.color,
                boxShadow: '0 0 22px ' + system.color + '50',
              }}
            >
              <div 
                className="w-3 h-3 animate-pulse" 
                style={{ 
                  backgroundColor: system.color,
                  boxShadow: '0 0 18px ' + system.color,
                  clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
                }} 
              />
              <div className="flex flex-col">
                <span className="text-xs font-mono opacity-70" style={{ color: 'rgb(180, 180, 180)' }}>
                  {system.id}
                </span>
                <span className="text-sm font-bold tracking-wide" style={{ color: system.color }}>
                  {system.state}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}    
  `
  },
  {
    name: "NeonUINEXpunkHeader",
    category: "Header",
    code: `function NeonUINEXpunkHeader() {
  const [glitchLines, setGlitchLines] = useState([]);
  const [scanProgress, setScanProgress] = useState(0);
  const [terminals, setTerminals] = useState([]);
  const [electricArc, setElectricArc] = useState(false);

  useEffect(() => {
    // Terminal text animation
    const terminalTexts = [
      '> INITIALIZING NEURAL LINK...',
      '> DECRYPTING DATA STREAM...',
      '> SYNCING QUANTUM PROCESSOR...',
      '> ACCESSING MAINFRAME...',
      '> BYPASSING FIREWALL...',
      '> CONNECTION ESTABLISHED...',
    ];
    
    let currentIndex = 0;
    const terminalInterval = setInterval(() => {
      setTerminals(prev => {
        const newTerminals = [...prev, terminalTexts[currentIndex]];
        if (newTerminals.length > 4) newTerminals.shift();
        return newTerminals;
      });
      currentIndex = (currentIndex + 1) % terminalTexts.length;
    }, 2000);

    // Scan line animation
    const scanInterval = setInterval(() => {
      setScanProgress(prev => (prev + 2) % 100);
    }, 50);

    // Electric arc pulse
    const arcInterval = setInterval(() => {
      setElectricArc(true);
      setTimeout(() => setElectricArc(false), 400);
    }, 5000);

    // Glitch effect
    const glitchInterval = setInterval(() => {
      const newGlitch = {
        id: Date.now(),
        y: Math.random() * 100,
        height: 2 + Math.random() * 8,
      };
      setGlitchLines(prev => [...prev, newGlitch]);
      setTimeout(() => {
        setGlitchLines(prev => prev.filter(g => g.id !== newGlitch.id));
      }, 200);
    }, 3000);

    return () => {
      clearInterval(terminalInterval);
      clearInterval(scanInterval);
      clearInterval(arcInterval);
      clearInterval(glitchInterval);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-8 relative overflow-hidden">
      
      {/* Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: 'linear-gradient(rgba(0, 255, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 0, 255, 0.2) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }}
        />
      </div>

      {/* Scan Line */}
      <div 
        className="absolute left-0 right-0 h-1 transition-all duration-100 pointer-events-none"
        style={{
          top: scanProgress + '%',
          background: 'linear-gradient(to bottom, transparent, rgb(0, 255, 255), transparent)',
          boxShadow: '0 0 40px rgb(0, 255, 255)',
        }}
      />

      {/* Glitch Lines */}
      {glitchLines.map((glitch) => (
        <div
          key={glitch.id}
          className="absolute left-0 right-0 pointer-events-none"
          style={{
            top: glitch.y + '%',
            height: glitch.height + 'px',
            background: 'rgba(255, 0, 255, 0.8)',
            boxShadow: '0 0 20px rgba(255, 0, 255, 0.8)',
          }}
        />
      ))}

      {/* Top HUD Bar */}
      <div className="absolute top-0 left-0 right-0 z-20">
        <div 
          className="flex justify-between items-center px-8 py-4"
          style={{
            background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.9), transparent)',
            borderBottom: '2px solid rgb(0, 255, 255)',
            boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
          }}
        >
          <div className="flex items-center gap-4">
            <div 
              className="w-3 h-3 rounded-full animate-pulse"
              style={{
                backgroundColor: 'rgb(0, 255, 0)',
                boxShadow: '0 0 15px rgb(0, 255, 0)',
              }}
            />
            <span className="text-sm font-mono tracking-wider" style={{ color: 'rgb(0, 255, 255)' }}>
              SYSTEM ONLINE
            </span>
          </div>
          <div className="flex gap-6">
            <span className="text-xs font-mono" style={{ color: 'rgb(150, 150, 150)' }}>
              USER: GHOST_001
            </span>
            <span className="text-xs font-mono" style={{ color: 'rgb(150, 150, 150)' }}>
              SECTOR: NEO-TOKYO
            </span>
            <span className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)' }}>
              23:47:16
            </span>
          </div>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-7xl w-full mt-20">
        
        {/* Left Side Panel */}
        <div className="absolute left-0 top-0 bottom-0 w-80 hidden lg:block">
          <div 
            className="h-full border-2 p-6"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderColor: 'rgb(255, 0, 255)',
              boxShadow: '0 0 30px rgba(255, 0, 255, 0.3)',
            }}
          >
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-purple-500">
              <div className="text-lg" style={{ color: 'rgb(255, 0, 255)' }}>▶</div>
              <span className="text-sm font-mono font-bold tracking-wider" style={{ color: 'rgb(255, 0, 255)' }}>
                TERMINAL
              </span>
            </div>
            
            <div className="space-y-2">
              {terminals.map((text, i) => (
                <div 
                  key={i}
                  className="text-xs font-mono"
                  style={{ 
                    color: 'rgb(0, 255, 0)',
                    textShadow: '0 0 10px rgb(0, 255, 0)',
                  }}
                >
                  {text}
                </div>
              ))}
            </div>

            <div className="mt-10 space-y-4">
              <div>
                <div className="text-xs font-mono mb-1" style={{ color: 'rgb(150, 150, 150)' }}>
                  CPU USAGE
                </div>
                <div 
                  className="h-2 relative overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(0, 255, 255, 0.2)',
                    border: '1px solid rgb(0, 255, 255)',
                  }}
                >
                  <div 
                    className="h-full transition-all duration-1000"
                    style={{
                      width: '67%',
                      backgroundColor: 'rgb(0, 255, 255)',
                      boxShadow: '0 0 15px rgb(0, 255, 255)',
                    }}
                  />
                </div>
              </div>
              <div>
                <div className="text-xs font-mono mb-1" style={{ color: 'rgb(150, 150, 150)' }}>
                  MEMORY
                </div>
                <div 
                  className="h-2 relative overflow-hidden"
                  style={{
                    backgroundColor: 'rgba(255, 0, 255, 0.2)',
                    border: '1px solid rgb(255, 0, 255)',
                  }}
                >
                  <div 
                    className="h-full transition-all duration-1000"
                    style={{
                      width: '84%',
                      backgroundColor: 'rgb(255, 0, 255)',
                      boxShadow: '0 0 15px rgb(255, 0, 255)',
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center Content */}
        <div className="lg:pl-96 lg:pr-96">
          <div className="text-center">
            
            {/* Main Title */}
            <div className="mb-12 relative">
              <div 
                className="absolute inset-0 blur-xl opacity-50"
                style={{
                  background: 'linear-gradient(90deg, rgb(0, 255, 255), rgb(255, 0, 255))',
                }}
              />
              <h1 
                className="text-8xl font-black tracking-tight relative"
                style={{
                  color: 'white',
                  textShadow: electricArc 
                    ? '0 0 30px rgb(0, 255, 255), 0 0 60px rgb(255, 0, 255), 0 0 90px rgb(0, 255, 255)' 
                    : '0 0 20px rgb(0, 255, 255), 0 0 40px rgb(255, 0, 255)',
                  transition: 'text-shadow 0.3s',
                }}
              >
                UINEXPUNK
              </h1>
              
              {/* Glitch overlay */}
              {electricArc && (
                <>
                  <h1 
                    className="absolute inset-0 text-8xl font-black tracking-tight"
                    style={{
                      color: 'rgb(0, 255, 255)',
                      opacity: 0.7,
                      transform: 'translateX(-5px)',
                    }}
                  >
                    UINEXPUNK
                  </h1>
                  <h1 
                    className="absolute inset-0 text-8xl font-black tracking-tight"
                    style={{
                      color: 'rgb(255, 0, 255)',
                      opacity: 0.7,
                      transform: 'translateX(5px)',
                    }}
                  >
                    UINEXPUNK
                  </h1>
                </>
              )}

              <div className="flex items-center justify-center gap-4 mt-6">
                <div 
                  className="h-px w-32"
                  style={{
                    background: 'linear-gradient(to right, transparent, rgb(0, 255, 255))',
                    boxShadow: '0 0 10px rgb(0, 255, 255)',
                  }}
                />
                <span 
                  className="text-2xl font-mono font-bold tracking-widest"
                  style={{
                    color: 'rgb(255, 0, 255)',
                    textShadow: '0 0 20px rgb(255, 0, 255)',
                  }}
                >
                  2077
                </span>
                <div 
                  className="h-px w-32"
                  style={{
                    background: 'linear-gradient(to left, transparent, rgb(255, 0, 255))',
                    boxShadow: '0 0 10px rgb(255, 0, 255)',
                  }}
                />
              </div>
            </div>

            {/* Description */}
            <p 
              className="text-lg max-w-2xl mx-auto mb-12 leading-relaxed"
              style={{
                color: 'rgb(150, 200, 200)',
              }}
            >
              Dive into the neon-soaked streets where technology blurs the line between humanity and machine. The future is now.
            </p>

            {/* Action Buttons */}
            <div className="flex justify-center gap-6 mb-16">
              <button 
                className="px-12 py-4 font-bold uppercase tracking-wider relative overflow-hidden group transition-all duration-300"
                style={{
                  backgroundColor: 'rgba(0, 255, 255, 0.2)',
                  border: '2px solid rgb(0, 255, 255)',
                  color: 'rgb(0, 255, 255)',
                  boxShadow: '0 0 30px rgba(0, 255, 255, 0.5)',
                  clipPath: 'polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%)',
                }}
              >
                <span className="relative z-10">JACK IN</span>
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                  style={{ backgroundColor: 'rgb(0, 255, 255)' }}
                />
              </button>
              <button 
                className="px-12 py-4 font-bold uppercase tracking-wider transition-all duration-300"
                style={{
                  backgroundColor: 'transparent',
                  border: '2px solid rgb(255, 0, 255)',
                  color: 'rgb(255, 0, 255)',
                  boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
                  clipPath: 'polygon(0% 0%, 95% 0%, 100% 100%, 5% 100%)',
                }}
              >
                EXPLORE
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-3 gap-6 max-w-4xl mx-auto">
              {[
                { icon: '⚡', value: '2077', label: 'TERAFLOPS', color1: 'rgb(0, 255, 255)', color2: 'rgba(0, 255, 255, 0.2)' },
                { icon: '🔒', value: 'AES-1024', label: 'ENCRYPTED', color1: 'rgb(255, 0, 255)', color2: 'rgba(255, 0, 255, 0.2)' },
                { icon: '🌐', value: 'GLOBAL', label: 'NETWORK', color1: 'rgb(0, 255, 255)', color2: 'rgba(0, 255, 255, 0.2)' },
              ].map((stat, i) => (
                <div 
                  key={i}
                  className="p-8 border-2 transition-all duration-300 hover:scale-105 relative overflow-hidden group"
                  style={{
                    backgroundColor: 'rgba(0, 0, 0, 0.8)',
                    borderColor: stat.color1,
                    boxShadow: '0 0 25px ' + stat.color2,
                    clipPath: 'polygon(0% 10%, 10% 0%, 100% 0%, 100% 90%, 90% 100%, 0% 100%)',
                  }}
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div 
                    className="text-3xl font-black mb-2"
                    style={{
                      color: stat.color1,
                      textShadow: '0 0 20px ' + stat.color1,
                    }}
                  >
                    {stat.value}
                  </div>
                  <div 
                    className="text-xs font-mono uppercase tracking-widest"
                    style={{ color: 'rgb(150, 150, 150)' }}
                  >
                    {stat.label}
                  </div>
                  <div 
                    className="absolute top-0 right-0 w-20 h-20 opacity-10"
                    style={{
                      background: 'radial-gradient(circle, ' + stat.color1 + ', transparent)',
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side Panel */}
        <div className="absolute right-0 top-0 bottom-0 w-80 hidden lg:block">
          <div 
            className="h-full border-2 p-6"
            style={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              borderColor: 'rgb(0, 255, 255)',
              boxShadow: '0 0 30px rgba(0, 255, 255, 0.3)',
            }}
          >
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-cyan-500">
              <div className="text-lg" style={{ color: 'rgb(0, 255, 255)' }}>◉</div>
              <span className="text-sm font-mono font-bold tracking-wider" style={{ color: 'rgb(0, 255, 255)' }}>
                STATUS
              </span>
            </div>

            <div className="space-y-6">
              {[
                { label: 'NEURAL LINK', status: 'CONNECTED', active: true },
                { label: 'FIREWALL', status: 'ACTIVE', active: true },
                { label: 'ENCRYPTION', status: 'ENABLED', active: true },
                { label: 'VPN TUNNEL', status: 'SECURED', active: true },
                { label: 'BACKUP', status: 'SYNCED', active: false },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: item.active ? 'rgb(0, 255, 0)' : 'rgb(100, 100, 100)',
                        boxShadow: item.active ? '0 0 10px rgb(0, 255, 0)' : 'none',
                      }}
                    />
                    <span className="text-xs font-mono" style={{ color: 'rgb(150, 150, 150)' }}>
                      {item.label}
                    </span>
                  </div>
                  <span 
                    className="text-xs font-mono font-bold"
                    style={{ 
                      color: item.active ? 'rgb(0, 255, 0)' : 'rgb(100, 100, 100)',
                    }}
                  >
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-6 border-t border-cyan-500">
              <div className="text-xs font-mono mb-3" style={{ color: 'rgb(150, 150, 150)' }}>
                NETWORK ACTIVITY
              </div>
              <div className="flex gap-1">
                {[...Array(20)].map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 transition-all duration-300"
                    style={{
                      height: (20 + Math.random() * 40) + 'px',
                      backgroundColor: i % 2 === 0 ? 'rgb(0, 255, 255)' : 'rgb(255, 0, 255)',
                      opacity: 0.6,
                      boxShadow: '0 0 5px currentColor',
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD Bar */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <div 
          className="flex justify-between items-center px-8 py-3"
          style={{
            background: 'linear-gradient(to top, rgba(0, 0, 0, 0.9), transparent)',
            borderTop: '2px solid rgb(255, 0, 255)',
            boxShadow: '0 0 30px rgba(255, 0, 255, 0.5)',
          }}
        >
          <div className="flex gap-8">
            {['PROTOCOL', 'DAEMON', 'MATRIX'].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full animate-pulse"
                  style={{
                    backgroundColor: 'rgb(0, 255, 0)',
                    boxShadow: '0 0 10px rgb(0, 255, 0)',
                  }}
                />
                <span className="text-xs font-mono" style={{ color: 'rgb(0, 255, 255)' }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
          <span className="text-xs font-mono" style={{ color: 'rgb(150, 150, 150)' }}>
            © 2077 NEUROLINK CORP. ALL RIGHTS RESERVED.
          </span>
        </div>
      </div>
    </div>
  );
}
  `
  },
  {
    name: "MegaStylishFooter",
    category: "Footer",
    code: `
function MegaStylishFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [focusedInput, setFocusedInput] = useState(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-end relative overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Dynamic Gradient Orbs */}
      <div 
        className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl transition-all duration-1000"
        style={{
          backgroundColor: '#8b5cf6',
          left: mousePosition.x - 192 + 'px',
          top: mousePosition.y - 192 + 'px',
        }}
      ></div>
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full opacity-25 blur-3xl bg-cyan-500 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/3 w-80 h-80 rounded-full opacity-25 blur-3xl bg-pink-500 animate-pulse"></div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-bounce"
          style={{
            left: (i * 5) + '%',
            top: (i * 3.5) + '%',
            animationDuration: (5 + i * 0.3) + 's',
            animationDelay: (i * 0.2) + 's'
          }}
        ></div>
      ))}

      <footer className="relative z-10 w-full">
        
        {/* Animated Top Border */}
        <div className="relative h-0.5 mb-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-500 to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-0 h-full w-1/3 bg-gradient-to-r from-cyan-500 to-purple-500 animate-pulse"></div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-20">
            
            {/* Left Section - Brand & CTA */}
            <div className="lg:col-span-5">
              
              {/* Premium Logo */}
              <div className="mb-12">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 bg-purple-600 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative px-8 py-4 bg-black rounded-2xl border border-purple-500">
                    <div className="flex items-center gap-4">
                      <div className="relative w-14 h-14">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-cyan-500 rounded-xl animate-spin" style={{ animationDuration: '3s' }}></div>
                        <div className="absolute inset-1 bg-black rounded-lg flex items-center justify-center">
                          <span className="text-2xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">Ξ</span>
                        </div>
                      </div>
                      <div>
                        <h2 className="text-4xl font-black bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">NEXUS</h2>
                        <p className="text-xs font-bold tracking-widest text-purple-400">CREATIVE STUDIO</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mt-8 text-lg">
                  Crafting tomorrow's digital experiences today. We blend creativity with technology to create unforgettable brand moments.
                </p>
              </div>

              {/* Premium Stats Grid */}
              <div className="relative mb-10">
                <div className="absolute inset-0 bg-purple-600 rounded-3xl blur-xl opacity-20"></div>
                <div className="relative grid grid-cols-2 gap-4 p-6 bg-slate-950 backdrop-blur-sm border border-slate-800 rounded-3xl">
                  {[
                    { value: '2.5K+', label: 'Projects Shipped', icon: '🚀', color: 'purple' },
                    { value: '98%', label: 'Client Satisfaction', icon: '⭐', color: 'pink' },
                    { value: '150+', label: 'Global Clients', icon: '🌍', color: 'cyan' },
                    { value: '24/7', label: 'Support Available', icon: '💬', color: 'green' },
                  ].map((stat, i) => (
                    <div 
                      key={i}
                      className="relative p-4 bg-slate-900 border border-slate-700 rounded-2xl hover:border-purple-500 transition-all duration-300 cursor-pointer group overflow-hidden"
                    >
                      <div className="relative">
                        <div className="text-2xl mb-2">{stat.icon}</div>
                        <div className="text-3xl font-black mb-1" style={{
                          color: stat.color === 'purple' ? '#a855f7' :
                                 stat.color === 'pink' ? '#ec4899' :
                                 stat.color === 'cyan' ? '#06b6d4' : '#10b981'
                        }}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-gray-500">{stat.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premium Social Links */}
              <div>
                <p className="text-sm font-bold text-gray-400 mb-4 tracking-wider">CONNECT WITH US</p>
                <div className="flex flex-wrap gap-3">
                  {[
                    { name: 'Discord', icon: '💬', color: '#5865F2' },
                    { name: 'Twitter', icon: '𝕏', color: '#1DA1F2' },
                    { name: 'Instagram', icon: '📷', color: '#E4405F' },
                    { name: 'Dribbble', icon: '🏀', color: '#EA4C89' },
                    { name: 'GitHub', icon: '⚡', color: '#6e5494' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="relative group"
                      onMouseEnter={() => setHoveredSocial(social.name)}
                      onMouseLeave={() => setHoveredSocial(null)}
                    >
                      <div className="absolute inset-0 rounded-xl blur-md opacity-0 group-hover:opacity-75 transition-opacity duration-300" style={{ backgroundColor: social.color }}></div>
                      <div className="relative w-14 h-14 flex items-center justify-center border-2 rounded-xl font-bold text-lg transition-all duration-300"
                        style={{
                          backgroundColor: hoveredSocial === social.name ? social.color : 'transparent',
                          borderColor: hoveredSocial === social.name ? social.color : '#334155',
                          color: hoveredSocial === social.name ? '#ffffff' : '#64748b',
                          transform: hoveredSocial === social.name ? 'translateY(-4px) scale(1.1)' : 'translateY(0) scale(1)',
                        }}
                      >
                        {social.icon}
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Section - Navigation */}
            <div className="lg:col-span-4">
              <div className="grid grid-cols-2 gap-8">
                {[
                  { 
                    title: 'Solutions',
                    links: ['Web Design', 'Mobile Apps', 'UI/UX Design', 'Brand Identity', 'Digital Marketing'] 
                  },
                  { 
                    title: 'Company',
                    links: ['About', 'Careers', 'Blog', 'Press Kit', 'Contact'] 
                  },
                ].map((section, idx) => (
                  <div key={idx}>
                    <h4 className="text-sm font-black text-white tracking-widest mb-6 flex items-center gap-2">
                      <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                      {section.title}
                    </h4>
                    <ul className="space-y-4">
                      {section.links.map((link) => (
                        <li key={link}>
                          <a
                            href="#"
                            className="group text-sm font-medium transition-all duration-300 flex items-center gap-2"
                            style={{
                              color: hoveredLink === link ? '#a78bfa' : '#94a3b8'
                            }}
                            onMouseEnter={() => setHoveredLink(link)}
                            onMouseLeave={() => setHoveredLink(null)}
                          >
                            <span className="inline-block transition-transform duration-300" style={{
                              transform: hoveredLink === link ? 'translateX(4px)' : 'translateX(0)'
                            }}>→</span>
                            {link}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Section - Newsletter */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute inset-0 bg-purple-600 rounded-3xl blur-2xl opacity-30"></div>
                <div className="relative p-8 bg-gradient-to-br from-slate-900 to-slate-950 border-2 border-purple-500 rounded-3xl">
                  
                  {/* Glowing Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 bg-white opacity-20 animate-pulse"></div>
                    <div className="relative w-2 h-2 bg-white rounded-full"></div>
                    <span className="relative text-xs font-black text-white tracking-wider">HOT 🔥</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Stay in the Loop
                  </h3>
                  
                  <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                    Join 50K+ creatives getting weekly insights and exclusive resources.
                  </p>

                  {/* Premium Input */}
                  <div className="space-y-3 mb-4">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email"
                        className="w-full px-5 py-4 bg-black border-2 rounded-2xl text-white text-sm font-medium focus:outline-none transition-all duration-300 backdrop-blur-sm"
                        style={{
                          borderColor: focusedInput === 'email' ? '#a78bfa' : '#1e293b',
                          boxShadow: focusedInput === 'email' ? '0 0 20px rgba(167, 139, 250, 0.3)' : 'none'
                        }}
                        onFocus={() => setFocusedInput('email')}
                        onBlur={() => setFocusedInput(null)}
                      />
                    </div>
                    <button className="relative w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-black rounded-2xl overflow-hidden group">
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <span className="relative flex items-center justify-center gap-2">
                        SUBSCRIBE
                        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                      </span>
                    </button>
                  </div>

                  <p className="text-xs text-gray-600 flex items-center gap-1">
                    <span>🔐</span> Privacy first. Unsubscribe anytime.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Section */}
          <div className="border-t border-slate-800 pt-10">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
                <p className="text-gray-500 font-medium">
                  © 2025 Nexus Studio. Designed with 💜
                </p>
                <div className="flex gap-6">
                  {['Privacy', 'Terms', 'Cookies', 'Licenses'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="font-medium transition-all duration-300"
                      style={{
                        color: hoveredLink === item ? '#a78bfa' : '#64748b',
                        transform: hoveredLink === item ? 'translateY(-2px)' : 'translateY(0)'
                      }}
                      onMouseEnter={() => setHoveredLink(item)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Live Status Badge */}
              <div className="flex items-center gap-3 px-5 py-3 bg-green-500 bg-opacity-10 border border-green-500 rounded-full backdrop-blur-sm">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-black text-green-400 tracking-wider">LIVE & OPERATIONAL</span>
              </div>

            </div>
          </div>

        </div>

        {/* Animated Bottom Bar */}
        <div className="relative h-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-30 animate-pulse"></div>
        </div>

      </footer>
    </div>
  );
}    
  `
  },
  {
    name: "CosmicFooter",
    category: "Footer",
    code: `
function CosmicFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredService, setHoveredService] = useState(null);
  const [inputFocus, setInputFocus] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-black flex items-end relative overflow-hidden">
      
      {/* Starfield Effect */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full animate-pulse"
            style={{
              width: (Math.random() * 3) + 'px',
              height: (Math.random() * 3) + 'px',
              left: (i * 2.1) + '%',
              top: ((i * 7) % 100) + '%',
              opacity: Math.random() * 0.7,
              animationDuration: (2 + Math.random() * 3) + 's',
              animationDelay: (Math.random() * 2) + 's'
            }}
          ></div>
        ))}
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-600 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Mesh Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
          backgroundSize: '30px 30px',
        }}></div>
      </div>

      <footer className="relative z-10 w-full">
        
        {/* Top Divider */}
        <div className="relative mb-16">
          <div className="flex items-center justify-center gap-4 px-8">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent"></div>
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse"></div>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
            <div className="h-px flex-1 bg-gradient-to-l from-transparent via-pink-500 to-transparent"></div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-16">
          
          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            
            {/* Left - Brand Section */}
            <div className="lg:col-span-1">
              
              {/* Logo */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl rotate-6 animate-pulse"></div>
                    <div className="absolute inset-0 w-20 h-20 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl blur-xl opacity-50"></div>
                    <div className="absolute inset-0 w-20 h-20 bg-black rounded-2xl flex items-center justify-center" style={{ transform: 'rotate(-6deg)' }}>
                      <span className="text-3xl font-black bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">∞</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-5xl font-black bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">INFINITY</h2>
                    <p className="text-xs font-bold tracking-widest text-indigo-400">TECH SOLUTIONS</p>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed text-base mb-8">
                  Building the future of digital innovation. We transform ideas into reality with cutting-edge technology and creative excellence.
                </p>

                {/* Trust Badges */}
                <div className="flex flex-wrap gap-3">
                  {[
                    { icon: '🏆', text: 'Award Winner', color: 'yellow' },
                    { icon: '🔒', text: 'Secure', color: 'green' },
                    { icon: '⚡', text: 'Fast Delivery', color: 'blue' },
                  ].map((badge, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-2 px-4 py-2 border rounded-full transition-all duration-300 cursor-pointer"
                      style={{
                        borderColor: hoveredBadge === i ? 
                          (badge.color === 'yellow' ? '#facc15' : badge.color === 'green' ? '#22c55e' : '#3b82f6') : '#1e293b',
                        backgroundColor: hoveredBadge === i ? 'rgba(255,255,255,0.05)' : 'transparent',
                        transform: hoveredBadge === i ? 'translateY(-2px)' : 'translateY(0)'
                      }}
                      onMouseEnter={() => setHoveredBadge(i)}
                      onMouseLeave={() => setHoveredBadge(null)}
                    >
                      <span className="text-sm">{badge.icon}</span>
                      <span className="text-xs font-semibold text-gray-400">{badge.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-400 hover:text-indigo-400 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📧</span>
                  </div>
                  <span className="text-sm font-medium">hello@infinity.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-pink-400 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📞</span>
                  </div>
                  <span className="text-sm font-medium">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-400 hover:text-cyan-400 transition-colors duration-300 cursor-pointer">
                  <div className="w-10 h-10 bg-slate-900 border border-slate-700 rounded-lg flex items-center justify-center">
                    <span className="text-lg">📍</span>
                  </div>
                  <span className="text-sm font-medium">123 Tech Street, Silicon Valley</span>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-xs font-bold text-gray-500 mb-4 tracking-widest">FOLLOW US</p>
                <div className="flex gap-3">
                  {[
                    { name: 'FB', color: '#1877f2' },
                    { name: 'TW', color: '#1da1f2' },
                    { name: 'IG', color: '#e4405f' },
                    { name: 'LI', color: '#0a66c2' },
                    { name: 'YT', color: '#ff0000' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-12 h-12 border-2 rounded-xl flex items-center justify-center font-black text-xs transition-all duration-300"
                      style={{
                        borderColor: hoveredLink === social.name ? social.color : '#1e293b',
                        backgroundColor: hoveredLink === social.name ? social.color : 'transparent',
                        color: hoveredLink === social.name ? '#ffffff' : '#64748b',
                        transform: hoveredLink === social.name ? 'translateY(-4px) rotate(5deg)' : 'translateY(0) rotate(0deg)',
                      }}
                      onMouseEnter={() => setHoveredLink(social.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {social.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle - Services Grid */}
            <div className="lg:col-span-1">
              <h3 className="text-sm font-black text-white tracking-widest mb-8 flex items-center gap-2">
                <span className="w-8 h-0.5 bg-gradient-to-r from-indigo-500 to-purple-500"></span>
                OUR SERVICES
              </h3>
              
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: '💻', name: 'Web Dev', color: 'indigo' },
                  { icon: '📱', name: 'Mobile', color: 'purple' },
                  { icon: '🎨', name: 'Design', color: 'pink' },
                  { icon: '🚀', name: 'Marketing', color: 'cyan' },
                  { icon: '☁️', name: 'Cloud', color: 'blue' },
                  { icon: '🔐', name: 'Security', color: 'green' },
                ].map((service, i) => (
                  <div 
                    key={i}
                    className="relative p-5 bg-slate-900 border rounded-2xl transition-all duration-300 cursor-pointer group overflow-hidden"
                    style={{
                      borderColor: hoveredService === i ? 
                        (service.color === 'indigo' ? '#6366f1' : 
                         service.color === 'purple' ? '#a855f7' : 
                         service.color === 'pink' ? '#ec4899' : 
                         service.color === 'cyan' ? '#06b6d4' : 
                         service.color === 'blue' ? '#3b82f6' : '#22c55e') : '#1e293b',
                      transform: hoveredService === i ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                    onMouseEnter={() => setHoveredService(i)}
                    onMouseLeave={() => setHoveredService(null)}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300" style={{
                      backgroundColor: service.color === 'indigo' ? '#6366f1' : 
                                       service.color === 'purple' ? '#a855f7' : 
                                       service.color === 'pink' ? '#ec4899' : 
                                       service.color === 'cyan' ? '#06b6d4' : 
                                       service.color === 'blue' ? '#3b82f6' : '#22c55e'
                    }}></div>
                    <div className="relative text-center">
                      <div className="text-3xl mb-2">{service.icon}</div>
                      <div className="text-sm font-bold text-white">{service.name}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Links */}
              <div className="mt-10">
                <h4 className="text-sm font-black text-white tracking-widest mb-6">QUICK LINKS</h4>
                <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                  {['About Us', 'Portfolio', 'Pricing', 'Blog', 'Careers', 'Support', 'Partners', 'FAQ'].map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="text-sm font-medium transition-all duration-300 flex items-center gap-2"
                      style={{
                        color: hoveredLink === link ? '#a78bfa' : '#94a3b8',
                        paddingLeft: hoveredLink === link ? '8px' : '0'
                      }}
                      onMouseEnter={() => setHoveredLink(link)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      <span style={{ opacity: hoveredLink === link ? 1 : 0 }}>→</span>
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right - Newsletter */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-600 to-pink-600 rounded-3xl blur-2xl opacity-30"></div>
                  <div className="relative p-8 bg-slate-950 border-2 border-indigo-500 rounded-3xl">
                    
                    {/* Premium Badge */}
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full mb-6">
                      <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
                      <span className="text-xs font-black text-white tracking-wider">EXCLUSIVE ACCESS</span>
                    </div>

                    <h3 className="text-3xl font-black mb-3 bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                      Join Our Newsletter
                    </h3>
                    
                    <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                      Get the latest updates, exclusive deals, and insider tips delivered to your inbox weekly.
                    </p>

                    {/* Form */}
                    <div className="space-y-3 mb-6">
                      <input
                        type="text"
                        placeholder="Your Name"
                        className="w-full px-5 py-4 bg-slate-900 border-2 rounded-xl text-white text-sm font-medium focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: inputFocus ? '#6366f1' : '#1e293b'
                        }}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                      />
                      <input
                        type="email"
                        placeholder="your.email@example.com"
                        className="w-full px-5 py-4 bg-slate-900 border-2 rounded-xl text-white text-sm font-medium focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: inputFocus ? '#a855f7' : '#1e293b'
                        }}
                        onFocus={() => setInputFocus(true)}
                        onBlur={() => setInputFocus(false)}
                      />
                      <button className="w-full px-6 py-4 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white font-black rounded-xl hover:scale-105 transition-transform duration-300 relative overflow-hidden group">
                        <span className="relative z-10">SUBSCRIBE NOW →</span>
                        <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </button>
                    </div>

                    <p className="text-xs text-gray-600 flex items-center gap-2">
                      <span>🔒</span> 
                      <span>No spam. Unsubscribe anytime.</span>
                    </p>

                    {/* Stats */}
                    <div className="mt-8 pt-6 border-t border-slate-800">
                      <div className="flex items-center justify-between">
                        <div className="text-center">
                          <div className="text-2xl font-black text-indigo-400">25K+</div>
                          <div className="text-xs text-gray-500 font-semibold">Subscribers</div>
                        </div>
                        <div className="w-px h-12 bg-slate-800"></div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-purple-400">500+</div>
                          <div className="text-xs text-gray-500 font-semibold">Resources</div>
                        </div>
                        <div className="w-px h-12 bg-slate-800"></div>
                        <div className="text-center">
                          <div className="text-2xl font-black text-pink-400">4.9★</div>
                          <div className="text-xs text-gray-500 font-semibold">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-10 border-t border-slate-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
                <p className="text-gray-500 font-medium">
                  © 2025 Infinity Tech. Made with 💖 in Silicon Valley
                </p>
                <div className="flex gap-6">
                  {['Privacy', 'Terms', 'Legal', 'Cookies'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="font-medium transition-colors duration-300"
                      style={{
                        color: hoveredLink === item ? '#a78bfa' : '#64748b'
                      }}
                      onMouseEnter={() => setHoveredLink(item)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Status Badge */}
              <div className="flex items-center gap-3 px-5 py-3 bg-emerald-500 bg-opacity-10 border-2 border-emerald-500 rounded-full">
                <div className="relative">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-emerald-400 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-black text-emerald-400 tracking-widest">SYSTEM ACTIVE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Gradient */}
        <div className="h-2 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600"></div>

      </footer>
    </div>
  );
}
  `
  },
  {
    name: "NeonUINEXFooter",
    category: "Footer",
    code: `function NeonUINEXFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeInput, setActiveInput] = useState(null);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Neon Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ffff 1px, transparent 1px), linear-gradient(90deg, #00ffff 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      {/* Glowing Scanlines */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 animate-pulse" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #ff00ff 2px, #ff00ff 4px)',
          backgroundSize: '100% 4px',
        }}></div>
      </div>

      {/* Neon Orbs */}
      <div className="absolute top-20 left-20 w-80 h-80 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-yellow-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Particles */}
      {[...Array(30)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-bounce"
          style={{
            width: (2 + Math.random() * 2) + 'px',
            height: (2 + Math.random() * 2) + 'px',
            backgroundColor: i % 3 === 0 ? '#00ffff' : i % 3 === 1 ? '#ff00ff' : '#ffff00',
            left: (i * 3.3) + '%',
            top: ((i * 5.5) % 100) + '%',
            opacity: 0.4,
            animationDuration: (3 + Math.random() * 4) + 's',
            animationDelay: (Math.random() * 2) + 's'
          }}
        ></div>
      ))}

      <footer className="relative z-10 w-full">
        
        {/* Neon Top Border */}
        <div className="relative mb-16">
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500"></div>
          <div className="h-1 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 blur-md"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="flex items-center gap-4 px-6 py-3 bg-black border-2 border-cyan-500 rounded-full">
              <div className="w-3 h-3 bg-cyan-500 rounded-full animate-ping"></div>
              <span className="text-xs font-black text-cyan-500 tracking-widest">UINEX ZONE</span>
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 pb-12">
          
          {/* Main Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-16">
            
            {/* Left Section - Brand */}
            <div className="lg:col-span-4">
              
              {/* UINEX Logo */}
              <div className="mb-10">
                <div className="relative inline-block mb-8">
                  <div className="absolute inset-0 bg-cyan-500 blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative flex items-center gap-4 p-4 bg-black border-4 border-cyan-500 rounded-2xl">
                    <div className="relative w-16 h-16">
                      <div className="absolute inset-0 border-4 border-pink-500 rounded-lg animate-spin" style={{ animationDuration: '3s' }}></div>
                      <div className="absolute inset-2 border-4 border-yellow-500 rounded-lg animate-spin" style={{ animationDuration: '2s', animationDirection: 'reverse' }}></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-3xl font-black text-cyan-500">⚡</span>
                      </div>
                    </div>
                    <div>
                      <h2 className="text-4xl font-black text-white tracking-wider">VOLT</h2>
                      <p className="text-xs font-bold tracking-widest text-pink-500">DIGITAL LABS</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-400 leading-relaxed mb-8 text-base">
                  Pushing the boundaries of digital innovation. We create electrifying experiences that power the future of technology.
                </p>
              </div>

              {/* UINEX Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { value: '10K+', label: 'Users Active', color: 'cyan' },
                  { value: '99.9%', label: 'Uptime', color: 'pink' },
                  { value: '5ms', label: 'Response', color: 'yellow' },
                  { value: '24/7', label: 'Support', color: 'green' },
                ].map((stat, i) => (
                  <div 
                    key={i}
                    className="relative p-4 bg-black rounded-xl transition-all duration-300 cursor-pointer group"
                    style={{
                      borderWidth: '2px',
                      borderStyle: 'solid',
                      borderColor: hoveredCard === i ? 
                        (stat.color === 'cyan' ? '#00ffff' : 
                         stat.color === 'pink' ? '#ff00ff' : 
                         stat.color === 'yellow' ? '#ffff00' : '#00ff00') : '#1e293b',
                      transform: hoveredCard === i ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                    onMouseEnter={() => setHoveredCard(i)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl" style={{
                      backgroundColor: stat.color === 'cyan' ? '#00ffff' : 
                                       stat.color === 'pink' ? '#ff00ff' : 
                                       stat.color === 'yellow' ? '#ffff00' : '#00ff00'
                    }}></div>
                    <div className="relative">
                      <div className="text-3xl font-black mb-1" style={{ 
                        color: stat.color === 'cyan' ? '#00ffff' : 
                               stat.color === 'pink' ? '#ff00ff' : 
                               stat.color === 'yellow' ? '#ffff00' : '#00ff00'
                      }}>
                        {stat.value}
                      </div>
                      <div className="text-xs font-semibold text-gray-500 uppercase tracking-wide">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Neon Social */}
              <div>
                <p className="text-xs font-black text-gray-500 mb-4 tracking-widest">CONNECT</p>
                <div className="flex gap-3">
                  {[
                    { name: 'Discord', icon: '💬', color: '#5865f2' },
                    { name: 'Twitter', icon: '🐦', color: '#1da1f2' },
                    { name: 'GitHub', icon: '⚡', color: '#ffffff' },
                    { name: 'Telegram', icon: '✈️', color: '#0088cc' },
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-14 h-14 border-2 rounded-lg flex items-center justify-center font-black text-xl transition-all duration-300 relative overflow-hidden group"
                      style={{
                        borderColor: hoveredIcon === social.name ? social.color : '#1e293b',
                        backgroundColor: hoveredIcon === social.name ? social.color : 'transparent',
                        transform: hoveredIcon === social.name ? 'scale(1.1) rotate(-5deg)' : 'scale(1) rotate(0deg)',
                      }}
                      onMouseEnter={() => setHoveredIcon(social.name)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <div className="absolute inset-0 animate-pulse opacity-20" style={{ backgroundColor: social.color }}></div>
                      <span className="relative">{social.icon}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Middle Section - Navigation */}
            <div className="lg:col-span-5">
              <div className="grid grid-cols-2 gap-8">
                
                {/* Products Column */}
                <div>
                  <h4 className="text-sm font-black text-cyan-500 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-cyan-500 rounded-full animate-ping"></span>
                    PRODUCTS
                  </h4>
                  <ul className="space-y-4">
                    {['AI Platform', 'Cloud Services', 'Dev Tools', 'Analytics', 'Security'].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
                          style={{
                            color: hoveredLink === link ? '#00ffff' : '#94a3b8'
                          }}
                          onMouseEnter={() => setHoveredLink(link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span className="text-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">▸</span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Company Column */}
                <div>
                  <h4 className="text-sm font-black text-pink-500 mb-6 flex items-center gap-2">
                    <span className="w-2 h-2 bg-pink-500 rounded-full animate-ping"></span>
                    COMPANY
                  </h4>
                  <ul className="space-y-4">
                    {['About', 'Careers', 'Blog', 'Press', 'Contact'].map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
                          style={{
                            color: hoveredLink === link ? '#ff00ff' : '#94a3b8'
                          }}
                          onMouseEnter={() => setHoveredLink(link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span className="text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">▸</span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Featured Links */}
              <div className="mt-10 p-6 bg-black border-2 border-yellow-500 rounded-2xl relative overflow-hidden">
                <div className="absolute inset-0 bg-yellow-500 opacity-5 animate-pulse"></div>
                <div className="relative">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-2xl">🔥</span>
                    <h4 className="text-sm font-black text-yellow-500">HOT DEALS</h4>
                  </div>
                  <div className="space-y-3">
                    {['50% Off Premium Plans', 'Free Trial - 30 Days', 'Enterprise Discount'].map((deal) => (
                      <a
                        key={deal}
                        href="#"
                        className="block text-sm font-medium transition-all duration-300"
                        style={{
                          color: hoveredLink === deal ? '#ffff00' : '#94a3b8'
                        }}
                        onMouseEnter={() => setHoveredLink(deal)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        → {deal}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Right Section - Newsletter */}
            <div className="lg:col-span-3">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 blur-2xl opacity-20 animate-pulse"></div>
                <div className="relative p-6 bg-black border-2 border-cyan-500 rounded-2xl">
                  
                  {/* Glowing Header */}
                  <div className="mb-6">
                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500 bg-opacity-20 border border-cyan-500 rounded-full mb-4">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-black text-cyan-500 tracking-wider">EXCLUSIVE</span>
                    </div>
                    <h3 className="text-2xl font-black text-white mb-2">
                      Join the Grid
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      Get access to exclusive updates and digital resources.
                    </p>
                  </div>

                  {/* UINEX Form */}
                  <div className="space-y-3 mb-6">
                    <input
                      type="email"
                      placeholder="email@UINEX.net"
                      className="w-full px-4 py-3 bg-black border-2 rounded-lg text-white text-sm font-medium focus:outline-none transition-all duration-300"
                      style={{
                        borderColor: activeInput === 'email' ? '#00ffff' : '#1e293b'
                      }}
                      onFocus={() => setActiveInput('email')}
                      onBlur={() => setActiveInput(null)}
                    />
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-pink-500 text-black font-black rounded-lg hover:scale-105 transition-all duration-300 relative overflow-hidden group">
                      <span className="relative z-10 flex items-center justify-center gap-2">
                        CONNECT
                        <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
                      </span>
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-yellow-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                  </div>

                  {/* UINEX Stats */}
                  <div className="pt-6 border-t border-gray-800">
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div>
                        <div className="text-lg font-black text-cyan-500">20K</div>
                        <div className="text-xs text-gray-600 font-semibold">Users</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-pink-500">500+</div>
                        <div className="text-xs text-gray-600 font-semibold">Tools</div>
                      </div>
                      <div>
                        <div className="text-lg font-black text-yellow-500">5.0★</div>
                        <div className="text-xs text-gray-600 font-semibold">Rated</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t-2 border-gray-900">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
                <p className="text-gray-500 font-medium">
                  © 2025 VOLT Labs. Powered by ⚡ Energy
                </p>
                <div className="flex gap-6">
                  {['Terms', 'Privacy', 'Security', 'API'].map((item) => (
                    <a 
                      key={item}
                      href="#" 
                      className="font-medium transition-all duration-300"
                      style={{
                        color: hoveredLink === item ? '#00ffff' : '#64748b'
                      }}
                      onMouseEnter={() => setHoveredLink(item)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {item}
                    </a>
                  ))}
                </div>
              </div>

              {/* Live Indicator */}
              <div className="flex items-center gap-3 px-5 py-2 bg-black border-2 border-green-500 rounded-full">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute inset-0 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-xs font-black text-green-500 tracking-wider">SYSTEM ONLINE</span>
              </div>

            </div>
          </div>

        </div>

        {/* Neon Bottom Strip */}
        <div className="relative h-2 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 animate-pulse"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-pink-500 to-yellow-500 blur-md"></div>
        </div>

      </footer>
    </div>
  );
}
  `
  },
  {
    name: "NeonUINEXCard",
    category: "Cards",
    code: `
function NeonUINEXCard() {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <div style={{ 
      minHeight: '100vh', 
      background: '#0a0e27', 
      padding: '48px 16px', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          position: 'relative',
          padding: '2px',
          background: isHovered 
            ? 'linear-gradient(135deg, #00ffff, #ff00ff, #00ffff)' 
            : 'linear-gradient(135deg, rgba(0, 255, 255, 0.5), rgba(255, 0, 255, 0.5))',
          borderRadius: '20px',
          maxWidth: '420px',
          width: '100%',
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          boxShadow: isHovered 
            ? '0 0 60px rgba(0, 255, 255, 0.4), 0 0 100px rgba(255, 0, 255, 0.3)' 
            : '0 10px 40px rgba(0, 0, 0, 0.5)',
        }}
      >
        <div style={{
          background: 'linear-gradient(135deg, #1a1f3a 0%, #0f1420 100%)',
          borderRadius: '18px',
          padding: '36px',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Decorative corner elements */}
          <div style={{
            position: 'absolute',
            top: '0',
            left: '0',
            width: '60px',
            height: '60px',
            borderTop: '3px solid #00ffff',
            borderLeft: '3px solid #00ffff',
            borderRadius: '18px 0 0 0',
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.4s'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '0',
            right: '0',
            width: '60px',
            height: '60px',
            borderBottom: '3px solid #ff00ff',
            borderRight: '3px solid #ff00ff',
            borderRadius: '0 0 18px 0',
            opacity: isHovered ? 1 : 0.5,
            transition: 'opacity 0.4s'
          }} />

          <div style={{
            display: 'inline-block',
            padding: '6px 16px',
            background: 'linear-gradient(90deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 255, 0.2))',
            borderRadius: '20px',
            border: '1px solid rgba(0, 255, 255, 0.3)',
            marginBottom: '20px'
          }}>
            <span style={{ 
              fontSize: '0.75rem', 
              color: '#00ffff',
              fontWeight: 'bold',
              textTransform: 'uppercase',
              letterSpacing: '1.5px'
            }}>
              Premium
            </span>
          </div>

          <h3 style={{ 
            fontSize: '2rem', 
            fontWeight: '800', 
            background: 'linear-gradient(135deg, #00ffff, #ff00ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
            letterSpacing: '1px'
          }}>
            UINEX Card
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: 'rgba(255, 255, 255, 0.6)',
            marginBottom: '28px',
            lineHeight: '1.6'
          }}>
            Experience the future with cutting-edge neon aesthetics
          </p>

          {/* Stats section */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '16px',
            marginBottom: '28px'
          }}>
            {[
              { label: 'Speed', value: '99%' },
              { label: 'Power', value: '95%' },
              { label: 'Style', value: '100%' }
            ].map((stat, i) => (
              <div key={i} style={{
                textAlign: 'center',
                padding: '12px',
                background: 'rgba(0, 255, 255, 0.05)',
                borderRadius: '12px',
                border: '1px solid rgba(0, 255, 255, 0.2)',
                opacity: isHovered ? 1 : 0.7,
                transition: 'all 0.3s'
              }}>
                <div style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#00ffff', marginBottom: '4px' }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255, 255, 255, 0.5)', textTransform: 'uppercase' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
          
          <button 
            style={{ 
              width: '100%',
              padding: '16px', 
              background: isHovered 
                ? 'linear-gradient(135deg, #00ffff, #00cccc)' 
                : 'linear-gradient(135deg, rgba(0, 255, 255, 0.8), rgba(0, 204, 204, 0.8))',
              color: '#0a0e27', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1rem',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              boxShadow: isHovered 
                ? '0 0 30px rgba(0, 255, 255, 0.6)' 
                : '0 4px 20px rgba(0, 255, 255, 0.3)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            Activate Now
          </button>

          {/* Bottom accent line */}
          <div style={{
            marginTop: '24px',
            height: '2px',
            background: 'linear-gradient(90deg, transparent, #00ffff, #ff00ff, transparent)',
            opacity: isHovered ? 1 : 0.3,
            transition: 'opacity 0.4s'
          }} />
        </div>
      </div>
    </div>
  );
}
  `
  },
  {
    name: "UltimateCard",
    category: "Cards",
    code: `
// import React, { useState } from 'react';
// import { Sparkles, TrendingUp, Award, Zap, Star, Crown } from 'lucide-react';
export default function UltimateCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [rating, setRating] = useState(4.8);
  const [particles, setParticles] = useState([]);

  const createParticle = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const newParticle = {
      id: Date.now(),
      x,
      y
    };
    
    setParticles(prev => [...prev, newParticle]);
    setTimeout(() => {
      setParticles(prev => prev.filter(p => p.id !== newParticle.id));
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl top-10 left-10 animate-pulse" />
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl bottom-10 right-10 animate-pulse delay-700" />
        <div className="absolute w-64 h-64 bg-pink-500/20 rounded-full blur-3xl top-1/2 left-1/2 animate-pulse delay-1000" />
      </div>

      <div className="relative w-full max-w-md">
        <div 
          className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-purple-500/20 transition-all duration-500 hover:shadow-purple-500/50"
          style={{
            transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={createParticle}
        >
          {/* Glowing Border Effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 opacity-0 hover:opacity-20 transition-opacity duration-500 blur-xl" />
          
          {/* Premium Badge */}
          <div className="absolute top-6 left-6 z-10">
            <div className="flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-orange-500 px-4 py-2 rounded-full shadow-lg animate-pulse">
              <Crown size={18} className="text-white" />
              <span className="text-white font-bold text-sm">PREMIUM</span>
            </div>
          </div>

          {/* Image Section with Overlay */}
          <div className="relative overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=600&fit=crop"
              alt="Gradient Abstract"
              className="w-full h-72 object-cover transition-transform duration-700"
              style={{
                transform: isHovered ? 'scale(1.15) rotate(2deg)' : 'scale(1) rotate(0deg)',
              }}
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent" />
            
            {/* Floating Icons */}
            <div className="absolute top-4 right-4 flex gap-2">
              <div className="bg-white/20 backdrop-blur-md p-2 rounded-full animate-bounce">
                <Sparkles size={20} className="text-yellow-400" />
              </div>
            </div>

            {/* Rating Badge */}
            <div className="absolute bottom-4 right-4 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/20">
              <div className="flex items-center gap-2">
                <Star size={20} className="text-yellow-400 fill-yellow-400" />
                <span className="text-white font-bold text-lg">{rating}</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 relative">
            {/* Title with Gradient */}
            <h2 className="text-3xl font-bold mb-3 bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Ultimate Experience
            </h2>
            
            {/* Subtitle */}
            <p className="text-gray-300 mb-6 leading-relaxed">
              Discover the next level of premium design with stunning visuals and interactive elements that bring your content to life.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20 text-center transform transition-transform hover:scale-105">
                <TrendingUp size={24} className="text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-gray-400">Growth</div>
              </div>
              
              <div className="bg-gradient-to-br from-pink-500/20 to-pink-600/10 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20 text-center transform transition-transform hover:scale-105">
                <Award size={24} className="text-pink-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Top</div>
                <div className="text-xs text-gray-400">Rated</div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 backdrop-blur-sm rounded-xl p-4 border border-blue-500/20 text-center transform transition-transform hover:scale-105">
                <Zap size={24} className="text-blue-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">Fast</div>
                <div className="text-xs text-gray-400">Speed</div>
              </div>
            </div>

            {/* Action Button */}
            <button className="w-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 opacity-100 group-hover:opacity-0 transition-opacity duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative px-8 py-4 flex items-center justify-center gap-3">
                <span className="text-white font-bold text-lg">Get Started Now</span>
                <Sparkles size={20} className="text-white animate-spin" style={{ animationDuration: '3s' }} />
              </div>
            </button>

            {/* Particles */}
            {particles.map(particle => (
              <div
                key={particle.id}
                className="absolute w-2 h-2 bg-purple-400 rounded-full animate-ping pointer-events-none"
                style={{
                  left: particle.x,
                  top: particle.y,
                }}
              />
            ))}
          </div>

          {/* Bottom Shine Effect */}
          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 animate-pulse" />
        </div>

        {/* Glow Effect Behind Card */}
        <div 
          className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 blur-3xl opacity-0 transition-opacity duration-500 -z-10"
          style={{ opacity: isHovered ? 0.3 : 0 }}
        />
      </div>
    </div>
  );
}

  `
  },
  {
    name: "UltimateCard",
    category: "Cards",
    code: `function UltimateCard() {
  const [isHovered, setIsHovered] = React.useState(false);
  const [animatedFeatures, setAnimatedFeatures] = React.useState([]);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedFeatures([0, 1, 2, 3, 4, 5]);
    }, 100);
    return () => clearTimeout(timer);
  }, []);

  const CrownIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
    </svg>
  );

  const LightningIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  const features = [
    'Unlimited Everything',
    'AI-Powered Analytics',
    'VIP 24/7 Support',
    'Unlimited Storage',
    'Advanced Security',
    'Custom Integrations'
  ];

  const stats = [
    { value: '50K+', label: 'Elite Members' },
    { value: '5.0★', label: 'Perfect Score' },
    { value: '99.9%', label: 'SLA Uptime' }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 p-4">
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="relative max-w-md w-full p-1 rounded-3xl cursor-pointer transition-all duration-500 ease-out bg-gradient-to-br from-blue-700 via-blue-600 to-blue-800 shadow-[0_12px_45px_rgba(29,78,216,0.3)] hover:from-blue-500 hover:via-blue-400 hover:to-blue-600 hover:shadow-[0_30px_80px_rgba(59,130,246,0.6)] hover:-translate-y-4 hover:scale-105"
      >
        <div className="absolute -inset-1 rounded-3xl -z-10 blur-xl transition-opacity duration-500 opacity-0 hover:opacity-50 bg-gradient-to-r from-blue-400 to-blue-600" />

        <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-blue-900 rounded-3xl p-6 overflow-hidden">
          
          <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-gradient-to-br from-blue-500/20 to-transparent transition-all duration-500 opacity-60 scale-100 hover:scale-150 hover:opacity-100" />
          <div className="absolute -bottom-16 -left-16 w-48 h-48 rounded-full bg-gradient-to-br from-blue-700/15 to-transparent opacity-40" />

          <div className="absolute top-6 right-6 flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-blue-500 text-slate-950 text-xs font-bold shadow-lg shadow-blue-500/50 animate-bounce">
            <LightningIcon />
            ELITE
          </div>

          <div className="relative w-16 h-16 mb-4 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-400 to-blue-600 text-slate-950 transition-all duration-300 shadow-[0_8px_24px_rgba(59,130,246,0.4)] hover:shadow-[0_12px_32px_rgba(59,130,246,0.6),0_0_40px_rgba(59,130,246,0.3)] hover:-rotate-12 hover:scale-110">
            <div className="absolute -inset-2 rounded-2xl bg-gradient-to-br from-blue-400 to-blue-600 blur-xl -z-10 transition-opacity duration-300 opacity-0 hover:opacity-60" />
            <CrownIcon />
          </div>

          <h3 className="text-3xl font-black mb-3 tracking-wide bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400 bg-clip-text text-transparent transition-all duration-300">
            PLATINUM ELITE
          </h3>
          
          <p className="text-blue-200 text-sm mb-6 leading-relaxed font-medium">
            Experience unparalleled excellence with premium features, VIP support, and exclusive benefits
          </p>
          
          <div className="relative mb-6 p-5 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-500/10 to-blue-700/5 border-2 border-blue-500/30 transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]">
            {isHovered && (
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent animate-pulse" />
            )}

            <div className="flex items-baseline mb-4">
              <span className="text-5xl font-black bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                $99
              </span>
              <span className="text-base text-slate-400 ml-2 font-semibold">/month</span>
            </div>

            <div className="space-y-2 mt-4">
              {features.map((feature, i) => {
                const delay = i * 100;
                return (
                  <div 
                    key={i} 
                    className="flex items-center gap-4 transition-all duration-500"
                    style={{
                      opacity: animatedFeatures.includes(i) ? 1 : 0,
                      transform: animatedFeatures.includes(i) ? 'translateX(0)' : 'translateX(-10px)',
                      transitionDelay: delay + 'ms'
                    }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-slate-950">
                      <CheckIcon />
                    </div>
                    <span className="text-slate-200 text-sm font-medium">{feature}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <button className="relative w-full py-3 px-8 rounded-xl font-black text-base tracking-wide uppercase text-slate-950 overflow-hidden transition-all duration-300 bg-gradient-to-r from-blue-600 to-blue-700 shadow-[0_8px_20px_rgba(29,78,216,0.4)] hover:from-blue-400 hover:via-blue-500 hover:to-blue-600 hover:shadow-[0_12px_28px_rgba(59,130,246,0.5),0_0_30px_rgba(59,130,246,0.3)]">
            <span className="relative z-10">Claim Elite Access</span>
            <div 
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-500"
              style={{
                transform: isHovered ? 'translateX(100%)' : 'translateX(-100%)'
              }}
            />
          </button>

          <div className="mt-6 pt-5 border-t-2 border-blue-500/20 flex justify-around gap-4">
            {stats.map((stat, i) => (
              <div 
                key={i} 
                className="text-center flex-1 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="text-2xl font-black mb-1 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 font-semibold uppercase tracking-wide">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
  `
  },
  {
    name: "ThreeCards",
    category: "Cards",
    code: `
function ThreeCards() {
  const [hoveredCard, setHoveredCard] = React.useState(null);

  const StarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const CrownIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm14 3c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1v-1h14v1z"/>
    </svg>
  );

  const RocketIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c3 0 7 2 9 6-1 2-2 4-4 5l-1 9h-8l-1-9c-2-1-3-3-4-5 2-4 6-6 9-6zm0 2c-2 0-4 1-5 3 1 1 2 2 3 3l2 1 2-1c1-1 2-2 3-3-1-2-3-3-5-3z"/>
    </svg>
  );

  const CheckIcon = () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  );

  const cards = [
    {
      id: 1,
      title: 'BASIC',
      price: '$29',
      badge: 'STARTER',
      description: 'Perfect for individuals getting started',
      icon: StarIcon,
      features: ['5 Projects', 'Basic Analytics', 'Email Support', '10GB Storage'],
      bgGradient: 'linear-gradient(to bottom right, rgb(147, 51, 234), rgb(88, 28, 135))',
      hoverBgGradient: 'linear-gradient(to bottom right, rgb(168, 85, 247), rgb(126, 34, 206))',
      glowColor: 'rgba(168,85,247,0.4)',
      iconBg: 'linear-gradient(to bottom right, rgb(192, 132, 252), rgb(147, 51, 234))',
      badgeBg: 'linear-gradient(to right, rgb(192, 132, 252), rgb(147, 51, 234))',
      textGradient: 'linear-gradient(to right, rgb(192, 132, 252), rgb(147, 51, 234))',
      textColor: 'rgb(216, 180, 254)',
      checkBg: 'linear-gradient(to bottom right, rgb(192, 132, 252), rgb(147, 51, 234))',
      buttonBg: 'linear-gradient(to right, rgb(192, 132, 252), rgb(147, 51, 234))'
    },
    {
      id: 2,
      title: 'PRO',
      price: '$79',
      badge: 'POPULAR',
      description: 'Best for growing teams and businesses',
      icon: CrownIcon,
      features: ['50 Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage', 'Custom Domains', 'API Access'],
      bgGradient: 'linear-gradient(to bottom right, rgb(37, 99, 235), rgb(29, 78, 216))',
      hoverBgGradient: 'linear-gradient(to bottom right, rgb(59, 130, 246), rgb(37, 99, 235))',
      glowColor: 'rgba(59,130,246,0.5)',
      iconBg: 'linear-gradient(to bottom right, rgb(96, 165, 250), rgb(59, 130, 246))',
      badgeBg: 'linear-gradient(to right, rgb(96, 165, 250), rgb(59, 130, 246))',
      textGradient: 'linear-gradient(to right, rgb(96, 165, 250), rgb(59, 130, 246))',
      textColor: 'rgb(147, 197, 253)',
      checkBg: 'linear-gradient(to bottom right, rgb(96, 165, 250), rgb(59, 130, 246))',
      buttonBg: 'linear-gradient(to right, rgb(96, 165, 250), rgb(59, 130, 246))',
      popular: true
    },
    {
      id: 3,
      title: 'ENTERPRISE',
      price: '$199',
      badge: 'ULTIMATE',
      description: 'For large organizations with custom needs',
      icon: RocketIcon,
      features: ['Unlimited Projects', 'AI Analytics', 'VIP Support', 'Unlimited Storage', 'White Label', 'Dedicated Manager'],
      bgGradient: 'linear-gradient(to bottom right, rgb(5, 150, 105), rgb(4, 120, 87))',
      hoverBgGradient: 'linear-gradient(to bottom right, rgb(16, 185, 129), rgb(5, 150, 105))',
      glowColor: 'rgba(16,185,129,0.4)',
      iconBg: 'linear-gradient(to bottom right, rgb(52, 211, 153), rgb(16, 185, 129))',
      badgeBg: 'linear-gradient(to right, rgb(52, 211, 153), rgb(16, 185, 129))',
      textGradient: 'linear-gradient(to right, rgb(52, 211, 153), rgb(16, 185, 129))',
      textColor: 'rgb(167, 243, 208)',
      checkBg: 'linear-gradient(to bottom right, rgb(52, 211, 153), rgb(16, 185, 129))',
      buttonBg: 'linear-gradient(to right, rgb(52, 211, 153), rgb(16, 185, 129))'
    }
  ];

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8">
      <div className="flex flex-row gap-6 max-w-6xl w-full">
        {cards.map((card) => {
          const isHovered = hoveredCard === card.id;
          const Icon = card.icon;
          
          return (
            <div
              key={card.id}
              onMouseEnter={() => setHoveredCard(card.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative p-1 rounded-2xl cursor-pointer transition-all duration-500"
              style={{
                background: isHovered ? card.hoverBgGradient : card.bgGradient,
                transform: isHovered ? 'translateY(-12px) scale(1.05)' : 'translateY(0) scale(1)',
                boxShadow: isHovered 
                  ? '0 25px 60px ' + card.glowColor + ', 0 0 40px ' + card.glowColor
                  : '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              {card.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full text-xs font-black text-slate-950 shadow-lg z-10">
                  BEST VALUE
                </div>
              )}

              <div className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-xl p-6 overflow-hidden h-full flex flex-col">
                
                <div 
                  className="absolute -top-16 -right-16 w-40 h-40 rounded-full opacity-20 transition-all duration-500"
                  style={{
                    background: 'radial-gradient(circle, ' + card.glowColor + ', transparent)',
                    transform: isHovered ? 'scale(1.5)' : 'scale(1)'
                  }}
                />

                <div 
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-slate-950 text-xs font-bold"
                  style={{ background: card.badgeBg }}
                >
                  {card.badge}
                </div>

                <div 
                  className="w-14 h-14 mb-4 rounded-xl flex items-center justify-center text-slate-950 transition-all duration-300"
                  style={{
                    background: card.iconBg,
                    transform: isHovered ? 'rotate(-10deg) scale(1.1)' : 'rotate(0) scale(1)',
                    boxShadow: isHovered ? '0 8px 20px ' + card.glowColor : 'none'
                  }}
                >
                  <Icon />
                </div>

                <h3 
                  className="text-2xl font-black mb-2 bg-clip-text text-transparent"
                  style={{ backgroundImage: card.textGradient }}
                >
                  {card.title}
                </h3>

                <p 
                  className="text-xs mb-4 leading-relaxed"
                  style={{ color: card.textColor }}
                >
                  {card.description}
                </p>

                <div className="mb-5">
                  <span 
                    className="text-4xl font-black bg-clip-text text-transparent"
                    style={{ backgroundImage: card.textGradient }}
                  >
                    {card.price}
                  </span>
                  <span className="text-sm text-slate-500 ml-1">/month</span>
                </div>

                <div className="space-y-2 mb-5 flex-grow">
                  {card.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div 
                        className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center text-slate-950"
                        style={{ background: card.checkBg }}
                      >
                        <CheckIcon />
                      </div>
                      <span className="text-slate-300 text-xs font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button 
                  className="w-full py-3 rounded-lg font-bold text-sm uppercase text-slate-950 transition-all duration-300"
                  style={{
                    background: card.buttonBg,
                    boxShadow: isHovered ? '0 8px 20px ' + card.glowColor : 'none'
                  }}
                >
                  Get Started
                </button>

                {card.popular && (
                  <div className="mt-4 text-center">
                    <span className="text-xs text-yellow-400 font-semibold">⭐ Most Popular Choice</span>
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
  `
  },
  {
    name: "UINEXpunkHeade3",
    category: "Header",
    code: `
function UINEXpunkHeader3() {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated Scanlines */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full opacity-20"
          style={{
            backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 1px, rgba(255, 20, 147, 0.4) 1px, rgba(255, 20, 147, 0.4) 2px)',
            backgroundSize: '100% 4px',
          }}
        ></div>
      </div>

      {/* Glitch Bars */}
      <div className="absolute inset-0">
        {[...Array(8)].map((_, i) => {
          const colors = ['rgb(255, 20, 147)', 'rgb(0, 255, 170)', 'rgb(255, 255, 0)'];
          const color = colors[i % 3];
          const height = 2 + (i % 3);
          const top = (i * 12) % 100;
          
          return (
            <div
              key={i}
              className="absolute w-full transition-all duration-1000"
              style={{
                top: top + '%',
                height: height + 'px',
                backgroundColor: color,
                opacity: 0.1,
                boxShadow: '0 0 40px ' + color,
              }}
            ></div>
          );
        })}
      </div>

      {/* Neon Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => {
          const colors = ['rgb(255, 20, 147)', 'rgb(0, 255, 170)', 'rgb(138, 43, 226)'];
          const color = colors[i % 3];
          const left = (i * 5) % 100;
          const top = (i * 11) % 100;
          
          return (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                left: left + '%',
                top: top + '%',
                backgroundColor: color,
                boxShadow: '0 0 15px ' + color,
                opacity: 0.7,
              }}
            ></div>
          );
        })}
      </div>

      <div className="relative z-10 text-center max-w-6xl w-full">
        {/* Main Container */}
        <div 
          className="relative p-16 border-4 transition-all duration-700"
          style={{
            borderColor: 'rgb(255, 20, 147)',
            background: isHovered 
              ? 'linear-gradient(135deg, rgba(255, 20, 147, 0.15), rgba(138, 43, 226, 0.15))' 
              : 'rgba(0, 0, 0, 0.5)',
            boxShadow: isHovered 
              ? '0 0 100px rgba(255, 20, 147, 0.6), inset 0 0 100px rgba(255, 20, 147, 0.15)' 
              : '0 0 50px rgba(255, 20, 147, 0.4)',
            backdropFilter: 'blur(10px)',
          }}
        >
          {/* Edge Accents */}
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute w-20 h-20 transition-all duration-500"
              style={{
                top: i < 2 ? '-4px' : 'auto',
                bottom: i >= 2 ? '-4px' : 'auto',
                left: i % 2 === 0 ? '-4px' : 'auto',
                right: i % 2 === 1 ? '-4px' : 'auto',
                borderTop: i < 2 ? '6px solid rgb(0, 255, 170)' : 'none',
                borderBottom: i >= 2 ? '6px solid rgb(0, 255, 170)' : 'none',
                borderLeft: i % 2 === 0 ? '6px solid rgb(0, 255, 170)' : 'none',
                borderRight: i % 2 === 1 ? '6px solid rgb(0, 255, 170)' : 'none',
                boxShadow: isHovered ? '0 0 40px rgb(0, 255, 170)' : 'none',
              }}
            ></div>
          ))}

          {/* Main Title */}
          <div className="relative mb-8">
            <h1 
              className="text-9xl font-black mb-4 tracking-tighter transition-all duration-500"
              style={{
                background: 'linear-gradient(90deg, rgb(255, 20, 147), rgb(138, 43, 226), rgb(0, 255, 170))',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: isHovered ? 'drop-shadow(0 0 40px rgb(255, 20, 147))' : 'drop-shadow(0 0 15px rgb(255, 20, 147))',
              }}
            >
              NEON CITY
            </h1>
            
            {/* Tagline */}
            <div className="flex justify-center items-center gap-6 mb-8">
              <div className="h-1 w-32" style={{ 
                background: 'linear-gradient(to right, transparent, rgb(255, 20, 147))',
                boxShadow: '0 0 15px rgb(255, 20, 147)',
              }}></div>
              <span 
                className="text-3xl font-mono tracking-widest font-bold"
                style={{
                  color: 'rgb(0, 255, 170)',
                  textShadow: '0 0 30px rgb(0, 255, 170)',
                }}
              >
                DIGITAL REALM
              </span>
              <div className="h-1 w-32" style={{ 
                background: 'linear-gradient(to left, transparent, rgb(255, 20, 147))',
                boxShadow: '0 0 15px rgb(255, 20, 147)',
              }}></div>
            </div>
          </div>

          {/* Status Cards */}
          <div className="grid grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { value: 'ONLINE', label: 'STATUS', color: 'rgb(0, 255, 170)' },
              { value: '2077', label: 'YEAR', color: 'rgb(255, 20, 147)' },
              { value: 'MAX', label: 'POWER', color: 'rgb(138, 43, 226)' },
            ].map((stat, i) => (
              <div 
                key={i}
                className="p-8 border-4 backdrop-blur-md transition-all duration-500"
                style={{
                  borderColor: stat.color,
                  backgroundColor: 'rgba(0, 0, 0, 0.8)',
                  boxShadow: isHovered ? '0 0 40px ' + stat.color : '0 0 15px ' + stat.color,
                }}
              >
                <div 
                  className="text-5xl font-black mb-3"
                  style={{
                    color: stat.color,
                    textShadow: '0 0 20px ' + stat.color,
                  }}
                >
                  {stat.value}
                </div>
                <div className="text-sm font-mono tracking-widest" style={{ color: 'rgb(180, 180, 220)' }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <p className="text-2xl mb-12 max-w-3xl mx-auto leading-relaxed font-light" style={{ 
            color: 'rgb(220, 220, 255)',
            textShadow: '0 0 10px rgba(220, 220, 255, 0.5)',
          }}>
            Welcome to the future where dreams are coded and reality is just another simulation
          </p>

          <div className="flex justify-center gap-8">
            <button 
              className="px-14 py-6 font-black uppercase tracking-widest transition-all duration-300 text-lg"
              style={{
                backgroundColor: 'rgba(255, 20, 147, 0.3)',
                border: '4px solid rgb(255, 20, 147)',
                color: 'rgb(255, 20, 147)',
                boxShadow: '0 0 40px rgba(255, 20, 147, 0.6)',
              }}
            >
              ENTER
            </button>
            <button 
              className="px-14 py-6 font-black uppercase tracking-widest transition-all duration-300 text-lg"
              style={{
                backgroundColor: 'transparent',
                border: '4px solid rgb(0, 255, 170)',
                color: 'rgb(0, 255, 170)',
                boxShadow: '0 0 40px rgba(0, 255, 170, 0.6)',
              }}
            >
              EXPLORE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
  `
  },
  {
    name: "UltraDarkGreenFooter",
    category: "Footer",
    code: `function UltraDarkGreenFooter() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div 
      className="min-h-screen flex items-end relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #000000 0%, #0a0f0a 25%, #050a05 50%, #0d120d 75%, #0a100a 100%)',
      }}
      onMouseMove={handleMouseMove}
    >
      
      {/* Animated Gradient Orbs - More Intense */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute w-[600px] h-[600px] rounded-full opacity-15 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(16, 185, 129, 0.8) 0%, transparent 70%)',
            top: '5%',
            left: '15%',
            animationDuration: '6s',
          }}
        ></div>
        <div 
          className="absolute w-[500px] h-[500px] rounded-full opacity-10 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(34, 197, 94, 0.9) 0%, transparent 70%)',
            bottom: '10%',
            right: '10%',
            animationDuration: '8s',
            animationDelay: '2s',
          }}
        ></div>
        <div 
          className="absolute w-[400px] h-[400px] rounded-full opacity-12 blur-3xl animate-pulse"
          style={{
            background: 'radial-gradient(circle, rgba(5, 150, 105, 0.7) 0%, transparent 70%)',
            top: '40%',
            left: '60%',
            animationDuration: '7s',
            animationDelay: '1s',
          }}
        ></div>
      </div>

      {/* Enhanced Floating Particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full opacity-40 animate-pulse"
            style={{
              width: (1 + Math.random() * 3) + 'px',
              height: (1 + Math.random() * 3) + 'px',
              background: i % 3 === 0 ? 'rgb(16, 185, 129)' : i % 3 === 1 ? 'rgb(34, 197, 94)' : 'rgb(5, 150, 105)',
              top: Math.random() * 100 + '%',
              left: Math.random() * 100 + '%',
              animationDelay: Math.random() * 4 + 's',
              animationDuration: (2 + Math.random() * 3) + 's',
              boxShadow: '0 0 ${10 + Math.random() * 10}px rgba(16, 185, 129, 0.6)',
            }}
          ></div>
        ))}
      </div>

      {/* Grid Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(16, 185, 129, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(16, 185, 129, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
      ></div>

      <footer className="relative z-10 w-full">
        
        {/* Ultra Dark Glass Container */}
        <div 
          className="backdrop-blur-2xl border-t"
          style={{
            background: 'rgba(0, 0, 0, 0.85)',
            borderColor: 'rgba(16, 185, 129, 0.3)',
            boxShadow: '0 -12px 48px rgba(16, 185, 129, 0.15), 0 0 100px rgba(0, 0, 0, 0.5)',
          }}
        >
          <div className="max-w-7xl mx-auto px-8 py-20">
            
            {/* Top Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
              
              {/* Brand Card - Enhanced */}
              <div 
                className="lg:col-span-1 p-8 rounded-3xl backdrop-blur-xl transition-all duration-700"
                style={{
                  background: hoveredCard === 'brand' 
                    ? 'rgba(0, 0, 0, 0.7)' 
                    : 'rgba(0, 0, 0, 0.5)',
                  border: hoveredCard === 'brand' 
                    ? '2px solid rgba(16, 185, 129, 0.6)' 
                    : '1px solid rgba(16, 185, 129, 0.25)',
                  boxShadow: hoveredCard === 'brand'
                    ? '0 12px 48px rgba(16, 185, 129, 0.3), inset 0 0 60px rgba(16, 185, 129, 0.05)'
                    : '0 6px 24px rgba(0, 0, 0, 0.4)',
                  transform: hoveredCard === 'brand' ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard('brand')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="w-16 h-16 rounded-2xl flex items-center justify-center backdrop-blur-sm relative overflow-hidden"
                    style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: '2px solid rgba(16, 185, 129, 0.5)',
                      boxShadow: '0 0 30px rgba(16, 185, 129, 0.4), inset 0 0 20px rgba(16, 185, 129, 0.1)',
                    }}
                  >
                    <div 
                      className="absolute inset-0 animate-pulse"
                      style={{
                        background: 'radial-gradient(circle, rgba(16, 185, 129, 0.2) 0%, transparent 70%)',
                        animationDuration: '3s',
                      }}
                    ></div>
                    <span className="text-3xl font-bold relative z-10" style={{ color: 'rgb(16, 185, 129)' }}>✦</span>
                  </div>
                  <div>
                    <h2 className="text-4xl font-bold tracking-tight" style={{ 
                      color: 'rgb(16, 185, 129)',
                      textShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
                    }}>PIXNOVA</h2>
                    <p className="text-xs tracking-[0.3em] font-semibold" style={{ 
                      color: 'rgb(16, 185, 129)', 
                      opacity: 0.6 
                    }}>CREATIVE LAB</p>
                  </div>
                </div>
                <p className="leading-relaxed mb-8 text-sm" style={{ color: 'rgb(16, 185, 129)', opacity: 0.7 }}>
                  Pushing boundaries of design and technology to create unforgettable digital experiences that illuminate the future.
                </p>
                <div className="flex gap-3">
                  {['✱', '◆', '●', '▲'].map((icon, i) => (
                    <a
                      key={i}
                      href="#"
                      className="w-12 h-12 rounded-xl flex items-center justify-center backdrop-blur-sm transition-all duration-500 hover:scale-125 hover:rotate-12"
                      style={{
                        background: 'rgba(0, 0, 0, 0.6)',
                        border: '1px solid rgba(16, 185, 129, 0.4)',
                        boxShadow: '0 0 15px rgba(16, 185, 129, 0.2)',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.8)';
                        e.currentTarget.style.boxShadow = '0 0 25px rgba(16, 185, 129, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'rgba(16, 185, 129, 0.4)';
                        e.currentTarget.style.boxShadow = '0 0 15px rgba(16, 185, 129, 0.2)';
                      }}
                    >
                      <span className="text-lg" style={{ color: 'rgb(16, 185, 129)' }}>{icon}</span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Newsletter Card - Enhanced */}
              <div 
                className="lg:col-span-2 p-8 rounded-3xl backdrop-blur-xl transition-all duration-700"
                style={{
                  background: hoveredCard === 'newsletter' 
                    ? 'rgba(0, 0, 0, 0.7)' 
                    : 'rgba(0, 0, 0, 0.5)',
                  border: hoveredCard === 'newsletter' 
                    ? '2px solid rgba(16, 185, 129, 0.6)' 
                    : '1px solid rgba(16, 185, 129, 0.25)',
                  boxShadow: hoveredCard === 'newsletter'
                    ? '0 12px 48px rgba(16, 185, 129, 0.3), inset 0 0 60px rgba(16, 185, 129, 0.05)'
                    : '0 6px 24px rgba(0, 0, 0, 0.4)',
                  transform: hoveredCard === 'newsletter' ? 'translateY(-8px) scale(1.02)' : 'translateY(0)',
                }}
                onMouseEnter={() => setHoveredCard('newsletter')}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <h3 className="text-3xl font-bold mb-4" style={{ 
                  color: 'rgb(16, 185, 129)',
                  textShadow: '0 0 15px rgba(16, 185, 129, 0.4)',
                }}>Stay in the Loop</h3>
                <p className="mb-8 text-sm" style={{ color: 'rgb(16, 185, 129)', opacity: 0.6 }}>
                  Get exclusive updates, early access, and creative inspiration delivered to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-6 py-5 rounded-2xl backdrop-blur-xl focus:outline-none transition-all duration-500"
                    style={{
                      background: 'rgba(0, 0, 0, 0.6)',
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      color: 'rgb(16, 185, 129)',
                      boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.5)',
                    }}
                    onFocus={(e) => {
                      e.target.style.borderColor = 'rgba(16, 185, 129, 0.6)';
                      e.target.style.boxShadow = '0 0 30px rgba(16, 185, 129, 0.3), inset 0 0 20px rgba(0, 0, 0, 0.5)';
                    }}
                    onBlur={(e) => {
                      e.target.style.borderColor = 'rgba(16, 185, 129, 0.3)';
                      e.target.style.boxShadow = 'inset 0 0 20px rgba(0, 0, 0, 0.5)';
                    }}
                  />
                  <button 
                    className="px-10 py-5 rounded-2xl font-bold transition-all duration-500 hover:scale-110 relative overflow-hidden group"
                    style={{
                      background: 'rgba(0, 0, 0, 0.7)',
                      border: '2px solid rgba(16, 185, 129, 0.6)',
                      boxShadow: '0 6px 24px rgba(16, 185, 129, 0.4)',
                      color: 'rgb(16, 185, 129)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(16, 185, 129, 0.15)';
                      e.currentTarget.style.boxShadow = '0 8px 32px rgba(16, 185, 129, 0.6)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(0, 0, 0, 0.7)';
                      e.currentTarget.style.boxShadow = '0 6px 24px rgba(16, 185, 129, 0.4)';
                    }}
                  >
                    Subscribe
                  </button>
                </div>
              </div>

            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              
              {[
                { title: 'Product', links: ['Features', 'Pricing', 'Updates', 'Beta'] },
                { title: 'Explore', links: ['Gallery', 'Showcase', 'Blog', 'Stories'] },
                { title: 'Company', links: ['About', 'Team', 'Careers', 'Press'] },
                { title: 'Support', links: ['Help', 'Contact', 'FAQ', 'Docs'] },
              ].map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-sm font-bold uppercase tracking-[0.2em] mb-6" style={{ 
                    color: 'rgb(16, 185, 129)', 
                    opacity: 0.8,
                    textShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
                  }}>
                    {section.title}
                  </h4>
                  <ul className="space-y-3">
                    {section.links.map((link, i) => (
                      <li key={i}>
                        <a
                          href="#"
                          className="transition-all duration-300 inline-block hover:translate-x-2 relative group"
                          style={{ 
                            color: 'rgb(16, 185, 129)', 
                            opacity: 0.5,
                          }}
                          onMouseEnter={(e) => {
                            e.target.style.opacity = '1';
                            e.target.style.textShadow = '0 0 10px rgba(16, 185, 129, 0.5)';
                          }}
                          onMouseLeave={(e) => {
                            e.target.style.opacity = '0.5';
                            e.target.style.textShadow = 'none';
                          }}
                        >
                          <span className="relative">
                            {link}
                            <span 
                              className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                              style={{ background: 'rgb(16, 185, 129)' }}
                            ></span>
                          </span>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}

            </div>

            {/* Enhanced Divider */}
            <div 
              className="h-px mb-12 relative"
              style={{
                background: 'linear-gradient(to right, transparent, rgba(16, 185, 129, 0.5), transparent)',
                boxShadow: '0 0 10px rgba(16, 185, 129, 0.3)',
              }}
            ></div>

            {/* Bottom Section */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              
              <div className="flex items-center gap-8">
                <p className="text-sm font-medium" style={{ color: 'rgb(16, 185, 129)', opacity: 0.5 }}>
                  © 2025 PIXNOVA Creative Lab
                </p>
                <div className="flex gap-6 text-sm">
                  {['Privacy', 'Terms', 'Cookies'].map((item, i) => (
                    <a 
                      key={i}
                      href="#" 
                      className="transition-all duration-300 relative group"
                      style={{ color: 'rgb(16, 185, 129)', opacity: 0.5 }}
                      onMouseEnter={(e) => {
                        e.target.style.opacity = '1';
                        e.target.style.textShadow = '0 0 10px rgba(16, 185, 129, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.opacity = '0.5';
                        e.target.style.textShadow = 'none';
                      }}
                    >
                      {item}
                      <span 
                        className="absolute bottom-0 left-0 w-0 h-px transition-all duration-300 group-hover:w-full"
                        style={{ background: 'rgb(16, 185, 129)' }}
                      ></span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Enhanced Floating Badge */}
              <div 
                className="px-8 py-4 rounded-full backdrop-blur-xl flex items-center gap-4 transition-all duration-500 hover:scale-105"
                style={{
                  background: 'rgba(0, 0, 0, 0.7)',
                  border: '2px solid rgba(16, 185, 129, 0.5)',
                  boxShadow: '0 0 30px rgba(16, 185, 129, 0.3)',
                }}
              >
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center animate-pulse"
                  style={{
                    background: 'rgba(16, 185, 129, 0.2)',
                    border: '1px solid rgba(16, 185, 129, 0.4)',
                    animationDuration: '2s',
                  }}
                >
                  <span className="text-sm">🌟</span>
                </div>
                <div>
                  <div className="text-sm font-bold" style={{ 
                    color: 'rgb(16, 185, 129)',
                    textShadow: '0 0 10px rgba(16, 185, 129, 0.4)',
                  }}>Featured</div>
                  <div className="text-xs" style={{ color: 'rgb(16, 185, 129)', opacity: 0.5 }}>Awwwards 2025</div>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Enhanced Bottom Glass Edge */}
        <div 
          className="h-1"
          style={{
            background: 'linear-gradient(to right, rgba(16, 185, 129, 0.3), rgba(16, 185, 129, 0.7), rgba(16, 185, 129, 0.3))',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)',
          }}
        ></div>

      </footer>
    </div>
  );
}
  `
  },

  {
    name: "QuantumAdvancedCard",
    category: "Cards",
    code: `
function QuantumAdvancedCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 flex items-center justify-center p-8 overflow-hidden relative">
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Hexagon Pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'radial-gradient(circle, #8b5cf6 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}></div>
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-600 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-600 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '3s' }}></div>
      </div>

      {/* Floating Particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-purple-500 opacity-20 animate-bounce"
          style={{
            width: (2 + Math.random() * 4) + 'px',
            height: (2 + Math.random() * 4) + 'px',
            left: (i * 6.5) + '%',
            top: ((i * 8) % 100) + '%',
            animationDuration: (2 + Math.random() * 3) + 's',
            animationDelay: (Math.random() * 2) + 's'
          }}
        ></div>
      ))}

      {/* Card Container */}
      <div className="relative perspective-1000" style={{ perspective: '1000px' }}>
        
        <div 
          className="relative w-[480px] h-[650px] transition-transform duration-700 preserve-3d cursor-pointer"
          style={{
            transformStyle: 'preserve-3d',
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
          }}
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseMove={handleMouseMove}
        >
          
          {/* Front Side */}
          <div 
            className="absolute inset-0 backface-hidden"
            style={{ backfaceVisibility: 'hidden' }}
          >
            {/* Glowing Border Animation */}
            <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 rounded-3xl opacity-75 blur-xl animate-pulse"></div>
            
            {/* Main Card */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl overflow-hidden border border-purple-500 shadow-2xl">
              
              {/* Dynamic Gradient Overlay */}
              <div 
                className="absolute inset-0 opacity-30 transition-opacity duration-300 bg-purple-600 blur-3xl"
                style={{
                  left: mousePosition.x + '%',
                  top: mousePosition.y + '%',
                  transform: 'translate(-50%, -50%)',
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%'
                }}
              ></div>

              {/* Animated Scan Lines */}
              <div className="absolute inset-0 opacity-10 animate-pulse" style={{
                backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #a855f7 2px, #a855f7 4px)',
                backgroundSize: '100% 4px',
              }}></div>

              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                
                {/* Top Section */}
                <div>
                  {/* Header with Logo */}
                  <div className="flex items-start justify-between mb-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-purple-600 blur-2xl opacity-50 animate-pulse"></div>
                      <div className="relative w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 flex items-center justify-center animate-spin" style={{ animationDuration: '8s' }}>
                        <div className="w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center">
                          <span className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">Ω</span>
                        </div>
                      </div>
                    </div>

                    {/* Chip Simulation */}
                    <div className="relative w-16 h-12">
                      <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg opacity-80"></div>
                      <div className="absolute inset-1 bg-gradient-to-br from-yellow-200 to-yellow-400 rounded-md"></div>
                      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-yellow-600 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Type Badge */}
                  <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 mb-6">
                    <div className="relative">
                      <div className="w-3 h-3 bg-white rounded-full"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-white rounded-full animate-ping"></div>
                    </div>
                    <span className="text-xs font-black text-white tracking-widest">QUANTUM ELITE</span>
                  </div>

                  {/* Card Title */}
                  <div className="mb-8">
                    <h1 className="text-7xl font-black mb-2 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      NEXUS
                    </h1>
                    <p className="text-purple-400 text-sm font-bold tracking-widest uppercase">Infinite Access Card</p>
                  </div>

                  {/* Card Number with Hover Effect */}
                  <div className="mb-8 space-y-2">
                    <div className="flex gap-4">
                      {['5432', '9876', '5432', '1098'].map((num, i) => (
                        <div key={i} className="group relative">
                          <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                          <div className="relative px-4 py-3 bg-slate-800 rounded-lg border border-purple-500 group-hover:border-transparent transition-all duration-300 group-hover:scale-110">
                            <span className="text-xl font-bold text-white tracking-widest">{num}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Grid */}
                  <div className="grid grid-cols-4 gap-3 mb-6">
                    {[
                      { icon: '⚡', value: '∞', label: 'Speed' },
                      { icon: '🔒', value: '100%', label: 'Secure' },
                      { icon: '🌍', value: '200+', label: 'Countries' },
                      { icon: '💎', value: 'VIP', label: 'Status' },
                    ].map((stat, i) => (
                      <div key={i} className="relative group">
                        <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                        <div className="relative p-3 bg-slate-800 rounded-xl border border-slate-700 group-hover:border-transparent transition-all duration-300 text-center">
                          <div className="text-2xl mb-1">{stat.icon}</div>
                          <div className="text-xs font-black text-purple-400">{stat.value}</div>
                          <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Section */}
                <div>
                  {/* Expiry & CVV */}
                  <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Valid Thru</p>
                      <p className="text-lg font-bold text-white tracking-wider">12/28</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">CVV</p>
                      <p className="text-lg font-bold text-white tracking-wider">***</p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Card ID</p>
                      <p className="text-lg font-bold text-white tracking-wider">#Q7845</p>
                    </div>
                  </div>

                  {/* Cardholder Name */}
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs text-gray-500 font-semibold mb-1 uppercase tracking-wider">Cardholder</p>
                      <p className="text-2xl font-black text-white tracking-wide">JOHN MICHAEL DOE</p>
                    </div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      ✦
                    </div>
                  </div>
                </div>

              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 animate-pulse"></div>
            </div>
          </div>

          {/* Back Side */}
          <div 
            className="absolute inset-0 backface-hidden"
            style={{ 
              backfaceVisibility: 'hidden',
              transform: 'rotateY(180deg)'
            }}
          >
            {/* Glowing Border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-3xl opacity-75 blur-xl animate-pulse"></div>
            
            {/* Back Card */}
            <div className="relative w-full h-full bg-gradient-to-br from-slate-900 via-pink-900 to-slate-900 rounded-3xl overflow-hidden border border-pink-500 shadow-2xl">
              
              {/* Magnetic Strip */}
              <div className="absolute top-16 left-0 right-0 h-16 bg-gradient-to-r from-slate-800 via-slate-950 to-slate-800"></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col justify-between z-10">
                
                <div className="mt-32">
                  {/* Signature Strip */}
                  <div className="mb-8">
                    <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Authorized Signature</p>
                    <div className="h-16 bg-slate-800 rounded-lg border border-slate-700 flex items-center px-4">
                      <div className="w-full h-8 bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-30"></div>
                    </div>
                  </div>

                  {/* Security Features */}
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-emerald-500 rounded-lg flex items-center justify-center">
                          <span className="text-xl">🔐</span>
                        </div>
                        <div>
                          <p className="text-xs font-black text-green-400 uppercase tracking-wider">Encrypted</p>
                          <p className="text-xs text-gray-500">256-Bit SSL</p>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-slate-800 rounded-xl border border-slate-700">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center">
                          <span className="text-xl">🛡️</span>
                        </div>
                        <div>
                          <p className="text-xs font-black text-blue-400 uppercase tracking-wider">Protected</p>
                          <p className="text-xs text-gray-500">3D Secure</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* QR Code Simulation */}
                  <div className="flex items-center gap-6">
                    <div className="relative">
                      <div className="w-24 h-24 bg-white rounded-lg p-2">
                        <div className="w-full h-full grid grid-cols-6 gap-0.5">
                          {[...Array(36)].map((_, i) => (
                            <div 
                              key={i} 
                              className="rounded-sm"
                              style={{
                                backgroundColor: Math.random() > 0.5 ? '#000' : '#fff'
                              }}
                            ></div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-2 uppercase tracking-wider font-semibold">Scan for Verification</p>
                      <p className="text-sm text-purple-400 font-bold">Quantum Secure ID</p>
                    </div>
                  </div>
                </div>

                {/* Footer Info */}
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>Customer Service: 1-800-QUANTUM</span>
                    <span>24/7 Support</span>
                  </div>
                  <div className="text-center">
                    <p className="text-xs text-gray-600 mb-2">This card remains the property of Nexus Bank</p>
                    <p className="text-xs font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">nexusbank.com</p>
                  </div>
                </div>

              </div>

              {/* Bottom Glow */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 animate-pulse"></div>
            </div>
          </div>

        </div>

        {/* Flip Indicator */}
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 text-center">
          <div className="flex items-center gap-2 px-4 py-2 bg-slate-900 border border-purple-500 rounded-full">
            <span className="text-xs text-purple-400 font-bold uppercase tracking-wider">
              Click to {isFlipped ? 'Front' : 'Back'}
            </span>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-4">
        <button className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-6 py-3 bg-slate-900 rounded-xl border border-purple-500 group-hover:border-transparent transition-all duration-300">
            <span className="text-sm font-black text-white uppercase tracking-wider">Activate</span>
          </div>
        </button>
        
        <button className="relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-pink-600 to-purple-600 rounded-xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-6 py-3 bg-slate-900 rounded-xl border border-pink-500 group-hover:border-transparent transition-all duration-300">
            <span className="text-sm font-black text-white uppercase tracking-wider">Manage</span>
          </div>
        </button>
      </div>

    </div>
  );
}
  `
  },
  {
    name: "UINEXHolographicCard",
    category: "Cards",
    code: `
function UINEXHolographicCard() {
  const [isHovered, setIsHovered] = useState(false);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateXValue = ((y - centerY) / centerY) * -15;
    const rotateYValue = ((x - centerX) / centerX) * 15;
    
    setRotateX(rotateXValue);
    setRotateY(rotateYValue);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative">
      
      {/* UINEX Grid Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#00ff00 1px, transparent 1px), linear-gradient(90deg, #00ff00 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Glowing Orbs */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-green-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Floating Lines */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-green-500 opacity-10 animate-pulse"
          style={{
            width: '2px',
            height: (20 + Math.random() * 40) + 'px',
            left: (i * 5) + '%',
            top: ((i * 7) % 100) + '%',
            animationDuration: (1 + Math.random() * 2) + 's',
            animationDelay: (Math.random() * 1) + 's'
          }}
        ></div>
      ))}

      {/* Card Container */}
      <div className="relative" style={{ perspective: '1500px' }}>
        
        <div 
          className="relative w-[450px] h-[280px] transition-all duration-500 ease-out cursor-pointer"
          style={{
            transform: 'rotateX(' + rotateX + 'deg) rotateY(' + rotateY + 'deg) scale(' + (isHovered ? '1.05' : '1') + ')',
            transformStyle: 'preserve-3d'
          }}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={handleMouseLeave}
        >
          
          {/* Outer Glow */}
          <div className="absolute -inset-2 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 rounded-2xl opacity-60 blur-2xl animate-pulse"></div>
          
          {/* Main Card */}
          <div className="relative w-full h-full bg-gradient-to-br from-slate-950 via-slate-900 to-black rounded-2xl overflow-hidden border-2 border-green-500 shadow-2xl">
            
            {/* Holographic Shine Effect */}
            <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-green-400 to-transparent opacity-20 animate-pulse"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400 to-transparent opacity-20 animate-pulse" style={{ animationDelay: '0.5s' }}></div>
            </div>

            {/* Scan Lines */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 3px, #00ff00 3px, #00ff00 6px)',
            }}></div>

            {/* Content */}
            <div className="relative p-6 h-full flex flex-col justify-between z-10">
              
              {/* Header */}
              <div className="flex items-start justify-between">
                
                {/* Logo Section */}
                <div className="relative">
                  <div className="absolute inset-0 bg-green-500 blur-xl opacity-50 animate-pulse"></div>
                  <div className="relative flex items-center gap-3">
                    <div className="w-14 h-14 rounded-xl border-2 border-green-500 bg-black flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-cyan-500 opacity-20 animate-pulse"></div>
                      <span className="relative text-2xl font-black text-green-400">⚡</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-green-400 tracking-wider">UINEX</h2>
                      <p className="text-xs text-cyan-400 font-bold tracking-widest">UIZONCARD</p>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 px-3 py-1 bg-green-500 bg-opacity-20 border border-green-500 rounded-full">
                  <div className="relative">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <div className="absolute inset-0 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                  </div>
                  <span className="text-xs font-black text-green-400 uppercase">Active</span>
                </div>
              </div>

              {/* Middle Section */}
              <div>
                {/* Chip */}
                <div className="mb-6">
                  <div className="relative inline-block">
                    <div className="w-14 h-11 bg-gradient-to-br from-yellow-300 to-yellow-500 rounded-md relative overflow-hidden">
                      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-1.5">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-yellow-600 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                    <div className="absolute -inset-1 bg-yellow-500 blur-md opacity-50 animate-pulse"></div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="flex gap-3 mb-4">
                  {['8765', '4321', '9876', '5432'].map((num, i) => (
                    <div 
                      key={i} 
                      className="group relative"
                    >
                      <div className="absolute -inset-0.5 bg-green-500 rounded opacity-0 group-hover:opacity-100 blur transition duration-300"></div>
                      <div className="relative text-xl font-bold text-green-400 tracking-widest group-hover:text-cyan-400 transition-colors duration-300">
                        {num}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features Row */}
                <div className="flex gap-2">
                  {[
                    { icon: '🔐', text: 'Encrypted' },
                    { icon: '⚡', text: 'Instant' },
                    { icon: '🌐', text: 'Global' },
                  ].map((feature, i) => (
                    <div 
                      key={i}
                      className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-900 border border-slate-700 rounded-lg hover:border-green-500 transition-all duration-300 group"
                    >
                      <span className="text-sm group-hover:scale-125 transition-transform duration-300">{feature.icon}</span>
                      <span className="text-xs font-semibold text-gray-500 group-hover:text-green-400 transition-colors duration-300">{feature.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Footer */}
              <div className="flex items-end justify-between">
                
                {/* Cardholder Info */}
                <div>
                  <p className="text-xs text-gray-600 font-semibold mb-1 uppercase tracking-wider">Cardholder</p>
                  <p className="text-lg font-black text-white tracking-wide">ALEX MATRIX</p>
                </div>

                {/* Expiry */}
                <div className="text-right">
                  <p className="text-xs text-gray-600 font-semibold mb-1 uppercase tracking-wider">Expires</p>
                  <p className="text-lg font-bold text-green-400 tracking-wider">08/29</p>
                </div>
              </div>

            </div>

            {/* Corner Accents */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-green-500 opacity-50"></div>
            <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-cyan-500 opacity-50"></div>
            <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-cyan-500 opacity-50"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-green-500 opacity-50"></div>

            {/* Bottom Glow Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-green-500 via-cyan-500 to-blue-500 animate-pulse"></div>
          </div>

          {/* 3D Shadow Layer */}
          <div 
            className="absolute inset-0 bg-gradient-to-br from-green-900 to-cyan-900 rounded-2xl opacity-20 blur-xl"
            style={{
              transform: 'translateZ(-50px)',
              zIndex: -1
            }}
          ></div>
        </div>

      </div>

      {/* Info Cards Below */}
      <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 flex gap-4">
        
        {/* Balance Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-cyan-600 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-300"></div>
          <div className="relative px-6 py-4 bg-black rounded-xl border border-green-500 group-hover:border-cyan-500 transition-all duration-300">
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Balance</p>
            <p className="text-2xl font-black text-green-400">$24,567</p>
          </div>
        </div>

        {/* Limit Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-300"></div>
          <div className="relative px-6 py-4 bg-black rounded-xl border border-cyan-500 group-hover:border-blue-500 transition-all duration-300">
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Limit</p>
            <p className="text-2xl font-black text-cyan-400">$50,000</p>
          </div>
        </div>

        {/* Rewards Card */}
        <div className="relative group">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl opacity-60 group-hover:opacity-100 blur transition duration-300"></div>
          <div className="relative px-6 py-4 bg-black rounded-xl border border-blue-500 group-hover:border-purple-500 transition-all duration-300">
            <p className="text-xs text-gray-500 font-semibold mb-1 uppercase">Points</p>
            <p className="text-2xl font-black text-blue-400">12,450</p>
          </div>
        </div>

      </div>

      {/* Action Buttons */}
      <div className="absolute top-16 right-16 flex flex-col gap-3">
        
        <button className="relative group">
          <div className="absolute -inset-0.5 bg-green-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-5 py-3 bg-black border-2 border-green-500 rounded-lg group-hover:bg-green-500 transition-all duration-300">
            <span className="text-sm font-black text-green-400 group-hover:text-black uppercase tracking-wider">Transfer</span>
          </div>
        </button>

        <button className="relative group">
          <div className="absolute -inset-0.5 bg-cyan-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-5 py-3 bg-black border-2 border-cyan-500 rounded-lg group-hover:bg-cyan-500 transition-all duration-300">
            <span className="text-sm font-black text-cyan-400 group-hover:text-black uppercase tracking-wider">Pay</span>
          </div>
        </button>

        <button className="relative group">
          <div className="absolute -inset-0.5 bg-blue-600 rounded-lg blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
          <div className="relative px-5 py-3 bg-black border-2 border-blue-500 rounded-lg group-hover:bg-blue-500 transition-all duration-300">
            <span className="text-sm font-black text-blue-400 group-hover:text-black uppercase tracking-wider">History</span>
          </div>
        </button>

      </div>

      {/* Tilt Instruction */}
      <div className="absolute top-16 left-16">
        <div className="px-4 py-2 bg-black border border-green-500 rounded-full">
          <p className="text-xs text-green-400 font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            Hover to Tilt
          </p>
        </div>
      </div>

    </div>
  );
}
  `
  },
  {
    name: "UltraDarkPremiumCard",
    category: "Cards",
    code: `
function UltraDarkPremiumCard() {
  const [isFlipped, setIsFlipped] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });
  const [glowPosition, setGlowPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const tiltX = ((y - centerY) / centerY) * -8;
    const tiltY = ((x - centerX) / centerX) * 8;
    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;
    
    setCardTilt({ x: tiltX, y: tiltY });
    setGlowPosition({ x: glowX, y: glowY });
  };

  const resetTilt = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-8 overflow-hidden relative">
      
      {/* Dark Hexagon Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #ffffff 0.5px, transparent 0.5px)',
          backgroundSize: '25px 25px',
        }}></div>
      </div>

      {/* Subtle Dark Orbs */}
      <div className="absolute top-20 left-20 w-96 h-96 bg-red-950 rounded-full blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-orange-950 rounded-full blur-3xl opacity-20 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-yellow-950 rounded-full blur-3xl opacity-15 animate-pulse" style={{ animationDelay: '4s' }}></div>

      {/* Floating Particles */}
      {[...Array(40)].map((_, i) => (
        <div
          key={i}
          className="absolute bg-white rounded-full opacity-10 animate-pulse"
          style={{
            width: (0.5 + Math.random() * 1.5) + 'px',
            height: (0.5 + Math.random() * 1.5) + 'px',
            left: (i * 2.5) + '%',
            top: ((i * 4) % 100) + '%',
            animationDuration: (3 + Math.random() * 4) + 's',
            animationDelay: (Math.random() * 3) + 's'
          }}
        ></div>
      ))}

      {/* Main Container */}
      <div className="relative">
        
        {/* Card Container */}
        <div 
          className="relative w-[520px] h-[320px] transition-transform duration-500 cursor-pointer"
          style={{
            transform: 'rotateX(' + cardTilt.x + 'deg) rotateY(' + cardTilt.y + 'deg) scale(' + (isFlipped ? '0.95' : '1') + ')',
            transformStyle: 'preserve-3d',
            perspective: '1500px'
          }}
          onClick={() => setIsFlipped(!isFlipped)}
          onMouseMove={handleMouseMove}
          onMouseLeave={resetTilt}
        >
          
          {/* Animated Border */}
          <div className="absolute -inset-1 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 rounded-3xl opacity-60 blur-xl animate-pulse"></div>
          
          {/* Main Card */}
          <div className="relative w-full h-full bg-gradient-to-br from-zinc-950 via-neutral-950 to-black rounded-3xl overflow-hidden border border-zinc-800 shadow-2xl">
            
            {/* Dynamic Glow Effect */}
            <div 
              className="absolute w-64 h-64 bg-orange-600 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
              style={{
                left: glowPosition.x + '%',
                top: glowPosition.y + '%',
                transform: 'translate(-50%, -50%)'
              }}
            ></div>

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-5" style={{
              backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noiseFilter"%3E%3CfeTurbulence type="fractalNoise" baseFrequency="3" numOctaves="4" stitchTiles="stitch"/%3E%3C/filter%3E%3Crect width="100%25" height="100%25" filter="url(%23noiseFilter)"/%3E%3C/svg%3E")',
            }}></div>

            {/* Scanline Effect */}
            <div className="absolute inset-0 opacity-5 pointer-events-none" style={{
              backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, #ffffff 2px, #ffffff 3px)',
            }}></div>

            {/* Content */}
            <div className="relative p-8 h-full flex flex-col justify-between z-10">
              
              {/* Top Section */}
              <div>
                <div className="flex items-start justify-between mb-8">
                  
                  {/* Logo */}
                  <div className="relative group">
                    <div className="absolute -inset-2 bg-gradient-to-r from-red-900 to-orange-900 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>
                    <div className="relative w-20 h-20 bg-zinc-900 border border-zinc-800 rounded-2xl flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-red-950 to-orange-950 opacity-50"></div>
                      <div className="relative">
                        <div className="absolute inset-0 blur-md">
                          <span className="text-4xl">🔥</span>
                        </div>
                        <span className="relative text-4xl">🔥</span>
                      </div>
                    </div>
                  </div>

                  {/* Status Badge */}
                  <div className="flex items-center gap-2 px-4 py-2 bg-zinc-900 border border-zinc-800 rounded-full group hover:border-orange-900 transition-colors duration-300">
                    <div className="relative">
                      <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                      <div className="absolute inset-0 w-2 h-2 bg-orange-500 rounded-full animate-ping opacity-75"></div>
                    </div>
                    <span className="text-xs font-black text-zinc-400 uppercase tracking-widest group-hover:text-orange-500 transition-colors duration-300">Elite</span>
                  </div>
                </div>

                {/* Brand Name */}
                <div className="mb-8">
                  <h1 className="text-6xl font-black text-white mb-2 tracking-tight">OBSIDIAN</h1>
                  <div className="flex items-center gap-3">
                    <div className="h-1 w-16 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 rounded-full"></div>
                    <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">Black Edition</p>
                  </div>
                </div>

                {/* Chip */}
                <div className="mb-6">
                  <div className="relative inline-block group">
                    <div className="absolute -inset-1 bg-yellow-600 blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                    <div className="relative w-16 h-12 bg-gradient-to-br from-yellow-700 via-yellow-600 to-yellow-500 rounded-lg overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-20"></div>
                      <div className="absolute inset-0 grid grid-cols-3 gap-0.5 p-2">
                        {[...Array(9)].map((_, i) => (
                          <div key={i} className="bg-yellow-800 rounded-sm"></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Number */}
                <div className="flex gap-5 mb-6">
                  {['9876', '5432', '1098', '7654'].map((num, i) => (
                    <div key={i} className="group relative">
                      <div className="absolute -inset-1 bg-orange-900 rounded-lg opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"></div>
                      <div className="relative text-2xl font-bold text-zinc-400 tracking-wider group-hover:text-white transition-colors duration-300">
                        {num}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Section */}
              <div>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xs text-zinc-700 font-bold mb-1 uppercase tracking-wider">Cardholder</p>
                    <p className="text-xl font-black text-white tracking-wide">MARCUS BLACKWELL</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-zinc-700 font-bold mb-1 uppercase tracking-wider">Expires</p>
                    <p className="text-xl font-black text-zinc-400 tracking-wider">03/29</p>
                  </div>
                </div>
              </div>

            </div>

            {/* Corner Decorations */}
            <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-zinc-800 opacity-30"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-zinc-800 opacity-30"></div>

            {/* Bottom Accent Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-red-900 via-orange-900 to-yellow-900 opacity-60"></div>
          </div>
        </div>

        {/* Stats Cards Below */}
        <div className="mt-10 grid grid-cols-4 gap-4">
          
          {[
            { icon: '💰', value: '$89,420', label: 'Balance', color: 'red' },
            { icon: '📊', value: '+24.5%', label: 'Growth', color: 'orange' },
            { icon: '⚡', value: '156', label: 'Transactions', color: 'yellow' },
            { icon: '🎯', value: '98.7%', label: 'Score', color: 'green' },
          ].map((stat, i) => (
            <div 
              key={i}
              className="relative group cursor-pointer"
              onMouseEnter={() => setHoveredStat(i)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div 
                className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-50 blur transition-opacity duration-300"
                style={{
                  backgroundColor: stat.color === 'red' ? '#7f1d1d' : 
                                   stat.color === 'orange' ? '#7c2d12' : 
                                   stat.color === 'yellow' ? '#713f12' : '#14532d'
                }}
              ></div>
              <div className="relative p-5 bg-zinc-950 border border-zinc-900 rounded-xl group-hover:border-zinc-800 transition-all duration-300">
                <div className="text-3xl mb-2 transition-transform duration-300" style={{
                  transform: hoveredStat === i ? 'scale(1.2) rotate(5deg)' : 'scale(1) rotate(0deg)'
                }}>
                  {stat.icon}
                </div>
                <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                <div className="text-xs text-zinc-600 font-bold uppercase tracking-wide">{stat.label}</div>
              </div>
            </div>
          ))}

        </div>

        {/* Action Panel */}
        <div className="mt-6 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-sm font-black text-white uppercase tracking-wider">Quick Actions</h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-zinc-600 font-bold">Secure Connection</span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            
            {[
              { icon: '💸', label: 'Send', color: 'red' },
              { icon: '📥', label: 'Receive', color: 'orange' },
              { icon: '📈', label: 'Invest', color: 'yellow' },
            ].map((action, i) => (
              <button 
                key={i}
                className="relative group overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    backgroundColor: action.color === 'red' ? '#7f1d1d' : 
                                     action.color === 'orange' ? '#7c2d12' : '#713f12'
                  }}
                ></div>
                <div className="relative px-6 py-4 bg-zinc-900 border border-zinc-800 rounded-xl group-hover:border-transparent transition-all duration-300">
                  <div className="text-2xl mb-2">{action.icon}</div>
                  <span className="text-sm font-black text-zinc-400 group-hover:text-white transition-colors duration-300">{action.label}</span>
                </div>
              </button>
            ))}

          </div>
        </div>

        {/* Transaction History */}
        <div className="mt-6 p-6 bg-zinc-950 border border-zinc-900 rounded-2xl">
          <h3 className="text-sm font-black text-white uppercase tracking-wider mb-4">Recent Activity</h3>
          
          <div className="space-y-3">
            {[
              { name: 'Amazon Purchase', amount: '-$127.50', time: '2h ago', icon: '🛍️' },
              { name: 'Salary Deposit', amount: '+$5,200', time: '1d ago', icon: '💼' },
              { name: 'Netflix Subscription', amount: '-$15.99', time: '3d ago', icon: '🎬' },
            ].map((transaction, i) => (
              <div 
                key={i}
                className="flex items-center justify-between p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-zinc-700 transition-colors duration-300 group cursor-pointer"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-zinc-950 border border-zinc-800 rounded-lg flex items-center justify-center text-2xl group-hover:scale-110 transition-transform duration-300">
                    {transaction.icon}
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white mb-1">{transaction.name}</p>
                    <p className="text-xs text-zinc-600 font-semibold">{transaction.time}</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-black" style={{
                    color: transaction.amount.startsWith('+') ? '#22c55e' : '#ef4444'
                  }}>
                    {transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Flip Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="px-4 py-2 bg-zinc-950 border border-zinc-800 rounded-full">
          <p className="text-xs text-zinc-600 font-bold uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></span>
            Click Card to Flip
          </p>
        </div>
      </div>

    </div>
  );
}
  `
  },
  {
    name: "NexusFooter",
    category: "Footer",
    code: `function NexusFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredSocial, setHoveredSocial] = useState(null);
  const [activeTab, setActiveTab] = useState('quick');
  const [emailInput, setEmailInput] = useState('');
  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(rgba(34, 211, 238, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(34, 211, 238, 0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      {/* Floating Gradient Orbs */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 rounded-full opacity-30 blur-3xl bg-cyan-500 animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl bg-violet-500"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl bg-fuchsia-500"></div>

      <footer className="relative z-10 w-full">
        
        {/* Top Wave Divider */}
        <div className="relative h-24 overflow-hidden">
          <svg className="absolute bottom-0 w-full h-24" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,64 C240,96 480,32 720,64 C960,96 1200,32 1200,64 L1200,120 L0,120 Z" fill="url(#gradient1)" opacity="0.3"/>
            <path d="M0,80 C320,48 640,112 960,80 C1120,64 1200,96 1200,96 L1200,120 L0,120 Z" fill="url(#gradient2)" opacity="0.5"/>
            <defs>
              <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
              <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
            
            {/* Left Column - Brand & Contact */}
            <div className="lg:col-span-1">
              
              {/* Logo Section */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 via-violet-500 to-fuchsia-500 rounded-2xl animate-pulse"></div>
                    <div className="absolute inset-1 bg-black rounded-xl flex items-center justify-center">
                      <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">N</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">NEXUS</h2>
                    <p className="text-xs font-bold tracking-widest text-cyan-500">CREATIVE STUDIO</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Transforming ideas into digital masterpieces. We blend creativity with technology to build extraordinary experiences.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {[
                  { icon: '📧', label: 'Email', value: 'hello@nexus.studio' },
                  { icon: '📱', label: 'Phone', value: '+1 (555) 123-4567' },
                  { icon: '📍', label: 'Location', value: 'San Francisco, CA' }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-xl hover:border-cyan-500 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-2xl group-hover:scale-110 transition-transform duration-300">{item.icon}</span>
                    <div>
                      <p className="text-xs text-gray-500 font-semibold">{item.label}</p>
                      <p className="text-sm text-white font-medium">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Middle Column - Quick Links with Tabs */}
            <div className="lg:col-span-1">
              <h3 className="text-xl font-black text-white mb-6 flex items-center gap-2">
                <span className="text-cyan-400">◆</span> EXPLORE
              </h3>

              {/* Tab Buttons */}
              <div className="flex gap-2 mb-6">
                {[
                  { id: 'quick', label: 'Quick Links' },
                  { id: 'resources', label: 'Resources' }
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className="px-5 py-2 text-xs font-bold rounded-lg transition-all duration-300"
                    style={{
                      backgroundColor: activeTab === tab.id ? '#06b6d4' : '#0f172a',
                      color: activeTab === tab.id ? '#000' : '#64748b',
                      transform: activeTab === tab.id ? 'translateY(-2px)' : 'translateY(0)'
                    }}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <div className="space-y-3">
                {activeTab === 'quick' ? (
                  <>
                    {['About Us', 'Our Work', 'Services', 'Pricing', 'Contact', 'Careers'].map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg transition-all duration-300 group"
                        style={{
                          backgroundColor: hoveredLink === link ? '#0f172a' : 'transparent',
                          borderLeft: hoveredLink === link ? '3px solid #06b6d4' : '3px solid transparent'
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span className="text-sm font-semibold" style={{
                          color: hoveredLink === link ? '#06b6d4' : '#94a3b8'
                        }}>
                          {link}
                        </span>
                        <span className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </a>
                    ))}
                  </>
                ) : (
                  <>
                    {['Blog & Articles', 'Design Resources', 'Free Templates', 'UI Kit', 'Documentation', 'API Reference'].map((link) => (
                      <a
                        key={link}
                        href="#"
                        className="flex items-center justify-between p-3 rounded-lg transition-all duration-300 group"
                        style={{
                          backgroundColor: hoveredLink === link ? '#0f172a' : 'transparent',
                          borderLeft: hoveredLink === link ? '3px solid #8b5cf6' : '3px solid transparent'
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span className="text-sm font-semibold" style={{
                          color: hoveredLink === link ? '#8b5cf6' : '#94a3b8'
                        }}>
                          {link}
                        </span>
                        <span className="text-violet-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">→</span>
                      </a>
                    ))}
                  </>
                )}
              </div>
            </div>

            {/* Right Column - Newsletter */}
            <div className="lg:col-span-1">
              <div className="relative p-8 rounded-2xl overflow-hidden">
                {/* Gradient Border Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-violet-500 to-fuchsia-500 opacity-20 rounded-2xl"></div>
                <div className="absolute inset-[2px] bg-black rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black text-green-500 tracking-wider">LIVE NOW</span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-3">
                    Stay In The Loop 🚀
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                    Join 25,000+ creators getting weekly insights on design, development, and digital trends.
                  </p>

                  {/* Newsletter Form */}
                  <div className="space-y-3 mb-6">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full px-4 py-3 bg-slate-900 border-2 border-slate-700 rounded-xl text-white text-sm font-medium focus:outline-none focus:border-cyan-500 transition-all duration-300"
                    />
                    <button className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-black text-sm rounded-xl hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50 transition-all duration-300">
                      SUBSCRIBE FREE →
                    </button>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-800">
                    {[
                      { num: '25K+', label: 'Subscribers' },
                      { num: '4.9★', label: 'Rating' },
                      { num: '100%', label: 'Free' }
                    ].map((stat, i) => (
                      <div key={i} className="text-center">
                        <div className="text-lg font-black bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">{stat.num}</div>
                        <div className="text-xs text-gray-500 font-semibold">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Social Media Bar */}
          <div className="mb-16 p-6 bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-800 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="text-sm font-black text-white mb-1">CONNECT WITH US</h4>
                <p className="text-xs text-gray-500">Follow our journey across platforms</p>
              </div>
              
              <div className="flex gap-3">
                {[
                  { name: 'Twitter', icon: '𝕏', color: '#000000', hoverColor: '#1da1f2' },
                  { name: 'LinkedIn', icon: 'in', color: '#0077b5', hoverColor: '#00a0dc' },
                  { name: 'GitHub', icon: 'GH', color: '#333333', hoverColor: '#666666' },
                  { name: 'Dribbble', icon: 'Dr', color: '#ea4c89', hoverColor: '#f26798' },
                  { name: 'Behance', icon: 'Be', color: '#1769ff', hoverColor: '#4285f4' }
                ].map((social) => (
                  <a
                    key={social.name}
                    href="#"
                    className="w-12 h-12 flex items-center justify-center rounded-xl font-black text-xs border-2 transition-all duration-300"
                    style={{
                      backgroundColor: hoveredSocial === social.name ? social.hoverColor : 'transparent',
                      borderColor: hoveredSocial === social.name ? social.hoverColor : '#1e293b',
                      color: hoveredSocial === social.name ? '#ffffff' : '#64748b',
                      transform: hoveredSocial === social.name ? 'translateY(-4px) rotate(5deg)' : 'translateY(0) rotate(0deg)'
                    }}
                    onMouseEnter={() => setHoveredSocial(social.name)}
                    onMouseLeave={() => setHoveredSocial(null)}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-slate-800">
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-sm text-gray-500 font-medium">
                © 2025 Nexus Studio. All rights reserved.
              </p>
              <div className="flex gap-5 text-sm">
                {['Privacy', 'Terms', 'Cookies', 'Sitemap'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="font-semibold transition-all duration-300"
                    style={{
                      color: hoveredLink === item ? '#06b6d4' : '#64748b',
                      textDecoration: hoveredLink === item ? 'underline' : 'none'
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Back to Top Button */}
            <button className="group flex items-center gap-2 px-5 py-2 bg-gradient-to-r from-cyan-500 to-violet-500 rounded-full font-bold text-sm text-white hover:scale-105 transition-transform duration-300">
              <span>Back to Top</span>
              <span className="group-hover:-translate-y-1 transition-transform duration-300">↑</span>
            </button>

          </div>

        </div>

        {/* Bottom Animated Gradient */}
        <div className="h-2 mt-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-violet-500 to-fuchsia-500 animate-pulse"></div>
        </div>

      </footer>
    </div>
  );
}
  `
  },
  {
    name: "QuantumFooter",
    category: "Footer",
    code: `
function QuantumFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [activeService, setActiveService] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-black flex items-end relative overflow-hidden">
      
      {/* Hexagon Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 40px, #a855f7 40px, #a855f7 41px), repeating-linear-gradient(60deg, transparent, transparent 40px, #6366f1 40px, #6366f1 41px), repeating-linear-gradient(120deg, transparent, transparent 40px, #ec4899 40px, #ec4899 41px)'
        }}></div>
      </div>

      {/* Glowing Particles */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-25 blur-3xl bg-indigo-500"></div>
      <div className="absolute bottom-1/3 right-1/3 w-80 h-80 rounded-full opacity-20 blur-3xl bg-pink-500"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl bg-purple-500"></div>

      <footer className="relative z-10 w-full">
        
        {/* Animated Top Border */}
        <div className="flex items-center justify-center mb-12">
          <div className="w-full max-w-7xl px-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
              <div className="h-px flex-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-pink-500 animate-pulse"></div>
                <div className="w-3 h-3 rounded-full bg-purple-500 animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                <div className="w-3 h-3 rounded-full bg-indigo-500 animate-pulse" style={{ animationDelay: '0.4s' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-8 py-16">
          
          {/* Main Grid Section */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
            
            {/* Brand Section - 4 columns */}
            <div className="lg:col-span-4">
              
              {/* Logo with Animation */}
              <div className="mb-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-16 h-16 group">
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute inset-0.5 bg-black rounded-2xl"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-3xl font-black bg-gradient-to-br from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Q</span>
                    </div>
                    <div className="absolute -inset-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300"></div>
                  </div>
                  <div>
                    <h2 className="text-4xl font-black text-white tracking-tight">QUANTUM</h2>
                    <p className="text-xs font-bold tracking-widest bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">INNOVATIONS</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-sm leading-relaxed mb-8">
                  Pioneering the future of digital innovation. We create cutting-edge solutions that push the boundaries of what's possible.
                </p>
              </div>

              {/* Awards & Recognition */}
              <div className="space-y-3">
                <h4 className="text-xs font-black text-white tracking-wider mb-4 flex items-center gap-2">
                  <span className="w-1 h-4 bg-gradient-to-b from-indigo-500 to-pink-500"></span>
                  AWARDS & RECOGNITION
                </h4>
                {[
                  { award: 'Best Digital Agency 2025', org: 'Webby Awards' },
                  { award: 'Innovation Excellence', org: 'Tech Summit' },
                  { award: 'Design of the Year', org: 'Awwwards' }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className="flex items-start gap-3 p-3 bg-gradient-to-r from-slate-900/50 to-transparent border-l-2 border-indigo-500/50 hover:border-indigo-500 transition-all duration-300 cursor-pointer group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform duration-300">🏆</span>
                    <div>
                      <p className="text-sm font-bold text-white">{item.award}</p>
                      <p className="text-xs text-gray-500">{item.org}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services Grid - 5 columns */}
            <div className="lg:col-span-5">
              <h3 className="text-xl font-black text-white mb-8 flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                OUR SERVICES
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { name: 'Web Design', icon: '🎨', color: '#6366f1', desc: 'Beautiful interfaces' },
                  { name: 'Development', icon: '💻', color: '#8b5cf6', desc: 'Powerful solutions' },
                  { name: 'Mobile Apps', icon: '📱', color: '#a855f7', desc: 'iOS & Android' },
                  { name: 'Branding', icon: '✨', color: '#c026d3', desc: 'Unique identity' },
                  { name: 'Marketing', icon: '📊', color: '#d946ef', desc: 'Growth strategy' },
                  { name: 'Consulting', icon: '💡', color: '#ec4899', desc: 'Expert guidance' }
                ].map((service, i) => (
                  <div
                    key={i}
                    className="p-5 border-2 rounded-xl cursor-pointer transition-all duration-300 group"
                    style={{
                      borderColor: activeService === i ? service.color : '#1e293b',
                      transform: activeService === i ? 'translateY(-4px)' : 'translateY(0)',
                      backgroundColor: activeService === i ? service.color + '15' : 'rgba(15, 23, 42, 0.5)'
                    }}
                    onMouseEnter={() => setActiveService(i)}
                    onMouseLeave={() => setActiveService(null)}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{service.icon}</div>
                    <h5 className="text-sm font-black text-white mb-1">{service.name}</h5>
                    <p className="text-xs text-gray-500">{service.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & CTA - 3 columns */}
            <div className="lg:col-span-3">
              
              {/* Quick Contact */}
              <div className="mb-8 p-6 bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl backdrop-blur-sm">
                <h4 className="text-sm font-black text-white mb-4">GET IN TOUCH</h4>
                
                <div className="space-y-3 mb-6">
                  <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-indigo-400 transition-colors duration-300">
                    <span className="text-lg">📧</span>
                    <span className="font-medium">info@quantum.io</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-purple-400 transition-colors duration-300">
                    <span className="text-lg">💬</span>
                    <span className="font-medium">Live Chat</span>
                  </a>
                  <a href="#" className="flex items-center gap-3 text-sm text-gray-400 hover:text-pink-400 transition-colors duration-300">
                    <span className="text-lg">📞</span>
                    <span className="font-medium">+1 888 999 0000</span>
                  </a>
                </div>

                <button className="w-full px-5 py-3 bg-gradient-to-r from-indigo-600 to-pink-600 text-white text-sm font-black rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                  START A PROJECT →
                </button>
              </div>

              {/* Newsletter Mini */}
              <div className="p-5 bg-black/50 border border-slate-700 rounded-xl">
                <h5 className="text-xs font-black text-white mb-3">NEWSLETTER</h5>
                <input
                  type="email"
                  placeholder="Your email"
                  value={newsletterEmail}
                  onChange={(e) => setNewsletterEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-900 border border-slate-700 rounded-lg text-white text-xs mb-3 focus:outline-none focus:border-indigo-500 transition-colors duration-300"
                />
                <button className="w-full px-4 py-2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-bold rounded-lg hover:opacity-90 transition-opacity duration-300">
                  SUBSCRIBE
                </button>
              </div>

            </div>

          </div>

          {/* Stats Banner */}
          <div className="mb-16 p-8 bg-gradient-to-r from-indigo-900/40 via-purple-900/40 to-pink-900/40 border-2 border-indigo-500/20 rounded-2xl backdrop-blur-sm">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { number: '850+', label: 'Projects Delivered', icon: '🚀' },
                { number: '95%', label: 'Client Satisfaction', icon: '⭐' },
                { number: '120+', label: 'Team Experts', icon: '👥' },
                { number: '25+', label: 'Countries Served', icon: '🌍' }
              ].map((stat, i) => (
                <div
                  key={i}
                  className="text-center cursor-pointer group"
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div className="text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">{stat.icon}</div>
                  <div 
                    className="text-4xl font-black mb-2 transition-all duration-300"
                    style={{
                      background: hoveredStat === i 
                        ? 'linear-gradient(to right, #6366f1, #ec4899)' 
                        : 'linear-gradient(to right, #6366f1, #a855f7)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-xs font-semibold text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16 pb-16 border-b border-slate-800">
            {[
              { title: 'Company', links: ['About', 'Team', 'Careers', 'News'] },
              { title: 'Solutions', links: ['Enterprise', 'Startups', 'Agencies', 'Ecommerce'] },
              { title: 'Resources', links: ['Blog', 'Guides', 'Events', 'Support'] },
              { title: 'Products', links: ['Platform', 'Analytics', 'Security', 'API'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'License', 'Compliance'] }
            ].map((section, idx) => (
              <div key={idx}>
                <h4 className="text-xs font-black text-white tracking-wider mb-5 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-pink-500"></span>
                  {section.title.toUpperCase()}
                </h4>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
                        style={{
                          color: hoveredLink === link ? '#a855f7' : '#94a3b8'
                        }}
                        onMouseEnter={() => setHoveredLink(link)}
                        onMouseLeave={() => setHoveredLink(null)}
                      >
                        <span className="w-0 group-hover:w-2 h-px bg-purple-500 transition-all duration-300"></span>
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            
            {/* Copyright & Links */}
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-sm text-gray-500 font-medium flex items-center gap-2">
                <span className="text-lg">©</span> 2025 Quantum Innovations
              </p>
              <div className="flex gap-6 text-sm">
                {['Privacy Policy', 'Terms of Use', 'Cookie Settings'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="font-semibold transition-all duration-300"
                    style={{
                      color: hoveredLink === item ? '#ec4899' : '#64748b',
                      borderBottom: hoveredLink === item ? '2px solid #ec4899' : '2px solid transparent'
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              <span className="text-xs font-bold text-gray-500">FOLLOW US:</span>
              {[
                { name: 'LinkedIn', icon: 'Li', color: '#0077b5' },
                { name: 'Twitter', icon: '𝕏', color: '#000000' },
                { name: 'Instagram', icon: 'Ig', color: '#e1306c' },
                { name: 'Facebook', icon: 'Fb', color: '#1877f2' },
                { name: 'YouTube', icon: 'Yt', color: '#ff0000' }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className="w-10 h-10 flex items-center justify-center border-2 rounded-lg font-black text-xs transition-all duration-300"
                  style={{
                    borderColor: hoveredLink === social.name ? social.color : '#1e293b',
                    backgroundColor: hoveredLink === social.name ? social.color : 'transparent',
                    color: hoveredLink === social.name ? '#ffffff' : '#64748b',
                    transform: hoveredLink === social.name ? 'translateY(-3px) rotate(-5deg)' : 'translateY(0) rotate(0deg)'
                  }}
                  onMouseEnter={() => setHoveredLink(social.name)}
                  onMouseLeave={() => setHoveredLink(null)}
                >
                  {social.icon}
                </a>
              ))}
            </div>

          </div>

        </div>

        {/* Animated Bottom Gradient */}
        <div className="h-1 mt-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 hover:opacity-100 transition-opacity duration-1000"></div>
        </div>

      </footer>
    </div>
  );
}
  `
  },
  {
    name: "VortexFooter",
    category: "Footer",
    code: `
function VortexFooter() {
  const [hoveredLink, setHoveredLink] = useState(null);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [emailValue, setEmailValue] = useState('');
  const [isEmailFocused, setIsEmailFocused] = useState(false);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Radial Grid Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, #10b981 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Animated Gradient Orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-20 blur-3xl bg-emerald-500 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl bg-teal-500"></div>
      <div className="absolute top-1/2 left-1/2 w-80 h-80 rounded-full opacity-15 blur-3xl bg-green-500"></div>

      <footer className="relative z-10 w-full">
        
        {/* Glowing Top Border */}
        <div className="relative h-1 mb-16">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent blur-md"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-16">
          
          {/* Hero Section with CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
            
            {/* Left - Brand & Mission */}
            <div>
              {/* Logo Section */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="relative w-14 h-14">
                    <div className="absolute inset-0 bg-emerald-500 rounded-xl blur-md"></div>
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl"></div>
                    <div className="absolute inset-0.5 bg-black rounded-lg flex items-center justify-center">
                      <span className="text-2xl font-black bg-gradient-to-br from-emerald-400 to-teal-400 bg-clip-text text-transparent">V</span>
                    </div>
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">VORTEX</h2>
                    <p className="text-xs font-bold tracking-widest text-emerald-400">TECH SOLUTIONS</p>
                  </div>
                </div>
                
                <p className="text-gray-400 text-base leading-relaxed mb-8">
                  Empowering businesses with next-generation technology solutions. We turn complex challenges into elegant digital experiences.
                </p>

                {/* Mission Statement */}
                <div className="p-6 bg-gradient-to-br from-emerald-900 bg-opacity-20 border-l-4 border-emerald-500 rounded-r-xl mb-8">
                  <h4 className="text-sm font-black text-emerald-400 mb-2">OUR MISSION</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    To revolutionize the digital landscape by delivering innovative solutions that drive growth and success.
                  </p>
                </div>
              </div>

              {/* Key Features */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { title: '24/7 Support', icon: '🛟', color: '#10b981' },
                  { title: 'Fast Delivery', icon: '⚡', color: '#14b8a6' },
                  { title: 'Secure & Safe', icon: '🔒', color: '#059669' },
                  { title: 'Best Quality', icon: '✓', color: '#0d9488' }
                ].map((feature, i) => (
                  <div
                    key={i}
                    className="p-4 border-2 rounded-xl cursor-pointer transition-all duration-300 group"
                    style={{
                      borderColor: hoveredFeature === i ? feature.color : '#1f2937',
                      backgroundColor: hoveredFeature === i ? feature.color + '10' : 'transparent',
                      transform: hoveredFeature === i ? 'translateY(-4px)' : 'translateY(0)'
                    }}
                    onMouseEnter={() => setHoveredFeature(i)}
                    onMouseLeave={() => setHoveredFeature(null)}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                    <div className="text-sm font-bold text-white">{feature.title}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right - Newsletter & Contact */}
            <div>
              
              {/* Premium Newsletter Box */}
              <div className="relative p-8 rounded-2xl overflow-hidden mb-8">
                {/* Animated Border */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 to-teal-500 opacity-30"></div>
                <div className="absolute inset-0.5 bg-gradient-to-br from-gray-900 to-black rounded-2xl"></div>
                
                <div className="relative z-10">
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500 bg-opacity-20 border border-emerald-500 rounded-full mb-6">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
                    <span className="text-xs font-black text-emerald-400 tracking-wider">EXCLUSIVE ACCESS</span>
                  </div>

                  <h3 className="text-3xl font-black text-white mb-3">
                    Join Our Elite<br/>Community
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-8 leading-relaxed">
                    Get exclusive industry insights, premium resources, and early access to our latest innovations.
                  </p>

                  {/* Email Input */}
                  <div className="space-y-4 mb-6">
                    <div className="relative">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        onFocus={() => setIsEmailFocused(true)}
                        onBlur={() => setIsEmailFocused(false)}
                        className="w-full px-5 py-4 bg-black border-2 rounded-xl text-white text-sm font-medium focus:outline-none transition-all duration-300"
                        style={{
                          borderColor: isEmailFocused ? '#10b981' : '#374151'
                        }}
                      />
                      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-emerald-500 opacity-50">
                        📧
                      </div>
                    </div>
                    
                    <button className="w-full px-6 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-black font-black text-sm rounded-xl hover:scale-105 hover:shadow-xl hover:shadow-emerald-500 transition-all duration-300">
                      GET STARTED NOW →
                    </button>
                  </div>

                  {/* Trust Indicators */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                    <div className="text-center">
                      <div className="text-xl font-black text-emerald-400">50K+</div>
                      <div className="text-xs text-gray-500">Subscribers</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-black text-emerald-400">4.9★</div>
                      <div className="text-xs text-gray-500">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-xl font-black text-emerald-400">100%</div>
                      <div className="text-xs text-gray-500">Privacy</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="grid grid-cols-2 gap-4">
                <a href="#" className="p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-emerald-500 transition-all duration-300 group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">💬</div>
                  <div className="text-xs font-bold text-white">Live Chat</div>
                  <div className="text-xs text-gray-500">24/7 Support</div>
                </a>
                <a href="#" className="p-4 bg-gray-900 border border-gray-800 rounded-xl hover:border-teal-500 transition-all duration-300 group">
                  <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">📞</div>
                  <div className="text-xs font-bold text-white">Call Us</div>
                  <div className="text-xs text-gray-500">Quick Response</div>
                </a>
              </div>

            </div>

          </div>

          {/* Links Section with Category Filter */}
          <div className="mb-16">
            
            {/* Category Filter */}
            <div className="flex items-center gap-4 mb-10 pb-6 border-b border-gray-800">
              <span className="text-sm font-black text-gray-500">BROWSE:</span>
              {['all', 'company', 'services', 'resources'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className="px-5 py-2 text-xs font-bold rounded-full transition-all duration-300"
                  style={{
                    backgroundColor: selectedCategory === cat ? '#10b981' : '#1f2937',
                    color: selectedCategory === cat ? '#000' : '#9ca3af',
                    transform: selectedCategory === cat ? 'translateY(-2px)' : 'translateY(0)'
                  }}
                >
                  {cat.toUpperCase()}
                </button>
              ))}
            </div>

            {/* Links Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
              {[
                {
                  category: 'company',
                  title: 'Company',
                  icon: '🏢',
                  links: ['About Us', 'Our Team', 'Careers', 'Press Kit', 'Contact']
                },
                {
                  category: 'services',
                  title: 'Services',
                  icon: '⚙️',
                  links: ['Web Development', 'Mobile Apps', 'Cloud Solutions', 'AI & ML', 'Consulting']
                },
                {
                  category: 'resources',
                  title: 'Resources',
                  icon: '📚',
                  links: ['Blog', 'Case Studies', 'Whitepapers', 'Webinars', 'Documentation']
                },
                {
                  category: 'company',
                  title: 'Legal',
                  icon: '⚖️',
                  links: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR', 'Licenses']
                }
              ].filter(section => selectedCategory === 'all' || section.category === selectedCategory).map((section, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-2 mb-6">
                    <span className="text-xl">{section.icon}</span>
                    <h4 className="text-sm font-black text-white tracking-wide">{section.title}</h4>
                  </div>
                  <ul className="space-y-3">
                    {section.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm font-medium transition-all duration-300 flex items-center gap-2 group"
                          style={{
                            color: hoveredLink === link ? '#10b981' : '#9ca3af'
                          }}
                          onMouseEnter={() => setHoveredLink(link)}
                          onMouseLeave={() => setHoveredLink(null)}
                        >
                          <span className="w-0 group-hover:w-2 h-0.5 bg-emerald-500 transition-all duration-300"></span>
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

          </div>

          {/* Social Proof Section */}
          <div className="mb-16 p-8 bg-gradient-to-r from-gray-900 to-black border border-gray-800 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              
              {/* Trusted By */}
              <div>
                <h4 className="text-xs font-black text-gray-500 mb-4">TRUSTED BY</h4>
                <div className="flex flex-wrap gap-3">
                  {['Google', 'Meta', 'Amazon', 'Netflix'].map((company) => (
                    <div key={company} className="px-4 py-2 bg-black border border-gray-700 rounded-lg text-xs font-bold text-gray-400 hover:text-emerald-400 hover:border-emerald-500 transition-all duration-300 cursor-pointer">
                      {company}
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div>
                <h4 className="text-xs font-black text-gray-500 mb-4">ACHIEVEMENTS</h4>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-lg">🏆</span>
                    <span className="text-xs text-gray-400">Best Startup 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-lg">⭐</span>
                    <span className="text-xs text-gray-400">Top Rated Service</span>
                  </div>
                </div>
              </div>

              {/* Social Connect */}
              <div>
                <h4 className="text-xs font-black text-gray-500 mb-4">CONNECT WITH US</h4>
                <div className="flex gap-3">
                  {[
                    { name: 'GitHub', icon: 'GH', color: '#333' },
                    { name: 'Twitter', icon: '𝕏', color: '#1da1f2' },
                    { name: 'LinkedIn', icon: 'in', color: '#0077b5' },
                    { name: 'Discord', icon: 'Dc', color: '#5865f2' }
                  ].map((social) => (
                    <a
                      key={social.name}
                      href="#"
                      className="w-10 h-10 flex items-center justify-center border-2 rounded-lg font-black text-xs transition-all duration-300"
                      style={{
                        borderColor: hoveredLink === social.name ? '#10b981' : '#374151',
                        backgroundColor: hoveredLink === social.name ? '#10b981' : 'transparent',
                        color: hoveredLink === social.name ? '#000' : '#9ca3af',
                        transform: hoveredLink === social.name ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)'
                      }}
                      onMouseEnter={() => setHoveredLink(social.name)}
                      onMouseLeave={() => setHoveredLink(null)}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-gray-800">
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <p className="text-sm text-gray-500 font-medium">
                © 2025 Vortex Tech. Built with 💚 in Silicon Valley
              </p>
              <div className="flex gap-6 text-sm">
                {['Sitemap', 'Accessibility', 'Security'].map((item) => (
                  <a 
                    key={item}
                    href="#" 
                    className="font-medium transition-all duration-300"
                    style={{
                      color: hoveredLink === item ? '#10b981' : '#6b7280'
                    }}
                    onMouseEnter={() => setHoveredLink(item)}
                    onMouseLeave={() => setHoveredLink(null)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            {/* Status Badge */}
            <div className="flex items-center gap-3 px-5 py-2 bg-black border border-emerald-500 rounded-full">
              <div className="relative">
                <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></div>
                <div className="absolute inset-0 w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping"></div>
              </div>
              <span className="text-xs font-black text-emerald-400 tracking-wider">SYSTEMS OPERATIONAL</span>
            </div>

          </div>

        </div>

        {/* Bottom Gradient Strip */}
        <div className="h-1.5 mt-12 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500"></div>

      </footer>
    </div>
  );
}
  `
  },
  {
    name: "Header",
    category: "Cards",
    code: `


  `
  },

];

// Use upsert: updates if exists by name, inserts if new
async function seedComponents() {
  try {
    await mongoose.connect('mongodb://localhost:27017/ui_componts');
    console.log('✅ Connected to MongoDB');

    for (const componentData of components) {
      const result = await Component.findOneAndUpdate(
        { name: componentData.name }, // Find by component name
        componentData,                 // Update with new data
        { upsert: true, new: true }   // Create if doesn't exist, return updated doc
      );
      console.log(`✅ ${result.isNew ? 'Created' : 'Updated'}: ${componentData.name}`);
    }

    console.log('\n🎉 All components seeded/updated successfully!');
    process.exit(0);
  } catch (err) {
    console.error('❌ Seeding failed:', err.message);
    process.exit(1);
  }
}

// Run the seed function
seedComponents();
