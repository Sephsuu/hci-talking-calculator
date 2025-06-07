import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function playSound(path: string, on: boolean, onStart?: () => void, onEnd?: () => void): void {

  if (on) {
    const audio = new Audio(`/audio/${path}.MP3`);

    if (onStart) audio.addEventListener("play", onStart);
    if (onEnd) {
      audio.addEventListener("pause", onEnd);
      audio.addEventListener("ended", onEnd);
    }

    audio.play();
  }

}