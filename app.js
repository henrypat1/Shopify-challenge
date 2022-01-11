const DOMAIN = 'https://api.nasa.gov/planetary/apod?';
const API_KEY = 'c9euw6GQ4toPdwuHs7UdScoXCi89D04WrVIujZ2H'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
const searQueries = []

let text = document.querySelector('#search')
let input = document.querySelector('#blank')
text.addEventListener('click', storeText)

let h2 = document.querySelector('h2')

function storeText() {
  getPictures(input)
  console.log(input)
}

async function getPictures(input){
  try {
    const response = await axios.get(`${BASE_URL}s=${input.value}`)
    let nasaList = response.data.Search
    console.log(nasaList)
    let i = 0
    while (nasaList.length > i) {
      console.log(nasaList[i])
      let nasaDiv = document.createElement('div')
      let nasaPicture = document.createElement('img')
      h2.append(movieDiv)
      nasaDiv.classList.add('movie')
      nasaPictures.src = `${movieList[i].URL}`
      nasaDiv.appendChild(moviePoster)
      nasaDiv.textContent = nasaPictures[i].Explanation
      let result = document.querySelector('.movie-list')
      result.appendChild(movieDiv)
      i++
    }
  
  } catch (error) {
    console.error(error)
  }
    
}