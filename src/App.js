import {HashRouter as Router, Switch, Route} from "react-router-dom";
import HomePage from './components/home/home-page';
import ViewPage from './components/view/view-page';
import SetUsername from "./components/username/set-username";
import SearchPage from "./components/search/search-page";
import { useStorage } from "./hooks/useStorage";
import * as _constants from './utils/constants';
import './App.css';
import NewModpackPage from "./components/new/new-modpack-page";
import CategoriesPage from "./components/categories/categories-page";


function App() {

  const storage = useStorage();

  const clearStore = () => {
    storage.clear();
    window.location.reload();
  }

  console.log('storage', storage.get('modpacks'));

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
            {/* <CategoriesPage /> */}
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
          <Route path="/new">
            <NewModpackPage />
          </Route>
          <Route path="/new">
            <CategoriesPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
