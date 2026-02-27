"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogOut, Heart, Download, FileText, Image as ImageIcon, History } from "lucide-react";

export default function SupporterDashboard() {
    return (
        <div className="min-h-screen relative bg-slate-50 dark:bg-slate-950 text-foreground selection:bg-primary/30">

            {/* Sidebar / Header (Simple top nav for dashboard) */}
            <header className="border-b border-border bg-white dark:bg-slate-950 sticky top-0 z-50 shadow-sm backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg shadow-inner">S</div>
                        <div>
                            <h2 className="font-bold text-sm">Supporter Portal</h2>
                            <p className="text-xs text-muted-foreground">Welcome back, John!</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <Link href="/#artworks" className="text-sm font-semibold hover:text-primary transition-colors flex items-center gap-2">
                            <Heart size={16} className="text-red-500" /> Donate More
                        </Link>
                        <Link href="/" className="text-sm font-semibold text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 border bg-white dark:bg-slate-900 border-border px-4 py-2 rounded-full">
                            <LogOut size={16} /> Logout
                        </Link>
                    </div>
                </div>
            </header>

            <main className="max-w-7xl mx-auto px-6 py-10">
                <h1 className="text-3xl font-extrabold mb-8 tracking-tight">Your Impact Dashboard</h1>

                {/* Key Metrics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3 text-muted-foreground mb-4">
                            <Heart size={20} className="text-primary" />
                            <span className="font-semibold">Total Donated</span>
                        </div>
                        <p className="text-4xl font-black text-primary">$150.00</p>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3 text-muted-foreground mb-4">
                            <ImageIcon size={20} className="text-amber-500" />
                            <span className="font-semibold">Artworks Supported</span>
                        </div>
                        <p className="text-4xl font-black">12 <span className="text-lg text-muted-foreground font-medium">slices</span></p>
                    </div>

                    <div className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between">
                        <div className="flex items-center gap-3 text-muted-foreground mb-4">
                            <History size={20} className="text-green-500" />
                            <span className="font-semibold">Children Helped</span>
                        </div>
                        <p className="text-4xl font-black">5 <span className="text-lg text-muted-foreground font-medium">Profiles</span></p>
                    </div>
                </div>

                {/* Supported Artworks List */}
                <h2 className="text-xl font-bold mb-6">Your Collection & Invoices</h2>
                <div className="glass-panel rounded-3xl bg-white dark:bg-slate-900 border border-border shadow-sm overflow-hidden">
                    <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-slate-50 dark:bg-slate-950 font-semibold text-sm text-muted-foreground uppercase tracking-wider">
                        <div className="col-span-5">Artwork</div>
                        <div className="col-span-2 text-center">Date</div>
                        <div className="col-span-2 text-center">Amount</div>
                        <div className="col-span-3 text-right">Actions</div>
                    </div>

                    {/* Row 1 */}
                    <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="col-span-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-200 border border-border" />
                            <div>
                                <p className="font-bold">Sunset over Green Hills</p>
                                <p className="text-xs text-muted-foreground">Artist: Aarav • Slice #4/20</p>
                            </div>
                        </div>
                        <div className="col-span-2 text-center text-sm font-medium">May 12, 2026</div>
                        <div className="col-span-2 text-center font-bold text-primary">$10.00</div>
                        <div className="col-span-3 flex items-center justify-end gap-2">
                            <button className="p-2 border border-border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-blue-500" title="Download HQ Art">
                                <Download size={16} />
                            </button>
                            <button className="p-2 border border-border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-amber-600" title="View Invoice">
                                <FileText size={16} />
                            </button>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                        <div className="col-span-5 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-slate-200 border border-border" />
                            <div>
                                <p className="font-bold">Dreamy Village</p>
                                <p className="text-xs text-muted-foreground">Artist: Rohan • Slice #20/20</p>
                            </div>
                        </div>
                        <div className="col-span-2 text-center text-sm font-medium">Apr 28, 2026</div>
                        <div className="col-span-2 text-center font-bold text-primary">$5.00</div>
                        <div className="col-span-3 flex items-center justify-end gap-2">
                            <button className="p-2 border border-border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-blue-500 disabled:opacity-50" title="Disabled - Reached max downloads">
                                <Download size={16} />
                            </button>
                            <button className="p-2 border border-border rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-amber-600" title="View Invoice">
                                <FileText size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="p-6 text-center text-sm text-muted-foreground bg-slate-50 dark:bg-slate-950 italic">
                        "Please help my next friend who needs your support." - A message from the kids.
                    </div>
                </div>
            </main>
        </div>
    );
}
