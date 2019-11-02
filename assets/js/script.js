// Déclarer la variable et récupérer sa valeur
let image = document.getElementById('image1');

//Ajout de bordures rouges au survol
// style.border permet d'accéder aux propriétés css de type bordures et de leur donner une valeur directement dans le javascript
image.onmouseenter = function() {
  image.style.border = '3px solid red';
};
//Suppression des bordures
image.onmouseout = function() {
  image.style.border = 'none';
};
