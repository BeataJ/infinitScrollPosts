const poastContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 3;
let page = 1;

// https://jsonplaceholder.typicode.com/posts?_limit=3&_page=2
