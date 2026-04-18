import { useState, useEffect } from 'react'
import { translations, type Lang, type Section, skills, certificates, navItems } from './data'

function getBrowserLang(): Lang {
  const lang = navigator.language.slice(0, 2).toLowerCase()
  return lang === 'es' ? 'es' : 'en'
}

function App() {
  const [active, setActive] = useState<Section>('home')
  const [lang, setLang] = useState<Lang>(getBrowserLang)

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const toggleLang = () => setLang((l) => (l === 'en' ? 'es' : 'en'))
  const t = translations[lang]
  const jobs = [t.experience.bitel, t.experience.tiendada, t.experience.pucp]

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
          AK
        </div>
        <div className="flex items-center gap-1">
          {navItems.map((s) => (
            <button
              key={s}
              onClick={() => setActive(s)}
              className={`px-4 py-2 rounded-lg text-sm transition-all ${
                active === s
                  ? 'text-white bg-white/10'
                  : 'text-zinc-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {t.nav[s]}
            </button>
          ))}
          <button
            onClick={toggleLang}
            className="ml-2 px-3 py-1.5 rounded-lg text-sm font-medium border border-white/10 hover:bg-white/5 transition text-zinc-300"
          >
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
        </div>
      </nav>

      {/* Home */}
      {active === 'home' && (
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Andrés Kenichi Koga Nakay
            </h1>
            <p className="text-xl text-blue-500 mb-2">{t.hero.subtitle}</p>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">{t.hero.tagline}</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActive('experience')}
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
              >
                {t.hero.primaryBtn}
              </button>
              <button
                onClick={() => setActive('contact')}
                className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition font-medium"
              >
                {t.hero.secondaryBtn}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Experience */}
      {active === 'experience' && (
        <section className="min-h-screen max-w-3xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t.experience.title}
          </h2>
          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.company} className="border-l-2 border-blue-500/30 pl-6">
                <h3 className="text-xl font-semibold">{job.company}</h3>
                <p className="text-sm text-blue-400">{job.role}</p>
                <p className="text-sm text-zinc-500 mb-4">{job.period}</p>
                <ul className="space-y-2">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="text-zinc-400 text-sm flex gap-2">
                      <span className="text-blue-500 mt-0.5 shrink-0">›</span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Education */}
      {active === 'education' && (
        <section className="min-h-screen max-w-3xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t.education.title}
          </h2>

          <div className="border-l-2 border-blue-500/30 pl-6 mb-10">
            <h3 className="text-xl font-semibold">{t.education.pucp.name}</h3>
            <p className="text-sm text-blue-400">{t.education.pucp.degree}</p>
            <p className="text-sm text-zinc-500 mb-2">{t.education.pucp.period}</p>
            <p className="text-zinc-400 text-sm">{t.education.pucp.desc}</p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">{t.education.certsTitle}</h3>
          <div className="flex flex-wrap gap-3">
            {certificates.map((c) => (
              <span
                key={c}
                className="px-4 py-2 rounded-lg text-sm text-zinc-300 bg-white/5 border border-white/10"
              >
                {c}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Skills */}
      {active === 'skills' && (
        <section className="min-h-screen max-w-4xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t.skills.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div
                key={group.category.en}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <h3 className="text-blue-500 font-semibold mb-3">{group.category[lang]}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1 rounded-md text-sm text-zinc-400 bg-white/5 border border-white/10"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact */}
      {active === 'contact' && (
        <section className="min-h-screen max-w-3xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            {t.contact.title}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://t.me/Kkogaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 transition"
            >
              <span className="text-4xl">💬</span>
              <span className="font-medium">Telegram</span>
              <small className="text-zinc-500">@Kkogaa</small>
            </a>
            <a
              href="https://github.com/KKogaa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-blue-500/50 transition"
            >
              <span className="text-4xl">🐙</span>
              <span className="font-medium">GitHub</span>
              <small className="text-zinc-500">KKogaa</small>
            </a>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="text-center py-8 text-zinc-600 text-sm border-t border-white/5">
        © {new Date().getFullYear()} Andrés Koga. {t.footer}
      </footer>
    </div>
  )
}

export default App
