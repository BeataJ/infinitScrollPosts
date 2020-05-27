const postContainer = document.getElementById('post-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

let limit = 5;
let page = 1;

// Fetch posts from ADI
const getPost = async () => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`
  );

  const data = await res.json();

  return data;
};

// Show posts in DOM
const showPost = async () => {
  const posts = await getPost();

  posts.forEach((post) => {
    const postEl = document.createElement('div');
    postEl.classList.add('post');
    postEl.innerHTML = `
      <div class="number">${post.id}</div>
      <div class="post-info">
        <h2 class="post-title">${post.title}</h2>
        <p class="post-body">${post.body}</p>
      </div>
    `;
    postContainer.appendChild(postEl);
  });
};

const showLoading = () => {
  loading.classList.add('show');

  setTimeout(() => {
    loading.classList.remove('show');

    setTimeout(() => {
      page++;
      showPost();
    }, 300);
  }, 1000);
};

// show initial posts
showPost();

window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;

  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoading();
  }
});

filter.addEventListener('input', filterPosts);
