//module.exports = 
function toReadable (number) {
    let first = {
        0: 'zero',
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine'
    };
    let second = {
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen'
    };
    let third = {
        10: 'ten',
        20: 'twenty',
        30: 'thirty',
        40: 'forty',
        50: 'fifty',
        60: 'sixty',
        70: 'seventy',
        80: 'eighty',
        90: 'ninety'
    };
    let forth = {
        100: 'hundred',
        1000: 'thousand'
    };
    number = String(number);
    let counter = '';

    let len1 = function() { 
        for (let key in first) {
            if (key == Number(number)) return first[key];
            counter += first[key];
        }
    }
    let len2 = function() {
        for (let key1 in third) {
            if (key1 == Number(number)) return third[key1];
            counter += third[key1];
        }
    }
    let len3 = function() {
        for (let key2 in second) {
            if (key2 == Number(number)) return second[key2];
            counter += second[key2];
        }
    }
    let len4 = function() {
        let e = number.slice(0,1);
        for (let key in third) {
            let c = e + '0';
            if (key == Number(c)) return third[key];
            counter += third[key];
        } 
    }
    let len8 = function() {
        let h = number.slice(1);
        for (let key in first) {
            if (key == Number(h)) return first[key];
            counter += first[key];
        } 
    }
    let len5 = function() {
        for (let key1 in forth) {
            if (key1 == Number(number)) return forth[key1];
            counter += forth[key1];
        }
    }
    let len6 = function() {
        let F = number.slice(0,1);
            for (let key in first) {
                if (Number(F) == key) return first[key];
                counter += first[key];
            }
    }


    let len9 = function() {
       
            let n = '';
            let z = number.slice(0,1);
            n += len4(z);
            let q = '';
            let m = number.slice(1);
            q += len6(m);
            counter += n + q;

    }



    if (number.length == 1) return len1(number);
    if (number.length == 2) {
        if (Number(number) % 10 == 0) return len2(number)
        if (Number(number) > 10 && Number(number) < 20) return len3(number)
        if (Number(number) > 20) return len4(number) + " " + len8(number)
    }
    if (number.length == 3) {
        if (Number(number) == 100) return len5(number)
        if (Number(number) % 100 == 0 && Number(number) !== 100) return len6(number) + " hundred"
        if (Number(number) % 10 == 0) return len9(number)
    }
    if (number.length == 4) {
        if (Number(number) == 1000) return len5(number)
    }
      
}


console.log(toReadable (330))
