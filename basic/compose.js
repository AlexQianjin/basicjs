const users = [
	{ name: 'Jeff', age: 14 },
	{ name: 'Jack', age: 18 },
	{ name: 'Milady', age: 22 }
];

const compose = (...functions) => args =>
	functions.reduceRight((arg, fn) => fn(arg), args);

const filter = cb => arr => arr.filter(cb);
const map = cb => arr => arr.map(cb);

let result = compose(
	map(u => u.name),
	filter(u => u.age >= 18)
)(users); //["Jack", "Milady"]

console.log(result);

const add = (...params) => console.log(params);

add(1, 2, 3);

const reduce = cb => arr => arr.reduce(cb); //Just currify the reduce function

const mapWords = map(() => 1);
const reduceWords = reduce((acc, curr) => (acc += curr));

let r = compose(
	reduceWords,
	mapWords
)(['foo', 'bar', 'baz']); //3

console.log(r);
