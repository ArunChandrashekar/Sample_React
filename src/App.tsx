import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Menu from "./Component/Menu";

function App() {
  return (
    <div>
      <Header></Header>
      <Menu
        heading="Hello"
        items={["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"]}
      ></Menu>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
