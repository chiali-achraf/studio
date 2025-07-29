import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AnimatedSection } from '../animated-section';

export default function Hero() {
  return (
    <section id="hero" className="relative w-full h-[calc(100vh-5rem)] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.05] dark:bg-grid-black/[0.2] [mask-image:linear-gradient(to_bottom,transparent_0%,black_25%,black_75%,transparent_100%)]"></div>
        <div className="absolute inset-0 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container px-4 md:px-6 z-10">
        <AnimatedSection className="flex flex-col items-center gap-6">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl font-headline">
              Hi, I&apos;m Your Name
            </h1>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A passionate full-stack developer specializing in creating modern, responsive, and user-friendly web applications.
            </p>
          </div>
          <div className="rounded-md">
            <Button asChild size="lg" className="glow-on-hover rounded-md">
              <Link href="#projects">
                View My Work
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
