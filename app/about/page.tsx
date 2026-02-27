"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft, Sparkles, HeartHandshake, Earth, ShieldCheck } from "lucide-react";
import Image from "next/image";

const BG_IMG = "/assets/images/hd_abstract_art_1.png";

export default function AboutUs() {
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

            <main className="relative z-10 max-w-4xl mx-auto mt-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-6 text-primary border border-primary/20">
                        <Sparkles size={32} />
                    </div>
                    <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">Our <span className="gradient-text">Mission</span></h1>
                    <p className="text-xl text-muted-foreground leading-relaxed">
                        Empowering the children of *Little King’s and Queen’s House* in India by transforming their creative art into educational funds, food, and shelter on a global stage.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                >
                    <div className="glass-panel p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 shadow-xl border border-border flex flex-col items-center text-center">
                        <HeartHandshake size={40} className="text-red-500 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Direct Support</h3>
                        <p className="text-sm text-muted-foreground">Every sliver of artwork purchased goes 100% towards funding their fundamental needs—food, shelter, and education.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 shadow-xl border border-border flex flex-col items-center text-center">
                        <Earth size={40} className="text-blue-500 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Global Family</h3>
                        <p className="text-sm text-muted-foreground">We accept contributions entirely from foreign supporters, creating an unbreakable international chain of hope.</p>
                    </div>
                    <div className="glass-panel p-8 rounded-3xl bg-white/60 dark:bg-slate-900/60 shadow-xl border border-border flex flex-col items-center text-center">
                        <ShieldCheck size={40} className="text-green-500 mb-6" />
                        <h3 className="text-xl font-bold mb-3">Guaranteed Trust</h3>
                        <p className="text-sm text-muted-foreground">End-to-end transparent processing using the securest payment gateways like Stripe, Wise, and PayPal.</p>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="bg-slate-950 text-white rounded-[3rem] p-10 md:p-16 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute -top-[50%] -right-[20%] w-[100%] h-[150%] bg-primary rounded-full blur-[120px] opacity-20 pointer-events-none" />
                    <div className="max-w-2xl relative z-10">
                        <h2 className="text-3xl font-bold mb-6">A word from the Founder</h2>
                        <blockquote className="text-lg text-slate-300 italic mb-8 border-l-4 border-primary pl-6 py-2">
                            "We request you to kindly review these artworks. Look closely at the color and the dreams painted into the digital canvas. Your support empowers these children through their creativity."
                        </blockquote>
                        <div className="flex items-center gap-4">
                            <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center font-bold text-lg">A</div>
                            <div>
                                <p className="font-bold">Anil Kumar Kolikapogu</p>
                                <p className="text-sm text-slate-400">Founder & Director, CESA</p>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
