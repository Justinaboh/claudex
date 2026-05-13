import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, CheckCircle2 } from 'lucide-react';

export default function WaitlistSection() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // Mock submission
    }
  };

  return (
    <section className="py-32 px-6" id="waitlist">
      <div className="max-w-4xl mx-auto glass rounded-[2.5rem] p-12 text-center relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/5 blur-[80px] pointer-events-none" />
        
        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Upgrade your operating system.</h2>
          <p className="text-zinc-400 text-lg mb-12 max-w-xl mx-auto leading-relaxed">
            Join 2,500+ professionals who trust Clause to handle their high-stakes business architecture.
          </p>

          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your work email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-grow bg-white/5 border border-white/10 rounded-full px-6 py-4 outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit"
                className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-200 transition-all flex items-center justify-center gap-2 group"
              >
                Join Waitlist
                <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          ) : (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-4"
            >
              <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20">
                <CheckCircle2 className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <p className="text-xl font-bold">You're on the list!</p>
                <p className="text-zinc-500">We'll touch base when your agent is ready.</p>
              </div>
            </motion.div>
          )}
          
          <p className="mt-8 text-xs text-zinc-600">
            No spam. No fluff. Just elite agency. <br />
            Securely encrypted by Bank-grade standards.
          </p>
        </div>
      </div>
    </section>
  );
}
