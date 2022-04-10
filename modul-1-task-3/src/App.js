import "./styles.css";
import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LoginPage from "./components/Login";

function App() {
  return (
    <div className="App">
      <Header />

      <LoginPage />

      {/* <Main /> */}

      <Footer />
    </div>
  );
}

export default App;
