"use client";

import { useState } from "react";
import { Header } from "@/src/components/Header/Header";
import { Box } from "@/src/components/Box/Box";
import { MediaCard } from "@/src/components/MediaCard/MediaCard";
import { videos } from "@/src/data/media";
import { MediaItem } from "@/src/types/media";
import { MediaModal } from "@/src/components/MediaCard/components/MediaModal";
import { PortfolioHeader } from "@/src/components/PortifolioHeader/PortifolioHeader";

export default function VideosPage() {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);

  return (
    <>
      <Header />

      <main className="bg-background pt-28">
        <PortfolioHeader
          badge="Portfólio"
          title="Vídeos"
          description="Filmes que contam histórias e eternizam momentos especiais."
        />

        <section className="py-16 md:py-24">
          <Box className="px-5 md:px-10 lg:px-16">
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:grid-cols-5">
              {videos.map((video) => (
                <MediaCard
                  key={video.id}
                  item={video}
                  onClick={setSelectedMedia}
                />
              ))}
            </div>
          </Box>
        </section>
      </main>

      <MediaModal
        item={selectedMedia}
        onClose={() => setSelectedMedia(null)}
      />
    </>
  );
}