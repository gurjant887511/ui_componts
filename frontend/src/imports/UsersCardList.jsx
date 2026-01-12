import React from 'react';

const UsersCardList = () => {
  const users = [
    { name: 'John Doe', role: 'Designer', avatar: '👨' },
    { name: 'Jane Smith', role: 'Developer', avatar: '👩' },
    { name: 'Mike Johnson', role: 'Manager', avatar: '👨' },
  ];

  return (
    <div className="space-y-4 p-6">
      {users.map((user, i) => (
        <div key={i} className="flex items-center gap-4 p-4 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="text-3xl">{user.avatar}</div>
          <div>
            <h4 className="font-bold text-white">{user.name}</h4>
            <p className="text-sm text-gray-300">{user.role}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UsersCardList;
