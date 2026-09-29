/**
 * YOUR IDENTITY - start here.
 *
 * Everything that says who you are lives in this file: name, handle, photo,
 * socials, email and the Home headline. Values below are filled in; TODO marks what is still missing.
 * Replace the text, or hand this file to your AI assistant and tell it what
 * to put in each field.
 *
 * Page-specific copy (projects, services, testimonials, FAQs) lives in the
 * other files in src/data/ and at the top of each view component.
 */

import { Briefcase, SealCheck, Clock, type Icon } from '@/components/slab'

export type SocialLink = {
  label: string
  href: string
  iconPath: string
}

/** A proof fact on the phone's Home: a glyph, a short value, a caption. */
export type Stat = { value: string; label: string; Icon: Icon }

export type Profile = {
  name: string
  /** First name, used in "Hi, I'm ___." on About. */
  firstName: string
  handle: string
  /** Short role line under the handle on phones. */
  role: string
  /** Square image. An SVG, WebP or PNG with a transparent background looks best. */
  avatarSrc: string
  /** Tooltip / screen-reader label on the verified tick next to your name. */
  verifiedLabel: string
  email: string
  location: string
  /** Three short proof facts shown on phones under the Home lede. */
  stats: Stat[]
  displayName: { line1: string; line2: string }
  hero: {
    body: string
    portraitSrc: string
    portraitAlt: string
  }
  socials: SocialLink[]
}

export const profile: Profile = {
  name: 'John Reynald D. Ragsac',
  firstName: 'John',
  handle: '@bossragsac',
  role: 'Tuner of AOT',
  avatarSrc: '/avatar.webp',
  verifiedLabel: 'FreeCodeCamp Responsive Web Design certified',
  email: 'ragsacjohnreynald@gmail.com',
  location: 'Valencia City, Bukidnon, Philippines',
  stats: [
    { value: '5+', label: 'Academic web projects', Icon: Briefcase },
    { value: '100+', label: 'GitHub commits', Icon: SealCheck },
    { value: '1', label: 'Portfolio live', Icon: Clock },
  ],
  // The intro types this line, then flies it into the Home headline.
  displayName: { line1: 'Turning ideas into functional,', line2: 'responsive web solutions' },
  hero: {
    body: 'I build responsive, user-friendly web applications with clean code and intuitive design.',
    portraitSrc: '/avatar.webp',
    portraitAlt: 'Portrait of John Reynald D. Ragsac',
  },
  socials: [
    { label: 'GitHub profile', href: 'https://github.com/ragsac84/my-portfolio', iconPath: '/icons/ai/github.svg' },
    { label: 'LinkedIn profile', href: 'https://www.linkedin.com/in/john-ragsac', iconPath: '/icons/linkedin.svg' },
  ],
}
