"use client";

import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { CheckCircle2, Circle, Sparkles, Building2, Phone, Mail, Lock, Eye, EyeOff, X } from "lucide-react";
import { SlideButton } from "@/components/features/auth/SlideButton";
import { useState } from "react";
import { cn } from "@/lib/utils";

export default function SignupPage() {
    const [subscriptionType, setSubscriptionType] = useState<"trial" | "paid">("trial");
    const [phone, setPhone] = useState("+1 ");
    const [isPhoneFocused, setIsPhoneFocused] = useState(false);
    const [isPopupClosed, setIsPopupClosed] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (!value.startsWith("+1 ")) {
            return;
        }
        const numericPart = value.slice(3).replace(/\D/g, "");
        if (numericPart.length <= 10) {
            setPhone("+1 " + numericPart);
        }
    };

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
            {/* Background Animation Mesh */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-500/20 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 animate-fade-in" />
                <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] translate-x-1/2 translate-y-1/2 animate-fade-in" />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-500/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 scale-150" />
            </div>

            {/* Floating Header */}
            <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center">
                        <span className="font-bold text-white text-lg">X</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Xecute</span>
                </div>
                <Link href="/login" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
                    Already have an account? <span className="text-emerald-400">Sign In</span>
                </Link>
            </header>

            {/* Main Card */}
            <main className="relative z-10 w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0">

                {/* Left Side: Copy & Value Props (Desktop Only - or stacked top on mobile) */}
                <div className="flex flex-col justify-center p-8 lg:p-12 text-white order-last lg:order-first">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
                        Start your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300">
                            Transformation
                        </span>
                    </h1>
                    <p className="text-lg text-slate-400 mb-8 max-w-md">
                        Join thousands of businesses automating their operations with Xecute. Setup takes less than 2 minutes.
                    </p>

                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center flex-shrink-0 border border-emerald-500/20">
                                <Sparkles className="h-5 w-5 text-emerald-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">AI Receptionist</h3>
                                <p className="text-slate-400 text-sm">Automated text responses 24/7.</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 border border-blue-500/20">
                                <CheckCircle2 className="h-5 w-5 text-blue-400" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Smart Dispatch</h3>
                                <p className="text-slate-400 text-sm">Assign jobs automatically based on availability.</p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Right Side: Registration Form */}
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 md:p-8 shadow-2xl relative">
                    {/* Glow Effect */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-slate-300 ml-1">Business Name</label>
                                    <div className="relative">
                                        <Building2 className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                        <Input className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20" placeholder="Acme Services" />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-medium text-slate-300 ml-1">Email Address</label>
                                    <div className="relative">
                                        <Mail className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                        <Input type="email" className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20" placeholder="john@example.com" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-2 relative">
                                <label className="text-xs font-medium text-slate-300 ml-1">Phone Number</label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                    <Input
                                        className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        value={phone}
                                        onChange={handlePhoneChange}
                                        onFocus={() => setIsPhoneFocused(true)}
                                        onBlur={() => setIsPhoneFocused(false)}
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                                <p className="text-[11px] text-slate-500 ml-1">*Note: You will use this number to send and receive text messages from the AI</p>

                                {/* Floating Popup Information */}
                                {isPhoneFocused && !isPopupClosed && (
                                    <div className="absolute left-full top-0 ml-4 w-64 bg-emerald-500 text-white p-4 rounded-xl shadow-xl z-50 hidden lg:block animate-in fade-in slide-in-from-left-4">
                                        <button
                                            onClick={() => setIsPopupClosed(true)}
                                            className="absolute top-2 right-2 text-emerald-100 hover:text-white"
                                        >
                                            <X className="h-4 w-4" />
                                        </button>
                                        <div className="absolute left-0 top-6 -translate-x-1/2 w-4 h-4 bg-emerald-500 transform rotate-45" />
                                        <p className="text-xs font-medium leading-relaxed">
                                            Use your <strong>personal phone number</strong>, not your business line. Xecute talks only to you (the business owner).
                                        </p>
                                    </div>
                                )}
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-300 ml-1">Choose Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                    <Input
                                        type={showPassword ? "text" : "password"}
                                        className="pl-9 pr-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 focus:outline-none"
                                    >
                                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-300 ml-1">Confirm Password</label>
                                <div className="relative">
                                    <Lock className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                    <Input
                                        type={showConfirmPassword ? "text" : "password"}
                                        className="pl-9 pr-10 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        placeholder="••••••••"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                        className="absolute right-3 top-2.5 text-slate-500 hover:text-slate-300 focus:outline-none"
                                    >
                                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Subscription Cards */}
                        <div className="grid grid-cols-1 gap-3 pt-2">
                            <div
                                onClick={() => setSubscriptionType("trial")}
                                className={cn(
                                    "relative group cursor-pointer border rounded-xl p-4 transition-all duration-300",
                                    subscriptionType === "trial"
                                        ? "bg-emerald-500/10 border-emerald-500/50 ring-1 ring-emerald-500/20"
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                )}
                            >
                                <div className="flex justify-between items-start">
                                    <div className="flex gap-3">
                                        <div className={cn("mt-1", subscriptionType === "trial" ? "text-emerald-400" : "text-slate-500")}>
                                            {subscriptionType === "trial" ? <CheckCircle2 className="h-5 w-5 fill-emerald-500/20" /> : <Circle className="h-5 w-5" />}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">Start 14-Day Free Trial</h4>
                                            <p className="text-xs text-slate-400 mt-1">Full access. No charge today. Cancel anytime.</p>
                                        </div>
                                    </div>
                                    <span className="text-xs font-bold bg-emerald-500/20 text-emerald-300 px-2 py-1 rounded-full uppercase tracking-wider">Popular</span>
                                </div>
                            </div>

                            <div
                                onClick={() => setSubscriptionType("paid")}
                                className={cn(
                                    "relative group cursor-pointer border rounded-xl p-4 transition-all duration-300",
                                    subscriptionType === "paid"
                                        ? "bg-emerald-500/10 border-emerald-500/50 ring-1 ring-emerald-500/20"
                                        : "bg-white/5 border-white/10 hover:bg-white/10"
                                )}
                            >
                                <div className="flex gap-3">
                                    <div className={cn("mt-1", subscriptionType === "paid" ? "text-emerald-400" : "text-slate-500")}>
                                        {subscriptionType === "paid" ? <CheckCircle2 className="h-5 w-5 fill-emerald-500/20" /> : <Circle className="h-5 w-5" />}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-white">Monthly Subscription</h4>
                                        <p className="text-xs text-slate-400 mt-1">$99/month. Billed monthly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Submit */}
                        <div className="pt-4">
                            <div className="w-full">
                                <SlideButton
                                    text="Slide to Submit"
                                    successText="Creating Account..."
                                    onSuccess={() => window.location.href = '/dashboard'}
                                    className="bg-gradient-to-r from-emerald-600 to-teal-800"
                                />
                            </div>
                            <p className="text-center text-[10px] text-slate-500 mt-4 leading-tight">
                                By creating an account you agree to our <a href="#" className="text-slate-400 hover:text-white underline">Terms</a>, <a href="#" className="text-slate-400 hover:text-white underline">Privacy Policy</a>, and <a href="#" className="text-slate-400 hover:text-white underline">Refunds & Cancellation Policy</a>.
                            </p>
                        </div>

                    </div>
                </div>

            </main>
        </div>
    );
}
