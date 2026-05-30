import { useEffect, useRef } from 'react';

const COLORS = [
  { r: 56, g: 189, b: 248 },   // sky
  { r: 59, g: 130, b: 246 },   // blue
  { r: 99, g: 102, b: 241 },   // indigo
  { r: 96, g: 165, b: 250 },   // blue-400
];

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationId = 0;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resize();

    const orbs = [
      { ox: 0.25, oy: 0.35, radius: 280, color: COLORS[0], speed: 0.0007, phase: 0 },
      { ox: 0.75, oy: 0.55, radius: 320, color: COLORS[2], speed: 0.0005, phase: 2 },
      { ox: 0.5, oy: 0.15, radius: 240, color: COLORS[1], speed: 0.0009, phase: 4 },
    ];

    const particles = Array.from({ length: 90 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2.5 + 0.8,
      speedX: (Math.random() - 0.5) * 0.6,
      speedY: (Math.random() - 0.5) * 0.6,
      opacity: Math.random() * 0.6 + 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulse: Math.random() * Math.PI * 2,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY, active: true };
    };

    const handleMouseLeave = () => {
      mouseRef.current.active = false;
    };

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Aurora orbs
      orbs.forEach((orb) => {
        const x = orb.ox * canvas.width + Math.sin(time * orb.speed + orb.phase) * 80;
        const y = orb.oy * canvas.height + Math.cos(time * orb.speed * 1.3 + orb.phase) * 60;
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.radius);
        gradient.addColorStop(0, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.18)`);
        gradient.addColorStop(0.5, `rgba(${orb.color.r}, ${orb.color.g}, ${orb.color.b}, 0.06)`);
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = gradient;
        ctx.fillRect(x - orb.radius, y - orb.radius, orb.radius * 2, orb.radius * 2);
      });

      // Mouse glow
      if (mouseRef.current.active) {
        const { x, y } = mouseRef.current;
        const glow = ctx.createRadialGradient(x, y, 0, x, y, 220);
        glow.addColorStop(0, 'rgba(56, 189, 248, 0.12)');
        glow.addColorStop(0.6, 'rgba(99, 102, 241, 0.05)');
        glow.addColorStop(1, 'rgba(0, 0, 0, 0)');
        ctx.fillStyle = glow;
        ctx.fillRect(x - 220, y - 220, 440, 440);
      }

      // Particles + connections
      particles.forEach((particle, index) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.pulse += 0.03;

        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Mouse attraction
        if (mouseRef.current.active) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 0) {
            particle.x += (dx / dist) * 0.4;
            particle.y += (dy / dist) * 0.4;
          }
        }

        const pulseOpacity = particle.opacity * (0.7 + Math.sin(particle.pulse) * 0.3);

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${pulseOpacity})`;
        ctx.fill();

        // Glow ring on larger particles
        if (particle.size > 2) {
          ctx.beginPath();
          ctx.arc(particle.x, particle.y, particle.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${particle.color.r}, ${particle.color.g}, ${particle.color.b}, ${pulseOpacity * 0.15})`;
          ctx.fill();
        }

        for (let j = index + 1; j < particles.length; j++) {
          const other = particles[j];
          const dx = particle.x - other.x;
          const dy = particle.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 160) {
            const alpha = 0.22 * (1 - distance / 160);
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(other.x, other.y);
            ctx.strokeStyle = `rgba(96, 165, 250, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      });

      animationId = requestAnimationFrame(animate);
    };

    animate();
    window.addEventListener('resize', resize);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', resize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none opacity-70"
    />
  );
};

export default AnimatedBackground;
