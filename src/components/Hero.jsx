import { motion } from 'framer-motion'
import { GraduationCap, BookOpen, BarChart3, FileText } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="font-serif text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900"
            >
              Expert Guidance for Research Excellence
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-lg text-slate-600 max-w-2xl"
            >
              We are a scholar-led organization supporting every stage of academic paper development—from topic selection to publication.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a href="#services" className="inline-flex items-center rounded-md bg-slate-900 text-white px-5 py-2.5 text-sm font-medium hover:bg-slate-800">
                Explore Services
              </a>
              <a href="#contact" className="inline-flex items-center rounded-md border border-slate-300 px-5 py-2.5 text-sm font-medium text-slate-900 hover:bg-slate-50">
                Start a Conversation
              </a>
            </motion.div>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 text-slate-700">
              <Feature icon={<GraduationCap className="h-5 w-5" />} label="Scholarly" />
              <Feature icon={<BookOpen className="h-5 w-5" />} label="Rigorous" />
              <Feature icon={<BarChart3 className="h-5 w-5" />} label="Data-driven" />
              <Feature icon={<FileText className="h-5 w-5" />} label="Publication-ready" />
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="relative mx-auto max-w-md">
              <div className="absolute -inset-6 -z-10 bg-gradient-to-tr from-slate-200/60 via-slate-100 to-white rounded-3xl blur-xl" />
              <div className="rounded-2xl border border-slate-200 bg-white shadow-sm p-6">
                <h3 className="font-serif text-xl text-slate-900">Our Vision</h3>
                <p className="mt-2 text-slate-600">
                  A world where rigorous, ethical, and impactful research is accessible to all scholars. We partner with researchers to elevate clarity, methodology, and scholarly contribution.
                </p>
                <ul className="mt-4 space-y-2 text-sm text-slate-700">
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" /> Discipline-agnostic expertise across STEM, humanities, and social sciences</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" /> Transparent process with collaborative feedback cycles</li>
                  <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-slate-900" /> Ethical guidance aligned with institutional standards</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function Feature({ icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 py-2">
      <span className="text-slate-900">{icon}</span>
      <span className="text-sm">{label}</span>
    </div>
  )
}
