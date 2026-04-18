import { useState } from 'react'

type Section = 'home' | 'experience' | 'education' | 'skills' | 'contact'

const skills: { category: string; items: string[] }[] = [
  { category: 'Backend', items: ['Java', 'Spring Boot', 'Go', 'Flask', 'Fastify', 'Echo', 'Struts'] },
  { category: 'Frontend', items: ['JavaScript', 'React', 'TypeScript'] },
  { category: 'Cloud & Infra', items: ['AWS', 'Azure', 'Docker', 'DAPR', 'Kubernetes'] },
  { category: 'Databases', items: ['PostgreSQL', 'Oracle', 'SQL Server', 'Redis'] },
  { category: 'DevOps', items: ['Jenkins', 'Bitbucket Pipelines', 'CI/CD', 'Nexus'] },
  { category: 'Languages', items: ['Java', 'Go', 'Python', 'JavaScript'] },
]

const experience: { company: string; period: string; role: string; bullets: string[] }[] = [
  {
    company: 'BITEL',
    period: '08/2023 – Presente',
    role: 'Desarrollador de Software',
    bullets: [
      'Diseño e implementación de sistemas para generación y envío de recibos a clientes de Bitel Fibra.',
      'Implementación de servicios para reportar boletas y facturas a SUNAT.',
      'Creación de servicio para promociones de suscripción de cobranza automática para líneas móviles.',
      'Implementación de herramientas de verificación de facturación en múltiples ciclos.',
      'Mantenimiento y nuevas funcionalidades para sistemas legacy.',
      'APIs para generación de reportes de transacciones.',
      'Pipelines de CI/CD con Jenkins.',
    ],
  },
  {
    company: 'Tiendada',
    period: '04/2022 – 12/2022',
    role: 'Desarrollador de Software',
    bullets: [
      'Módulo de configuración y cálculo de promociones.',
      'Integración con pasarela de pagos Izipay.',
      'Servicios de carga masiva de datos mediante Excel/CSV.',
      'Dashboards y servicios de métricas basados en KPIs.',
      'Generación de certificados SSL para dominios personalizables.',
      'Pipelines de CI/CD en Bitbucket Pipeline.',
    ],
  },
  {
    company: 'Pontificia Universidad Católica del Perú',
    period: '08/2021 – 12/2021',
    role: 'Desarrollador de Software',
    bullets: [
      'Implementación de plataforma de soporte para estudiantes.',
    ],
  },
]

const certificates: string[] = [
  'TOEFL: 103',
  'FCE',
  'AWS Cloud Practitioner',
  '2do puesto Hackathon ScientOne',
]

const navItems: Section[] = ['home', 'experience', 'education', 'skills', 'contact']

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
            <p className="text-xl text-blue-500 mb-2">Software Developer</p>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
              Bachiller en Ingeniería Informática. Experiencia diseñando y desarrollando
              sistemas eficientes y escalables con tecnologías cloud.
            </p>
            <div className="flex gap-4 justify-center">
              <button
                onClick={() => setActive('experience')}
                className="px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 transition font-medium"
              >
                Experience
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

      {/* Experience */}
      {active === 'experience' && (
        <section className="min-h-screen max-w-3xl mx-auto px-4 pt-28 pb-8">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-br from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Experience
          </h2>
          <div className="space-y-8">
            {experience.map((job) => (
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
            Education & Certifications
          </h2>

          <div className="border-l-2 border-blue-500/30 pl-6 mb-10">
            <h3 className="text-xl font-semibold">Pontificia Universidad Católica del Perú</h3>
            <p className="text-sm text-blue-400">Bachiller en Ingeniería Informática</p>
            <p className="text-sm text-zinc-500 mb-2">2016 – 2022</p>
            <p className="text-zinc-400 text-sm">
              Algoritmos, Estructuras de datos, Sistemas Operativos, Bases de datos,
              Diseño de sistemas y Desarrollo de Software.
            </p>
          </div>

          <h3 className="text-2xl font-semibold mb-4">Certifications & Awards</h3>
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
