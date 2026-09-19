import { Link } from 'react-router-dom'
import eventVideo from '../videos/event1.mp4'
import eventVideo2 from '../videos/event2.mp4'
import '../App.css'

function Events() {
  return (
    <main className="project-page">

      <nav className="project-page-nav">
        <div className="logo">EL MEHDI SALMANE</div>

        <Link to="/" className="back-link">
          ← BACK TO WORK
        </Link>
      </nav>

      <section className="project-page-header">
        <p>EVENTS / LIVE</p>
        <h1>Event<br />Films.</h1>
      </section>

      <section className="video-gallery">

        <div className="gallery-video">
          <video
            src={eventVideo}
            controls
            playsInline
            muted
          />
        </div>

        <div className="gallery-video">
          <video
            src={eventVideo2}
            controls
            playsInline
            muted
          />
        </div>

      </section>

    </main>
  )
}

export default Events