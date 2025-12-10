"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Link as LinkIcon, CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export function ConnectMarkateCard() {
    const searchParams = useSearchParams();
    // Initialize state directly from searchParams if possible, or use effect with delay to avoid sync badness
    // Actually, for client components, reading searchParams during render is fine for initial state if we don't need it to change later without navigation
    // But hydration mismatch can occur. Let's use useEffect but wrap in setTimeout to avoid sync set warning
    const [isConnected, setIsConnected] = useState(false);

    useEffect(() => {
        // Check for mock connection param or existing state
        if (searchParams.get("connected") === "true") {
            // Fix for "Calling setState synchronously within an effect"
            const t = setTimeout(() => setIsConnected(true), 0);
            return () => clearTimeout(t);
        }
    }, [searchParams]);

    if (isConnected) {
        return (
            <Card className="p-6 bg-emerald-500/10 border-emerald-500/20 shadow-none flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-emerald-500" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-white">Markate Connected</h3>
                        <p className="text-sm text-slate-400">Your CRM is synced and active.</p>
                    </div>
                </div>
                {/* Optional: Disconnect button or settings link could go here */}
            </Card>
        );
    }

    return (
        <div className="relative group">
            {/* Pulsating Glow Effect */}
            <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-amber-600 rounded-xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

            <Card className="relative p-6 bg-slate-900 border-orange-500/50 overflow-hidden">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center gap-4 w-full md:w-auto">
                        <div className="relative">
                            <div className="absolute inset-0 bg-orange-500 blur-md opacity-40 animate-pulse"></div>
                            <div className="relative w-12 h-12 rounded-full bg-orange-500/20 flex items-center justify-center border border-orange-500/50">
                                <LinkIcon className="w-6 h-6 text-orange-500" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-bold text-lg text-white flex items-center gap-2">
                                Connect Markate
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                                </span>
                            </h3>
                            <p className="text-sm text-slate-400">
                                Connect your account to enable SMS AI features.
                            </p>
                        </div>
                    </div>

                    <Button
                        className="w-full md:w-auto bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold shadow-lg shadow-orange-500/20 animate-pulse-subtle"
                        onClick={() => {
                            // In a real app, this would start the OAuth flow or redirect to settings
                            // For demo, we'll just reload with the connected param to simulate success
                            window.location.href = "/dashboard?connected=true";
                        }}
                    >
                        Connect Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                </div>
            </Card>
        </div>
    );
}
