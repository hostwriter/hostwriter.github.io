require('@babel/register')();
var m = require('mithril')

var jsdom = require("jsdom")
var dom = new jsdom.JSDOM("", {
    // So we can get `requestAnimationFrame`
    pretendToBeVisual: true,
})

// Fill in the globals Mithril needs to operate. Also, the first two are often
// useful to have just in tests.
//global.window = dom.window
global.windaow = Object.assign(require('mithril/test-utils/domMock.js')(), require('mithril/test-utils/pushStateMock')())
global.document = dom.window.document
global.requestAnimationFrame = dom.window.requestAnimationFrame

// Require Mithril to make sure it loads properly.
require("mithril")

// Mock local storage
global.localStorage = (function() {
    var store = {};

    return {
        getItem: function(key) {
            return store[key] || null;
        },
        setItem: function(key, value) {
            store[key] = value.toString();
        },
        clear: function() {
            store = {};
        }
    };

})();

// And now, make sure JSDOM ends when the tests end.
o.after(function() {
    dom.window.close()
})