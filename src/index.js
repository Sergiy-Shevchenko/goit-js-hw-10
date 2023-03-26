import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;
import {fetchCountries} from './fetchCountries'

//--------------2-variant-----------------------------------

const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info')  

//--------------------input---------------------------------

input.addEventListener('input', debounce(handleInputForm, DEBOUNCE_DELAY));

function handleInputForm (e)  {

const inputCounrty = e.target.value.trim();
console.log(inputCounrty);
if (inputCounrty === '') {
return (countryList.innerHTML = ''), (countryInfo.innerHTML = '')
} 
   
    fetchCountries(inputCounrty)
    .then(countries => {
        countryList.innerHTML = ''
        countryInfo.innerHTML = ''
        
        if (countries.length === 1) {
            countryInfo.insertAdjacentHTML('beforeend', makeCountryInfo (countries))  
            }
        else if (countries.length >= 10) {
            addTextCountry ();
        }
        else  {
        countryList.insertAdjacentHTML('beforeend', makeCountryList(countries));
         }
        })
    .catch(changeTextCountry());
    
        
}

//-------------------card-list-country-------------

function makeCountryList(countries) {
    
    const makeCountry = countries.map(({flags, name}) => {
        return `
        <li class="flags_name_list">
        <img class="flags_list" src="${flags.svg}" alt="">
        <h2 class="name_list">${name.official}</h2>
        </li>
        `
     }).join(' ');    
     return makeCountry;
}  
 
//-------------------card-country---------------

function makeCountryInfo (countries) {
    
    const makeCountry = countries.map(({flags, name, capital, population, languages}) => {
        return `
        <div class="flafs_name_info">
        <img class="flags_info" src="${flags.svg}" alt="">
        <h2 class="name_info">${name.official}</h2>
        </div>
        <div class="flafs_name_info">
        <p class="info_title">Capital:</p>
        <span class="info_list">${capital}</span>
        </div>
        <div class="flafs_name_info">
        <p class="info_title">Population:</p>
        <span class="info_list">${population}</span>
        </div>
        <div class="flafs_name_info">
        <p class="info_title">Languages:</p>
        <span class="info_list">${Object.values(languages)}</span>
        </div>
        `
    }).join('');
    return makeCountry;
};

function addTextCountry () {
    Notify.success("Too many matches found. Please enter a more specific name.");    
}

function changeTextCountry () {
    //if (countries.length === 0) {
     Notify.failure("Oops, there is no country with that name");
    // return
//}
}


//----------------1-variant----------
// import NewsApiService from './fetchCountries.js'

// const newsApiService = new NewsApiService();
// const input = document.querySelector('#search-box');
// const countryInfo = document.querySelector('.country-info');
// const countryList = document.querySelector('.country-list');

// //---------------input-form---------------

// input.addEventListener('input', debounce(handleInputForm, 300))

// function handleInputForm (e) {

//     newsApiService.query = e.target.value.trim();
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
