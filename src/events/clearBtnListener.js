import { data, dom } from "../data.js";

dom.clearBtn.addEventListener("click", () => {
  dom.itemList.innerHTML = "";
  data.items = [];
});
