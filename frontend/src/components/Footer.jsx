import React from "react";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h4 className="text-xl font-semibold">UI Components</h4>
          <p className="mt-2 text-sm text-slate-400 max-w-sm">
            Stylish reusable UI building blocks — hero sections, footers, cards and more.
          </p>
        </div>

        <div className="flex flex-col">
          <h5 className="font-medium">Quick links</h5>
          <nav className="mt-3 space-y-2 text-sm text-slate-400">
            <a className="block hover:text-white" href="#components">Components</a>
            <a className="block hover:text-white" href="#docs">Docs</a>
            <a className="block hover:text-white" href="#contact">Contact</a>
          </nav>
        </div>

        <div>
          <h5 className="font-medium">Stay up to date</h5>
          <div className="mt-3 flex gap-2">
            <input className="px-3 py-2 rounded-l bg-slate-800 border border-slate-700 text-sm" placeholder="Email" />
            <button className="px-4 py-2 rounded-r bg-indigo-600 text-white text-sm">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} UI Components — Crafted with ❤️
      </div>
    </footer>
  );
}