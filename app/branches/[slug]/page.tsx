import { getBranches } from "@/components/branches/branches";
import { BlurFade } from "@/components/magicui/blur-fade";
import { Title } from "@/components/ui/title";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function BranchPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const branches = await getBranches();
  const teamData = branches.find((branch) => branch.slug === slug);

  if (!teamData) {
    return notFound();
  }

  return (
    <div className="container px-4 py-6 mx-auto space-y-6 text-center">
      {/* Branch Header */}
      <div className="mb-16 flex flex-col items-center space-y-2">
        <Title>{teamData.name}</Title>
        <blockquote className="max-w-screen-md">
          <em className="text-base italic font-normal leading-relaxed text-muted-foreground">
            <strong className="font-bold text-2xl">"</strong>
            {teamData.mission}
            <strong className="font-bold text-2xl">"</strong>
          </em>
        </blockquote>
      </div>

      <h3 className="text-2xl font-bold">Les membres du bureau</h3>
      {/* Team Members Grid */}
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {teamData.responsibles.map((member, index) => {
          const imageUrl =
            member.gender === "m" ? "/images/boy.png" : "/images/girl.png";
          return (
            <div
              key={index}
              className="text-center group transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="overflow-hidden mb-4 rounded-full aspect-square">
                <BlurFade className="flex justify-center items-center w-full h-full">
                  <Image
                    src={imageUrl}
                    alt={`${member.name} - ${member.role}`}
                    width={128}
                    height={128}
                    loading="lazy" // Lazy load the image
                    quality={75} // Adjust quality for optimization
                    className="object-cover w-full h-full transition-transform duration-300 z-2 group-hover:scale-95 border-border border rounded-full"
                  />
                </BlurFade>
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
