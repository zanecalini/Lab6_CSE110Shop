// Script.js
let myStorage = window.localStorage
window.addEventListener('DOMContentLoaded', () => {
  // TODO
  if(myStorage.getItem("a") == null){
    fetch("https://fakestoreapi.com/products")
      .then(response => response.json())
      .then(data =>{myStorage.setItem("a", JSON.stringify(data))} )
  }
});
