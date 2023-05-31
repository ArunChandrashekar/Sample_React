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
import UserList from "./Sample/UserList";
import UserTable from "./Sample/UserTable";

function App() {
  const [toggleState, setToggleState] = useState("true");
  let menuItems = ["submenu1", "submenu2", "submenu3", "submenu4", "submenu5"];
  const [category, setCatagorey] = useState("");
  return (
    <div>
      {/* <Header></Header>
      <Menu heading="Hello" items={menuItems}></Menu>
      <Button>Click me!</Button>
      <Content></Content>
      <Footer></Footer> */}
      {/* <RouterConfig></RouterConfig> */}
      {/* <select
        className="product select"
        onChange={(e) => setCatagorey(e.target.value)}
      >
        <option value=""></option>
        <option value="Rana">Rana</option>
        <option value="kumar">Kumar</option>{" "}
      </select>
      <Sample1></Sample1>
      <EmployeeList category={category}></EmployeeList> */}
      {/* <UserList></UserList> */}
      <UserTable></UserTable>
    </div>
  );
}

export default App;
