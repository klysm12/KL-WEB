import React from "react";

const spotifyArtistUrl = "https://open.spotify.com/track/5a1FGtZtH6v4qV2TnavcKZ?si=8d1e09601ecc4abb";

const latestRelease = {
  title: "Soul Circuit",
  type: "Single",
  date: "New Release",
  duration: "02:14",
  description:
    "A volatile blend of heavy bass, glassy synths, and late-night pressure — the newest entry in the Klysmic soundscape.",
  spotifyUrl: "https://open.spotify.com/track/5a1FGtZtH6v4qV2TnavcKZ?si=8d1e09601ecc4abb",
  spotifyEmbedUrl: "https://open.spotify.com/embed/track/5a1FGtZtH6v4qV2TnavcKZ",
};

const discography = [
  {
    title: "Soul Circuit",
    type: "Single",
    year: "2026",
    duration: "02:14",
    mood: "Electric / Cinematic",
    spotifyUrl: "https://open.spotify.com/track/5a1FGtZtH6v4qV2TnavcKZ?si=8d1e09601ecc4abb",
  },
  {
    title: "Aftershock",
    type: "Single",
    year: "2026",
    duration: "03:42",
    mood: "Explosive / Cinematic",
    spotifyUrl: "#",
  },
  {
    title: "Faultline",
    type: "Single",
    year: "2026",
    duration: "04:08",
    mood: "Heavy / Atmospheric",
    spotifyUrl: "#",
  },
  {
    title: "Static Bloom",
    type: "Single",
    year: "2025",
    duration: "03:36",
    mood: "Glitchy / Emotional",
    spotifyUrl: "#",
  },
  {
    title: "Blackout Pulse",
    type: "Single",
    year: "2025",
    duration: "02:58",
    mood: "Dark / Driving",
    spotifyUrl: "#",
  },
  {
    title: "Signal Burn",
    type: "Single",
    year: "2025",
    duration: "03:21",
    mood: "Distorted / Hypnotic",
    spotifyUrl: "#",
  },
];

function openLink(url) {
  if (!url || url === "#") return;
  window.open(url, "_blank", "noopener,noreferrer");
}

function Icon({ name }) {
  const icons = {
    play: "▶",
    music: "♫",
    arrow: "↗",
    sparkles: "✦",
    instagram: "◎",
    youtube: "▶",
  };

  return <span className="icon">{icons[name] || icons.sparkles}</span>;
}

function Button({ children, variant = "solid", onClick }) {
  return (
    <button className={`btn ${variant === "outline" ? "btn-outline" : "btn-solid"}`} onClick={onClick}>
      {children}
    </button>
  );
}

function SpotifyEmbed({ src, title }) {
  if (!src) return null;

  return (
    <div className="spotify-box">
      <p className="spotify-label">Spotify player preview</p>
      <iframe
        title={`Spotify player for ${title}`}
        src={src}
        width="100%"
        height="152"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
      <p className="preview-note">
        If you see “content blocked,” that is usually just the preview environment. The Spotify link button will still work.
      </p>
    </div>
  );
}

function runSmokeTests() {
  console.assert(latestRelease.title === "Soul Circuit", "latest release should be Soul Circuit");
  console.assert(typeof latestRelease.spotifyEmbedUrl === "string", "latest release should include a Spotify embed URL string");
  console.assert(latestRelease.spotifyEmbedUrl.includes("/embed/track/"), "Spotify embed URL should use the embed track format");
  console.assert(Array.isArray(discography), "discography should be an array");
  console.assert(discography.length >= 5, "expected at least five discography songs");
  console.assert(discography[0].title === latestRelease.title, "latest release should appear first in discography");
  console.assert(typeof Button === "function", "Button component should be locally defined");
  console.assert(typeof SpotifyEmbed === "function", "SpotifyEmbed component should be locally defined");
}

runSmokeTests();

