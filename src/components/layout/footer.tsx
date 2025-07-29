export default function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-center px-4 md:px-6">
        <p className="text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
