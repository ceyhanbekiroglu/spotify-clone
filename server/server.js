const express = require('express')
const spotifyWebApi = require('spotify-web-api-node')

const app = express()

app.post('/login', (req, res) => {
	const spotifyApi = new spotifyWebApi({
		redirectUri: 'localhost:3000',
		clientId: '',
		clientSecret: '',
	})
})
