import { ImageComponent } from "./image";

export interface VideoComponent {
  id: number;
  video_id: string;
  video_thumbnail: ImageComponent;
  loop: boolean;
  autoplay: boolean;
  preload: boolean;
  control: boolean;
  muted: boolean;
}