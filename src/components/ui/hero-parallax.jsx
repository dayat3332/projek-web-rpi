import React from "react";
import { motion } from "framer-motion";

export const HeroParallax = ({ products }) => {
  const firstRow = products.slice(0, 8);
  const secondRow = products.slice(8, 16);

  return (
    <div className="py-10 overflow-hidden antialiased relative flex flex-col">
      <Header />
      <div className="mt-10 flex flex-col gap-8">
        {/* Row 1 — scrolls to the left */}
        <MarqueeRow items={firstRow} direction="left" speed={25} />
        {/* Row 2 — scrolls to the right */}
        <MarqueeRow items={secondRow} direction="right" speed={30} />
      </div>
    </div>
  );
};

const MarqueeRow = ({ items, direction = "left", speed = 25 }) => {
  // Duplicate items for seamless infinite loop
  const duplicated = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden group">
      <motion.div
        className="flex gap-6 w-max"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: speed,
            ease: "linear",
          },
        }}
        whileHover={{ animationPlayState: "paused" }}
        style={{ willChange: "transform" }}
      >
        {duplicated.map((product, idx) => (
          <ProductCard product={product} key={`${product.title}-${idx}`} />
        ))}
      </motion.div>
    </div>
  );
};

export const Header = () => {
  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-16 px-4 w-full left-0 top-0">
      <h2 className="text-2xl md:text-7xl font-bold dark:text-white">
        Inovasi & Prestasi <br /> Robotika RPI
      </h2>
      <p className="max-w-2xl text-base md:text-xl mt-8 dark:text-neutral-200">
        Jelajahi berbagai pencapaian dan proyek terbaru dari UKM Robotika
        Politeknik Negeri Indramayu. Dari riset otonom hingga kontes robot
        nasional, kami terus berinovasi.
      </p>
    </div>
  );
};

export const ProductCard = ({ product }) => {
  return (
    <a
      href={product.link}
      className="group/product h-72 md:h-96 w-[22rem] md:w-[30rem] relative flex-shrink-0 rounded-xl overflow-hidden block"
    >
      <img
        src={product.thumbnail}
        height="600"
        width="600"
        className="object-cover object-center absolute h-full w-full inset-0 transition-transform duration-500 group-hover/product:scale-110"
        alt={product.title}
        loading="lazy"
      />
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-70 bg-gradient-to-t from-black/90 via-black/40 to-transparent pointer-events-none transition-opacity duration-300 rounded-xl"></div>
      <h3 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white font-semibold text-lg transition-all duration-300 translate-y-2 group-hover/product:translate-y-0">
        {product.title}
      </h3>
    </a>
  );
};
