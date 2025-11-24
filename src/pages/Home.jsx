import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Home() {
  const [items, setItems] = React.useState([]);
  const base = import.meta.env.BASE_URL;

  React.useEffect(() => {
    fetch(`${base}data/news.json`)
      .then((r) => r.json())
      .then(setItems)
      .catch(() => setItems([]));
  }, [base]);

  return (
    <section className="container mx-auto px-6 py-12">
      {/* Hero section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Left: video + caption */}
        <figure className="figure flex flex-col justify-center h-full items-end">
          <div className="relative w-full flex justify-end">
            <div className="flex flex-col items-start" style={{ width: '90%' }}>
              <video
                className="rounded-2xl shadow-lg object-cover"
                src={base + 'FluorescenceCyanos.mp4'}
                autoPlay
                loop
                muted
                playsInline
                controls
                style={{ width: '100%', height: 'auto' }}
              />
              <figcaption className="caption text-white/80 text-sm mt-3 text-left">
                Light-harvesting cells infused with nanotubes. Adapted from{' '}
                <a
                  href="https://www.nature.com/articles/s41565-022-01198-x"
                  target="_blank"
                  rel="noreferrer"
                  className="underline text-white"
                >
                  Antonucci <em>et al.</em>
                </a>
                .
              </figcaption>
            </div>
          </div>
        </figure>

        {/* Right: text block */}
        <div className="flex flex-col justify-center h-full">
          <div className="text-cyan-400 text-lg md:text-xl font-semibold mb-3">
            The Boghossian Lab
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-white mb-6">
            Engineering Biology and Nanomaterials to Redefine What’s Possible
          </h1>

          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-prose text-justify">
            In the Boghossian Lab, we break down disciplinary boundaries to
            overcome technological limitations at the interface of biological
            and synthetic materials. Through a combination of biological and
            nanomaterials engineering, we aim to reveal new mechanisms, develop
            new approaches, and build transformative biological optoelectronics
            that are ready for real-world translation.
          </p>

          <div>
            <NavLink to="/research" className="btn">
              Learn More
            </NavLink>
          </div>
        </div>
      </div>

      {/* --- Latest News Section --- */}
<div className="mt-20">
  <div className="pl-[5%] pr-[6%] md:pl-[5%] md:pr-[6%]">
    <h2 className="text-cyan-400 text-2xl font-bold mb-8 text-left">
      Read the latest news from our lab
    </h2>

    {/* Grid of news images/captions */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
      {items.slice(0, 3).map((n, i) => (
        <div
          key={i}
          className="flex flex-col items-center text-center bg-white/10 rounded-2xl p-5 shadow-lg w-[320px] h-[400px]"
        >
          {n.image && (
            <div className="bg-white rounded-xl flex items-center justify-center w-full h-64 overflow-hidden mb-3">
              <img
                src={`${base}news/${n.image}`}
                alt="announcement"
                className="max-w-full max-h-full object-contain"
              />
            </div>
          )}
          <p className="text-white text-sm leading-relaxed text-justify">
            <span className="font-bold">{n.text.split(' ')[0]}</span>{' '}
            {n.text.substring(n.text.indexOf(' ') + 1)}
          </p>
        </div>
      ))}
    </div>

  {/* More news link */}
    <div className="mt-10 text-center">
      <NavLink
        to="/news"
        className="text-cyan-400 font-semibold text-lg hover:underline"
      >
        More news →
      </NavLink>
    </div>
  </div>
</div>
</section>
  );
}
