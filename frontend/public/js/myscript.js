
const post = document.querySelectorAll('.post-item');

post.forEach(item => {
  var id = item.id;
  item.addEventListener('click', (e) => {
    // document.getElementById("modal-img").src = "";
    document.querySelector(`#modal-${id}`).style.display = 'block';
    
  })
});

const modal = document.querySelectorAll('.post-item');

modal.forEach(item => {
  var id = item.id;
  item.addEventListener('click', (e) => {
    // document.getElementById("modal-img").src = "";
    document.querySelector(`#modal-${id}`).style.display = 'none ';
    
  })
});

