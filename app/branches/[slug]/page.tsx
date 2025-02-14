import { branches } from "@/components/branches/branches";
import Image from "next/image";
import { notFound } from "next/navigation";

// Background colors for team member cards
const bgColors = [
  "bg-[#F5E6D3]", // Beige
  "bg-[#E2F0EA]", // Mint green
  "bg-[#FFE5D9]", // Peach
  "bg-[#E5F0FF]", // Light blue
  "bg-[#F0E5FF]", // Light purple
];

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;

  const teamData = branches.find((branch) => branch.slug === slug);

  if (!teamData) {
    return notFound();
  }

  return (
    <div className="container px-4 py-6 mx-auto space-y-6 text-center">
      {/* Branch Header */}
      <div className="mb-16 flex flex-col items-center space-y-2">
        <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
          {teamData.name}
        </h1>
        <blockquote className="max-w-screen-md">
          <em className="text-base italic font-normal leading-relaxed text-muted-foreground">
            <strong className="font-bold text-2xl">“</strong>
            {teamData.mission}
            <strong className="font-bold text-2xl">”</strong>
          </em>
        </blockquote>
      </div>

      <h3 className="text-2xl font-bold">Les membres du bureau</h3>
      {/* Team Members Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {teamData.responsibles.map((member, index) => {
          const imageUrl =
            "https://avatar.iran.liara.run/public/" +
            (member.gender === "m" ? "boy" : "girl");
          return (
            <div
              key={index}
              className="text-center group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="overflow-hidden mb-4 rounded-full aspect-square">
                <div className="flex justify-center items-center w-full h-full">
                  <Image
                    priority
                    src={imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    width={256}
                    height={256}
                    className="object-cover w-full h-full transition-transform duration-300 z-2 group-hover:scale-95"
                  />
                </div>
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">
                {member.name}
              </h3>
              <p className="text-sm text-muted-foreground">{member.role}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
