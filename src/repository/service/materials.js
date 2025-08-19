import data from "../db-mock.js";

export default function getMaterials(resourceKey, itemName){
  const regex = new RegExp(itemName, 'i');
  const materials = data.DarkSoulsItems[resourceKey]||[];
  return materials.filter(item => regex.test(item));
}