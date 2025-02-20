import { LoaderCircle } from "lucide-react";

export function Spinner() {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <LoaderCircle className="animate-spin text-primary" size={40} />
      <span className="sr-only">Loading...</span>
    </div>
  );
}
