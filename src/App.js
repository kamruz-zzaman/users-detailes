import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import UserDetails from './Components/UserDetails/UserDetails';
import UserFetch from './Components/Users/UserFetch';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserFetch />}>
            <Route path=":user" element={<UserDetails />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
