import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import SiteHeader from "@/components/site-header";
import { SiteFooter } from "@/components/site-chrome";

export default function NotFound() {
  return <><SiteHeader/><main className="not-found-page"><div className="shell"><p className="eyebrow dark">404 · Page not found</p><h1>This address has<br/><em>moved on.</em></h1><p>The page may no longer exist, but there are still exceptional places to discover.</p><div><Link className="button-dark" href="/"><ArrowLeft size={16}/> Return home</Link><Link className="text-link" href="/#properties">Explore properties <ArrowRight size={16}/></Link></div></div></main><SiteFooter/></>;
}
