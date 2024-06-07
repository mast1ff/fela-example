import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { createRenderer } from "fela";
import { renderToMarkup } from "fela-dom";

const renderer = createRenderer();

renderer.renderRule(
  () => ({
    backgroundColor: "black",
    color: "white",
    padding: "1rem",
    textAlign: "center",
  }),
  {}
);

const style = renderToMarkup(renderer);

document.querySelector<HTMLHeadElement>("head")!.innerHTML += `
  <style>${style}</style>
`;

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank" class="">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
