function getJoke() {
	var https = require('https');
  
	return new Promise((resolve, reject) => {
		https.get('https://api.chucknorris.io/jokes/random', (res) => {
		  var { statusCode } = res;
		  var contentType = res.headers['content-type'];
  
		  let error;
  
		  if (statusCode !== 200) {
			error = new Error('Request Failed.\n' +
			  `Status Code: ${statusCode}`);
		  } else if (!/^application\/json/.test(contentType)) {
			error = new Error('Invalid content-type.\n' +
			  `Expected application/json but received ${contentType}`);
		  }
  
		  if (error) {
			console.error(error.message);
			// consume response data to free up memory
			res.resume();
		  }
  
		  res.setEncoding('utf8');
		  let rawData = '';
  
		  res.on('data', (chunk) => {
			rawData += chunk;
		  });
  
		  res.on('end', () => {
			try {
			  const parsedData = JSON.parse(rawData);
			  resolve(parsedData);
			} catch (e) {
			  reject(e.message);
			}
		  });
		}).on('error', (e) => {
		  reject(`Got error: ${e.message}`);
		});
  
	  });
	}

function test() {
    var a = getJoke()
    .then(response => {
      return "hgello";
    })
    return a;
}

module.exports.Joke = function Joke() {
    var data = test();
    console.log(data);
    return data;
}