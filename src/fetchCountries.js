function fetchCountries(name) {
    return fetch('https://restcountries.com/v3.1/?fields=name,capital,population,flags,languages')
  .then(response => response.json())
  .then(data => data)
  .catch(error => console.log(error))}

export {fetchCountries}

