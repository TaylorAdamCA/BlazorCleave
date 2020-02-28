"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Cleave = require("cleave.js");
var BlazorCleave = /** @class */ (function () {
    function BlazorCleave() {
    }
    BlazorCleave.formatPhoneNumber = function (elem, countryCode) {
        var cleave = new Cleave((elem), {
            phone: true,
            phoneRegionCode: countryCode
        });
    };
    BlazorCleave.formatDate = function (elem, delimiter, dateFormat) {
        var cleave = new Cleave((elem), {
            date: true,
            delimiter: delimiter,
            datePattern: dateFormat
        });
    };
    BlazorCleave.formatTime = function (elem, timeFormat) {
        var cleave = new Cleave((elem), {
            time: true,
            timePattern: timeFormat
        });
    };
    BlazorCleave.formatCreditCard = function (elem) {
        var cleave = new Cleave((elem), {
            creditCard: true
        });
    };
    return BlazorCleave;
}());
exports.default = BlazorCleave;
;
