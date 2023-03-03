HTML

<div class="category-buttons">
  <button class="category-button active" data-category="all">All</button>
  <button class="category-button" data-category="food">Food</button>
  <button class="category-button" data-category="travel">Travel</button>
  <button class="category-button" data-category="fashion">Fashion</button>
</div>

<div class="post-grid">
  <div class="post food">
    <img src="https://picsum.photos/id/237/300/200" alt="Food post">
    <h2>Delicious food</h2>
  </div>
  <div class="post travel">
    <img src="https://picsum.photos/id/238/300/200" alt="Travel post">
    <h2>Amazing views</h2>
  </div>
  <div class="post fashion">
    <img src="https://picsum.photos/id/239/300/200" alt="Fashion post">
    <h2>Trendy outfits</h2>
  </div>
  <div class="post food">
    <img src="https://picsum.photos/id/240/300/200" alt="Food post">
    <h2>More food</h2>
  </div>
  <div class="post travel">
    <img src="https://picsum.photos/id/241/300/200" alt="Travel post">
    <h2>More views</h2>
  </div>
  <div class="post fashion">
    <img src="https://picsum.photos/id/242/300/200" alt="Fashion post">
    <h2>More outfits</h2>
  </div>
</div>






CSS

.post-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}

.post {
  display: block;
  text-align: center;
}

.post img {
  width: 100%;
  height: auto;
}

.category-buttons {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.category-button {
  border: none;
  background-color: white;
  padding: 10px 20px;
  margin-right: 10px;
  cursor: pointer;
  font-weight: bold;
}

.category-button.active {
  background-color: #ccc;
}





java 


const categoryButtons = document.querySelectorAll('.category-button');
const postGrid = document.querySelector('.post-grid');
const posts = postGrid.querySelectorAll('.post');

categoryButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    if (category === 'all') {
      posts.forEach(post => post.style.display = 'block');
    } else {
      posts.forEach(post => {
        if (post.classList.contains(category)) {
          post.style.display = 'block';
        } else {
          post.style.display = 'none';
        }
      });
    }
  });
});
