import { GrainOverlay } from "@/components/GrainOverlay";
import { StickyCta } from "@/components/StickyCta";
import { HeroSection } from "@/components/sections/HeroSection";
import { ConfrontationSection } from "@/components/sections/ConfrontationSection";
import { ProgrammeSection } from "@/components/sections/ProgrammeSection";
import { PowerGridSection } from "@/components/sections/PowerGridSection";
import { MindsetSection } from "@/components/sections/MindsetSection";
import { SocialProofSection } from "@/components/sections/SocialProofSection";
import { CoachSection } from "@/components/sections/CoachSection";
import { MarqueeSection } from "@/components/sections/MarqueeSection";
import { FaqSection } from "@/components/sections/FaqSection";

export default function Home() {
  return (
    <>
      <GrainOverlay />
      <StickyCta />
      <main>
        <HeroSection />
        <ConfrontationSection />
        <ProgrammeSection />
        <PowerGridSection />
        <MindsetSection />
        <SocialProofSection />
        <CoachSection />
        <MarqueeSection />
        <FaqSection />
      </main>
    </>
  );
}
