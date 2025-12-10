"use client";

import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { Info } from "lucide-react";

interface PaymentReminderModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export function PaymentReminderModal({ isOpen, onClose }: PaymentReminderModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} className="max-w-md bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-slate-200 dark:border-slate-800">
            <div className="p-6 md:p-8">
                <div className="flex gap-4">
                    <div className="flex-shrink-0">
                        <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center text-slate-600 dark:text-slate-300">
                            <Info className="h-6 w-6" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <h2 className="text-xl font-bold text-slate-900 dark:text-white">Complete your Payment</h2>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Your account is currently inactive. Please visit your profile to complete the subscription process and activate your account.
                        </p>
                    </div>
                </div>

                <div className="flex gap-3 justify-end mt-8">
                    <Button
                        variant="outline"
                        onClick={onClose}
                        className="border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300"
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={onClose} // In real app, redirect to profile
                        className="bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg shadow-emerald-500/20"
                    >
                        Go to Profile
                    </Button>
                </div>
            </div>
        </Modal>
    );
}
