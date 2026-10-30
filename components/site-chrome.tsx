import Link from "next/link";
import { ArrowRight, MapPin } from "lucide-react";
import SiteHeader from "@/components/site-header";

function Brand({ light=false }:{ light?:boolean }) {
  return <Link href="/#top" className={`brand ${light ? "brand-light" : ""}`} aria-label="Atlas Estates home"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle className="mark-ring" cx="20" cy="20" r="16.5"/><path className="mark-mountain" d="m8.5 27.5 9.1-15 5.1 8 3.8-5 5 12"/><path className="mark-horizon" d="M8.5 30.5h23"/><path className="mark-door" d="M17.2 30.5v-5.2h5.6v5.2"/></svg></span><span className="brand-wordmark"><b>ATLAS</b><small>ESTATES</small></span></Link>;
}

export function SecondaryHeader({ locale="en", switchHref }:{ locale?:"en"|"fr"; switchHref?:string }) {
  return <SiteHeader locale={locale} switchHref={switchHref}/>;
}

export function SiteFooter({ locale="en" }:{ locale?:"en"|"fr" }) {
  const fr=locale==="fr", root=fr?"/fr":"/";
  return <footer><div className="shell footer-grid"><div><Brand light/><p>{fr?<>Demeures d’exception.<br/>Art de vivre remarquable.</>:<>Exceptional Homes.<br/>Extraordinary Living.</>}</p></div><div><b>{fr?"Explorer":"Explore"}</b><Link href={`${root}#properties`}>{fr?"Biens":"Properties"}</Link><Link href={`${root}#destinations`}>Destinations</Link><Link href={`${root}#services`}>Services</Link></div><div><b>Project</b><Link href={fr?"/fr/case-study":"/case-study"}>{fr?"Étude de cas":"Case study"}</Link><Link href={`${root}#about`}>{fr?"À propos du concept":"About the concept"}</Link><Link href={`${root}#contact`}>{fr?"Démonstration de contact":"Live enquiry demo"}</Link></div><div><b>{fr?"Demandes de projet":"Project enquiries"}</b><a href="https://wa.me/212656089067" target="_blank" rel="noopener noreferrer">{fr?"Discuter d’un projet sur WhatsApp":"Discuss a project on WhatsApp"} <ArrowRight/></a><span className="footer-address"><MapPin/> Concept portfolio · Maroc</span></div></div><div className="shell footer-bottom"><p>© 2026 Atlas Estates. {fr?"Concept portfolio fictif.":"Fictional portfolio concept."}</p><div>{fr?"Conçu et développé comme projet portfolio":"Designed and developed as a portfolio project"}</div></div></footer>;
}
