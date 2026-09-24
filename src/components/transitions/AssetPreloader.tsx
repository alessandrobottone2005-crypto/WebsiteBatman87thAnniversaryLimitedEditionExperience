import { useEffect } from "react";

const IMAGE_ASSETS = [
  "./assets/images/screen.png",
  "./assets/images/JollyJokerCard_Front.jpg",
  "./assets/images/JollyJokerCard_Back.jpg",
  "/logos-navbar_molecule.png",
  "./assets/showreel/0001.webp",
  "./assets/showreel/0800.webp",
];

const VIDEO_ASSETS = [
  // Video 360° animati (render BatCaverna — tutti e tre gli ambienti)
  "./assets/textures/BatCaverna_Batcomputer360.mp4",
  "./assets/textures/BatCaverna_Armeria360.mp4",
  "./assets/textures/BatCaverna_BatMobile360.mp4",
  // Video di passaggio tra zone
  "./assets/videos/BatCaverna_PassaggioBatComputerAArmeria.mp4",
  "./assets/videos/BatCaverna_PassaggioArmeriaABatMobile.mp4",
];

export default function AssetPreloader() {
  useEffect(() => {
    // Preload Images
    IMAGE_ASSETS.forEach((src) => {
      const img = new Image();
      img.src = src;
    });

    // Preload Videos with graceful degradation for file://
    if (window.location.protocol !== 'file:') {
      VIDEO_ASSETS.forEach((src) => {
        try {
          const req = new XMLHttpRequest();
          req.open("GET", src, true);
          req.responseType = "blob";
          req.onerror = () => { console.warn(`Preload failed for ${src}`); };
          req.send();
        } catch (e) {
          // Ignore errors
        }
      });
    }
  }, []);

  return null;
}
