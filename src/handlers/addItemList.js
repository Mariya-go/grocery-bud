import { data, dom } from "../data.js";
import createItems from "../components/createItems.js";

const addItemList = (value) => {
  if (dom.submitBtn.innerHTML === "Edit") {
    // update UI
    const editItem = document.querySelector(".selected");
    editItem.querySelector(".title").innerHTML = value;

    // update data
    const itemId = Number(editItem.id);
    const findedItem = data.items.find((item) => item.id === itemId);
    findedItem.text = value;

    // remove class 'selected' and change button text
    editItem.classList.remove("selected");
    dom.submitBtn.innerHTML = "Submit";
    dom.input.value = "";
  } else {
    //add item to data
    if (value === "") {
      dom.error.innerHTML = "the text can not be empty";
      dom.error.classList.add("error1");
      return;
    }
    const newItem = {
      id: data.id++,
      text: value,
    };
    data.items.push(newItem);

    // add item to dom
    const newItemDom = createItems(newItem);
    dom.itemList.insertBefore(newItemDom, dom.itemList.firstChild);
    dom.input.value = "";
  }
};

export default addItemList;
