"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { Input } from "@/components/ui/Input";
import { SlideButton } from "@/components/features/auth/SlideButton";
import { UserPlus, Smartphone, User } from "lucide-react";

interface AddAssociateModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function AddAssociateModal({ isOpen, onClose }: AddAssociateModalProps) {
    const [step, setStep] = useState<"form" | "success">("form");

    const handleSubmit = () => {
        // Simulating API call
        setTimeout(() => {
            setStep("success");
            setTimeout(() => {
                onClose();
                setStep("form"); // Reset for next time
            }, 2000);
        }, 1000);
    };

    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="relative p-6 md:p-8">
                {/* Decorative Background Elements */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 rounded-full blur-[60px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />

                {step === "form" ? (
                    <div className="relative z-10 space-y-6">
                        <div className="text-center space-y-2">
                            <div className="mx-auto w-12 h-12 rounded-xl bg-gradient-to-tr from-emerald-400 to-teal-500 flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/20">
                                <UserPlus className="w-6 h-6 text-white" />
                            </div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Add Team Member</h2>
                            <p className="text-slate-400 text-sm">
                                Register an associate&apos;s phone number to give them access to the AI assistant.
                            </p>
                        </div>

                        <div className="space-y-4 pt-2">
                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-300 ml-1">Associate Name</label>
                                <div className="relative">
                                    <User className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                    <Input
                                        className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        placeholder="Jane Smith"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-medium text-slate-300 ml-1">Associate Phone Number</label>
                                <div className="relative">
                                    <Smartphone className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
                                    <Input
                                        type="tel"
                                        className="pl-9 bg-white/5 border-white/10 text-white placeholder:text-slate-500 focus:border-emerald-500/50 focus:ring-emerald-500/20"
                                        placeholder="(555) 123-4567"
                                    />
                                </div>
                                <p className="text-[10px] text-slate-500 px-1">
                                    *Note: You will use this number to send and receive text messages from Xecute
                                </p>
                            </div>

                            {/* Terms */}
                            <div className="flex items-start gap-3 px-1 pt-2">
                                <input type="checkbox" className="mt-0.5 rounded border-slate-600 bg-white/5 text-emerald-500 focus:ring-emerald-500 focus:ring-offset-slate-900" />
                                <p className="text-[10px] text-slate-400 leading-tight">
                                    I confirm that I want to receive content from Xecute using any contact information I provide. This communication is covered by our <span className="text-emerald-400 hover:underline cursor-pointer">Terms & Conditions</span>, <span className="text-emerald-400 hover:underline cursor-pointer">Privacy Policy</span>, and <span className="text-emerald-400 hover:underline cursor-pointer">Refunds & Cancellation Policy</span>.
                                </p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <SlideButton
                                text="Slide to Register"
                                successText="Registering..."
                                onSuccess={handleSubmit}
                                className="bg-gradient-to-r from-emerald-600 to-teal-800"
                            />
                        </div>
                    </div>
                ) : (
                    <div className="relative z-10 flex flex-col items-center justify-center py-12 text-center space-y-4">
                        <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-2">
                            <UserPlus className="w-8 h-8 text-emerald-400" />
                        </div>
                        <h3 className="text-2xl font-bold text-white">Associate Added!</h3>
                        <p className="text-slate-300">
                            Your team member has been successfully registered.
                        </p>
                    </div>
                )}
            </div>
        </Modal>
    );
}
