/* import Alert from "./Component/Alert";
import Button from "./Component/Button";
import Content from "./Component/Content";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Menu from "./Component/Menu"; */
import { useState } from "react";
import RouterConfig from "./RouterConfig";
import Sample1 from "./Component/Sample";
import EmployeeList from "./Component/EmployeeList";

function App() {
  const [toggleState, setToggleState] = useState("true");
  let menuItems = ["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"];
  return (
    <div>
      {/* <Header></Header>
      <Menu heading="Hello" items={menuItems}></Menu>
      <Button>Click me!</Button>
      <Content></Content>
      <Footer></Footer> */}
      {/* <RouterConfig></RouterConfig> */}
      <Sample1></Sample1>
      <EmployeeList></EmployeeList>
    </div>
  );
}

export default App;
