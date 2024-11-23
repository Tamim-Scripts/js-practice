//Average of odd number

function oddAvg(numbers){
    const odds = [];
    for(const number of numbers){
        if(number % 2 == 1){
            //console.log(number);
            odds.push(number);
        }

    }
    let sum = 0;
    for(const number of odds){
        sum = sum + number;
    }
    const count = odds.length;
    console.log(sum, count);
    const avg = sum / count;
    return avg;

}

const numbers = [12, 52, 65, 9, 34, 99];
const avg = oddAvg(numbers);
console.log('Average of the odd numbers is: ', avg);

