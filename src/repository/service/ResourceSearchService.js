import data from "../db-mock.js";

function getItem(resourceKey, itemName){
  const regex = new RegExp(itemName, 'i');
  const items = data.DarkSoulsItems[resourceKey]||[];
  return items.filter(item => regex.test(item));
}

function getAllItems(){
  return data.DarkSoulsItems || [];
}

export default { getItem,getAllItems };