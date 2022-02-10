module.exports = function toReadable (number) {
    let object1 = {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine",
        10: "ten",
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen",
        20: "twenty",
        30: "thirty",
        40: "forty",
        50: "fifty",
        60: "sixty",
        70: "seventy",
        80: "eighty",
        90: "ninety"
      }
      
      if(number === 0) {
          return 'zero';
      }

      number = String(number);
    
      if(number.length == 1) {
          for(let key in object1) {
              if(number == key) {
                  number = object1[key];
                  return number;
              }
          }
      }
    
      if(number.length == 2 && +number >= 20) {
        let firstDigit = number.slice(0,1) + "0";
        let secondDigit = number.slice(1);
        let arr = [];
        for(let key in object1) {
            if(firstDigit == key) {
                firstDigit = object1[key];  
                arr.push(firstDigit);
            }
        }
    
        for(let key in object1) {
            if(secondDigit == key) {
                secondDigit = object1[key];  
                arr.push(secondDigit);
            }
        }
        arr = arr.join(" ");
        return arr;
      } else if(number.length == 2 && +number < 20) {
        for(let key in object1) {
            if(number == key) {
                number = object1[key];  
                return number;
            }
        }
      }
    
      if(number.length == 3) {
          let firstD = number.slice(0,1);
          let arr2 = [];
          for(let key in object1) {
              if(firstD == key) {
                  firstD = object1[key];
                  arr2.push(firstD);
                  arr2.push('hundred');
              }
          }
          let nextD = number.slice(1);
          
  
          if(+nextD >= 10 && +nextD < 20) {
              for(let key in object1) {
                  if(nextD == key) {
                      nextD = object1[key];
                      arr2.push(nextD);
                  }
              }
          } else if(+nextD >= 20) {
              let nextD1 = nextD.slice(0,1) + "0";
              let nextD2 = nextD.slice(1);
              for(let key in object1) {
                  if(nextD1 == key) {
                      nextD1 = object1[key];  
                      arr2.push(nextD1);
                  }
              }
          
              for(let key in object1) {
                  if(nextD2 == key) {
                      nextD2 = object1[key];  
                      arr2.push(nextD2);
                  }
              }
          } else if(+nextD < 10) {
              for(let key in object1) {
                  if(nextD.slice(1) == key) {
                      nextD = object1[key];
                      arr2.push(nextD);
                  }
              }
          }
  
          return arr2.join(' ');
  
      }
}
