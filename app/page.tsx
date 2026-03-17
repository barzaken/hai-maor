import { cn } from "@/lib/utils";
import { Header } from "@/components/app/header";
import { HeroSection } from "@/components/app/hero";
import { LogosSection } from "@/components/app/logos-section";
import RevealTextSection from "@/components/app/reveal-text-section";
import { TheNeedSection } from "@/components/app/the-need-section";
import { MethodologySection } from "@/components/app/methodology-section";
import { TracksSection } from "@/components/app/tracks-section";
import { AboutMeSection } from "@/components/app/about-hai-maor";
import { ContactSection } from "@/components/app/contact-section";
import { FooterSection } from "@/components/app/footer-section";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import { ExpandableCardDemo } from "@/components/app/tv-section";
import { LiveOnStageSection } from "@/components/app/live-on-stage-section";
import { ParallaxFeaturesSection } from "@/components/app/parallax-features";
import { LeadershipSection } from "@/components/app/leadership-section";
import { SalesPitchSection } from "@/components/app/sales-pitch-section";


export default function Home() {
  return (
    <div className="relative flex min-h-[100dvh] flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
      <Header />
      <main className="relative grow bg-background">
        <HeroSection />
        <FullWidthDivider />

        <LogosSection />
        <FullWidthDivider />

        <RevealTextSection />
        <FullWidthDivider />

        <TheNeedSection />
        <FullWidthDivider />

        <MethodologySection />
        <FullWidthDivider />

        <ParallaxFeaturesSection />
        <FullWidthDivider />

        <LeadershipSection />
        <FullWidthDivider />

        <SalesPitchSection />
        <FullWidthDivider />


        <ExpandableCardDemo />
        <FullWidthDivider />

        <TracksSection />
        <FullWidthDivider />

        <AboutMeSection />
        <FullWidthDivider />

        <LiveOnStageSection />

        <ContactSection />


        <FooterSection />
      </main>
    </div>
  );
}

