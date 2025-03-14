interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  playButton: HTMLButtonElement;
  stopButton: HTMLButtonElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  stop(): void;
  bindElements(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private playButton: HTMLButtonElement;
  private stopButton: HTMLButtonElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.playButton = videoPlayerElements.playButton;
    this.stopButton = videoPlayerElements.stopButton;

    this.bindElements();
  }

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.playButton.innerText = 'Pause';
      return;
    }

    this.videoPlayer.pause();
    this.playButton.innerText = 'Play';
  }

  stop(): void {
    this.videoPlayer.pause();
    this.videoPlayer.currentTime = 0;
    this.playButton.innerText = 'Play';
  }

  bindElements(): void {
    this.playButton.addEventListener('click', () => this.playToggle());
    this.stopButton.addEventListener('click', () => this.stop());
  }
}

// Inicialização do player de vídeo
const videoPlayer = new VideoPlayer({
  videoPlayer: document.querySelector('video') as HTMLVideoElement,
  playButton: document.getElementById('playButton') as HTMLButtonElement,
  stopButton: document.getElementById('stopButton') as HTMLButtonElement,
});
