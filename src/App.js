import "./App.css";
import Menu from "./components/menu";
import Routes from "./routes";

function App() {
  return (
    <>
    <div className="App">
        <Menu/>
     <div className="page" >
      <h1>KenzieShop</h1>
        <Routes />
      </div>
    </div>
      </>
  );
}

export default App;
