
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { socialLinks } from '@/lib/data';
import { AnimatedSection } from '../animated-section';
import { useToast } from '@/hooks/use-toast';
import { Loader2 } from 'lucide-react';

export default function Contact() {
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  
  const formspreeEndpoint = "https://formspree.io/f/chsidahmed05@gmail.com";

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
        form.reset();
      } else {
        throw new Error('Failed to send message.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not send your message. Please try again later.',
      });
    } finally {
      setIsLoading(false);
    }
  }


  return (
    <section id="contact" className="w-full py-24 md:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <AnimatedSection>
          <div className="text-center space-y-2 mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl font-headline">Get In Touch</h2>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Have a project in mind, want to collaborate, or just say hi? My inbox is always open.
            </p>
          </div>
          <div className="grid gap-12 lg:grid-cols-5">
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Send me a message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" type="text" name="name" required />
                    <Input placeholder="Your Email" type="email" name="_replyto" required />
                  </div>
                  <Textarea placeholder="Your Message" rows={5} name="message" required />
                  <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                    {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
            <div className="lg:col-span-2 space-y-6">
                 <h3 className="text-xl font-semibold font-headline">Find me on social media</h3>
                 <div className="flex flex-col gap-4">
                    {socialLinks.map((link) => (
                        <Button key={link.name} variant="outline" asChild className="justify-start gap-4 text-md p-6 rounded-lg">
                            <a href={link.url} target="_blank" rel="noopener noreferrer">
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
