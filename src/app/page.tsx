"use client";

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarBase from '@/components/navigation/NavbarBase';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy3D from '@/components/sections/layouts/howtobuy/3DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterLogo from '@/components/footer/FooterLogo';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: "funAndTrendy", colorTemplate: 1, textAnimation: "highlight" }}>
      <div id="nav" data-section="nav">
        <NavbarBase logoSrc="/images/logo.svg" logoAlt="MoonMint Logo" leftButtonText="Menu" rightButtonText="Buy MoonMint" />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero title="Welcome to MoonMint" subtitle="Your gateway to the memecoin universe" primaryButtonText="Join Now" secondaryButtonText="Learn More"/>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout title="About MoonMint" descriptions={["MoonMint is a playful and vibrant memecoin, aiming to build community and bring fun to the crypto world.", "Our vision is to create an approachable and transparent platform for all users."]} />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy3D title="How to Buy MoonMint" steps={[{ title: "Step 1", description: "Create an account on an exchange.", image: "/images/placeholder1.avif", position: "left", isCenter: false}, { title: "Step 2", description: "Purchase MoonMint tokens.", image: "/images/placeholder2.avif", position: "center", isCenter: true}, { title: "Step 3", description: "Join the community!", image: "/images/placeholder3.avif", position: "right", isCenter: false}]} />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics title="Tokenomics Overview" description="Discover the mechanics behind MoonMint's value." cardItems={[{ id: 1, title: "Total Supply", description: "1,000,000,000 tokens" }, { id: 2, title: "Burn Rate", description: "5% of each transaction is burned." }, { id: 3, title: "Liquidity Pool", description: "50% locked in liquidity for transparency." }]} />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ items={[{ title: "What is MoonMint?", content: "A playful memecoin designed for community engagement." }, { title: "How do I buy MoonMint?", content: "Follow our How-to-Buy section for easy steps." }, { title: "Where can I trade MoonMint?", content: "Available on most major exchanges." }, { title: "Is the team transparent?", content: "Absolutely! We aim for full transparency with our community." }]} />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogo logoSrc="/images/logo.svg" logoAlt="MoonMint Logo" logoText="MoonMint" className="bg-background text-text" />
      </div>
    </SiteThemeProvider>
  );
}