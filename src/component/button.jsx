import { useContext } from "react";
import { ExampleOfContext } from "../createcontext/useContext";
function Button() {
  const { setCount } = useContext(ExampleOfContext);
  return (
    <button onClick={() => setCount((prev) => prev + 1)}>Increament</button>
  );
}
export default Button;
