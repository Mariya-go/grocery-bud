import { dom, data } from "../data.js";

const editItemList = (id) => {
  const item = data.items.find((item) => item.id === id);
  dom.input.value = item.text;
};

export default editItemList;
