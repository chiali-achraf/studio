'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Wand2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { generateProjectDescription, type GenerateProjectDescriptionInput } from '@/ai/flows/generate-project-description';
import { useToast } from '@/hooks/use-toast';

const FormSchema = z.object({
  techStack: z.string().min(3, { message: 'Please list some technologies.' }),
  projectGoals: z.string().min(10, { message: 'Please describe the project goals.' }),
});

export function ProjectDescriptionGenerator() {
  const [isOpen, setIsOpen] = useState(false);
  const [generatedDescription, setGeneratedDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      techStack: '',
      projectGoals: '',
    },
  });

  async function onSubmit(data: GenerateProjectDescriptionInput) {
    setIsLoading(true);
    setGeneratedDescription('');
    try {
      const result = await generateProjectDescription(data);
      if (result.description) {
        setGeneratedDescription(result.description);
      } else {
        throw new Error('Failed to generate description.');
      }
    } catch (error) {
      console.error(error);
      toast({
        variant: 'destructive',
        title: 'Error',
        description: 'Could not generate project description. Please try again.',
      });
    } finally {
      setIsLoading(false);
    }
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedDescription).then(() => {
        toast({ title: "Copied!", description: "Description copied to clipboard." });
    }, (err) => {
        toast({ variant: "destructive", title: "Error", description: "Failed to copy." });
    });
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button>
          <Wand2 className="mr-2 h-4 w-4" />
          AI Describe Project
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[525px]">
        <DialogHeader>
          <DialogTitle>AI Project Description Generator</DialogTitle>
          <DialogDescription>
            Enter your project&apos;s tech stack and goals, and let AI craft a compelling description for you.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="techStack"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Tech Stack</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., React, Node.js, Python" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectGoals"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Goals</FormLabel>
                  <FormControl>
                    <Textarea placeholder="e.g., E-commerce platform for selling handmade goods" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
              Generate Description
            </Button>
          </form>
        </Form>
        {generatedDescription && (
          <div className="space-y-4 pt-4">
             <DialogHeader>
                 <DialogTitle>Generated Description</DialogTitle>
             </DialogHeader>
            <Textarea readOnly value={generatedDescription} rows={6} className="bg-secondary"/>
            <Button onClick={copyToClipboard} className="w-full">Copy to Clipboard</Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
