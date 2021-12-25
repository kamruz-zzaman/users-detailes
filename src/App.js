import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserFetch from './Components/Users/UserFetch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserFetch />}>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
