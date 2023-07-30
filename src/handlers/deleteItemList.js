import { data } from "../data.js";

const deleteItemList = (id) => {
  //delete item from the data
  data.items = data.items.filter((item) => item.id !== id);
  // remove item from UI
  document.getElementById(id).remove();
};

export default deleteItemList;
