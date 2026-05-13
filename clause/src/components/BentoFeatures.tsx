import React from 'react';
import { motion } from 'motion/react';
import { 
  Zap, 
  ShieldCheck, 
  BarChart3, 
  Calendar, 
  MessageSquare,
  Lock,
  Target,
  Users
} from 'lucide-react';

const features = [
  {
    title: "AI-Led Negotiation",
    description: "Our agent scans your emails and automatically triggers negotiation flows based on your minimum targets.",
    icon: MessageSquare,
    className: "md:col-span-2",
  },
  {
    title: "Contract Protection",
    description: "Scan any PDF or Doc for red flags that put you at risk.",
    icon: ShieldCheck,
    className: "md:col-span-1",
  },
  {
    title: "Dynamic Pricing Engine",
    description: "Clause analyzes market data to suggest real-time pricing for your services.",
    icon: BarChart3,
    className: "md:col-span-1",
  },
  {
    title: "Smart Scheduling",
    description: "Protect your deep-work hours by letting Clause manage meeting requests.",
    icon: Calendar,
    className: "md:col-span-2",
  },
];

export default function BentoFeatures() {
  return (
    <section className="py-32 px-6 bg-zinc-950/50" id="features">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Built for solo-sovereignty.</h2>
          <p className="text-zinc-400 text-lg">
            Clause isn't just an assistant. It's a comprehensive platform designed to protect your time and maximize your revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className={`glass p-8 rounded-3xl group hover:border-blue-500/50 transition-colors ${feature.className}`}
            >
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center mb-6 group-hover:bg-blue-500/10 transition-colors">
                <feature.icon className="w-6 h-6 text-zinc-400 group-hover:text-blue-500 transition-colors" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-zinc-500 leading-relaxed text-sm md:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
