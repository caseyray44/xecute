"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Circle } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PaymentPlanModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PaymentPlanModal({ isOpen, onClose }: PaymentPlanModalProps) {
    const [selectedPlan, setSelectedPlan] = useState<"trial" | "paid">("trial");

    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <div className="p-8 space-y-8">
                <div className="text-center space-y-2">
                    <h2 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white">Choose Your Plan</h2>
                    <p className="text-slate-500 dark:text-slate-400">Complete payment to connect your Markate account</p>
                </div>

                <div className="grid grid-cols-1 gap-4">
                    {/* Trial Plan */}
                    <div
                        onClick={() => setSelectedPlan("trial")}
                        className={cn(
                            "relative cursor-pointer border-2 rounded-xl p-6 transition-all duration-200",
                            selectedPlan === "trial"
                                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500 ring-1 ring-emerald-500/20"
                                : "hover:bg-slate-50 dark:hover:bg-slate-800/50 border-slate-200 dark:border-slate-800"
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div className={cn("mt-1", selectedPlan === "trial" ? "text-emerald-500" : "text-slate-400")}>
                                {selectedPlan === "trial" ? <CheckCircle2 className="h-6 w-6 fill-emerald-500/10" /> : <Circle className="h-6 w-6" />}
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">10-Day Free Trial</h3>
                                <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Card required, $0 today
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Then $99 / 4 weeks if you continue
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Paid Plan */}
                    <div
                        onClick={() => setSelectedPlan("paid")}
                        className={cn(
                            "relative cursor-pointer border-2 rounded-xl p-6 transition-all duration-200",
                            selectedPlan === "paid"
                                ? "bg-emerald-50/50 dark:bg-emerald-950/20 border-emerald-500 ring-1 ring-emerald-500/20"
                                : "hover:bg-slate-50 dark:hover:bg-slate-800/50 border-slate-200 dark:border-slate-800"
                        )}
                    >
                        <div className="flex items-start gap-4">
                            <div className={cn("mt-1", selectedPlan === "paid" ? "text-emerald-500" : "text-slate-400")}>
                                {selectedPlan === "paid" ? <CheckCircle2 className="h-6 w-6 fill-emerald-500/10" /> : <Circle className="h-6 w-6" />}
                            </div>
                            <div className="space-y-1">
                                <h3 className="font-bold text-lg text-slate-900 dark:text-white">Start Paid Subscription</h3>
                                <div className="space-y-1 text-sm text-slate-500 dark:text-slate-400">
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        $99 charged today
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                                        Billed every 4 weeks
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center pt-2">
                    <Button
                        variant="ghost"
                        onClick={onClose}
                        className="text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white w-full max-w-xs"
                    >
                        Cancel
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
