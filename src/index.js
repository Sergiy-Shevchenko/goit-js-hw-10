import './css/styles.css';

import { Notify } from 'notiflix/build/notiflix-notify-aio';
import debounce from 'lodash.debounce';
import {fetchCountries} from './fetchCountries'

const DEBOUNCE_DELAY = 300;
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
            Notify.success("Too many matches found. Please enter a more specific name.");
        }
        else  {
        countryList.insertAdjacentHTML('beforeend', makeCountryList(countries));
         }
        })
    .catch(Notify.success("Too many matches found. Please enter a more specific name."));
            
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
        <span class="info_list">${languages.map()}</span>
        </div>
        `
    }).join('');
    return makeCountry;
};