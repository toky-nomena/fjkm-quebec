import { cn } from "@/lib/utils";
import { Cult } from "./cultes-data";
import { CulteItemDetails } from "./culte-item-details";
import { CustomMap } from "./cult-map";

export default async function CultItem({ cult }: { cult: Cult }) {
  return (
    <div className="flex flex-col gap-8 xl:flex-row">
      <div className="xl:w-2/3">
        <CulteItemDetails details={cult} className="rounded-t-2xl border" />
        <CustomMap
          address={cult.address}
          className="overflow-hidden h-96 rounded-b-2xl border shadow-lg"
        />
      </div>
      <iframe
        className={cn(
          "h-[650px] xl:w-1/3",
          "overflow-hidden bg-white rounded-xl border"
        )}
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2Ffjkm.quebec.canada%2Fposts%2Fpfbid0Hp72hmaak4bHmotKhhAbq2TVTmPo6b8dfqcbQzdGg4GHAEzkwKfk7FgLLdgsK5stl&show_text=true&width=500"
        allowFullScreen={true}
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
      />
    </div>
  );
}
