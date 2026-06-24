export type MediaType = "photo" | "video";

export interface MediaItem {
  id: number;
  title: string;
  subtitle?: string;
  image: string;
  type: MediaType;
  duration?: string;
  video?: string;
}