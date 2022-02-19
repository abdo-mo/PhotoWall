import Home from "./Components/Home";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddPhoto from "./Components/AddPhoto";
import PhotoDetail from "./Components/PhotoDetail";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/addPhoto" element={<AddPhoto />}/>
          <Route path="/:photo_id" element={<PhotoDetail/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
