
import Header from "./Component/header";
import Menu from "./Component/menu";
import Content from "./Component/content";
import Footer from "./Component/footer";
import ListGroup from "./Component/ListGroup";

function App() {
  return (
    <div>
      <Menu />
      <br></br>
      <Header />
      <div>
        <br></br>
         <Content />
      </div>
      <br></br>

      <ListGroup />
      <br></br>
      <br></br>
      <br></br>
      <Footer></Footer>
    </div>
  );
}

export default App;
