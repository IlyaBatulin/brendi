import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Card } from "./ui/card";
import nikolayPhoto from "@/assets/members/nikolay-batulin.jpg";
import ilyaPhoto from "@/assets/members/ilya-ilyin.jpg";
import andreyPhoto from "@/assets/members/andrey-andreev.jpg";
import alexeyPhoto from "@/assets/members/alexey-alekseev.jpg";
import filimonPhoto from "@/assets/members/filimon-basov.jpg";

const members = [
  {
    name: "Ник",
    role: "Вокал и гитара. Создатель",
    image: nikolayPhoto,
    objectPosition: "50% 20%",
  },
  {
    name: "Ильич",
    role: "Гитара и бэк-вокал. Архитектор",
    image: ilyaPhoto,
    objectPosition: "50% 22%",
  },
  {
    name: "Дима",
    role: "Соло-гитара и бэк-вокал. Энергетик",
    image: alexeyPhoto,
    objectPosition: "50% 18%",
  },
  {
    name: "Петр",
    role: "Бас-гитара и бэк-вокал. Гравитация",
    image: filimonPhoto,
    objectPosition: "50% 10%",
  },
  {
    name: "Саня",
    role: "Ударные и бэк-вокал. Сердцебиение",
    image: andreyPhoto,
    objectPosition: "50% 22%",
  },
];

export const BandMembersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Background with liquid reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/10 to-background">
        <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-primary/5 to-transparent blur-xl" />
      </div>

      <div className="container mx-auto max-w-6xl relative z-10 px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bebas text-center mb-10 md:mb-16 text-foreground tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Участники
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-6 md:gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              <Card className="bg-card border-primary/20 overflow-hidden group cursor-pointer touch-manipulation">
                <div className="relative aspect-[3/4] md:aspect-square overflow-hidden">
                  <motion.img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                    style={{
                      transform: "translateZ(0)",
                      objectPosition: member.objectPosition,
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/65 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <motion.div
                    className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/50 transition-all duration-300"
                    style={{
                      boxShadow: "0 0 0px rgba(217, 148, 85, 0)",
                    }}
                    whileHover={{
                      boxShadow: "0 0 30px rgba(217, 148, 85, 0.4)",
                    }}
                  />
                </div>

                <div className="p-5 md:p-6 text-center space-y-2">
                  <h3 className="text-2xl font-bebas text-foreground tracking-wide">
                    {member.name}
                  </h3>
                  <p className="text-sm md:text-base text-accent font-montserrat">
                    {member.role}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
