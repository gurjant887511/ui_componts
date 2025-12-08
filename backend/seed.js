import ComponentShowcase, { GlassCard, NeonButton, MorphIcon, FloatingTag, TimelineStepper } from './components/StylishComponents';

const mongoose = require('mongoose');
const Component = require('./models/Component');

const components = [
  {
    name: "Button Examples",
    code: `function ButtonExample() {
  return (
    <div className="space-x-4">
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
        Primary Button
      </button>
      <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50">
        Ghost Button
      </button>
    </div>
  );
}`
  },
  {
    name: "Card Example",
    code: `function CardExample() {
  return (
    <div className="p-6 bg-white rounded-xl shadow-lg">
      <h3 className="text-lg font-semibold">Sample Card</h3>
      <p className="text-sm text-gray-500">This is a sample card component</p>
      <div className="mt-4">
        <p>This is the card content</p>
      </div>
    </div>
  );
}`
  },
  {
    name: "Interactive Card",
    code: `function CardExample() {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-xl shadow hover:shadow-md transition">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Card Title</h2>
      <p className="text-gray-600 mb-4">
        This is a simple card component built using Tailwind CSS. You can use it
        to display content or information in a clean layout.
      </p>
      <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
        Learn More
      </button>
    </div>
  );
}`
  },

{

name: "Stylish Card",
code: `


function StylishCard() {
  return (
    <div className="relative w-80 p-6 bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-xl hover:scale-[1.02] transition-all duration-300 ease-in-out overflow-hidden group">
      {/* Gradient glow background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/30 via-purple-500/30 to-pink-500/30 opacity-0 group-hover:opacity-100 blur-xl transition duration-500"></div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="text-2xl font-bold text-white mb-2">Stylish Card</h3>
        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
          A premium card design with soft gradients, glass effect, and subtle hover
          animation — perfect for showcasing elegant content.
        </p>

        <button className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-lg hover:shadow-xl transition">
          Explore
        </button>
      </div>
    </div>
  );
}
`
},
{

name: "BigStylishCard Card",
code: `function BigStylishCard() {
  return (
    <div className="relative w-[420px] bg-gradient-to-br from-gray-900 via-blue-900 to-purple-800 text-white rounded-3xl overflow-hidden shadow-2xl hover:scale-[1.02] transition-all duration-500 ease-in-out group">
      {/* Image section */}
      <div className="h-56 w-full overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1503264116251-35a269479413?auto=format&fit=crop&w=900&q=80"
          alt="Card Banner"
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>

      {/* Content */}
      <div className="relative p-6">
        <h2 className="text-3xl font-bold mb-2 tracking-tight">Modern Stylish Card</h2>
        <p className="text-gray-200 text-sm mb-5 leading-relaxed">
          A beautiful large card with a gradient background, smooth hover animations,
          and elegant layout — perfect for featured sections or highlights.
        </p>

        <div className="flex space-x-3">
          <button className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-lg hover:shadow-xl transition font-semibold">
            Get Started
          </button>
          <button className="px-5 py-2 border border-white/30 rounded-lg hover:bg-white/10 transition font-semibold">
            Learn More
          </button>
        </div>
      </div>

      {/* Glowing border effect */}
      <div className="absolute inset-0 rounded-3xl border border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-[3px] transition-all duration-500 pointer-events-none"></div>
    </div>
  );
}



`
},

{

name: "StylishLoginCard Card",
code: `function StylishLoginCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        
        {/* Animated gradient border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 blur-[4px] transition-all duration-500"></div>

        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Welcome Back 👋</h2>
          <p className="text-gray-300 mt-1">Login to continue to your account</p>
        </div>

        {/* Form */}
        <form className="relative z-10 space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="relative z-10 text-center text-sm text-gray-400 mt-5">
          Don’t have an account?{" "}
          <a href="#" className="text-purple-400 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}  
 `
},
{

name: "UsersCardList Card",
code: `function UsersCardList() {
  const users = [
    {
      name: "Aarav Sharma",
      role: "Frontend Developer",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Riya Patel",
      role: "UI/UX Designer",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Karan Mehta",
      role: "Backend Engineer",
      avatar: "https://randomuser.me/api/portraits/men/21.jpg",
    },
    {
      name: "Priya Singh",
      role: "Product Manager",
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      name: "Arjun Verma",
      role: "Full Stack Developer",
      avatar: "https://randomuser.me/api/portraits/men/55.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-6 text-white overflow-hidden">
        
        <h2 className="text-2xl font-bold mb-6 text-center">Team Members</h2>

        <div className="space-y-4">
          {users.map((user, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 bg-white/10 border border-white/20 rounded-xl p-4 hover:bg-white/20 hover:scale-[1.02] transition-all duration-300 shadow-lg"
            >
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full border border-white/30 object-cover"
              />
              <div>
                <h3 className="font-semibold text-lg">{user.name}</h3>
                <p className="text-gray-300 text-sm">{user.role}</p>
              </div>
              <button className="ml-auto px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg text-sm font-medium hover:shadow-md transition">
                View
              </button>
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

name: "TextHoverEffect Card",
code: `function TextHoverEffect() {
  return (
    <div className="min-h-40 flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 transition-all duration-500 ease-in-out hover:tracking-widest hover:scale-105 hover:from-pink-500 hover:to-blue-400 cursor-pointer">
        Hover Me ✨
      </h1>
    </div>
  );
}

 `
},
{

name: "NeonGlowText Card",
code: `function NeonGlowText() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-indigo-950 to-purple-900">
      <h1 className="relative text-7xl font-extrabold text-white transition-all duration-500 ease-in-out cursor-pointer hover:scale-110">
        {/* Glowing Layer */}
        <span className="absolute inset-0 blur-3xl opacity-40 bg-gradient-to-r from-cyan-400 to-pink-500 animate-pulse"></span>

        {/* Visible Text Layer */}
        <span className="relative z-10 bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent 
          drop-shadow-[0_0_15px_rgba(255,255,255,0.6)] hover:drop-shadow-[0_0_35px_rgba(255,0,200,0.9)]">
          Neon Magic ⚡
        </span>
      </h1>
    </div>
  );
}

