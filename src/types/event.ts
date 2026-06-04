import { MediaItem } from "./media";

export type EventMediaType = "photo" | "video";

export interface EventMedia {
  id: number;
  type: EventMediaType;
  title: string;
  image: string;
  duration?: string;
}

export interface EventWork {
  id: number;
  slug: string;
  title: string;
  description: string;
  medias: MediaItem[];
}