// Import data

// Import components
import './App.css';
import Gallery from './gallery';
import Searchbar from './search';
import Sidebar from './sideBar';

function App(){
  return (
    <div>
      <h1>craigslist</h1>
      <div className="App"> 
        <div>
      < Searchbar className='searchbar'/>
      < Gallery />
      </div>
      <div>
      < Sidebar className='sideBar'/>
      </div>
      </div>
    </div>
  );
}

export default App;
