import { data, dom } from "../data.js";

dom.input.addEventListener("keypress", (e) => {
  dom.error.innerHTML = "";
  dom.error.classList.remove("error1");
});
