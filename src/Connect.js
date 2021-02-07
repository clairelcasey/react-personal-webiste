import linkedIn from "./assets/media/linkedin.png";
import github from "./assets/media/github.png";
import email from "./assets/media/email.png";
import resume from "./assets/media/resume.png";


function Connect() {

  return (
    <div className="contact-container">
      <div className="contact-wrapper">
        <div className="contact-information">
          <a className="contact-logo-image" href="https://www.linkedin.com/in/claire-casey-892a18128/"><img src={linkedIn} alt="LinkedIn" ></img></a>
          <div className="contact-logo-name">LinkedIn</div>
        </div>
        <div className="contact-information">
          <a className="contact-logo-image" href="https://github.com/clairelcasey"><img src={github} alt="Github" ></img></a>
          <div className="contact-logo-name">Github</div>
        </div>
        <div className="contact-information">
          <a className="contact-logo-image" href="mailto:clcasey805@gmail.com?subject=&body="><img src={email} alt="Email" ></img></a>
          <div className="contact-logo-name">Email</div>
        </div>
        <div className="contact-information">
          <a className="contact-logo-image" href="/resume-download.pdf" download><img src={resume} alt="Resume" ></img></a>
          <div className="contact-logo-name">Resume</div>
        </div>

      </div>
    </div>
  )
}

export default Connect;