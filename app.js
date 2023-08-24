'use strict';

const quotes = document.querySelector('.quotes');
const authorName = document.querySelector('.author-name');
const submit = document.querySelector('.btn-submit');

const url = 'https://quotes-by-api-ninjas.p.rapidapi.com/v1/quotes';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8e5ecc93a5msh34af4ce8329c4b2p12bc80jsn1c549469d3ee',
    'X-RapidAPI-Host': 'quotes-by-api-ninjas.p.rapidapi.com',
  },
};

const getQuotes = async function (quote) {
  try {
    const res = await fetch(url, options);
    console.log(res);
    const data = await res.json();

    const { quote, author } = data[0];
    quotes.textContent = quote;
    authorName.textContent = author;

    console.log(quote, author);
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

submit.addEventListener('click', function (e) {
  e.preventDefault();
  getQuotes();
});

// getQuotes();

setInterval(() => {
  // getQuotes();
}, 86400000);
