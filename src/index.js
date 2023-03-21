import './css/styles.css';
import NewsApiService from './fetchCountries.js'



const DEBOUNCE_DELAY = 300;
const input = document.querySelector('#search-box');
const newsApiService = new NewsApiService();

//---------------input-form---------------

input.addEventListener('input', handleInputForm);

function handleInputForm (e) {

    newsApiService.query = e.currentTarget.value;

    newsApiService.fetchCountries().then(makeCountrysArray);
}

//----------------marcup-----------------------

const countryInfo = document.querySelector('.country-info');

function makeCountrysArray (data) {
    
const country = data.map(({flags, name, capital, population, languages}) => {
    return `
    <img src="${flags}" alt="">
    <h2>${name}</h2>
    <p>Capital:${capital}</p>
    <p>Population:${population}</p>
    <p>Languages:${languages}</p>        
    `
}).join(' ');
console.log(data)
console.log(country);
countryInfo.insertAdjacentHTML('afterbegin', countryInfo) 
};
makeCountrysArray();
//----------------marcup-----------------------