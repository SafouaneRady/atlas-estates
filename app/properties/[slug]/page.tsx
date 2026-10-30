import type { Metadata } from "next";
import { properties } from "@/lib/properties";
import PropertyPageView from "@/components/property-page-view";

export function generateStaticParams(){return properties.map(({slug})=>({slug}));}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const property=properties.find((item)=>item.slug===slug);return property?{title:property.title,description:property.description,openGraph:{title:`${property.title} | Atlas Estates`,description:property.description,images:[property.image]}}:{};}
export default function Page({params}:{params:Promise<{slug:string}>}){return <PropertyPageView params={params}/>;}
