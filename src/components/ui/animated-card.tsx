import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

// --- PROPS INTERFACE ---
export interface JobCardProps {
  companyLogo?: React.ReactNode;
  companyName?: string;
  jobTitle?: string;
  salary?: string;
  tags?: string[];
  postedDate?: string;
  variant?: "pink" | "yellow" | "blue" | "purple" | "emerald";
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}

// --- BORDER VARIANT STYLES ---
const variantClasses = {
  pink: "border-t-pink-500",
  yellow: "border-t-yellow-500",
  blue: "border-t-blue-500",
  purple: "border-t-purple-500",
  emerald: "border-t-emerald-500",
};

/**
 * A responsive, theme-adaptive card with a 3D tilt effect on hover.
 */
export const AnimatedJobCard = ({
  companyLogo,
  companyName,
  jobTitle,
  salary,
  tags = [],
  postedDate,
  variant = "purple",
  className,
  onClick,
  children,
}: JobCardProps) => {
  // --- FULL ANIMATION LOGIC ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const cardRef = React.useRef<HTMLDivElement>(null);

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left - width / 2);
    mouseY.set(e.clientY - top - height / 2);
  };

  const onMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Transform mouse position into a 3D rotation
  const rotateX = useTransform(mouseY, [-150, 150], [10, -10]);
  const rotateY = useTransform(mouseX, [-150, 150], [-10, 10]);

  // Apply spring physics for a smooth return effect
  const springConfig = { stiffness: 300, damping: 20, mass: 0.5 };
  const springRotateX = useSpring(rotateX, springConfig);
  const springRotateY = useSpring(rotateY, springConfig);

  return (
    <motion.div
      layout
      onClick={onClick}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        rotateX: springRotateX,
        rotateY: springRotateY,
        transformStyle: "preserve-3d",
      }}
      className={cn(
        "relative w-full shrink-0 transform-gpu cursor-pointer overflow-hidden rounded-2xl bg-white p-7 shadow-md transition-shadow duration-300 hover:shadow-2xl border border-slate-200/90",
        "border-t-4",
        variantClasses[variant] || "border-t-blue-500",
        className
      )}
      aria-label={jobTitle && companyName ? `${jobTitle} at ${companyName}` : undefined}
      tabIndex={0}
    >
      <div style={{ transform: "translateZ(20px)" }} className="space-y-4 h-full flex flex-col justify-between">
        {children ? (
          children
        ) : (
          <>
            {/* Header */}
            {(companyLogo || companyName) && (
              <div className="flex items-center space-x-3">
                {companyLogo && (
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-100">
                    {companyLogo}
                  </div>
                )}
                {companyName && (
                  <span className="font-semibold text-slate-500 text-sm">{companyName}</span>
                )}
              </div>
            )}

            {/* Details */}
            <div>
              {jobTitle && <h3 className="text-lg font-bold text-slate-900">{jobTitle}</h3>}
              {salary && <p className="text-sm text-blue-600 mt-1">{salary}</p>}
            </div>

            {/* Tags */}
            {tags && tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs font-medium text-slate-600"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            {/* Footer */}
            {postedDate && (
              <div className="pt-2 text-right text-xs text-slate-400">
                {postedDate}
              </div>
            )}
          </>
        )}
      </div>
    </motion.div>
  );
};

export default AnimatedJobCard;
