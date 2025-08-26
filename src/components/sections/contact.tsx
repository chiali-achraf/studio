"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimatedSection } from "../animated-section";
import { socialLinks } from "@/lib/data";

export default function Contact() {
  const formspreeEndpoint = "https://formspree.io/f/xdkdjvvw"; // ✅ Your form ID

  return (
    <section id="contact" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          {/* Title & Subtitle */}
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">
              Get In Touch
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind, want to collaborate, or just say hi? My inbox is always open.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-5">
            {/* Contact Form */}
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form
                  className="space-y-4"
                  action={formspreeEndpoint}
                  method="POST"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input
                      placeholder="Your Name"
                      type="text"
                      name="name"
                      required
                    />
                    <Input
                      placeholder="Your Email"
                      type="email"
                      name="email"
                      required
                    />
                  </div>
                  <Textarea
                    placeholder="Your Message"
                    rows={5}
                    name="message"
                    required
                  />
                  <Button type="submit" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Social Media Section */}
            <div className="lg:col-span-2 space-y-6">
              <h3 className="text-xl font-semibold font-headline">
                Find me on social media
              </h3>
              <div className="flex flex-col gap-4">
                {socialLinks.map((link) => (
                  <Button
                    key={link.name}
                    variant="outline"
                    asChild
                    className="justify-start gap-4 text-md p-6 rounded-lg"
                  >
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <link.icon className="h-6 w-6 text-primary" />
                      <span>{link.name}</span>
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
