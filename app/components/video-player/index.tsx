"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Play,
  Pause,
  Volume2,
  Volume1,
  VolumeX,
  Maximize,
  Minimize,
  RotateCcw,
  Square,
} from "lucide-react";

export const VideoPlayer = ({ src }: { src: string }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const [prevVolume, setPrevVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showReplay, setShowReplay] = useState(false);
  const [hoverStates, setHoverStates] = useState({
    play: false,
    stop: false,
    mute: false,
    fullscreen: false,
  });
  const videoRef = useRef(null);
  const playerRef = useRef(null);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      if (videoRef.current.ended) {
        setShowReplay(true);
        setIsPlaying(false);
      } else {
        setShowReplay(false);
      }
    }
  };

  const togglePlay = useCallback(() => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  }, []);

  const handleStop = () => {
    videoRef.current.pause();
    videoRef.current.currentTime = 0;
    setIsPlaying(false);
    setCurrentTime(0);
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    setVolume(newVolume);
    videoRef.current.volume = newVolume;
    setIsMuted(newVolume === 0);
    if (newVolume > 0) {
      setPrevVolume(newVolume);
    }
  };

  const toggleMute = () => {
    if (isMuted) {
      setVolume(prevVolume);
      videoRef.current.volume = prevVolume;
      setIsMuted(false);
    } else {
      setPrevVolume(volume);
      setVolume(0);
      videoRef.current.volume = 0;
      setIsMuted(true);
    }
  };

  const handlePlaybackRateChange = (e) => {
    const newRate = parseFloat(e.target.value);
    setPlaybackRate(newRate);
    videoRef.current.playbackRate = newRate;
  };

  const handleSeek = (e) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    videoRef.current.currentTime = time;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      playerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handleReplay = () => {
    videoRef.current.currentTime = 0;
    videoRef.current.play();
    setIsPlaying(true);
    setShowReplay(false);
  };

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    const handleKeyPress = (e) => {
      if (e.code === "Space") {
        e.preventDefault();
        togglePlay();
      }
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("keydown", handleKeyPress);

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [togglePlay]);

  const setHoverState = (key, state) => {
    setHoverStates((prev) => ({ ...prev, [key]: state }));
  };

  return (
    <div ref={playerRef} className="relative w-[1760px] h-[990px]">
      <div className="relative">
        <video
          ref={videoRef}
          className="w-full h-full"
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={() => setDuration(videoRef.current.duration)}
          onClick={togglePlay}
        >
          <source src={src} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {showReplay && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <button
              onClick={handleReplay}
              className="p-4 bg-white rounded-full"
            >
              <RotateCcw size={32} color="black" />
            </button>
          </div>
        )}
      </div>
      <div
        className={`mt-4 p-3 absolute bottom-0 left-0 right-0 bg-black bg-opacity-75`}
      >
        <div className="flex items-center space-x-2">
          <button
            onClick={togglePlay}
            className="p-2 rounded"
            onMouseEnter={() => setHoverState("play", true)}
            onMouseLeave={() => setHoverState("play", false)}
          >
            {isPlaying ? (
              <Pause
                fill={hoverStates.play ? "black" : "white"}
                stroke={hoverStates.play ? "black" : "white"}
                size={24}
              />
            ) : (
              <Play
                fill={hoverStates.play ? "black" : "white"}
                stroke={hoverStates.play ? "black" : "white"}
                size={24}
              />
            )}
          </button>
          <button
            onClick={handleStop}
            className="p-2 rounded"
            onMouseEnter={() => setHoverState("stop", true)}
            onMouseLeave={() => setHoverState("stop", false)}
          >
            <Square
              fill={hoverStates.stop ? "black" : "white"}
              stroke={hoverStates.stop ? "black" : "white"}
              size={24}
            />
          </button>
          <span className="flex-none text-white">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>
          <input
            type="range"
            min="0"
            max={duration}
            value={currentTime}
            onChange={handleSeek}
            className="w-full"
          />
          <div className="flex items-center">
            <button
              onClick={toggleMute}
              className="mr-2 text-white"
              onMouseEnter={() => setHoverState("mute", true)}
              onMouseLeave={() => setHoverState("mute", false)}
            >
              {isMuted ? (
                <VolumeX
                  fill={hoverStates.mute ? "black" : "white"}
                  size={24}
                />
              ) : volume < 0.5 ? (
                <Volume1
                  fill={hoverStates.mute ? "black" : "white"}
                  size={24}
                />
              ) : (
                <Volume2
                  fill={hoverStates.mute ? "black" : "white"}
                  size={24}
                />
              )}
            </button>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={volume}
              onChange={handleVolumeChange}
              className="w-24"
            />
          </div>
          <select
            value={playbackRate}
            onChange={handlePlaybackRateChange}
            className="p-1 border rounded bg-white text-black"
          >
            {[0.5, 0.75, 1, 1.25, 1.5, 2].map((rate) => (
              <option key={rate} value={rate}>
                {rate}x
              </option>
            ))}
          </select>
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded"
            onMouseEnter={() => setHoverState("fullscreen", true)}
            onMouseLeave={() => setHoverState("fullscreen", false)}
          >
            {isFullscreen ? (
              <Minimize
                fill={hoverStates.fullscreen ? "black" : "white"}
                stroke={hoverStates.fullscreen ? "black" : "white"}
                size={24}
              />
            ) : (
              <Maximize
                fill={hoverStates.fullscreen ? "black" : "white"}
                stroke={hoverStates.fullscreen ? "black" : "white"}
                size={24}
              />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
