import React from 'react'
import { motion } from 'framer-motion'
import { Rocket, Layers, Shield, Users, ArrowRight, MapPin } from 'lucide-react'

export default function RaiboWebsite() {
  return (
    <div className="min-h-screen bg-slate-900 text-white antialiased">
      <Header />
      <Hero />
      <Features />
      <Services />
      <About />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  )
}

/* ---------------- HEADER ---------------- */
function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-slate-800/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">Raiboy Web</h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a className="hover:text-purple-400 cursor-pointer">Home</a>
          <a className="hover:text-purple-400 cursor-pointer">Features</a>
          <a className="hover:text-purple-400 cursor-pointer">Services</a>
          <a className="hover:text-purple-400 cursor-pointer">About</a>
          <a className="hover:text-purple-400 cursor-pointer">Team</a>
          <a className="hover:text-purple-400 cursor-pointer">Contact</a>
        </nav>

        <button className="md:hidden px-3 py-2 bg-white/10 rounded-lg">Menu</button>
      </div>
    </header>
  )
}

/* ---------------- HERO SECTION ---------------- */
function Hero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}}>
          <h2 className="text-5xl font-extrabold leading-tight">
            Build Stunning Modern Websites with <span className="text-purple-400">React</span>
          </h2>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">
            Fully responsive, clean UI, fast performance, and smooth animations — everything bundled in one professional template.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-6 py-3 bg-purple-500 font-semibold rounded-xl shadow hover:bg-purple-600 flex items-center gap-3">Get Started <ArrowRight size={18}/></button>
            <button className="px-6 py-3 border border-white/20 rounded-xl">Learn More</button>
          </div>
        </motion.div>

        <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} className="bg-slate-800/50 rounded-3xl p-6 shadow-xl border border-white/10">
          <div className="h-64 rounded-xl bg-gradient-to-br from-purple-600 to-pink-500" />
        </motion.div>
      </div>
    </section>
  )
}

/* ---------------- FEATURES SECTION ---------------- */
function Features() {
  const items = [
    {icon:<Rocket size={24}/>, title:"Fast Performance", desc:"Optimized components and blazing loading speed."},
    {icon:<Layers size={24}/>, title:"Clean UI", desc:"Structured layouts designed for modern websites."},
    {icon:<Shield size={24}/>, title:"Secure", desc:"Protected and reliable architecture for your data."},
    {icon:<Users size={24}/>, title:"User Friendly", desc:"Great user experience across all devices."},
  ]

  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Features</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {items.map((item, i) => (
            <motion.div key={i} whileHover={{y:-5}} className="p-6 bg-slate-800 rounded-2xl border border-white/10 shadow-lg">
              <div className="p-3 bg-white/10 rounded-xl w-fit mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- SERVICES SECTION ---------------- */
function Services() {
  const data = [
    {title:"Web Development", desc:"High‑quality responsive sites with React."},
    {title:"UI/UX Design", desc:"Modern layouts with clean aesthetics."},
    {title:"SEO Optimization", desc:"Rank faster with performance‑friendly structure."},
    {title:"Custom Dashboards", desc:"Fast & stylish admin panels for business."},
  ]

  return (
    <section className="py-24 bg-slate-800/40 border-t border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>

        <div className="grid md:grid-cols-4 gap-8">
          {data.map((s, i)=>(
            <motion.div key={i} whileHover={{scale:1.05}} className="p-6 bg-slate-800 rounded-2xl border border-white/10">
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- ABOUT SECTION ---------------- */
function About() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold mb-6">About Our Company</h2>
          <p className="text-slate-300 text-lg">
            We create beautiful, professional, and scalable websites. Our mission is to deliver top‑class UI, high performance, and future‑ready development solutions.
          </p>
        </div>

        <div className="h-64 bg-gradient-to-br from-purple-500 to-indigo-600 rounded-3xl shadow-xl" />
      </div>
    </section>
  )
}

/* ---------------- TEAM SECTION ---------------- */
function Team() {
  const team = [
    {name:"Aman", role:"Frontend Dev"},
    {name:"Sahil", role:"UI/UX Designer"},
    {name:"Komal", role:"SEO Expert"},
  ]

  return (
    <section className="py-24 bg-slate-800/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Meet The Team</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((t, i)=>(
            <div key={i} className="p-6 bg-slate-800 border border-white/10 rounded-2xl text-center">
              <div className="h-32 w-32 mx-auto rounded-full bg-white/10 mb-4" />
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="text-slate-300 text-sm">{t.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- TESTIMONIALS SECTION ---------------- */
function Testimonials() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-12">What People Say</h2>

        <div className="max-w-3xl mx-auto p-8 bg-slate-800 rounded-3xl border border-white/10 shadow-lg">
          <p className="text-slate-300 text-lg italic">
            "This is the cleanest, fastest, and most modern React website template I've ever used. Highly recommended!"
          </p>
          <h3 className="text-xl font-semibold mt-4">— Raiboy Clients</h3>
        </div>
      </div>
    </section>
  )
}

/* ---------------- CONTACT SECTION ---------------- */
function Contact() {
  return (
    <section className="py-24 bg-slate-800/40 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Us</h2>
        <p className="text-slate-300 max-w-2xl mx-auto text-lg">
          Have a project in mind? Let's work together!
        </p>

        <div className="mt-8 flex justify-center">
          <div className="bg-slate-800 p-6 rounded-2xl border border-white/10 w-full max-w-xl text-left">
            <p className="flex items-center gap-2"><MapPin size={18}/> Punjab, India</p>
            <p className="mt-2">Email: support@raiboy.com</p>
            <p>Phone: +91 98765 43210</p>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="py-8 border-t border-white/10 bg-slate-900 text-center">
      <p className="text-slate-400 text-sm">© {new Date().getFullYear()} Raiboy Web — All Rights Reserved.</p>
    </footer>
  )
}
