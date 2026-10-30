import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bath, BedDouble, Ruler } from "lucide-react";
import { destinations, properties } from "@/lib/properties";
import { notFound } from "next/navigation";
import { SecondaryHeader, SiteFooter } from "@/components/site-chrome";

export function generateStaticParams() { return destinations.map(({ slug }) => ({ city:slug })); }

export default async function DestinationPage({ params }:{ params:Promise<{ city:string }> }) {
  const { city } = await params;
  const destination = destinations.find((item) => item.slug === city);
  if (!destination) notFound();
  const listings = properties.filter((property) => property.city === destination.name);

  return <><SecondaryHeader/><main className="city-page"><header className="city-hero"><Image src={destination.image} alt={`${destination.name}, Morocco`} fill priority quality={90} sizes="100vw"/><div className="city-hero-overlay"/><Link className="city-back" href="/#destinations"><ArrowLeft size={16}/> All destinations</Link><div className="shell city-hero-copy"><p className="eyebrow">Explore Morocco</p><h1>{destination.name}</h1><p>{destination.intro}</p></div></header>
    <section className="section shell city-listings" aria-labelledby="city-listings-heading"><div className="section-head"><div><p className="eyebrow dark">Curated in {destination.name}</p><h2 id="city-listings-heading">Homes in <em>{destination.name}.</em></h2></div><p>{listings.length} {listings.length === 1 ? "residence" : "residences"} currently available. This dedicated collection can grow without crowding the homepage.</p></div>
      <div className="property-grid city-property-grid">{listings.map((property) => <article className="property-card" key={property.title}><Link href={`/properties/${property.slug}`} className="property-image"><Image src={property.image} alt={`${property.title} in ${property.location}`} fill quality={86} sizes="(max-width: 800px) 100vw, 50vw"/><span>{property.label}</span><span className="round-arrow" aria-hidden="true"><ArrowRight/></span></Link><div className="property-meta"><p>{property.location}</p><h3>{property.title}</h3><div className="property-bottom"><strong>{property.price}</strong><ul aria-label="Property details"><li><BedDouble aria-hidden="true"/> {property.beds}</li><li><Bath aria-hidden="true"/> {property.baths}</li><li><Ruler aria-hidden="true"/> {property.area}</li></ul></div></div></article>)}</div>
      <div className="city-more"><p>Looking for something more specific?</p><Link className="button-dark" href="/#contact">Speak to an advisor <ArrowRight size={16}/></Link></div></section></main><SiteFooter/></>;
}
