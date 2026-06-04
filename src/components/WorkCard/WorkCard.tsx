import Image from "next/image";

import { Text } from "@/src/components/Text/Text";

interface WorkCardProps {
  title: string;
  projects: string;
  image: string;
  onClick: () => void;
}

export function WorkCard({ title, projects, image, onClick }: WorkCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        group flex h-[320px] w-full flex-col overflow-hidden
        border border-white/10 bg-surface text-left
        transition duration-300 hover:-translate-y-1 hover:border-primary/70
        sm:h-[380px] lg:h-[360px]
      "
    >
      <div className="relative flex-1 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="
            object-cover object-center
            transition duration-500 group-hover:scale-110
          "
        />

        <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent" />
      </div>

      <div className="flex min-h-[96px] items-end justify-between gap-3 p-4 md:p-5">
        <div className="flex min-h-[64px] flex-col justify-end">
          <Text preset="cardTitle" bold className="uppercase">
            {title}
          </Text>

          <Text preset="small" className="mt-1">
            {projects}
          </Text>
        </div>

      </div>
    </button>
  );
}