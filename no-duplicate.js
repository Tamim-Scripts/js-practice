//array has some duplicated element remove

const biriyanikhor = ['tamim', 'ahmed', 'iqbal', 'tamim', 'ahmed'];

 function noDuplicate(array){
    const unique = [];
    for(const item of array){
        if (unique.includes(item)== false){
            unique.push(item);
        }
    }
    return unique;
 }

 const uniqueArray = noDuplicate(biriyanikhor);
 console.log(uniqueArray);