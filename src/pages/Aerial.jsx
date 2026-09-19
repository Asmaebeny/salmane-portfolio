import { Link } from 'react-router-dom'
import droneVideo from '../videos/drone.mp4'
import drone1Video from '../videos/drone1.mp4'
import '../App.css'

function Aerial() {
  return (
    <main className="project-page">

      <nav className="project-page-nav">
        <div className="logo">EL MEHDI SALMANE</div>

        <Link to="/" className="back-link">
          ← BACK TO WORK
        </Link>
      </nav>

      <section className="project-page-header">
        <p>AERIAL / CINEMATIC</p>
        <h1>Drone<br />Cinematography.</h1>
      </section>

      <section className="video-gallery">

        <div className="gallery-video">
          <video
            src={droneVideo}
            controls
            playsInline
            muted
          />
        </div>

        <div className="gallery-video">
          <video
            src={drone1Video}
            controls
            playsInline
            muted
          />
        </div>

      </section>

    </main>
  )
}

export default Aerial
