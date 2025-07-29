import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { ProjectDescriptionGenerator } from '../ai/project-description-generator';

export default function Projects() {
  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Work</h2>
            <p className="text-muted-foreground max-w-lg">
              Here are some of the projects I&apos;m proud of. Each one represents a challenge I was excited to tackle.
            </p>
          </div>
          <ProjectDescriptionGenerator />
        </AnimatedSection>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <Card className="h-full overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2">
                <CardHeader className="p-0">
                  <div className="relative h-60 w-full overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      data-ai-hint={project.imageAiHint}
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex justify-end gap-2">
                    {project.liveUrl && (
                        <Button asChild variant="outline" size="sm">
                            <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                Live Demo <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                    {project.repoUrl && (
                        <Button asChild variant="default" size="sm">
                            <Link href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                GitHub <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    )}
                </CardFooter>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
