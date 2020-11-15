import {HashRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './components/home/home-page';
import ViewPage from './components/view/view-page';
import SetUsername from "./components/username/set-username";
import SearchPage from "./components/search/search-page";
import { useStorage } from "./hooks/useStorage";
import * as _constants from './utils/constants';
import './App.css';


function App() {

  const storage = useStorage();

  const clearStore = () => {
    storage.clear();
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>Header Here</h2>
        <button onClick={clearStore}>Clear Store</button>
      </header>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/view">
            <ViewPage />
          </Route>
          <Route path="/setUsername">
            <SetUsername />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
