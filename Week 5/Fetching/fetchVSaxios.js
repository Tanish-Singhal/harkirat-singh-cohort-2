// TODO: Axios VS Fetch
const axios = require("axios");

// fetch - return a promise
// function main() {
//     fetch("https://sum-server.100xdevs.com/todos")
//         .then(async response => {
//             const json = await response.json();
//             console.log(json);
//         })
// }


// FIXME: Difference between Fetch and Axios

// async function main() {
//     const response = await fetch("https://sum-server.100xdevs.com/todos", {
//         method: "GET"
//     })
//     const json = await response.json();
//     console.log(json);
// }

// async function main() {
//     const response = await axios.get("https://sum-server.100xdevs.com/todos")
//     console.log(response.data);
// }


// NOTE: Whenever you are sending a GET request => 1. URL
//                                                 2. headers
//      Whenever you are sending a POST request => 1. URL
//                                                 2. body
//                                                 3. headers

// async function main() {
//     const response  = await axios.get("https://httpdump.app/dumps/04fc172f-4e55-4ffd-a8f3-91a8836b80e9?a=b", {
//             headers: {
//                 Authorization: "Bearer 123"
//             }
//         }
//     )
//     console.log(response.data);
// }

// async function main() {
//     const response  = await axios.post("https://httpdump.app/dumps/04fc172f-4e55-4ffd-a8f3-91a8836b80e9?a=b", {
//             username: "tanish",
//             password: "123456789",
//         }, {
//             headers: {
//                 Authorization: "Bearer 123"
//             }
//         }
//     )
//     console.log(response.data);
// }

async function main() {
    const response = await axios({
        url: "https://httpdump.app/dumps/04fc172f-4e55-4ffd-a8f3-91a8836b80e9?a=b",
        method: "POST",
        data: {
            username: "tanish",
            password: "123"
        },
        headers: {
            Authorization: "Bearer 123"
        },
    })
    console.log(response.data);
}

main();