import { data, dom } from "../data.js";
import addItemList from "../handlers/addItemList.js";

dom.submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  addItemList(dom.input.value);
});
