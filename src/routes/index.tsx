import { BrowserRouter as Router, Route, Routes as Switch } from "react-router-dom";
import Home from "../pages/home";
import Details from "../pages/details";
import Quiz from "../pages/quiz";

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:id" element={<Details />} />
        <Route path="/detail/:id/:name" element={<Quiz />} />
      </Switch>
    </Router>
  );
}
