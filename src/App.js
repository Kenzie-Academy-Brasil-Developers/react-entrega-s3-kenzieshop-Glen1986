import "./App.css";
import Menu from "./components/menu";
import Routes from "./Routes";
//https://react-entrega-s3-kenzieshop-glen1986-glen1986.vercel.app
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
