// function populateDiv() {
//     const a = parseInt(document.getElementById("firstNumber").value);
//     const b = parseInt(document.getElementById("secondNumber").value);
   
    // FIXME: innerhtml => use to put something using js

    // const element  = document.getElementById("finalSum");
    // element.innerHTML = "Sum is " + (parseInt(a) + parseInt(b));


    // now you have to hit a backend server and put the value of a and b to the server from the frontent input box and then get the answer from there
    // fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    //     .then(function(response) {
    //         console.log(response);

    //         response.text()
    //             .then(function(ans) {
    //                 console.log(ans);

    //                 document.getElementById("finalSum").innerHTML = "Sum is " + ans;
    //             })
    //     });
// }

let timeout = null;
function debouncedPopulateDiv() {
    // const timeout = setTimeout(function() {
    //     populateDiv()
    // }, 1000);

    // now you have to clear the setTimeout if after 100ms the user start typing something and restart the clock if the user stop typing for 100ms (make the clock to 1sec for visibility)
    clearTimeout(timeout);
    timeout = setTimeout(function() {
        populateDiv()
    }, 1000);
}

async function populateDiv() {
    const a = parseInt(document.getElementById("firstNumber").value);
    const b = parseInt(document.getElementById("secondNumber").value);

    // same thing done by async-await
    const response = await fetch("https://sum-server.100xdevs.com/sum?a=" + a + "&b=" + b)
    const ans = await response.text();
    document.getElementById("finalSum").innerHTML = ans;
}

// to connect my own local backend server to the local frontend server, i have to install cors package for that (Chatgpt it)