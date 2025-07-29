import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills } from '@/lib/data';
import { AnimatedSection } from '../animated-section';

export default function About() {
  return (
    <section id="about" className="w-full py-24 md:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="grid gap-10 lg:grid-cols-3">
            <div className="space-y-4 lg:col-span-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">About Me</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Hello! I&apos;m a dedicated and results-driven software developer with a knack for building beautiful and functional websites. With a strong foundation in both front-end and back-end technologies, I enjoy turning complex problems into simple, elegant solutions.
                </p>
                <p>
                  My journey in web development began with a deep curiosity for how things work on the internet. Since then, I&apos;ve been honing my skills in various technologies, always eager to learn and adapt to the ever-evolving landscape of the web. I thrive in collaborative environments and am passionate about creating applications that provide real value to users.
                </p>
              </div>
            </div>
            <div className="relative group flex justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="https://placehold.co/400x400.png"
                alt="Your Name"
                width={400}
                height={400}
                data-ai-hint="developer portrait"
                className="relative object-cover rounded-lg aspect-square"
              />
            </div>
          </div>
        </AnimatedSection>
        <AnimatedSection delay={200}>
          <Card className="mt-16">
            <CardHeader>
              <CardTitle>My Skillset</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                  <Badge key={skill.name} variant="secondary" className="text-base px-4 py-2 flex items-center gap-2">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span>{skill.name}</span>
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </section>
  );
}
