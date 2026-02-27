"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { LogOut, LayoutDashboard, Users, Brush, Activity, UploadCloud, Search } from "lucide-react";
import Image from "next/image";

export default function AdminDashboard() {
    return (
        <div className="min-h-screen relative bg-slate-50 dark:bg-slate-950 text-foreground selection:bg-primary/30 flex">

            {/* Sidebar Navigation */}
            <aside className="w-64 bg-white dark:bg-slate-900 border-r border-border shrink-0 fixed left-0 top-0 bottom-0 overflow-y-auto hidden md:block">
                <div className="p-6 border-b border-border flex items-center justify-center gap-2">
                    <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center text-primary-foreground font-black text-xl shadow-inner">
                        C
                    </div>
                    <p className="font-extrabold text-xl tracking-tight hidden lg:block">CESA Admin</p>
                </div>

                <nav className="p-4 space-y-2">
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary font-bold transition-all border border-primary/20">
                        <LayoutDashboard size={20} /> Overview
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-muted-foreground hover:text-foreground font-bold transition-all border border-transparent">
                        <Users size={20} /> Manage Profiles
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-muted-foreground hover:text-foreground font-bold transition-all border border-transparent">
                        <Brush size={20} /> Artworks
                    </Link>
                    <Link href="#" className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-muted-foreground hover:text-foreground font-bold transition-all border border-transparent">
                        <Activity size={20} /> Transactions
                    </Link>
                </nav>

                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-border">
                    <p className="text-xs text-muted-foreground font-semibold mb-2 uppercase tracking-widest">Admin</p>
                    <p className="font-bold text-sm truncate mb-4">system@cesa.org</p>
                    <Link href="/" className="flex items-center gap-2 text-sm text-red-500 font-bold hover:text-red-600 transition-colors w-full justify-center border border-red-200 dark:border-red-500/20 bg-red-50 dark:bg-red-500/10 py-2 rounded-lg">
                        <LogOut size={16} /> Logout
                    </Link>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="flex-1 md:ml-64 relative bg-slate-50 dark:bg-slate-950/50">
                {/* Top Header */}
                <header className="h-16 border-b border-border bg-white dark:bg-slate-900 sticky top-0 z-40 px-6 flex items-center justify-between backdrop-blur-md">
                    <h1 className="font-extrabold text-xl">Overview</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative group">
                            <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors" />
                            <input
                                type="text"
                                placeholder="Search orders, profiles..."
                                className="pl-9 pr-4 py-1.5 rounded-full border border-border bg-slate-100 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-primary/50 text-sm w-64 transition-all"
                            />
                        </div>
                        <button className="bg-primary text-primary-foreground hover:bg-primary/90 px-4 py-2 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5" title="Daily/Monthly Upload">
                            <UploadCloud size={16} /> Batch Upload Artworks
                        </button>
                    </div>
                </header>

                {/* Dashboard Content */}
                <div className="p-6 md:p-10 space-y-8 max-w-7xl mx-auto">

                    {/* KPI Cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between group hover:border-primary/50 transition-colors">
                            <div className="flex items-center gap-3 text-muted-foreground mb-4">
                                <span className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Activity size={20} /></span>
                                <span className="font-semibold text-sm uppercase tracking-wider">Total Raised</span>
                            </div>
                            <p className="text-3xl font-black text-foreground">$12,450</p>
                            <p className="text-xs text-green-500 font-bold mt-2 flex items-center gap-1">+24% thi month</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between group hover:border-amber-500/50 transition-colors">
                            <div className="flex items-center gap-3 text-muted-foreground mb-4">
                                <span className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-500"><Users size={20} /></span>
                                <span className="font-semibold text-sm uppercase tracking-wider">Child Profiles</span>
                            </div>
                            <p className="text-3xl font-black text-foreground">58</p>
                            <p className="text-xs text-muted-foreground font-semibold mt-2">Active across database</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between group hover:border-purple-500/50 transition-colors">
                            <div className="flex items-center gap-3 text-muted-foreground mb-4">
                                <span className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500"><Brush size={20} /></span>
                                <span className="font-semibold text-sm uppercase tracking-wider">Artworks</span>
                            </div>
                            <p className="text-3xl font-black text-foreground">142</p>
                            <p className="text-xs text-muted-foreground font-semibold mt-2">35 fully supported</p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="glass-panel p-6 rounded-2xl bg-white dark:bg-slate-900 border border-border shadow-sm flex flex-col justify-between group hover:border-green-500/50 transition-colors">
                            <div className="flex items-center gap-3 text-muted-foreground mb-4">
                                <span className="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500"><Users size={20} /></span>
                                <span className="font-semibold text-sm uppercase tracking-wider">Global Supporters</span>
                            </div>
                            <p className="text-3xl font-black text-foreground">845</p>
                            <p className="text-xs text-muted-foreground font-semibold mt-2">Only Non-Indian IPs active</p>
                        </motion.div>
                    </div>

                    {/* Recent Uploads Table */}
                    <h2 className="text-xl font-bold mb-4 mt-8 flex items-center gap-2"><Brush size={20} className="text-primary" /> Recent Uploads</h2>
                    <div className="glass-panel rounded-3xl bg-white dark:bg-slate-900 border border-border shadow-sm overflow-hidden">
                        <div className="grid grid-cols-12 gap-4 p-4 border-b border-border bg-slate-50 dark:bg-slate-950 font-semibold text-xs text-muted-foreground uppercase tracking-wider">
                            <div className="col-span-4">Art Title</div>
                            <div className="col-span-3">Artist</div>
                            <div className="col-span-2 text-center">Value Unit ($)</div>
                            <div className="col-span-2 text-center">Status</div>
                            <div className="col-span-1 text-right">Actions</div>
                        </div>

                        {[1, 2, 3].map((row) => (
                            <div key={row} className="grid grid-cols-12 gap-4 p-4 items-center border-b border-border hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors">
                                <div className="col-span-4 flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-lg bg-slate-200 border border-border shrink-0" />
                                    <p className="font-bold text-sm truncate">My Happy Place {row}</p>
                                </div>
                                <div className="col-span-3 text-sm font-medium">Aarav (Age 9)</div>
                                <div className="col-span-2 text-center font-bold text-sm">$5 × 20</div>
                                <div className="col-span-2 text-center flex justify-center">
                                    {row === 1 ? (
                                        <span className="bg-green-100 text-green-700 dark:bg-green-500/10 dark:text-green-400 px-3 py-1 rounded-full text-xs font-bold">Active</span>
                                    ) : (
                                        <span className="bg-red-100 text-red-700 dark:bg-red-500/10 dark:text-red-400 px-3 py-1 rounded-full text-xs font-bold">Max Limit Hit</span>
                                    )}
                                </div>
                                <div className="col-span-1 flex items-center justify-end">
                                    <button className="text-primary hover:underline text-xs font-bold">Edit</button>
                                </div>
                            </div>
                        ))}
                        <div className="p-4 text-center bg-slate-50 dark:bg-slate-950">
                            <button className="text-sm font-bold text-muted-foreground hover:text-foreground">View All Artworks</button>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
}
