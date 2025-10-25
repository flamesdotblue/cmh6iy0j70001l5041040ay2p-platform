import { motion } from 'framer-motion'
import { FileText, PenTool, BarChart3, CheckCircle2 } from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Research Topic & Proposal',
    desc: 'Collaborative topic refinement, literature mapping, and proposal development with clear research questions and feasible scope.',
    bullets: [
      'Gap identification and significance',
      'Method alignment and feasibility review',
      'Annotated outlines and timelines',
    ],
  },
  {
    icon: PenTool,
    title: 'Paper Structuring & Formatting',
    desc: 'Argument architecture and journal-ready formatting across APA, IEEE, MLA, and Chicago styles.',
    bullets: [
      'Section-level structure and flow',
      'Citation management and style compliance',
      'Clarity, coherence, and academic tone',
    ],
  },
  {
    icon: BarChart3,
    title: 'Data Analysis & Interpretation',
    desc: 'Quantitative, qualitative, and mixed-methods support from data cleaning to interpretive synthesis.',
    bullets: [
      'Reproducible analysis workflows',
      'Robustness checks and diagnostics',
      'Visualization and result narratives',
    ],
  },
  {
    icon: CheckCircle2,
    title: 'Peer‑Review & Publication Guidance',
    desc: 'Journal targeting, cover letters, and response-to-review strategies with ethical best practices.',
    bullets: [
      'Journal fit and scope evaluation',
      'Submission readiness review',
      'Revision roadmaps post‑review',
    ],
  },
]

export default function Services() {
  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">Services</h2>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Professional assistance across the full research lifecycle. We tailor support to your discipline, methodology, and target venue.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="h-10 w-10 rounded-lg bg-slate-900 text-white flex items-center justify-center">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-slate-900">{s.title}</h3>
                  <p className="mt-1 text-sm text-slate-600">{s.desc}</p>
                  <ul className="mt-3 space-y-1 text-sm text-slate-700">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-slate-900" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
