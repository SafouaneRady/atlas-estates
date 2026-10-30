import type { Metadata } from "next";
import HomePage from "@/components/home-page";

export const metadata:Metadata = {
  title:"Atlas Estates | Demeures d’exception au Maroc",
  description:"Une collection exigeante de demeures remarquables à travers le Maroc.",
  alternates:{ canonical:"/fr", languages:{ en:"/", fr:"/fr" } },
};

export default function FrenchPage() { return <HomePage locale="fr"/>; }
