import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
// import Curriculum from "./pages/Curriculum";
import ClassExercises from "./pages/ClassExercises";
import DarkTheme from "./pages/DarkTheme";
import StockMarket from "./pages/StockMarket";
import JSQuestions from './pages/JSQuestions';
import ReactPractice from './pages/ReactPractice';
import Lottery from './pages/lottery/Lottery';
// import sample from './pages/sample';

import { Route, BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <Route path="/" component={Home} exact />
      {/* <Route path="/sample" component={sample}/> */}
      {/* <Route path="/curriculum" component={Curriculum} /> */}
      <Route path="/exercise/1" component={Exercise1} />
      <Route path="/exercise/2" component={Exercise2} />
      <Route path="/exercise/theme" component={DarkTheme} />
      <Route path="/exercise/stock-market" component={StockMarket} />
      <Route path="/exercise/js-questions" component={JSQuestions} />
      <Route path="/class" component={ClassExercises} />
      <Route path="/lottery" component={Lottery} />
      <Route path="/react/practice" component= { ReactPractice}/>
    </Router>
  );
}

export default App;
