import { Link } from 'react-router-dom'
const eventVideo1 = "https://res.cloudinary.com/xxxe66zw/video/upload/v1789849074/event1-cloudinary.mp4"
const eventVideo2 = "https://res.cloudinary.com/xxxe66zw/video/upload/v1789848204/event2-cloudinary.mp4"
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