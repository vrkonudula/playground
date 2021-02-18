function Curriculum() {
    return (
        <div>
      <header>
        <a
          href="https://www.wynisco.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="./web-logo.png"
            alt="logo"
            width="100px"
            height="100px"
          ></img>
        </a>
        <h1>Curriculum</h1>
      </header>
      <div>
        <h5>
          This is how we plan to teach during our Bootcamp. We will deviate as
          deemed fit by the instructor whenever required.There will be several
          micro and mega projects we will be building along the way.
        </h5>
      </div>

      <div>
        <h3>Useful links</h3>
        <h5>
          Set up Call with Instructor :{" "}
          <a
            href="https://www.calendly.com"
            className="red"
            target="_blank"
            rel="noopener noreferrer"
          >
            Here
          </a>{" "}
          or email sachin@wynisco.com
        </h5>
        <h5>
          Apply for program : <a href="https://www.calendly.com">Here</a>
        </h5>
        <h5>
          Website : <a href="https://www.calendly.com">Here</a>
        </h5>
      </div>
      <div>
        <h2>Core Topics</h2>
        <ul>
          <li>
            <h4>Set up</h4>
            <ul>
              <li>
                <h5>Using Git as version control</h5>
              </li>
              <li>
                <h5>How to clone and checkout code from a repository.</h5>
              </li>
              <li>
                <h5>How to branch from master</h5>
              </li>
              <li>
                <h5>Committing code back to master using merge or rebase</h5>
              </li>
            </ul>
          </li>
          <li>
            <h4>Setting up Node Package Manager ( NPM)</h4>
            <ul>
              <li>
                <h5>CLI Commands</h5>
              </li>
              <li>
                <h5>Downloading Node 14.15.4 LTS</h5>
              </li>
              <li>
                <h5>Package.json</h5>
              </li>
            </ul>
          </li>
          <li>
            <h4>Setting VSCode and its extension</h4>
          </li>
        </ul>
      </div>
      <div>
        <h2>Welcome to the course</h2>
        <ul>
          <li>
            <h4>Application Architecture</h4>
            <ul>
              <li>
                <h5>MVC</h5>
              </li>
              <li>
                <h5>Device Breakpoint / Browser support</h5>
              </li>
              <li>
                <h5>Micro Front end</h5>
              </li>
              <li>
                <h5>
                  End to end architecture and workflows / patterns / Legacy
                  Architecture
                </h5>
              </li>
            </ul>
          </li>
          <li>
            <h4>Chrome Dev Tools</h4>
            <ul>
              <li>
                <h5>How to use different tabs</h5>
              </li>
              <li>
                <h5>Box Model</h5>
              </li>
              <li>
                <h5>Debugging</h5>
              </li>
              <li>
                <h5>How to use browser in developer mode.</h5>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    )
}

export default Curriculum;