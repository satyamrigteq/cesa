"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Heart,
  ArrowRight,
  Palette,
  Globe2,
  ShieldCheck,
  LogOut,
  Menu,
  X
} from "lucide-react";

const HERO_IMG = "/assets/images/hd_abstract_art_1.png";
const DARK_IMG = "/assets/images/hd_abstract_art_2.png";
const LOGO = "/assets/images/cesa_multicolor_logo.png";
const SAMPLE_1 = "/assets/images/sample_artwork_1.png";
const SAMPLE_2 = "/assets/images/sample_artwork_2.png";

export default function Home() {
  const [navScrolled, setNavScrolled] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setNavScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden selection:bg-primary/30 selection:text-primary">
      {/* Dynamic Background Element */}
      <div className="fixed top-0 -z-10 h-screen w-screen bg-gradient-to-br from-indigo-50/50 via-white to-orange-50/50 dark:from-slate-900 dark:via-[#020617] dark:to-indigo-900/20" />

      {/* Navigation */}
      <header
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${navScrolled
          ? "bg-white/70 dark:bg-slate-950/70 backdrop-blur-xl border-b border-border shadow-sm py-3"
          : "bg-transparent py-5"
          }`}
      >
        <div className="container mx-auto px-6 max-w-7xl flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 cursor-pointer"
          >
            <div className="relative w-12 h-12 overflow-hidden rounded-xl bg-white/20 p-1 flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-sm">
              <Image src={LOGO} alt="CESA Logo" width={60} height={60} className="object-cover" />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-xl leading-none tracking-tight gradient-text">CESA</span>
              <span className="text-[10px] font-medium text-muted-foreground uppercase tracking-widest">Support Arts</span>
            </div>
          </motion.div>

          {/* Desktop Nav */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="hidden md:flex items-center gap-8 font-medium text-sm"
          >
            <Link href="/about" className="text-secondary-foreground hover:text-primary transition-colors">About Us</Link>
            <Link href="/artists" className="text-secondary-foreground hover:text-primary transition-colors">Top Artists</Link>
            <Link href="/#artworks" className="text-secondary-foreground hover:text-primary transition-colors">Gallery</Link>
            <div className="flex items-center gap-4 ml-4">
              <Link href="/login" className="text-sm font-semibold text-secondary-foreground hover:text-primary transition-colors px-4 py-2">
                Login
              </Link>
              <Link href="/signup" className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-full font-semibold shadow-xl shadow-primary/20 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
                Sign Up <ArrowRight size={16} />
              </Link>
            </div>
          </motion.nav>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)} className="text-foreground p-2">
              {mobileMenu ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenu && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden glass-panel rounded-2xl p-6 flex flex-col gap-6 shadow-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-2xl border border-white/20"
          >
            <Link href="/about" onClick={() => setMobileMenu(false)} className="text-lg font-semibold border-b border-border pb-3">About Us</Link>
            <Link href="/artists" onClick={() => setMobileMenu(false)} className="text-lg font-semibold border-b border-border pb-3">Top Artists</Link>
            <Link href="/#artworks" onClick={() => setMobileMenu(false)} className="text-lg font-semibold border-b border-border pb-3">Gallery</Link>
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/login" className="w-full text-center py-3 rounded-xl border border-border font-semibold">Login</Link>
              <Link href="/signup" className="w-full text-center py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/30">Sign Up to Support</Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 flex flex-col z-10"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-500/10 text-accent dark:text-orange-400 font-medium text-sm w-max mb-8 border border-orange-200 dark:border-orange-500/20">
              <Heart size={16} fill="currentColor" />
              <span>Support a Child’s Future Today</span>
            </div>

            <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] tracking-tight text-foreground mb-6">
              Empower Dreams <br />
              <span className="gradient-text">Through Creative Arts</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-lg">
              Purchase beautiful digital artwork created by children at Little King’s and Queen’s House. Your support directly funds their education, food, and shelter.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link href="/#artworks" className="bg-foreground hover:bg-foreground/90 text-background px-8 py-4 rounded-full font-bold text-lg transition-all hover:-translate-y-1 shadow-2xl shadow-foreground/20 flex items-center justify-center gap-2">
                Explore Artworks <Palette size={20} />
              </Link>
              <button className="px-8 py-4 rounded-full font-bold text-lg bg-secondary text-secondary-foreground hover:bg-secondary/80 transition-all hover:-translate-y-1 flex items-center justify-center gap-2 border border-border">
                <Globe2 size={20} /> Global Donors
              </button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground font-medium">
              <div className="flex items-center gap-2">
                <ShieldCheck className="text-green-500" size={20} />
                <span>100% Transparent</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="text-red-500" size={20} />
                <span>Direct Impact</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="w-full lg:w-1/2 relative min-h-[500px]"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-accent/20 rounded-[3rem] blur-3xl -z-10" />
            <div className="relative w-full h-[500px] lg:h-[600px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-primary/10 border-[8px] border-white/50 dark:border-slate-800/50 backdrop-blur-sm group">
              <Image
                src={HERO_IMG}
                alt="Abstract Art Element"
                fill
                priority
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-10 left-10 right-10 p-6 glass-panel rounded-2xl flex items-center justify-between text-white">
                <div>
                  <h3 className="font-bold text-xl mb-1">Created with Hope</h3>
                  <p className="text-sm text-white/80 shrink-0 max-w-[200px]">By changing a life, you change the world.</p>
                </div>
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center shrink-0">
                  <Heart size={24} className="text-white" fill="white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Decorative Divider */}
      <div className="w-full h-32 relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute px-6 py-2 glass-panel rounded-full text-xs font-bold tracking-widest uppercase text-muted-foreground flex items-center gap-3">
          <Palette size={14} className="text-primary" />
          <span>Latest Creations</span>
          <Palette size={14} className="text-accent" />
        </div>
      </div>

      {/* Artworks Showcase Section */}
      <section id="artworks" className="py-20 px-6 bg-slate-50/50 dark:bg-slate-900/30 relative border-y border-border overflow-hidden">

        {/* Subtle Background Art */}
        <div className="absolute top-0 right-0 w-[800px] h-[800px] opacity-10 blur-3xl rounded-full pointer-events-none -z-10 mix-blend-overlay">
          <Image src={DARK_IMG} alt="bg" fill className="object-cover" />
        </div>

        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16 max-w-2xl mx-auto">
            <h2 className="text-4xl font-extrabold mb-4">Discover Their Masterpieces</h2>
            <p className="text-lg text-muted-foreground">Every artwork is a window into a child's imagination. Support them by purchasing a piece of their dreams. Limited support slices available.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "Sunset over Green Hills", artist: "Aarav (Age 9)", img: SAMPLE_1, total: 100, sold: 100 },
              { title: "The Colorful Friend", artist: "Priya (Age 11)", img: SAMPLE_2, total: 100, sold: 85 },
              { title: "Dreamy Village", artist: "Rohan (Age 8)", img: SAMPLE_1, total: 100, sold: 20 },
              { title: "My Hero", artist: "Neha (Age 7)", img: SAMPLE_2, total: 100, sold: 50 },
              { title: "Outer Space", artist: "Aryan (Age 10)", img: SAMPLE_1, total: 100, sold: 100 },
              { title: "Dancing Tiger", artist: "Riya (Age 9)", img: SAMPLE_2, total: 100, sold: 5 },
            ].map((art, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: (idx % 3) * 0.1 }}
                className="group bg-white dark:bg-slate-950 rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 dark:shadow-none border border-border hover:border-primary/50 transition-all hover:-translate-y-2 flex flex-col"
              >
                <div className="relative w-full aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-800">
                  <Image
                    src={art.img}
                    alt={art.title}
                    fill
                    className={`object-cover transition-transform duration-700 group-hover:scale-110`}
                  />
                  {art.sold === art.total && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                      <div className="bg-white/90 text-black px-6 py-2 rounded-full font-bold shadow-lg">
                        Fully Supported!
                      </div>
                    </div>
                  )}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-black px-4 py-1.5 rounded-full text-sm font-bold shadow-md">
                    Total Value: ${art.total}
                  </div>
                </div>

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">{art.title}</h3>
                  <p className="text-muted-foreground text-sm font-medium mb-6">By {art.artist}</p>

                  <div className="mt-auto space-y-4">
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm font-semibold">
                        <span>Supported: ${art.sold}</span>
                        <span className="text-muted-foreground">Remaining: ${art.total - art.sold}</span>
                      </div>
                      <div className="w-full h-2.5 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000"
                          style={{ width: `${(art.sold / art.total) * 100}%` }}
                        />
                      </div>
                    </div>

                    <Link
                      href={art.sold === art.total ? "#" : "/login"}
                      className={`w-full py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${art.sold === art.total
                        ? 'bg-secondary text-secondary-foreground cursor-not-allowed opacity-50'
                        : 'bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:-translate-y-0.5'
                        }`}
                    >
                      {art.sold === art.total ? 'Max Limits Reached' : 'Login to Support ($5)'}
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link href="/artists" className="text-primary font-bold hover:underline flex items-center justify-center gap-2 mx-auto decoration-2 underline-offset-4 w-max">
              View All Artists <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <footer className="bg-slate-950 text-white pt-24 pb-10 px-6 relative overflow-hidden">
        {/* Abstract shape */}
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary rounded-full blur-[150px] opacity-20 pointer-events-none" />
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-accent rounded-full blur-[150px] opacity-20 pointer-events-none" />

        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center mb-20 border-b border-white/10 pb-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">Help us build a <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-orange-500">brighter</span> future today.</h2>
              <p className="text-slate-400 text-lg sm:text-lg mb-8 max-w-md">Your contribution buys directly into a child's education, creating an unbreakable chain of hope across borders.</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/signup" className="bg-white text-slate-950 hover:bg-slate-100 px-8 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 active:scale-95 text-center">
                  Create Account
                </Link>
              </div>
            </div>

            <div className="glass-panel p-8 rounded-3xl border border-white/10 bg-white/5 relative">
              <div className="absolute -top-4 -right-4 bg-orange-500 text-white text-xs font-black tracking-widest uppercase px-4 py-2 rounded-full shadow-lg rotate-12">
                Foreign Payments Only
              </div>
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2"><Globe2 size={24} className="text-primary" /> International Supporters</h3>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                As part of the foreign contributions regulations, CESA accepts payments safely and securely from outside India. All proceeds directly fund the children.
              </p>
              <div className="flex gap-4 opacity-70">
                {/* Simulated payment gateway logos */}
                <span className="font-bold border border-white/20 px-3 py-1 rounded bg-white/5">Stripe</span>
                <span className="font-bold border border-white/20 px-3 py-1 rounded bg-white/5">PayPal</span>
                <span className="font-bold border border-white/20 px-3 py-1 rounded bg-white/5">Wise</span>
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-slate-500 font-medium">
            <div className="flex items-center gap-4 border border-white/10 px-4 py-2 rounded-full bg-white/5">
              <Image src={LOGO} alt="Logo" width={24} height={24} className="rounded-md" />
              <span>&copy; {new Date().getFullYear()} CESA. All rights reserved.</span>
            </div>
            <div className="flex gap-6">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Contact Admin</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
