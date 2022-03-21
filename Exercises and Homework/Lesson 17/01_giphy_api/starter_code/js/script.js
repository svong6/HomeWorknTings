
// ToDo
// When the user submits the search form, make an API request to Giphy's search endpoint
// https://api.giphy.com/v1/gifs/search?api_key="YOURAPIKEY"&q="SEARCHSTRING"
// Display the results in the #giphy-results div provided in the html
// Each new search should replace the previous search results
// CSS Bonus: Use flex or grid properties to display the results in a responsive, clean layout

const apiKey = "eU1tsTRxdGRYZjpWOaoa1OOX8HNStQW9";

async function giphySearch(e) {
  e.preventDefault();

  // prevent the page from submitting/reloading

  // get the user input from the form
 const searchQ =document.querySelector("#search-form input[type='text']") .value;

  // make an API call using fetch() - include your API key and the user's search term (template strings are your friend)

  // convert your response data into .json()
  const theData = await response.json()

  // print your data to the console to see its format, dont forget to delete later
  const theRequest = "https://api.giphy.com/v1/gifs/search?api_key=" + apikey + "&q=" +searchQ;

const response =  await fetch(theRequest);
  // clear out all gifs from previous searches

  // use a loop to create and append each image to the dom

}

console.log(theData.data[0]);
// dont forget your event listener
document.querySelector(".search-form").addEventListener("submit",giphySearch);

