import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check, Layers3, MessageCircle, Route, Search } from "lucide-react";
import { SecondaryHeader, SiteFooter } from "@/components/site-chrome";

export const metadata:Metadata = {
  title:"Project Case Study",
  description:"The design and development case study behind Atlas Estates, a fictional luxury real-estate experience for Morocco.",
};

const capabilities = [
  [Search,"Property discovery","Responsive filtering by intent, city, property type and budget."],
  [Route,"Scalable routing","Dedicated destination and property routes generated from shared structured data."],
  [MessageCircle,"Lead capture","Context-aware WhatsApp enquiries from listings, detail pages and the contact form."],
  [Layers3,"Design system","Reusable typography, colour, spacing, navigation and listing components."],
] as const;

export default function CaseStudyPage() {
  return <><SecondaryHeader switchHref="/fr/case-study"/><main className="case-study">
    <header className="case-hero"><Image src="/images/hero-atlas.webp" alt="Atlas Estates luxury real-estate homepage concept" fill priority fetchPriority="high" quality={84} sizes="100vw"/><div className="case-hero-overlay"/><div className="shell case-hero-copy"><p className="eyebrow">Portfolio case study · 2026</p><h1>A quieter way to explore <em>exceptional homes.</em></h1><p>Atlas Estates is a fictional end-to-end luxury real-estate experience conceived, designed and developed as a portfolio project.</p><a href="#project" className="button-ivory">Explore the project <ArrowRight size={16}/></a></div></header>

    <section className="section shell case-intro" id="project"><div><p className="eyebrow dark">The brief</p><h2>Make luxury feel <em>personal, not distant.</em></h2></div><div><p>The project explores how a premium Moroccan property brand could balance editorial storytelling with practical property discovery. The experience needed to feel composed and aspirational while remaining clear, responsive and useful.</p><dl><div><dt>Role</dt><dd>Concept, UI/UX and development</dd></div><div><dt>Platform</dt><dd>Responsive web experience</dd></div><div><dt>Stack</dt><dd>Next.js, React, TypeScript and CSS</dd></div></dl></div></section>

    <section className="case-showcase"><div className="shell"><div className="case-showcase-image"><Image src="/images/about-interior-v2.webp" alt="Editorial interior imagery used in the Atlas Estates design system" fill quality={80} sizes="(max-width: 900px) 100vw, 58vw"/></div><div className="case-showcase-copy"><p className="eyebrow">Creative direction</p><h2>Editorial warmth.<br/><em>Digital clarity.</em></h2><p>Generous photography, restrained typography and a mineral palette establish the premium tone. Clear hierarchy, familiar search controls and deliberate calls to action keep the experience grounded in the visitor’s task.</p><ul><li><Check/> Responsive across desktop, tablet and mobile</li><li><Check/> Motion respects reduced-motion preferences</li><li><Check/> Semantic structure and accessible controls</li></ul></div></div></section>

    <section className="section shell case-capabilities"><div className="section-head"><div><p className="eyebrow dark">What was built</p><h2>A complete, scalable <em>property journey.</em></h2></div><p>Each capability supports discovery, evaluation or enquiry rather than existing as decorative functionality.</p></div><div className="case-capability-grid">{capabilities.map(([Icon,title,copy],index)=><article key={title}><span>0{index+1}</span><Icon/><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

    <section className="case-outcome"><div className="shell"><p className="eyebrow">The outcome</p><h2>From destination discovery<br/>to a <em>qualified conversation.</em></h2><p>The finished concept connects a high-end visual identity to a complete browsing flow: visitors can search, explore city collections, evaluate individual residences and begin a contextual WhatsApp enquiry.</p><div><Link className="button-ivory" href="/">View live experience <ArrowRight size={16}/></Link><a className="case-whatsapp" href="https://wa.me/212656089067?text=Hello%2C%20I%20saw%20your%20Atlas%20Estates%20portfolio%20project." target="_blank" rel="noopener noreferrer">Discuss a project <ArrowRight size={16}/></a></div></div></section>
  </main><SiteFooter/></>;
}
