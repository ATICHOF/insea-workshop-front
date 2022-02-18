import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';
import Sidebar from './components/ui/Sidebar';

function App() {
  return (
    <>
    <Router>
      <Sidebar/>
      
    </Router>
    </>
  );
}

export default App;
