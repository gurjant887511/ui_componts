import React from 'react';

export default function UsersCardList() {
  const users = [
    { name: 'Sarah Johnson', role: 'Designer', avatar: '👩‍💼' },
    { name: 'Mike Chen', role: 'Developer', avatar: '👨‍💻' },
    { name: 'Emma Davis', role: 'Product Manager', avatar: '👩‍💼' },
    { name: 'Alex Brown', role: 'Marketer', avatar: '👨‍💼' },
    { name: 'Lisa Wang', role: 'UX Writer', avatar: '👩‍💼' },
    { name: 'James Wilson', role: 'DevOps', avatar: '👨‍💻' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <h1 className="text-4xl font-bold mb-12 text-center">Users List</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {users.map((user, idx) => (
          <div key={idx} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg p-6 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-4 mb-4">
              <div className="text-4xl">{user.avatar}</div>
              <div>
                <h3 className="text-lg font-bold">{user.name}</h3>
                <p className="text-gray-400 text-sm">{user.role}</p>
              </div>
            </div>
            <button className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-all text-sm">
              View Profile
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
