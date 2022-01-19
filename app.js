const DOMAIN = 'https://api.nasa.gov/planetary/apod';
// const DOMAIN = 'https://api.nasa.gov/planetary/earth/imagery'
const API_KEY = '76AJY5jTzJlxYCjVZbgKF2dRSS7oaTDk3GHtpbr7'
const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;
// const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=c9euw6GQ4toPdwuHs7UdScoXCi89D04WrVIujZ2H'
const searQueries = []

let text = document.querySelector('#search')
let input = document.querySelector('#blank')
text.addEventListener('click', storeText)

let h2 = document.querySelector('h2')

function storeText() {
  getPictures(input)
  console.log(input)
}

function getParameterByName(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}


async function getPictures(input){
  try {
    // const DOMAIN = 'https://api.nasa.gov/planetary/apod';
    // const API_KEY = '76AJY5jTzJlxYCjVZbgKF2dRSS7oaTDk3GHtpbr7';
    // const BASE_URL = `${DOMAIN}?apikey=${API_KEY}&`;

    const response = await axios.get(`${BASE_URL}s=${input.value}`)
    let nasaList = response.data.Search
    console.log(nasaList)
    let i = 0
    while (nasaList.length > i) {
      console.log(nasaList[i])
      let nasaDiv = document.createElement('div')
      let nasaPicture = document.createElement('img')
      h2.append(nasaDiv)
      nasaDiv.classList.add('picture')
      nasaDiv.textContent = nasaList.title
      nasaPicture.src = `${nasaList[i].Url}`
      nasaDiv.textContent = nasaList[i].Explanation
      nasaDiv.appendChild(nasaPicture)
      x.classList.toggle("fa-thumbs-down");
      let result = document.querySelector('.nasa-pictures')
      result.appendChild(nasaDiv)
      i++
    }

  
  } catch (error) {
    console.error(error)
  }
    
}