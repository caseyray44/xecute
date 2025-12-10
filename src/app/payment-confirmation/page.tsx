"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { useEffect, useState, Suspense } from "react";
import {
    CheckCircle2,
    XCircle,
    ArrowRight,
    Home,
    RefreshCw,
    Sparkles,
    Zap,
    Shield,
    ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

type PaymentStatus = "success" | "failed" | "loading";

function PaymentConfirmationContent() {
    const searchParams = useSearchParams();
    const sessionId = searchParams.get("session_id");
    const status = searchParams.get("status");

    const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>("loading");
    const [needsMarkateConnection, setNeedsMarkateConnection] = useState(false);
    const [countdown, setCountdown] = useState(10);
    const [isRedirecting, setIsRedirecting] = useState(false);

    // Simulate checking payment status and Markate connection
    useEffect(() => {
        const timer = setTimeout(() => {
            if (status === "success" && sessionId) {
                setPaymentStatus("success");
                // Simulate: user needs Markate connection (can be based on actual API check)
                setNeedsMarkateConnection(true);
            } else {
                setPaymentStatus("failed");
            }
        }, 800);

        return () => clearTimeout(timer);
    }, [sessionId, status]);

    // Countdown timer for Markate redirect
    useEffect(() => {
        if (paymentStatus === "success" && needsMarkateConnection && countdown > 0) {
            const timer = setInterval(() => {
                setCountdown((prev) => prev - 1);
            }, 1000);

            return () => clearInterval(timer);
        }

        if (countdown === 0 && needsMarkateConnection) {
            // Simulate redirect to Markate OAuth
            const t = setTimeout(() => setIsRedirecting(true), 0);
            return () => clearTimeout(t);
        }
    }, [paymentStatus, needsMarkateConnection, countdown]);

    const handleConnectMarkate = () => {
        setIsRedirecting(true);
        // Redirect to Markate OAuth
        // window.location.href = "https://markate.com/oauth/authorize?...";
    };

    const [particles, setParticles] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

    useEffect(() => {
        const t = setTimeout(() => {
            setParticles(
                [...Array(20)].map(() => ({
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    delay: `${Math.random() * 2}s`,
                    duration: `${2 + Math.random() * 3}s`,
                }))
            );
        }, 0);
        return () => clearTimeout(t);
    }, []);

    return (
        <div className="min-h-screen w-full flex items-center justify-center p-4 relative overflow-hidden bg-slate-950">
            {/* Background Animation Mesh */}
            <div className="absolute inset-0 z-0">
                <div
                    className={cn(
                        "absolute top-0 left-0 w-[600px] h-[600px] rounded-full blur-[150px] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000",
                        paymentStatus === "success"
                            ? "bg-emerald-500/30"
                            : paymentStatus === "failed"
                                ? "bg-red-500/30"
                                : "bg-blue-500/20"
                    )}
                />
                <div
                    className={cn(
                        "absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full blur-[150px] translate-x-1/2 translate-y-1/2 transition-all duration-1000",
                        paymentStatus === "success"
                            ? "bg-teal-500/20"
                            : paymentStatus === "failed"
                                ? "bg-orange-500/20"
                                : "bg-indigo-500/20"
                    )}
                />
                <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-indigo-500/5 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
            </div>

            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {particles.map((p, i) => (
                    <div
                        key={i}
                        className={cn(
                            "absolute w-1 h-1 rounded-full animate-pulse",
                            paymentStatus === "success" ? "bg-emerald-400/40" : "bg-slate-400/20"
                        )}
                        style={{
                            left: p.left,
                            top: p.top,
                            animationDelay: p.delay,
                            animationDuration: p.duration,
                        }}
                    />
                ))}
            </div>

            {/* Header */}
            <header className="absolute top-0 left-0 right-0 p-6 flex justify-between items-center z-20">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-emerald-400 to-blue-500 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <span className="font-bold text-white text-lg">X</span>
                    </div>
                    <span className="text-xl font-bold tracking-tight text-white">Xecute</span>
                </Link>
            </header>

            {/* Main Content */}
            <main className="relative z-10 w-full max-w-lg">
                {/* Loading State */}
                {paymentStatus === "loading" && (
                    <div className="flex flex-col items-center justify-center space-y-6 animate-pulse">
                        <div className="w-24 h-24 rounded-full bg-slate-800/50 flex items-center justify-center">
                            <RefreshCw className="w-10 h-10 text-slate-400 animate-spin" />
                        </div>
                        <div className="text-center space-y-2">
                            <h1 className="text-2xl font-bold text-white">Processing Payment</h1>
                            <p className="text-slate-400">Please wait while we confirm your transaction...</p>
                        </div>
                    </div>
                )}

                {/* Success State */}
                {paymentStatus === "success" && (
                    <div className="space-y-8 animate-fade-in">
                        {/* Success Icon */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-emerald-500/20 rounded-full blur-xl animate-pulse" />
                                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-2xl shadow-emerald-500/30">
                                    <CheckCircle2 className="w-14 h-14 text-white" strokeWidth={2.5} />
                                </div>
                                {/* Celebration sparkles */}
                                <Sparkles className="absolute -top-2 -right-2 w-6 h-6 text-yellow-400 animate-bounce" />
                                <Zap className="absolute -bottom-1 -left-3 w-5 h-5 text-emerald-300 animate-pulse" />
                            </div>
                        </div>

                        {/* Success Message */}
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl font-bold text-white tracking-tight">Payment Complete!</h1>
                            <p className="text-lg text-slate-300">
                                Your Xecute account is now{" "}
                                <span className="text-emerald-400 font-semibold">fully activated</span>.
                            </p>
                        </div>

                        {/* Markate Connection Card (if needed) */}
                        {needsMarkateConnection && (
                            <div className="bg-white/5 backdrop-blur-xl border border-emerald-500/30 rounded-2xl p-6 space-y-5 relative overflow-hidden">
                                {/* Glow effect */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

                                <div className="relative z-10 text-center space-y-2">
                                    <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 px-3 py-1 rounded-full text-sm font-medium mb-2">
                                        <Shield className="w-4 h-4" />
                                        Final Step
                                    </div>
                                    <h2 className="text-xl font-bold text-white">Connect your Markate account</h2>
                                    <p className="text-slate-400 text-sm leading-relaxed">
                                        Link your Markate CRM to let Xecute manage your customers, work orders, and leads
                                        automatically.
                                    </p>
                                </div>

                                {/* Countdown */}
                                <div className="flex items-center justify-center gap-2 text-slate-300">
                                    <span className="text-sm">Redirecting to Markate in</span>
                                    <span className="relative">
                                        <span className="absolute inset-0 bg-emerald-500/20 rounded-lg blur-sm" />
                                        <span className="relative inline-flex items-center justify-center w-10 h-10 bg-slate-800 border border-emerald-500/50 rounded-lg text-2xl font-bold text-emerald-400 tabular-nums">
                                            {countdown}
                                        </span>
                                    </span>
                                    <span className="text-sm">seconds...</span>
                                </div>

                                {/* Connect Button */}
                                <Button
                                    onClick={handleConnectMarkate}
                                    disabled={isRedirecting}
                                    className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 disabled:opacity-70"
                                >
                                    {isRedirecting ? (
                                        <>
                                            <RefreshCw className="w-4 h-4 mr-2 animate-spin" />
                                            Connecting...
                                        </>
                                    ) : (
                                        <>
                                            Connect Markate Now
                                            <ExternalLink className="w-4 h-4 ml-2" />
                                        </>
                                    )}
                                </Button>

                                <button
                                    onClick={() => setNeedsMarkateConnection(false)}
                                    className="w-full text-sm text-slate-500 hover:text-slate-300 transition-colors"
                                >
                                    Skip for now →
                                </button>
                            </div>
                        )}

                        {/* Simple Success (no Markate needed) */}
                        {!needsMarkateConnection && (
                            <div className="space-y-6">
                                {/* Features unlocked */}
                                <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 space-y-4">
                                    <h3 className="text-lg font-semibold text-white text-center">
                                        🎉 You&apos;re all set!
                                    </h3>
                                    <div className="grid grid-cols-1 gap-3">
                                        {[
                                            "AI-powered customer responses",
                                            "Automated scheduling & dispatch",
                                            "24/7 lead capture",
                                            "Full CRM integration",
                                        ].map((feature, i) => (
                                            <div
                                                key={i}
                                                className="flex items-center gap-3 bg-slate-800/50 rounded-lg px-4 py-2.5"
                                            >
                                                <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                                                <span className="text-slate-300 text-sm">{feature}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* CTA Buttons */}
                                <div className="flex flex-col gap-3">
                                    <Link href="/dashboard" className="w-full">
                                        <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                                            Go to Dashboard
                                            <ArrowRight className="w-4 h-4 ml-2" />
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        )}
                    </div>
                )}

                {/* Failed State */}
                {paymentStatus === "failed" && (
                    <div className="space-y-8 animate-fade-in">
                        {/* Error Icon */}
                        <div className="flex justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-red-500/20 rounded-full blur-xl animate-pulse" />
                                <div className="relative w-28 h-28 rounded-full bg-gradient-to-br from-red-500 to-orange-600 flex items-center justify-center shadow-2xl shadow-red-500/30">
                                    <XCircle className="w-14 h-14 text-white" strokeWidth={2.5} />
                                </div>
                            </div>
                        </div>

                        {/* Error Message */}
                        <div className="text-center space-y-3">
                            <h1 className="text-4xl font-bold text-white tracking-tight">Payment Failed</h1>
                            <p className="text-lg text-slate-300">
                                We couldn&apos;t process your payment. Don&apos;t worry, no charges were made.
                            </p>
                        </div>

                        {/* Error Details Card */}
                        <div className="bg-white/5 backdrop-blur-xl border border-red-500/20 rounded-2xl p-6 space-y-4">
                            <div className="flex items-start gap-3">
                                <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0">
                                    <XCircle className="w-5 h-5 text-red-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-white">What went wrong?</h3>
                                    <p className="text-sm text-slate-400 mt-1">
                                        {sessionId
                                            ? "The payment session expired or was cancelled."
                                            : "No payment session was found. Please try again."}
                                    </p>
                                </div>
                            </div>

                            <div className="pt-2 border-t border-white/10">
                                <p className="text-xs text-slate-500">
                                    If this issue persists, please contact our support team at{" "}
                                    <a
                                        href="mailto:support@xecutetech.com"
                                        className="text-emerald-400 hover:text-emerald-300 underline"
                                    >
                                        support@xecutetech.com
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col gap-3">
                            <Link href="/signup" className="w-full">
                                <Button className="w-full h-12 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white font-bold rounded-xl shadow-lg hover:shadow-emerald-500/20 transition-all duration-300">
                                    <RefreshCw className="w-4 h-4 mr-2" />
                                    Try Again
                                </Button>
                            </Link>
                            <Link href="/" className="w-full">
                                <Button
                                    variant="outline"
                                    className="w-full h-12 bg-white/5 border-white/10 text-white hover:bg-white/10 hover:text-white rounded-xl transition-all duration-300"
                                >
                                    <Home className="w-4 h-4 mr-2" />
                                    Go Back to Home
                                </Button>
                            </Link>
                        </div>
                    </div>
                )}
            </main>

            {/* Footer */}
            <footer className="absolute bottom-6 text-center w-full">
                <p className="text-xs text-slate-600">
                    © 2025 Xecute Technologies Inc. •{" "}
                    <a href="#" className="hover:text-slate-400 transition-colors">
                        Privacy
                    </a>{" "}
                    •{" "}
                    <a href="#" className="hover:text-slate-400 transition-colors">
                        Terms
                    </a>{" "}
                    •{" "}
                    <a href="#" className="hover:text-slate-400 transition-colors">
                        Refunds & Cancellation Policy
                    </a>
                </p>
            </footer>
        </div>
    );
}

export default function PaymentConfirmationPage() {
    return (
        <Suspense
            fallback={
                <div className="min-h-screen w-full flex items-center justify-center bg-slate-950">
                    <RefreshCw className="w-8 h-8 text-slate-400 animate-spin" />
                </div>
            }
        >
            <PaymentConfirmationContent />
        </Suspense>
    );
}

