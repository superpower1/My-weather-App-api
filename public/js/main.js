document.querySelector('.fetch-btn').addEventListener('click', e=>{
  fetch('/api/places').then(res => {
    return res.json();
  }).then(randomPlace=>{
    console.log(randomPlace);
    document.querySelector('.random-place').textContent = randomPlace;
  });
})
