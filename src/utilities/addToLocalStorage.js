export function addToLocalStorage(id, image, title, price, quantity = 1) {
  if (itemExist(id)) {
    // if the item already exists, update the quantity
    const storedItem = JSON.parse(localStorage.getItem(id));
    storedItem.quantity += quantity;
    localStorage.setItem(id, JSON.stringify(storedItem));
    // add storage event to listen any changes
    window.dispatchEvent(new Event('storage'));
  } else {
    // if the item doesn't exist, add it with the specified quantity
    const item = { id, image, title, price, quantity };
    localStorage.setItem(id, JSON.stringify(item));
    // add storage event to listen any changes
    window.dispatchEvent(new Event('storage'));
  }
}

function itemExist(id) {
  return localStorage.getItem(id) !== null;
}

export function calculateTotalQuantity() {
  let totalQuantity = 0;

  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const item = JSON.parse(localStorage.getItem(key));
    totalQuantity += item.quantity;
  }
  return totalQuantity;
}
