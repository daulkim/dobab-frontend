import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import axios from 'axios';
import MealList from "./routes/meal/List";
import Details from "./routes/meal/Details";
import MealSave from "./routes/meal/Save";
import Nav from "./routes/common/Nav";
import OAuth2RedirectHandler from "./routes/oauth2/OAuth2RedirectHandler";

function App() {
  const access_token = localStorage.getItem('access_token')
  if(access_token != null) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${access_token}`;
  }
 
  return (
    <Router>
      <Nav />
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
        <Route path="/oauth2/redirect" component={OAuth2RedirectHandler}></Route>
      </Switch>
    </Router>
  );
}

export default App;
