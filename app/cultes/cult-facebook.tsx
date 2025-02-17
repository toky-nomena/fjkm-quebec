import { cn } from "@/lib/utils";

interface CultFacebookProps {
  facebookUrl?: string;
  className?: string;
}

export function CultFacebook({ facebookUrl, className }: CultFacebookProps) {
  return (
    <iframe
      className={cn(className, "overflow-hidden rounded-xl border")}
      src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffjkm.quebec.canada%2Fposts%2Fpfbid0Hp72hmaak4bHmotKhhAbq2TVTmPo6b8dfqcbQzdGg4GHAEzkwKfk7FgLLdgsK5stl&show_text=true&width=500"
      allowFullScreen={true}
      allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
    />
  );
}
