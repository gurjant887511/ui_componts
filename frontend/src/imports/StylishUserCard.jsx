import React from 'react';

export default function StylishUserCard() {
  const userProfile = {
    name: 'Alex Johnson',
    role: 'UI/UX Designer',
    avatar: '👨‍💼',
    bio: 'Creative designer passionate about building beautiful user experiences',
    stats: [
      { label: 'Projects', value: '24' },
      { label: 'Followers', value: '1.2K' },
      { label: 'Rating', value: '4.9★' },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10 flex items-center justify-center">
      <div className="max-w-sm w-full">
        {/* User Card */}
        <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-2xl p-8 shadow-2xl">
          {/* Header Background */}
          <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-t-2xl -m-8"></div>

          {/* Avatar */}
          <div className="relative text-center mb-6 pt-8">
            <div className="text-7xl mb-4">{userProfile.avatar}</div>
          </div>

          {/* Profile Info */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold mb-1">{userProfile.name}</h2>
            <p className="text-blue-400 font-semibold">{userProfile.role}</p>
            <p className="text-white/70 text-sm mt-3">{userProfile.bio}</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-6 border-y border-white/10">
            {userProfile.stats.map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-2xl font-bold text-blue-400">{stat.value}</div>
                <div className="text-xs text-white/60 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all">
              Follow
            </button>
            <button className="w-full px-4 py-3 border-2 border-white/30 text-white font-bold rounded-lg hover:bg-white/10 transition-all">
              Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
