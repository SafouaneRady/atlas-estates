import { properties } from "@/lib/properties";
import PropertyPageView from "@/components/property-page-view";

export function generateStaticParams() { return properties.map(({ slug })=>({ slug })); }
export default function Page({ params }:{ params:Promise<{slug:string}> }) { return <PropertyPageView params={params} locale="fr"/>; }
