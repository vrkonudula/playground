import { Link } from 'react-router-dom';
import '../css/Home.css';
function Home() {
  return (
    <div>
      <h2>Welcome to Wynisco React Boot camp.</h2>
      <nav>
        <li>
          <a href="https://www.github.com/vrkonudula/playground">Github</a>
        </li>
        {/* <Link to="/curriculum">
          <li>Curriculum</li>
        </Link> */}
        <Link to="/exercise/1">
          <li>Exercise-1</li>
        </Link>
        <Link to="/exercise/2">
          <li>Exercise-2</li>
        </Link>
        <Link to="/exercise/theme">
          <li>Theme Exercise</li>
        </Link>
        <Link to="/class/exercise">
          <li>Class Exercises</li>
        </Link>
      </nav>
    </div>
  )
}

export default Home;