import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import Slider from "./Slider";
import data from "./data";
import "./styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement); // ✅ Correct way in React 18
root.render(
  <StrictMode>
    <div className="center">
      <Slider data={data} activeSlide={2} />
    </div>
  </StrictMode>
);
