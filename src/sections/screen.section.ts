import { MediaScreenInterface } from './interfaces/media.interface';
import { DomModel } from './models/dom.model';
import { SectionTemplate } from './templates/section.template';

export class ScreenSection extends SectionTemplate {
  protected active: boolean;

  private hideCallback: () => void;
  private showCallback: () => void;

  constructor() {
    super();

    this.createContainer();

    this.hideCallback = () => {};
    this.showCallback = () => {};
  }

  protected createContainer(): void {
    this.container = new DomModel();
    this.container.addClass('screen-section');
    this.container.setCss(`
      display: flex;
      flex: 0 0 auto;
      max-height: 50vh;
      overflow: hidden;
      width: auto;
    `);
  }

  getContainer(): HTMLElement {
    return this.container.get();
  }

  hide(): void {
    this.container.setContent('');
    this.container.setStyle('visibility', 'hidden');
    this.hideCallback();
    this.active = false;
  }

  isActive(): boolean {
    return this.active;
  }

  onHide(hideCallback: () => void): void {
    this.hideCallback = hideCallback;
  }

  onShow(showCallback: () => void): void {
    this.showCallback = showCallback;
  }

  show(): void {
    this.active = true;
    this.showCallback();
    this.container.setStyle('visibility', 'visible');
  }

  setAudio(values: MediaScreenInterface): void {
    const audioContainer = new DomModel<HTMLAudioElement>('audio');
    audioContainer.setCss(`
      height: 100%;
      object-fit: contain;
      width: 100%;
    `);

    const { src, loop = false, onEnded = () => {} } = values;

    const audio = audioContainer.get();
    audio.autoplay = true;
    audio.controls = false;
    audio.loop = loop;
    audio.src = src;
    audio.addEventListener('ended', () => {
      if (!loop) {
        audioContainer.get().remove();
      }
      onEnded(audio);
    });

    this.container.append(audioContainer);

    this.show();
  }

  setImage(imagePath: string): void {
    const img = new DomModel<HTMLElement>('img');
    img.setAttr('src', imagePath);
    img.setCss(`
      height: 100%;
      object-fit: contain;
      width: 100%;
    `);

    const collection = this.container.get().querySelectorAll('img, video');
    for (const element of collection) {
      element.remove();
    }

    this.container.append(img);
    this.show();
  }

  setVideo(values: MediaScreenInterface): void {
    const videoContainer = new DomModel<HTMLVideoElement>('video');
    videoContainer.setCss(`
      height: 100%;
      object-fit: contain;
      width: 100%;
    `);

    const { src, loop = false, onEnded = () => {} } = values;

    const video = videoContainer.get();
    video.autoplay = true;
    video.controls = false;
    video.loop = loop;
    video.src = src;
    video.addEventListener('ended', () => {
      if (!loop) {
        videoContainer.get().remove();
      }
      onEnded(video);
    });

    const collection = this.container.get().querySelectorAll('img, video');
    for (const element of collection) {
      element.remove();
    }

    this.container.append(videoContainer);
    this.show();
  }
}
