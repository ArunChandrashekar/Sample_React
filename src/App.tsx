import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Menu from "./Component/Menu";

function App() {
  let menuItems = ["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"];
  return (
    <div>
      <Header></Header>
      <Menu heading="Hello" items={menuItems}></Menu>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
