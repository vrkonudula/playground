import { Link } from "react-router-dom";
import "../css/Home.css";
import { useAuth0 } from "@auth0/auth0-react";
function Home() {
  const { loginWithRedirect, logout } = useAuth0();

  return (
    <div>
      <h2>Welcome to Wynisco React Boot camp.</h2>
      <button onClick={() => loginWithRedirect()}>Log In</button>
      <button onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
      <nav>
        <div style={{ display: "flex", marginLeft: "0" }}>
          <li>
            <a href="https://www.github.com/vrkonudula/playground">Github</a>
          </li>
          <li style={{ marginLeft: "10px" }}>
            <a href="https://reaction-venkat-konudula.herokuapp.com">
              React Application Backend
            </a>
          </li>
        </div>
        <Link to="/lottery">
          <li>Lottery</li>
        </Link>
        <Link to="/exercise/1">
          <li>Exercise-1</li>
        </Link>
        <Link to="/exercise/2">
          <li>Exercise-2</li>
        </Link>
        <Link to="/exercise/theme">
          <li>Theme Exercise</li>
        </Link>
        <Link to="/exercise/stock-market">
          <li>Stock Market Exercise</li>
        </Link>
        <Link to="/exercise/js-questions">
          <li>JS questions</li>
        </Link>
        <Link to="/exercise/js-tasks">
          <li>JS Tasks assignment on students data</li>
        </Link>
        <Link to="/react/practice">
          <li>React Practice Application</li>
        </Link>
        <Link to="/carousel">
          <li>Carousel project</li>
        </Link>
      </nav>
    </div>
  );
}

export default Home;
