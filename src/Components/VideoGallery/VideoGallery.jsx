import React, { useState, useRef } from "react";
import "./VideoGallery.css";
import VideoPauseIcon from "../../assets/icons/VediosIcons/VideoPauseIcon";
import VideoPlayIcon from "../../assets/icons/VediosIcons/VideoPlayIcon";

export default function VideoGallery({ videos }) {
  const videoRefs = useRef([]);
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlay = (index) => {
    const video = videoRefs.current[index];
    if (!video) return;

    if (video.paused) {
      // Pause other videos
      videoRefs.current.forEach((v, i) => {
        if (i !== index && v && !v.paused) v.pause();
      });

      video.play();
      setPlayingIndex(index);
    } else {
      video.pause();
      setPlayingIndex(null);
    }
  };

  const isVideoPlaying = (index) => {
    const video = videoRefs.current[index];
    return video && !video.paused;
  };

  return (
    <div className="video-gallery-wrapper">
      <div className="video-container">
        {videos.map((videoSrc, index) => (
          <div className="video-box" key={index}>
            <video
              ref={(el) => (videoRefs.current[index] = el)}
              src={videoSrc}
              className="gallery-video"
              onClick={() => togglePlay(index)}
              loop
              muted
            />
            <div className="video-control" onClick={() => togglePlay(index)}>
              {isVideoPlaying(index) ? <VideoPauseIcon /> : <VideoPlayIcon />}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
