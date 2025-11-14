import { motion } from "framer-motion";
import { Music2 } from "lucide-react";
import { Button } from "./ui/button";
import brendiLogo from "@/assets/brendi-logo.svg";

// Версия видео для обхода кэша браузера - обновляйте при изменении видео
const VIDEO_VERSION = "v3";

export const HeroSection = () => {
  const scrollToVideo = () => {
    document.getElementById("video")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        // Оптимизация для мобильных
        touchAction: "pan-y",
        willChange: "scroll-position",
      }}
    >
      {/* Video Background */}
      <div className="absolute inset-0 bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
          style={{
            // Улучшение производительности видео
            transform: "translateZ(0)",
            willChange: "opacity",
          }}
          key={`video-${VIDEO_VERSION}`}
        >
          <source src={`/videos/brendi-mobile1.mp4?v=${VIDEO_VERSION}`} type="video/mp4" media="(max-width: 768px)" />
          <source src={`/videos/brendi-desktop.mp4?v=${VIDEO_VERSION}`} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
      </div>

        {/* Simplified Animated Overlay for Mobile Performance */}
      <div className="absolute inset-0 bg-background/10">
        <div className="absolute inset-0 opacity-15 md:opacity-25">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-0.5 bg-gradient-to-b from-transparent via-primary to-transparent"
              style={{
                left: `${25 + i * 25}%`,
                height: "150%",
                willChange: "transform",
                transform: "translateZ(0)",
              }}
              animate={{
                y: ["-100%", "100%"],
              }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "linear",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
        
        {/* Reduced musical notes for performance - меньше на мобильных */}
        <div className="absolute inset-0">
          {[...Array(4)].map((_, i) => (
            <motion.div
              key={`note-${i}`}
              className="absolute text-primary/10 md:text-primary/15 hidden md:block"
              style={{
                left: `${15 + i * 25}%`,
                top: `${20 + (i % 2) * 30}%`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              animate={{
                y: [0, -25, 0],
                x: [0, 12, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 3.5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            >
              <Music2 size={14 + i * 2} className="md:w-5 md:h-5" />
            </motion.div>
          ))}
        </div>

        {/* Reduced particles for mobile - отключены на мобильных */}
        <div className="absolute inset-0 hidden md:block">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={`particle-${i}`}
              className="absolute w-0.5 h-0.5 bg-accent rounded-full"
              style={{
                left: `${15 + i * 15}%`,
                top: `${20 + (i % 3) * 25}%`,
                willChange: "transform, opacity",
                transform: "translateZ(0)",
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 2.5 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 w-full"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* SVG Logo */}
        <motion.div
          className="relative w-full max-w-[280px] sm:max-w-md md:max-w-2xl mx-auto mb-8 md:mb-12"
          style={{
            filter: "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.6)) drop-shadow(0 0 40px hsl(var(--brandy-amber) / 0.3))",
            willChange: "filter",
          }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ 
            opacity: 1, 
            y: 0,
            filter: [
              "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.6)) drop-shadow(0 0 40px hsl(var(--brandy-amber) / 0.3))",
              "drop-shadow(0 0 30px hsl(var(--brandy-amber) / 0.8)) drop-shadow(0 0 60px hsl(var(--brandy-gold) / 0.5))",
              "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.6)) drop-shadow(0 0 40px hsl(var(--brandy-amber) / 0.3))",
            ],
          }}
          transition={{
            opacity: { duration: 1, delay: 0.3 },
            y: { duration: 1, delay: 0.3 },
            filter: {
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }
          }}
        >
          <img src={brendiLogo} alt="БРЕНДИ" className="w-full h-auto" />
        </motion.div>

        <motion.p
          className="text-lg sm:text-xl md:text-3xl font-montserrat text-accent mb-4 md:mb-6 tracking-wide px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Музыка, которая льётся
        </motion.p>

        <motion.h3
          className="text-2xl sm:text-3xl md:text-5xl font-bebas text-primary mb-8 md:mb-12 tracking-wider px-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          style={{
            textShadow: "0 0 20px hsl(var(--brandy-amber) / 0.5)",
          }}
        >
          Пой до дна!
        </motion.h3>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <Button
            size="lg"
            onClick={scrollToVideo}
            className="bg-primary text-primary-foreground hover:bg-primary/90 font-bebas text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 rounded-full shadow-lg hover:shadow-primary/50 transition-all duration-300 active:scale-95"
          >
            Слушать
          </Button>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
