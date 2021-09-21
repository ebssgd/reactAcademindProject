import { Route, Switch } from "react-router-dom";
import Favorites from "./pages/Favorites";
import AllMeetUps from "./pages/AllMeetUps";
import NewMeetUp from "./pages/NewMeetUp";
import Layout from "./components/layout/Layout";

function App2() {
  return (
    <Layout>
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
    </Layout>
  );
}

export default App2;
