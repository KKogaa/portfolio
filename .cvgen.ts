import { writeFileSync } from 'node:fs'
import { buildCv } from './src/cv-pdf'
const out = process.env.OUT!
for (const lang of ['en', 'es'] as const) {
  const doc = await buildCv(lang)
  writeFileSync(`${out}/cv_${lang}.pdf`, Buffer.from(doc.output('arraybuffer')))
  console.log(lang, doc.getNumberOfPages(), 'page(s)')
}
