import "./App.css";
import Menu from "./components/menu";
import Routes from "./routes";

function App() {
  return (
    <>
      <div className="App">
        <div className="page" >
          <Menu />
          <h1>KenzieShop</h1>
          <Routes />
        </div>
      </div>
    </>
  );
}

export default App;
