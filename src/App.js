import "./App.css";
import { Nav, Header, Plans, Footer } from "./components";
function App() {
  return (
    <div>
      <div className="header__bg">
        <Nav />
        <Header />
      </div>
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
