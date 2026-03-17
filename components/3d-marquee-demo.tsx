"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";
import { useEffect, useState } from "react";

type ThreeDMarqueeDemoProps = {
  className?: string;
};

export default function ThreeDMarqueeDemo({ className }: ThreeDMarqueeDemoProps) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

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
  ];

  // On mobile, use fewer images to reduce GPU load (20 vs 60)
  const images = isMobile
    ? baseImages
    : Array.from({ length: 3 }, () => baseImages).flat();

  return (
    <ThreeDMarquee images={images} className={className} />
  );
}
