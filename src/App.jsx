import { useEffect } from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Insights from './components/Insights'
import { Send } from 'lucide-react'

export default function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth'
    return () => {
      document.documentElement.style.scrollBehavior = ''
    }
  }, [])

  return (
    <div className="min-h-screen bg-white text-slate-800">
      <Header />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about" className="scroll-mt-24">
          <About />
        </section>
        <section id="services" className="scroll-mt-24">
          <Services />
        </section>
        <section id="insights" className="scroll-mt-24">
          <Insights />
        </section>
        <section id="contact" className="scroll-mt-24">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-slate-900 text-white font-semibold">AR</span>
          <span className="font-semibold tracking-tight text-slate-900">Arche Research Collaborative</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-slate-700 hover:text-slate-900">About</a>
          <a href="#services" className="text-slate-700 hover:text-slate-900">Services</a>
          <a href="#insights" className="text-slate-700 hover:text-slate-900">Insights</a>
          <a href="#contact" className="text-slate-700 hover:text-slate-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    const email = form.get('email')
    const message = form.get('message')
    const subject = encodeURIComponent(`Inquiry from ${name}`)
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`)
    window.location.href = `mailto:hello@arche-research.org?subject=${subject}&body=${body}`
  }

  return (
    <div className="bg-slate-50 py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-semibold text-slate-900">Contact</h2>
            <p className="mt-3 text-slate-600">
              We welcome collaboration and consultation inquiries. Share a brief overview of your project and preferred timelines.
            </p>
            <div className="mt-6 text-sm text-slate-700">
              <p>Email: <a className="text-slate-900 underline decoration-slate-300 hover:decoration-slate-600" href="mailto:hello@arche-research.org">hello@arche-research.org</a></p>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900/20" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700">Message</label>
                <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border-slate-300 focus:border-slate-900 focus:ring-slate-900/20" />
              </div>
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2 hover:bg-slate-800 transition-colors">
                <Send className="h-4 w-4" /> Send Inquiry
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

function Footer() {
  return (
    <footer className="border-t border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>© {new Date().getFullYear()} Arche Research Collaborative. Advancing academic excellence.</p>
        <div className="flex items-center gap-4">
          <a href="#home" className="hover:text-slate-900">Home</a>
          <a href="#services" className="hover:text-slate-900">Services</a>
          <a href="#insights" className="hover:text-slate-900">Insights</a>
        </div>
      </div>
    </footer>
  )
}
