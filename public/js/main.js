document.querySelector('.fetch-btn').addEventListener('click', e=>{
  fetch('/api/places').then(res => {
    return res.json();
  }).then(places=>{
    console.log(places);
  });
})
