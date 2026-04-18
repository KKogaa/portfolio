import { useState } from 'react'

type Section = 'home' | 'about' | 'skills' | 'contact'

const skills: { category: string; items: string[] }[] = [
  { category: 'Backend', items: ['Java', 'Spring Boot', 'REST APIs', 'Microservices'] },
  { category: 'Cloud & Infra', items: ['Azure', 'Docker', 'DAPR', 'Kubernetes'] },
  { category: 'Databases', items: ['PostgreSQL', 'Redis', 'SQL Server'] },
  { category: 'Tools', items: ['Git', 'Jira', 'CI/CD'] },
  { category: 'Messaging', items: ['Azure Queue', 'Event-Driven Architecture'] },
  { category: 'Practices', items: ['Clean Architecture', 'TDD', 'Agile'] },
]

const navItems: Section[] = ['home', 'about', 'skills', 'contact']

function App() {
  const [active, setActive] = useState<Section>('home')

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-8 py-4 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/10 z-50">
        <div className="text-2xl font-bold bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
          AK
        </div>
        <div className="flex gap-1">
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
              {s.charAt(0).toUpperCase() + s.slice(1)}
            </button>
          ))}
        </div>
      </nav>

      {/* Home */}
      {active === 'home' && (
        <section className="min-h-screen flex items-center justify-center text-center px-4">
          <div>
            <h1 className="text-5xl md:text-7xl font-extrabold mb-4 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
              Andrés Kenichi Koga Nakay
            </h1>
            <p className="text-xl text-blue-500 mb-2">Backend Developer · Java · Cloud Enthusiast</p>
            <p className="text-zinc-400 mb-8">Building robust systems with clean architecture</p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActive('skills')}
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
              >
                My Skills
              </button>
              <button
                onClick={() => setActive('contact')}
                className="px-6 py-3 rounded-lg border border-white/10 hover:bg-white/5 transition font-medium"
              >
                Contact Me
              </button>
            </div>
          </div>
        </section>
      )}

      {/* About */}
      {active === 'about' && (
        <section className="min-h-screen max-w-3xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-lg text-zinc-400">
            <p>
              Backend developer with experience building enterprise-grade applications
              using Java, Spring Boot, and cloud infrastructure on Azure.
            </p>
            <p>
              Passionate about clean code, automation, and leveraging AI tools
              to improve development workflows.
            </p>
          </div>
        </section>
      )}

      {/* Skills */}
      {active === 'skills' && (
        <section className="min-h-screen max-w-4xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-6 rounded-xl border border-white/10 bg-white/[0.02]"
              >
                <h3 className="text-blue-500 font-semibold mb-3">{group.category}</h3>
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
            Get In Touch
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
        © {new Date().getFullYear()} Andrés Koga. Built with React + TypeScript + Tailwind.
      </footer>
    </div>
  )
}

export default App
