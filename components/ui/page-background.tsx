export function PageBackground() {
  return (
    <div className="fixed inset-0 pointer-events-none">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      <div className="absolute right-0 top-0 h-[200px] w-[200px] sm:h-[500px] sm:w-[500px] bg-blue-500/5 blur-[50px] sm:blur-[100px]" />
      <div className="absolute bottom-0 left-0 h-[200px] w-[200px] sm:h-[500px] sm:w-[500px] bg-purple-500/5 blur-[50px] sm:blur-[100px]" />
    </div>
  );
}