`
},
{

name: "ShimmerTextEffect Card",
code: `

function ShimmerTextEffect() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-slate-900 to-black">
      <h1
        className="relative text-6xl font-extrabold text-transparent bg-clip-text 
        bg-gradient-to-r from-purple-400 via-pink-500 to-yellow-500 
        animate-shimmer bg-[length:200%_auto] transition-transform duration-500 hover:scale-110 cursor-pointer"
      >
        Shimmer Glow ✨
      </h1>
    </div>
  );
}



`
},
{

name: "Stylish User Card",
code: `function StylishUserCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-gray-800 p-6">
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="relative w-80 rounded-2xl p-6 bg-white/10 backdrop-blur-xl border border-white/20 
                   shadow-[0_0_25px_rgba(147,51,234,0.3)] hover:shadow-[0_0_45px_rgba(147,51,234,0.6)] 
                   overflow-hidden group cursor-pointer"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-20 group-hover:opacity-40 blur-3xl transition-all duration-500"></div>

        <div className="flex justify-center">
          <motion.img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="User Avatar"
            className="w-28 h-28 rounded-full border-4 border-purple-400 shadow-lg"
            whileHover={{ rotate: 5 }}
          />
        </div>

        <div className="text-center mt-4">
          <h2 className="text-2xl font-bold text-white">Aarav Sharma</h2>
          <p className="text-gray-300 text-sm">Frontend Developer</p>
          <div className="flex justify-center mt-2 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-yellow-400" />
            ))}
          </div>
        </div>

        <div className="flex justify-center gap-4 mt-5">
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-cyan-400 hover:text-cyan-300"
          >
            <Twitter size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-blue-500 hover:text-blue-400"
          >
            <Linkedin size={20} />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            href="#"
            className="text-gray-300 hover:text-white"
          >
            <Github size={20} />
          </motion.a>
        </div>

        <div className="mt-6 h-[1px] bg-gradient-to-r from-transparent via-purple-500 to-transparent opacity-50"></div>

        <p className="mt-3 text-sm text-gray-400 text-center">
          "Designing pixels with passion ✨"
        </p>
      </motion.div>
    </div>
  );
}

