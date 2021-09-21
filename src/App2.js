import { Route, Switch } from "react-router-dom";
import Favorites from "./pages/Favorites";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import MainNav from "./components/layout/MainNav";

function App2() {
  return (
    <div>
      <MainNav />
      <Switch>
        <Route exact path="/">
          <AllMeetUps />
        </Route>
        <Route path="/new-meetup">
          <NewMeetUp />
        </Route>
        <Route path="/favorites">
          <Favorites />
        </Route>
      </Switch>
    </div>
  );
}

export default App2;
