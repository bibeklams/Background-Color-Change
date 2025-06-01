import { useContext } from "react";
import { ExampleOfContext } from "../createcontext/useContext";
function ColorChnage() {
  const { setBgColor } = useContext(ExampleOfContext);
  return (
    <>
      <h1>Color Change</h1>
      <button onClick={() => setBgColor("yellow")}>Yellow</button>
      <button onClick={() => setBgColor("blue")}>Blue</button>
      <button onClick={() => setBgColor("pink")}>Pink</button>
    </>
  );
}
export default ColorChnage;
