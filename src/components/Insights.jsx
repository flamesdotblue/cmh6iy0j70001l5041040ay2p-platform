import { motion } from 'framer-motion'
import { BookOpen } from 'lucide-react'

const posts = [
  {
    title: 'Interpreting Mixed‑Methods Findings: Integrating Quant and Qual Narratives',
    tag: 'Social Sciences',
    summary: 'A practical framework for weaving survey estimates with interview themes, emphasizing transparency in uncertainty and reflexivity.',
    date: 'Oct 2025',
  },
  {
    title: 'Reproducibility in Small‑N Experiments: Strategies Beyond P‑Values',
    tag: 'STEM',
    summary: 'Design checks, effect size emphasis, and pre-specification techniques for credible inference when samples are constrained.',
    date: 'Sep 2025',
  },
  {
    title: 'Citation as Conversation: Rhetoric of Literature Reviews in the Humanities',
    tag: 'Humanities',
    summary: 'Moving from inventory to interpretation—how to position arguments and trace lineages across schools of thought.',
    date: 'Aug 2025',
  },
]

export default function Insights() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <BookOpen className="h-5 w-5 text-slate-900" />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">Insights</h2>
        </div>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Reviews, discussions, and deep dives into academic methods and papers across disciplines. Updated regularly to reflect evolving best practices.
        </p>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {posts.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="group rounded-xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-xs text-slate-600">{p.date} · <span className="font-medium text-slate-900">{p.tag}</span></div>
              <h3 className="mt-2 font-serif text-xl text-slate-900 group-hover:underline decoration-slate-300">{p.title}</h3>
              <p className="mt-2 text-sm text-slate-700">{p.summary}</p>
              <div className="mt-4 text-sm text-slate-900">Read more →</div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
