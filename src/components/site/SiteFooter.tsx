/** Site footer from the original draft, plus a mobile call/text bar. */
export function SiteFooter() {
  return (
    <>
      <footer><div className="wrap"><div className="footer-row"><div><strong>Amelia Tech &amp; Auto LLC</strong><p>220 5th St, Elyria, OH 44035<br /><a href="tel:+14404531371">(440) 453-1371</a> · <a href="mailto:jaevonbell@ameliatechauto.com">jaevonbell@ameliatechauto.com</a><br />Mon–Sat 9:00 AM–6:00 PM · mobile service by appointment</p></div><div className="footer-links"><a href="/privacy">Privacy Policy</a><a href="/terms">Terms &amp; Service Policy</a><a href="https://www.facebook.com/AmeliaTechAuto" target="_blank" rel="noopener noreferrer">Facebook ↗</a></div></div><p className="legal">© <span id="year">{new Date().getFullYear()}</span> Amelia Tech &amp; Auto LLC. All rights reserved.</p></div></footer>
      <div className="callbar-space" aria-hidden="true" />
      <nav className="callbar" aria-label="Quick contact">
        <a className="btn primary" href="tel:+14404531371">Call (440) 453-1371</a>
        <a className="btn secondary" href="sms:+14404531371">Send a Text</a>
      </nav>
    </>
  );
}
