import { createRoot } from "react-dom/client";
import { App } from "./App";
import { Button } from "./Button";

class MyButton extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    const root = createRoot(shadow);
    root.render(<Button />);
  }
}

class MyApp extends HTMLElement {
  connectedCallback() {
    const shadow = this.attachShadow({ mode: "closed" });
    const root = createRoot(shadow);
    root.render(<App />);
  }
}

customElements.define("my-button", MyButton);
customElements.define("my-app", MyApp);
