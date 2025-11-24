
import React from 'react';

export default function People() {
  return (
    <section className="min-h-screen bg-black text-neutral-100">
      <div className="max-w-6xl mx-auto px-6 py-16 space-y-10">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          <div className="md:col-span-2">
            <img src="/people/Profile_pic_2025.png" alt="Ardemis A. Boghossian" className="w-full rounded-2xl shadow-lg object-cover" />
          </div>
          <div className="md:col-span-3">
            <p className="text-2xl font-bold">Ardemis A. Boghossian, Ph.D.</p>
            <p className="mt-2 text-lg">Professor of Chemical Engineering</p>
            <div className="h-4" />
            <p className="font-bold">Contact</p>
            <p>Email: arde [at] alum.mit.edu</p>
            <p>Phone: +41 79 333 46 78</p>
          </div>
        </div>

        <div className="prose prose-invert max-w-none text-justify">
          <p dangerouslySetInnerHTML={{__html: `<strong>Ardemis A. Boghossian</strong> obtained her B.S.E. in Chemical Engineering from the University of Michigan. She received her Ph.D. in Chemical Engineering from the Massachusetts Institute of Technology (MIT) under the supervision of Prof. Michael S. Strano. Her thesis focused on single-walled carbon nanotube (SWCNT) optical characterizations and applications. She then pursued her postdoctoral studies at the California Institute of Technology (Caltech) under the direction of 2018 Chemistry Nobel Laureate, Frances H. Arnold. Her work focused on heterologous protein expression and protein bioengineering. She began her independent career as an Assistant Professor at the Ecole Polytechnique Fédérale de Lausanne (EPFL) in Switzerland in 2015, where she founded the Laboratory of NanoBiotechnology (LNB). Her laboratory specializes in technologies that lie at the interface of bioengineering and nanomaterials science, focusing on applications in optical sensing and bioenergy.`}} />
        </div>

        <div>
          <h2 className="text-xl font-bold">Education</h2>
          <div className="h-3" />
          <p>Postdoc, Department of Chemical Engineering, California Institute of Technology (Caltech), 2012-2014</p>
          <div className="h-3" />
          <p>Ph.D. in Chemical Engineering, Massachusetts Institute of Technology (MIT), 2012<br/>Minor: Materials Science and Engineering, Electrical Engineering</p>
          <div className="h-3" />
          <p>B.S.E. in Chemical Engineering, University of Michigan – Ann Arbor, 2007<br/>Minor: Mathematics</p>
        </div>

        <div>
          <h2 className="text-xl font-bold">Selected Honors &amp; Awards</h2>
          <div className="h-3" />
          <ul className="space-y-2 list-disc list-inside">
            <li>ACS Rising Star in Biological, Medicinal, and Pharmaceutical Chemistry, 2024</li>
            <li>Young Innovator Award in Bio-inspired Nanomaterials, 2024</li>
            <li>Nanocarbons SES Research Young Investigator Award, 2022</li>
            <li>European Society of Photobiology (ESP) Young Investigator Award, 2021</li>
            <li>European Research Commission (ERC) Starting Grant Award, 2019</li>
            <li>Young Innovator Award in NanoEnergy, 2019</li>
            <li>Frontiers in Chemistry “Rising Star”, 2019</li>
            <li>Roger Taylor Award, 2016</li>
            <li>Assistant Professor (AP) Energy Grant Award, 2015</li>
            <li>NIH NRSA (F32) Postdoctoral Fellowship (top 1%), 2014</li>
            <li>NDSEG Fellowship, 2009</li>
          </ul>
        </div>


        {/* ---- Group Media Gallery ---- */}
        <div className="mt-16 space-y-12">
          <figure>
            <img src="/people/SaraPhD_2025.jpg" alt="Celebration of PhD defense of Dr. Sara Behjati" className="w-full rounded-2xl shadow-lg" />
            <figcaption className="mt-3">
              <p><strong>Celebration of PhD defense of Dr. Sara Behjati with group alumni and family, April 2025</strong></p>
              <p>Group members alumni (left to right): Vivek Prakash, Mohammed Mouhib, Elena Grebeaux, Melania Reggente, Subhasis Dehury, Niccolò Martinolli (top), Benjamin Rousseau (bottom), Charlotte Roullier, Ardemis Boghossian, Sara Behjati, and Sayyed Hashem Sajjadi.</p>
            </figcaption>
          </figure>

          <figure>
            <video src="/people/Group_April2021.mp4" autoPlay muted loop playsInline className="w-full rounded-2xl shadow-lg" />
            <figcaption className="mt-3">
              <p><strong>Laboratory of NanoBiotechnology (LNB), April 2021</strong></p>
              <p>(left to right) Melania Reggente (postdoc) (top), Niloufar Sharif (postdoc) (bottom), Mary Wood (postdoc), Ardemis Boghossian (PI) (top), Sara Behjati (PhD) (bottom), Sayyed Hashem Sajjadi (postdoc) (top), Mohammed Mouhib (bottom), Xuewen Liu (postdoc) (top), Benjamin Lambert (PhD) (bottom), Hanxuan Wang (PhD) (top), Elena Grebeaux (administration assistant) (bottom).</p>
            </figcaption>
          </figure>

          <figure>
            <img src="/people/grouppic_October2019.gif" alt="EPFL, October 2019" className="w-full rounded-2xl shadow-lg" />
            <figcaption className="mt-3">
              <p><strong>Ecole Polytechnique Fédérale de Lausanne (EPFL), October 2019</strong></p>
              <p>(left to right) Benjamin Lambert (PhD), Avip Bastakoti (Master), Sayyed Hashem Sajjadi (visiting PhD), Lin Li (visiting PhD), Mohammed Mouhib (PhD), Shang-Jung Wu (PhD) (top), Judth Porta (undergraduate) (bottom), Ardemis Boghossian (PI), Afsaneh Taheri (visiting PhD), Melania Reggente (postdoc) (top), Alessandra Antonucci (PhD) (bottom), Alice Gillen (PhD), Vitalijs Zubkovs (PhD).</p>
            </figcaption>
          </figure>

          <figure>
            <img src="/people/GroupPhoto_2017.png" alt="June 2017" className="w-full rounded-2xl shadow-lg" />
            <figcaption className="mt-3">
              <p><strong>June 2017</strong></p>
              <p>(left to right) Benjamin Lambert (PhD), Manuel Moradell-Casellas (Master), Daniel Molino Romero (PhD), Vitalijs Zubkovs (PhD), Alice Gillen (PhD), Alessandra Antonucci (PhD), Nils Schürgers (postdoc), Charlotte Romane (Master), Ardemis Boghossian (PI), Josephine Pratiwi (Master), Justyna Kupis-Rozmysłowicz (postdoc), Fara Malala Raharisolo (administrative assistant), Esra Ahunbay (Master), Shang-Jung Wu (PhD).</p>
            </figcaption>
          </figure>

          <figure>
            <img src="/people/GroupPic_September2016.jpg" alt="" className="w-full rounded-2xl shadow-lg" />
            <figcaption className="mt-3">
              <p><strong>The Rolex Learning Center, September 2016</strong></p>
              <p>(left to right) Fara Malala Raharisolo (administrative assistant), Alessandra Antonucci (PhD), Benjamin Lambert (PhD), Ardemis Boghossian (PI), Shang-Jung Wu (PhD), Justyna Kupis-Rozmysłowicz (postdoc), Nils Schürgers (postdoc), Merve Özel (Master), Esra Ahunbay (Master), Vitalijs Zubkovs (PhD).</p>
            </figcaption>
          </figure>

          <figure>
            <img src="/people/GroupPic_September2016_v2.jpg" alt="" className="w-full rounded-2xl shadow-lg" />
            <figcaption className="mt-3">
              <p><strong>Laboratory of NanoBiotechnology, “LNB”, September 2016</strong></p>
              <p>(left to right) Merve Özel (Master), Nils Schürgers (postdoc) (top), Shang-Jung Wu (PhD) (bottom), Justyna Kupis-Rozmysłowicz (postdoc), Alessandra Antonucci (PhD), Fara Malala Raharisolo (administrative assistant), Vitalijs Zubkovs (PhD), Esra Ahunbay (Master) (top), Benjamin Lambert (PhD) (bottom), Ardemis Boghossian (PI).</p>
            </figcaption>
          </figure>
        </div>

        <div>
          <h2 className="text-xl font-bold">Laboratory of NanoBiotechnology (LNB)</h2>
          <div className="h-3" />
          <p>EPFL SB ISIC LNB, Station 6, 1015 Lausanne, Switzerland</p>
        </div>

      </div>
    </section>
  );
}
