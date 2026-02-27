"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Sparkles, UserCircle2, Brush } from "lucide-react";
import Image from "next/image";

const BG_IMG = "/assets/images/hd_abstract_art_1.png";

export default function SignUp() {
    const router = useRouter();
    const [role, setRole] = useState<"supporter" | "artist">("supporter");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        password: "",
        confirmPassword: ""
    });
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords do not match!");
            return;
        }
        setLoading(true);
        setTimeout(() => {
            // Create user logic here. Simulation leads to login
            router.push("/login");
        }, 1500);
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center py-12 px-6 bg-slate-50 dark:bg-slate-950 selection:bg-primary/30">
            <div className="fixed inset-0 z-0 overflow-hidden">
                <Image src={BG_IMG} alt="Background" fill className="object-cover opacity-10 dark:opacity-20 blur-3xl mix-blend-overlay" />
            </div>

            <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors bg-white/50 dark:bg-slate-900/50 p-2 pr-4 rounded-full backdrop-blur-md border border-border shadow-sm">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <ArrowLeft size={16} />
                </div>
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                className="w-full max-w-xl bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/20 dark:border-slate-800 p-8 sm:p-10 rounded-[2.5rem] shadow-2xl relative z-10"
            >
                <div className="mb-8 text-center">
                    <div className="inline-flex w-16 h-16 bg-primary/10 rounded-2xl items-center justify-center mb-6 text-primary border border-primary/20">
                        <Sparkles size={32} />
                    </div>
                    <h1 className="text-3xl font-extrabold mb-2">Join the Mission</h1>
                    <p className="text-muted-foreground text-sm">Create an account to support children or upload your art.</p>
                </div>

                {/* Role Selection */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                    <button
                        type="button"
                        onClick={() => setRole("supporter")}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${role === "supporter" ? "border-primary bg-primary/5 text-primary" : "border-border bg-white dark:bg-slate-950 text-muted-foreground hover:border-primary/50"}`}
                    >
                        <UserCircle2 size={24} />
                        <span className="font-bold text-sm">Supporter</span>
                    </button>
                    <button
                        type="button"
                        onClick={() => setRole("artist")}
                        className={`p-4 rounded-2xl border-2 transition-all flex flex-col items-center gap-2 ${role === "artist" ? "border-primary bg-primary/5 text-primary" : "border-border bg-white dark:bg-slate-950 text-muted-foreground hover:border-primary/50"}`}
                    >
                        <Brush size={24} />
                        <span className="font-bold text-sm">Artist (Child)</span>
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider font-bold text-foreground/60">Full Name</label>
                            <input
                                type="text"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                placeholder="John Doe"
                                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider font-bold text-foreground/60">Phone Number</label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                placeholder="+1 (555) 000-0000"
                                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                            />
                        </div>
                    </div>

                    <div className="space-y-1.5">
                        <label className="text-xs uppercase tracking-wider font-bold text-foreground/60">Email address</label>
                        <input
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            placeholder="user@mail.com"
                            className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                        />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider font-bold text-foreground/60">Password</label>
                            <input
                                type="password"
                                required
                                value={formData.password}
                                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                            />
                        </div>
                        <div className="space-y-1.5">
                            <label className="text-xs uppercase tracking-wider font-bold text-foreground/60">Repeat Password</label>
                            <input
                                type="password"
                                required
                                value={formData.confirmPassword}
                                onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                                placeholder="••••••••"
                                className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl transition-all shadow-xl shadow-foreground/20 flex items-center justify-center gap-2 mt-6"
                    >
                        {loading ? <Loader2 size={20} className="animate-spin" /> : "Create Account"}
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-muted-foreground font-medium">
                    Already have an account? <Link href="/login" className="text-primary hover:underline font-bold">Sign in here</Link>
                </p>
            </motion.div>
        </div>
    );
}
