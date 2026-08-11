import React, { useEffect, useState, useRef } from 'react';

interface StatCounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  duration?: number;
}

export const StatCounter: React.FC<StatCounterProps> = ({
  value,
  prefix = '',
  suffix = '',
  label,
  duration = 1500,
}) => {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          let start = 0;
          const steps = 30;
          const stepTime = duration / steps;
          const increment = value / steps;

          const timer = setInterval(() => {
            start += increment;
            if (start >= value) {
              setCount(value);
              clearInterval(timer);
            } else {
              setCount(Math.ceil(start));
            }
          }, stepTime);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [value, duration, hasAnimated]);

  return (
    <div
      ref={elementRef}
      className="p-6 rounded-2xl bg-slate-900/60 dark:bg-slate-900/60 light:bg-white/80 border border-slate-800/80 dark:border-slate-800/80 light:border-slate-200 backdrop-blur-xl shadow-xl hover:border-cyan-500/40 transition-all duration-300 group"
    >
      <div className="text-3xl lg:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-emerald-400 font-mono tracking-tight group-hover:scale-105 transition-transform origin-left">
        {prefix}
        {count}
        {suffix}
      </div>
      <p className="mt-2 text-xs lg:text-sm font-medium text-slate-400 dark:text-slate-400 light:text-slate-600">
        {label}
      </p>
    </div>
  );
};
