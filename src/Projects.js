function Projects() {

  return (
    <div className="container">
      <h1 className="project-title-master">PROJECTS.</h1>
      <div className="projects-wrapper">

            <div className="project-item-wrapper">
          <div className="project-image">
            <amp-story-player layout="fixed" layout="fixed" width="600" height="400">
              <a href="/stories/jobly/jobly.html">
              </a>
            </amp-story-player>
          </div>
          <div className="project-item-information-wrapper">
            <h2 className="project-title">Jobly</h2>
            <b className="project-type">Node.js/ Express back-end &#8226;
            React front-end  &#8226;  PostgreSQL
                        database  &#8226;  Node-Postgres  &#8226;  TDD</b>

            <div className="project-paragraph">
              <p>Jobly is a full-stack application where users can
              search for and apply to jobs. Jobly was built using a
              Node/ Express back-end and a React front-end. The
              application allows logged in users to browse and search
              hiring companies and jobs by name or company. It also
              allows users to edit their profile and apply for
                            specific jobs. </p>
              <p>This project allowed me to experience test driven
              development (TDD) on the back-end and learn how to
              think through a detailed component hierarchy on the front-end.
                        </p>
            </div>
            <div className="center" >
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="/stories/jobly/jobly.html">
                Full-screen story</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="http://claire-casey-jobly.surge.sh//">Demo</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/jobly-frontend">Github
                                Repository (front-end)</a></small>&#x25cf;
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/express-jobly">Github
                                Repository (back-end)</a></small>
            </div>
          </div>
        </div>

            <div className="project-item-wrapper">
          <div className="project-image">
            <amp-story-player layout="fixed" layout="fixed" width="600" height="400">
              <a href="/stories/warbler/warbler.html">
              </a>
            </amp-story-player>
          </div>
          <div className="project-item-information-wrapper">
            <h2 className="project-title">Warbler</h2>
            <b className="project-type">Flask back-end  &#8226;  PostgreSQL
                        database  &#8226;  SQLAlchemy</b>

            <div className="project-paragraph">
              <p>Warbler is a Twitter clone and utilizes Flask,
              PostgreSQL, and SQLAlchemy, on the back-end and Jinja
              templating, jQuery, and Axios on the front-end. I
                            built this application off of a semi-functioning clone. </p>
              <p>My main roles were to fix bugs in the user profile,
              logout, and homepage routes, add profile editing
              functionality, and add the ability to like a Warble.
              I also added extensive testing, including model and view
              unit tests.
                        </p>
              <p>This project allowed me to work with a large codebase
              written primarily by others. It helped me understand object
              oriented programming and design and improved my backend
              testing abilities.
                        </p>
            </div>
            <div>
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="./stories/covid-tracker/covid-tracker.html">
                Full-screen story</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://clairecasey-warbler.herokuapp.com/">Demo</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/warbler">Github
                                Repository</a></small>
            </div>
          </div>
        </div>


            <div className="project-item-wrapper">
          <div className="project-image">
            <amp-story-player layout="fixed" layout="fixed" width="600" height="400">
              <a href="/stories/friender/friender.html">
              </a>
            </amp-story-player>
          </div>
          <div className="project-item-information-wrapper">
            <h2 className="project-title">Friender</h2>
            <b className="project-type">Flask back-end  &#8226;  React
            front-end  &#8226;  AWS S3 Storage  &#8226;  Mapbox API  &#8226; PostgreSQL
                        database  &#8226;  SQLAlchemy</b>

            <div className="project-paragraph">
              <p>Friender is a Tinder clone for making new friends
              during quarantine. It utilizes Flask,
              Amazon S3, PostgreSQL, and SQLAlchemy on
              the back-end and React on the front-end.</p>
              <p>In Friender, logged in users are shown potential
              friends and can like or dislike each potential friend.
              Users are shown other users based on the folowing
              criteria:</p>

                        <ol className="project-OL">
                  <li className="small-li">Other user's zip code is within current user's specified friend radius</li>
                  <li className="small-li">Current user's zip code is within other user's specified friend radius</li>
                  <li className="small-li">Current user has not yet liked or disliked the other user</li>
                  <li className="small-li">Other user has not yet disliked the current user</li>
                </ol>

              <p>This project allowed me to strategically think
              through design decisions, including frameworks used,
              database design, and component hierarchy.
                        </p>
            </div>
            <div className="center" >
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="/stories/friender/friender.html">
                Full-screen story</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="http://claire-casey-friender.surge.sh/">Demo</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/friender-frontend">Github
                                Repository (front-end)</a></small>
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/friender-backend">Github
                                Repository (back-end)</a></small>
            </div>
          </div>
        </div>

            <div className="project-item-wrapper">
          <div className="project-image">
            <amp-story-player layout="fixed" layout="fixed" width="600" height="400">
              <a href="/stories/covid-tracker/covid-tracker.html">
              </a>
            </amp-story-player>
          </div>
          <div className="project-item-information-wrapper">
            <h2 className="project-title">New York State Covid Tracker</h2>
            <b className="project-type">Flask back-end &#8226; Javascript D3 Visualizations</b>

            <div className="project-paragraph">
              <p>Inspired by the New York Times Covid Tracker, this
              projects allows logged in users to select specific
                            counties to follow and view Covid cases for. </p>
              <p>It uses Flask on the backend, including SQLAlchemy as
              an ORM. On the frontend, it uses jQuery and Javascript
              D3. This project taught me how to combine front-end
              heavy visualizations with back-end authorization and
              authentication.
                        </p>
            </div>
            <div>
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="/stories/covid-tracker/covid-tracker.html">
                Full-screen story</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/covid_tracker">Github
                                Repository</a></small>
            </div>
          </div>
        </div>

            <div className="project-item-wrapper">
          <div className="project-image">
            <amp-story-player layout="fixed" layout="fixed" width="600" height="400">
              <a href="/stories/BART/BART.html"></a>
            </amp-story-player>
          </div>
          <div className="project-item-information-wrapper">
            <h2 className="project-title">BART Estimated Departure Times</h2>
            <b className="project-type">Geographic Data &#8226; Javascript D3 Visualizations</b>
            <div className="project-paragraph">
              <p>During a 2-day Hackathon, I created an interactive
              visualization for Bay Area Rapid Transit (BART)
              estimated departure times. This project combines my love
              for programming with my passion for public
              transportation.
                        </p>
              <p>The project uses Javascript D3 to spatially visualize
              departure times at each station in the network. It
              allowed me to work with topojson data and geographic
              projections, and taught me the importance of time
              management for individual sprints. I presented the
              project at a lightning talk at the end of the Hackathon.
                        </p>
            </div>
            <div>
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="/stories/BART/BART.html">
                Full-screen story</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="http://claire-casey-bart.surge.sh/">Demo</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/BARTStations">Github
                                Repository</a></small>
            </div>
          </div>
        </div>

            <div className="project-item-wrapper">
          <div className="project-image">
            <amp-story-player layout="fixed" layout="fixed" width="600" height="400">
              <a href="/stories/weather-vis/weather-vis.html"></a>
            </amp-story-player>
          </div>
          <div className="project-item-information-wrapper">
            <h2 className="project-title">Historical Weather Visualization</h2>
            <b className="project-type">Javascript D3 Visualizations</b>

            <div className="project-paragraph">
              <p>This project came about as my younger sister was
              applying to colleges and my older sister's partner was
              applying to residency. Due to Covid, neither could visit
              all of the locations they wanted to. So, I created a
              historical weather visualization to give them a (virtual) taste of what
              the weather is like in each of the locations.
                        </p>
              <p>
                This project uses a
                            <a className="paragraph-link" href="https://observablehq.com/d/2bd19fa1001f890e">
                  Weatherwheel class </a>created by Eric Lo and data from the <a className="paragraph-link"
                  href="https://www.worldweatheronline.com/developer/">World
                                Weather API</a>. It taught me best practices
                            when modifying classes created by others and
                            best practices when performing data manipulation in Javascript.
                        </p>
            </div>
            <div>
              <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="/stories/weather-vis/weather-vis.html">
                Full-screen story</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://clairecasey-weather-vis.herokuapp.com/">Demo</a>
              </small>&#x25cf;
                        <small className="projects-story-link"><a className="paragraph-link" target="_blank"
                href="https://github.com/clairelcasey/weather-vis">Github
                                Repository</a></small>
            </div>
          </div>
        </div>


      </div>
    </div>



  )
}

export default Projects;