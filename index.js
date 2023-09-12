const axios = require('axios');
const fs = require('fs');

function parseJSON() {
	axios.get('https://my-json-server.typicode.com/vladmany/nodejs-modules-work/users')
		.then(response => {
			const json = JSON.stringify(response.data);
			fs.writeFile('result.txt', json, (err) => {
				if (err) console.log('write file error');
			})
		})
		.catch(err => console.log(err));
}

module.exports = {
	parseJSON
}
