document.querySelector('.fetch-btn').addEventListener('click', e=>{
  showGreeting();
})

const showGreeting = () => {
  const today = new Date();
  fetch('/api/greetings').then(res => {
    return res.json();
  }).then(greetings=>{
    console.log(greetings);
    document.querySelector('.greeting').textContent = greetings[today.getDay()];
  });
}

// showGreeting();
