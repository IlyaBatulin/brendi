import { motion, useReducedMotion } from "framer-motion";
import { useEffect } from "react";

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

export const LoadingScreen = ({ onLoadingComplete }: LoadingScreenProps) => {
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const timeout = setTimeout(onLoadingComplete, 1200);
    return () => clearTimeout(timeout);
  }, [onLoadingComplete]);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      />

      <motion.div
        className="relative z-10 flex flex-col items-center gap-8 px-6"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div
          className="relative"
          animate={prefersReducedMotion ? undefined : { scale: [1, 1.04, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="font-bebas text-5xl sm:text-6xl md:text-7xl tracking-[0.3em] text-primary">
            БРЕНДИ
          </span>
          <motion.span
            className="pointer-events-none absolute inset-0 rounded-full blur-3xl bg-primary/20"
            animate={prefersReducedMotion ? undefined : { opacity: [0.2, 0.45, 0.2] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        <motion.div
          className="flex items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
        >
          <span className="h-2 w-2 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-primary/70" />
          <span className="h-2 w-2 rounded-full bg-primary/40" />
        </motion.div>

        <motion.div
          className="relative h-[3px] w-40 sm:w-48 md:w-56 overflow-hidden rounded-full bg-muted/30"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.div
            className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary"
            animate={prefersReducedMotion ? undefined : { x: ["-100%", "100%"] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
