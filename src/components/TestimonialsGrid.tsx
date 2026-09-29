import { Quotes } from '@/components/slab'

/**
 * TestimonialsGrid - the Testimonials view on one glass sheet.
 *
 * One written testimonial. Add more entries to TESTIMONIALS as real ones
 * come in; the list renders them all. Styles live in
 * src/styles/testimonials-grid.css and bento.css.
 */
type Testimonial = { quote: string; attribution: string }

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      'John is a dedicated developer who consistently delivers clean, high-quality code. His attention to detail and creative problem-solving made our team project a success.',
    attribution: 'Academic Project Partner',
  },
]

export default function TestimonialsGrid() {
  return (
    <section className="pgrid tgrid" aria-labelledby="testimonials-title">
      <header className="pgrid__head">
        <span className="pgrid__eyebrow">Testimonials</span>
        <h1 className="pgrid__title" id="testimonials-title">
          What teammates say about working with me.
        </h1>
        <p className="pgrid__lede">Feedback from a team project.</p>
      </header>

      <div className="home__glass tgrid__glass">
        <ul className="bento" role="list" style={{ gridTemplateColumns: '1fr', gridTemplateRows: 'auto' }}>
          {TESTIMONIALS.map((t) => (
            <li key={t.attribution} className="bento__card">
              <span className="bento__head">
                <Quotes size={22} weight="fill" aria-hidden="true" />
                <blockquote className="bento__title" style={{ margin: 0 }}>
                  {t.quote}
                </blockquote>
                <span className="bento__desc">{t.attribution}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
