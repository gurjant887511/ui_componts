import React from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Heart, CPU, BatteryCharging, Camera, Star, Mail } from 'lucide-react'

export default function ElectroX() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-black text-slate-100 font-sans">
      <Header />
      <main>
        <Hero />
        <Highlights />
        <ProductShowcase />
        <Comparison />
        <Reviews />
        <Blog />
        <Newsletter />
      </main>
      <Footer />
    </div>
  )
}

/* ---------------- HEADER ---------------- */
function Header(){
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center shadow-xl">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M3 12h18" stroke="#fff" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </div>
          <div>
            <div className="text-lg font-bold">ElectroX</div>
            <div className="text-xs text-slate-400">Next‑gen gadgets</div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <div className="relative">
            <input className="pl-10 pr-4 py-2 rounded-lg bg-white/5 placeholder:text-slate-400 focus:outline-none text-white" placeholder="Search gadgets, laptops, phones..." />
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-300"><Search size={16}/></div>
          </div>

          <nav className="flex gap-6 text-sm">
            <a href="#products" className="hover:text-indigo-400 cursor-pointer transition">Products</a>
            <a href="#compare" className="hover:text-indigo-400 cursor-pointer transition">Compare</a>
            <a href="#reviews" className="hover:text-indigo-400 cursor-pointer transition">Reviews</a>
            <a href="#blog" className="hover:text-indigo-400 cursor-pointer transition">Blog</a>
          </nav>

          <div className="flex items-center gap-3">
            <button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition cursor-pointer">Sign in</button>
            <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer"><ShoppingCart size={16}/> Cart</button>
          </div>
        </div>

        <div className="md:hidden">
          <button className="px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition cursor-pointer">Menu</button>
        </div>
      </div>
    </header>
  )
}

/* ---------------- HERO ---------------- */
function Hero(){
  return (
    <section className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{opacity:0, x:-20}} animate={{opacity:1, x:0}} transition={{duration:0.6}}>
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight">Electronics reimagined — <span className="text-indigo-400">power</span> meets <span className="text-pink-400">design</span></h1>
          <p className="mt-6 text-lg text-slate-300 max-w-xl">Browse curated flagship gadgets, in-depth reviews, and comparison tools to choose the best tech. From gaming rigs to pocket cameras — we cover it all.</p>

          <div className="mt-8 flex gap-4">
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-pink-500 font-semibold shadow-lg hover:scale-105 transition-transform cursor-pointer">Shop Now <ShoppingCart size={16}/></button>
            <button className="inline-flex items-center gap-3 px-6 py-3 rounded-xl border border-white/10 hover:bg-white/5 transition-colors cursor-pointer">Read Reviews</button>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3 max-w-sm">
            <Stat label="50+" sub="Brands"/>
            <Stat label="1200+" sub="Products"/>
            <Stat label="10k+" sub="Reviews"/>
          </div>
        </motion.div>

        <motion.div initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} transition={{duration:0.6}} className="relative">
          <div className="rounded-3xl p-6 bg-gradient-to-br from-white/5 to-white/3 border border-white/6 shadow-2xl">
            <div className="grid grid-cols-2 gap-4">
              <ProductCard compact title="Zenith X1" price="₹139,999" tags={["Gaming","RTX"]} />
              <ProductCard compact title="LumaPhone Pro" price="₹79,999" tags={["Camera","5G"]} />
              <ProductCard compact title="UltraBook S" price="₹59,999" tags={["Light","Battery"]} />
              <ProductCard compact title="AeroPods" price="₹6,999" tags={["Audio","TrueWireless"]} />
            </div>
          </div>

          <div className="absolute -right-12 top-12 hidden lg:block">
            <div className="w-80 h-48 rounded-2xl bg-gradient-to-br from-indigo-600 to-pink-500 shadow-2xl transform rotate-6" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function Stat({label, sub}){
  return (
    <div className="p-3 bg-white/3 rounded-lg text-center">
      <div className="text-2xl font-semibold">{label}</div>
      <div className="text-xs text-slate-300">{sub}</div>
    </div>
  )
}

