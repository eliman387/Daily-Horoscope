

async function getGiphy(gif) {
  try {
    const url2 = `https://api.giphy.com/v1/gifs/search?api_key=G77OZkQTttXxQoe4jOf1sv1LaBsP11Uz&q=${gif}&limit=6&offset=0&rating=g&lang=en`
    const response = await axios.get(url2)
    // console.log(response);
    const gifs = response.data.data
    console.log(gifs);
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
getGiphy('aries')

async function GetData(zodiac) {
  try {
    const url = `http://zodiacal.herokuapp.com/${zodiac}`
    const response = await axios.get(url)
    // console.log(response);
    const data = response.data[0]
    console.log(data);
    showData(data)
  } catch (error) {
  console.log(`Error: ${error}`);
  }
}




function showData(data) {
  let horoscope = `
    <h2>${data.name}</h2>
    <h5>Start Date: ${data.sun_dates[0]} End Date: ${data.sun_dates[1]}</h5>
    <h5>Element: ${data.element}</h5>
    <h5>Good Traits: ${data.good_traits}</h5>
    <h5>Bad Traits: ${data.bad_traits}</h5>
    <h5>Compatibilty: ${data.compatibility}</h5>
    <h5>Eminent Personalities: ${data.famous_people.slice(1, 8)}</h5>
  `
  document.querySelector('#zodiacal').insertAdjacentHTML("beforeend", horoscope)
  return horoscope
}

const form = document.querySelector('#zodiac-form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const zodiacValue = document.querySelector('#sun-signs').value
  // console.log(zodiacValue);
  GetData(zodiacValue)
})

function userInput() {


}