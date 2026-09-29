import type { CSSProperties } from 'react'
import { ArrowUpRight, MapPin } from '@/components/slab'
import { profile } from '@/data/profile'

/**
 * AboutGrid - the About view as a fixed viewport.
 *
 * One glass sheet, two columns: who you are on the left, the illustration
 * on the right. Sized to the panel, so nothing here scrolls.
 *
 * The left column is a ladder, not a paragraph block: one display statement,
 * one line of context, then the four things you do - each carrying the marks
 * of the tools it is built with. The tools are the proof, so they are the
 * visual. Swap the marks below for your own (any square SVG/PNG in public/).
 */

const REACT = { src: '/icons/ai/react.svg', name: 'React' }
const TAILWIND = { src: '/icons/ai/tailwindcss.svg', name: 'Tailwind CSS' }
const VITE = { src: '/icons/ai/vite.svg', name: 'Vite' }
const NODE = { src: '/icons/ai/nodedotjs.svg', name: 'Node.js' }
const GITHUB = { src: '/icons/ai/github.svg', name: 'GitHub' }
const VSCODE = { src: '/icons/vscode.svg', name: 'VS Code' }

type Capability = {
  index: string
  title: string
  marks: { src: string; name: string }[]
}

const CAPABILITIES: Capability[] = [
  { index: '01', title: 'Web Development', marks: [REACT, VITE, NODE] },
  { index: '02', title: 'Front-End Design', marks: [TAILWIND, REACT] },
  { index: '03', title: 'UI/UX Implementation', marks: [REACT, TAILWIND, VSCODE] },
  { index: '04', title: 'Website Optimization', marks: [VITE, GITHUB] },
]

export default function AboutGrid() {
  return (
    <section className="pgrid agrid" aria-labelledby="about-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">About</span>
        <h1 className="pgrid__title" id="about-title">
          {`Hi, I’m ${profile.firstName}.`}
        </h1>
        <p className="pgrid__lede">
          Developer building responsive, user-friendly web applications.
        </p>
      </header>

      <div className="home__glass agrid__glass">
        <div className="agrid__copy">
          <p className="agrid__lead">
            I turn complex ideas into seamless digital solutions.
            <span> Clean code, intuitive design, and always something new to learn.</span>
          </p>

          <p className="agrid__note">
            <strong>BSIT, ACLC College of Bukidnon.</strong> I focus on clean code and intuitive
            design, and I keep exploring new technologies to sharpen my skills. Since 2024 I have
            built and deployed responsive web apps with HTML, CSS, JavaScript, and React, and
            worked with teammates on GitHub. TODO: add your job role and company. In progress:
            Meta Front-End Developer course.
          </p>

          <ul className="agrid__caps" role="list">
            {CAPABILITIES.map((c) => (
              <li key={c.index} className="agrid__cap">
                <span className="agrid__cap-marks">
                  {c.marks.map((m, i) => (
                    <span
                      key={m.name}
                      className="agrid__mark"
                      style={{ '--i': c.marks.length - i } as CSSProperties}
                    >
                      <img src={m.src} alt={m.name} loading="lazy" decoding="async" />
                    </span>
                  ))}
                </span>
                <span className="agrid__cap-title">{c.title}</span>
                <span className="agrid__cap-index" aria-hidden="true">
                  {c.index}
                </span>
              </li>
            ))}
          </ul>

          {/* One plate, two cells sharing a mark / title / meta anatomy. */}
          <div className="agrid__bar">
            <span className="agrid__cell">
              <span className="agrid__cell-mark agrid__cell-mark--img">
                <img src="/placeholders/badge.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">FreeCodeCamp Responsive Web Design</span>
                <span className="agrid__cell-meta">Certification</span>
              </span>
            </span>

            <span className="agrid__cell">
              <span className="agrid__cell-mark">
                <MapPin size={16} weight="fill" aria-hidden="true" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">{profile.location}</span>
                <span className="agrid__cell-meta">TODO: timezone and working hours</span>
              </span>
            </span>

            <span className="agrid__cell agrid__cell--wide">
              <span className="agrid__cell-mark agrid__cell-mark--plain">
                <img src="/placeholders/logo.svg" alt="" loading="lazy" decoding="async" />
              </span>
              <span className="agrid__cell-copy">
                <span className="agrid__cell-title">ACLC College of Bukidnon</span>
                <span className="agrid__cell-meta">BSIT · graduation year TODO</span>
              </span>
              <ArrowUpRight className="agrid__cell-go" size={15} weight="bold" aria-hidden="true" />
            </span>
          </div>
        </div>

        <div className="agrid__portrait">
          <img
            src={profile.hero.portraitSrc}
            alt={profile.hero.portraitAlt}
            loading="eager"
            decoding="async"
            width={400}
            height={400}
          />
        </div>
      </div>
    </section>
  )
}
