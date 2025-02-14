import { Title } from "@/components/ui/title";

export default function BlogPage() {
  return (
    <section
      id="programs"
      className="container flex min-h-[calc(100vh-3.5rem)] flex-col items-center justify-center space-y-16 py-24 md:py-32"
    >
      <div className="space-y-4 w-full">
        <Title className="text-center">Blog</Title>
        <p className="mx-auto max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8 text-center">
          Tous les articles du blog
        </p>
      </div>
      <div className="w-full max-w-4xl"></div>
    </section>
  );
}
