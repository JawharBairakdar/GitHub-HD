

// Q.1
let numbers = [1, 2, 3, 4];
let newNumbers = [];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 !== 0) {
        newNumbers.push(numbers[i] * 2);
    }
}
// console.log("The doubled numbers are", newNumbers); // [2, 6]

let something = numbers.filter(item => (item % 2 !== 0))
    .map(item => (item * 2))
// console.log(something)

// Q.2
let monday = [
    { name: 'Write a summary HTML/CSS', duration: 180 },
    { name: 'Some web development', duration: 120 },
    { name: 'Fix homework for class10', duration: 20 },
    { name: 'Talk to a lot of people', duration: 200 }
];
let tuesday = [
    { name: 'Keep writing summary', duration: 240 },
    { name: 'Some more web development', duration: 180 },
    { name: 'Staring out the window', duration: 10 },
    { name: 'Talk to a lot of people', duration: 200 },
    { name: 'Look at application assignments new students', duration: 40 }
];
// Collect two days' worth of tasks.
let tasks = monday.concat(tuesday);

// Convert the task durations to hours, instead of minutes.
tasks.map(item => { return item.duration /= 60 })
// Filter out everything that took two hours or more
let filterd = tasks.filter(item => {
    return item.duration >= 2
})
// Multiply the each duration by a per-hour rate for billing (you can decide yourself what Maartje should make per hour) and sum it all up.
const maartjsBillsPerHour = 23
let maartjsBills = tasks.reduce((item, value) => item + (value.duration*maartjsBillsPerHour) , 0)
// Output a formatted Euro amount.
console.log("In Just Two Days", maartjsBills, "€")
console.log()
console.log("Tada", filterd)
console.log()
console.log(tasks)