import "./App.css";
import Menu from "./components/menu";
import Routes from "./Routes";
import GlobalStyle from './styles/global'
//https://react-entrega-s3-kenzieshop-glen1986-glen1986.vercel.app
function App() {
  return (
    <>
      <div className="App">
        <div className="page" >
          <div>
            <Menu />
            <Routes />
            <GlobalStyle/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
