import {Link} from "react-router-dom";
import linkedIn from "./assets/media/linkedin.png";
import github from "./assets/media/github.png";
import email from "./assets/media/email.png";
import resume from "./assets/media/resume.png";
import "./Home.css"

function Home() {

  return (
    <div className="home-container">
      <div className="home-wrapper">
        <Link className="home-text" to="/about">About</Link>
        <Link className="home-text" to="/projects">Projects</Link>
        <Link className="home-text" to="/connect">Connect</Link>
        </div>
      </div>
  )
}

export default Home;