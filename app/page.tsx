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
import { LiveOnStageSection } from "@/components/app/live-on-stage-section";
import { ContactSection } from "@/components/app/contact-section";
import { SpotlightCtaSection } from "@/components/app/spotlight-cta-section";
import { FooterSection } from "@/components/app/footer-section";
import { FullWidthDivider } from "@/components/ui/full-width-divider";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden px-4 supports-[overflow:clip]:overflow-clip">
      <Header />
      <main
        className={cn(
          "relative mx-auto max-w-6xl grow",
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

        <LiveOnStageSection />
		<FullWidthDivider />

        <SessionsSection />
		<FullWidthDivider />

        <OutcomesSection />
		<FullWidthDivider />

        <SpotlightCtaSection />
		<FullWidthDivider />

        <ContactSection />
		<FullWidthDivider />

        <FooterSection />
      </main>
    </div>
  );
}
