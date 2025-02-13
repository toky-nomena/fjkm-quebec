export function Spinner() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-primary"></div>
      <span className="sr-only">Loading...</span>
    </div>
  );
}
