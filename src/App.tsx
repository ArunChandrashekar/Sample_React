import Alert from "./Component/Alert";
import Button from "./Component/Button";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Menu from "./Component/Menu";

function App() {
  let menuItems = ["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"];
  return (
    <div>
      <Alert>Hello Arun!</Alert>
      <Header></Header>
      <Menu heading="Hello" items={menuItems}></Menu>
      <Button>Click Me!</Button>
      <Content></Content>
      <Footer></Footer>
    </div>
  );
}

export default App;
