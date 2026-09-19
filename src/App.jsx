import { useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Aerial from './pages/Aerial'
import Events from './pages/Events'
import Action from './pages/Action'
const droneVideo = "https://res.cloudinary.com/xxxe66zw/video/upload/w_1280,q_auto,f_auto/v1789845583/drone-cloudinary.mp4"
const eventVideo = "https://res.cloudinary.com/xxxe66zw/video/upload/w_1280,q_auto,f_auto/v1789846550/event-cloudinary.mp4"
const trailVideo = "https://res.cloudinary.com/xxxe66zw/video/upload/w_1280,q_auto,f_auto/v1789840346/trail.mp4.mp4"
import './App.css'

function Home() {
  const [language, setLanguage] = useState('en')

  const content = {
    en: {
      nav: {
        work: 'WORK',
        about: 'ABOUT',
        services: 'SERVICES',
        contact: 'CONTACT',
      },

      hero: {
        label: 'VIDEOGRAPHER · CASABLANCA',
        title: 'SALMANE IN MOTION',
        tagline: 'Where moments become stories.',
        scroll: 'SCROLL TO EXPLORE',
      },

      work: {
        label: 'SELECTED WORK',
        title: 'Through the lens.',
        view: 'VIEW PROJECT',

        drone: {
          title: 'Drone Cinematography',
          subtitle: 'Aerial / Cinematic',
        },

        events: {
          title: 'Event Films',
          subtitle: 'Events / Live',
        },

        sport: {
          title: 'Sport & Action',
          subtitle: 'Sport / Performance',
        },
      },

      about: {
        label: 'ABOUT',
        small: 'EL MEHDI SALMANE / 10 YEARS',
        title: (
          <>
            I see the world through
            <br />
            a different frame.
          </>
        ),
        description:
          'From the ground to the skies, I’m always looking for authentic frames that reflect the way I see the world. I chase movement, light and unexpected perspectives, turning real moments into visual stories that feel honest, dynamic and uniquely mine.',
      },

      services: {
        label: 'SERVICES',
        title: (
          <>
            Visuals.
            <br />
            Crafted with purpose.
          </>
        ),

        videography: {
          title: 'VIDEOGRAPHY',
          description:
            'Cinematic storytelling crafted for events, brands, sports and moments worth remembering.',
        },

        drone: {
          title: 'DRONE',
          description:
            'Elevating perspectives through cinematic aerial imagery, capturing places and moments from a whole new angle.',
        },

        editing: {
          title: 'EDITING',
          description:
            'Shaping raw footage into polished visual stories through creative editing, color and rhythm.',
        },
      },

      contact: {
        label: 'HAVE A PROJECT IN MIND?',
        title: (
          <>
            LET'S CREATE
            <br />
            WONDERS.
          </>
        ),
        name: 'EL MEHDI SALMANE',
        location: 'CASABLANCA · MOROCCO',
      },
    },

    fr: {
      nav: {
        work: 'PROJETS',
        about: 'À PROPOS',
        services: 'SERVICES',
        contact: 'CONTACT',
      },

      hero: {
        label: 'VIDÉASTE · CASABLANCA',
        title: 'SALMANE IN MOTION',
        tagline: 'Là où les moments deviennent des histoires.',
        scroll: 'DÉFILER POUR EXPLORER',
      },

      work: {
        label: 'PROJETS SÉLECTIONNÉS',
        title: 'À travers l’objectif.',
        view: 'VOIR LE PROJET',

        drone: {
          title: 'Vidéographie aérienne',
          subtitle: 'Aérien / Cinématographique',
        },

        events: {
          title: 'Films événementiels',
          subtitle: 'Événements / Live',
        },

        sport: {
          title: 'Sport & Action',
          subtitle: 'Sport / Performance',
        },
      },

      about: {
        label: 'À PROPOS',
        small: 'EL MEHDI SALMANE / 10 ANS',
        title: (
          <>
            Je vois le monde à travers
            <br />
            un autre regard.
          </>
        ),
        description:
          'Du sol jusqu’aux airs, je suis toujours à la recherche de cadrages authentiques qui reflètent ma façon de voir le monde. Je cherche le mouvement, la lumière et les perspectives inattendues pour transformer des moments réels en histoires visuelles sincères, dynamiques et personnelles.',
      },

      services: {
        label: 'SERVICES',
        title: (
          <>
            Des images.
            <br />
            Pensées avec intention.
          </>
        ),

        videography: {
          title: 'VIDÉOGRAPHIE',
          description:
            'Un storytelling cinématographique pensé pour les événements, les marques, le sport et les moments qui méritent d’être mémorisés.',
        },

        drone: {
          title: 'DRONE',
          description:
            'Des perspectives sublimées par des images aériennes cinématographiques, pour capturer les lieux et les moments sous un tout nouvel angle.',
        },

        editing: {
          title: 'MONTAGE',
          description:
            'Façonner des rushs bruts en histoires visuelles soignées grâce au montage créatif, à la couleur et au rythme.',
        },
      },

      contact: {
        label: 'VOUS AVEZ UN PROJET EN TÊTE ?',
        title: (
          <>
            CRÉONS
            <br />
            DES MERVEILLES.
          </>
        ),
        name: 'EL MEHDI SALMANE',
        location: 'CASABLANCA · MAROC',
      },
    },
  }

  const t = content[language]

  return (
    <main>

      {/* HERO */}
      <section className="hero">

        <video
  className="hero-video"
  src={droneVideo}
  autoPlay
  muted
  loop
  playsInline
  preload="metadata"
/>

        <div className="hero-overlay"></div>

        <nav className="navbar">
          <div className="logo">EL MEHDI SALMANE</div>

          <div className="nav-links">
            <a href="#work">{t.nav.work}</a>
            <a href="#about">{t.nav.about}</a>
            <a href="#services">{t.nav.services}</a>
            <a href="#contact">{t.nav.contact}</a>

            <div className="language-switch">
              <button onClick={() => setLanguage('en')}>EN</button>
              <span>/</span>
              <button onClick={() => setLanguage('fr')}>FR</button>
            </div>
          </div>
        </nav>

        <div className="hero-content">
          <p className="hero-label">{t.hero.label}</p>
          <h1>{t.hero.title}</h1>
          <p>{t.hero.tagline}</p>
        </div>

        <div className="hero-bottom">
          <span>{t.hero.scroll}</span>
         
        </div>

      </section>


      {/* WORK */}
      <section className="work" id="work">

        <div className="section-title">
          <p>{t.work.label}</p>
          <h2>{t.work.title}</h2>
        </div>

        <div className="projects">

          {/* DRONE */}
         
          <Link to="/aerial" className="project">

  <div className="project-media">
   <video
  className="project-video"
  src={droneVideo}
  muted
  loop
  playsInline
  preload="metadata"
/>

    <div className="project-overlay">
      <span>{t.work.view}</span>
      <span>→</span>
    </div>

    <div className="project-number">AERIAL</div>
  </div>

  <div className="project-info">
    <h3>{t.work.drone.title}</h3>
    <p>{t.work.drone.subtitle}</p>
  </div>

</Link>


          {/* EVENTS */}
          <Link to="/events" className="project">
            <div className="project-media">
              <video
  className="project-video"
  src={eventVideo}
  muted
  loop
  playsInline
  preload="metadata"
/>
              <div className="project-overlay">
                <span>{t.work.view}</span>
                <span>→</span>
              </div>

              <div className="project-number">EVENTS</div>
            </div>

            <div className="project-info">
              <h3>{t.work.events.title}</h3>
              <p>{t.work.events.subtitle}</p>
            </div>
          </Link>


          {/* SPORT */}
          <Link to="/action" className="project">
            <div className="project-media">
              <video
  className="project-video"
  src={trailVideo}
  muted
  loop
  playsInline
  preload="metadata"
/>

              <div className="project-overlay">
                <span>{t.work.view}</span>
                <span>→</span>
              </div>

              <div className="project-number">ACTION</div>
            </div>

            <div className="project-info">
              <h3>{t.work.sport.title}</h3>
              <p>{t.work.sport.subtitle}</p>
            </div>
          </Link>

        </div>

      </section>


      {/* ABOUT */}
<section className="about" id="about">

  <div className="about-label">
    <p>{t.about.label}</p>
  </div>

  <div className="about-content">
    <p className="about-small">{t.about.small}</p>

    <h2>{t.about.title}</h2>

    <p className="about-description">
      {t.about.description}
    </p>

   
  </div>

</section>

      {/* SERVICES */}
      <section className="services" id="services">

        <div className="services-title">
          <p>{t.services.label}</p>

          <h2>{t.services.title}</h2>
        </div>

        <div className="services-list">

          <div className="service">
            <span>01</span>

            <div>
              <h3>{t.services.videography.title}</h3>
              <p>{t.services.videography.description}</p>
            </div>
          </div>

          <div className="service">
            <span>02</span>

            <div>
              <h3>{t.services.drone.title}</h3>
              <p>{t.services.drone.description}</p>
            </div>
          </div>

          <div className="service">
            <span>03</span>

            <div>
              <h3>{t.services.editing.title}</h3>
              <p>{t.services.editing.description}</p>
            </div>
          </div>

        </div>

      </section>


    {/* CONTACT */}
<section className="contact" id="contact">

  <p>{t.contact.label}</p>

  <h2>{t.contact.title}</h2>

  <div className="contact-info">

    <div className="contact-item">
      <span className="contact-label">EMAIL</span>
      <a href="mailto:salmane153@gmail.com">
        salmane153@gmail.com
      </a>
    </div>

    <div className="contact-item">
      <span className="contact-label">MOBILE PHONE/WHATSAPP</span>
      <a
        href="https://wa.me/212633820282"
        target="_blank"
        rel="noopener noreferrer"
      >
        +212 633 820 282
      </a>
    </div>

    <div className="contact-item">
      <span className="contact-label">INSTAGRAM</span>
      <a
        href="https://www.instagram.com/salmane.mehdi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        @salmane.mehdi
      </a>
    </div>

    <div className="contact-item">
      <span className="contact-label">LINKEDIN</span>
      <a
        href="https://www.linkedin.com/in/el-mehdi-salmane-3504b113b/"
        target="_blank"
        rel="noopener noreferrer"
      >
        El Mehdi Salmane
      </a>
    </div>

  </div>

</section>

    </main>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aerial" element={<Aerial />} />
        <Route path="/events" element={<Events />} />
        <Route path="/action" element={<Action />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App


