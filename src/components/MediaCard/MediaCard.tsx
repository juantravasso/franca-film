import Image from "next/image";
import { Play, Camera } from "lucide-react";

import { MediaItem } from "@/src/types/media";
import { Text } from "@/src/components/Text/Text";

interface MediaCardProps {
  item: MediaItem;
  onClick: (item: MediaItem) => void;
}

export function MediaCard({ item, onClick }: MediaCardProps) {
  const isVideo = item.type === "video";

  return (
    <button
      type="button"
      onClick={() => onClick(item)}
      className="
        group relative aspect-[9/14] w-full overflow-hidden
        border border-white/10 bg-surface text-left
        transition duration-300 hover:-translate-y-1 hover:border-primary/70
      "
    >
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover object-center transition duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />

      <div className="absolute left-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/30 bg-background/50 text-text-primary backdrop-blur-md md:left-4 md:top-4">
        {isVideo ? <Play size={16} /> : <Camera size={16} />}
      </div>

      {isVideo && item.duration && (
        <Text
          as="span"
          preset="caption"
          className="absolute right-3 top-3 rounded-full bg-background/70 px-2 py-1 text-text-primary backdrop-blur-md md:right-4 md:top-4"
        >
          {item.duration}
        </Text>
      )}

      <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4">
        <Text preset="cardTitle" bold className="uppercase">
          {item.title}
        </Text>

        <Text preset="caption" className="mt-1">
          {item.subtitle}
        </Text>
      </div>
    </button>
  );
}