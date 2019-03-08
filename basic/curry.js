const countdown = (value, fn, delay = 1000) => {
	fn(value);
	return value > 0
		? setTimeout(() => countdown(value - 1, fn), delay)
		: value;
};
const log = value => console.log(value);
countdown(10, log);

const movies = [
	{
		id: 1,
		name: 'Matrix'
	},
	{
		id: 2,
		name: 'Star Wars'
	},
	{
		id: 3,
		name: 'The wolf of Wall Street'
	}
];

movies.map(movie => movie.id); //should return [ 1, 2, 3 ]

const series = [
	{
		id: 4,
		name: 'South Park'
	},
	{
		id: 5,
		name: 'The Simpsons'
	},
	{
		id: 6,
		name: 'The Big Bang Theory'
	}
];

series.map(serie => serie.id); //should return [ 4, 5, 6 ]

const get = property => object => object[property];
const getId = get('id');

movies.map(getId); //should return [ 1, 2, 3 ]
series.map(getId); //should return [ 4, 5, 6 ]

const getName = get('name');
movies.map(getName); //should return [ 'Matrix', 'Star Wars', 'The wolf of Wall Street' ]
