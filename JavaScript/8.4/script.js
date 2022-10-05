
const array = ["Hello", "Good Day", "Your Welcome", "hotdog", "hamburgers"];
let counter = {};
for (element of array) {
    if (counter[element]) {
        counter[element] += 1;
    } else {
        counter[element] = 1;
    }
};
const newPropertiy = {counter:elemant}
console.log(newPropertiy);

