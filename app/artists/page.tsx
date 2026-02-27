"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, User, Medal, MapPin, Eye, Heart } from "lucide-react";
import Image from "next/image";

const BG_IMG = "/assets/images/hd_abstract_art_2.png";
const PHOTO_1 = "/assets/images/sample_artwork_1.png"; // Fallback to art as profile
const PHOTO_2 = "/assets/images/sample_artwork_2.png"; // Fallback to art as profile

const TOP_ARTISTS = [
    { rank: 1, name: "Aarav", age: 9, country: "India", profile: PHOTO_1, arts: 12, likes: 340, supported: "$500" },
    { rank: 2, name: "Priya", age: 11, country: "India", profile: PHOTO_2, arts: 8, likes: 215, supported: "$380" },
    { rank: 3, name: "Rohan", age: 8, country: "India", profile: PHOTO_1, arts: 5, likes: 180, supported: "$200" },
    { rank: 4, name: "Neha", age: 7, country: "India", profile: PHOTO_2, arts: 15, likes: 150, supported: "$180" },
    { rank: 5, name: "Riya", age: 9, country: "India", profile: PHOTO_1, arts: 4, likes: 90, supported: "$100" },
];

export default function TopArtists() {
    const [filter, setFilter] = useState("all_time");

    return (
        <div className="min-h-screen relative bg-slate-50 dark:bg-slate-950 text-foreground selection:bg-primary/30 py-20 px-6">
            <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
                <Image src={BG_IMG} alt="Background" fill className="object-cover opacity-10 blur-3xl mix-blend-overlay" />
            </div>

            <header className="fixed top-0 inset-x-0 z-50 p-4">
                <div className="max-w-7xl mx-auto flex items-center">
                    <Link href="/" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors bg-white/50 dark:bg-slate-900/50 p-2 pr-5 rounded-full backdrop-blur-md border border-border shadow-sm">
                        <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                            <ArrowLeft size={16} />
                        </div>
                        Back Home
                    </Link>
                </div>
            </header>

            <main className="relative z-10 max-w-5xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-6 text-primary border border-primary/20">
                        <Medal size={32} />
                    </div>
                    <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">Top <span className="gradient-text">Artists</span> Rankings</h1>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        Celebrate the young creators making a massive impact! Filter by time, browse their profiles, and discover the art that's changing lives.
                    </p>
                </motion.div>

                {/* Filters */}
                <div className="flex justify-center gap-4 mb-10 overflow-x-auto pb-4 hide-scrollbar">
                    {["All Time", "This Month", "Under Age 10", "Most Supported"].map((f, i) => (
                        <button
                            key={i}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold border transition-all ${i === 0 ? "bg-primary text-primary-foreground border-primary" : "bg-white dark:bg-slate-900 text-muted-foreground border-border hover:border-primary/50"}`}
                        >
                            {f}
                        </button>
                    ))}
                </div>

                {/* Leaderboard Table/Cards */}
                <div className="space-y-4">
                    {TOP_ARTISTS.map((artist, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: idx * 0.1 }}
                            className="glass-panel p-4 md:p-6 rounded-[2rem] bg-white/60 dark:bg-slate-900/60 shadow-lg border border-border hover:border-primary/30 transition-all flex flex-col md:flex-row items-center gap-6"
                        >
                            {/* Rank Badge */}
                            <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black text-xl shrink-0 ${artist.rank === 1 ? 'bg-amber-400 text-white shadow-lg shadow-amber-400/40' : artist.rank === 2 ? 'bg-slate-300 text-slate-800' : artist.rank === 3 ? 'bg-orange-400/80 text-white' : 'bg-slate-100 dark:bg-slate-800 text-slate-400'}`}>
                                #{artist.rank}
                            </div>

                            {/* Profile Group */}
                            <div className="flex items-center gap-4 flex-1 w-full">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-border shrink-0">
                                    <Image src={artist.profile} alt={artist.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold flex items-center gap-2">
                                        {artist.name}
                                        {artist.rank === 1 && <Sparkles size={16} className="text-amber-500" />}
                                    </h3>
                                    <div className="flex items-center gap-3 text-sm text-muted-foreground mt-1 font-medium">
                                        <span className="flex items-center gap-1"><User size={14} /> Age {artist.age}</span>
                                        <span className="flex items-center gap-1"><MapPin size={14} /> {artist.country}</span>
                                    </div>
                                </div>
                            </div>

                            {/* Stats Group */}
                            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1">Arts</p>
                                    <p className="text-lg font-black">{artist.arts}</p>
                                </div>
                                <div className="text-center">
                                    <p className="text-xs text-muted-foreground uppercase tracking-widest font-bold mb-1 flex justify-center items-center gap-1"><Heart size={12} /> Likes</p>
                                    <p className="text-lg font-black">{artist.likes}</p>
                                </div>
                                <div className="text-center min-w-[100px] bg-primary/10 py-2 px-4 rounded-xl border border-primary/20">
                                    <p className="text-xs text-primary uppercase tracking-widest font-bold mb-1">Raised</p>
                                    <p className="text-xl text-primary font-black">{artist.supported}</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </main>
        </div>
    );
}
