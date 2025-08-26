import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { skills, education } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { Phone, School } from 'lucide-react';
import { Separator } from '../ui/separator';

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
  Hello! I'm a dedicated and results-driven mobile,back-end developer with a passion for crafting smooth, intuitive apps. I specialize in native Android development, focusing on building fast, reliable, and beautiful mobile experiences.
</p>
<p>
  My journey into mobile development started with a curiosity about how apps work behind the scenes and how the operation system works . Since then, I’ve been diving deep into Android technologies, constantly learning and evolving with the platform.then started in backend journey , I enjoy working on meaningful projects and love collaborating with others to bring ideas to life in the palm of your hand.
</p>

              </div>
            </div>
            <div className="relative group flex justify-center">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <Image
                src="/images/me.jpg"
                alt="Your Name"
                width={400}
                height={400}
                data-ai-hint="developer portrait"
                className="relative object-cover rounded-lg aspect-square"
              />
            </div>
          </div>
        </AnimatedSection>
        <div className="grid md:grid-cols-2 gap-8 mt-16">
            <AnimatedSection delay={200}>
              <Card className="h-full">
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
            <AnimatedSection delay={300}>
               <Card className="h-full">
                    <CardHeader>
                        <CardTitle>Education</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        {education.map((edu, index) => (
                            <div key={edu.institution}>
                                <div className="flex items-start gap-4">
                                    <div className="mt-1">
                                      <School className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold">{edu.institution}</h3>
                                        <p className="text-muted-foreground text-sm">{edu.degree}</p>
                                        <p className="text-muted-foreground text-xs">{edu.period}</p>
                                    </div>
                                </div>
                                {index < education.length - 1 && <Separator className="my-4" />}
                            </div>
                        ))}
                    </CardContent>
                </Card>
            </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
