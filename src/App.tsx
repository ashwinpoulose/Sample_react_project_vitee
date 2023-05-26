import Header from "./Component/header";
import Menu from "./Component/menu";
import Content from "./Component/content";
import Footer from "./Component/footer";
import ListGroup from "./Component/ListGroup";
import "./App.css";
import FavColor from "./Component/FavColor";

function App() {
  return (
    <div>
      <Menu />
      <hr></hr>
      <br></br>
      <Header />
      <div className="com-sm-4">
        <br></br>
        <Content />
        <hr />
      </div>
      <br></br>

      <ListGroup />
      <hr />
      <br></br>

      <FavColor />
      <Footer></Footer>
    </div>
  );
}

export default App;
