import React, { useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { categories, originalMenu } from './menu.js';
import './style.css';

const phone = 'tel:+918140209024';
const maps = 'https://www.google.com/maps/search/?api=1&query=Maru%20Rajwadu%20Restaurant%2C%20Malavada%20Chokdi%2C%20Limbasi%2C%20Gujarat%20387520';
const whatsapp = 'https://wa.me/918140209024';
const rupees = value => `₹${value}`;

function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [query, setQuery] = useState('');
  const [mobileOpen, setMobileOpen] = useState(false);
  const filtered = useMemo(() => categories
    .filter(category => activeCategory === 'all' || category.id === activeCategory)
    .map(category => ({ ...category, items: category.items.filter(([name]) => name.toLowerCase().includes(query.trim().toLowerCase())) }))
    .filter(category => category.items.length > 0), [activeCategory, query]);
  const resultCount = filtered.reduce((total, category) => total + category.items.length, 0);
  const closeNav = () => setMobileOpen(false);

  return <>
    <header className="header" id="top">
      <div className="container header-inner">
        <a className="brand" href="#top" onClick={closeNav} aria-label="Maru Rajwadu Restaurant, home">
          <span className="brand-mark" aria-hidden="true">મ</span>
          <span><strong>મારુ રજવાડું</strong><small>MARU RAJWADU RESTAURANT</small></span>
        </a>
        <button className="menu-toggle" type="button" aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={mobileOpen} aria-controls="main-nav" onClick={() => setMobileOpen(open => !open)}>{mobileOpen ? '✕' : '☰'}</button>
        <nav className={mobileOpen ? 'nav open' : 'nav'} id="main-nav" aria-label="Main navigation">
          <a href="#menu" onClick={closeNav}>Menu</a><a href="#about" onClick={closeNav}>About</a><a href="#visit" onClick={closeNav}>Visit</a><a className="nav-call" href={phone} onClick={closeNav}>Call us <span aria-hidden="true">↗</span></a>
        </nav>
      </div>
    </header>
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <img className="hero-image" src="/food-hero.webp" alt="Illustrative vegetarian Punjabi meal with naan, paneer curry, dal and noodles" width="1536" height="1024" fetchPriority="high" />
        <div className="hero-overlay" />
        <div className="container hero-content">
          <div className="hero-label"><span className="veg-dot" aria-hidden="true" /> 100% PURE VEGETARIAN <span className="label-rule" /> LIMBASI, GUJARAT</div>
          <h1 id="hero-title">A royal welcome.<br /><em>A delicious meal.</em></h1>
          <p>Punjabi favourites, Chinese flavours, and a table for everyone in Limbasi.</p>
          <div className="hero-actions"><a className="button button-yellow" href="#menu">Explore the menu <span aria-hidden="true">↓</span></a><a className="button button-outline" href={maps} target="_blank" rel="noopener noreferrer">Get directions <span aria-hidden="true">↗</span></a></div>
        </div>
        <div className="hero-bottom"><div className="container hero-bottom-inner"><span>પંજાબી · ચાઇનીઝ · ભાજીપાંવ · પુલાવ</span><span>FOOD PHOTOGRAPHY IS ILLUSTRATIVE</span></div></div>
      </section>

      <section className="intro" id="about"><div className="container intro-inner">
        <div><span className="section-kicker">WELCOME TO MARU RAJWADU</span><h2>Good food tastes<br /><em>better together.</em></h2></div>
        <div className="intro-copy"><p>From comforting Punjabi curries and fresh breads to Chinese starters and noodles, our menu brings plenty of vegetarian choices to the table.</p><div className="service-pills"><span>Pure veg</span><span>Outdoor seating</span><span>All you can eat</span><span>Vegan options</span></div><p className="small-note">Ask our team about vegan dishes and all-you-can-eat availability.</p></div>
      </div></section>

      <section className="menu-section" id="menu"><div className="container">
        <div className="menu-heading"><div><span className="section-kicker">OUR MENU</span><h2>Find your favourite.</h2><p>Browse the restaurant’s menu and prices, from paneer to noodles.</p></div><div className="menu-stamp" aria-hidden="true"><span>100%</span><small>VEG</small></div></div>
        <div className="menu-controls"><label className="search-wrap"><span className="search-icon" aria-hidden="true">⌕</span><span className="sr-only">Search the menu</span><input type="search" placeholder="Search dishes, e.g. paneer, naan..." value={query} onChange={event => setQuery(event.target.value)} /></label><div className="category-list" role="group" aria-label="Filter by category"><button type="button" className={activeCategory === 'all' ? 'category active' : 'category'} aria-pressed={activeCategory === 'all'} onClick={() => setActiveCategory('all')}>All items</button>{categories.map(category => <button type="button" key={category.id} className={activeCategory === category.id ? 'category active' : 'category'} aria-pressed={activeCategory === category.id} onClick={() => setActiveCategory(category.id)}>{category.title}</button>)}</div></div>
        <p className="result-count" aria-live="polite">{resultCount} {resultCount === 1 ? 'dish' : 'dishes'} {query && <>matching “{query}”</>}</p>
        {resultCount ? <div className="menu-grid">{filtered.map(category => <article className="menu-card" key={category.id}><div className="menu-card-head"><div><span className="menu-card-guj">{category.gujarati}</span><h3>{category.title}</h3></div><span className="menu-card-count">{category.items.length.toString().padStart(2, '0')}</span></div><ul>{category.items.map(([name, first, second]) => <li key={name}><span className="dish-name">{name}</span><span className="dish-price">{second ? <><span><small>HALF</small>{rupees(first)}</span><span><small>FULL</small>{rupees(second)}</span></> : rupees(first)}</span></li>)}</ul></article>)}</div> : <div className="empty"><h3>No dishes found</h3><p>Try another name or browse the full menu.</p><button type="button" className="button button-yellow" onClick={() => { setQuery(''); setActiveCategory('all'); }}>Show all dishes</button></div>}
        <div className="fixed-dish"><div><span className="section-kicker">A MEAL TO SHARE? ORDER ONE EACH.</span><h3>Punjabi Fixed Dish <span>₹110</span></h3><p>Paneer sabji, veg sabji, dal fry, jeera rice, 3 tandoori rotis or 4 chapatis, papad and salad. Parcel: ₹120.</p><small>As printed on the menu: one fixed dish per person. Not available on Sundays or festival days.</small></div></div>
        <div className="menu-footnote"><p>Prices are transcribed from the menu you supplied. Please call to confirm current prices, portions and availability. Orders are prepared after they are placed; the menu asks guests to allow 10–15 minutes.</p><a href={phone}>Call 081402 09024 <span aria-hidden="true">↗</span></a></div>
        <details className="original-menu"><summary>View original menu pages <span aria-hidden="true">＋</span></summary><div className="original-grid">{originalMenu.map(([file, label], index) => <a href={`/menu/${file}`} target="_blank" rel="noopener noreferrer" key={file} aria-label={`Open original menu page: ${label}`}><img src={`/menu/${file}`} alt={`Original menu page: ${label}`} loading="lazy" width="904" height="1278" /><span>{String(index + 1).padStart(2, '0')} / {label} ↗</span></a>)}</div></details>
      </div></section>

      <section className="visit" id="visit"><div className="container visit-inner"><div><span className="section-kicker">COME BY & SAY HELLO</span><h2>Meet us at<br /><em>Malavada Chokdi.</em></h2><p>Malavada Chokdi, Limbasi,<br />Gujarat 387520</p><div className="visit-actions"><a className="button button-yellow" href={maps} target="_blank" rel="noopener noreferrer">Open directions ↗</a><a className="button button-outline" href={phone}>Call 081402 09024</a></div></div><div className="visit-info"><span>01 / LOCATION</span><p>Malavada Chokdi<br />Limbasi, Gujarat 387520</p><span>02 / PHONE & WHATSAPP</span><p><a href={phone}>081402 09024</a> · <a href={whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp ↗</a></p><span>03 / AT A GLANCE</span><p>Pure veg · Punjabi · Chinese<br />Outdoor seating · Vegan options</p></div></div></section>
    </main>
    <footer><div className="container footer-inner"><div><strong>મારુ રજવાડું</strong><small>MARU RAJWADU RESTAURANT</small></div><p>© {new Date().getFullYear()} Maru Rajwadu Restaurant · Limbasi, Gujarat</p><a href="#top">Back to top ↑</a></div></footer>
  </>;
}

createRoot(document.getElementById('root')).render(<App />);
