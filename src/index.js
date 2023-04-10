import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import Notiflix from 'notiflix';
import debounce from 'lodash.debounce';

const countrySearch = document.querySelector('input');
const countryList = document.querySelector('country-list');
const countryInfo = document.querySelector('country-info');

// const DEBOUNCE_DELAY = 300;



// Notiflix.Notify.info("Too many matches found. Please enter a more specific name.")
// Notiflix.Notify.failure("Oops, there is no country with that name")



// fetch(url, options)
// trim()
