"use client";

import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { projects } from "@/lib/data";
import { AnimatedSection } from "../animated-section";
import { ProjectDescriptionGenerator } from "../ai/project-description-generator";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { useState } from "react";

export default function Projects() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

  const handleOpen = (project: typeof projects[0]) => {
    setSelectedProject(project);
    setOpen(true);
  };

  return (
    <section id="projects" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">My Work</h2>
            <p className="text-muted-foreground max-w-lg">
              Here are some of my projects.
            </p>
          </div>
          <ProjectDescriptionGenerator />
        </AnimatedSection>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 100}>
              <Card
                onClick={() => handleOpen(project)}
                className="relative h-full overflow-hidden group transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2 cursor-pointer"
              >
                {/* Overlay with "View Details" */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-opacity flex items-center justify-center z-10">
                  <span className="text-white text-sm font-medium bg-black/50 px-3 py-1 rounded-full">
                    🔍 View Details
                  </span>
                </div>

                <CardHeader className="p-0">
                  <div className="relative h-60 w-full bg-black">
                    <Image
                      src={project.images[0]}
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </CardHeader>

                <CardContent className="p-6 space-y-4">
                  <CardTitle className="font-headline text-xl">{project.title}</CardTitle>
                  <p className="text-muted-foreground text-sm">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Popup for project images */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-[400px] p-0 overflow-hidden">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle>{selectedProject.title}</DialogTitle>
              </DialogHeader>

              <Swiper
                modules={[Navigation, Pagination]}
                navigation
                pagination={{ clickable: true }}
                className="w-full"
              >
                {selectedProject.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="relative w-full aspect-[9/16] bg-black">
                      <Image
                        src={img}
                        alt={`${selectedProject.title} ${i + 1}`}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}
