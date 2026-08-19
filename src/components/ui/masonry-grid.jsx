import React from 'react';

/**
 * Utility to merge class names (simplified cn replacement)
 */
function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

/**
 * A component to inject the necessary CSS for the MasonryGrid animations.
 */
const MasonryGridCSS = () => (
  <style>{`
    @keyframes slide-in {
      from {
        opacity: 0;
        transform: scale(0.9) rotate(calc(var(--side, 1) * (3deg * var(--amp, 1))));
      }
      to {
        opacity: 1;
        transform: scale(1) rotate(0deg);
      }
    }

    .masonry-card-wrapper {
      transform-origin: center bottom;
    }

    @media (prefers-reduced-motion: no-preference) {
      .masonry-card-wrapper {
        animation: slide-in 0.6s ease-out both;
        animation-timeline: view();
        animation-range: entry 0% cover 20%;
      }
    }
  `}</style>
);

/**
 * A single card component within the masonry grid.
 */
const MasonryCard = ({ item, className, style, ...props }) => (
  <div className={cn('flex flex-col', className)} style={style} {...props}>
    <article className="bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 p-4 space-y-3 h-full flex flex-col justify-between group">
      <div className="overflow-hidden rounded-xl bg-slate-100 aspect-[4/3] relative">
        <img
          src={item.src}
          alt={item.alt}
          height={500}
          width={500}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
      </div>
      <div className="space-y-2 flex-1 flex flex-col justify-between">
        <p className="text-sm font-medium text-slate-700 leading-snug line-clamp-2">
          {item.content}
        </p>
        <a
          href={item.linkHref}
          className="text-xs font-bold text-blue-600 hover:text-blue-700 inline-flex items-center gap-1 mt-auto group-hover:translate-x-1 transition-transform"
        >
          {item.linkText} →
        </a>
      </div>
    </article>
  </div>
);

/**
 * A responsive masonry grid that animates items into view on scroll.
 */
const MasonryGrid = React.forwardRef(({ items, className, ...props }, ref) => {
  return (
    <>
      <MasonryGridCSS />
      <div
        ref={ref}
        className={cn(
          'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full',
          className,
        )}
        {...props}
      >
        {items.map((item, index) => (
          <MasonryCard
            key={item.id}
            item={item}
            className="masonry-card-wrapper"
            style={{
              '--side': index % 2 === 0 ? 1 : -1,
              '--amp': (index % 3) + 1,
            }}
          />
        ))}
      </div>
    </>
  );
});

MasonryGrid.displayName = 'MasonryGrid';

export { MasonryGrid, MasonryCard };
