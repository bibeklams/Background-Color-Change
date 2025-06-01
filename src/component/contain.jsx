import { ExampleOfContext } from "../createcontext/useContext";
import { useContext } from "react";
function Contain() {
  const { count } = useContext(ExampleOfContext);
  return <h2>Current Count:{count}</h2>;
}
export default Contain;
