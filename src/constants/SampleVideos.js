import video1 from "../assets/videos/Video1.mp4";
import video2 from "../assets/videos/Video2.mp4";
import video3 from "../assets/videos/video3.mp4";

// Repeat videos as needed (like images)
const baseVideos = [video1, video2, video3];
const sampleVideos = [...baseVideos, ...baseVideos, ...baseVideos, ...baseVideos];

export default sampleVideos;
