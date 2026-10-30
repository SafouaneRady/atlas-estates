"use client";

import Link from "next/link";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function SiteHeader({ home=false, onContact }:{ home?:boolean; onContact?:()=>void }) {
  const [menuOpen,setMenuOpen] = useState(false);
  const [navSolid,setNavSolid] = useState(false);
  const href = (section:string) => home ? `#${section}` : `/#${section}`;
  useEffect(() => { const handle=()=>setNavSolid(window.scrollY>40); handle(); window.addEventListener("scroll",handle,{passive:true}); return()=>window.removeEventListener("scroll",handle); },[]);
  useEffect(() => { document.body.style.overflow=menuOpen?"hidden":""; const close=(event:KeyboardEvent)=>event.key==="Escape"&&setMenuOpen(false); window.addEventListener("keydown",close); return()=>{document.body.style.overflow="";window.removeEventListener("keydown",close)}; },[menuOpen]);
  const closeMenu=()=>setMenuOpen(false);
  return <header className={`nav ${navSolid||menuOpen?"nav-solid":""}`}><Link href={home?"#top":"/#top"} className="brand" aria-label="Atlas Estates home"><span className="brand-mark" aria-hidden="true"><svg viewBox="0 0 40 40" fill="none"><circle className="mark-ring" cx="20" cy="20" r="16.5"/><path className="mark-mountain" d="m8.5 27.5 9.1-15 5.1 8 3.8-5 5 12"/><path className="mark-horizon" d="M8.5 30.5h23"/><path className="mark-door" d="M17.2 30.5v-5.2h5.6v5.2"/></svg></span><span className="brand-wordmark"><b>ATLAS</b><small>ESTATES</small></span></Link><nav className="desktop-nav" aria-label="Primary navigation"><Link href={href("properties")}>Properties</Link><Link href={href("destinations")}>Destinations</Link><Link href={href("about")}>About</Link><Link href={href("services")}>Services</Link></nav><Link className="nav-contact" href={href("contact")} onClick={onContact}>Speak to an advisor <ArrowRight size={15}/></Link><button className="menu-button" onClick={()=>setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-controls="mobile-navigation" aria-label={menuOpen?"Close menu":"Open menu"}>{menuOpen?<X/>:<Menu/>}</button>{menuOpen&&<nav id="mobile-navigation" className="mobile-menu" aria-label="Mobile navigation"><Link onClick={closeMenu} href={href("properties")}>Properties</Link><Link onClick={closeMenu} href={href("destinations")}>Destinations</Link><Link onClick={closeMenu} href={href("about")}>About</Link><Link onClick={closeMenu} href={href("services")}>Services</Link><Link onClick={closeMenu} href={href("contact")}>Contact</Link></nav>}</header>;
}
