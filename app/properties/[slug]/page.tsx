import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Bath, BedDouble, Check, MapPin, Ruler } from "lucide-react";
import { notFound } from "next/navigation";
import { destinations, properties } from "@/lib/properties";
import { SecondaryHeader, SiteFooter } from "@/components/site-chrome";

const whatsappNumber = "212656089067";

export function generateStaticParams() { return properties.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }:{ params:Promise<{ slug:string }> }):Promise<Metadata> {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) return {};
  return { title:property.title, description:property.description, openGraph:{ title:`${property.title} | Atlas Estates`, description:property.description, images:[property.image] } };
}

export default async function PropertyPage({ params }:{ params:Promise<{ slug:string }> }) {
  const { slug } = await params;
  const property = properties.find((item) => item.slug === slug);
  if (!property) notFound();
  const city = destinations.find((item) => item.name === property.city);
  const message = encodeURIComponent(`Hello Atlas Estates, I’d like to enquire about ${property.title} in ${property.location}.`);

  return <><SecondaryHeader/><main className="property-page">
    <header className="property-detail-hero"><Image src={property.image} alt={`${property.title} in ${property.location}`} fill priority quality={90} sizes="100vw"/><div className="property-detail-overlay"/><Link className="city-back" href={city ? `/destinations/${city.slug}` : "/#properties"}><ArrowLeft size={16}/> Back to {property.city}</Link><div className="shell property-detail-title"><p className="eyebrow">{property.label} · {property.type}</p><h1>{property.title}</h1><p><MapPin size={15}/>{property.location}</p></div></header>
    <section className="section shell property-overview"><div className="property-story"><p className="eyebrow dark">The residence</p><h2>Designed for a more <em>considered life.</em></h2><p>{property.description}</p><ul className="feature-list">{property.features.map((feature) => <li key={feature}><Check size={15}/>{feature}</li>)}</ul></div>
      <aside className="property-enquiry"><p className="property-detail-price">{property.price}</p><div className="property-facts"><span><BedDouble/> <b>{property.beds}</b> Bedrooms</span><span><Bath/> <b>{property.baths}</b> Bathrooms</span><span><Ruler/> <b>{property.area}</b> Interior</span></div><a className="whatsapp-enquiry" href={`https://wa.me/${whatsappNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">Enquire on WhatsApp <ArrowRight size={16}/></a><Link className="text-link" href="/#contact">Request a private viewing <ArrowRight size={16}/></Link><small>Fictional concept listing for portfolio demonstration.</small></aside>
    </section>
  </main><SiteFooter/></>;
}