export default function App() {
  return (
    <div className="site">
      <style>{styles}</style>

      <div className="background-glow one" />
      <div className="background-glow two" />
      <div className="grid-bg" />

      <header className="header">
        <a href="#home" className="brand">
          <span className="logo"><Icon name="sparkles" /></span>
          <span>KLYSMIC</span>
        </a>
        <nav className="nav">
          <a href="#latest">Latest Release</a>
          <a href="#discography">Discography</a>
          <a href="#about">About</a>
          <a href="#connect">Connect</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero section-wrap">
          <div className="hero-copy fade-up">
            <div className="pill"><span /> Latest release available now</div>
            <h1>Sound for the aftermath.</h1>
            <p>
              Klysmic turns pressure into motion: bass-heavy, cinematic music built for dark rooms,
              late drives, and moments that feel bigger than the night.
            </p>
            <div className="button-row">
              <Button onClick={() => openLink(latestRelease.spotifyUrl)}><Icon name="play" /> Listen Now</Button>
              <Button variant="outline" onClick={() => document.getElementById("discography")?.scrollIntoView({ behavior: "smooth" })}>
                View Discography <Icon name="arrow" />
              </Button>
            </div>
          </div>

          <div className="art-card fade-in">
            <div className="album-card">
              <div className="album-top">
                <span>KLYSMIC</span>
                <span>{latestRelease.date}</span>
              </div>
              <div>
                <div className="wave-bars">
                  {[38, 72, 46, 90, 58, 110, 76, 124, 63, 96, 44, 82].map((h, i) => (
                    <span key={i} style={{ height: `${h}px` }} />
                  ))}
                </div>
                <h2>{latestRelease.title}</h2>
                <p>{latestRelease.type} · {latestRelease.duration}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="latest" className="section-wrap latest-card">
          <div className="latest-art">
            <p className="eyebrow">Latest Release</p>
            <h2>{latestRelease.title}</h2>
            <p>{latestRelease.type} · {latestRelease.duration}</p>
          </div>
          <div className="latest-info">
            <p className="eyebrow">Now Playing</p>
            <h3>The newest sound from Klysmic.</h3>
            <p>{latestRelease.description}</p>
            <SpotifyEmbed src={latestRelease.spotifyEmbedUrl} title={latestRelease.title} />
            <div className="button-row">
              <Button onClick={() => openLink(latestRelease.spotifyUrl)}><Icon name="play" /> Play on Spotify</Button>
              <Button variant="outline" onClick={() => openLink(latestRelease.spotifyUrl)}>Save Track <Icon name="music" /></Button>
            </div>
          </div>
        </section>

        <section id="discography" className="section-wrap discography-section">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Discography</p>
              <h2>All songs by Klysmic.</h2>
            </div>
            <Button variant="outline" onClick={() => openLink(spotifyArtistUrl)}>Listen on Spotify <Icon name="arrow" /></Button>
          </div>

          <div className="song-table">
            <div className="song-header">
              <span>#</span>
              <span>Song</span>
              <span>Type</span>
              <span>Year</span>
              <span>Mood</span>
            </div>
            {discography.map((song, index) => (
              <div className="song-row" key={song.title}>
                <span className="track-number">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <strong>{song.title}</strong>
                  {index === 0 && <em>Latest</em>}
                  <small>{song.duration}</small>
                </div>
                <span>{song.type}</span>
                <span>{song.year}</span>
                <span className="mood">
                  {song.mood}
                  <button className="play-small" onClick={() => openLink(song.spotifyUrl)}>▶</button>
                </span>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="section-wrap about-section">
          <p className="eyebrow">About Klysmic</p>
          <div>
            <h2>A collision of cinematic bass, fractured melody, and raw atmosphere.</h2>
            <p>
              Built for listeners who want music to feel physical, Klysmic blends underground electronic
              textures with emotional songwriting and high-impact visual identity. Every release is designed
              as a world: sound, motion, light, and story moving together.
            </p>
          </div>
        </section>

        <section id="connect" className="section-wrap connect-card">
          <h2>Follow the sound.</h2>
          <p>Stream the latest songs, watch new visuals, and keep up with future Klysmic releases.</p>
          <div className="button-row center">
            <Button onClick={() => openLink(spotifyArtistUrl)}><Icon name="music" /> Spotify</Button>
            <Button variant="outline"><Icon name="instagram" /> Instagram</Button>
            <Button variant="outline"><Icon name="youtube" /> YouTube</Button>
          </div>
        </section>
      </main>
    </div>
  );
}

const styles = `
* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin: 0; font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; background: #09090b; color: white; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
.site { min-height: 100vh; overflow: hidden; position: relative; background: #09090b; color: white; }
.background-glow { position: fixed; z-index: 0; border-radius: 999px; filter: blur(90px); pointer-events: none; }
.background-glow.one { width: 38rem; height: 38rem; left: 50%; top: -12rem; transform: translateX(-50%); background: rgba(217, 70, 239, 0.22); }
.background-glow.two { width: 32rem; height: 32rem; right: -10rem; bottom: -10rem; background: rgba(6, 182, 212, 0.14); }
.grid-bg { position: fixed; inset: 0; z-index: 0; opacity: 0.18; background-image: radial-gradient(circle at center, rgba(255,255,255,0.14) 1px, transparent 1px); background-size: 28px 28px; pointer-events: none; }
.header, main { position: relative; z-index: 1; }
.header { max-width: 1180px; margin: 0 auto; padding: 24px; display: flex; align-items: center; justify-content: space-between; }
.brand { display: flex; align-items: center; gap: 12px; font-weight: 900; letter-spacing: 0.32em; }
.logo { width: 42px; height: 42px; display: grid; place-items: center; border-radius: 18px; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.14); }
.nav { display: flex; gap: 30px; color: #d4d4d8; font-size: 14px; }
.nav a:hover { color: white; }
.section-wrap { max-width: 1180px; margin: 0 auto; padding: 80px 24px; }
.hero { display: grid; grid-template-columns: 1.1fr 0.9fr; gap: 54px; align-items: center; padding-top: 70px; }
.pill { display: inline-flex; gap: 10px; align-items: center; padding: 9px 15px; border-radius: 999px; border: 1px solid rgba(255,255,255,0.12); background: rgba(255,255,255,0.05); color: #d4d4d8; font-size: 14px; }
.pill span { width: 8px; height: 8px; background: #e879f9; border-radius: 999px; }
h1 { margin: 26px 0 0; max-width: 820px; font-size: clamp(56px, 9vw, 128px); line-height: 0.88; letter-spacing: -0.08em; text-transform: uppercase; font-weight: 950; }
.hero-copy > p, .latest-info > p, .about-section p, .connect-card p { color: #d4d4d8; font-size: 18px; line-height: 1.8; }
.hero-copy > p { max-width: 650px; margin-top: 32px; }
.button-row { display: flex; gap: 14px; flex-wrap: wrap; margin-top: 32px; }
.button-row.center { justify-content: center; }
.btn { border: 0; cursor: pointer; border-radius: 999px; padding: 14px 24px; display: inline-flex; align-items: center; justify-content: center; gap: 9px; font-weight: 800; transition: transform .2s ease, background .2s ease, border-color .2s ease; }
.btn:hover { transform: translateY(-2px); }
.btn-solid { color: #09090b; background: white; }
.btn-outline { color: white; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.2); }
.btn-outline:hover { background: rgba(255,255,255,0.1); }
.icon { display: inline-flex; align-items: center; justify-content: center; }
.art-card { position: relative; padding: 20px; border-radius: 34px; background: linear-gradient(135deg, rgba(39,39,42,1), rgba(112,26,117,.6), rgba(0,0,0,1)); border: 1px solid rgba(255,255,255,0.16); box-shadow: 0 25px 80px rgba(0,0,0,0.45); }
.art-card::before { content: ""; position: absolute; inset: -32px; border-radius: 999px; background: rgba(217,70,239,.18); filter: blur(55px); z-index: -1; }
.album-card { aspect-ratio: 1; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; border-radius: 26px; background: rgba(0,0,0,0.35); border: 1px solid rgba(255,255,255,0.1); }
.album-top { display: flex; justify-content: space-between; color: #a1a1aa; font-size: 12px; text-transform: uppercase; letter-spacing: .28em; }
.wave-bars { height: 160px; display: flex; align-items: flex-end; gap: 8px; margin-bottom: 30px; }
.wave-bars span { flex: 1; border-radius: 999px; background: rgba(255,255,255,0.82); }
.album-card h2 { margin: 0; font-size: 42px; text-transform: uppercase; letter-spacing: -0.06em; }
.album-card p { color: #a1a1aa; margin: 8px 0 0; }
.latest-card { display: grid; grid-template-columns: .85fr 1.15fr; gap: 34px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); border-radius: 34px; padding: 38px; }
.latest-art { border-radius: 26px; border: 1px solid rgba(255,255,255,.1); background: linear-gradient(135deg, rgba(217,70,239,.18), #09090b, rgba(6,182,212,.1)); padding: 28px; }
.eyebrow { margin: 0; color: #f0abfc; font-size: 13px; text-transform: uppercase; letter-spacing: .34em; font-weight: 800; }
.latest-art h2 { margin: 24px 0 12px; font-size: clamp(48px, 7vw, 86px); line-height: .88; letter-spacing: -0.08em; text-transform: uppercase; }
.latest-art p:last-child { color: #a1a1aa; }
.latest-info h3, .section-heading h2, .about-section h2, .connect-card h2 { margin: 14px 0 0; font-size: clamp(38px, 5vw, 64px); line-height: 1; letter-spacing: -0.05em; }
.spotify-box { margin-top: 28px; padding: 16px; border-radius: 22px; border: 1px solid rgba(255,255,255,.1); background: rgba(0,0,0,.3); text-align: center; overflow: hidden; }
.spotify-label { color: #a1a1aa; font-size: 14px; margin: 0 0 12px; }
.spotify-box iframe { border-radius: 14px; border: 0; display: block; }
.preview-note { color: #71717a; font-size: 12px; margin: 12px 0 0; }
.section-heading { display: flex; align-items: end; justify-content: space-between; gap: 24px; margin-bottom: 38px; }
.song-table { overflow: hidden; border-radius: 24px; border: 1px solid rgba(255,255,255,.1); background: rgba(255,255,255,.04); }
.song-header, .song-row { display: grid; grid-template-columns: 80px 1fr 120px 120px 220px; gap: 18px; align-items: center; padding: 18px 24px; }
.song-header { color: #71717a; font-size: 12px; text-transform: uppercase; letter-spacing: .25em; border-bottom: 1px solid rgba(255,255,255,.1); }
.song-row { border-bottom: 1px solid rgba(255,255,255,.1); color: #d4d4d8; }
.song-row:last-child { border-bottom: 0; }
.song-row strong { display: inline-block; color: white; font-size: 19px; margin-right: 10px; }
.song-row em { display: inline-block; color: #f5d0fe; background: rgba(217,70,239,.18); border-radius: 999px; padding: 4px 10px; font-size: 12px; font-style: normal; }
.song-row small { display: block; margin-top: 5px; color: #71717a; }
.track-number { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; color: #a1a1aa; }
.mood { display: flex; align-items: center; justify-content: space-between; gap: 14px; }
.play-small { width: 38px; height: 38px; border-radius: 999px; border: 0; cursor: pointer; color: white; background: rgba(255,255,255,.08); }
.play-small:hover { background: rgba(255,255,255,.14); }
.about-section { display: grid; grid-template-columns: .8fr 1.2fr; gap: 44px; }
.connect-card { text-align: center; border-radius: 34px; border: 1px solid rgba(255,255,255,.1); background: linear-gradient(135deg, rgba(217,70,239,.18), rgba(255,255,255,.04), rgba(6,182,212,.09)); }
.connect-card p { max-width: 650px; margin: 20px auto 0; }
.fade-up { animation: fadeUp .7s ease both; }
.fade-in { animation: fadeIn .9s ease both; }
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; transform: scale(.94); } to { opacity: 1; transform: scale(1); } }
@media (max-width: 850px) {
  .nav { display: none; }
  .hero, .latest-card, .about-section { grid-template-columns: 1fr; }
  .section-wrap { padding: 62px 20px; }
  .hero { padding-top: 48px; }
  .section-heading { align-items: start; flex-direction: column; }
  .song-header { display: none; }
  .song-row { grid-template-columns: 48px 1fr; }
  .song-row > span:nth-child(3), .song-row > span:nth-child(4) { display: none; }
  .mood { grid-column: 2; justify-content: flex-start; color: #a1a1aa; }
}
`;
