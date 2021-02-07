import './App.css';
import {BrowserRouter} from "react-router-dom";
import Navigation from "./Navigation"
import Routes from "./Routes"
// import "bootstrap/dist/css/bootstrap.css";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes/>
      </BrowserRouter>
    </div>
  );
}

export default App;
