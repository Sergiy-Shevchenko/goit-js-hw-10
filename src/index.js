import './css/styles.css';


import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

// //--------------2-variant--------------
import {fetchCountries} from './fetchCountries'
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info')  

//--------------------input-----------------------

input.addEventListener('input', debounce(handleInputForm, DEBOUNCE_DELAY));

function handleInputForm (e)  {

const inputCountry = e.currentTarget.value.trim();
console.log(inputCountry);
//console.dir(event.target);
fetchCountries(inputCountry).then(makeCountryList); 
}

//-------------------list-country-------------

function makeCountryList(data) {
    
    const inputList = data.map(({flags, name}) => {
        return `
        <img class="flags_list" src="${flags.svg}" alt="">
        <h3>${name.common}</h3>
        `
     }).join(' ');    
    console.log(inputList);
    console.log(data);
    countryList.insertAdjacentHTML('afterbegin', inputList)
}  
    makeCountryList();  
  //-------------------card-country---------------
function makeCountryInfo () {
    
    const inputInfo = inputCountry.map(({flags, name, capital, population, languages}) => {
        return `
        <img class="flags_info" src="${flags.svg}" alt="">
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
// const countryList = document.querySelector('.country-list');

// //---------------input-form---------------

// input.addEventListener('input', debounce(handleInputForm, 300))

// function handleInputForm (e) {

//     newsApiService.query = e.currentTarget.value.trim();
//     newsApiService.fetchCountries().then(makeCountryList);
    
    
//     // if (newsApiService.query.length !== 1) {
//     //     newsApiService.fetchCountries().then(makeCountryList);
//     // } else {newsApiService.fetchCountries().then(makeCountryInfo);
//     // }
// }

// //----------------marcup-----------------------
// function makeCountryInfo (data) {
    
// const countryInfoEl = data.map(({flags, name, capital, population, languages}) => {(data)
//     return `
//     <img class="flags_info" src="${flags.svg}" alt="">
//     <h2>${name.official}</h2>
//     <p>Capital:${capital}</p>
//     <p>Population:${population}</p>
//     <p>Languages:${Object.values(languages)}</p>
//     `
// }).join(' ');
// console.log(data)
// console.log(countryInfoEl);
// countryInfo.insertAdjacentHTML('afterbegin', countryInfoEl) 
// };
// makeCountryInfo();

// function makeCountryList (data) {
    
//     const countryListEl = data.map(({flags, name}) => {(data)
//         return `
//         <img class="flags_list" src="${flags.svg}" alt="">
//         <h2>${name.official}</h2>
        
//         `
//     }).join(' ');
//     console.log(data)
//     console.log(countryListEl);
//     countryList.insertAdjacentHTML('afterbegin', countryListEl) 
//     };
//     makeCountryList();
