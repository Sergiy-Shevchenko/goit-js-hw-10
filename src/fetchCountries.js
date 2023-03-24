//-----------------2-variant----------

function fetchCountries (countryNames) {
    return fetch(`https://restcountries.com/v3.1/name/${countryNames}?fields=name,flags,capital,population,languages`)
        .then(response => {
           
            if(!response.ok) {
                throw new Error(response.status)
            }
           
            return response.json();
        })
        .then(data => {
            console.log(data);
            return data;
         })
         .catch((err) => {
            console.warn(err);
         })
    }
export {fetchCountries}


//-------------------1-variant---------------
// export default class NewsApiService {

//     constructor() {
//         this.searchQuery = '';
//     }

// fetchCountries () {
   
//     return fetch(`https://restcountries.com/v3.1/name/${this.searchQuery}?fields=name,flags,capital,population,languages`)
//     .then(response => response.json())
//     .then(data => {
//         //console.log(data);
//         return data;
// })
// }
// get query() {
//     return this.searchQuery;
// }
// set query(newQuery) {
//     this.searchQuery = newQuery;
// }
// }