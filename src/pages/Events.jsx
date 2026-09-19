import { Link } from 'react-router-dom'
import '../App.css'

const eventVideo1 =
  "https://res.cloudinary.com/xxxe66zw/video/upload/w_1280,q_auto,f_auto/v1789849074/event1-cloudinary.mp4"

const eventVideo2 =
  "https://res.cloudinary.com/xxxe66zw/video/upload/w_1280,q_auto,f_auto/v1789848204/event2-cloudinary.mp4"

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
            src={eventVideo1}
            controls
            playsInline
            muted
            preload="metadata"
          />
        </div>

        <div className="gallery-video">
          <video
            src={eventVideo2}
            controls
            playsInline
            muted
            preload="metadata"
          />
        </div>

      </section>

    </main>
  )
}

export default Events
