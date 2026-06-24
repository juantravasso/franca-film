"use client";

import { useState } from "react";
import { Camera, Play } from "lucide-react";
import { photos, videos } from "@/src/data/media";
import { MediaItem } from "@/src/types/media";
import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";
import { MediaCard } from "@/src/components/MediaCard/MediaCard";
import { MediaModal } from "@/src/components/MediaCard/components/MediaModal";
import { Button } from "@/src/components/Button/Button";
import { useRevealAnimation } from "@/src/hooks/useRevealAnimation";

export function MediaSection() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  useRevealAnimation({
    selector: ".video-home-item",
  });

  useRevealAnimation({
    selector: ".photo-home-item",
  });

  return (
    <section className="bg-background">
      <Box className="grid gap-0 px-0 lg:grid-cols-2">
        <div
          id="videos"
          className="border-b border-dividing-lines-light px-5 py-16 md:px-10 md:py-20 lg:border-b-0 lg:border-r lg:px-16"
        >
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <Play size={22} className="text-primary" />

              <Text as="h2" preset="sectionTitle" bold className="uppercase">
                Vídeos
              </Text>
            </div>

            <div className="mx-auto h-[2px] w-10 bg-dividing-lines" />

            <Text preset="body" className="mx-auto mt-5 max-w-sm">
              Filmes que contam histórias e eternizam cada detalhe.
            </Text>

            <Button
              className="mt-5"
              title="Ver Todos os Vídeos"
              href="/VideosPage"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {videos.map((video) => (
              <div
                key={`video-${video.id}`}
                className="video-home-item opacity-0 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]"
                style={{ filter: "blur(14px)" }}
              >
                <MediaCard item={video} onClick={setSelectedMedia} />
              </div>
            ))}
          </div>
        </div>

        <div id="fotos" className="px-5 py-16 md:px-10 md:py-20 lg:px-16">
          <div className="mb-10 text-center">
            <div className="mb-3 flex items-center justify-center gap-3">
              <Camera size={22} className="text-primary" />

              <Text as="h2" preset="sectionTitle" bold className="uppercase">
                Fotos
              </Text>
            </div>

            <div className="mx-auto h-[2px] w-10 bg-dividing-lines" />

            <Text preset="body" className="mx-auto mt-5 max-w-sm">
              Registros únicos que revelam emoções.
            </Text>

            <Button
              className="mt-5"
              title="Ver Todas as Fotos"
              href="/PhotosPage"
            />
          </div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {photos.map((photo) => (
              <div
                key={`photo-${photo.id}`}
                className="photo-home-item opacity-0 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]"
                style={{ filter: "blur(14px)" }}
              >
                <MediaCard item={photo} onClick={setSelectedMedia} />
              </div>
            ))}
          </div>
        </div>
      </Box>

      <MediaModal item={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </section>
  );
}