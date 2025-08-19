import data from "../db-mock.js";

export default function getConsumables(itemName){
  const regex = new RegExp(itemName, 'i');
  const consumables = data.DarkSoulsItems.Consumibles;
  return consumables.filter(item => regex.test(item));
}
