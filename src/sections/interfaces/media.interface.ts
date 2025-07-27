export interface MediaScreenInterface {
  src: string;
  loop?: boolean;
  onEnded?: (video: HTMLVideoElement | HTMLAudioElement) => void;
}
