import headshot from "./assets/media/headshot2.jpeg";

function About() {


  return (
    <div className="About">
      <div className="container">
        <div className="about-wrapper">
          <div className="about-headshot">
            <img src={headshot} alt="Claire Headshot"></img>
          </div>
            <div className="about-paragraph">
              <h1>ABOUT ME.</h1>
              <div className="about-Paragraph-text">
                <h3>Hi, I'm Claire! </h3>
                <p>I’m an aspiring software engineer studying at <a className="paragraph-link nowrap" href="https://www.rithmschool.com/" target="_blank">Rithm School</a> in San Francisco. I’m passionate about building intuitive products in a thoughtful, equitable, and fun way.</p>
                <p>I began my career as a transportation planner at <a className="paragraph-link nowrap" href="https://www.kittelson.com/" target="_blank">Kittelson & Associates</a>, a transportation consulting company. At Kittelson, I worked on over twenty projects related to database and tool development, systemic safety analyses, traffic operations, and emerging technology preparedness studies. In my spare time, I found myself learning Python to create a web scraper to increase efficiencies for a project and reading articles about the role big data will play in the future of transportation.</p>
                <p>Through this work, I discovered a love for diving into the data and creating tools and platforms for our clients and communities to interact with. The more I learned about the ways software engineering could be utilized, the more I wanted to pursue a career in this field. This ultimately led me to Rithm, where I am studying to become a full-stack software engineer.</p>
                <p>Prior to Kittelson, I graduated from <a className="paragraph-link nowrap" href="https://www.rice.edu/" target="_blank">Rice University</a> (go Owls!) with a degree in Civil and Environmental Engineering. While at Rice, I researched Houston’s energy grid by creating a web scraper in Matab, interned one summer at <a className="paragraph-link nowrap" href="https://www.tesla.com/" target="_blank">Tesla</a>, was active in Engineers Without Borders, and volunteered as an interviewer and tour guide in our admissions office.</p>
                <p>In my free time, you can find me taking hour-long breaks to puzzle, hopping on a shared bike to go picnic with friends, or raving about my hometown of Santa Barbara, CA.</p>
                <p>
                  <br></br>
                    <span className="resume-download-container">
                      <a className="resume-download" href="/resume-download.pdf" download="Claire-Casey-Resume">DOWNLOAD RESUME</a>
                    </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
)

}

export default About;