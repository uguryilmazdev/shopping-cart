export default function addToLocalStorage([id, image, title, price]) {
  localStorage.setItem(id, JSON.stringify([image, title, price]));
  console.log(localStorage);
}
