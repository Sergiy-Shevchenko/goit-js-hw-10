import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
const DEBOUNCE_DELAY = 300;

// //--------------2-variant----------------------
import {fetchCountries} from './fetchCountries'
const input = document.querySelector('#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info')  

//--------------------input-----------------------

input.addEventListener('input', debounce(handleInputForm, DEBOUNCE_DELAY));

function handleInputForm (e)  {

const inputCountry = e.target.value.trim();
console.log(inputCountry);
if (inputCountry === '') {
return (makeCountryInfo.innerHTML = ''), (makeCountryList.innerHTML = '')
} 
    //console.dir(event.target);
    //fetchCountries(inputCountry).then(makeCountryInfo);
    // 
    //fetchCountries(inputCountry).then(makeCountryList)
    //fetchCountries(inputCountry).then(makeCountryInfo)

    fetchCountries(inputCountry)
    .then(data => {
        makeCountryInfo.innerHTML = ''
        makeCountryList.innerHTML = ''
        if (data.length === 1) {
            countryInfo.insertAdjacentHTML('afterbegin', makeCountryInfo (data))   
            countryList.insertAdjacentHTML = ''
        }
        if (data.length >= 10) 
        {
        Notify.success("Too many matches found. Please enter a more specific name.");
    }
        if (data.length !== 1){
    countryList.insertAdjacentHTML('afterbegin', makeCountryList(data))
    countryInfo.insertAdjacentHTML = ''
}})
  
    .catch(() => {Notify.failure("Oops, there is no country with that name")})
}

//-------------------list-country-------------

function makeCountryList(data) {
    
    const inputList = data.map(({flags, name}) => {(data)
        return `
        <li class="flags_name_list">
        <img class="flags_list" src="${flags.svg}" alt="">
        <h2>${name.official}</h2>
        </li>
        `
     }).join(' ');    
    console.log(inputList);
    return inputList;
    //countryList.insertAdjacentHTML('afterbegin', inputList)
}  
    makeCountryList();  
  //-------------------card-country---------------
function makeCountryInfo (data) {
    
    const inputInfo = data.map(({flags, name, capital, population, languages}) => {(data)
        return `
        <div class="flafs_name_info">
        <img class="flags_info" src="${flags.svg}" alt="">
        <h2>${name.official}</h2>
        </div>
        <p>Capital:${capital}</p>
        <p>Population:${population}</p>
        <p>Languages:${Object.values(languages)}</p>
        `
    }).join('');
    console.log(inputInfo)
    return inputInfo;
    //countryInfo.insertAdjacentHTML('afterbegin', inputInfo) 
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
