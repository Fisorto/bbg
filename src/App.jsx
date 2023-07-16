import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


import PageMain from './pages/page-main/PageMain';
import './App.scss';

function App() {
  return (
    <div className="App">
      <div>
         <Router>
            <Routes>
              <Route path ="/" element ={<PageMain />} />
            </Routes>
         </Router>
      </div>
    </div>
  );
}

export default App;
