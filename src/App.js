import logo from './logo.svg';
import './App.css';
import HomePage from './components/home/home-page';
import {useStore} from './hooks/useStore';
import * as _constants from './utils/constants';

function App() {

  const {page} = useStore();
  console.log('page', page);
  let pageComponent;
  switch(page) {
    case _constants.PAGE_HOME: 
      pageComponent = HomePage;
      break;
    default: 
      pageComponent = HomePage;
      break;
  }

  console.log('pageComponent', pageComponent);

  return (
    <div className="App">
      <header className="App-header">
        {pageComponent()}
      </header>
    </div>
  );
}

export default App;
