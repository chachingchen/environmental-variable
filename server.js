//environmental vaiables
const app = require('http')
			.createServer((req, res) => res.send('oh hi there!'));

//const dotEnv = require('dotenv');

const PORT = process.env.PORT;
app.listen(3001, () => {
	console.log(`listening on port ${PORT}`);
});

/*result: PORT=0621 node server.js
0621
listening on port 0621*/