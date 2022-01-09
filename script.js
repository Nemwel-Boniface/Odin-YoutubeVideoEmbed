let button = document.getElementById('btn');
let subscribers = document.querySelector('.subscribed');
button.addEventListener('click', subscribeFunc);

function subscribeFunc()
{
  if(button.innerHTML === 'Subscribe')
  {
    button.textContent = 'Subscribed!';
    console.log('1');
  }
  else
  {
    alert('Already Subscribed!');
  }
}
