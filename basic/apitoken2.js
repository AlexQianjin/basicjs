var https = require('https');
var fs = require('fs');
var rootCas = require('ssl-root-cas/latest').create();

const options = {
	pfx: fs.readFileSync('certificates/wildcard.cloudapp.net.pfx'),
	passphrase: 'W0nderware'
};

var url = 'https://localhost:44377/api/token';
// var url = 'https://www.baidu.com';

https.globalAgent.options.ca = rootCas;

https.get(url, (res) => {
	console.log(res);

	res.on('data', (d) => {
		console.log(d);
	});
}).on('error', (e) => {
	console.log(e);
});