import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteHeader from "@/components/site-header";

function Brand({ light=false }:{ light?:boolean }) {
  return <Link href="/#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="Atlas Estates home"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle className="mark-ring" cx="20" cy="20" r="16.5"/><path className="mark-mountain" d="m8.5 27.5 9.1-15 5.1 8 3.8-5 5 12"/><path className="mark-horizon" d="M8.5 30.5h23"/><path className="mark-door" d="M17.2 30.5v-5.2h5.6v5.2"/></svg></span><span className="brand-wordmark"><b>ATLAS</b><small>ESTATES</small></span></Link>;
}

export function SecondaryHeader() {
  return <SiteHeader/>;
}

export function SiteFooter() {
  return <footer><div className="shell footer-grid"><div><Brand light/><p>Exceptional Homes.<br/>Extraordinary Living.</p></div><div><b>Explore</b><Link href="/#properties">Properties</Link><Link href="/#destinations">Destinations</Link><Link href="/#services">Services</Link></div><div><b>Project</b><Link href="/case-study">Case study</Link><Link href="/#about">About the concept</Link><Link href="/#contact">Live enquiry demo</Link></div><div><b>Project enquiries</b><a href="https://wa.me/212656089067?text=Hello%2C%20I%20saw%20your%20Atlas%20Estates%20portfolio%20project." target="_blank" rel="noopener noreferrer">Discuss a project on WhatsApp <ArrowRight/></a><span className="footer-address"><MapPin/> Portfolio concept · Morocco</span></div></div><div className="shell footer-bottom"><p>© 2026 Atlas Estates. Fictional portfolio concept.</p><div>Designed and developed as a portfolio project</div></div></footer>;
}
