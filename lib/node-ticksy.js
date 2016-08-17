var TicksyClient = require('./ticksy-client');

var Ticksy = function(domain, key) {
    this.client = new TicksyClient(domain, key);
};

module.exports = Ticksy;