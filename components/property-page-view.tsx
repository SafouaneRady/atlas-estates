import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bath, BedDouble, Check, MapPin, Ruler } from "lucide-react";
import { notFound } from "next/navigation";
import { destinations, properties } from "@/lib/properties";
import { SecondaryHeader, SiteFooter } from "@/components/site-chrome";

const whatsappNumber = "212656089067";

export default async function PropertyPageView({ params, locale="en" }:{ params:Promise<{ slug:string }>; locale?:"en"|"fr" }) {
  const { slug } = await params;
  const fr=locale==="fr", prefix=fr?"/fr":"";
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();
  const city = destinations.find((item) => item.name === property.city);
  const message = encodeURIComponent(fr?`Bonjour Atlas Estates, je souhaite obtenir des informations sur ${property.title} à ${property.location}.`:`Hello Atlas Estates, I’d like to enquire about ${property.title} in ${property.location}.`);

  return <><SecondaryHeader locale={locale} switchHref={fr?`/properties/${slug}`:`/fr/properties/${slug}`}/><main className="property-page">
    <header className="property-detail-hero"><Image src={property.image} alt={`${property.title} in ${property.location}`} fill priority quality={90} sizes="100vw"/><div className="property-detail-overlay"/><Link className="city-back" href={city ? `${prefix}/destinations/${city.slug}` : `${prefix||"/"}#properties`}><ArrowLeft size={16}/> {fr?`Retour à ${property.city}`:`Back to ${property.city}`}</Link><div className="shell property-detail-title"><p className="eyebrow">{fr?(property.intent==="rent"?"À louer":"À vendre"):property.label} · {fr?(property.type==="Apartment"?"Appartement":"Villa"):property.type}</p><h1>{property.title}</h1><p><MapPin size={15}/>{property.location}</p></div></header>
    <section className="section shell property-overview"><div className="property-story"><p className="eyebrow dark">{fr?"La résidence":"The residence"}</p><h2>{fr?<>Pensée pour un art de vivre <em>plus harmonieux.</em></>:<>Designed for a more <em>considered life.</em></>}</h2><p>{fr?`Une résidence d’exception à ${property.location}, conçue autour de volumes généreux, de matières naturelles et d’un art de vivre raffiné.`:property.description}</p><ul className="feature-list">{property.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul></div>
      <aside className="property-enquiry"><p className="property-detail-price">{property.price}</p><div className="property-facts"><span><BedDouble/> <b>{property.beds}</b> {fr?"Chambres":"Bedrooms"}</span><span><Bath/> <b>{property.baths}</b> {fr?"Salles de bains":"Bathrooms"}</span><span><Ruler/> <b>{property.area}</b> {fr?"Intérieur":"Interior"}</span></div><a className="whatsapp-enquiry" href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">{fr?"Demander sur WhatsApp":"Enquire on WhatsApp"} <ArrowRight size={16}/></a><Link className="text-link" href={`${prefix||"/"}#contact`}>{fr?"Demander une visite privée":"Request a private viewing"} <ArrowRight size={16}/></Link><small>{fr?"Annonce conceptuelle fictive pour démonstration portfolio.":"Fictional concept listing for portfolio demonstration."}</small></aside>
    </section>
  </main><SiteFooter locale={locale}/></>;
}

