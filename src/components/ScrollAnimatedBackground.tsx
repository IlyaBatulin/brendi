import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export const ScrollAnimatedBackground = () => {
  const { scrollYProgress } = useScroll();
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 768 : false,
  );

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  if (isMobile) {
    return null;
  }

  // Transform values based on scroll - optimized for mobile
  const leftGuitarX = useTransform(scrollYProgress, [0, 0.3, 0.6], [-400, -200, -50]);
  const rightGuitarX = useTransform(scrollYProgress, [0, 0.3, 0.6], [400, 200, 50]);
  const guitarOpacity = useTransform(scrollYProgress, [0.2, 0.4, 0.8], [0, 1, 0.6]);
  const liquidOpacity = useTransform(scrollYProgress, [0, 0.2, 0.5], [1, 0.6, 0.2]);
  const notesScale = useTransform(scrollYProgress, [0.1, 0.3, 0.5], [0.5, 1.2, 0.8]);

  return (
    <div
      className="fixed inset-0 pointer-events-none z-0"
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: "1000px",
      }}
    >
      {/* Flowing Brandy Streams - fade out as guitars appear */}
      <motion.div
        style={{
          opacity: liquidOpacity,
          willChange: "opacity",
          transform: "translateZ(0)",
        }}
        className="absolute inset-0"
      >
        {/* Left stream */}
        <motion.div
          className="absolute left-[15%] top-0 bottom-0 w-2 md:w-3"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--brandy-amber)), hsl(var(--brandy-gold)), transparent)",
            filter: "blur(8px)",
            willChange: "opacity, transform",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Right stream */}
        <motion.div
          className="absolute right-[15%] top-0 bottom-0 w-2 md:w-3"
          style={{
            background:
              "linear-gradient(to bottom, transparent, hsl(var(--brandy-amber)), hsl(var(--brandy-gold)), transparent)",
            filter: "blur(8px)",
            willChange: "opacity, transform",
          }}
          animate={{
            opacity: [0.3, 0.7, 0.3],
            scaleX: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />

        {/* Additional flowing streams */}
        {[...Array(4)].map((_, i) => (
          <motion.div
            key={`stream-${i}`}
            className="absolute top-0 bottom-0 w-1"
            style={{
              left: `${20 + i * 15}%`,
              background:
                "linear-gradient(to bottom, transparent, hsl(var(--brandy-amber) / 0.3), transparent)",
              filter: "blur(6px)",
              willChange: "opacity",
            }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 2 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </motion.div>

      {/* Musical Notes */}
      <motion.div
        style={{
          opacity: guitarOpacity,
          scale: notesScale,
          willChange: "opacity, transform",
          transform: "translateZ(0)",
        }}
        className="absolute inset-0"
      >
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`left-note-${i}`}
            className="absolute text-primary/40"
            style={{
              left: `${10 + i * 5}%`,
              top: `${20 + i * 10}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              x: [-20, -40, -60],
              y: [0, -30, -50],
              rotate: [0, -15, -30],
              opacity: [0.2, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.2,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </motion.div>
        ))}

        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`right-note-${i}`}
            className="absolute text-primary/40"
            style={{
              right: `${10 + i * 5}%`,
              top: `${20 + i * 10}%`,
              willChange: "transform, opacity",
            }}
            animate={{
              x: [20, 40, 60],
              y: [0, -30, -50],
              rotate: [0, 15, 30],
              opacity: [0.2, 0.6, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
              delay: i * 0.2,
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </motion.div>
        ))}
      </motion.div>

      {/* Left Electric Guitar */}
      <motion.div
        style={{
          x: leftGuitarX,
          opacity: guitarOpacity,
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        className="absolute left-0 top-1/4 w-48 lg:w-64"
      >
        <svg
          viewBox="0 0 200 600"
          className="w-full h-auto drop-shadow-2xl"
          style={{
            filter: "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.6))",
          }}
        >
          {/* Guitar body */}
          <ellipse cx="100" cy="400" rx="70" ry="90" fill="hsl(var(--brandy-amber))" />
          <ellipse cx="100" cy="400" rx="50" ry="70" fill="hsl(var(--brandy-gold))" />
          <ellipse cx="100" cy="400" rx="30" ry="40" fill="hsl(var(--brandy-red))" />

          {/* Neck */}
          <rect x="85" y="50" width="30" height="350" fill="hsl(var(--brandy-red))" rx="5" />

          {/* Frets */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="85"
              y1={70 + i * 25}
              x2="115"
              y2={70 + i * 25}
              stroke="hsl(var(--brandy-gold))"
              strokeWidth="2"
            />
          ))}

          {/* Strings */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`string-${i}`}
              x1={90 + i * 5}
              y1="60"
              x2={90 + i * 5}
              y2="400"
              stroke="hsl(var(--brandy-gold))"
              strokeWidth="1"
              animate={{
                strokeWidth: [1, 1.5, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Headstock */}
          <rect x="75" y="20" width="50" height="40" fill="hsl(var(--brandy-red))" rx="8" />

          {/* Tuning pegs */}
          {[...Array(6)].map((_, i) => (
            <circle
              key={`peg-${i}`}
              cx={i < 3 ? 80 : 120}
              cy={30 + (i % 3) * 10}
              r="3"
              fill="hsl(var(--brandy-gold))"
            />
          ))}
        </svg>

        <motion.div
          className="absolute inset-0"
          animate={{
            filter: [
              "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.4))",
              "drop-shadow(0 0 40px hsl(var(--brandy-amber) / 0.8))",
              "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.4))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Right Electric Guitar */}
      <motion.div
        style={{
          x: rightGuitarX,
          opacity: guitarOpacity,
          willChange: "transform, opacity",
          transform: "translateZ(0)",
          backfaceVisibility: "hidden",
        }}
        className="absolute right-0 top-1/4 w-48 lg:w-64"
      >
        <svg
          viewBox="0 0 200 600"
          className="w-full h-auto drop-shadow-2xl scale-x-[-1]"
          style={{
            filter: "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.6))",
          }}
        >
          {/* Guitar body */}
          <ellipse cx="100" cy="400" rx="70" ry="90" fill="hsl(var(--brandy-amber))" />
          <ellipse cx="100" cy="400" rx="50" ry="70" fill="hsl(var(--brandy-gold))" />
          <ellipse cx="100" cy="400" rx="30" ry="40" fill="hsl(var(--brandy-red))" />

          {/* Neck */}
          <rect x="85" y="50" width="30" height="350" fill="hsl(var(--brandy-red))" rx="5" />

          {/* Frets */}
          {[...Array(12)].map((_, i) => (
            <line
              key={i}
              x1="85"
              y1={70 + i * 25}
              x2="115"
              y2={70 + i * 25}
              stroke="hsl(var(--brandy-gold))"
              strokeWidth="2"
            />
          ))}

          {/* Strings */}
          {[...Array(6)].map((_, i) => (
            <motion.line
              key={`string-${i}`}
              x1={90 + i * 5}
              y1="60"
              x2={90 + i * 5}
              y2="400"
              stroke="hsl(var(--brandy-gold))"
              strokeWidth="1"
              animate={{
                strokeWidth: [1, 1.5, 1],
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Headstock */}
          <rect x="75" y="20" width="50" height="40" fill="hsl(var(--brandy-red))" rx="8" />

          {/* Tuning pegs */}
          {[...Array(6)].map((_, i) => (
            <circle
              key={`peg-${i}`}
              cx={i < 3 ? 80 : 120}
              cy={30 + (i % 3) * 10}
              r="3"
              fill="hsl(var(--brandy-gold))"
            />
          ))}
        </svg>

        <motion.div
          className="absolute inset-0"
          animate={{
            filter: [
              "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.4))",
              "drop-shadow(0 0 40px hsl(var(--brandy-amber) / 0.8))",
              "drop-shadow(0 0 20px hsl(var(--brandy-amber) / 0.4))",
            ],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
};
