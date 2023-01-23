import "./App.css";
import { Nav, Header, Plans, Footer } from "./components";
function App() {
  return (
    <div>
      <div>
        <Nav />
        <Header />
      </div>
      <Plans />
      <Footer />
    </div>
  );
}

export default App;
