import { Link } from 'react-router-dom'
import trailVideo from '../videos/trail.mp4'
import '../App.css'

function Action() {
  return (
    <main className="project-page">

      <nav className="project-page-nav">
        <div className="logo">EL MEHDI SALMANE</div>

        <Link to="/" className="back-link">
          ← BACK TO WORK
        </Link>
      </nav>

      <section className="project-page-header">
        <p>SPORT / PERFORMANCE</p>
        <h1>Sport &<br />Action.</h1>
      </section>

      <section className="video-gallery">

        <div className="gallery-video">
          <video
            src={trailVideo}
            controls
            playsInline
            muted
          />
        </div>

        {/* Add more action videos here later */}

      </section>

    </main>
  )
}

export default Action