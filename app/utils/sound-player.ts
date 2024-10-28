// before
// import { Howl } from "howler";

// export const SOUND = (src: string) => new Howl({ src });


// after
import { Howl } from "howler";

const soundInstances: { [key: string]: Howl } = {};

export const SOUND = (src: string) => {
  return soundInstances[src] || (soundInstances[src] = new Howl({ src }));
};