
import React from 'react';

export default function News() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('/data/news.json').then(r=>r.json()).then(setItems).catch(()=>setItems([]));
  }, []);

  return (
    <section className="min-h-screen bg-black py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold text-cyan-300 mb-10">News</h2>
        <div className="space-y-8">
          {items.map((n, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-4 transition-transform duration-200 hover:scale-[1.02] shadow-lg"
              style={{ willChange: 'transform' }}
            >
              <div className="flex gap-6 items-start">
                {n.image && (
                  <img
                    src={`/news/${n.image}`}
                    alt="announcement"
                    className="rounded-xl"
                    style={{ width: '320px', height: '200px', objectFit: 'cover', objectPosition: 'center' }}
                  />
                )}
                <div className="text-black leading-relaxed whitespace-pre-line">
                  {n.text}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
