import NavBar from "./components/NavBar/NavBar";
import MainContainer from "./components/MainContainer/MainContainer";
import FooterContainer from "./components/FooterContainer/FooterContainer";
import CirclesContainer from "./components/CirclesContainer/CirclesContainer";

function App() {
  return (
    <div>
      <CirclesContainer/>
      <NavBar />
      <MainContainer />
      <FooterContainer />
    </div>
  );
}

export default App;
