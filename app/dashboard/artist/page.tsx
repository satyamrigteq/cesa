"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogOut, ImagePlus, UserCircle, Settings, Palette, ArrowUpRight } from "lucide-react";
import Image from "next/image";

export default function ArtistDashboard() {
    return (
        <div className="min-h-screen relative bg-slate-50 dark:bg-slate-950 text-foreground selection:bg-primary/30">

            {/* Sidebar / Header */}
            <header className="border-b border-border bg-white dark:bg-slate-950 sticky top-0 z-50 shadow-sm backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold text-lg shadow-inner">A</div>
                        <div>
                            <h2 className="font-bold text-sm">Artist Studio</h2>
                            <p className="text-xs text-muted-foreground">Hello, Aarav!</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <button className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 border bg-white dark:bg-slate-900 border-border px-4 py-2 rounded-full">
                            <Settings size={16} /> Profile Settings
                        </button>
                        <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 border bg-white dark:bg-slate-900 border-border px-4 py-2 rounded-full">
                            <LogOut size={16} /> Logout
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">

                {/* Profile Head */}
                <div className="glass-panel p-8 rounded-3xl bg-white dark:bg-slate-900 shadow-xl border border-border flex flex-col md:flex-row items-center gap-8 mb-12 relative overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary blur-[100px] opacity-20 pointer-events-none rounded-full" />
                    <div className="w-32 h-32 rounded-3xl border border-border shadow-lg overflow-hidden shrink-0 bg-slate-200" />

                    <div className="flex-1 text-center md:text-left z-10">
                        <h1 className="text-3xl font-extrabold mb-1">Aarav (Age 9)</h1>
                        <p className="text-muted-foreground text-sm font-medium mb-4 flex justify-center md:justify-start items-center gap-2">
                            <UserCircle size={16} /> Little King's & Queen's House, India
                        </p>
                        <div className="flex flex-wrap justify-center md:justify-start gap-4">
                            <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-border">
                                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Total Views</p>
                                <p className="text-xl font-black">1.2K</p>
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 border border-border">
                                <p className="text-xs uppercase tracking-widest text-muted-foreground font-bold mb-1">Arts Uploaded</p>
                                <p className="text-xl font-black">12</p>
                            </div>
                            <div className="px-4 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                                <p className="text-xs uppercase tracking-widest font-bold mb-1">Total Support</p>
                                <p className="text-xl font-black">$500</p>
                            </div>
                        </div>
                    </div>

                    <div className="z-10 shrink-0">
                        <button className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-xl shadow-primary/20 transition-all hover:-translate-y-1">
                            <ImagePlus size={20} /> Upload New Art
                        </button>
                    </div>
                </div>

                {/* Gallery */}
                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-2xl font-bold flex items-center gap-2"><Palette className="text-primary" /> Your Artworks</h2>
                    <button className="text-sm font-semibold text-primary hover:underline flex items-center gap-1">View Public Profile <ArrowUpRight size={14} /></button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

                    {[1, 2, 3, 4].map((i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            className="glass-panel bg-white dark:bg-slate-900 border border-border rounded-3xl overflow-hidden hover:border-primary/50 transition-all shadow-sm"
                        >
                            <div className="w-full aspect-[4/3] bg-slate-200 border-b border-border relative">
                                {i === 1 && (
                                    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4">
                                        <span className="bg-white text-black px-4 py-1 rounded-full font-bold text-sm">Fully Sold</span>
                                    </div>
                                )}
                                <div className="absolute bottom-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded-md font-bold backdrop-blur-md">
                                    Slices: {i === 1 ? '20/20' : '4/20'}
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="font-bold text-lg mb-1 truncate">Sunset Hills {i}</h3>
                                <p className="text-sm text-muted-foreground mb-4">Target: $100</p>

                                <div className="flex items-center gap-2 mt-2">
                                    <button className="flex-1 bg-slate-100 dark:bg-slate-800 text-sm font-bold py-2 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">Edit Details</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </main>
        </div>
    );
}
