
import React from 'react';

export default function News() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch('/data/news.json').then(r=>r.json()).then(setItems).catch(()=>setItems([]));
  }, []);

  return (
    <section className="max-w-6xl mx-auto px-6 py-16 prose prose-invert max-w-none text-left">
      {/* Match Publications left offset */}
	<div className="pl-[5%] pr-[4%]">
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
    <div className="flex-shrink-0">
      <img
        src={`/news/${n.image}`}
        alt="announcement"
        className="rounded-xl bg-white p-2"
        style={{
          width: '320px',
          height: '200px',
          objectFit: 'contain',
          objectPosition: 'center',
        }}
      />
    </div>
  )}

  {/* Text container aligned consistently across all announcements */}
  <div
  className="text-black text-lg md:text-xl leading-relaxed whitespace-pre-line"
  style={{ flex: 1, marginLeft: '0px' }}
>
  {(() => {
    // Normalize the phrase so all variants are treated the same
    let text = n.text.replaceAll('Learn more here:', 'Learn more about it here:');

    if (text.includes('Learn more about it here:')) {
      const [before, after] = text.split('Learn more about it here:');
      const url = after.trim();

      return (
        <>
          {before.trim()}
          <br />
          <br />
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-cyan-600 underline hover:text-cyan-400"
          >
            Learn more here
          </a>
        </>
      );
    }

    return text;
  })()}
</div>


</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
