//------------GIPHY API------------------------------------

async function getGiphy(zodiacValue) {
  removeGif()
  try {
    const url2 = `https://api.giphy.com/v1/gifs/search?api_key=G77OZkQTttXxQoe4jOf1sv1LaBsP11Uz&q=${zodiacValue}&limit=6&offset=0&rating=g&lang=en`
    const response = await axios.get(url2)
    const gifs = response.data.data
    showGif(gifs)
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}

function showGif(gifs) {
  let grid = `
    <div id='flex-grid'>
      <img src='${gifs[0].images.fixed_width.url}' alt = "gif"/>
      <img src='${gifs[1].images.fixed_width.url}' alt = "gif"/>
      <img src='${gifs[2].images.fixed_width.url}' alt = "gif"/>
      <img src='${gifs[3].images.fixed_width.url}' alt = "gif"/>
      <img src='${gifs[4].images.fixed_width.url}' alt = "gif"/>
      <img src='${gifs[5].images.fixed_width.url}' alt = "gif"/>
    </div>
  `
  document.querySelector('#giphy-grid').insertAdjacentHTML("beforeend", grid)
  return grid
}
//-----------ZODIACAL API----------------------------------
async function GetData(zodiac) {
  removeZodiac()
  try {
    const url = `https://zodiacal.herokuapp.com/${zodiac}`
    const response = await axios.get(url)
    
    const data = response.data[0]
    
    showData(data)
  } catch (error) {
  console.log(`Error: ${error}`);
  }
}


function showData(data) {
  let horoscope = `
    <h2 class='zodiac-text'>${data.name}</h2>
    <h5 class='zodiac-text'>Start Date: ${data.sun_dates[0]}</h5> 
    <h5 class='zodiac-text'>End Date: ${data.sun_dates[1]}</h5>
    <h5 class='zodiac-text'>Element: ${data.element}</h5>
    <h5 class='zodiac-text'>Good Traits: ${data.good_traits}</h5>
    <h5 class='zodiac-text'>Bad Traits: ${data.bad_traits}</h5>
    <h5 class='zodiac-text'>Compatibilty: ${data.compatibility}</h5>
    <h5 class='zodiac-text'>Eminent Personalities: ${data.famous_people.slice(1, 8)}</h5>
  `
  document.querySelector('#zodiacal').insertAdjacentHTML("beforeend", horoscope)
  return horoscope
}

const form = document.querySelector('#zodiac-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const zodiacValue = document.querySelector('#sun-sign').value
  
  GetData(zodiacValue)
  getGiphy(zodiacValue)
})

function removeZodiac() {
  const loadedDiv = document.querySelector('#zodiacal')
  while (loadedDiv.lastChild) {
    loadedDiv.removeChild(loadedDiv.lastChild)
  }
} 

function removeGif() {
  const loadedGif = document.querySelector('#giphy-grid')
  while (loadedGif.lastChild) {
    loadedGif.removeChild(loadedGif.lastChild)
  }
}