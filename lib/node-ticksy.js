var TicksyClient = require('./ticksy-client');

var Ticksy = function(domain, key) {
    this.client = new TicksyClient(domain, key);
};

Ticksy.prototype.getOpenTickets = function() {
    return this.client.get('open-tickets.json');
};

Ticksy.prototype.getClosedTickets = function() {
    return this.client.get('closed-tickets.json');
};

Ticksy.prototype.getTicket = function(id) {
    return this.client.get('ticket.json/' + id + '/');
};

Ticksy.prototype.getTicketComments = function(id) {
    return this.client.get('ticket-comments.json/' + id + '/');
};

Ticksy.prototype.getMyTickets = function() {
    return this.client.get('my-tickets.json');
};

module.exports = Ticksy;