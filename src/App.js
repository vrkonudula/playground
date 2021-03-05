import Home from "./pages/Home";
import Exercise1 from "./pages/Exercise1";
import Exercise2 from "./pages/Exercise2";
import ClassExercises from "./pages/ClassExercises";
import DarkTheme from "./pages/DarkTheme";
import StockMarket from "./pages/StockMarket";
import JSQuestions from './pages/JSQuestions';
import ReactPractice from './pages/ReactPractice';
import Lottery from './pages/lottery/Lottery';

import { Route, BrowserRouter as Router } from "react-router-dom";
import Form from "./pages/form/Form";
import FullCard from "./components/full-card/FullCard";
import CarouselExample from './pages/carousel/CarouselExample'

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
      <Route path="/react/practice" exact component={ReactPractice} />
      <Route path="/react/practice/details/:id" exact component={FullCard} />
      <Route path="/react/form" exact component={Form} />
      <Route path='/carousel' exact component= {CarouselExample} />
    </Router>
  );
}

export default App;
