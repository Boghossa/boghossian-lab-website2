import React from "react";

export default function Research() {
  const slides = [
    {
      src: "/ResearchNews_1.png",
      href: "https://actu.epfl.ch/news/improving-biosensors-for-implantable-sensing-2/",
      alt: "Improving biosensors for implantable sensing",
    },
    {
      src: "/ResearchNews_2.png",
      href: "https://actu.epfl.ch/news/nanotubes-illuminate-the-way-to-living-photovolt-2/",
      alt: "Nanotubes illuminate the way to living photovoltaics",
    },
    {
      src: "/ResearchNews_3.png",
      href: "https://actu.epfl.ch/news/bacteria-generate-electricity-from-wastewater/",
      alt: "Bacteria generate electricity from wastewater",
    },
    {
      src: "/ResearchNews_4.png",
      href: "https://actu.epfl.ch/news/directed-evolution-builds-nanoparticles-3/",
      alt: "Directed evolution builds nanoparticles",
    },
  ];

  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, [slides.length]);

  // Utility: an inner wrapper that reuses the header-fit CSS vars from Layout
  const Fit = ({ children, className = "" }) => (
    <div
      className={className}
      style={{
        width: "var(--header-width, 100%)",
        marginLeft: "var(--header-left, 0px)",
        marginRight: 0,
        maxWidth: "100vw",
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      {/* ---------- MAIN BLACK SECTION (already aligned by <main> in Layout) ---------- */}
      <section className="px-2 py-2 prose prose-invert max-w-none text-left">
        <div className="grid grid-cols-1 md:grid-cols-[5%_1fr]">
          <div className="md:col-start-2">
            {/* Carousel */}
            <div className="relative w-full overflow-hidden rounded-2xl">
              <div
                className="flex transition-transform duration-700 ease-out"
                style={{
                  width: `${slides.length * 100}%`,
                  transform: `translateX(-${index * (100 / slides.length)}%)`,
                }}
              >
                {slides.map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="block w-full shrink-0"
                    style={{ width: `${100 / slides.length}%` }}
                    aria-label={s.alt}
                  >
                    <img
                      src={s.src}
                      alt={s.alt}
                      className="w-full h-[40vh] md:h-[55vh] object-contain"
                      draggable="false"
                    />
                  </a>
                ))}
              </div>

              {/* Dots */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={`h-2 w-2 rounded-full ${
                      i === index ? "bg-white/90" : "bg-white/40"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Intro paragraph */}
            <p className="mt-10 text-white text-lg md:text-xl leading-relaxed">
              Our lab uses a combination of biological and nanomaterials
              engineering to improve interactions at the interface of biological
              and synthetic materials. Our primary applications include {""}
              <span className="font-bold text-cyan-400">Optical Biosensing</span>{" "}
              and {""}
              <span className="font-bold text-[#7ee787]">Living Electronics</span>.
            </p>

            {/* Two top images */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Optical Biosensing */}
              <div className="flex flex-col items-center text-center">
                <a
                  href="#blueTop"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("blueTop")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <h3 className="text-cyan-400 font-bold text-xl mb-4 text-center self-center cursor-pointer">
                    Optical Biosensing
                  </h3>
                </a>
                <a
                  href="#blueTop"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("blueTop")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <img
                    src="/Research_OpticalSensing.png"
                    alt="Optical Biosensing"
                    className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4 cursor-pointer"
                  />
                </a>
                <p className="text-white text-sm leading-snug max-w-xs">
                  Nanotube wrapped with a polymer that is interacting with an analyte. Adapted from {""}
                  <a
                    href="https://www.chimia.ch/chimia/issue/view/2016_11"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-cyan-400 hover:text-cyan-200"
                  >
                    Wu et al. Chimia cover
                  </a>
                  .
                </p>
              </div>

              {/* Living Electronics */}
              <div className="flex flex-col items-center text-center">
                <a
                  href="#greenTop"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("greenTop")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <h3 className="text-[#7ee787] font-bold text-xl mb-4 text-center self-center cursor-pointer">
                    Living Electronics
                  </h3>
                </a>
                <a
                  href="#greenTop"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById("greenTop")?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  <img
                    src="/Research_LivingElectronics.png"
                    alt="Living Electronics"
                    className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4 cursor-pointer"
                  />
                </a>
                <p className="text-white text-sm leading-snug max-w-xs">
                  Light-harvesting cells infused with nanotubes. Adapted from {""}
                  <a
                    href="https://link.springer.com/article/10.1007/s43630-022-00302-3"
                    target="_blank"
                    rel="noreferrer"
                    className="underline text-[#7ee787] hover:text-green-300"
                  >
                    Antonucci et al.
                  </a>
                  .
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- DARK BLUE SECTION ---------- */}
      {/* Black → Blue gradient spacer; full-bleed but aligned via CSS vars */}
      <div className="relative left-[calc(var(--header-left,0px)*-1)] w-screen h-6 md:h-10 bg-gradient-to-b from-black via-[#101b23] to-[#0F2D36]" />

      {/* Full-bleed section wrapper offset to the left by header-left */}
      <section id="blueTop" className="relative left-[calc(var(--header-left,0px)*-1)] w-screen bg-[#0F2D36] py-20">
        {/* Inner fit content realigned to header span */}
        <Fit className="px-1">
          <div className="grid grid-cols-1 md:grid-cols-[5%_1fr]">
            <div className="md:col-start-2">
              {/* Title box */}
              <div className="bg-black rounded-2xl py-6 px-4 w-full flex justify-center mb-10">
                <h3 className="text-cyan-400 font-bold text-3xl text-center">Optical Biosensing</h3>
              </div>

              {/* Description paragraph */}
              <p className="text-white text-lg leading-relaxed max-w-6xl text-justify">
                Our sensors use the fluorescence light that is emitted from single-walled carbon nanotubes (SWCNTs) to detect analytes. Since the fluorescence responds to changes in the environment of the SWCNT, we can detect the different analytes that interact with the SWCNT surface by monitoring the change in the fluorescence light. We control the sensor properties – such as its light sensitivity and specificity to certain analytes – by wrapping the SWCNTs with biological polymers.
              </p>

              {/* Row 1: Zubkovs + Gillen */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Zubkovs */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://pubs.rsc.org/en/content/articlelanding/2022/na/d2na00092j" target="_blank" rel="noreferrer">
                    <img
                      src="/Zubkovs_GOx.png"
                      alt="Zubkovs et al. optical glucose sensing"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Biological engineering of protein wrappings to improve interactions with SWCNTs for optical glucose sensing. Adapted from {""}
                    <a
                      href="https://pubs.rsc.org/en/content/articlelanding/2022/na/d2na00092j"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-cyan-400 hover:text-cyan-200"
                    >
                      Zubkovs et al.
                    </a>
                    .
                  </p>
                </div>

                {/* Gillen */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.8b01879" target="_blank" rel="noreferrer">
                    <img
                      src="/XNA_Gillen.png"
                      alt="Gillen et al. DNA wrapping schematic"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Biological engineering of DNA wrappings to control interactions with SWCNTs for optical dopamine sensing. Adapted from {""}
                    <a
                      href="https://pubs.acs.org/doi/abs/10.1021/acs.jpclett.8b01879"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-cyan-400 hover:text-cyan-200"
                    >
                      Gillen et al.
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Row 2: Lambert + Rabbani */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Lambert */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://pubs.rsc.org/en/content/articlelanding/2019/cc/c8cc08670b" target="_blank" rel="noreferrer">
                    <img
                      src="/DE_Lambert.png"
                      alt="Lambert et al. directed evolution"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Directed evolution approach for engineering DNA wrappings for nanotube optical sensing. Adapted from {""}
                    <a
                      href="https://pubs.rsc.org/en/content/articlelanding/2019/cc/c8cc08670b"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-cyan-400 hover:text-cyan-200"
                    >
                      Lambert et al.
                    </a>
                    .
                  </p>
                </div>

                {/* Rabbani */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://www.biorxiv.org/content/10.1101/2025.05.06.652529v1" target="_blank" rel="noreferrer">
                    <img
                      src="/ML_Rabbani.png"
                      alt="Rabbani et al. machine learning-guided DNA design"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Machine learning-guided design of DNA wrappings for nanotube optical sensing. Adapted from {""}
                    <a
                      href="https://www.biorxiv.org/content/10.1101/2025.05.06.652529v1"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-cyan-400 hover:text-cyan-200"
                    >
                      Rabbani et al.
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* New paragraph at the bottom */}
              <p className="mt-12 text-white text-lg leading-relaxed max-w-6xl text-justify">
                The fluorescence that is emitted by the SWCNTs is in the near-infrared range (NIR-II, ~900–1400 nm). Light at these wavelengths is minimally absorbed, so it can optically penetrate biological tissue and fluids, allowing measurements to be taken inside the body and through blood using light. However, NIR-II light requires special cameras for detection. Through collaboration with Nikon, CrestOptics and the Swiss Center for Electronics and Microtechnology (CSEM), we custom-build setups to enable these measurements in the lab and in the commercial market.
              </p>

              {/* Row 3: Zubkovs Confocal + Zubkovs Portable */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Zubkovs_Confocal */}
                <div className="flex flex-col items-center text-center">
                  <a
                    href="https://www.nature.com/articles/s41598-018-31928-y"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Spinning disc confocal microscope for NIR-II imaging (Zubkovs et al.)"
                  >
                    <img
                      src="/Zubkovs_Confocal.png"
                      alt="Spinning disc confocal microscope for NIR-II imaging"
                      className="rounded-2xl shadow-lg max-w-sm object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Spinning disc confocal microscope for NIR-II imaging. Adapted from {""}
                    <a
                      href="https://www.nature.com/articles/s41598-018-31928-y"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-cyan-400 hover:text-cyan-200"
                    >
                      Zubkovs et al.
                    </a>
                    .
                  </p>
                </div>

                {/* Zubkovs_Portable */}
                <div className="flex flex-col items-center text-center">
                  <a
                    href="https://www.sciencedirect.com/science/article/abs/pii/S0956566325009698"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Portable setup for NIR-II imaging of inflammation in knees (Zubkovs et al.)"
                  >
                    <img
                      src="/Zubkovs_Portable.png"
                      alt="Portable setup for NIR-II imaging of inflammation in knees"
                      className="rounded-2xl shadow-lg max-w-sm object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Portable setup for NIR-II imaging of inflammation in knees. Adapted from {""}
                    <a
                      href="https://www.sciencedirect.com/science/article/abs/pii/S0956566325009698"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-cyan-400 hover:text-cyan-200"
                    >
                      Zubkovs et al.
                    </a>
                    .
                  </p>
                </div>
              </div>
              {/* End Row 3 */}
            </div>
          </div>
        </Fit>
      </section>

      {/* Blue → Green gradient spacer; full-bleed but aligned */}
      <div className="relative left-[calc(var(--header-left,0px)*-1)] w-screen h-6 md:h-10 bg-gradient-to-b from-[#0F2D36] via-[#153425] to-[#0E2C1B]" />

      {/* ---------- DARK GREEN SECTION ---------- */}
      <section id="greenTop" className="relative left-[calc(var(--header-left,0px)*-1)] w-screen bg-[#0E2C1B] py-20">
        <Fit className="px-1">
          {/* Same grid alignment as other sections */}
          <div className="grid grid-cols-1 md:grid-cols-[5%_1fr]">
            <div className="md:col-start-2">
              {/* Black title box */}
              <div className="bg-black rounded-2xl py-6 px-4 w-full flex justify-center mb-10">
                <h3 className="text-[#7ee787] font-bold text-3xl text-center">Living Electronics</h3>
              </div>

              {/* Description paragraph */}
              <p className="text-white text-lg leading-relaxed max-w-6xl text-justify">
                Our electronics are powered or controlled by living biological cells. We engineer bacteria to allow them to electronically interact with surfaces such as electrodes by shuttling electrons into or out of the cells. We simultaneously engineer electrodes to enhance these interactions. We sometimes infuse the bacteria with nanoparticles to further enhance these interactions, blurring the interface between biological and synthetic materials.
              </p>

              {/* Two images: NatNano_Antonucci + Joule_Mouhib */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* NatNano_Antonucci */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://www.nature.com/nnano/volumes/17/issues/10" target="_blank" rel="noreferrer">
                    <img
                      src="/NatNano_Antonucci.png"
                      alt="Light-harvesting bacteria infused with nanotubes act as living photovoltaics"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Light-harvesting bacteria infused with nanotubes act as living photovoltaics. Adapted from {""}
                    <a
                      href="https://www.nature.com/nnano/volumes/17/issues/10"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[#7ee787] hover:text-green-300"
                    >
                      Antonucci et al. Nat. Nanotech cover
                    </a>
                    .
                  </p>
                </div>

                {/* Joule_Mouhib */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://www.cell.com/joule/fulltext/S2542-4351(23)00352-5" target="_blank" rel="noreferrer">
                    <img
                      src="/Joule_Mouhib.png"
                      alt="Bioengineered bacteria act as a living fuel cell"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Bioengineered bacteria act as a living fuel cell. Adapted from {""}
                    <a
                      href="https://www.cell.com/joule/fulltext/S2542-4351(23)00352-5"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[#7ee787] hover:text-green-300"
                    >
                      Mouhib et al.
                    </a>
                    .
                  </p>
                </div>
              </div>

              {/* Second row: Ppy_Roullier + Flavin_Mouhib */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Ppy_Roullier.png — aligned under NatNano_Antonucci.png */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/admt.202201839" target="_blank" rel="noreferrer">
                    <img
                      src="/Ppy_Roullier.png"
                      alt="Nano-engineered electrodes control interactions with bacteria"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Nano-engineered electrodes control interactions with bacteria. Adapted from {""}
                    <a
                      href="https://advanced.onlinelibrary.wiley.com/doi/full/10.1002/admt.202201839"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[#7ee787] hover:text-green-300"
                    >
                      Roullier et al.
                    </a>
                    .
                  </p>
                </div>

                {/* Flavin_Mouhib.png — aligned under Joule_Mouhib.png */}
                <div className="flex flex-col items-center text-center">
                  <a href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202412230" target="_blank" rel="noreferrer">
                    <img
                      src="/Flavin_Mouhib.png"
                      alt="Bioengineered bacteria transfer charge at a distance from the electrode"
                      className="rounded-2xl shadow-lg max-w-sm w-full object-contain mb-4"
                    />
                  </a>
                  <p className="text-white text-sm leading-snug max-w-xs">
                    Bioengineered bacteria transfer charge at a distance from the electrode. Adapted from {""}
                    <a
                      href="https://advanced.onlinelibrary.wiley.com/doi/10.1002/advs.202412230"
                      target="_blank"
                      rel="noreferrer"
                      className="underline text-[#7ee787] hover:text-green-300"
                    >
                      Mouhib et al.
                    </a>
                    .
                  </p>
                </div>
              </div>
              {/* End second row */}
            </div>
          </div>
        </Fit>
      </section>
    </>
  );
}

