const img = document.querySelector("img");

fetch('https://api.giphy.com/v1/gifs/translate?api_key=ifEY0JLh4RWc8T20UnwyzloArPRNeYdU&s=cats', {mode: 'cors'})
.then(function(response){ //devuelve una promesa por eso hay que hacer otro then
  return response.json()
})
.then(function(response){
  // console.log(response.data.images.original.url);
  img.src = response.data.images.original.url
})
