import { ArrowLeft } from '@/components/slab'
import { useNavigate } from 'react-router-dom'
import { profile } from '@/data/profile'

/**
 * Privacy Policy (review before relying on it). Legal text has to describe YOUR site and what
 * it collects, so none is supplied. Write it (or have a lawyer or a policy
 * generator write it) and paste it into the sections below.
 */
export default function Privacy() {
  const navigate = useNavigate()

  return (
    <main className="legal-page" aria-label="Privacy Policy">
      <div className="legal-page__card">
        <button
          className="legal-page__back"
          onClick={() => navigate('/')}
          aria-label="Back to home"
        >
          <ArrowLeft weight="bold" size={15} aria-hidden="true" />
          Back to home
        </button>

        <h1 className="legal-page__title">Privacy Policy</h1>
        <p className="legal-page__updated">Last updated: September 29, 2026</p>

        <div className="legal-page__body">
          <h2>Who this covers</h2>
          <p>This is the personal portfolio website of John Reynald D. Ragsac. This policy applies to this site only.</p>

          <h2>What is collected</h2>
          <p>By default the contact form opens your own email app, so this site does not store what you write. TODO: update this if you connect a form backend or analytics.</p>

          <h2>How it is used</h2>
          <p>Any message you email to ragsacjohnreynald@gmail.com is used only to reply to you. TODO: add details if you add analytics or third-party services.</p>

          <h2>How long it is kept</h2>
          <p>TODO: state how long emails are kept. To ask for a message to be deleted, email ragsacjohnreynald@gmail.com.</p>

          <h2>Contact</h2>
          <p>
            Questions about this policy: <a href={`mailto:${profile.email}`}>{profile.email}</a>
          </p>
        </div>
      </div>
    </main>
  )
}
