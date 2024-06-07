import "./style.css";
import typescriptLogo from "./typescript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.ts";
import { createRenderer, IStyle } from "fela";
import { renderToMarkup } from "fela-dom";

let renderer = createRenderer({
  selectorPrefix: "o_",
});

let css = (style: IStyle) => {
  let className = renderer.renderRule(() => style, {});
  return className;
};

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank" class="${css({
      fontWeight: 500,
      color: "#646cff",
      textDecoration: "inherit",
    })}">
      <img src="${viteLogo}" class="${css({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  ":hover": {
    filter: `drop-shadow(0 0 2em #646cffaa)`,
  },
})}" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="${css({
  height: "6em",
  padding: "1.5em",
  willChange: "filter",
  transition: "filter 300ms",
  ":hover": {
    filter: `drop-shadow(0 0 2em #3178c6aa)`,
  },
})}" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="${css({
      padding: "2em",
    })}">
      <button id="counter" type="button"></button>
    </div>
    <p class="${css({
      color: "#888",
    })}">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`;

let renderStyle = () => {
  let style = renderToMarkup(renderer);
  document.querySelector("head")!.insertAdjacentHTML("beforeend", style);
};

renderStyle();

setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);
