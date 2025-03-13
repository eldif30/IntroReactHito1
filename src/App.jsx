import Register from "./components/Register";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Login from "./components/Login";



function App() {
  return (
    <div>
      <Navbar />
      {/* <Home /> */}
      <Register/>
      <Login />
      <Footer />
    </div>
  );
}

export default App;
