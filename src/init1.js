import { data, dom } from "./data.js";
import createItems from "./components/createItems.js";

// default show some items
data.items.forEach((itemData) => {
  const item = createItems(itemData);
  dom.itemList.append(item);
});

import "./events/addItemFromInputListener.js";
import "./events/clearBtnListener.js";
import "./events/submitListener.js";
