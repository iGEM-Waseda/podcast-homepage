'use client';

import { useEffect, useRef, useState } from 'react';

function pick(z: number, light: boolean): string {
  const t = (z + 1) / 2;
  const h = ((320 + t * 50) % 360);
  if (light) {
    const s = 60 + t * 15;
    const l = 65 + t * 20;
    return `hsl(${h}, ${s}%, ${l}%)`;
  } else {
    const s = 80 + t * 15;
    const l = 44 + t * 14;
    return `hsl(${h}, ${s}%, ${l}%)`;
  }
}

export default function LoadingScreen() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fading, setFading] = useState(false);
  const [visible, setVisible] = useState(true);
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d')!;
    const W = canvas.width;
    const H = canvas.height;

    const N = 12;
    const amp = H * 0.16;
    const cx = W / 2;
    const cy = H / 2;
    const spread = W * 0.42;
    let phase = 0;

    function draw() {
      ctx.clearRect(0, 0, W, H);

      type Dot = { x: number; y: number; r: number; z: number; color: string };
      const dots: Dot[] = [];

      for (let i = 0; i < N; i++) {
        const t = i / (N - 1);
        const x = cx - spread / 2 + spread * t;
        const angle = t * Math.PI * 2 + phase;

        const z1 = Math.cos(angle);
        const y1 = cy + amp * Math.sin(angle);
        const r1 = 3 + 4.5 * ((z1 + 1) / 2);
        dots.push({ x, y: y1, r: r1, z: z1, color: pick(z1, true) });

        const z2 = Math.cos(angle + Math.PI);
        const y2 = cy + amp * Math.sin(angle + Math.PI);
        const r2 = 3 + 4.5 * ((z2 + 1) / 2);
        dots.push({ x, y: y2, r: r2, z: z2, color: pick(z2, false) });
      }

      dots.sort((a, b) => a.z - b.z);

      for (const d of dots) {
        const alpha = 0.5 + 0.5 * ((d.z + 1) / 2);
        ctx.globalAlpha = alpha;
        ctx.fillStyle = d.color;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      phase += 0.018;
      rafRef.current = requestAnimationFrame(draw);
    }

    draw();

    const t1 = setTimeout(() => setFading(true), 1800);
    const t2 = setTimeout(() => {
      setVisible(false);
      cancelAnimationFrame(rafRef.current);
    }, 2400);

    return () => {
      cancelAnimationFrame(rafRef.current);
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  if (!visible) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 9999,
      background: '#d9e3e8',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'opacity 0.8s ease',
      opacity: fading ? 0 : 1,
      pointerEvents: fading ? 'none' : 'auto',
    }}>
      <canvas ref={canvasRef} width={480} height={200} />
    </div>
  );
}
