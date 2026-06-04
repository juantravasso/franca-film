"use client";

import Image from "next/image";
import { X } from "lucide-react";
import { Work } from "@/src/types/work";
import { Text } from "@/src/components/Text/Text";

interface WorkModalProps {
  work: Work | null;
  onClose: () => void;
}

export function WorkModal({ work, onClose }: WorkModalProps) {
  if (!work) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-background/90 px-5 backdrop-blur-md">
      <div className="relative w-full max-w-3xl overflow-hidden border border-white/10 bg-surface">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-text-primary transition hover:text-primary"
        >
          <X size={22} />
        </button>

        <div className="relative h-[280px] w-full md:h-[420px]">
          <Image src={work.image} alt={work.title} fill className="object-cover" />
        </div>

        <div className="p-6 md:p-8">
          <Text preset="badge" bold>
            {work.projects}
          </Text>

          <Text preset="sectionTitle" bold className="mt-3 uppercase">
            {work.title}
          </Text>

          <Text preset="body" className="mt-4 max-w-2xl">
            {work.description}
          </Text>
        </div>
      </div>
    </div>
  );
}