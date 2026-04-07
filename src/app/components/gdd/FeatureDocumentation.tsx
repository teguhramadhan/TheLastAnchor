import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const features = [
  {
    id: 'fps',
    title: 'FPS CONTROLLER',
    icon: '👤',
    description: 'Physics-based movement yang dioptimasi untuk Unity 6, mendukung traversal vertikal kompleks.',
    details: [
      'Rigidbody-based movement dengan smooth acceleration.',
      'Sistem Grapple Hook & Zipline terintegrasi ke TraversalController.',
      'Custom camera look dengan smoothing untuk meminimalisir motion sickness.'
    ],
    code: 'public class FPSController : MonoBehaviour {\n  [SerializeField] private float speed = 5f;\n  // Physics-based movement logic\n}'
  },
  {
    id: 'inventory',
    title: 'INVENTORY & HOTBAR',
    icon: '🎒',
    description: 'Sistem manajemen item yang modular menggunakan ScriptableObjects untuk skalabilitas asset.',
    details: [
      'Sistem Slot-based dengan dukungan drag-and-drop.',
      'Hotbar auto-binding ke tombol numerik 1-5.',
      'Weight system yang mempengaruhi kecepatan gerak Aris.'
    ],
    code: 'public void AddToInventory(ItemData item, int qty) {\n  // Logic for finding empty slot or stacking\n}'
  },
  {
    id: 'crafting',
    title: 'CRAFTING SYSTEM',
    icon: '🛠️',
    description: 'Mekanik crafting intuitif untuk bertahan hidup di dalam rusun yang terbengkalai.',
    details: [
      'Recipe validation: Mengecek resource di inventory secara real-time.',
      'Sistem antrean crafting dengan durasi variabel.',
      'Integrasi UI yang minimistis agar tetap imersif.'
    ],
    code: 'public bool CanCraft(Recipe recipe) {\n  return inventory.HasIngredients(recipe.ingredients);\n}'
  }
];

export default function FeatureDocumentation() {
  const [activeTab, setActiveTab] = useState(features[0]);

  return (
    <main className="min-h-screen max-w-6xl mx-auto px-6 pb-20">
      {/* Header Section */}
      <section className="mb-16 border-l-4 border-[#90b83a] pl-6 py-2">
        <h1 className="text-5xl font-condensed font-bold tracking-tighter text-[#d4d8cc] uppercase italic">
          System Documentation
        </h1>
        <p className="text-[#90b83a] font-mono text-sm tracking-widest mt-1">
          PROJECT: THE LAST ANCHOR // VERSION 0.1 (MVP)
        </p>
      </section>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        {/* Navigation Sidebar */}
        <nav className="md:col-span-4 flex flex-col gap-3">
          {features.map((f) => (
            <button
              key={f.id}
              onClick={() => setActiveTab(f)}
              className={`p-4 text-left transition-all duration-300 border font-condensed tracking-wide uppercase ${
                activeTab.id === f.id 
                ? 'bg-[#252825] border-[#90b83a] text-[#90b83a] nav-active-glow' 
                : 'bg-transparent border-[#252825] text-slate-500 hover:border-[#90b83a]/50 hover:text-[#d4d8cc]'
              }`}
            >
              <div className="flex items-center justify-between">
                <span>{f.title}</span>
                <span className="text-xs opacity-50">{f.id === activeTab.id ? '●' : '○'}</span>
              </div>
            </button>
          ))}
        </nav>

        {/* Content Panel */}
        <div className="md:col-span-8 bg-[#0e0f0e] border border-[#252825] rounded-sm p-8 relative overflow-hidden">
          {/* Subtle Accent Mark */}
          <div className="absolute top-0 right-0 p-2 text-[10px] font-mono text-[#252825] pointer-events-none">
            DOC_REF_{activeTab.id.toUpperCase()}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl grayscale bg-[#252825] p-3 rounded-md">{activeTab.icon}</span>
                <h2 className="text-3xl font-condensed font-bold text-[#d4d8cc]">{activeTab.title}</h2>
              </div>

              <p className="text-slate-400 leading-relaxed mb-8 border-b border-[#252825] pb-6">
                {activeTab.description}
              </p>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-[#90b83a] font-mono text-xs font-bold uppercase tracking-[0.2em] mb-4 flex items-center">
                    <span className="w-2 h-2 bg-[#90b83a] mr-2 inline-block"></span>
                    Key Implementation
                  </h3>
                  <ul className="space-y-3">
                    {activeTab.details.map((detail, i) => (
                      <li key={i} className="flex gap-3 text-sm text-[#d4d8cc]/80">
                        <span className="text-[#90b83a]">›</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-slate-500 font-mono text-xs uppercase mb-3 italic">Snippet Preview:</h3>
                  <div className="bg-black/80 border border-[#252825] p-4 rounded no-scrollbar overflow-x-auto">
                    <pre className="text-xs font-mono leading-5 text-green-700/90">
                      <code>{activeTab.code}</code>
                    </pre>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}