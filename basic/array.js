// let index = ['Red', 'Green', 'Blue'].indexOf('Blue') !== -1;
// console.log(index);

var array1 = [1, 4, 9, 16];

// pass a function to map
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]

var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);

let users = [
	{
		bio: null,
		email: 'user@domain.com',
		firstname: 'Anna',
		id: 318,
		lastAvatar: null,
		lastMessage: null,
		lastname: 'Nickson',
		nickname: 'anny'
	},
	{
		bio: null,
		email: 'user@domain.com',
		firstname: 'Tnna',
		id: 318,
		lastAvatar: null,
		lastMessage: null,
		lastname: 'Nickson',
		nickname: 'anny'
	},
	{
		bio: null,
		email: 'user@domain.com',
		firstname: 'Eric',
		id: 318,
		lastAvatar: null,
		lastMessage: null,
		lastname: 'Nickson',
		nickname: 'anny'
	}
];

users.sort(function(a, b) {
	if (a.firstname < b.firstname) {
		return -1;
	}
	if (a.firstname > b.firstname) {
		return 1;
	}
	return 0;
});

console.log(users);

