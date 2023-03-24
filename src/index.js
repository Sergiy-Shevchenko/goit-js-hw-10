import './css/styles.css';

const DEBOUNCE_DELAY = 300;

// //--------------2-variant--------------
import {fetchCountries} from './fetchCountries'
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info')  


//--------------------input-----------------------

input.addEventListener('input', handleInputForm);

function handleInputForm (e)  {

const inputCountry = e.currentTarget.value.trim();
console.log(inputCountry);
console.dir(event.target);
fetchCountries(inputCountry).then(country => {
console.log(country)
})


}

//-------------------list-country-------------

function makeCountryList() {
    
    const inputList = data.map(({flags, name}) => {
        return `
        <img src="${flags.svg}" alt="">
        <h3>${name.common}</h3>
        `
     }).join(' ');    
    console.log(inputList); 
    countryList.insertAdjacentHTML('afterbegin', inputList)
}  
    makeCountryList();  
  //-------------------card-country---------------
function makeCountryInfo () {
    
    const inputInfo = inputCountry.map(({flags, name, capital, population, languages}) => {
        return `
        <img src="${flags.svg}" alt="">
        <h2>${name.common}</h2>
        <p>Capital:${capital}</p>
        <p>Population:${population}</p>
        <p>Languages:${Object.values(languages)}</p>
        `
    }).join(' ');
    console.log(inputInfo)
    countryInfo.insertAdjacentHTML('afterbegin', countryInfo) 
    };
makeCountryInfo();






//----------------1-variant----------
// import NewsApiService from './fetchCountries.js'

// const newsApiService = new NewsApiService();
// const input = document.querySelector('#search-box');
// const countryInfo = document.querySelector('.country-info');


// //---------------input-form---------------

// input.addEventListener('input', handleInputForm);

// function handleInputForm (e) {

//     newsApiService.query = e.currentTarget.value.trim();
//     newsApiService.fetchCountries().then(makeCountryInfo);

// }

// //----------------marcup-----------------------
// function makeCountryInfo (data) {
    
// const country = data.map(({flags, name, capital, population, languages}) => {
//     return `
//     <img src="${flags.svg}" alt="">
//     <h2>${name.common}</h2>
//     <p>Capital:${capital}</p>
//     <p>Population:${population}</p>
//     <p>Languages:${Object.values(languages)}</p>
//     `
// }).join(' ');
// console.log(data)
// console.log(country);
// countryInfo.insertAdjacentHTML('afterbegin', countryInfo) 
// };
// makeCountryInfo();
