import { useEffect, useRef, useState } from "react";

/** Site header from the original draft. `home` keeps in-page anchors; other pages link back to "/". */
export function SiteHeader({ home = false }: { home?: boolean }) {
  const base = home ? "" : "/";
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;
    const close = () => setOpen(false);
    const links = nav.querySelectorAll("a");
    links.forEach((a) => a.addEventListener("click", close));
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen((wasOpen) => {
          if (wasOpen) document.getElementById("menu")?.focus();
          return false;
        });
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      links.forEach((a) => a.removeEventListener("click", close));
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header>
      <div className="utility"><div className="wrap"><div className="utility-group"><span className="address"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2"/></svg>220 5th St, Elyria, OH 44035</span><span className="hours"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>Mon–Sat 9:00 AM–6:00 PM</span></div><div className="utility-group"><span className="dispatch">Mobile Service by Appointment</span><a href="tel:+14404531371"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 3 4 4-2 3a15 15 0 0 0 7 7l3-2 4 4c-1 4-5 4-8 2A25 25 0 0 1 3 11C1 8 1 4 5 3Z"/></svg>(440) 453-1371</a></div></div></div>
      <div className="wrap nav"><a className="brand" href={`${base}#hero`} aria-label="Amelia Tech and Auto home"><span className="logo">AT</span><span><strong>Amelia Tech & Auto</strong><small>Hardware • Diagnostics • Auto</small></span></a><nav ref={navRef} id="navigation" className={open ? "navlinks open" : "navlinks"} aria-label="Main navigation"><a href={`${base}#hero`}>Overview</a><a href={`${base}#departments`}>Services</a><a href={`${base}#recent-work`}>Recent Work</a><a href={`${base}#reviews`}>Reviews</a><a href={`${base}#about`}>About</a><a href={`${base}#faq`}>FAQ</a><a href={`${base}#contact`}>Contact</a></nav><a className="btn primary quote" href={`${base}#contact`}>Request Quote <span aria-hidden="true">→</span></a><button type="button" className="menu" id="menu" aria-expanded={open} aria-controls="navigation" onClick={() => setOpen((v) => !v)}>Menu</button></div>
      {home && (
        <div className="quickbar"><div className="wrap"><span className="quick-label">Popular services:</span><button type="button" className="pill" data-dept="Computer Sales"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="13" rx="2"/><path d="M8 21h8m-4-5v5"/></svg>Gaming Desktops</button><button type="button" className="pill" data-dept="Computer Repair"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="6" y="6" width="12" height="12" rx="2"/><path d="M9 1v5m6-5v5M9 18v5m6-5v5M1 9h5m-5 6h5m12-6h5m-5 6h5"/><path d="M10 10h4v4h-4z"/></svg>PC Hardware Upgrades</button><button type="button" className="pill" data-dept="Computer Repair"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="10" cy="10" r="6"/><path d="m15 15 6 6"/></svg>Diagnostic Check</button><button type="button" className="pill" data-dept="Automotive Repair"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3"/><path d="m7 6 1 1m9 10 1 1M6 17l1-1M17 7l1-1"/></svg>Brakes &amp; Rotors</button><button type="button" className="pill" data-dept="Automotive Repair"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8 2-5h10l2 5M3 9h18v9H3zM5 18v3m14-3v3M6 12h2m8 0h2"/></svg>Mobile Auto Service</button><button type="button" className="pill" data-dept="Automotive Repair"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M3 18a10 10 0 1 1 18 0M12 12l5-5M7 19h10"/><circle cx="12" cy="12" r="1"/></svg>Engine Diagnostics</button><button type="button" className="pill" data-dept="Vehicle Sales"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m5 8 2-5h10l2 5M3 9h18v9H3zM5 18v3m14-3v3M6 12h2m8 0h2"/></svg>Used Vehicles</button><button type="button" className="pill" data-dept="Computer Sales"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="m13 2-9 12h7l-1 8 10-13h-7z"/></svg>Custom Builds</button></div></div>
      )}
    </header>
  );
}
