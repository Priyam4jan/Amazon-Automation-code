let str = "apple banana apple orange banana apple";

let arr = str.split(" ");

let count = {};

for (let i = 0; i < arr.length; i++) {

    if (count[arr[i]]) {
        count[arr[i]]++;
    } else {
        count[arr[i]] = 1;
    }
}

for (let word in count) {
    if (count[word] > 1) {
        console.log(word + " : " + count[word]);
    }
}