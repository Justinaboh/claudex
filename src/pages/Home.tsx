import React from 'react';
import Hero from '../components/Hero';
import BentoFeatures from '../components/BentoFeatures';
import WaitlistSection from '../components/WaitlistSection';
import { motion } from 'motion/react';
import { Check, Shield, Zap, TrendingUp } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-black">
      <Hero />
      
      {/* Logo Cloud / Trust */}
      <section className="py-20 border-y border-white/5 bg-zinc-950/30">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-zinc-600 font-mono text-[10px] uppercase tracking-[0.2em] mb-12">
            Automating deal architecture for professionals at
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-40 grayscale group hover:grayscale-0 transition-all duration-700">
             <span className="text-2xl font-display font-bold tracking-tighter">LINEAR</span>
             <span className="text-2xl font-display font-bold tracking-tighter">RAYCAST</span>
             <span className="text-2xl font-display font-bold tracking-tighter">STRIPE</span>
             <span className="text-2xl font-display font-bold tracking-tighter">VERCEL</span>
             <span className="text-2xl font-display font-bold tracking-tighter">NOTION</span>
          </div>
        </div>
      </section>

      <BentoFeatures />

      {/* Social Proof / Stats */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
                <p className="text-5xl font-display font-bold mb-2">24%</p>
                <p className="text-zinc-500">Avg. Revenue Increase</p>
            </div>
            <div className="text-center">
                <p className="text-5xl font-display font-bold mb-2">$2.4M</p>
                <p className="text-zinc-500">Value Protected in Contracts</p>
            </div>
            <div className="text-center">
                <p className="text-5xl font-display font-bold mb-2">15k+</p>
                <p className="text-zinc-500">Hours Reclaimed from Admin</p>
            </div>
        </div>
      </section>

      {/* Pricing / Value Prop */}
      <section className="py-32 bg-zinc-950/20" id="pricing">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Simple, merit-based pricing.</h2>
            <p className="text-zinc-500 max-w-xl mx-auto">
              No hidden fees. We only win when you grow.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="glass p-10 rounded-[2.5rem] border-white/5 space-y-8">
              <div>
                <h3 className="text-2xl font-bold">Standard</h3>
                <p className="text-zinc-500 text-sm mt-2">Perfect for single solo-professional</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$49</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Unlimited Negotiation Simulations",
                  "Max 5 Active Agent Flows",
                  "Contract Scanning (10/mo)",
                  "Core CRM Integrations"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full border border-white/10 hover:bg-white/5 transition-all font-bold">
                Get Started
              </button>
            </div>

            <div className="glass p-10 rounded-[2.5rem] border-blue-500/30 relative overflow-hidden space-y-8 bg-blue-500/5">
              <div className="absolute top-0 right-0 px-4 py-1 bg-blue-500 text-white text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                Most Popular
              </div>
              <div>
                <h3 className="text-2xl font-bold">Pro Agent</h3>
                <p className="text-zinc-500 text-sm mt-2">For high-volume consultants</p>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-zinc-500">/mo</span>
              </div>
              <ul className="space-y-4">
                {[
                  "Everything in Standard",
                  "Unlimited Agent Flows",
                  "Advanced Contract Vault",
                  "Priority AI Strategy Calls",
                  "White-label Agent"
                ].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-zinc-400">
                    <Check className="w-4 h-4 text-blue-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 rounded-full bg-white text-black hover:bg-zinc-200 transition-all font-bold">
                Join Waitlist
              </button>
            </div>
          </div>
        </div>
      </section>

      <WaitlistSection />
    </div>
  );
}
