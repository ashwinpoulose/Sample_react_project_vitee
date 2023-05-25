
import Header from "./Component/header";
import Menu from "./Component/menu";
import Content from "./Component/content";

function App() {
  return (
    <div>
      <Header />
      <div>
        <Menu /> <Content />
      </div>
      <footer></footer>
    </div>
  );
}

export default App;
