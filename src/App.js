import Home from './pages/Home';
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2"
// import Curriculum from "./pages/Curriculum";
import ClassExercises from './pages/ClassExercises';
import DarkTheme from './pages/DarkTheme';
// import sample from './pages/sample';

import "./App.css";

import { Route,BrowserRouter as Router } from "react-router-dom";


function App() {
  
  return (
    <Router>
      
        <Route path="/" component={Home} exact />
        {/* <Route path="/sample" component={sample}/> */}
          {/* <Route path="/curriculum" component={Curriculum} /> */}
          <Route path="/exercise/1" component={Exercise1} />
      <Route path="/exercise/2" component={Exercise2} />
      <Route path="/exercise/theme" component={DarkTheme} />
        <Route path="/class/exercise" component={ClassExercises}/>
      

      {/* <span className="sample">sfjgwkjefgwjkeh</span>
        <img src={logo} alt="image" className="image"/>

        {/* <button id="hello" onClick={makeDisplayNone}>Hello</button> */}

      
      
    </Router>
  );
}

export default App;
