import { Route, Switch } from "react-router-dom";

import TodayPage from "./pages/TodayPage";
import ImportantPage from "./pages/ImportantPage";
import WorkPage from "./pages/WorkPage";
import GroceriesPage from "./pages/GroceiesPage";

import Header from "./components/header/Header";

import TaskProvider from "./store/TaskProvider";

function App() {
  return (
    <div className="overlay">
      <Header/>
      <TaskProvider>
      <Switch>
        <Route path="/" exact>
          <TodayPage/>
        </Route>
        <Route path="/important">
          <ImportantPage/>
        </Route>
        <Route path="/work">
          <WorkPage/>
        </Route>
        <Route path="/groceries">
          <GroceriesPage/>
        </Route>
      </Switch>
      </TaskProvider>
    </div>
  );
}

export default App;
