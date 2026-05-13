import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 hover:bg-white/10 transition-colors cursor-default"
        >
          <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-blue-500 text-white">New</span>
          <span className="text-sm text-zinc-300">Clause v1.0 is now in private beta</span>
          <ChevronRight className="w-4 h-4 text-zinc-500" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight text-gradient mb-8 leading-[1.1]"
        >
          Your AI Deal Strategist. <br className="hidden md:block" />
          <span className="text-white">Elite negotiation on demand.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          The operating system for self-employed professionals. Connect your email and let Clause manage your pricing, contracts, and scheduling with the precision of a top-tier agent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button className="w-full sm:w-auto bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Get early access
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg border border-white/10 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <Play className="w-4 h-4 fill-white" />
            Watch the agent work
          </button>
        </motion.div>

        {/* Hero Visual - A subtle dashboard peek */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-24 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 h-full w-full" />
          <div className="rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-2 overflow-hidden shadow-2xl mx-auto max-w-5xl">
            <div className="rounded-xl overflow-hidden border border-white/5 bg-black">
              <div className="h-8 border-b border-white/5 bg-zinc-900/50 flex items-center px-4 gap-2">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                  <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
                </div>
                <div className="mx-auto w-32 h-3 bg-zinc-800 rounded-full" />
              </div>
              <div className="p-8 aspect-[16/9] flex items-center justify-center">
                 <div className="flex flex-col items-center gap-6">
                    <div className="w-24 h-24 rounded-full bg-blue-500/20 border border-blue-500/50 flex items-center justify-center animate-pulse">
                        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.6)]">
                            <Shield className="w-6 h-6 text-white" />
                        </div>
                    </div>
                    <div className="space-y-2 text-center">
                        <p className="text-zinc-500 font-mono text-sm">AGENT STATUS: ACTIVE</p>
                        <p className="font-display font-medium text-2xl">Negotiating: $12k Project Contract</p>
                        <div className="flex gap-3 justify-center">
                           <div className="px-3 py-1 bg-zinc-900 rounded-md border border-white/10 text-xs font-mono text-blue-400">COUNTER: $14.5k</div>
                           <div className="px-3 py-1 bg-zinc-900 rounded-md border border-white/10 text-xs font-mono text-zinc-500">CLIENT: REVIEWING</div>
                        </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Inline helper for Shield so I don't import it again
function Shield(props: any) {
  return (
    <svg 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      {...props}
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}
