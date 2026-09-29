import { ArrowUpRight, FolderOpen } from '@/components/slab'

/**
 * ProjectsGrid - the Projects view on one glass sheet.
 *
 * Add a real project by adding an entry to PROJECTS (name, description,
 * GitHub link, optional live link). The card opens the live site when there
 * is one, otherwise the GitHub repo.
 */
type Project = {
  name: string
  description: string
  github: string
  live?: string
}

const PROJECTS: Project[] = [
  {
    name: "John Ragsac's Personal Portfolio",
    description: 'A modern, responsive developer portfolio showcasing projects and technical skills.',
    github: 'https://github.com/ragsac84/my-portfolio',
    // TODO: add the live website URL once it is deployed.
  },
]

export default function ProjectsGrid() {
  return (
    <section className="pgrid" aria-labelledby="projects-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Projects</span>
        <h1 className="pgrid__title" id="projects-title">
          Responsive web projects, built and shipped.
        </h1>
        <p className="pgrid__lede">
          My personal portfolio is live on GitHub. TODO: add details for the academic web projects.
        </p>
      </header>

      <div className="home__glass pgrid__glass">
        <div className="bento bento--projects" style={{ gridTemplateColumns: '1fr', gridTemplateRows: 'auto' }}>
          {PROJECTS.map((p) => (
            <a
              key={p.name}
              className="bento__card bento__card--btn"
              href={p.live ?? p.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="bento__head">
                <span className="bento__icon">
                  <FolderOpen size={22} />
                </span>
                <span className="bento__title">{p.name}</span>
                <span className="bento__desc">{p.description}</span>
                <ArrowUpRight size={15} weight="bold" aria-hidden="true" className="bento__arrow" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
