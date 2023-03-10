import Home from "./pages/home/Home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Form from "./pages/formPage/Form";
function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/form/:id" element={<Form />} />
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
