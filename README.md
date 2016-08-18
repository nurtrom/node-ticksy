# Ticksy API Wrapper for Node

**This package in development**

[![Build Status](https://api.travis-ci.org/nurtrom/node-ticksy.png?branch=master)](https://travis-ci.org/nurtrom/node-ticksy/)

## Install
```
npm install node-ticksy
```

## Getting started
Firstly, you need to get your _domain_ and _key_.
Please follow the instructions on the [Getting Started](https://ticksy.com/api/getting-started/) page to obtain them.

### Code examples
```javascript
var Ticksy = require('node-ticksy');

var myTicksy = new Ticksy('my-domain', 'my-key');

// getting open tickets
myTicksy.getOpenTickets().then(function(data) {
    console.log(data);
}, function(error) {
    // handle error
});

// getting closed tickets
myTicksy.getClosedTickets().then(function(data) {
    console.log(data);
}, function(error) {
    // handle error
});

// getting specific ticket by id
myTicksy.getTicket(id).then(function(data) {
    console.log(data);
}, function(error) {
    // handle error
});

// getting comments for specific ticket
myTicksy.getTicketComments(id).then(function(data) {
    console.log(data);
}, function(error) {
    // handle error
});

// getting tickets assigned to you
myTicksy.getMyTickets().then(function(data) {
    console.log(data);
}, function(error) {
    // handle error
});
```

For more information about Ticksy API please see [Developer API Documentation](https://ticksy.com/api/).

### License
Released under [MIT](https://github.com/nurtrom/node-ticksy/blob/master/LICENSE) license.