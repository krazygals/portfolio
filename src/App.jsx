// Starter: Y2K + Modern Portfolio Template (React + Vite + Tailwind)

import React from "react";
import { motion } from "framer-motion";
import "./index.css";

export default function App() {
  return (
    <div className="bg-gradient-to-br from-pink-200 via-purple-300 to-blue-200 min-h-screen font-y2k text-gray-900">
      <header className="p-8 text-center border-b border-purple-400">
        <h1 className="text-4xl md:text-6xl font-bold glitter">Oriana Olmstead</h1>
        <p className="text-sm md:text-lg mt-2 italic">✨ data analyst • ai girlie • y2k revival ✨</p>
      </header>

      <main className="max-w-4xl mx-auto p-6 space-y-16">
        {/* About Section */}
        <section id="about">
          <h2 className="text-2xl font-bold border-l-4 border-purple-400 pl-2 mb-4">About Me</h2>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
            <p className="bg-white bg-opacity-70 p-4 rounded shadow-md text-sm md:text-base">
              I’m a data analyst with a love for AI, funky fonts, festival culture, and reimagining 2000s aesthetics for today’s web.
              I make tools, not just websites.
            </p>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects">
          <h2 className="text-2xl font-bold border-l-4 border-purple-400 pl-2 mb-4">Top 8 Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Example project */}
            <motion.div whileHover={{ scale: 1.05 }} className="bg-white rounded shadow-md p-4 border-l-4 border-blue-400">
              <h3 className="text-xl font-semibold">Xcellent</h3>
              <p className="text-sm">AI-powered Excel-to-SQL mapping app.</p>
              <a href="https://xcellentupload.com" target="_blank" rel="noopener noreferrer" className="text-blue-600 underline text-sm">Live Demo</a>
            </motion.div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2 className="text-2xl font-bold border-l-4 border-purple-400 pl-2 mb-4">Guestbook</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Your name" className="w-full p-2 rounded border border-gray-300" />
            <textarea placeholder="Say hi ✨" className="w-full p-2 rounded border border-gray-300"></textarea>
            <button type="submit" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600">Sign</button>
          </form>
        </section>
      </main>

      <footer className="text-center text-xs py-4 border-t border-purple-400">
        made with 💖 by ori &nbsp;|&nbsp; <a href="https://github.com/krazygals" className="underline">@krazygals</a>
      </footer>
    </div>
  );
}
