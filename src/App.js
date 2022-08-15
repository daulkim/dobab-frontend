import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MealList from "./routes/meal/List";
import Details from "./routes/meal/Details";
import MealSave from "./routes/meal/Save";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/meal-list">
          <MealList />
        </Route>
        <Route path="/meal/:id">
          <Details />
        </Route>
        <Route path="/meal-save">
          <MealSave />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
