import { getBranches } from "../../../components/branches/branches";
import { BranchNavLink } from "./branch-nav-link";

export default async function BranchSelector() {
  const branches = await getBranches();
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <div className="flex flex-wrap gap-3 overflow-visible items-center justify-center">
        {branches.map((branch) => {
          return <BranchNavLink branch={branch} />;
        })}
      </div>
    </div>
  );
}
