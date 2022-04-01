import logo from './logo.svg';
import "./styles.css";
import './App.css';

import Header from "./components/header";
import Footer from "./components/footer";
import Main from "./components/main";
import LoginPage from './components/LoginPage';

function App() {
  return (
    <div className="App">
      <Header />

      <LoginPage/>

      {/* <Main /> */}

      <Footer />
    </div>
  );
}

export default App;
