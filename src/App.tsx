import Header from "./Component/header";
import Menu from "./Component/menu";
import Content from "./Component/content";
import Footer from "./Component/footer";
import ListGroup from "./Component/ListGroup";
import "./App.css";
import FavColor from "./Component/FavColor";
import Message from "./Component/Message";

function App() {
  let heading = "React";
  let items = ["React", "Angular", "Python", "JAVA", "C"];
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

      <ListGroup heading={heading} items={items} />
      <hr />
      <br></br>

      <FavColor />

      <Message text={"Hello First Property Example"}></Message>
      <Footer></Footer>
    </div>
  );
}

export default App;
