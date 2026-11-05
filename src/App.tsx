import { ArrowDown, ArrowRight, ArrowUpRight, BedDouble, Building2, MapPin, Menu, Ruler, ShieldCheck } from 'lucide-react'
import { useState } from 'react'
import './App.css'

const properties = [
  { name: 'The Olive House', area: 'DHA Phase 6 · Lahore', price: 'PKR 8.5 Cr', detail: '5 beds · 1 kanal', image: 'photo-1600607687939-ce8a6c25118c', tag: 'FOR SALE' },
  { name: 'Gardenia Residence', area: 'Bahria Town · Lahore', price: 'PKR 4.2 Cr', detail: '4 beds · 10 marla', image: 'photo-1600566753086-00f18fb6b3ea', tag: 'FEATURED' },
  { name: 'The Courtyard', area: 'Gulberg · Lahore', price: 'PKR 12 Cr', detail: '6 beds · 2 kanal', image: 'photo-1600607687920-4e2a09cf159d', tag: 'JUST LISTED' },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#home" aria-label="AlAsar home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ALASAR <small>PROPERTY ADVISORS</small></span></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"><Menu size={22} /></button>
        <nav className={menuOpen ? 'nav open' : 'nav'}>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>Our portfolio</a><a href="#about" onClick={() => setMenuOpen(false)}>Our story</a><a href="#owners" onClick={() => setMenuOpen(false)}>Our people</a><a href="#partners" onClick={() => setMenuOpen(false)}>Partners</a>
        </nav>
        <a className="header-contact" href="#contact">Let’s talk <ArrowUpRight size={15} /></a>
      </header>

      <section id="home" className="hero">
        <div className="hero-image" />
        <div className="hero-shade" />
        <div className="hero-content">
          <div className="eyebrow light"><i /> A MORE CONSIDERED WAY TO FIND HOME</div>
          <h1>Space to live.<br /><em>Room to belong.</em></h1>
          <p>Thoughtful property advice for people ready to make their next move in Lahore.</p>
          <a className="button button-cream" href="#portfolio">Explore our portfolio <ArrowRight size={16} /></a>
        </div>
        <div className="hero-foot"><span>01 — 03&nbsp;&nbsp; LAHORE, PAKISTAN</span><a href="#portfolio">SCROLL TO DISCOVER <ArrowDown size={14} /></a></div>
        <div className="hero-note"><span>EST.</span><strong>2012</strong><small>LOCAL KNOWLEDGE.<br />LASTING TRUST.</small></div>
      </section>

      <section className="intro section-wrap" id="about">
        <div className="eyebrow"><i /> A DIFFERENT KIND OF PROPERTY PARTNER</div>
        <div className="intro-grid"><h2>Good property<br />is about <em>more</em><br />than an address.</h2><div className="intro-copy"><p>It’s where mornings begin, families grow, and the next chapter takes shape. We bring care, clarity, and a deep knowledge of Lahore to every decision you make.</p><a className="text-link" href="#owners">A little about us <ArrowUpRight size={16} /></a></div></div>
        <div className="stats"><div><strong>12<span>+</span></strong><small>YEARS OF LOCAL EXPERIENCE</small></div><div><strong>240<span>+</span></strong><small>HOMES FOUND NEW OWNERS</small></div><div><strong>18</strong><small>NEIGHBOURHOODS WE KNOW</small></div><div className="stats-note">A relationship-first<br />approach, every time.</div></div>
      </section>

      <section id="portfolio" className="portfolio section-wrap">
        <div className="section-heading"><div><div className="eyebrow"><i /> HAND-PICKED, NOT MASS-PRODUCED</div><h2>Places with <em>potential.</em></h2></div><a className="text-link" href="#contact">View all properties <ArrowRight size={16} /></a></div>
        <div className="property-grid">{properties.map((p, i) => <article className="property-card" key={p.name}><a href="#contact" className="property-image" aria-label={`Enquire about ${p.name}`} style={{ backgroundImage: `url(https://images.unsplash.com/${p.image}?auto=format&fit=crop&w=1000&q=85)` }}><span className="property-tag">{p.tag}</span><span className="property-arrow"><ArrowUpRight size={18} /></span></a><div className="property-meta"><div><h3>{p.name}</h3><span className="location"><MapPin size={13} />{p.area}</span></div><strong>{p.price}</strong></div><div className="property-details"><span><BedDouble size={15} />{p.detail.split(' · ')[0]}</span><span><Ruler size={15} />{p.detail.split(' · ')[1]}</span><span className="view-detail">0{i + 1}</span></div></article>)}</div>
      </section>

      <section className="manifesto"><div className="manifesto-image" /><div className="manifesto-copy"><div className="eyebrow light"><i /> HOW WE WORK</div><h2>Local roots.<br /><em>Open doors.</em></h2><p>We believe the best property decisions come from good conversations. Our team takes time to understand what matters to you, then makes the complicated feel simple.</p><a className="button button-cream" href="#contact">Get to know us <ArrowRight size={16} /></a><span className="manifesto-index">02 / OUR APPROACH</span></div></section>

      <section id="owners" className="owners section-wrap"><div className="owners-copy"><div className="eyebrow"><i /> THE PEOPLE BEHIND THE PLACE</div><h2>Personal by<br /><em>nature.</em></h2><p>AlAsar is an independent, family-led property advisory. The owners are involved at every step, bringing a personal touch and honest counsel to a business built on trust.</p><a className="text-link" href="#contact">Meet our owners <ArrowUpRight size={16} /></a></div><div className="owner-cards"><article className="owner-card"><div className="owner-photo owner-one" /><div className="owner-info"><span>FOUNDER & PRINCIPAL</span><h3>Omar Siddiqui</h3><p>“A home is a feeling before it’s a floor plan.”</p></div></article><article className="owner-card owner-secondary"><div className="owner-photo owner-two" /><div className="owner-info"><span>PARTNER & ADVISOR</span><h3>Hassan Malik</h3><p>Local insight. A steady hand.</p></div></article></div></section>

      <section id="partners" className="partners"><div className="section-wrap partner-inner"><div className="eyebrow"><i /> GOOD COMPANY, BUILT OVER TIME</div><div className="partner-title"><h2>Trusted by the people<br />who <em>build what’s next.</em></h2><p>Strong relationships with the developers, architects, and legal experts who shape our city.</p></div><div className="partner-logos"><div><Building2 /><b>IMARAT</b><small>GROUP</small></div><div className="serif-logo">Bahria <small>TOWN</small></div><div><span className="logo-icon">N</span><b>NEW METRO</b><small>CITY</small></div><div className="serif-logo">DHA <small>LAHORE</small></div><div><ShieldCheck /><b>HABIB</b><small>CONSTRUCTION</small></div></div></div></section>

      <section id="contact" className="contact"><div className="eyebrow light"><i /> YOUR NEXT CHAPTER STARTS HERE</div><h2>Let’s find your<br /><em>place in the city.</em></h2><a href="mailto:hello@alasar.pk" className="button button-cream">Start a conversation <ArrowRight size={16} /></a><span className="contact-phone">+92 42 3577 1200&nbsp;&nbsp; · &nbsp;&nbsp;hello@alasar.pk</span></section>
      <footer><a className="brand footer-brand" href="#home"><span className="brand-mark">A<span>.</span></span><span className="brand-name">ALASAR <small>PROPERTY ADVISORS</small></span></a><span>© 2025 ALASAR PROPERTY ADVISORS</span><div><a href="#portfolio">INSTAGRAM</a><a href="#contact">CONTACT</a></div></footer>
    </main>
  )
}

export default App
