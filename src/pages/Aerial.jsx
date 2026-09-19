import { Link } from 'react-router-dom'
const droneVideo = "https://res.cloudinary.com/xxxe66zw/video/upload/v1789845583/drone-cloudinary.mp4"
const droneVideo1 = "https://res.cloudinary.com/xxxe66zw/video/upload/v1789849992/drone1-cloudinary.mp4"
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
