import React from "react";
import { motion } from "framer-motion";

export default function AllInOneShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white p-10">
      <motion.h1
        className="text-4xl font-bold mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}>
        All-in-One React Component Showcase
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Card */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Card + Button + Alert</h2>
            <div className="bg-orange-500/20 border border-orange-500/50 rounded-lg p-4 mb-4">
              <h3 className="font-bold">Heads up!</h3>
              <p className="text-sm">This is an alert inside the card.</p>
            </div>
            <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition">Click Me</button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Tabs + Input</h2>
            <div className="space-y-4">
              <div className="flex gap-2 mb-4">
                <button className="flex-1 px-4 py-2 bg-blue-600 rounded-lg text-sm font-medium">Account</button>
                <button className="flex-1 px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg text-sm font-medium transition">Settings</button>
              </div>
              <input placeholder="Enter your name" className="w-full px-4 py-2 bg-white/5 border border-white/20 rounded-lg text-white placeholder-gray-400" />
            </div>
          </div>
        </div>

        {/* Accordion */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Accordion</h2>
            <div className="space-y-2">
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 text-left font-medium transition flex justify-between items-center">
                  What is this?
                  <span>+</span>
                </button>
                <div className="px-4 py-3 bg-white/5 text-sm">
                  This is a fully imported component demo.
                </div>
              </div>
              <div className="border border-white/20 rounded-lg overflow-hidden">
                <button className="w-full px-4 py-3 bg-white/5 hover:bg-white/10 text-left font-medium transition flex justify-between items-center">
                  How to use?
                  <span>+</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Avatars, Badges, Progress */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Avatars + Badges + Progress</h2>

            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-sm font-bold">SH</div>
              <span className="px-3 py-1 bg-purple-600 rounded-full text-sm">Pro User</span>
            </div>

            <div className="w-full bg-white/10 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '70%'}}></div>
            </div>
            <p className="mt-2 text-sm opacity-80">Profile Completion: 70%</p>
          </div>
        </div>

        {/* Switch + Loading Icon */}
        <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg md:col-span-2">
          <div className="p-6">
            <h2 className="text-xl font-bold mb-4">Switch + Loader</h2>

            <div className="flex items-center gap-4">
              <button className="relative inline-flex h-6 w-11 items-center rounded-full bg-white/10 border border-white/20">
                <span className="inline-block h-4 w-4 transform rounded-full bg-white transition"></span>
              </button>
              <span className="text-2xl">⏳</span>
            </div>

            <div className="my-4 border-t border-white/20"></div>
            <p className="text-sm opacity-80">All UI components working together!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
