import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce'

const inputSearch = document.querySelector('input#search-box');
const countryList = document.querySelector('.country-list');
const countryInfo = document.querySelector('.country-info');

const DEBOUNCE_DELAY = 300;

function clearOutput() {
  countryList.innerHTML = '';
  countryInfo.innerHTML = '';
}

function searchCountry() {
  clearOutput();
  let input = inputSearch.value.trim();
  fetchCountries(input).then(data => {
    console.log(data);
    if (data.length > 1 && data.length < 10) {
      countryList.insertAdjacentHTML(
        'afterbegin',
        data
          .map(element => {
            return `<li class="country-list__item"><img width="70px" src="${element.flags.svg}"/><p>${element.name.official}<p></li>`;
          })
          .join('')
      );
    } else if (data.length === 1) {
      countryInfo.insertAdjacentHTML(
        'afterbegin',
        data
          .map(element => {
            return `<li class="country-info__item"><h2>${
              element.name.official
            }</h2></li><li class="country-info__item"><img width="150" src="${
              element.flags.svg
            }"/></li><li class="country-info__item">Capital: ${
              element.capital
            }</li><li class="country-info__item">Population: ${
              element.population
            }</li><li class="country-info__item">Languages: ${Object.values(
              element.languages
            )}</li>`;
          })
          .join('')
      );
    } else if (data.length > 10) {
      Notiflix.Notify.info(
        'Too many matches found. Please enter a more specific name.'
      );
    } else if (data.status === 404) {
      Notiflix.Notify.failure('Oops, there is no country with that name');
    }
  });
}

inputSearch.addEventListener('input', debounce(searchCountry, DEBOUNCE_DELAY));
