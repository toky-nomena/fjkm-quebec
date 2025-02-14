import { getBranches } from "@/components/branches/branches";
import { get } from "http";
import { redirect } from "next/navigation";

export default async function BranchesPage() {
  const branches = await getBranches();
  return redirect("/branches/" + branches[0].slug);
}
