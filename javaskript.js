fetch('https://fakestoreapi.com/products')
  .then(response => response.json())
  .then(json => renderCards(json))


const renderCards = (posts) => {
  const wrapper = document.querySelector('.wrapper')



  posts.forEach(post => {
    wrapper.innerHTML += ` 
      <div class="card">
          <img src=${post.image} alt="">
          <h3>${post.title}</h3>
          <h4>${post.rating}</h4>
          <p>${post.description}</p>
          <b>${post.price}</b>
        </div>
    `
  })

}