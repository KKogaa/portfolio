import { useState, useEffect, useRef, type ReactNode } from 'react'
import {
  translations,
  type Lang,
  type Section,
  skills,
  certificates,
  languages,
  summary,
  profile,
  navItems,
} from './data'
import { downloadCv } from './cv-pdf'

function getBrowserLang(): Lang {
  const lang = navigator.language.slice(0, 2).toLowerCase()
  return lang === 'es' ? 'es' : 'en'
}

/** Fades a block in the first time it scrolls into view, then stops observing. */
function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true)
          io.disconnect()
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`reveal ${shown ? 'is-visible' : ''} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

/** Highlights the nav item whose section occupies the middle band of the viewport. */
function useScrollSpy(ids: readonly Section[]): Section {
  const [active, setActive] = useState<Section>(ids[0])

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        const hit = entries.find((e) => e.isIntersecting)
        if (hit) setActive(hit.target.id as Section)
      },
      { rootMargin: '-45% 0px -45% 0px' },
    )
    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) io.observe(el)
    })
    return () => io.disconnect()
  }, [ids])

  return active
}

function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <Reveal>
      <h2 className="headline text-[clamp(2rem,5vw,3.25rem)] mb-12 sm:mb-16">{children}</h2>
    </Reveal>
  )
}

function App() {
  const [lang, setLang] = useState<Lang>(getBrowserLang)
  const [menuOpen, setMenuOpen] = useState(false)
  const [downloading, setDownloading] = useState<Lang | null>(null)
  const active = useScrollSpy(navItems)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const t = translations[lang]
  const jobs = [t.experience.bcp, t.experience.ntt, t.experience.bitel, t.experience.tiendada, t.experience.pucp]

  const go = (s: Section) => {
    setMenuOpen(false)
    document.getElementById(s)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleDownload = async (target: Lang) => {
    setDownloading(target)
    try {
      await downloadCv(target)
    } finally {
      setDownloading(null)
    }
  }

  return (
    <div className="min-h-screen bg-black text-ink">
      {/* ---- Nav: translucent, hairline-bottomed, collapses to a sheet on mobile ---- */}
      <nav className="fixed top-0 inset-x-0 z-50 h-12 bg-black/70 backdrop-blur-2xl border-b border-hairline">
        <div className="mx-auto max-w-5xl h-full px-5 flex items-center justify-between">
          <button onClick={() => go('home')} className="text-sm font-semibold tracking-tight hover:text-white transition">
            Andrés Koga
          </button>

          <div className="hidden md:flex items-center gap-7">
            {navItems.map((s) => (
              <button
                key={s}
                onClick={() => go(s)}
                className={`text-xs transition-colors ${active === s ? 'text-ink' : 'text-muted hover:text-ink'}`}
              >
                {t.nav[s]}
              </button>
            ))}
            <button
              onClick={() => setLang((l) => (l === 'en' ? 'es' : 'en'))}
              className="text-xs text-muted hover:text-ink transition-colors border border-hairline rounded-full px-2.5 py-1"
            >
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
          </div>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-muted hover:text-ink p-1 -mr-1"
            aria-label="Menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 7h16M4 12h16M4 17h16'}
              />
            </svg>
          </button>
        </div>

        {menuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-2xl border-b border-hairline">
            <div className="flex flex-col px-5 py-3">
              {navItems.map((s) => (
                <button
                  key={s}
                  onClick={() => go(s)}
                  className={`py-3 text-left text-sm border-b border-hairline last:border-0 ${
                    active === s ? 'text-ink' : 'text-muted'
                  }`}
                >
                  {t.nav[s]}
                </button>
              ))}
              <button
                onClick={() => setLang((l) => (l === 'en' ? 'es' : 'en'))}
                className="py-3 text-left text-sm text-accent"
              >
                {lang === 'en' ? 'Español' : 'English'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* ---- Hero ---- */}
      <section id="home" className="min-h-screen flex items-center justify-center px-5">
        {/* Rendered eagerly, not gated on the observer: this is the LCP element. */}
        <div className="max-w-3xl text-center">
          <p className="text-accent text-sm sm:text-base font-medium mb-5">{t.hero.subtitle}</p>
          <h1 className="display text-[clamp(2.75rem,9vw,5.5rem)] mb-7">Andrés Kenichi Koga Nakay</h1>
          <p className="text-muted text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">{summary[lang]}</p>
          <div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => go('experience')}
                className="px-7 py-3 rounded-full bg-accent text-white text-sm font-medium hover:opacity-85 transition"
              >
                {t.hero.primaryBtn}
              </button>
              <button
                onClick={() => go('contact')}
                className="px-7 py-3 rounded-full border border-hairline text-sm font-medium hover:bg-surface transition"
              >
                {t.hero.secondaryBtn}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Experience ---- */}
      <section id="experience" className="py-28 sm:py-40 px-5">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>{t.experience.title}</SectionTitle>
          <div className="space-y-16 sm:space-y-24">
            {jobs.map((job) => (
              <Reveal key={job.company}>
                <article>
                  <p className="text-muted text-xs mb-3 tabular-nums">{job.period}</p>
                  <h3 className="headline text-xl sm:text-2xl mb-1">{job.company}</h3>
                  <p className="text-accent text-sm mb-6">
                    {job.role} · {job.location}
                  </p>
                  <ul className="space-y-3">
                    {job.bullets.map((b, i) => (
                      <li key={i} className="text-muted text-[15px] leading-relaxed pl-5 relative">
                        <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-muted" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-6">
                    {job.tech.map((tech: string) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs text-muted bg-surface border border-hairline"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Skills ---- */}
      <section id="skills" className="py-28 sm:py-40 px-5 border-t border-hairline">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>{t.skills.title}</SectionTitle>
          <div className="grid sm:grid-cols-2 gap-px bg-hairline rounded-2xl overflow-hidden border border-hairline">
            {skills.map((group, i) => (
              <Reveal key={group.category.en} delay={i * 60} className="bg-black">
                <div className="p-6 h-full">
                  <h3 className="text-sm font-semibold mb-3">{group.category[lang]}</h3>
                  <p className="text-muted text-[15px] leading-relaxed">{group.items.join(', ')}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ---- Education, languages, certifications ---- */}
      <section id="education" className="py-28 sm:py-40 px-5 border-t border-hairline">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>{t.education.title}</SectionTitle>

          <Reveal>
            <div className="mb-14">
              <p className="text-muted text-xs mb-3 tabular-nums">{t.education.pucp.period}</p>
              <h3 className="headline text-xl sm:text-2xl mb-1">{t.education.pucp.name}</h3>
              <p className="text-accent text-sm mb-4">{t.education.pucp.degree}</p>
              <p className="text-muted text-[15px] leading-relaxed">{t.education.pucp.desc}</p>
            </div>
          </Reveal>

          <Reveal>
            <div className="mb-14">
              <h3 className="text-sm font-semibold mb-3">{t.resume.languages}</h3>
              <p className="text-muted text-[15px]">{languages[lang]}</p>
            </div>
          </Reveal>

          <Reveal>
            <h3 className="text-sm font-semibold mb-4">{t.education.certsTitle}</h3>
            <ul className="space-y-3">
              {certificates.map((c) => (
                <li key={c.en} className="text-muted text-[15px] leading-relaxed pl-5 relative">
                  <span className="absolute left-0 top-[0.6em] w-1.5 h-px bg-muted" />
                  {c[lang]}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---- Contact + CV ---- */}
      <section id="contact" className="py-28 sm:py-40 px-5 border-t border-hairline">
        <div className="mx-auto max-w-3xl">
          <SectionTitle>{t.contact.title}</SectionTitle>

          <Reveal>
            <div className="rounded-2xl border border-hairline bg-surface p-6 sm:p-8 mb-4">
              <h3 className="text-base font-semibold mb-1">{t.cv.title}</h3>
              <p className="text-muted text-sm mb-6">{t.cv.note}</p>
              <div className="flex flex-col sm:flex-row gap-3">
                {(['en', 'es'] as const).map((target) => (
                  <button
                    key={target}
                    onClick={() => handleDownload(target)}
                    disabled={downloading !== null}
                    className="flex-1 px-5 py-3 rounded-full border border-hairline text-sm hover:bg-surface transition disabled:opacity-40 disabled:cursor-wait"
                  >
                    {downloading === target ? '···' : t.cv[target]}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: `mailto:${profile.email}`, label: 'Email', value: profile.email },
              { href: `https://${profile.linkedin}`, label: 'LinkedIn', value: 'Andrés Koga' },
              { href: `https://${profile.github}`, label: 'GitHub', value: 'KKogaa' },
            ].map((link, i) => (
              <Reveal key={link.label} delay={i * 60}>
                <a
                  href={link.href}
                  target={link.href.startsWith('mailto:') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-hairline bg-surface px-6 py-5 hover:border-white/25 transition"
                >
                  <span>
                    <span className="block text-sm font-medium">{link.label}</span>
                    <span className="block text-muted text-sm truncate">{link.value}</span>
                  </span>
                  <span className="text-muted group-hover:text-accent transition shrink-0 ml-3" aria-hidden>
                    ↗
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-hairline py-10 px-5 text-center">
        <p className="text-muted text-xs">
          © {new Date().getFullYear()} Andrés Koga. {t.footer}
        </p>
      </footer>
    </div>
  )
}

export default App
