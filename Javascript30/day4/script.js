// My code

// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
let after18 = inventors.filter((i)=>(i.year>1800))
console.table(after18);

// Array.prototype.map()
// 2. Give us an array of the inventors first and last names
let fullName = inventors.map(i => (`${i.first} ${i.last}`));
console.log(fullName);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
let reversedOrdered = inventors.sort((a,b)=>((a.year<b.year)? 1: -1));
console.table(reversedOrdered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live all together?
/*
let totalYearLiveAll = 0;
for(let i=0;i<inventors.length;i++){
    totalYearLiveAll += (inventors[i].passed - inventors[i].year);
}
console.log(totalYearLiveAll);
*/
// Alternate way of above program:
let totalYearLiveAll = inventors.reduce((tot,inventor)=>{
    return tot += (inventor.passed - inventor.year);
},0);
console.log(totalYearLiveAll);

// 5. Sort the inventors by years lived
let sortByLive = inventors.sort((a,b)=>{
    let first= a.passed - b.year;
    let second= b.passed - b.year;
    (first>second)?1:-1;
});
console.table(sortByLive);
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// do it on above website devloper tool
/*
let cat = document.querySelector('.mw-category');
let links = Array.from(cat.querySelectorAll('a'));
console.log(links);
let de = links.map((i)=>i.textContent);
let den = de.filter(i => i.includes('de'));
*/

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// 7. sort Exercise
// Sort the people alphabetically by last name
let alp = people.sort((first,last) => {
    let [alast,afirst] = first.split(", ");
    let [blast,bFirst] = last.split(", ");
    (alast>blast) ? 1: -1;
});
console.log(alp);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

let repeat = data.reduce((obj,item)=>{
    if(!obj[item]){
        obj[item]=0;
    }
    obj[item]++;
    return obj;
},{});
console.log(repeat);


/* source code
// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Some data we can work with

const inventors = [
{ first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
{ first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
{ first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
{ first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
{ first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
{ first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
{ first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
{ first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
{ first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
{ first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
{ first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));

console.table(fifteen);

// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
// const ordered = inventors.sort(function(a, b) {
//   if(a.year > b.year) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// 5. Sort the inventors by years lived
const oldest = inventors.sort(function(a, b) {
const lastInventor = a.passed - a.year;
const nextInventor = b.passed - b.year;
return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
const [aLast, aFirst] = lastOne.split(', ');
const [bLast, bFirst] = nextOne.split(', ');
return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];

const transportation = data.reduce(function(obj, item) {
if (!obj[item]) {
    obj[item] = 0;
}
obj[item]++;
return obj;
}, {});

console.log(transportation);
*/