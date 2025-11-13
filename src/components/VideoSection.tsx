import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import previewImage from "@/assets/gallery/photo-1.jpg";

const VIDEO_EMBED_URL =
  "https://rutube.ru/play/embed/3ef26e8f702b2052df66f7dd54885636?p=b7eWyN5wVSGWgk6yTQgqHg";
const VIDEO_WATCH_URL =
  "https://rutube.ru/video/private/3ef26e8f702b2052df66f7dd54885636/?p=b7eWyN5wVSGWgk6yTQgqHg";

export const VideoSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="video" ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background with stage lights effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background">
        <div className="absolute inset-0 opacity-20">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-0 w-32 h-full bg-gradient-radial from-primary/30 to-transparent"
              style={{
                left: `${25 + i * 25}%`,
                willChange: "opacity",
              }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bebas text-center mb-10 md:mb-16 text-foreground tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Живые выступления
        </motion.h2>

        <motion.div
          className="flex flex-col items-center gap-8 md:gap-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Desktop/Tablet RuTube embed */}
          <motion.div
            className="hidden md:block w-full max-w-5xl aspect-video rounded-[24px] overflow-hidden shadow-[0_25px_60px_-20px_rgba(217,148,85,0.45)] border border-primary/40 backdrop-blur-sm"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <iframe
              src={VIDEO_EMBED_URL}
              className="w-full h-full"
              title="Бренди — Живое выступление"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          </motion.div>

          {/* Mobile preview image linking to RuTube */}
          <motion.a
            href={VIDEO_WATCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden w-full max-w-5xl aspect-video rounded-[24px] overflow-hidden shadow-[0_20px_40px_-15px_rgba(217,148,85,0.5)] border border-primary/30 relative group"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileTap={{ scale: 0.97 }}
          >
            <img
              src={previewImage}
              alt="Бренди — живое выступление"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-background/20 to-transparent" />
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0.85 }}
              whileHover={{ opacity: 1 }}
            >
              <div className="flex items-center gap-3 bg-black/70 text-white px-6 py-3 rounded-full font-bebas tracking-wide text-lg shadow-lg border border-white/10">
                <span className="text-primary">▶</span> Смотреть на RuTube
              </div>
            </motion.div>
            <motion.div
              className="absolute -inset-[2px] rounded-[26px] border border-primary/40 blur-sm opacity-0 group-hover:opacity-60"
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.6 }}
              transition={{ duration: 0.4 }}
            />
          </motion.a>

          <motion.div
            className="flex flex-col items-center gap-4 text-center w-full"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button
              asChild
              size="lg"
              className="hidden md:inline-flex bg-primary hover:bg-primary/90 text-black font-bebas text-lg md:text-xl px-6 py-5 md:px-8 md:py-6 rounded-full shadow-[0_15px_35px_-15px_rgba(217,148,85,0.7)] hover:shadow-primary/40 transition-all duration-300 active:scale-95"
            >
              <a href={VIDEO_WATCH_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Смотреть на RuTube
                <ExternalLink className="w-5 h-5" />
              </a>
            </Button>

            <div className="flex flex-col items-center gap-3">
              <p className="text-sm sm:text-base md:text-lg font-montserrat text-muted-foreground/80 max-w-3xl">
                Неразбавленный рок-н-ролл из Петербурга в живом исполнении. Подпевай, аплодируй, пой до дна — и обязательно делись ссылкой с друзьями.
              </p>
              <motion.span
                className="md:hidden inline-flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-primary/80 font-bebas"
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              >
                тапни, чтобы открыть RuTube
              </motion.span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
