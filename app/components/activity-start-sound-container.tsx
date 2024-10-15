"use client";

import React, { useRef, useEffect } from "react";

export const ActivityStartSoundContainer: React.FC = () => {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      const html = `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body, video {
                width: 100%;
                height: 100%;
                margin: 0;
                padding: 0;
                overflow: hidden;
              }
            </style>
          </head>
          <body>
            <video id="video" autoplay controls>
              <source src="/sound/common/activity_start.mp4" type="video/mp4">
            </video>
            <script>
              const video = document.getElementById('video');
              video.play().catch(error => console.error("Autoplay was prevented:", error));
            </script>
          </body>
        </html>
      `;
      iframe.srcdoc = html;
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      title="Autoplay Video"
      width="560"
      height="315"
      frameBorder="0"
      allowFullScreen
      allow="autoplay"
    ></iframe>
  );
};
