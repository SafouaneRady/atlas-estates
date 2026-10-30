import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bath, BedDouble, Ruler } from "lucide-react";
import { destinations, properties } from "@/lib/properties";
import { notFound } from "next/navigation";
import { SecondaryHeader, SiteFooter } from "@/components/site-chrome";

export default async function DestinationPageView({ params, locale="en" }:{ params:Promise<{ city:string }>; locale?:"en"|"fr" }) {
  const { city } = await params;
  const fr=locale==="fr", prefix=fr?"/fr":"";
  const destination = destinations.find((item) => item.slug === city);
  if (!destination) notFound();
  const listings = properties.filter((property) => property.city === destination.name);

  return <><SecondaryHeader locale={locale} switchHref={fr?`/destinations/${city}`:`/fr/destinations/${city}`}/><main className="city-page"><header className="city-hero"><Image src={destination.image} alt={`${destination.name}, Morocco`} fill priority quality={90} sizes="100vw"/><div className="city-hero-overlay"/><Link className="city-back" href={`${prefix||"/"}#destinations`}><ArrowLeft size={16}/> {fr?"Toutes les destinations":"All destinations"}</Link><div className="shell city-hero-copy"><p className="eyebrow">{fr?"Explorer le Maroc":"Explore Morocco"}</p><h1>{destination.name}</h1><p>{fr?`Découvrez une sélection confidentielle de demeures d’exception à ${destination.name}.`:destination.intro}</p></div></header>
    <section className="section shell city-listings" aria-labelledby="city-listings-heading"><div className="section-head"><div><p className="eyebrow dark">{fr?`Sélection à ${destination.name}`:`Curated in ${destination.name}`}</p><h2 id="city-listings-heading">{fr?<>Demeures à <em>{destination.name}.</em></>:<>Homes in <em>{destination.name}.</em></>}</h2></div><p>{fr?`${listings.length} résidences actuellement disponibles. Cette collection dédiée peut évoluer sans surcharger la page d’accueil.`:`${listings.length} ${listings.length === 1 ? "residence" : "residences"} currently available. This dedicated collection can grow without crowding the homepage.`}</p></div>
      <div className="property-grid city-property-grid">{listings.map((property) => <article className="property-card" key={property.title}><Link href={`${prefix}/properties/${property.slug}`} className="property-image"><Image src={property.image} alt={`${property.title} in ${property.location}`} fill quality={86} sizes="(max-width: 800px) 100vw, 50vw"/><span>{fr?(property.intent==="rent"?"À louer":"À vendre"):property.label}</span><span className="round-arrow" aria-hidden="true"><ArrowRight/></span></Link><div className="property-meta"><p>{property.location}</p><h3>{property.title}</h3><div className="property-bottom"><strong>{property.price}</strong><ul aria-label="Property details"><li><BedDouble aria-hidden="true"/> {property.beds}</li><li><Bath aria-hidden="true"/> {property.baths}</li><li><Ruler aria-hidden="true"/> {property.area}</li></ul></div></div></article>)}</div>
      <div className="city-more"><p>{fr?"Vous recherchez quelque chose de plus précis ?":"Looking for something more specific?"}</p><Link className="button-dark" href={`${prefix||"/"}#contact`}>{fr?"Parler à un conseiller":"Speak to an advisor"} <ArrowRight size={16}/></Link></div></section></main><SiteFooter locale={locale}/></>;
}

