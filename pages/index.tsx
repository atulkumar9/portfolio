import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Experiences from '../components/Experiences'

export default function Home() {
  return (
    <div className={`${styles.container} snap-y snap-mandatory overflow-scroll z-0 scroll-smooth`}>
      <h1 className='text-center text-violet-100 text-6xl my-8'>
        Atul's Portfolio
      </h1>

      {/* Header */}
      <Header />

      {/* Hero */}
      <section id='hero' className='snap-start'>
        <Hero />
      </section>

      {/* About */}
      <section id='about' className='snap-center'>
        <About />
      </section>

      {/* Experience */}
      <section id='experience' className='snap-center'>
        <Experiences />
      </section>

      {/* Skills */}

      {/* Projects */}

      {/* Contact Me */}
    </div>
  )
}
