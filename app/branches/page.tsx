import { branches } from "@/components/branches/branches";
import { redirect } from "next/navigation";

export default function BranchesPage() {
  return redirect(
    "/branches/" + branches[Math.floor(Math.random() * branches.length)].slug
  );
}
