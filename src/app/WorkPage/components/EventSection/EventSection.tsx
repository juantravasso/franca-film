"use client";

import { useState } from "react";

import { EventWork } from "@/src/types/event";
import { MediaItem } from "@/src/types/media";

import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";
import { Button } from "@/src/components/Button/Button";
import { MediaCard } from "@/src/components/MediaCard/MediaCard";
import { MediaModal } from "@/src/components/MediaCard/components/MediaModal";
import { useRevealAnimation } from "@/src/hooks/useRevealAnimation";

interface EventSectionProps {
  event: EventWork;
}

export function EventSection({ event }: EventSectionProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  const previewMedias: MediaItem[] = event.medias.slice(0, 6);

  useRevealAnimation({
    selector: ".event-item",
  });

  return (
    <section className="border-b border-dividing-lines py-16 md:py-24">
      <Box className="px-5 md:px-10 lg:px-16">
        <div className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div>
            <Text as="h2" preset="sectionTitle" bold className="uppercase">
              {event.title}
            </Text>

            <Text preset="body" className="mt-4 max-w-2xl">
              {event.description}
            </Text>
          </div>

          <Button title="Ver todas" onClick={() => setModalOpen(true)} />
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {previewMedias.map((media) => (
            <div
              key={`${event.slug}-${media.id}`}
              className="event-item opacity-0 transition-all duration-500 hover:-translate-y-2 hover:scale-[1.03]"
              style={{ filter: "blur(14px)" }}
            >
              <MediaCard item={media} onClick={setSelectedMedia} />
            </div>
          ))}
        </div>
      </Box>

      {modalOpen && (
        <div className="fixed inset-0 z-[100] overflow-y-auto bg-background/95 px-4 py-8 backdrop-blur-md">
          <Box className="px-0">
            <div className="mb-8 flex items-center justify-between gap-4">
              <Text as="h2" preset="sectionTitle" bold className="uppercase">
                {event.title}
              </Text>

              <Button
                title="Fechar"
                onClick={() => setModalOpen(false)}
                showIcon={false}
              />
            </div>

            <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
              {event.medias.map((media) => (
                <MediaCard
                  key={`${event.slug}-modal-${media.id}`}
                  item={media}
                  onClick={setSelectedMedia}
                />
              ))}
            </div>
          </Box>
        </div>
      )}

      <MediaModal item={selectedMedia} onClose={() => setSelectedMedia(null)} />
    </section>
  );
}