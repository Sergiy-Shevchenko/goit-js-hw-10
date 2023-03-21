export default class NewsApiService {

    constructor() {
        this.searchQuery = '';
    }

fetchCountries () {
   
    return fetch(`https://restcountries.com/v3.1/name/${this.searchQuery}?fields=name,flags,capital,population,languages`)
    .then(response => response.json())
    .then(data => {
        //console.log(data);
        return data;
})
}
get query() {
    return this.searchQuery;
}
set query(newQuery) {
    this.searchQuery = newQuery;
}
}