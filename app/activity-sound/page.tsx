"use client";

import { Howl } from "howler";
import { useEffect } from "react";

export default function ActivitySoundPage() {
  useEffect(() => {
    var promise = document.querySelector("video#activity-start-video")?.play();
    console.log(promise);

    if (promise !== undefined) {
      promise
        .then((_) => {
          // Autoplay started!
        })
        .catch((error) => {
          // Autoplay was prevented.
          // Show a "Play" button so that user can start playback.
        });
    }
  }, []);

  return (
    <video
      id="activity-start-video"
      width="1000"
      height={1000}
      autoPlay
      controls
    >
      <source src="/sound/common/activity_start.mp4" />
      Your browser does not support audio in video tag.
    </video>
  );
}
