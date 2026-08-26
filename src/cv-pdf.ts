import { translations, skills, certificates, languages, summary, profile, type Lang } from './data'

/** A4, 0.75in margins — Harvard resume conventions. */
const PAGE_W = 595.28
const PAGE_H = 841.89
const MARGIN = 54
const CONTENT_W = PAGE_W - MARGIN * 2

/** Leading candidates, loosest first: the resume is typeset at the first one that fits a single page. */
const LEADINGS = [11.5, 11.2, 10.9, 10.6, 10.3, 10, 9.7, 9.4, 9.1]

type Doc = Awaited<ReturnType<typeof newDoc>>

async function newDoc() {
  const { jsPDF } = await import('jspdf')
  return new jsPDF({ unit: 'pt', format: 'a4' })
}

function render(doc: Doc, lang: Lang, lead: number) {
  const t = translations[lang]
  const r = t.resume
  const body = Math.min(9.5, lead - 1.2)
  let y = MARGIN

  const room = (needed: number) => {
    if (y + needed > PAGE_H - MARGIN) {
      doc.addPage()
      y = MARGIN
    }
  }

  /** Wrapped paragraph, optionally indented and bullet-prefixed. */
  const paragraph = (s: string, indent = 0, bullet = '') => {
    const lines = doc.splitTextToSize(s, CONTENT_W - indent - (bullet ? 10 : 0)) as string[]
    lines.forEach((line, i) => {
      room(lead)
      if (bullet && i === 0) doc.text(bullet, MARGIN + indent, y)
      doc.text(line, MARGIN + indent + (bullet ? 10 : 0), y)
      y += lead
    })
  }

  /** Emphasised label on the left, right-aligned detail on the same line. */
  const row = (left: string, right: string, style: 'bold' | 'italic') => {
    room(lead)
    doc.setFont('times', style).setFontSize(body)
    doc.text(left, MARGIN, y)
    doc.setFont('times', style === 'bold' ? 'normal' : 'italic')
    doc.text(right, PAGE_W - MARGIN, y, { align: 'right' })
    y += lead
  }

  const heading = (label: string) => {
    room(lead * 3)
    y += lead * 0.55
    doc.setFont('times', 'bold').setFontSize(body + 1)
    doc.text(label, MARGIN, y)
    y += 3.5
    doc.setLineWidth(0.7).line(MARGIN, y, PAGE_W - MARGIN, y)
    y += lead
    doc.setFont('times', 'normal').setFontSize(body)
  }

  // ---- Header ----
  doc.setFont('times', 'bold').setFontSize(19)
  doc.text(profile.name, PAGE_W / 2, y, { align: 'center' })
  y += 15
  doc.setFont('times', 'normal').setFontSize(body)
  const contact = [profile.location[lang], profile.email, profile.linkedin, profile.github].filter(Boolean)
  doc.text(contact.join('  •  '), PAGE_W / 2, y, { align: 'center' })
  y += 6

  // ---- Summary ----
  heading(r.summary)
  paragraph(summary[lang])

  // ---- Experience ----
  heading(r.experience)
  /** The 2021 PUCP apprenticeship stays on the site but is omitted here to keep the resume to one page. */
  const jobs = [t.experience.bcp, t.experience.ntt, t.experience.bitel, t.experience.tiendada]
  jobs.forEach((job, i) => {
    if (i > 0) y += lead * 0.35
    room(lead * 4)
    row(job.company, job.period, 'bold')
    row(job.role, job.location, 'italic')
    doc.setFont('times', 'normal').setFontSize(body)
    job.bullets.forEach((b) => paragraph(b, 10, '•'))
    doc.setFont('times', 'italic')
    paragraph(`${r.tech}: ${job.tech.join(', ')}`, 10)
    doc.setFont('times', 'normal')
  })

  // ---- Skills ----
  heading(r.skills)
  skills.forEach((group) => {
    const label = `${group.category[lang]}: `
    room(lead)
    doc.setFont('times', 'bold')
    doc.text(label, MARGIN, y)
    const offset = doc.getTextWidth(label)
    doc.setFont('times', 'normal')
    const lines = doc.splitTextToSize(group.items.join(', '), CONTENT_W - offset) as string[]
    lines.forEach((line, i) => {
      if (i > 0) room(lead)
      doc.text(line, MARGIN + (i === 0 ? offset : 0), y)
      y += lead
    })
  })

  // ---- Education ----
  heading(r.education)
  const ed = t.education.pucp
  row(ed.name, ed.period, 'bold')
  row(ed.degree, profile.location[lang], 'italic')

  // ---- Languages ----
  heading(r.languages)
  doc.setFont('times', 'normal').setFontSize(body)
  paragraph(languages[lang])

  // ---- Certifications ----
  heading(r.certs)
  certificates.forEach((c) => paragraph(c[lang], 10, '•'))
}

/**
 * Builds the Harvard-format resume, tightening the leading until it fits on a
 * single page. Exported separately from the download so it can be rendered headlessly.
 */
export async function buildCv(lang: Lang) {
  let doc = await newDoc()
  for (const lead of LEADINGS) {
    doc = await newDoc()
    render(doc, lang, lead)
    if (doc.getNumberOfPages() === 1) break
  }
  return doc
}

export async function downloadCv(lang: Lang) {
  const doc = await buildCv(lang)
  doc.save(`Andres_Koga_CV_${lang.toUpperCase()}.pdf`)
}
