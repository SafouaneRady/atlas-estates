import { destinations } from "@/lib/properties";
import DestinationPageView from "@/components/destination-page-view";

export function generateStaticParams(){return destinations.map(({slug})=>({city:slug}));}
export default function Page({params}:{params:Promise<{city:string}>}){return <DestinationPageView params={params}/>;}
