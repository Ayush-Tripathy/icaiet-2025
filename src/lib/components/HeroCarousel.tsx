import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images: string[] = [
    "/XIM-BG2.jpg",
    "/img1.JPG",
    "/img2.JPG",
];

const HeroCarousel: React.FC = () => {
    const [index, setIndex] = useState<number>(0);

    const nextSlide = (): void => {
        setIndex((prev) => (prev + 1) % images.length);
    };

    const prevSlide = (): void => {
        setIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
        );
    };

    // Auto slide every 5 seconds
    useEffect(() => {
        const interval: NodeJS.Timeout = setInterval(() => {
            nextSlide();
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-[80vh] overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.img
                    key={index}
                    src={images[index]}
                    alt="Conference Banner"
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6 }}
                    className="absolute w-full h-full object-cover"
                />
            </AnimatePresence>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Previous Button */}
            <button
                onClick={prevSlide}
                className="absolute z-20 left-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition"
                aria-label="Previous Slide"
            >
                <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
                onClick={nextSlide}
                className="absolute z-20 right-5 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-md p-3 rounded-full text-white hover:bg-white/40 transition"
                aria-label="Next Slide"
            >
                <ChevronRight size={28} />
            </button>

            {/* Pagination Dots */}
            <div className="absolute z-20 bottom-6 w-full flex justify-center gap-3">
                {images.map((_, i: number) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-3 h-3 rounded-full transition ${index === i ? "bg-white" : "bg-white/40"
                            }`}
                        aria-label={`Go to slide ${i + 1}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
