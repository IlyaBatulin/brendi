import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Spotlight background effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto max-w-4xl relative z-10 px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bebas text-center mb-8 md:mb-12 text-foreground tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          О группе
        </motion.h2>

        <motion.div
          className="text-base sm:text-lg md:text-xl font-montserrat text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-center">
            Мы — БРЕНДИ, рок-группа из Петербурга. Наши песни — о жизни без прикрас, о силе и уязвимости, о любви и расставании. Наша музыка — это коктейль из звенящего вокала, цепляющих гитарных риффов, упругого баса и ритмичной пульсации ударных. Пропорции выверены, эффект — сногсшибателен. Хочешь почувствовать вкус неразбавленного петербургского рока? Приходи на наш концерт, закажи бокал для вокала и вместе с нами пой до дна!
          </p>
        </motion.div>
      </div>
    </section>
  );
};
