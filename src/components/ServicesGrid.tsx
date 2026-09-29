/**
 * ServicesGrid - the Services view on one glass sheet.
 *
 * Four service cards, each carrying the marks of the tools it is built with.
 * Same object language as Home and Projects: the glass, the bento card,
 * plated marks. Styles live in src/styles/services-grid.css.
 */

const REACT = '/icons/ai/react.svg'
const TAILWIND = '/icons/ai/tailwindcss.svg'
const VITE = '/icons/ai/vite.svg'
const NODE = '/icons/ai/nodedotjs.svg'
const VSCODE = '/icons/vscode.svg'
const GITHUB = '/icons/ai/github.svg'

type Service = {
  index: string
  title: string
  description: string
  logos: string[]
}

const SERVICES: Service[] = [
  {
    index: '01',
    title: 'Web Development',
    description: 'Responsive web applications built with HTML, CSS, JavaScript, and React.',
    logos: [REACT, VITE, NODE],
  },
  {
    index: '02',
    title: 'Front-End Design',
    description: 'Clean, user-friendly interfaces that work on desktop, tablet, and mobile.',
    logos: [TAILWIND, REACT],
  },
  {
    index: '03',
    title: 'UI/UX Implementation',
    description: 'Interface designs turned into working, intuitive components.',
    logos: [REACT, TAILWIND, VSCODE],
  },
  {
    index: '04',
    title: 'Website Optimization',
    description: 'Improvements to how an existing website loads, looks, and behaves.',
    logos: [VITE, GITHUB],
  },
]

/** The tool marks, stacked horizontally on white tiles (same as Projects). */
function Marks({ logos }: { logos: string[] }) {
  return (
    <span className="bento__logos" aria-hidden="true">
      {logos.map((src) => (
        <span key={src} className="bento__logo">
          <img src={src} alt="" width={22} height={22} decoding="async" />
        </span>
      ))}
    </span>
  )
}

export default function ServicesGrid() {
  return (
    <section className="pgrid sgrid" aria-labelledby="services-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Services</span>
        <h1 className="pgrid__title" id="services-title">
          Responsive websites, built with clean code.
        </h1>
        <p className="pgrid__lede">
          Front-end work from first component to finished page.
        </p>
      </header>

      <div className="home__glass sgrid__glass">
        <div className="sgrid__offers">
          <ul className="bento sgrid__services" role="list">
            {SERVICES.map((s) => (
              <li key={s.title} className="bento__card sgrid__service">
                <span className="bento__head">
                  <span className="sgrid__service-top">
                    <Marks logos={s.logos} />
                    <span className="sgrid__service-index" aria-hidden="true">
                      {s.index} / 0{SERVICES.length}
                    </span>
                  </span>
                  <span className="bento__title">{s.title}</span>
                  <span className="bento__desc">{s.description}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
