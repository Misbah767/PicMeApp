// sampleImages.js
import img1 from "../assets/images/photos1.png";
import img2 from "../assets/images/photos2.png";
import img3 from "../assets/images/Photos3.png";

const baseImages = [img1, img2, img3];

// Repeat images 4 times (you can change this number)
const SampleImages = [...baseImages, ...baseImages, ...baseImages, ...baseImages];

export default SampleImages;
