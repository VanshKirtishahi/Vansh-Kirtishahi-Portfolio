import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BackgroundBeams = ({ className }) => {
    return (
        <div
            className={cn(
                "absolute inset-0 z-0 flex flex-col items-center justify-center opacity-30 bg-black h-full w-full pointer-events-none",
                className
            )}
        >
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
            <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />

            {/* Beams */}
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    initial={{
                        opacity: 0.5,
                        rotate: -45,
                        left: "50%",
                        top: "50%",
                        x: "-50%",
                        y: "-50%",
                    }}
                    animate={{
                        opacity: [0.3, 0.8, 0.3],
                        scale: [1, 1.2, 1],
                        rotate: -45 + (i * 5),
                    }}
                    transition={{
                        duration: 5 + i,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.5,
                    }}
                    className={`absolute w-[500px] h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent`}
                    style={{
                        width: '100vw',
                    }}
                />
            ))}

            <div className="absolute inset-0 bg-slate-950 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        </div>
    );
};
