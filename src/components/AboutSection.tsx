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
          className="space-y-4 md:space-y-6 text-base sm:text-lg md:text-xl font-montserrat text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.p
            className="text-center text-2xl sm:text-3xl md:text-4xl font-bebas text-primary mb-6 md:mb-8 tracking-wider"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Неразбавленный рок-н-ролл из Петербурга
          </motion.p>

          <p className="text-center">
            Мы — <span className="text-primary font-bold">«Бренди»</span>, пять музыкантов, которые верят в живой звук и честный драйв.
          </p>

          <p className="text-center">
            Наши концерты — это исповедь усилителей, тёплый вокал и подписи на пластинках, оставленные после каждого сета.
          </p>

          <p className="text-center">
            Мы рассказываем истории о городе на Неве, где вдохновение смешивается с дождём и неоном ночных проспектов.
          </p>

          <p className="text-center text-primary font-bebas text-xl md:text-2xl tracking-wider">
            Пой до дна! Оставь сомнения за дверью клуба и пой вместе с нами.
          </p>

          <motion.div
            className="pt-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <p className="text-center text-accent italic">
              Каждое выступление — это атмосфера, эмоция и жизнь, которые хочется забрать с собой.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
