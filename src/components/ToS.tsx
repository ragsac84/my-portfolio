import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Terms of Service (review before relying on it). Legal text has to fit YOUR business, so
 * none is supplied. Paste your own terms into the sections below.
 */
export default function ToS() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Terms of Service">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Terms of Service</h1>
        <p className="legal-page__updated">Last updated: September 29, 2026</p>

        <div className="legal-page__body">
          <h2>Using this site</h2>
          <p>This site is the personal portfolio of John Reynald D. Ragsac and is provided for information about my work and skills.</p>

          <h2>Work and payment</h2>
          <p>TODO: add how projects are scoped, billed and delivered if you take paid work.</p>

          <h2>Ownership</h2>
          <p>TODO: state who owns the content and code on this site.</p>

          <h2>Liability</h2>
          <p>TODO: add your limits of liability.</p>

          <h2>Contact</h2>
          <p>
            Questions about these terms: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