/* ---------------- HIGHLIGHTS ---------------- */
function Highlights(){
  const items = [
    {icon:<CPU size={20}/>, title:'High Performance', desc:'Top-tier CPUs & GPUs'},
    {icon:<BatteryCharging size={20}/>, title:'Long Battery Life', desc:'Portable powerhouses'},
    {icon:<Camera size={20}/>, title:'Pro Cameras', desc:'Studio-grade imaging'},
  ]

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx)=>(
            <motion.div key={idx} whileHover={{y:-6}} className="p-6 bg-gradient-to-br from-white/3 to-white/5 rounded-2xl border border-white/6">
              <div className="p-3 rounded-lg bg-white/5 w-fit mb-4">{it.icon}</div>
              <h3 className="text-xl font-semibold">{it.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- PRODUCT SHOWCASE ---------------- */
function ProductShowcase(){
  const products = [
    {name:'Zenith X1', price:'₹139,999', badge:'Bestseller', descr:'Flagship gaming laptop with RTX 40 series.'},
    {name:'LumaPhone Pro', price:'₹79,999', badge:'Camera King', descr:'50MP tri-lens mobile with ProRAW.'},
    {name:'UltraBook S', price:'₹59,999', badge:'Lightweight', descr:'Thin & light with 18hr battery.'},
    {name:'AeroPods', price:'₹6,999', badge:'Value', descr:'Noise-cancelling true wireless.'},
    {name:'Pulse Watch', price:'₹12,499', badge:'Fitness', descr:'Health-first smartwatch.'},
    {name:'PixelCam G2', price:'₹24,999', badge:'Compact', descr:'Pocketable action camera.'},
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold">Featured Products</h2>
          <a href="#products" className="text-sm text-indigo-400 hover:text-indigo-300 cursor-pointer transition">View all products</a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p, i)=> (
            <motion.div key={i} whileHover={{scale:1.03}} className="p-6 bg-gradient-to-br from-white/4 to-white/6 rounded-2xl border border-white/6">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm text-slate-400">{p.badge}</div>
                  <h3 className="text-xl font-semibold mt-2">{p.name}</h3>
                  <p className="text-slate-300 mt-2 text-sm">{p.descr}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold">{p.price}</div>
                  <div className="mt-4 flex gap-2">
                    <button className="px-3 py-2 rounded-lg bg-white/6 hover:bg-white/10 transition cursor-pointer">Details</button>
                    <button className="px-3 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 hover:scale-105 transition-transform cursor-pointer">Buy</button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductCard({compact, title, price, tags}){
  return (
    <div className={compact? 'p-3 bg-white/5 rounded-xl' : 'p-6 bg-white/5 rounded-2xl'}>
      <div className="text-sm text-slate-300">{tags?.join(' • ')}</div>
      <div className="text-lg font-semibold mt-2">{title}</div>
      <div className="text-sm text-slate-200 mt-1">{price}</div>
    </div>
  )
}

/* ---------------- COMPARISON ---------------- */
function Comparison(){
  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">Compare Top Models</h2>
        <div className="overflow-x-auto rounded-2xl">
          <table className="min-w-full table-auto border-collapse">
            <thead>
              <tr className="text-left text-slate-400">
                <th className="p-4">Model</th>
                <th className="p-4">CPU</th>
                <th className="p-4">GPU</th>
                <th className="p-4">Battery</th>
                <th className="p-4">Price</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-white/6">
                <td className="p-4">Zenith X1</td>
                <td className="p-4">i9 / R7</td>
                <td className="p-4">RTX 4090</td>
                <td className="p-4">6 hrs</td>
                <td className="p-4">₹139,999</td>
              </tr>
              <tr className="border-t border-white/6 bg-white/2">
                <td className="p-4">UltraBook S</td>
                <td className="p-4">i7</td>
                <td className="p-4">Iris Xe</td>
                <td className="p-4">18 hrs</td>
                <td className="p-4">₹59,999</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

/* ---------------- REVIEWS ---------------- */
function Reviews(){
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">User Reviews</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[1,2,3].map(i=> (
            <motion.div key={i} whileHover={{y:-6}} className="p-6 bg-gradient-to-br from-white/4 to-white/6 rounded-2xl border border-white/6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-white/6" />
                <div>
                  <div className="font-semibold">User {i}</div>
                  <div className="text-slate-400 text-sm">Verified buyer</div>
                </div>
              </div>
              <p className="mt-4 text-slate-300 italic">"Amazing performance and build quality. Love the display and battery life."</p>
              <div className="mt-4 flex items-center gap-2 text-yellow-400"><Star size={16}/> <Star size={16}/> <Star size={16}/> <Star size={16}/> <Star size={16}/></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- BLOG ---------------- */
function Blog(){
  const posts = [
    {title:'Top 5 Cameras for Vlogging in 2025', excerpt:'Lightweight picks with professional output.'},
    {title:'How to choose a gaming laptop', excerpt:'Battery, thermals, and GPU — what matters.'},
    {title:'Smartwatch buying guide', excerpt:'Sensors, battery, and 3rd party apps.'},
  ]

  return (
    <section className="py-20 bg-gradient-to-b from-black/0 to-white/2">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6">From the Blog</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p,i)=> (
            <article key={i} className="p-6 bg-white/5 rounded-2xl border border-white/6 hover:bg-white/7 transition cursor-pointer">
              <h3 className="text-xl font-semibold">{p.title}</h3>
              <p className="text-slate-300 mt-2 text-sm">{p.excerpt}</p>
              <a href="#blog" className="mt-4 inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 transition cursor-pointer">Read more</a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------- NEWSLETTER ---------------- */
function Newsletter(){
  return (
    <section className="py-16 bg-indigo-900 rounded-t-3xl mt-8">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-2xl font-bold">Get exclusive deals & reviews</h2>
        <p className="text-slate-200 mt-2">Subscribe to our newsletter for weekly tech roundups.</p>

        <div className="mt-6 flex justify-center gap-3">
          <input placeholder="Your email" className="px-4 py-3 rounded-l-xl w-80 text-slate-900 placeholder:text-slate-600 focus:outline-none" />
          <button className="px-6 py-3 rounded-r-xl bg-gradient-to-r from-indigo-500 to-pink-500 flex items-center gap-2 hover:scale-105 transition-transform cursor-pointer">Subscribe <Mail size={16}/></button>
        </div>
      </div>
    </section>
  )
}

/* ---------------- FOOTER ---------------- */
function Footer(){
  return (
    <footer className="bg-black/80 text-slate-300 py-8 mt-12 border-t border-white/6">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-6">
        <div>
          <div className="text-lg font-bold">ElectroX</div>
          <div className="text-sm text-slate-400">Premium electronics reviews & store</div>
        </div>

        <div>
          <div className="font-semibold mb-2">Quick links</div>
          <div className="flex flex-col gap-2 text-sm text-slate-400">
            <a href="#products" className="hover:text-slate-200 transition cursor-pointer">Products</a>
            <a href="#compare" className="hover:text-slate-200 transition cursor-pointer">Compare</a>
            <a href="#blog" className="hover:text-slate-200 transition cursor-pointer">Blog</a>
            <a href="#contact" className="hover:text-slate-200 transition cursor-pointer">Contact</a>
          </div>
        </div>

        <div>
          <div className="font-semibold mb-2">Contact</div>
          <div className="text-sm text-slate-400">hello@electrox.example</div>
          <div className="text-sm text-slate-400 mt-2">© {new Date().getFullYear()} ElectroX — All rights reserved</div>
        </div>
      </div>
    </footer>
  )
}
