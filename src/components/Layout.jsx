// Layout.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Layout({ children }) {
  const base = import.meta.env.BASE_URL;

  const logoRef = React.useRef(null);
  const navRef = React.useRef(null);
  const fitRef = React.useRef(null);

  React.useLayoutEffect(() => {
    function update() {
      if (!logoRef.current || !navRef.current || !fitRef.current) return;

      const logoRect = logoRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      const left = Math.max(0, Math.floor(logoRect.left));
      const right = Math.min(window.innerWidth, Math.ceil(navRect.right));
      const width = Math.max(0, right - left);

      fitRef.current.style.setProperty('--header-left', `${left}px`);
      fitRef.current.style.setProperty('--header-width', `${width}px`);
    }

    update();
    window.addEventListener('resize', update);
    window.addEventListener('load', update);
    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('load', update);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="w-full border-b border-neutral-900">
        <div className="container mx-auto px-6 py-6 flex items-start justify-between">
          {/* Logo */}
          <div className="flex items-start pl-[14%]">
            <img
              ref={logoRef}
              src={base + "793675fd-3f32-47f0-b029-4e856785e894-wm.png"}
              alt="Boghossian Lab"
              className="h-32 w-auto select-none pointer-events-none"
            />
          </div>

          {/* Nav */}
          <nav
            ref={navRef}
            className="flex gap-8 text-base font-medium"
            style={{ marginTop: '4rem' }}
          >
            <NavLink to="/" className="hover:text-cyan-400">Home</NavLink>
            <NavLink to="/research" className="hover:text-cyan-400">Research</NavLink>
            <NavLink to="/people" className="hover:text-cyan-400">People</NavLink>
            <NavLink to="/publications" className="hover:text-cyan-400">Publications</NavLink>
            <NavLink to="/news" className="hover:text-cyan-400">News</NavLink>
          </nav>
        </div>
      </header>

      {/* Header-fit wrapper: every page will align with header span */}
      <main
        ref={fitRef}
        style={{
          width: 'min(100vw, var(--header-width, 100%))',
          marginLeft: 'var(--header-left, auto)',
          marginRight: 0,
          maxWidth: '100vw',
        }}
      >
        {children}
      </main>
    </div>
  );
}
