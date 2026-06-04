"use client";

import Image from "next/image";
import { X, Play, Camera } from "lucide-react";

import { MediaItem } from "@/src/types/media";
import { Text } from "@/src/components/Text/Text";

interface MediaModalProps {
  item: MediaItem | null;
  onClose: () => void;
}

export function MediaModal({ item, onClose }: MediaModalProps) {
  if (!item) return null;

  const isVideo = item.type === "video";

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 px-4 backdrop-blur-md">
      <div className="relative w-full max-w-[420px] overflow-hidden border border-white/10 bg-surface">
        <button
          type="button"
          onClick={onClose}
          aria-label="Fechar modal"
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-text-primary transition hover:text-primary"
        >
          <X size={22} />
        </button>

        <div className="relative aspect-[9/14] w-full">
          <Image
            src={item.image}
            alt={item.title}
            fill
            className="object-cover object-center"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />

          <div className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-primary bg-background/60 text-primary backdrop-blur-md">
            {isVideo ? <Play size={28} /> : <Camera size={28} />}
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-5">
            <Text preset="badge" bold>
              {isVideo ? "Vídeo" : "Foto"}
            </Text>

            <Text preset="heading" bold className="mt-2 uppercase">
              {item.title}
            </Text>

            <Text preset="body" className="mt-2">
              {item.subtitle}
            </Text>
          </div>
        </div>
      </div>
    </div>
  );
}