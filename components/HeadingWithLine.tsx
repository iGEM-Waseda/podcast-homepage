'use client';

import { useEffect, useRef } from 'react';

type Props = {
  children: React.ReactNode;
  as?: 'h1' | 'h2' | 'h3';
  className?: string;
};

export default function HeadingWithLine({ children, as: Tag = 'h1', className = '' }: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref as React.RefObject<HTMLHeadingElement>} className={`heading ${className}`}>
      {children}
      <span className="heading-underline" aria-hidden="true" />
    </Tag>
  );
}