render(<StylishUserCard />);`
  },
  {
    name: "Aurora Glass Card",
    code: `const AuroraGlassCard = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-slate-900 to-black overflow-hidden relative">
      <motion.div
        className="absolute inset-0 bg-[conic-gradient(at_top_left,_#8b5cf6,_#ec4899,_#06b6d4,_#8b5cf6)] opacity-30 blur-[120px]"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      <motion.div
        whileHover={{ scale: 1.05, rotateY: 5, rotateX: -3 }}
        transition={{ type: "spring", stiffness: 180, damping: 12 }}
        className="relative z-10 w-[350px] h-[420px] rounded-3xl bg-white/10 backdrop-blur-xl 
                   border border-white/20 shadow-[0_0_30px_rgba(168,85,247,0.3)] overflow-hidden group"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 via-pink-500/30 to-cyan-500/30 opacity-0 group-hover:opacity-100 blur-2xl transition-all duration-700"></div>

        <div className="relative flex justify-center mt-8">
          <motion.img
            src="https://randomuser.me/api/portraits/women/65.jpg"
            alt="User"
            className="w-28 h-28 rounded-full border-4 border-purple-400 shadow-[0_0_25px_rgba(168,85,247,0.8)]"
            whileHover={{ scale: 1.1 }}
          />
        </div>

        <div className="text-center mt-6">
          <h2 className="text-2xl font-bold text-white">Sanya Kapoor</h2>
          <p className="text-gray-300 text-sm">Creative UI Designer</p>
        </div>

        <div className="relative mt-6 flex justify-center">
          <div className="w-2/3 h-[1px] bg-gradient-to-r from-transparent via-pink-500 to-transparent animate-pulse"></div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-5 px-6 leading-relaxed">
          "Design isn't just what it looks like — it's how it feels when it glows."
        </p>

        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-6 py-2 rounded-full font-semibold text-white bg-gradient-to-r 
                       from-purple-500 to-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.6)] 
                       hover:shadow-[0_0_35px_rgba(236,72,153,0.9)] transition-all duration-300"
          >
            Explore ✨
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}`
  },
  {
  name: "StylishSignupCard",
  code: `function StylishSignupCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-violet-900 to-fuchsia-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">

        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 blur-[4px] transition-all duration-500"></div>

        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Create Account ✨</h2>
          <p className="text-gray-300 mt-1">Join us and start building today</p>
        </div>

        {/* Form */}
        <form className="relative z-10 space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-pink-500 to-indigo-600 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Sign Up
          </button>
        </form>

        {/* Footer */}
        <p className="relative z-10 text-center text-sm text-gray-400 mt-5">
          Already have an account?{" "}
          <a href="#" className="text-pink-400 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
}`
},
  {
  name: "FuturisticContactCard",
  code: `function FuturisticContactCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-slate-900 to-purple-950 p-6 overflow-hidden">
      {/* Background Orbs */}
      <motion.div
        className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl top-10 left-10"
        animate={{ y: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>
      <motion.div
        className="absolute w-80 h-80 bg-pink-500/20 rounded-full blur-3xl bottom-10 right-10"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      ></motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group"
      >
        {/* Neon Animated Border */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-fuchsia-500 via-indigo-500 to-cyan-400 opacity-0 group-hover:opacity-100 blur-[3px] transition-all duration-700 animate-pulse"></div>

        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-wide">
            Connect With Us ⚡
          </h2>
          <p className="text-gray-300 mt-2">
            Drop your message and we’ll reach you soon.
          </p>
        </div>

        {/* Form */}
        <form className="relative z-10 space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">Email</label>
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm mb-1 text-gray-300">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Your message..."
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-fuchsia-500 transition resize-none"
            ></textarea>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-fuchsia-500 to-cyan-400 rounded-lg font-semibold shadow-lg hover:shadow-fuchsia-500/40 transition-all"
          >
            Send Message
          </motion.button>
        </form>

        {/* Footer */}
        <p className="relative z-10 text-center text-sm text-gray-400 mt-6">
          Looking for updates?{" "}
          <a href="#" className="text-cyan-400 hover:underline">
            Subscribe Now
          </a>
        </p>
      </motion.div>
    </div>
  );
}`
},
{

name: "FileUploadCard",
code: `
// Import statements are not needed in react-live preview
function FileUploadCard() {
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [uploadProgress, setUploadProgress] = React.useState(0);

  const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (event) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files[0];
    if (file) {
      setSelectedFile(file);
      setUploadProgress(0);
    }
  };

  const handleUpload = () => {
    if (selectedFile) {
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            alert(\`File "\${selectedFile.name}" uploaded successfully!\`);
            setSelectedFile(null);
            setUploadProgress(0);
            return 100;
          }
          return prev + 10;
        });
      }, 200);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-[4px] transition-all duration-500"></div>
        
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Upload File 📁</h2>
          <p className="text-gray-300 mt-1">Drag & drop or select a file to upload securely.</p>
        </div>

        <div className="relative z-10 space-y-4">
          <div
            className={\`w-full px-4 py-10 border-2 border-dashed border-white/30 rounded-lg text-center transition-all duration-300 \${
              isDragging ? "border-teal-500 bg-teal-500/10 scale-105" : "hover:border-white/50"
            }\`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
          >
            <div className="space-y-2">
              {selectedFile ? (
                <div className="space-y-2">
                  <p className="text-teal-400 font-medium">{selectedFile.name}</p>
                  <p className="text-sm text-gray-400">{(selectedFile.size / 1024).toFixed(1)} KB</p>
                </div>
              ) : (
                <>
                  <p className="text-gray-300">Drop your file here, or click to browse</p>
                  <input
                    type="file"
                    onChange={handleFileSelect}
                    className="hidden"
                    id="file-upload"
                    accept="*/*"
                  />
                  <label
                    htmlFor="file-upload"
                    className="inline-block px-4 py-2 bg-white/10 border border-white/20 rounded-lg text-white hover:bg-white/20 cursor-pointer transition"
                  >
                    Choose File
                  </label>
                </>
              )}
            </div>
          </div>

          {selectedFile && (
            <>
              {uploadProgress > 0 && (
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-emerald-500 to-teal-500 h-2 rounded-full transition-all duration-300"
                    style={{ width: \`\${uploadProgress}%\` }}
                  ></div>
                </div>
              )}
              <button
                onClick={handleUpload}
                disabled={uploadProgress > 0 && uploadProgress < 100}
                className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {uploadProgress > 0 ? \`Uploading... \${uploadProgress}%\` : "Upload File"}
              </button>
            </>
          )}
        </div>

        <p className="relative z-10 text-center text-sm text-gray-400 mt-5">
          Need assistance?{" "}
          <a href="#" className="text-teal-400 hover:underline">
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
}

// Render the component directly
render(<FileUploadCard />);
`
},
{

name: "ForgotPasswordCard",
code: `
function ForgotPasswordCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-emerald-900 to-teal-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        
        {/* Animated border glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-[4px] transition-all duration-500"></div>
        
        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Forgot Password? 🔑</h2>
          <p className="text-gray-300 mt-1">Enter your email to reset your password.</p>
        </div>

        {/* Form */}
        <form className="relative z-10 space-y-5">
          <div>
            <label className="block text-sm mb-1 text-gray-300">Email Address</label>
            <input
              type="email"
              placeholder="your.email@example.com"
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Send Reset Link
          </button>
        </form>

        {/* Footer */}
        <p className="relative z-10 text-center text-sm text-gray-400 mt-5">
          Remember your password?{" "}
          <a href="#" className="text-teal-400 hover:underline">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
}
`
},

{

name: "CometCard",
code: `function CometCard() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 p-6">
      <div className="relative w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-8 text-white overflow-hidden group">
        
        {/* Animated comet trail glow */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 opacity-0 group-hover:opacity-100 blur-[4px] transition-all duration-500 animate-comet-trail"></div>
        
        {/* Header */}
        <div className="relative z-10 text-center mb-6">
          <h2 className="text-3xl font-bold tracking-tight">Comet Card 🚀</h2>
          <p className="text-gray-300 mt-1">Discover the wonders of the cosmos.</p>
        </div>

        {/* Content */}
        <div className="relative z-10 space-y-4">
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Halley's Comet</h3>
            <p className="text-sm text-gray-400">Visible every 76 years, next in 2061.</p>
          </div>
          
          <div className="bg-white/5 rounded-lg p-4">
            <h3 className="font-semibold mb-2">Speed</h3>
            <p className="text-sm text-gray-400">Up to 253,000 km/h – faster than a bullet!</p>
          </div>

          <button
            className="w-full py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-lg font-semibold hover:shadow-xl hover:scale-[1.02] transition-all"
          >
            Explore More
          </button>
        </div>

        {/* Footer */}
        <p className="relative z-10 text-center text-sm text-gray-400 mt-5">
          Back to Earth?{" "}
          <a href="#" className="text-indigo-400 hover:underline">
            Home
          </a>
        </p>
      </div>
    </div>
  );
}`
},

];

// Comment out automatic delete/insert to avoid duplicates during dev server restarts
mongoose.connect('mongodb://localhost:27017/ui_components')
  .then(async () => {
    // Run these only when you intentionally want to reseed the DB.
    // await Component.deleteMany({}); // <-- comment out to avoid removing data every run
    // await Component.insertMany(components); // <-- comment out to avoid duplicate inserts
    console.log('Connected to DB. Run seed manually if needed.');
    process.exit(0);
  })
  .catch(err => {
    console.error('Seeding failed:', err);
    process.exit(1);
  });