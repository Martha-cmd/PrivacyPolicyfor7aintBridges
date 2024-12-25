import { useState } from "react";
import "./App.css";
import Policy from "./Legal/Privacy";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Policy />
    </>
  );
}

export default App;
