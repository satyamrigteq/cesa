"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, Loader2, Sparkles } from "lucide-react";
import Image from "next/image";

const BG_IMG = "/assets/images/hd_abstract_art_2.png";

export default function Login() {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            if (email.includes("admin")) {
                router.push("/dashboard/admin");
            } else if (email.includes("artist") || email.includes("child")) {
                router.push("/dashboard/artist");
            } else {
                router.push("/dashboard/supporter");
            }
        }, 1500);
    };

    return (
        <div className="min-h-screen relative flex items-center justify-center p-6 bg-slate-50 dark:bg-slate-950 selection:bg-primary/30">
            <div className="absolute inset-0 z-0 overflow-hidden">
                <Image src={BG_IMG} alt="Background" fill className="object-cover opacity-10 dark:opacity-20 blur-2xl mix-blend-overlay" />
            </div>

            <Link href="/" className="absolute top-8 left-8 z-20 flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors bg-white/50 dark:bg-slate-900/50 p-2 pr-4 rounded-full backdrop-blur-md border border-border shadow-sm">
                <div className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-sm">
                    <ArrowLeft size={16} />
                </div>
                Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="w-full max-w-md bg-white/70 dark:bg-slate-900/70 backdrop-blur-2xl border border-white/20 dark:border-slate-800 p-8 sm:p-10 rounded-[2rem] shadow-2xl relative z-10"
            >
                <div className="mb-10 text-center">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 text-primary border border-primary/20">
                        <Sparkles size={32} />
                    </div>
                    <h1 className="text-3xl font-extrabold mb-2">Welcome Back</h1>
                    <p className="text-muted-foreground text-sm">Sign in to support the future or manage your art.</p>
                </div>

                <form onSubmit={handleLogin} className="space-y-5">
                    <div className="space-y-1.5">
                        <label className="text-sm font-semibold text-foreground/80">Email address</label>
                        <input
                            type="email"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="admin@cesa.org / user@mail.com"
                            className="w-full px-5 py-3.5 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                        />
                    </div>

                    <div className="space-y-1.5">
                        <div className="flex justify-between items-center">
                            <label className="text-sm font-semibold text-foreground/80">Password</label>
                            <Link href="#" className="flex text-xs text-primary hover:underline font-medium">Forgot password?</Link>
                        </div>
                        <input
                            type="password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            className="w-full px-5 py-3.5 bg-white dark:bg-slate-950 border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm shadow-inner"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full py-3.5 bg-foreground text-background hover:bg-foreground/90 font-bold rounded-xl transition-all shadow-xl shadow-foreground/20 flex items-center justify-center gap-2 mt-4"
                    >
                        {loading ? <Loader2 size={20} className="animate-spin" /> : "Sign In to Your Account"}
                    </button>
                </form>

                <p className="text-center mt-8 text-sm text-muted-foreground font-medium">
                    Don't have an account? <Link href="/signup" className="text-primary hover:underline font-bold">Sign up here</Link>
                </p>
            </motion.div>
        </div>
    );
}
