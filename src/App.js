import {BrowserRouter as Routes, Route} from 'react-router-dom';
import './App.css';
import EmptyCard from './components/ui/EmptyCard';
import Sidebar from './components/ui/Sidebar';

function App() {
  return (
    <div className="App">
    <Routes>
     
        <Route path="/" component={EmptyCard} />
    </Routes>
    </div>
    
  );
}

export default App;
