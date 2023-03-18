import Navbar from './components/navbar/Navbar'
import Showcase from "./components/showcase/Showcase";
import Popular from "./components/popular/Popular";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <Navbar />
      <Showcase />
      <Popular />
    </div>
  );
}

export default App;