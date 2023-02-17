export default function addToLocalStorage(
  id,
  image,
  title,
  price,
  quantity = 1
) {
  if (itemExist(id)) {
    // if the item already exists, update the quantity
    const storedItem = JSON.parse(localStorage.getItem(id));
    storedItem.quantity += quantity;
    localStorage.setItem(id, JSON.stringify(storedItem));
  } else {
    // if the item doesn't exist, add it with the specified quantity
    const item = { id, image, title, price, quantity };
    localStorage.setItem(id, JSON.stringify(item));
  }

  console.log(localStorage);
}

function itemExist(id) {
  return localStorage.getItem(id) !== null;
}
