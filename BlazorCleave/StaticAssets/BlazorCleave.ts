import Cleave from 'cleave.js';

export default class BlazorCleave {
    static formatPhoneNumber(elem: Element, countryCode: string) {
        let cleave = new Cleave((elem) as any, {
            phone: true,
            phoneRegionCode: countryCode
        });
    }

    static formatDate(elem: Element, delimiter: string, dateFormat: string[]) {
        let cleave = new Cleave((elem) as any, {
            date: true,
            delimiter: delimiter,
            datePattern: dateFormat
        });
    }

    static formatTime(elem: Element, timeFormat: string[]) {
        let cleave = new Cleave((elem) as any, {
            time: true,
            timePattern: timeFormat
        });
    }

    static formatCreditCard(elem: Element) {
        let cleave = new Cleave((elem) as any, {
            creditCard: true
        });
    }
    static formatNumeral(elem: Element, numeralType: any) {
        let cleave = new Cleave((elem) as any, {
            numeral: true,
            numeralThousandsGroupStyle: numeralType
        });
    }
};