"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useTransform, PanInfo } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideButtonProps {
    onSuccess?: () => void;
    text?: string;
    successText?: string;
    className?: string;
}

export function SlideButton({
    onSuccess,
    text = "Slide to Submit",
    successText = "Submitted",
    className,
}: SlideButtonProps) {
    const [isComplete, setIsComplete] = useState(false);
    const x = useMotionValue(0);
    const xInput = [0, 250]; // Adjust 250 based on container width
    const backgroundOpacity = useTransform(x, xInput, [0, 1]);

    // We'll use a ref to get the container width dynamically in a real app, 
    // but for simplicity we'll assume a fixed width or percentage logic.
    // Here we'll just constrain the drag.

    const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
        if (info.offset.x > 200) { // Threshold to trigger
            setIsComplete(true);
            if (onSuccess) onSuccess();
        } else {
            // Reset
            // x.set(0); // Framer motion handles snap back if dragConstraints are set
        }
    };

    return (
        <div
            className={cn(
                "relative h-14 w-full overflow-hidden rounded-full bg-gradient-to-r from-emerald-400 to-indigo-900 p-1",
                className
            )}
        >
            {/* Background Text */}
            <div className="absolute inset-0 flex items-center justify-center text-white font-medium z-0 pointer-events-none">
                {isComplete ? successText : text}
            </div>

            {/* Slider Handle */}
            <motion.div
                className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md cursor-grab active:cursor-grabbing"
                drag="x"
                dragConstraints={{ left: 0, right: 0 }} // We want it to snap back if not complete, but we need to allow movement.
                // Actually, to make it slide all the way, we usually use dragConstraints with a ref.
                // Let's simplify: 
                dragElastic={0.1}
                dragMomentum={false}
                onDragEnd={handleDragEnd}
                animate={isComplete ? { x: "calc(100% - 3rem - 8px)" } : { x: 0 }} // 3rem is width, 8px is padding/margin approx
                whileDrag={{ scale: 1.1 }}
            >
                {isComplete ? (
                    <Check className="h-6 w-6 text-emerald-500" />
                ) : (
                    <ArrowRight className="h-6 w-6 text-indigo-900" />
                )}
            </motion.div>

            {/* Success Overlay (Optional, for visual feedback) */}
            <motion.div
                style={{ opacity: backgroundOpacity }}
                className="absolute inset-0 bg-emerald-500/20 pointer-events-none"
            />
        </div>
    );
}
