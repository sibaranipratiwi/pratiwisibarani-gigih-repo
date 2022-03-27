import logo from './logo.svg';
import "./styles.css";
import './App.css';
import data from "./data.js";

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";

function App() {
  return (
    <div className="App">
      <Header />

      <Main />

      <Footer />
    </div>
  );
}

export default App;
