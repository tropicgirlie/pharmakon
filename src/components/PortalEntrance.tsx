"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Leaf, ArrowRight, Sparkles, Trees, Globe, BookOpen } from "lucide-react";
import { getStats } from "@/lib/plant-data";

export default function PortalEntrance() {
  const [showContent, setShowContent] = useState(false);
  const stats = getStats();

  useEffect(() => {
    const t = setTimeout(() => setShowContent(true), 400);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-[calc(100vh-60px)] overflow-hidden">
      <div className="absolute inset-0 portal-mist" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#faf7f0] via-transparent to-[#faf7f0]" />
      <FloatingLeaves />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-60px)] px-6 py-16">
        <AnimatePresence>
          {showContent && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-3xl"
            >
              <motion.div
                className="mx-auto mb-8 relative w-48 h-48"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-[#87a878]/30 animate-pulse-glow" />
                <div className="absolute inset-4 rounded-full border border-[#a8c686]/40" />
                <div className="absolute inset-8 rounded-full bg-gradient-to-br from-[#a8c686]/20 to-[#87a878]/30 flex items-center justify-center">
                  <Trees className="h-16 w-16 text-[#1a3c1a]" />
                </div>
                {[0, 1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4"
                    style={{ top: "50%", left: "50%" }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 12 + i * 3, repeat: Infinity, ease: "linear" }}
                  >
                    <div
                      className="absolute"
                      style={{ transform: `rotate(${i * 90}deg) translateX(90px)` }}
                    >
                      <Leaf className="h-4 w-4 text-[#6b8e23]" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold text-[#1a3c1a] mb-4"
                style={{ fontFamily: "var(--font-serif), serif" }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Pharmakon
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-[#4a6741] mb-2"
                style={{ fontFamily: "var(--font-serif), serif", fontStyle: "italic" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                Enter the Garden Portal
              </motion.p>

              <motion.p
                className="text-base md:text-lg text-[#6b4423] max-w-xl mx-auto mb-10 leading-relaxed"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                Explore the world's medicinal plants through the wisdom of indigenous healers.
                Journey across continents, discover ancient practices, and trace the connections
                between people, plants, and knowledge.
              </motion.p>

              <motion.div
                className="flex flex-wrap justify-center gap-6 mb-12"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.5 }}
              >
                <StatItem icon={<Globe className="h-4 w-4" />} value={stats.totalCountries} label="Countries" />
                <StatItem icon={<Leaf className="h-4 w-4" />} value={stats.totalPlants} label="Plants" />
                <StatItem icon={<BookOpen className="h-4 w-4" />} value={stats.totalKnowledgeEntries} label="Knowledge Entries" />
                <StatItem icon={<Sparkles className="h-4 w-4" />} value={stats.totalCommunities} label="Communities" />
              </motion.div>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.5 }}
              >
                <Link
                  href="/countries"
                  className="group inline-flex items-center gap-2 rounded-xl bg-[#1a3c1a] px-8 py-4 text-white font-medium hover:bg-[#1a3c1a]-light transition-all hover:scale-105 shadow-lg shadow-[#1a3c1a]/20"
                >
                  <BookOpen className="h-5 w-5" />
                  Browse Country Shelves
                  <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/explore"
                  className="group inline-flex items-center gap-2 rounded-xl border-2 border-[#4a6741] px-8 py-4 text-[#1a3c1a] font-medium hover:bg-[#e8e4d9] transition-all"
                >
                  <Sparkles className="h-5 w-5" />
                  Explore the Collection
                </Link>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 opacity-30"
        style={{
          background: "repeating-linear-gradient(90deg, var(--color-leaf), var(--color-leaf) 2px, transparent 2px, transparent 40px)",
          maskImage: "linear-gradient(to top, black, transparent)",
          WebkitMaskImage: "linear-gradient(to top, black, transparent)",
        }}
      />
    </div>
  );
}

function StatItem({ icon, value, label }: { icon: React.ReactNode; value: number; label: string }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#e8e4d9] border border-[#87a878]/20">
      <span className="text-[#4a6741]">{icon}</span>
      <span className="font-bold text-[#1a3c1a]">{value}</span>
      <span className="text-sm text-[#6b4423]">{label}</span>
    </div>
  );
}

function FloatingLeaves() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const leaves = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    delay: Math.random() * 6,
    duration: 6 + Math.random() * 4,
    size: 12 + Math.random() * 16,
  }));

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute"
          style={{ left: `${leaf.x}%`, top: "110%" }}
          animate={{
            y: [0, -900],
            x: [0, Math.sin(leaf.id) * 60, Math.cos(leaf.id) * -40, 0],
            rotate: [0, 180, -90, 360],
            opacity: [0, 0.6, 0.4, 0],
          }}
          transition={{
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Leaf
            className="text-[#87a878]"
            style={{ width: leaf.size, height: leaf.size }}
          />
        </motion.div>
      ))}
    </div>
  );
}
