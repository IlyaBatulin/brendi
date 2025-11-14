import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import photo1 from "@/assets/gallery/photo-1.jpg";
import photo2 from "@/assets/gallery/photo-2.jpg";
import photo3 from "@/assets/gallery/photo-3.jpg";
import photo4 from "@/assets/gallery/photo-4.jpg";
import photo7 from "@/assets/gallery/photo-7.jpg";
import photo8 from "@/assets/gallery/photo-8.jpg";
import photo9 from "@/assets/gallery/photo-9.jpg";
import photo10 from "@/assets/gallery/photo-10.jpg";

const photos = [
  {
    url: photo1,
    caption: "Живое выступление",
  },
  {
    url: photo2,
    caption: "На сцене",
  },
  {
    url: photo3,
    caption: "Концерт в клубе",
  },
  {
    url: photo4,
    caption: "Выступление группы",
  },
  {
    url: photo7,
    caption: "Шоу продолжается",
  },
  {
    url: photo8,
    caption: "На сцене",
  },
  {
    url: photo9,
    caption: "Концерт",
  },
  {
    url: photo10,
    caption: "Выступление",
  },
];

export const PhotoGallerySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section ref={ref} className="relative py-20 px-4 overflow-hidden">
      {/* Dark gradient with reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-secondary/20">
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-primary/10 via-accent/5 to-transparent blur-2xl" />
      </div>

      <div className="container mx-auto max-w-7xl relative z-10 px-4">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-6xl font-bebas text-center mb-10 md:mb-16 text-foreground tracking-wider"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          Фотогалерея
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group cursor-pointer relative aspect-[4/3] overflow-hidden rounded-lg touch-manipulation"
              onClick={() => setSelectedPhoto(photo)}
              style={{
                // Оптимизация для мобильных
                transform: "translateZ(0)",
                willChange: "transform",
              }}
            >
              <motion.img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
                style={{
                  // Улучшение производительности изображений
                  transform: "translateZ(0)",
                }}
              />

              {/* Gold flicker effect */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent group-hover:border-primary/60 transition-all duration-300 rounded-lg"
                style={{
                  boxShadow: "0 0 0px rgba(217, 148, 85, 0)",
                }}
                whileHover={{
                  boxShadow: "0 0 20px rgba(217, 148, 85, 0.4)",
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog */}
      <Dialog open={!!selectedPhoto} onOpenChange={() => setSelectedPhoto(null)}>
        <DialogContent className="max-w-4xl bg-background/95 border-primary/30">
          {selectedPhoto && (
            <img
              src={selectedPhoto.url}
              alt={selectedPhoto.caption}
              className="w-full rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};
