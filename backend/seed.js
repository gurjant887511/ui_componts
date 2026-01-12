import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { Component } from './models/ComponentModel.js';
import { Sparkles, Zap, Heart, Star, TrendingUp, Award, Crown, Flame, Check } from 'lucide-react';

dotenv.config();

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

  const products = ['Neural Core', 'Quantum Drive', 'Cyber Shield', 'Data Matrix', 'Cloud Nexus'];
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
                    <h2 className="text-3xl font-bold" style={{ color: 'rgb(74, 222, 128)' }}>AURORA</h2>
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
                  © 2025 Aurora Creative Lab
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
    name: "CyberTechFooter",
    category: "Footer",
    code: `

function CyberTechFooter() {
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
    name: "CyberTechFooterV2",
    category: "Footer",
    code: `
function CyberTechFooterV2() {
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
    name: "CyberTechFooterV3",
    category: "Footer",
    code: `
function CyberTechFooterV3() {
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
    name: "CyberTechFooterV4",
    category: "Footer",
    code: `

function CyberTechFooterV4() {
  const [hoveredLink, setHoveredLink] = useState(null);

  return (
    <div className="min-h-screen bg-black flex items-end relative overflow-hidden">
      
      {/* Dot Matrix Background */}
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
    name: "UltimateCard",
    category: "Cards",
    code: `
function UltimateCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const StarIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  );

  const FireIcon = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1.5 3 4 5 6 8-1 3-3 5-6 7-3-2-5-4-6-7 2-3 4.5-5 6-8z" />
      <path d="M12 12c0 2-1 3-2 4 1 0 2 0 2-1 0 1 1 1 2 1-1-1-2-2-2-4z" opacity="0.7"/>
    </svg>
  );

  return (
    <div style={{
      padding: '0',
      display: 'block'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '2px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #8b5cf6, #a78bfa, #c4b5fd)' 
            : 'linear-gradient(135deg, #6d28d9, #7c3aed, #8b5cf6)',
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
          padding: '36px', 
          background: 'linear-gradient(135deg, #0f172a, #1e1b4b)',
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

          {/* Popular Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '6px 16px',
            background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)',
            borderRadius: '20px',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            color: '#0f172a',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            boxShadow: '0 4px 12px rgba(139, 92, 246, 0.4)'
          }}>
            <FireIcon />
            POPULAR
          </div>

          {/* Icon */}
          <div style={{ 
            width: '64px', 
            height: '64px', 
            background: 'linear-gradient(135deg, #8b5cf6, #a78bfa)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '20px',
            color: '#0f172a',
            boxShadow: '0 8px 24px rgba(139, 92, 246, 0.4)',
            transition: 'all 0.3s',
            transform: isHovered ? 'rotate(-5deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}>
            <StarIcon />
          </div>

          <h3 style={{ 
            fontSize: '1.75rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #8b5cf6, #c4b5fd)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '12px',
            letterSpacing: '0.5px'
          }}>
            Ultimate Plan
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '28px',
            lineHeight: '1.6'
          }}>
            Unlock unlimited potential with our most powerful features and priority support
          </p>
          
          {/* Price Box */}
          <div style={{ 
            marginBottom: '28px',
            padding: '24px',
            background: 'rgba(139, 92, 246, 0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(139, 92, 246, 0.2)',
            transition: 'all 0.3s',
            boxShadow: isHovered ? '0 0 30px rgba(139, 92, 246, 0.1)' : 'none'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'baseline',
              marginBottom: '16px'
            }}>
              <span style={{
                fontSize: '3rem',
                fontWeight: 'bold',
                color: '#8b5cf6',
                lineHeight: '1'
              }}>$49</span>
              <span style={{
                fontSize: '1rem',
                color: '#64748b',
                marginLeft: '8px'
              }}>/month</span>
            </div>

            {/* Features List */}
            <div style={{ marginTop: '20px' }}>
              {['Unlimited Projects', 'Advanced Analytics', 'Priority Support', '100GB Storage'].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '10px' 
                }}>
                  <div style={{ 
                    width: '6px',
                    height: '6px',
                    background: '#8b5cf6',
                    borderRadius: '50%'
                  }}></div>
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
            Start Free Trial
          </button>

          {/* Stats */}
          <div style={{ 
            marginTop: '28px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '24px',
            borderTop: '1px solid rgba(139, 92, 246, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#8b5cf6',
                marginBottom: '4px'
              }}>
                10K+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Active Users</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#8b5cf6',
                marginBottom: '4px'
              }}>
                4.9★
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Rating</div>
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
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Uptime</div>
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
    name: "Header",
    category: "Cards",
    code: `




    
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
    name: "ProDeveloperCard",
    category: "Cards",
    code: `

function ProDeveloperCard() {
  const [isHovered, setIsHovered] = React.useState(false);

  // Icon SVG
  const CodeIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );

  const LightningIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8l-1 8 10-12h-8l1-8z" />
    </svg>
  );

  return (
    <div style={{ 
      padding: '0',
      display: 'block'
    }}>
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          padding: '2px', 
          background: isHovered 
            ? 'linear-gradient(135deg, #06b6d4, #22d3ee, #67e8f9)' 
            : 'linear-gradient(135deg, #0e7490, #0891b2, #06b6d4)',
          borderRadius: '24px',
          transition: 'all 0.4s ease',
          transform: isHovered ? 'translateY(-12px) scale(1.03)' : 'translateY(0) scale(1)',
          boxShadow: isHovered 
            ? '0 25px 70px rgba(6, 182, 212, 0.5), 0 0 60px rgba(6, 182, 212, 0.3)' 
            : '0 10px 40px rgba(6, 182, 212, 0.2)',
          cursor: 'pointer',
          maxWidth: '420px',
          width: '100%'
        }}
      >
        <div style={{ 
          padding: '28px', 
          background: 'linear-gradient(135deg, #0c1220, #0e1828)',
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
            background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)',
            borderRadius: '50%',
            transition: 'all 0.4s',
            opacity: isHovered ? 1 : 0.5
          }}></div>

          {/* Pro Badge */}
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            padding: '6px 16px',
            background: 'linear-gradient(135deg, #06b6d4, #22d3ee)',
            borderRadius: '20px',
            fontSize: '0.7rem',
            fontWeight: 'bold',
            color: '#0c1220',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            letterSpacing: '1px',
            boxShadow: '0 4px 12px rgba(6, 182, 212, 0.4)'
          }}>
            <LightningIcon />
            PRO
          </div>

          {/* Icon */}
          <div style={{ 
            width: '56px', 
            height: '56px', 
            background: 'linear-gradient(135deg, #06b6d4, #22d3ee)', 
            borderRadius: '16px', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            marginBottom: '16px',
            color: '#0c1220',
            boxShadow: '0 8px 24px rgba(6, 182, 212, 0.4)',
            transition: 'all 0.3s',
            transform: isHovered ? 'rotate(-10deg) scale(1.1)' : 'rotate(0deg) scale(1)'
          }}>
            <CodeIcon />
          </div>

          <h3 style={{ 
            fontSize: '1.6rem', 
            fontWeight: 'bold', 
            background: 'linear-gradient(135deg, #06b6d4, #67e8f9)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginBottom: '8px',
            letterSpacing: '0.5px'
          }}>
            Pro Developer
          </h3>
          
          <p style={{ 
            fontSize: '0.95rem', 
            color: '#94a3b8',
            marginBottom: '20px',
            lineHeight: '1.6'
          }}>
            Supercharge your development workflow with advanced tools and unlimited resources
          </p>
          
          {/* Content Box */}
          <div style={{ 
            marginBottom: '20px',
            padding: '20px',
            background: 'rgba(6, 182, 212, 0.08)',
            borderRadius: '16px',
            border: '1px solid rgba(6, 182, 212, 0.2)',
            transition: 'all 0.3s',
            boxShadow: isHovered ? '0 0 30px rgba(6, 182, 212, 0.1)' : 'none'
          }}>
            <div style={{
              marginBottom: '16px',
              paddingBottom: '12px',
              borderBottom: '1px solid rgba(6, 182, 212, 0.2)'
            }}>
              <div style={{
                fontSize: '0.75rem',
                color: '#22d3ee',
                fontWeight: 'bold',
                letterSpacing: '1px',
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
                  fontSize: '2.2rem',
                  fontWeight: 'bold',
                  color: '#06b6d4',
                  lineHeight: '1'
                }}>$29</span>
                <span style={{
                  fontSize: '0.9rem',
                  color: '#64748b'
                }}>/mo</span>
              </div>
            </div>

            {/* Features List */}
            <div style={{ marginTop: '16px' }}>
              {['Unlimited API Calls', 'Advanced Code Editor', 'Real-time Collaboration', 'Priority Deployment', 'Custom Integrations'].map((feature, i) => (
                <div key={i} style={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  gap: '12px', 
                  marginBottom: '10px' 
                }}>
                  <div style={{ 
                    width: '6px',
                    height: '6px',
                    background: '#06b6d4',
                    borderRadius: '50%',
                    boxShadow: '0 0 8px rgba(6, 182, 212, 0.6)'
                  }}></div>
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
                ? 'linear-gradient(135deg, #06b6d4, #22d3ee)' 
                : 'linear-gradient(135deg, #0891b2, #06b6d4)',
              color: '#ffffff', 
              border: 'none', 
              borderRadius: '12px', 
              fontWeight: 'bold', 
              cursor: 'pointer', 
              transition: 'all 0.3s',
              fontSize: '1rem',
              boxShadow: '0 8px 20px rgba(6, 182, 212, 0.3)',
              width: '100%',
              letterSpacing: '0.5px'
            }}
          >
            Start Building Now
          </button>

          <div style={{
            marginTop: '12px',
            textAlign: 'center',
            fontSize: '0.8rem',
            color: '#64748b'
          }}>
            7-day free trial • Cancel anytime
          </div>

          {/* Stats */}
          <div style={{ 
            marginTop: '20px', 
            display: 'flex', 
            justifyContent: 'space-around',
            paddingTop: '20px',
            borderTop: '1px solid rgba(6, 182, 212, 0.2)'
          }}>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#06b6d4',
                marginBottom: '4px'
              }}>
                50K+
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Developers</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#06b6d4',
                marginBottom: '4px'
              }}>
                99.9%
              </div>
              <div style={{ fontSize: '0.75rem', color: '#64748b' }}>Uptime</div>
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ 
                fontSize: '1.5rem', 
                fontWeight: 'bold', 
                color: '#06b6d4',
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
    name: "NeonCyberHeader",
    category: "Header",
    code: `

function NeonCyberHeader() {
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
                CYBER
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
    name: "CyberpunkNeonHeader",
    category: "Header",
    code: `
function CyberpunkNeonHeader() {
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
                CYBER
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
              Experience the bleeding edge of technology where neon dreams collide with digital reality in a cyberpunk paradise.
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
    name: "CyberpunkHeader",
    category: "Header",
    code: `
function CyberpunkHeader() {
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
      {/* Matrix Rain Effect */}
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
    name: "NeonCyberHeader",
    category: "Header",
    code: `
    // import { useState, useEffect } from 'react';
function NeonCyberHeader() {
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
                CYBER
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
                    CYBER
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
                    CYBER
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

      {/* Matrix Rain Effect Lines */}
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
