"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

type ThreeDMarqueeDemoProps = {
  className?: string;
};

export default function ThreeDMarqueeDemo({ className }: ThreeDMarqueeDemoProps) {
  const baseImages = [
    "/img/hai-plays/shot-01.jpeg",
    "/img/hai-plays/shot-02.jpeg",
    "/img/hai-plays/shot-03.jpeg",
    "/img/hai-plays/shot-04.jpeg",
    "/img/hai-plays/shot-05.jpeg",
    "/img/hai-plays/shot-06.jpeg",
    "/img/hai-plays/shot-07.jpeg",
    "/img/hai-plays/shot-08.jpeg",
    "/img/hai-plays/shot-09.jpeg",
    "/img/hai-plays/shot-10.jpeg",
    "/img/hai-plays/shot-11.jpeg",
    "/img/hai-plays/shot-12.jpeg",
    "/img/hai-plays/shot-13.jpeg",
    "/img/hai-plays/shot-14.jpeg",
    "/img/hai-plays/shot-15.jpeg",
    "/img/hai-plays/shot-16.jpeg",
    "/img/hai-plays/shot-17.jpeg",
    "/img/hai-plays/shot-18.jpeg",
    "/img/hai-plays/shot-19.jpeg",
    "/img/hai-plays/shot-20.jpeg",
    // "https://assets.aceternity.com/animated-modal.png",
    // "https://assets.aceternity.com/animated-testimonials.webp",
    // "https://assets.aceternity.com/cloudinary_bkp/Tooltip_luwy44.png",
    // "https://assets.aceternity.com/github-globe.png",
    // "https://assets.aceternity.com/glare-card.png",
    // "https://assets.aceternity.com/layout-grid.png",
    // "https://assets.aceternity.com/flip-text.png",
    // "https://assets.aceternity.com/hero-highlight.png",
    // "https://assets.aceternity.com/carousel.webp",
    // "https://assets.aceternity.com/placeholders-and-vanish-input.png",
    // "https://assets.aceternity.com/shooting-stars-and-stars-background.png",
    // "https://assets.aceternity.com/signup-form.png",
    // "https://assets.aceternity.com/cloudinary_bkp/stars_sxle3d.png",
    // "https://assets.aceternity.com/spotlight-new.webp",
    // "https://assets.aceternity.com/cloudinary_bkp/Spotlight_ar5jpr.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Parallax_Scroll_pzlatw_anfkh7.png",
    // "https://assets.aceternity.com/tabs.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Tracing_Beam_npujte.png",
    // "https://assets.aceternity.com/cloudinary_bkp/typewriter-effect.png",
    // "https://assets.aceternity.com/glowing-effect.webp",
    // "https://assets.aceternity.com/hover-border-gradient.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Infinite_Moving_Cards_evhzur.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Lamp_hlq3ln.png",
    // "https://assets.aceternity.com/macbook-scroll.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Meteors_fye3ys.png",
    // "https://assets.aceternity.com/cloudinary_bkp/Moving_Border_yn78lv.png",
    // "https://assets.aceternity.com/multi-step-loader.png",
    // "https://assets.aceternity.com/vortex.png",
    // "https://assets.aceternity.com/wobble-card.png",
    // "https://assets.aceternity.com/world-map.webp",
  ];
  const images = Array.from({ length: 3 }, () => baseImages).flat();
  return (
    <ThreeDMarquee images={images} className={className} />
  );
}
