const URL = "https://cat-fact.herokuapp.com/facts";

// async function getFacts() {           // always returns a promise
//     console.log("getting data...");
//     let response = await fetch(URL);
//     console.log(response);            // JSON format
//     let data = await response.json();
//     console.log(data[0].text);
// }

function getFacts() {
  fetch(URL)
  .then((res) => {
    return res.json();
  })
  .then((data) => {
    console.log(data[0].text);
  })
}

getFacts();