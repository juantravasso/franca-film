import { Box } from "@/src/components/Box/Box";
import { Text } from "@/src/components/Text/Text";

import { PortfolioHeaderProps } from "./PortifolioHeader.types";

export function PortfolioHeader({
  badge,
  title,
  description,
}: PortfolioHeaderProps) {
  return (
    <section className="border-b border-dividing-lines py-16 md:py-24">
      <Box className="px-5 text-center md:px-10 lg:px-16">
        <Text preset="badge" bold>
          {badge}
        </Text>

        <Text
          as="h1"
          preset="hero"
          bold
          className="mt-4 uppercase"
        >
          {title}
        </Text>

        <Text
          preset="body"
          className="mx-auto mt-5 max-w-2xl"
        >
          {description}
        </Text>
      </Box>
    </section>
  );
}