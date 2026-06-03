import "./App.css";

import Header from "./components/Header";
import Counter from "./components/Counter";
import UserCard from "./components/UserCard";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />

      <div className="container">
        <UserCard />
        <Counter />
      </div>

      <Footer />
    </div>
  );
}

export default App;