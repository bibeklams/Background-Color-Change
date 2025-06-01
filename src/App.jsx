import { useState } from "react";
import Button from "./component/button";
import Contain from "./component/contain";
import ColorChnage from "./component/colorchnage";
import { ExampleOfContext } from "./createcontext/useContext";

function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState("white");
  return (
    <div
      style={{ backgroundColor: bgColor, minHeight: "100vh", padding: "20px" }}
    >
      <ExampleOfContext.Provider value={{ count, setCount, setBgColor }}>
        <Contain></Contain>
        <Button></Button>
        <ColorChnage></ColorChnage>
      </ExampleOfContext.Provider>
    </div>
  );
}
export default App;
