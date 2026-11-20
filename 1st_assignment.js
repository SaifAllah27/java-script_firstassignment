//Part 1 
//Q1 
var num = "123";
var result = Number(num) + 7;
console.log(result);
//Q2
function checkfalsy(value) {
    if (value == 1) {
        return "valid";
    }
    else {
        return "invalid";
    }
}

console.log(checkfalsy(0));
//Q3
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}
//Q4 
var arrnumbers = [1, 2, 3, 4, 5];

var even = arrnumbers.filter(function(num) {
    return (num % 2 === 0);
});

console.log(even);
//Q5
var first = [1, 2, 3];
var sec = [4, 5, 6];

var total = [...first,...sec];

console.log(total);
//Q6
function theday(day) {
    switch (day) {
        case 1:
        return "sunday";
        case 2: 
        return "monday";
        case 3: 
        return "tuesday";
        case 4: 
        return "wednesday";
        case 5: 
        return "thursday";
        case 6: 
        return "friday";
        case 7: 
        return "saturday";
    }
}

console.log(theday(2));
//Q7
var abc = ["a", "ab", "abc"];

var lengths = abc.map(function(count) {
    return count.length;
});

console.log(lengths);
//Q8
function divisiblenum(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "divisible by both";
    }
    return "not divisible by both";
}
console.log(divisiblenum(15));
//Q9
var square = num => num * num;
console.log(square(5));
//Q10
var person = {name: "John", age: 25};
function info({ name, age }) {
    return name + " is " + age + " years old";    
}
console.log(info(person));
//Q11
function sumofnumbers(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}

console.log(sumofnumbers(1, 2, 3, 4, 5));
//Q12   (ده بيأثر على الكود بيخليه يعمل رن في 3 ثواني (مش فاهم السؤال اوي))
function getSuccess() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("Success");
        }, 3000);
    });
}
getSuccess().then(function(result) {
    console.log(result);
});
//Q13
function largenum(numbers) {
    var largest = numbers[0];
    for (var i = 0; i < numbers.length; i++) {
        if (numbers[i] > largest) {
            largest = numbers[i];
        }
    }
    return largest;
}
console.log(largenum([1, 3, 7, 2, 4]));
//Q14
function getkeys(obj) {
    return Object.keys(obj);
}

console.log(getkeys({ name: "John", age: 30 }));
//Q15
var sentence = "The quick brown fox";

var arrwords = sentence.split(" ");

console.log(arrwords);
//PART 2
//Q1 
//the main difference between for each and for of is that for each is used to execute function for each element in array
//while for of we could use break and continue in it 
//Q2 
// the hoisting is that when the javascript moves the function declaration up before executing the code 
// while TDZ is the time before the declaration of the variable
//Q3 
// the (===) compares the value and data type without convertion while (==) compares the value and data type with convertion
//Q4
//we use try catch to handle errors as the try have the code that we think might have an error and the catch block 
//handles the error when this happens and it is importat because in async operation it handles error 
//Q5
//the conversion is when we change the data type by ourselves and the type coercion the change is done by javascript 