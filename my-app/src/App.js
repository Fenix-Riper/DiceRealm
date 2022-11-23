import { Home } from './pages/Home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import GlobalFonts from './fonts/fonts';

function App() {
  return (
    <Router>
      <GlobalFonts />
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;
