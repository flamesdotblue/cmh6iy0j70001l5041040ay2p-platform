import { motion } from 'framer-motion'
import { Users } from 'lucide-react'

const founders = [
  {
    name: 'Dr. Amina Rao',
    title: 'Co‑Founder · Quantitative Methods',
    bio: 'PhD in Statistics with 10+ years of experience in experimental design, causal inference, and survey methodology. Former research fellow at the Center for Data Policy.',
  },
  {
    name: 'Prof. Lucas Bennett',
    title: 'Co‑Founder · Humanities Scholarship',
    bio: 'Professor of Comparative Literature focusing on rhetoric, interpretation, and writing across the curriculum. Published widely on academic style and argumentation.',
  },
  {
    name: 'Dr. Mei Chen',
    title: 'Co‑Founder · Computational Social Science',
    bio: 'Computational social scientist specializing in text-as-data, reproducible workflows, and open science practices across interdisciplinary projects.',
  },
  {
    name: 'Dr. Rafael Ortega',
    title: 'Co‑Founder · Engineering Research',
    bio: 'Electrical engineer with expertise in signal processing and applied machine learning, with a focus on robust evaluation and standards compliance.',
  },
]

export default function About() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <Users className="h-5 w-5 text-slate-900" />
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">About Us</h2>
        </div>
        <p className="mt-3 text-slate-600 max-w-3xl">
          Founded by four scholars, Arche Research Collaborative is dedicated to advancing academic excellence through rigorous methods, clear communication, and ethical practice. We meet researchers where they are and co-create pathways to publication.
        </p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {founders.map((f, i) => (
            <motion.div
              key={f.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 rounded-full bg-slate-900/90 text-white flex items-center justify-center font-semibold">
                  {f.name.split(' ').map(w => w[0]).slice(0,2).join('')}
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">{f.name}</h3>
                  <p className="text-sm text-slate-700">{f.title}</p>
                  <p className="mt-2 text-sm text-slate-600">{f.bio}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
