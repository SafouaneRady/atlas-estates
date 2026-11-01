"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteHeader({ home=false, onContact, locale="en", switchHref }:{ home?:boolean; onContact?:()=>void; locale?:"en"|"fr"; switchHref?:string }) {
  const [menuOpen,setMenuOpen] = useState(false);
  const [navSolid,setNavSolid] = useState(false);
  const root = locale === "fr" ? "/fr" : "/";
  const href = (section:string) => home ? `#${section}` : `${root}#${section}`;
  const labels = locale === "fr" ? { properties:"Biens", destinations:"Destinations", about:"À propos", services:"Services", contact:"Parler à un conseiller", close:"Fermer le menu", open:"Ouvrir le menu" } : { properties:"Properties", destinations:"Destinations", about:"About", services:"Services", contact:"Speak to an advisor", close:"Close menu", open:"Open menu" };
  useEffect(() => { const handle=()=>setNavSolid(window.scrollY>40); handle(); window.addEventListener("scroll",handle,{passive:true}); return()=>window.removeEventListener("scroll",handle); },[]);
  useEffect(() => { document.body.style.overflow=menuOpen?"hidden":""; const close=(event:KeyboardEvent)=>event.key==="Escape"&&setMenuOpen(false); window.addEventListener("keydown",close); return()=>{document.body.style.overflow="";window.removeEventListener("keydown",close)}; },[menuOpen]);
  const closeMenu=()=>setMenuOpen(false);
  const languageHref = switchHref ?? (locale === "fr" ? "/" : "/fr");
  return <header className={`nav ${navSolid||menuOpen?"nav-solid":""}`}><Link href={home?"#top":`${root}#top`} className="brand" aria-label="Atlas Estates"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle className="mark-ring" cx="20" cy="20" r="16.5"/><path className="mark-mountain" d="m8.5 27.5 9.1-15 5.1 8 3.8-5 5 12"/><path className="mark-horizon" d="M8.5 30.5h23"/><path className="mark-door" d="M17.2 30.5v-5.2h5.6v5.2"/></svg></span><span className="brand-wordmark"><b>ATLAS</b><small>ESTATES</small></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href={href("properties")}>{labels.properties}</Link><Link href={href("destinations")}>{labels.destinations}</Link><Link href={href("about")}>{labels.about}</Link><Link href={href("services")}>{labels.services}</Link></nav><div className="nav-actions"><Link className="language-switch" href={languageHref} hrefLang={locale === "fr" ? "en" : "fr"}>{locale === "fr" ? "EN" : "FR"}</Link><Link className="nav-contact" href={href("contact")} onClick={onContact}>{labels.contact} <ArrowRight size={15}/></Link></div><button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen?labels.close:labels.open}>{menuOpen?<X/>:<Menu/>}</button>{menuOpen&&<nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation"><Link onClick={closeMenu} href={href("properties")}>{labels.properties}</Link><Link onClick={closeMenu} href={href("destinations")}>{labels.destinations}</Link><Link onClick={closeMenu} href={href("about")}>{labels.about}</Link><Link onClick={closeMenu} href={href("services")}>{labels.services}</Link><Link onClick={closeMenu} href={href("contact")}>Contact</Link><Link onClick={closeMenu} href={languageHref}>{locale === "fr" ? "English" : "Français"}</Link></nav>}</header>;
}
