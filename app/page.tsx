import { cn } from "@/lib/utils";
import { Header } from "@/components/app/header";
import { HeroSection } from "@/components/app/hero";
import { LogosSection } from "@/components/app/logos-section";
import RevealTextSection from "@/components/app/reveal-text-section";
import { AboutMeSection } from "@/components/app/about-me-section";
import { ServiceStorySection } from "@/components/app/service-story-section";
import { FocusSkillsSection } from "@/components/app/focus-skills-section";
import { SessionsSection } from "@/components/app/sessions-section";
import { OutcomesSection } from "@/components/app/outcomes-section";
import { MediaShowcaseSection } from "@/components/app/media-showcase-section";
import { ContactSection } from "@/components/app/contact-section";
import { FooterSection } from "@/components/app/footer-section";
import { FullWidthDivider } from "@/components/ui/full-width-divider";
import ThreeDMarqueeDemo from "@/components/3d-marquee-demo";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip">
      <Header />
      <main
        className={cn(
          "relative mx-auto max-w-4xl grow",
          "before:absolute before:-inset-y-14 before:-left-px before:w-px before:bg-border",
          "after:absolute after:-inset-y-14 after:-right-px after:w-px after:bg-border"
        )}
      >
        <HeroSection />
        <LogosSection />
        <RevealTextSection />
		<FullWidthDivider />
        <AboutMeSection />
		<FullWidthDivider />

        <ServiceStorySection />
		<FullWidthDivider />

        <FocusSkillsSection />
		<FullWidthDivider />

        <MediaShowcaseSection />
		<FullWidthDivider />

        <SessionsSection />
		<FullWidthDivider />

        <OutcomesSection />
		<FullWidthDivider />

        <ContactSection />
		<FullWidthDivider />

        <FooterSection />
      </main>
    </div>
  );
}
