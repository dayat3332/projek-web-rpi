"use client" 

import * as React from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
 
export interface MagicTextProps {
  text: string;
  className?: string;
  wordClassName?: string;
  offset?: [string, string];
}
 
interface WordProps {
  children: string;
  progress: any;
  range: number[];
  className?: string;
}
 
const Word: React.FC<WordProps> = ({ children, progress, range, className }) => {
  const opacity = useTransform(progress, range, [0, 1]);
 
  return (
    <span className={`relative mr-1.5 inline-block ${className || ''}`}>
      <span className="opacity-20 select-none">{children}</span>
      <motion.span className="absolute inset-0" style={{ opacity: opacity }}>
        {children}
      </motion.span>
    </span>
  );
};
 
export const MagicText: React.FC<MagicTextProps> = ({
  text,
  className = "",
  wordClassName = "",
  offset = ["start 0.95", "start 0.35"]
}) => {
  const container = useRef<HTMLParagraphElement>(null);
 
  const { scrollYProgress } = useScroll({
    target: container,
    offset: offset as any,
  });

  const words = (text || "").split(" ");
 
  return (
    <p ref={container} className={`flex flex-wrap items-baseline ${className}`}>
      {words.map((word, i) => {
        const start = i / words.length;
        const end = start + 1 / words.length;
 
        return (
          <Word key={i} progress={scrollYProgress} range={[start, end]} className={wordClassName}>
            {word}
          </Word>
        );
      })}
    </p>
  );
};

export default MagicText;
