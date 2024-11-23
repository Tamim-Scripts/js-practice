const heights = [65, 55, 80, 62, 45];

function getMax(numbers){
    let max = numbers[0];
    for (const num of numbers){
        
        if(num > max){
            max = num;
        }
    }
    return max;
}

const max = getMax(heights);
console.log('MAX VALUE IS:', max);