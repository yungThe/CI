let reverseString = (string) => {
    return string.split('').reverse().join('');
}
console.log(reverseString("NguyenTheDung"))


const array = [0, 1, 2, 2, 3, 4, 5, 5, 6, 7, 8, 9, 9]
let uniqueArr = (arr) => {
    let unique = new Set(arr);
    return [...unique];
}
console.log(uniqueArr(array))



let most = (array) => {
    let value = uniqueArr(array), count = [];
    for (let i = 0; i < value.length; i++) {
        count[i] = array.join('').split(value[i]).length - 1;
    }
    let maxIndex = 0, max = count[0];
    for (let i = 1; i < count.length; i++) {
        if (count[i] > max) {
            max = count[i];
            maxIndex = i;
        }
    }
    return { value: value[maxIndex], count: max };
}

console.log(most([1, 2, 3, 5, 6, 4, 2, 1, 6, 3, 5, 3]));