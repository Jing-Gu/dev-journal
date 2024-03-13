# Frontend and backend communication in a nutshell
The FE and BE work together all for one purpose: user. They are made, so a user can access them. FE and BE make this possible by sending requests and answering by responses.

## BE server
Backend code is built to be running on a server and it’s never running on the user’s machine.
Backend is the invisible part, it receives requests and prepares data which is then transmitted back to the user’s browser.

## FE browser
Frontend is the app that is intended to be used directly by users' browsers. It sends out HTTP requests, receives responses, processes the received data, and uses it to render a view.

## What do FE and BE send to each other?

What FE sends could be:
- http request (without body)
- form data
- JSON-formatted data

What BE sends could be:
- html-formatted responses
- static files (css, js, images...)
- JSON-formatted data
- no body at all, just a status code and header

## Analyze JSON
We often receive long JSON responses from the server and need to translate the data to extract what we need. In order to see the data more clearly, check the network response or use `JSON.stringify` function to convert the response data into a string and output into the console.
```
console.log('success - data:' + JSON.stringify(data));
```