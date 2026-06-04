"use client";

import { useState } from "react";
import { Work } from "@/src/types/work";
import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";
import { WorkCard } from "@/src/components/WorkCard/WorkCard";
import { works } from "@/src/data/work";
import { WorkModal } from "@/src/components/WorkCard/components/WorkCardModal";


export function Works() {
  const [selectedWork, setSelectedWork] = useState<Work | null>(null);

  return (
    <section
    id="trabalhos"
    className="
        bg-surface
        py-20
        md:py-28
    "
>

      <Box className="relative z-10 px-5 md:px-10 lg:px-16">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <Text as="h2" preset="sectionTitle" bold className="uppercase">
            Trabalhos
          </Text>

          <div className="mx-auto mt-4 h-[2px] w-10 bg-primary" />

          <Text preset="body" className="mt-5">
            Cada evento tem sua essência, cada história merece ser contada.<br/>
            Confira alguns dos trabalhos realizados.
          </Text>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {works.map((work) => (
            <WorkCard
              key={work.id}
              title={work.title}
              projects={work.projects}
              image={work.image}
              onClick={() => setSelectedWork(work)}
            />
          ))}
        </div>
      </Box>

      <WorkModal work={selectedWork} onClose={() => setSelectedWork(null)} />
    </section>
  );
}