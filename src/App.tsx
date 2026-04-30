import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import { Button } from "@mantine/core";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <section id="center">
        <h1>Get started</h1>
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <Button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </Button>
      </section>

      <div className="ticks">{count}</div>
    </>
  );
}

export default App;
