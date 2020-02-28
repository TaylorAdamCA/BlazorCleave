var BlazorCleave = {
    formatPhoneNumber: function (elem, countryCode) {
        new Cleave(elem, {
            phone: true,
            phoneRegionCode: countryCode
        });
    },

    formatDate: function (elem, delimiter, dateFormat) {
        new Cleave(elem, {
            date: true,
            delimiter: delimiter,
            datePattern: dateFormat
        });
    },

    formatTime: function (elem, timeFormat) {
        new Cleave(elem, {
            time: true,
            timePattern: timeFormat
        });
    },

    formatCreditCard: function (elem) {
        new Cleave(elem, {
            creditCard: true
        });
    }
};